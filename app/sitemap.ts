import type { MetadataRoute } from "next";
import { routes, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    "pt-BR": new URL(routes.pt, site.url).toString(),
    en: new URL(routes.en, site.url).toString(),
  };
  return [
    { url: languages["pt-BR"], changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: languages.en, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
