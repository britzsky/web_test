import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo/favicon-32x32.jpg",
  },
};

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
