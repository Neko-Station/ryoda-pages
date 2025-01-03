import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
};
module.exports = {
  images: {
    domains: ['github.com'],
  },
};

export default nextConfig;
