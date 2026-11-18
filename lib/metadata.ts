import type { Metadata } from "next";
import type { Dictionary } from "@/content/types";
import { routes, site } from "@/lib/site";

export function buildMetadata(dict: Dictionary): Metadata {
  const path = routes[dict.locale];
  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Francisco Santana", url: site.social.linkedin }],
    alternates: {
      canonical: path,
      languages: { "pt-BR": routes.pt, en: routes.en, "x-default": routes.pt },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: dict.meta.ogLocale,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og.png"],
    },
    icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  };
}

export function jsonLd(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: new URL(routes[dict.locale], site.url).toString(),
    description: dict.meta.description,
    email: site.email,
    telephone: `+${site.whatsapp.number}`,
    founder: {
      "@type": "Person",
      name: "Francisco Santana",
      jobTitle: dict.founder.role,
      sameAs: [site.social.linkedin, site.social.github],
    },
    logo: new URL("/brand/fs-mark-black.svg", site.url).toString(),
    areaServed: ["BR", "Worldwide"],
    knowsLanguage: ["pt-BR", "en"],
    sameAs: Object.values(site.social),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.services.title,
      itemListElement: dict.services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };
}
