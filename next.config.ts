import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/fish-and-shrimp",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
