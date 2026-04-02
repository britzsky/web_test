import type { Metadata } from "next";
import "./globals.css";
import { getSiteImagePaths } from "../lib/site-images";

export async function generateMetadata(): Promise<Metadata> {
  const imagePaths = await getSiteImagePaths();

  return {
    icons: {
      icon: imagePaths.favicon,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <title>남양주축구단 협동조합</title>
      <body>{children}</body>
    </html>
  );
}
