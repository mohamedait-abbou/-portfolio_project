import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date("2026-11-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
