import fs from "node:fs/promises";
import path from "node:path";

const IMAGE_NAME_REGEX = /\.(jpg|jpeg|png|webp|svg|ico)$/i;

const sortNames = (a: string, b: string) =>
  a.localeCompare(b, "ko", {
    numeric: true,
    sensitivity: "base",
  });

const toWebPath = (segments: string[], fileName: string) =>
  `/${["images", ...segments, fileName].join("/")}`;

const readImageNames = async (segments: string[]) => {
  const dirPath = path.join(process.cwd(), "public", "images", ...segments);
  const fileNames = await fs.readdir(dirPath);

  return fileNames.filter((fileName) => IMAGE_NAME_REGEX.test(fileName)).sort(sortNames);
};

const findMatchingImage = (fileNames: string[], prefixes: string[]) => {
  const normalizedPrefixes = prefixes.map((prefix) => prefix.toLowerCase());

  for (const prefix of normalizedPrefixes) {
    const exact = fileNames.find(
      (fileName) => path.parse(fileName).name.toLowerCase() === prefix
    );
    if (exact) {
      return exact;
    }
  }

  for (const prefix of normalizedPrefixes) {
    const startsWith = fileNames.find((fileName) =>
      path.parse(fileName).name.toLowerCase().startsWith(prefix)
    );
    if (startsWith) {
      return startsWith;
    }
  }

  return null;
};

const resolveImage = async (
  segments: string[],
  prefixes: string[],
  fallback: string
) => {
  try {
    const fileNames = await readImageNames(segments);
    const match = findMatchingImage(fileNames, prefixes);
    return match ? toWebPath(segments, match) : fallback;
  } catch {
    return fallback;
  }
};

export type SiteImagePaths = {
  favicon: string;
  mainLogo: string;
  cityLogo: string;
  hero: string;
  eventCard: string;
};

export const getSiteImagePaths = async (): Promise<SiteImagePaths> => {
  const [favicon, mainLogo, cityLogo, hero, eventCard] = await Promise.all([
    resolveImage(["logo"], ["afavicon", "favicon"], "/images/logo/favicon.jpg"),
    resolveImage(
      ["logo"],
      ["alogo_jahwal", "alogojahwal", "logo_jahwal", "logojahwal"],
      "/images/logo/logojahwal.png"
    ),
    resolveImage(["logo"], ["anamyang", "namyang"], "/images/logo/namyang.svg"),
    resolveImage(["info"], ["anamyangcov", "namyangcov"], "/images/info/namyangcov.jpg"),
    resolveImage(["test4"], ["at2", "t2"], "/images/test4/t2.jpg"),
  ]);

  return {
    favicon,
    mainLogo,
    cityLogo,
    hero,
    eventCard,
  };
};
