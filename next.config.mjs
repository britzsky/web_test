/**  @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "blogthumb.pstatic.net",
            },
        ],
    },
};

export default nextConfig;
