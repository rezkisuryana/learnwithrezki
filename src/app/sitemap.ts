import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", siteConfig.siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
