import { NextResponse } from "next/server";

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) {
    return NextResponse.json(
      { error: "Missing Instagram access token." },
      { status: 500 }
    );
  }

  const meUrl =
    "https://graph.instagram.com/me" +
    "?fields=id,username,media_count" +
    `&access_token=${accessToken}`;
  const meResponse = await fetch(meUrl, { cache: "no-store" });
  if (!meResponse.ok) {
    const errorText = await meResponse.text();
    return NextResponse.json(
      { error: "Failed to fetch Instagram user.", details: errorText },
      { status: meResponse.status }
    );
  }

  const meData = await meResponse.json();
  const mediaUrl =
    `https://graph.instagram.com/${meData.id}/media` +
    "?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp" +
    "&limit=8" +
    `&access_token=${accessToken}`;

  const mediaResponse = await fetch(mediaUrl, { cache: "no-store" });
  if (!mediaResponse.ok) {
    const errorText = await mediaResponse.text();
    return NextResponse.json(
      { error: "Failed to fetch Instagram media.", details: errorText },
      { status: mediaResponse.status }
    );
  }

  const mediaData = await mediaResponse.json();
  return NextResponse.json({ user: meData, data: mediaData.data ?? [] });
}
