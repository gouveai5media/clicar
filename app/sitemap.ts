import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clicair.com.br";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/sobre-nos`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contato`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/servicos`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((service) => ({ url: `${base}/servicos/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
