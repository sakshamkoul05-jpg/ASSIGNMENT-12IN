import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable the App Router (default in Next 15)
  experimental: {
    appDir: true,
    serverActions: true,
  },
  // Optimize images via the built‑in Image component
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*" }],
  },
  // Enable absolute imports using @/*
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "./"),
    };
    return config;
  },
};

export default nextConfig;
