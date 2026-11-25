// Dados globais do site. Ajuste aqui quando o domínio/contatos mudarem.
export const site = {
  // URL de produção (Cloudflare, Worker "portfolio"). Usado em canonical, sitemap e Open Graph.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fsdev.site",
  name: "Francisco Santana Soluções Digitais",
  shortName: "Francisco Santana",
  email: "franciscosantana203@gmail.com",
  whatsapp: {
    number: "5583996853565", // formato wa.me: DDI + DDD + número, só dígitos
    display: "+55 (83) 99685-3565",
  },
  social: {
    github: "https://github.com/frans203",
    linkedin: "https://www.linkedin.com/in/francisco-santana-63a958201/",
  },
  clients: [
    { name: "Pod1um", logo: "/clients/pod1um.png", width: 1280, height: 271 },
    { name: "Halavanca BJJ", logo: "/clients/halavanca.jpg", width: 955, height: 955 },
    { name: "BK Company", logo: "/clients/bk-company.jpg", width: 200, height: 200 },
  ],
} as const;

/** Link do WhatsApp (abre o app/WhatsApp Web) com a mensagem já preenchida. */
export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const routes = { pt: "/", en: "/en/" } as const;
