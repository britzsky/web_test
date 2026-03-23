import { NextResponse } from "next/server";

type BlogItem = {
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

const withImages = async (items: BlogItem[]) => {
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
            cache: "no-store",
            headers: {
              // Mobile UA tends to yield HTML with og:image for Naver blogs.
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

const parseRssItems = (xml: string): BlogItem[] => {
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get("blogId") || "far_rain";
  const rssUrl = `https://rss.blog.naver.com/${blogId}.xml`;

  try {
    const response = await fetch(rssUrl, { cache: "no-store" });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch RSS feed." },
        { status: response.status }
      );
    }
    const xml = await response.text();
    const items = await withImages(parseRssItems(xml));
    return NextResponse.json({ blogId, items });
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while fetching RSS feed." },
      { status: 500 }
    );
  }
}
