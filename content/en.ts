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
      "NestJS developer",
      "Flutter developer",
      "Next.js",
      "Node.js",
      "nearshore Brazil",
    ],
    ogLocale: "en_US",
  },
  nav: {
    cases: "Cases",
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
      { name: "Pod1um", role: "Sports management SaaS · Full-stack & Mobile", region: "Dublin, Ireland" },
      { name: "Halavanca BJJ", role: "Jiu-jitsu", region: "Brazil · Abu Dhabi" },
      { name: "BK Company", role: "E-commerce SaaS · Shopify", region: "Brazil" },
    ],
  },
  cases: {
    eyebrow: "Case studies",
    title: "Software in production, at real scale.",
    titleMuted: "What we built, for whom, and with what result.",
    highlightsLabel: "What was done",
    stackLabel: "Stack",
    items: [
      {
        client: "BK Company",
        context: "E-commerce SaaS · Shopify App Store partner",
        period: "2026 — present",
        title: "BK Reviews: product reviews in more than 80,000 Shopify stores",
        summary:
          "BK Company is one of the largest dropshipping service providers in Latin America. The work there is building and evolving BK Reviews, a product reviews app for Shopify stores, in a high-concurrency environment, plus Python AI solutions integrated into the company's products.",
        metrics: [
          { value: "80k+", label: "stores with the app installed" },
        ],
        highlights: [
          "Internal bug tracker fed through WhatsApp: AI (Gemini) reads customers' text, audio and images and turns them into structured kanban cards.",
          "BK Reviews integration with the Tray platform, including diagnosing install-flow failures together with the platform's support team.",
          "Visual refactor of the admin dashboard with automated pixel-perfect validation (Playwright + pixelmatch).",
        ],
        stack: ["NestJS", "Next.js", "Go", "Python", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"],
      },
      {
        client: "Pod1um",
        context: "Sports management SaaS · Dublin, Ireland",
        period: "2021 — 2026",
        title: "A sports platform with 4 applications and 12,000+ users",
        summary:
          "A complete platform connecting athletes, coaches and sports organizations, with scheduling, performance analytics and training management. Four applications (admin, coach, athlete and store/e-commerce) across web and mobile.",
        metrics: [
          { value: "12k+", label: "users on the platform" },
          { value: "−50%", label: "front-end build time" },
          { value: "−45%", label: "time to detect bugs" },
        ],
        highlights: [
          "Scalable architecture with Next.js and TypeScript on the front end and NestJS on the back end.",
          "Cross-platform mobile apps in Flutter, following Clean Architecture.",
          "Observability with OpenTelemetry and SigNoz, robust authentication, analytics dashboards, webhooks and messaging.",
        ],
        stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Flutter", "Docker"],
      },
      {
        client: "Halavanca BJJ",
        context: "Jiu-jitsu · Brazil and Abu Dhabi",
        period: "LoadLab app",
        title: "Real-time heart rate over Bluetooth, in athletes' everyday routine",
        summary:
          "LoadLab, a mobile app built for Halavanca BJJ and used by its athletes in Brazil and Abu Dhabi. It connects to heart rate monitors over Bluetooth and tracks the athlete's heartbeat in real time, during training and day to day. The metrics become charts and are tied to the activities logged on the map.",
        metrics: [],
        highlights: [
          "Continuous heart rate readings over Bluetooth, updated on screen in real time.",
          "Effort metrics verified from the sensors, so athletes and coaches can trust what they see.",
          "Custom charts to follow progress, plus Google Maps integration for routes and location.",
          "Fully accessible app.",
        ],
        stack: ["Flutter", "Bluetooth", "Clean Architecture", "BLoC", "Google Maps API"],
      },
    ],
  },
  founder: {
    eyebrow: "Who's behind it",
    name: "Francisco Santana",
    role: "Full-stack & mobile software engineer · Founder",
    paragraphs: [
      "Francisco Santana Digital Solutions grew out of 5+ years building web and mobile products for clients in Brazil and abroad.",
      "I spent more than four years as a full-stack developer at Pod1um, a Dublin, Ireland-based sports management platform with 12,000+ users. I built LoadLab for Halavanca BJJ, used in Brazil and Abu Dhabi, and today I build BK Reviews at BK Company, an app installed in more than 80,000 Shopify stores.",
      "I hold a B.Sc. in Computer Science from UFPB, with information security research funded by PIBIC-CNPq. On every project you talk to me directly: the person who designs the architecture is the person who sees it through to delivery.",
    ],
    facts: [
      { label: "Focus", value: "Full-stack · Mobile · Data · AI" },
      { label: "Experience", value: "5+ years · clients in Brazil and abroad" },
      { label: "Stack", value: "React · Next.js · NestJS · Flutter · Go · Python" },
      { label: "Education", value: "B.Sc. Computer Science · UFPB" },
      { label: "Research", value: "Information security · published papers" },
      { label: "Upwork", value: "Top Rated · 100% Job Success" },
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
          "Scalable, end-to-end applications built with modern ecosystems (React, Next.js, NestJS, Flutter) designed to support enterprise growth.",
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
    whatsappMessage: "Hi Francisco! I found your website and would like to talk about a project.",
  },
  footer: {
    tagline: "Software engineering, data, and intelligent automation.",
    rights: "All rights reserved.",
    contact: "Contact",
  },
};
