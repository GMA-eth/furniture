import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "furniture"; // change to your actual repo name

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
