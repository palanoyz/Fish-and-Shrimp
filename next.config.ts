import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/fish-and-shrimp",
  assetPrefix: "/fish-and-shrimp",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
