import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://clicair-premium.gouvea47.chatgpt.site/sitemap.xml",
  };
}
