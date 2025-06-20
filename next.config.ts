import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  //output: "standalone",
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
