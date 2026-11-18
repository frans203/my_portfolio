# Francisco Santana Soluções Digitais

Site institucional de **Francisco Santana Soluções Digitais**: engenharia de software, dados, agentes de IA e automação. Landing page bilíngue (PT-BR em `/`, EN em `/en/`) feita para atrair clientes no Brasil e no exterior.

## Stack

- **Next.js 16** (App Router, TypeScript) com **static export** (`output: "export"`)
- **Tailwind CSS v4** + **shadcn/ui** (base-ui); visual preto e branco (ver `docs/design-direction.md`)
- **Netlify** (deploy estático da pasta `out/`)

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera out/ (HTML estático de / e /en/)
npx serve out    # conferir o build final
```

## Estrutura

```
app/
├── (pt)/            # root layout <html lang="pt-BR"> + página "/" + og.png
├── (en)/en/         # root layout <html lang="en"> + página "/en/"
├── sitemap.ts       # sitemap.xml com hreflang
├── robots.ts
└── globals.css      # tokens preto e branco, keyframe do marquee
components/
├── sections/        # Header, Hero, Clients, AgentFlow, Services, Versatility, Process, FinalCta, Footer
├── ui/              # gerado por shadcn
├── home-page.tsx    # monta as seções a partir do dicionário
├── contact-button.tsx  # CTA → WhatsApp
└── root-document.tsx
content/             # pt.ts, en.ts, types.ts — todo o texto do site
lib/                 # site.ts (URL, contatos, clientes), metadata.ts (SEO + JSON-LD)
public/              # logos de clientes, favicon
docs/                # copy.md, design-direction.md, PLAN.md, prompt-gemini-copy.md
```

## Editando conteúdo

Todo texto está em `content/pt.ts` e `content/en.ts` (tipados por `content/types.ts`). A copy de referência está em `docs/copy.md`. Contatos, URL do site e logos de clientes ficam em `lib/site.ts`.

## Deploy

O `netlify.toml` define `npm run build` e publica `out/`.

Defina `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente da Netlify com o domínio final (usado em canonical, sitemap e Open Graph).
