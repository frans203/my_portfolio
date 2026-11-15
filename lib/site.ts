// Dados globais do site. Ajuste aqui quando o domínio/contatos mudarem.
export const site = {
  // Domínio de produção (Netlify: site "fransportfolio"). Usado em canonical, sitemap e Open Graph.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fsdev.site",
  name: "Francisco Santana Soluções Digitais",
  shortName: "Francisco Santana",
  email: "franciscosantana203@gmail.com",
  social: {
    github: "https://github.com/frans203",
    linkedin: "https://www.linkedin.com/in/francisco-santana-63a958201/",
    instagram: "https://www.instagram.com/santana_203/",
  },
  clients: [
    { name: "Pod1um", logo: "/clients/pod1um.png", width: 1280, height: 271 },
    { name: "Halavanca BJJ", logo: "/clients/halavanca.jpg", width: 955, height: 955 },
    { name: "BK Company", logo: "/clients/bk-company.jpg", width: 200, height: 200 },
  ],
} as const;

export const routes = { pt: "/", en: "/en/" } as const;
