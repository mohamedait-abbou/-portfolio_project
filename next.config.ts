import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || "",
  // Exposed to client components so <Image src> can be prefixed explicitly.
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH || "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
