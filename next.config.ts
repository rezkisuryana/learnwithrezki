import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "belajar-coding-bareng-rezki.vercel.app",
          },
        ],
        destination: "https://learnwithrezki.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [75, 88],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
