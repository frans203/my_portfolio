export type Locale = "pt" | "en";

export type Dictionary = {
  locale: Locale;
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
  };
  nav: {
    about: string;
    services: string;
    agents: string;
    process: string;
    cta: string;
    switchLanguage: string;
    switchLanguageLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineMuted: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    globeCaption: string;
  };
  clients: {
    eyebrow: string;
    title: string;
    titleMuted: string;
    items: { name: string; role: string; region: string }[];
  };
  founder: {
    eyebrow: string;
    name: string;
    role: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
    linkedin: string;
    cta: string;
  };
  agent: {
    eyebrow: string;
    title: string;
    description: string;
    nodes: {
      sources: string;
      sourcesDetail: string;
      agent: string;
      agentDetail: string;
      actions: string[];
    };
  };
  services: {
    eyebrow: string;
    title: string;
    deliverLabel: string;
    items: { title: string; description: string }[];
  };
  versatility: {
    eyebrow: string;
    question: string;
    answer: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  finalCta: {
    title: string;
    description: string;
    direct: string;
    cta: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    company: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    orEmail: string;
  };
  footer: {
    tagline: string;
    rights: string;
    contact: string;
  };
};
