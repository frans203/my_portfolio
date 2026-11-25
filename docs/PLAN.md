# Plano técnico — reescrita do site em Next.js

> Base de conteúdo: `docs/copy.md`. Referências visuais: n8n.io (dark, glow laranja/roxo, diagrama de workflow) + apple.com (seções full-bleed, headline grande centralizada, grid de tiles).

## Objetivo

Substituir o site estático atual (HTML/CSS/JS de 2021) por um site em **Next.js + Tailwind + Cult UI**, focado em **SEO e conversão de clientes**, bilíngue (PT-BR / EN), com deploy estático simples.

## Decisões de arquitetura

| Tema | Decisão | Por quê |
|---|---|---|
| Framework | Next.js (última estável) com **App Router + TypeScript** | SEO via Metadata API, SSG, ecossistema do shadcn/Cult UI |
| Renderização | **Static export** (`output: "export"`) → pasta `out/` | Site é 100% conteúdo, sem backend. HTML pré-renderizado = melhor SEO, deploy trivial em qualquer CDN, sem depender de runtime/adapter de Next |
| Estilo | **Tailwind CSS v4** | Pedido + exigido pelo shadcn/Cult UI |
| Componentes | **shadcn/ui** (base) + **Cult UI** (registry `@cult-ui`) | Cult UI é instalado via shadcn CLI: `npx shadcn@latest add @cult-ui/<nome>` — copia o código para `components/ui/`, instala `motion` sozinho |
| Animação | `motion` (vem com Cult UI) | Diagrama do agente de IA, entradas de seção |
| i18n | Rotas estáticas: **`/` = PT-BR**, **`/en` = EN** | Static export não suporta middleware; duas rotas reais geram HTML indexável por idioma + `hreflang` |
| Conteúdo | Dicionários tipados `content/pt.ts` e `content/en.ts` | Uma fonte por idioma, TypeScript garante que nenhuma chave falte em um dos dois |
| Imagens | `next/image` com `unoptimized: true` | Exigência do static export; otimizar os arquivos na mão (WebP/SVG) |
| Fontes | `next/font` (ex.: Inter ou Geist) | Sem layout shift, self-hosted |
| Gerenciador | npm | Padrão, sem config extra |

### Estado e dados: Zustand e React Query

Ficam **disponíveis na stack, mas só entram quando houver um uso real**. O site é estático, então a maior parte do conteúdo é Server Component sem estado nenhum.

| Lib | Quando usar | Usos previstos neste site |
|---|---|---|
| **Zustand** | Estado de UI compartilhado entre componentes que não são pai/filho | Modal/drawer de contato aberto de qualquer CTA (hero, header, CTA final); menu mobile; estado da animação do diagrama do agente (passo atual, pausado) |
| **TanStack React Query** | Qualquer chamada assíncrona no client (fetch ou mutation) | Envio do formulário de contato (`useMutation`, com loading/erro/sucesso); dados externos se surgirem (ex.: repositórios do GitHub, horários do Cal.com) |

Regras:
- Nenhum dos dois roda em Server Component. Só são usados dentro de componentes `"use client"`.
- React Query: um `components/providers.tsx` (`"use client"`) com o `QueryClientProvider`, envolvendo o `{children}` nos dois root layouts. O `QueryClient` é criado com `useState` para não ser recriado a cada render.
- Zustand: stores pequenas e por domínio em `stores/` (ex.: `stores/contact-modal.ts`). Nada de store global única.
- Com static export não existe API route do Next. O formulário (se houver) envia para um serviço externo; o React Query só gerencia o estado da requisição.
- Se ao final da Fase 3 nenhum uso real aparecer, a lib não é instalada.

### i18n em detalhe

Dois root layouts via route groups, para cada idioma ter seu próprio `<html lang>`:

```
app/
├── (pt)/layout.tsx      # <html lang="pt-BR">
├── (pt)/page.tsx        # rota "/"   → <Home dict={pt} />
├── (en)/en/layout.tsx   # <html lang="en">
└── (en)/en/page.tsx     # rota "/en" → <Home dict={en} />
```

Cada página exporta `metadata` com `alternates.languages` (`pt-BR` → `/`, `en` → `/en`). O seletor de idioma no header vira um simples `<Link>`.

## Estrutura de pastas proposta

```
my_portfolio/
├── app/                    # rotas (acima) + sitemap.ts, robots.ts, icon, opengraph-image
├── components/
│   ├── ui/                 # gerado pelo shadcn / Cult UI (não editar à toa)
│   └── sections/           # Header, Hero, Logos, AgentFlow, Services, Versatility,
│                           # Process, Faq, FinalCta, Footer
├── content/                # pt.ts, en.ts, types.ts
├── lib/                    # utils.ts (cn), site.ts (URL, contatos, redes)
├── stores/                 # stores Zustand (se necessário)
├── public/
│   └── clients/            # pod1um, halavanca, bk-company (vêm de assets/clients/)
├── docs/                   # copy.md, PLAN.md, prompt-gemini-copy.md
├── wrangler.jsonc
├── next.config.ts
└── components.json         # config do shadcn
```

## Mapa seção → copy → design → componentes

