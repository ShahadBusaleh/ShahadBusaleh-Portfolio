import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/Shahad-Portfolio1"); empty locally.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
