import Page from "./index";

type BoardItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  imageUrl?: string;
};

const stripCdata = (value: string) =>
  value.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "");

const stripTags = (value: string) => value.replace(/<[^>]+>/g, "").trim();

const extractTag = (block: string, tag: string) => {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "i"));
  return match ? stripCdata(match[1].trim()) : "";
};

const extractOgImage = (html: string) => {
  const ogMatch = html.match(
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i
  );
  if (ogMatch?.[1]) {
    return ogMatch[1];
  }
  const twitterMatch = html.match(
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i
  );
  if (twitterMatch?.[1]) {
    return twitterMatch[1];
  }
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  return imgMatch?.[1] || "";
};

const extractFirstImageFromDescription = (raw: string) => {
  const match = raw.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  return match?.[1] || "";
};

const withImages = async (items: BoardItem[]) => {
  const limited = items.slice(0, 4);
  const enriched = await Promise.all(
    limited.map(async (item) => {
      const mobileLink = item.link.includes("blog.naver.com")
        ? item.link.replace("blog.naver.com", "m.blog.naver.com")
        : item.link;
      const candidates = [mobileLink, item.link];

      try {
        for (const url of candidates) {
          const res = await fetch(url, {
            headers: {
              "user-agent":
                "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
            },
          });
          if (!res.ok) {
            continue;
          }
          const html = await res.text();
          const imageUrl = extractOgImage(html);
          if (imageUrl) {
            return { ...item, imageUrl };
          }
        }
        return item;
      } catch {
        return item;
      }
    })
  );
  const rest = items.slice(limited.length);
  return [...enriched, ...rest];
};

const parseRssItems = (xml: string): BoardItem[] => {
  const items = xml.match(/<item>([\s\S]*?)<\/item>/gi) ?? [];
  return items.slice(0, 6).map((item) => {
    const title = stripTags(extractTag(item, "title"));
    const link = extractTag(item, "link");
    const pubDate = extractTag(item, "pubDate");
    const rawDescription = extractTag(item, "description");
    const imageUrl = extractFirstImageFromDescription(rawDescription);
    const description = stripTags(rawDescription);
    return imageUrl
      ? { title, link, pubDate, description, imageUrl }
      : { title, link, pubDate, description };
  });
};

const getBoardPosts = async () => {
  try {
    const response = await fetch("https://rss.blog.naver.com/far_rain.xml");
    if (!response.ok) {
      return [];
    }
    const xml = await response.text();
    return withImages(parseRssItems(xml));
  } catch {
    return [];
  }
};

export default async function RoutePage() {
  const initialBoardPosts = await getBoardPosts();

  return <Page initialBoardPosts={initialBoardPosts} />;
}
