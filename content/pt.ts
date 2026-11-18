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
      "NestJS",
      "Flutter",
      "Node.js",
    ],
    ogLocale: "pt_BR",
  },
  nav: {
    cases: "Cases",
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
      { name: "Pod1um", role: "SaaS de gestão esportiva · Full-stack & Mobile", region: "Dublin, Irlanda" },
      { name: "Halavanca BJJ", role: "Jiu-jitsu", region: "Brasil · Abu Dhabi" },
      { name: "BK Company", role: "SaaS para e-commerce · Shopify", region: "Brasil" },
    ],
  },
  cases: {
    eyebrow: "Cases",
    title: "Software em produção, com escala real.",
    titleMuted: "O que construímos, para quem e com qual resultado.",
    highlightsLabel: "O que foi feito",
    stackLabel: "Stack",
    items: [
      {
        client: "BK Company",
        context: "SaaS para e-commerce · Parceira Shopify App Store",
        period: "2026 — atual",
        title: "BK Reviews: avaliações de produtos em mais de 80 mil lojas Shopify",
        summary:
          "A BK Company é uma das maiores empresas de serviços para dropshipping da América Latina. Lá, o trabalho é desenvolver e evoluir o BK Reviews, app de avaliações de produtos para lojas Shopify, num ambiente de alta concorrência, além de soluções de IA em Python integradas aos produtos da empresa.",
        metrics: [
          { value: "80 mil+", label: "lojas com o app instalado" },
        ],
        highlights: [
          "Ferramenta interna de bugs com entrada pelo WhatsApp: a IA (Gemini) lê texto, áudio e imagem do cliente e gera um card estruturado no kanban.",
          "Integração do BK Reviews com a plataforma Tray, incluindo diagnóstico de falhas no fluxo de instalação junto ao suporte da plataforma.",
          "Refatoração visual do painel administrativo com validação pixel-perfect automatizada (Playwright + pixelmatch).",
        ],
        stack: ["NestJS", "Next.js", "Go", "Python", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"],
      },
      {
        client: "Pod1um",
        context: "SaaS de gestão esportiva · Dublin, Irlanda",
        period: "2021 — 2026",
        title: "Plataforma esportiva com 4 aplicações e mais de 12 mil usuários",
        summary:
          "Plataforma completa conectando atletas, treinadores e organizações esportivas, com agendamento, análise de performance e gestão de treinos. São 4 aplicações: administrador, treinador, atleta e loja (e-commerce), na web e no mobile.",
        metrics: [
          { value: "12 mil+", label: "usuários na plataforma" },
          { value: "−50%", label: "no tempo de build do front-end" },
          { value: "−45%", label: "no tempo de detecção de bugs" },
        ],
        highlights: [
          "Arquitetura escalável com Next.js e TypeScript no front-end e NestJS no back-end.",
          "Apps mobile cross-platform em Flutter, com Clean Architecture.",
          "Observabilidade com OpenTelemetry e SigNoz, autenticação robusta, dashboards analíticos, webhooks e mensageria.",
        ],
        stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Flutter", "Docker"],
      },
      {
        client: "Halavanca BJJ",
        context: "Jiu-jitsu · Brasil e Abu Dhabi",
        period: "App LoadLab",
        title: "Batimentos cardíacos em tempo real via Bluetooth, no dia a dia dos atletas",
        summary:
          "LoadLab, aplicativo mobile desenvolvido para a Halavanca BJJ e usado pelos atletas no Brasil e em Abu Dhabi. Conecta via Bluetooth a monitores cardíacos e acompanha os batimentos do atleta em tempo real, nos treinos e na rotina. As métricas viram gráficos e ficam ligadas às atividades registradas no mapa.",
        metrics: [],
        highlights: [
          "Leitura contínua de frequência cardíaca via Bluetooth, com os dados atualizados em tempo real na tela.",
          "Verificação das métricas de esforço a partir dos sensores, para o atleta e o treinador confiarem no que veem.",
          "Gráficos customizados para acompanhar a evolução e integração com Google Maps para rotas e localização.",
          "Acessibilidade completa no app.",
        ],
        stack: ["Flutter", "Bluetooth", "Clean Architecture", "BLoC", "Google Maps API"],
      },
    ],
  },
  founder: {
    eyebrow: "Quem está por trás",
    name: "Francisco Santana",
    role: "Engenheiro de software full-stack & mobile · Fundador",
    paragraphs: [
      "A Francisco Santana Soluções Digitais nasceu de mais de 5 anos construindo produtos web e mobile para clientes no Brasil e no exterior.",
      "Fui desenvolvedor full-stack da Pod1um, de Dublin, na Irlanda, por mais de quatro anos, numa plataforma de gestão esportiva com mais de 12 mil usuários. Desenvolvi o LoadLab para a Halavanca BJJ, usado no Brasil e em Abu Dhabi, e hoje desenvolvo o BK Reviews na BK Company, app presente em mais de 80 mil lojas Shopify.",
      "Sou bacharel em Ciência da Computação pela UFPB, com pesquisa em segurança da informação pelo PIBIC-CNPq. Em cada projeto, você fala diretamente comigo: quem desenha a arquitetura é quem acompanha a entrega.",
    ],
    facts: [
      { label: "Atuação", value: "Full-stack · Mobile · Dados · IA" },
      { label: "Experiência", value: "5+ anos · clientes nacionais e internacionais" },
      { label: "Stack", value: "React · Next.js · NestJS · Flutter · Go · Python" },
      { label: "Formação", value: "Ciência da Computação · UFPB" },
      { label: "Pesquisa", value: "Segurança da informação · artigos publicados" },
      { label: "Upwork", value: "Top Rated · 100% Job Success" },
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
          "Aplicações completas e escaláveis em React, Next.js, NestJS e Flutter, desenhadas sob medida para suportar o crescimento da sua empresa.",
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
    whatsappMessage: "Olá, Francisco! Vim pelo seu site e gostaria de conversar sobre um projeto.",
  },
  footer: {
    tagline: "Engenharia de software, dados e automação inteligente.",
    rights: "Todos os direitos reservados.",
    contact: "Contato",
  },
};
