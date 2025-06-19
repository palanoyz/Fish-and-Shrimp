import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/fish-and-shrimp",
  assetPrefix: "/fish-and-shrimp",
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/fish-and-shrimp",
  },
};

export default nextConfig;
