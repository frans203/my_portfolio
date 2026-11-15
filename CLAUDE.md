# CLAUDE.md

Guia para o Claude Code trabalhar neste repositório.

## Visão geral

Landing page bilíngue de **Francisco Santana Soluções Digitais** (software house: engenharia, dados, agentes de IA). Next.js 16 App Router + TypeScript + Tailwind v4 + shadcn/ui, exportado como **site estático** (`output: "export"`) e publicado na **Netlify** a partir de `out/`.

Comandos: `npm run dev`, `npm run build` (gera `out/`), `npm run lint`. Não há testes.

> Next 16 traz a documentação em `node_modules/next/dist/docs/` — consulte antes de assumir APIs de versões antigas.

## Regras importantes

- **Static export**: nada de Server Actions, API routes, `cookies()`, `headers()`, middleware/proxy, redirects/rewrites do `next.config`, ISR ou otimização de imagem padrão (`images.unoptimized: true`). Route handlers só `GET` com `export const dynamic = "force-static"` (ex.: `app/(pt)/og.png/route.tsx`).
- **i18n por root layouts**: `app/(pt)/layout.tsx` (`/`, `lang="pt-BR"`) e `app/(en)/en/layout.tsx` (`/en/`, `lang="en"`). Ambos usam `components/root-document.tsx`. Não existe `app/layout.tsx` — e não deve existir.
- **Texto nunca hardcoded em componente**: vai em `content/pt.ts` **e** `content/en.ts`; o tipo `Dictionary` (`content/types.ts`) obriga as duas línguas a terem as mesmas chaves. A fonte da copy é `docs/copy.md` (tom: primeira pessoa do plural, "nós", direto, sem jargão; não inventar números/depoimentos).
- **Dados globais** (URL, e-mail, redes, logos de clientes) em `lib/site.ts`. SEO (metadata, hreflang, OG, JSON-LD `ProfessionalService`) em `lib/metadata.ts`.
- **Visual premium, preto e branco** (ver `docs/design-direction.md`). O `<html>` tem a classe `dark`; seções alternam `bg-black` e `bg-white text-black` (ritmo apple.com). Hierarquia por tamanho e tom de cinza (`text-neutral-400/500/600`), nunca por cor.
- **Proibido (cara de IA)**: gradientes coloridos, texto com gradiente, glows/blur de fundo, grid de fundo, bordas animadas, botões com gradiente, pílulas de eyebrow com bolinha, cards com ícone em quadradinho colorido, mockups de terminal.
- **Animações** (lib `motion`, helpers em `components/motion/`): cada seção tem uma animação com propósito, não um fade genérico em tudo.
  - `RevealText`: títulos sobem palavra por palavra de uma máscara (h1 no load; h2 ao entrar na tela).
  - `DrawLine`: linhas finas se desenham (serviços, fatos do fundador).
  - `ScrollHighlight`: a pergunta da seção de versatilidade acende com a rolagem.
  - Processo: linha do tempo preenche com a rolagem e as etapas acendem.
  - Agente: conexões se desenham + pulso de dados (`.flow-pulse` no CSS) + ponto "respirando" no nó do agente.
  - Logo FS se desenha no header (`.fs-draw`) e na seção do fundador.
  - Serviços: palco de cenas "massinha" (`service-scenes.tsx`, classes `.clay-*` no CSS, monocromático): bot de conversa no celular, painel de barras, PC com código/correção, navegador + celular montando. Desktop (`ServiceStage`): palco fixo ao lado da lista, troca a cada 4,8s; hover/foco num serviço mostra a cena dele. Mobile/tablet (`ServiceScene`): cada serviço mostra sua cena antes do texto; a cena monta ao entrar na tela (recomeça ao voltar). Textos das cenas em `services.scenes` do dicionário.
  - Contínuas: globo 3D do hero (`hero-globe.tsx`, lib `cobe`, pausa fora da tela) e marquee de logos.
  - `MotionConfig reducedMotion="user"` em `providers.tsx` + regra de `prefers-reduced-motion` no CSS.
- **Tipografia**: Schibsted Grotesk (`--font-schibsted`, texto/títulos com `tracking-[-0.03em]`) + IBM Plex Mono (`--font-plex-mono`, rótulos pequenos em caixa alta).
- **Zustand / React Query**: só em componentes `"use client"`. `components/providers.tsx` tem o `QueryClientProvider`. Stores pequenas por domínio em `stores/` (hoje: `contact-modal.ts`). Só adicione quando houver uso real.
- **Logos**: em `lib/site.ts` (`clients`). Wordmarks (largura > 2× altura) aparecem sozinhos; logos quadrados aparecem com o nome ao lado. Todos em `grayscale`.
- **Mobile**: conteúdo largo (terminal, código) precisa de `min-w-0` no item de grid + `overflow-x-auto`, senão a página ganha scroll horizontal.

## Componentes

- `components/ui/` é gerado por `npx shadcn@latest add ...` (shadcn base-ui + registry `@cult-ui/<nome>`). Evite editar à mão; se precisar customizar, faça wrapper em `components/`.
- Os componentes do Cult UI usados na 1ª versão (border-beam, bg-animate-button, texture-card, terminal) foram removidos por darem cara de IA. Antes de adicionar qualquer componente de registry, confira se ele não cai na lista "proibido" acima.
- Seções em `components/sections/`, montadas por `components/home-page.tsx` nesta ordem: Header → Hero (B) → Clients (B, "nacionais e internacionais" + marquee) → Founder (W, "Quem está por trás") → Services (B) → AgentFlow (W) → Versatility (B) → Process (W) → FinalCta (B) → Footer (B, assinatura gigante com o nome), + `ContactDialog`. Não há FAQ (removido a pedido).
- **Logo**: monograma FS vetorial em `public/brand/fs-mark-{white,black}.svg`, `public/icon.svg` (favicon) e `components/brand/fs-mark.tsx` (`FS_PATHS`). Mudou o desenho? Atualize os quatro + `app/(pt)/og.png/route.tsx`.
- Âncoras usadas pelo menu: `#sobre`, `#servicos`, `#agentes`, `#processo` (iguais nas duas línguas).

## Dev server

O `next dev` (Turbopack) às vezes não recarrega mudanças no `app/globals.css`. Se uma classe nova do CSS não aparecer, pare o servidor, apague `.next/dev` e suba de novo.

## Contato / Netlify Forms

Todo CTA usa `ContactButton` → abre `ContactDialog` (estado em `stores/contact-modal.ts`). O envio é `useMutation` com POST `application/x-www-form-urlencoded` para `/__forms.html`. O form "fantasma" em `public/__forms.html` precisa ter **os mesmos campos** do modal — ao adicionar um campo, atualize os dois. Netlify Forms só funciona no deploy (localmente o POST falha e o modal mostra o erro com o e-mail como fallback).

## Deploy

`netlify.toml`: `command = "npm run build"`, `publish = "out"`, Node 22. `trailingSlash: true` no `next.config.ts` (gera `en/index.html`). URL do site via `NEXT_PUBLIC_SITE_URL` (fallback em `lib/site.ts`).

## Docs do projeto

- `docs/copy.md` — copy de referência (Gemini).
- `docs/PLAN.md` — plano técnico, status e pendências.
- `docs/design-direction.md` — pesquisa e regras do visual premium P&B.
