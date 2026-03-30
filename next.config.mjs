/**  @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "blogthumb.pstatic.net",
            },
        ],
    },
};

export default nextConfig;
