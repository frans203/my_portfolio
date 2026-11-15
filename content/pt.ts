import type { Dictionary } from "./types";

// Fonte: docs/copy.md (seção 2 — PT-BR). Trechos que não existiam no copy
// (logos, processo, rótulos de UI) seguem o mesmo tom: "nós", direto, sem jargão.
export const pt: Dictionary = {
  locale: "pt",
  htmlLang: "pt-BR",
  meta: {
    title: "Francisco Santana Soluções Digitais — Engenharia de software, IA e automação",
    description:
      "Engenharia de software de alta performance, agentes de IA e automações inteligentes. Desenvolvemos aplicações web e mobile, integramos dados e sustentamos softwares para empresas no Brasil e no exterior.",
    keywords: [
      "software house",
      "desenvolvimento de software sob medida",
      "agentes de IA",
      "automação de processos",
      "desenvolvimento de aplicativos",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
    ],
    ogLocale: "pt_BR",
  },
  nav: {
    about: "Quem somos",
    services: "Serviços",
    agents: "Agentes de IA",
    process: "Como trabalhamos",
    cta: "Agendar conversa",
    switchLanguage: "EN",
    switchLanguageLabel: "Switch to English",
  },
  hero: {
    eyebrow: "Francisco Santana · Engenharia de software · Dados · IA",
    headline: "Nós construímos o ecossistema digital",
    headlineMuted: "que o seu negócio precisa para escalar.",
    subheadline:
      "Da engenharia de software de alta performance aos agentes de IA e automações inteligentes: nós unimos dados, sistemas robustos e inteligência artificial para transformar operações complexas em resultados previsíveis.",
    primaryCta: "Agendar uma Conversa Técnica",
    secondaryCta: "Ver serviços",
    globeCaption: "Brasil ↔ Abu Dhabi · clientes nacionais e internacionais",
  },
  clients: {
    eyebrow: "Clientes",
    title: "Clientes nacionais e internacionais.",
    titleMuted: "Do Brasil a Abu Dhabi, empresas que confiaram na nossa engenharia.",
    items: [
      { name: "Pod1um", role: "Plataforma esportiva · Full-stack & Mobile", region: "Internacional" },
      { name: "Halavanca BJJ", role: "Jiu-jitsu", region: "Brasil · Abu Dhabi" },
      { name: "BK Company", role: "Parceiro atual", region: "Brasil" },
    ],
  },
  founder: {
    eyebrow: "Quem está por trás",
    name: "Francisco Santana",
    role: "Engenheiro de software full-stack & mobile · Fundador",
    paragraphs: [
      "A Francisco Santana Soluções Digitais nasceu da minha trajetória como engenheiro de software full-stack e mobile, construindo produtos para clientes no Brasil e no exterior.",
      "Atuei como engenheiro de software full-stack e mobile na Pod1um, plataforma internacional voltada para esportes, atendi a Halavanca BJJ, com atuação no Brasil e em Abu Dhabi, e hoje atuo na BK Company.",
      "Em cada projeto, você fala diretamente comigo: quem desenha a arquitetura é quem acompanha a entrega.",
    ],
    facts: [
      { label: "Atuação", value: "Full-stack · Mobile · Dados · IA" },
      { label: "Clientes", value: "Nacionais e internacionais" },
      { label: "Stack", value: "React · Next.js · Node.js · React Native" },
    ],
    linkedin: "Ver LinkedIn",
    cta: "Falar com Francisco",
  },
  agent: {
    eyebrow: "O agente de IA em ação",
    title: "Inteligência autônoma integrada ao seu ecossistema",
    description:
      "Nós desenvolvemos agentes de IA customizados que conversam diretamente com os seus bancos de dados, gerenciam softwares legados, automatizam fluxos operacionais inteiros e liberam o seu tempo para focar no crescimento estratégico.",
    nodes: {
      sources: "Fontes de dados",
      sourcesDetail: "APIs · Postgres · ERPs",
      agent: "Agente de IA",
      agentDetail: "Francisco Santana Soluções",
      actions: ["Gestão de processos", "Triagem", "Relatórios gerenciais"],
    },
  },
  services: {
    eyebrow: "Serviços",
    title: "O que entregamos",
    deliverLabel: "O que entregamos",
    items: [
      {
        title: "Agentes de IA & Automação Avançada de Processos",
        description:
          "Criação de bots inteligentes e agentes autônomos conectados ao seu ecossistema para atendimento, triagem, automação de fluxos operacionais e tomada de decisões em tempo real.",
      },
      {
        title: "Análise de Dados & Inteligência Operacional",
        description:
          "Modelagem de dados, construção de pipelines eficientes e painéis analíticos para transformar bases complexas em inteligência de negócio acionável.",
      },
      {
        title: "Gestão, Manutenção e Evolução de Softwares",
        description:
          "Auditoria, refatoração, segurança e sustentação contínua de softwares existentes. Nós eliminamos dívidas técnicas e garantimos estabilidade operacional de longo prazo.",
      },
      {
        title: "Desenvolvimento Web, Mobile & Sistemas Sob Medida",
        description:
          "Aplicações completas e escaláveis em React, Next.js, Node.js e React Native, desenhadas sob medida para suportar o crescimento da sua empresa.",
      },
    ],
    scenes: {
      chat: {
        name: "Assistente virtual",
        status: "online",
        messages: [
          { from: "user", text: "Oi! Quero agendar uma aula experimental." },
          { from: "bot", text: "Claro! Tenho horários amanhã às 9h ou às 18h. Qual prefere?" },
          { from: "user", text: "18h, por favor." },
          { from: "bot", text: "Agendado ✓ Te enviei a confirmação por aqui." },
        ],
      },
      dashboard: { title: "Pedidos por semana", legend: "Atualizado em tempo real" },
      code: { file: "agent.ts" },
      web: { url: "seunegocio.com.br" },
    },
  },
  versatility: {
    eyebrow: "Versatilidade técnica",
    question:
      "E se a nossa demanda envolver uma tecnologia ou ecossistema com o qual vocês não trabalharam antes?",
    answer:
      "O nosso diferencial está na solidez da nossa base de engenharia. Nós não dependemos de frameworks específicos; nós dominamos os fundamentos de arquitetura de sistemas, algoritmos, fluxos de dados e integração de APIs. Se o seu projeto exige uma stack inédita, nós pesquisamos, validamos e dominamos a tecnologia em tempo recorde para entregar com o mesmo padrão de excelência.",
  },
  process: {
    eyebrow: "Como trabalhamos",
    title: "Do diagnóstico à evolução contínua",
    steps: [
      {
        title: "Diagnóstico",
        description:
          "Uma conversa técnica para entender o seu negócio, a base atual e onde está o maior retorno.",
      },
      {
        title: "Arquitetura & proposta",
        description:
          "Desenhamos a solução, o escopo e o cronograma antes de escrever a primeira linha de código.",
      },
      {
        title: "Entregas iterativas",
        description:
          "Ciclos curtos com versões funcionando, alinhamento semanal e visibilidade total do progresso.",
      },
      {
        title: "Sustentação & evolução",
        description:
          "Depois do lançamento, seguimos monitorando, mantendo e evoluindo o produto com você.",
      },
    ],
  },
  finalCta: {
    title: "Prontos para transformar a tecnologia e os dados da sua empresa em vantagem competitiva?",
    description:
      "Nós combinamos engenharia sênior, inteligência artificial e foco em resultados para entregar o que o seu negócio precisa. Vamos conversar sobre o seu próximo projeto.",
    direct: "Você fala direto com Francisco Santana, do primeiro contato à entrega.",
    cta: "Agendar Reunião com a Francisco Santana Soluções",
  },
  contact: {
    title: "Vamos conversar sobre o seu projeto",
    description: "Conte rapidamente o que você precisa. Respondemos em até 1 dia útil.",
    name: "Nome",
    email: "E-mail",
    company: "Empresa (opcional)",
    message: "Mensagem",
    messagePlaceholder: "O que você quer construir, automatizar ou melhorar?",
    submit: "Enviar mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada! Entraremos em contato em breve.",
    error: "Não foi possível enviar agora. Tente de novo ou escreva para",
    orEmail: "Prefere e-mail? Escreva para",
  },
  footer: {
    tagline: "Engenharia de software, dados e automação inteligente.",
    rights: "Todos os direitos reservados.",
    contact: "Contato",
  },
};