| # | Seção | Copy (`docs/copy.md`) | Referência visual | Componentes |
|---|---|---|---|---|
| 1 | Header fixo | — | n8n: logo, links, CTA laranja | shadcn `button`, Link de idioma |
| 2 | Hero | 2.A (escolher 1 das 3 opções) | n8n: headline grande à esquerda + glow; fundo escuro | Cult `hero-static-radial-gradient` ou `hero-dithering`, `text-animate`, `bg-animate-button` |
| 3 | Prova social | **falta copy** | n8n: faixa "usado por" com logos | Cult `logo-carousel` (ou faixa estática — só 3 logos) |
| 4 | Agente de IA em ação | 2.B | n8n: canvas de workflow com nós conectados | **Componente próprio** em SVG + `motion` (Fontes de dados → Agente → Ação); nós com Cult `border-beam-card`; opcional `terminal-animation` |
| 5 | Serviços (4) | 2.C | Apple: grid 2×2 de tiles grandes, alternando claro/escuro | Cult `texture-card` / `halo-card` |
| 6 | Versatilidade técnica | 2.D | n8n "Code when you need it" | Cult `marketing-feature-code` ou `feature-sticky-section` |
| 7 | Como trabalhamos (processo) | **falta copy** | n8n "Run. Tweak. Repeat" | Lista em passos + ícones |
| 8 | FAQ | 2.E | — | shadcn `accordion` |
| 9 | CTA final | 2.F | n8n: bloco grande com glow e botão laranja | Cult `cosmic-button` / `bg-animate-button` |
| 10 | Footer | — | n8n / Apple: colunas de links | Contatos, redes, idioma, © |

Paleta proposta (tokens no `globals.css`): fundo `#0B0B12`, superfícies `#14141F`, texto `#F5F5F7`, acento laranja `#FF6D3A` → roxo `#7C3AED` em gradiente (glow), seções "Apple" em claro `#F5F5F7` para quebrar o ritmo. Ajustar quando o logo/identidade da marca estiver definido.

## SEO

- `metadata` por idioma: `title`, `description`, `keywords`, `openGraph`, `twitter`, `alternates` (canonical + hreflang).
- `metadataBase` com o domínio final (**pendente**).
- `app/sitemap.ts` e `app/robots.ts` (gerados como arquivos estáticos no export).
- JSON-LD `ProfessionalService` / `Organization` no layout (nome, serviços, área atendida, redes).
- OG image (`opengraph-image.png` estático por idioma).
- HTML semântico: um `<h1>` por página, `<section>` com `aria-labelledby`, `alt` em todos os logos.
- Meta: Lighthouse ≥ 95 em Performance, SEO e Accessibility.

## Deploy (Cloudflare)

`npm run deploy` = `next build` + `npx wrangler@4 deploy`: Worker `portfolio` com os arquivos de `out/` e os domínios `fsdev.site` / `www.fsdev.site` (ver `wrangler.jsonc` e `worker.mjs`).

- `next.config.ts`: `output: "export"`, `images: { unoptimized: true }`, `trailingSlash: true` (evita 404 em `/en` em host estático).
- Redirecionamentos em `public/_redirects`; DNS do fsdev.site na Cloudflare.

## Status (2026-11-14)

Fases 0–4 implementadas na branch `feat/nextjs-rewrite` (sem commit ainda). Build estático OK (`/`, `/en/`, `sitemap.xml`, `robots.txt`, `og.png`), lint OK, conferido no navegador em desktop e 375px.

Decisões tomadas por padrão (revisar):
- Hero: opção 1 do copy.
- CTA: todos os botões abrem o WhatsApp (`wa.me`) com mensagem pré-preenchida por idioma. Modal/formulário, Zustand e React Query removidos. Instagram removido dos contatos.
- Domínio: https://fsdev.site (Cloudflare, Worker `portfolio`; deploy com `npm run deploy`).
- Projetos antigos (clones) removidos.
- Copy que não existia (logos, processo, EN do FAQ/versatilidade, rótulos) foi escrita no mesmo tom.

Redesign (2026-11-14): visual trocado para preto e branco premium, sem efeitos de "cara de IA" (ver `docs/design-direction.md`); FAQ e logo "FS" removidos; logos viraram marquee; componentes Cult UI, `motion`, `border-beam` e shaders removidos.

Falta (Fase 5): commit + push, PR, Search Console, Lighthouse.

## Pendências (decisões suas)

1. **Hero**: qual das 3 opções de headline (copy 2.A)?
2. ~~**Contato / CTA**~~ — decidido: WhatsApp (+55 83 99685-3565).
3. **Domínio**: ~~decidido: fsdev.site~~ (necessário para canonical, sitemap e OG.)
4. **Projetos antigos** (clones Netflix/Amazon etc.): sugiro **não** levar para o novo site — conflitam com o posicionamento de estúdio. Cases reais (Pod1um, Halavanca, BK) entram no lugar quando houver texto.
5. **Copy faltando**: seção de logos, "como trabalhamos", e a versão EN do FAQ/versatilidade/hero 3.
6. **Identidade**: nome final da marca ("Francisco Santana Soluções Digitais"?), logo próprio e logo da BK em alta resolução.
