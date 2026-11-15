import type { Dictionary } from "./types";

// Source: docs/copy.md (section 3 — EN-US). Sections missing from the copy
// (logos, versatility, process, FAQ, UI labels) were adapted from the PT-BR version.
export const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "Francisco Santana Digital Solutions — Software engineering, AI & automation",
    description:
      "High-performance software engineering, custom AI agents and intelligent automation. We build web and mobile applications, integrate data and maintain software for companies worldwide.",
    keywords: [
      "software development company",
      "custom software development",
      "AI agents",
      "workflow automation",
      "hire full-stack developer",
      "React Native developer",
      "Next.js",
      "Node.js",
      "nearshore Brazil",
    ],
    ogLocale: "en_US",
  },
  nav: {
    about: "About",
    services: "Services",
    agents: "AI Agents",
    process: "How we work",
    cta: "Book a call",
    switchLanguage: "PT",
    switchLanguageLabel: "Mudar para português",
  },
  hero: {
    eyebrow: "Francisco Santana · Software engineering · Data · AI",
    headline: "We build the digital ecosystem",
    headlineMuted: "your business needs to scale.",
    subheadline:
      "From high-performance software engineering to custom AI agents and intelligent automations: we combine data, robust architecture, and artificial intelligence to turn complex operations into predictable results.",
    primaryCta: "Book a Technical Call",
    secondaryCta: "See services",
    globeCaption: "Brazil ↔ Abu Dhabi · clients in Brazil and abroad",
  },
  clients: {
    eyebrow: "Clients",
    title: "Clients in Brazil and abroad.",
    titleMuted: "From Brazil to Abu Dhabi, companies that trusted our engineering.",
    items: [
      { name: "Pod1um", role: "Sports platform · Full-stack & Mobile", region: "International" },
      { name: "Halavanca BJJ", role: "Jiu-jitsu", region: "Brazil · Abu Dhabi" },
      { name: "BK Company", role: "Current partner", region: "Brazil" },
    ],
  },
  founder: {
    eyebrow: "Who's behind it",
    name: "Francisco Santana",
    role: "Full-stack & mobile software engineer · Founder",
    paragraphs: [
      "Francisco Santana Digital Solutions grew out of my path as a full-stack and mobile software engineer, building products for clients in Brazil and abroad.",
      "I worked as a full-stack and mobile software engineer at Pod1um, an international sports platform, served Halavanca BJJ across Brazil and Abu Dhabi, and today I work at BK Company.",
      "On every project you talk to me directly: the person who designs the architecture is the person who sees it through to delivery.",
    ],
    facts: [
      { label: "Focus", value: "Full-stack · Mobile · Data · AI" },
      { label: "Clients", value: "Brazil and international" },
      { label: "Stack", value: "React · Next.js · Node.js · React Native" },
    ],
    linkedin: "View LinkedIn",
    cta: "Talk to Francisco",
  },
  agent: {
    eyebrow: "AI agents in action",
    title: "Autonomous Intelligence Embedded in Your Ecosystem",
    description:
      "We design custom AI agents connected directly to your databases, legacy software, and APIs to automate complex workflows and drive real-time operational decisions.",
    nodes: {
      sources: "Data sources",
      sourcesDetail: "APIs · Postgres · ERPs",
      agent: "AI Agent",
      agentDetail: "Francisco Santana Solutions",
      actions: ["Process management", "Triage", "Management reports"],
    },
  },
  services: {
    eyebrow: "Services",
    title: "What we deliver",
    deliverLabel: "What we deliver",
    items: [
      {
        title: "AI Agents & Advanced Workflow Automation",
        description:
          "Custom intelligent bots and autonomous agents integrated into your tech stack to automate operations, handle data pipelines, and optimize business processes.",
      },
      {
        title: "Data Analytics & Operational Intelligence",
        description:
          "Data modeling, robust pipelines, and analytics dashboards that transform complex raw data into clear, actionable business insights.",
      },
      {
        title: "Software Management, Maintenance & Scaling",
        description:
          "Deep code audits, refactoring, security patches, and continuous support for legacy systems, eliminating technical debt and ensuring system stability.",
      },
      {
        title: "Web, Mobile & Custom Software Development",
        description:
          "Scalable, end-to-end applications built with modern ecosystems (React, Next.js, Node.js, React Native) designed to support enterprise growth.",
      },
    ],
    scenes: {
      chat: {
        name: "Virtual assistant",
        status: "online",
        messages: [
          { from: "user", text: "Hi! I'd like to book a trial class." },
          { from: "bot", text: "Sure! I have slots tomorrow at 9am or 6pm. Which works?" },
          { from: "user", text: "6pm, please." },
          { from: "bot", text: "Booked ✓ I've sent the confirmation here." },
        ],
      },
      dashboard: { title: "Orders per week", legend: "Updated in real time" },
      code: { file: "agent.ts" },
      web: { url: "yourbusiness.com" },
    },
  },
  versatility: {
    eyebrow: "Technical versatility",
    question: "What if our project involves a technology or ecosystem you haven't worked with before?",
    answer:
      "Our edge is the strength of our engineering foundation. We don't depend on specific frameworks; we master the fundamentals of systems architecture, algorithms, data flows, and API integration. If your project calls for a new stack, we research, validate, and master it fast, delivering with the same standard of excellence.",
  },
  process: {
    eyebrow: "How we work",
    title: "From diagnosis to continuous evolution",
    steps: [
      {
        title: "Discovery",
        description:
          "A technical conversation to understand your business, your current stack, and where the biggest return is.",
      },
      {
        title: "Architecture & proposal",
        description:
          "We design the solution, scope, and timeline before writing the first line of code.",
      },
      {
        title: "Iterative delivery",
        description:
          "Short cycles with working releases, weekly check-ins, and full visibility on progress.",
      },
      {
        title: "Support & evolution",
        description:
          "After launch, we keep monitoring, maintaining, and evolving the product with you.",
      },
    ],
  },
  finalCta: {
    title: "Ready to turn your company's technology and data into a competitive advantage?",
    description:
      "We combine senior engineering, artificial intelligence, and business focus to deliver what your product needs. Let's discuss your project.",
    direct: "You talk directly to Francisco Santana, from the first call to delivery.",
    cta: "Book a Call with Francisco Santana Solutions",
  },
  contact: {
    title: "Let's talk about your project",
    description: "Tell us briefly what you need. We reply within 1 business day.",
    name: "Name",
    email: "Email",
    company: "Company (optional)",
    message: "Message",
    messagePlaceholder: "What do you want to build, automate, or improve?",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent! We'll get back to you soon.",
    error: "We couldn't send it right now. Try again or email",
    orEmail: "Prefer email? Write to",
  },
  footer: {
    tagline: "Software engineering, data, and intelligent automation.",
    rights: "All rights reserved.",
    contact: "Contact",
  },
};
