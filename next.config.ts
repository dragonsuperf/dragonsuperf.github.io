import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProduction ? "https://dragonsuperf.github.io/" : "/",
};

export default nextConfig;
