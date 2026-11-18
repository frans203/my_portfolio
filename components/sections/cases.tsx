import Image from "next/image";
import { DrawLine } from "@/components/motion/draw-line";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";

type Case = Dictionary["cases"]["items"][number];
type Client = (typeof site.clients)[number];

/**
 * "Placa" do logo: mesma moldura para todos os cases, logo em grayscale (como na seção Clientes).
 * Wordmark (largura > 2× altura) aparece inteiro; logo quadrado preenche um tile.
 * Sem logo em `site.clients`, mostra as iniciais do cliente.
 */
function LogoPlate({ client, name }: { client?: Client; name: string }) {
  const wordmark = client ? client.width > client.height * 2 : false;
  const initials = name
    .split(/(?=[A-Z])|\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-24 w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 grayscale transition-colors group-hover:border-white/25">
      {client && wordmark ? (
        <Image src={client.logo} alt={client.name} width={client.width} height={client.height} className="h-7 w-auto opacity-80" />
      ) : client ? (
        <Image
          src={client.logo}
          alt={client.name}
          width={client.width}
          height={client.height}
          className="size-14 rounded-xl object-cover opacity-90"
        />
      ) : (
        <span aria-hidden className="text-3xl font-semibold tracking-[-0.04em] text-neutral-300">
          {initials}
        </span>
      )}
    </div>
  );
}

function CaseRow({ item, index, labels }: { item: Case; index: number; labels: { highlights: string; stack: string } }) {
  return (
    <article className="group relative">
      <DrawLine className="bg-white/15" />
      <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[4fr_8fr] lg:gap-16">
        {/* Coluna da esquerda: cliente */}
        <FadeIn>
          <span className="font-mono text-sm text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
          <div className="mt-6">
            <LogoPlate client={site.clients.find((c) => c.name === item.client)} name={item.client} />
          </div>
          <h3 className="mt-8 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{item.client}</h3>
          <p className="mt-4 text-neutral-400">{item.context}</p>
          <p className="mt-2 font-mono text-xs tracking-wide text-neutral-500 uppercase">{item.period}</p>
        </FadeIn>

        {/* Coluna da direita: o que foi feito */}
        <div className="min-w-0">
          <FadeIn delay={0.1}>
            <p className="text-2xl leading-snug font-semibold tracking-tight text-balance sm:text-3xl">{item.title}</p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-pretty text-neutral-400">{item.summary}</p>
          </FadeIn>

          {item.metrics.length > 0 && (
            <FadeIn delay={0.2}>
              <dl className="mt-10 grid gap-8 sm:grid-cols-3">
                {item.metrics.map((m) => (
                  <div key={m.label} className="border-l border-white/15 pl-5">
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{m.value}</dd>
                    <dd className="mt-2 text-sm text-neutral-500">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          )}

          <FadeIn delay={0.25}>
            <p className="mt-12 font-mono text-xs tracking-wide text-neutral-500 uppercase">{labels.highlights}</p>
            <ul className="mt-4 space-y-3 text-pretty text-neutral-300">
              {item.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-neutral-500" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-mono text-xs tracking-wide text-neutral-500 uppercase">{labels.stack}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((s) => (
                <li key={s} className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-neutral-300">
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}

// Cases: o que foi construído para cada cliente, com números reais (fonte: currículo do Francisco).
export function Cases({ dict }: { dict: Dictionary }) {
  const c = dict.cases;
  return (
    <section id="cases" aria-labelledby="cases-title" className="scroll-mt-16 border-t border-white/10 bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{c.eyebrow}</p>
        <RevealText
          id="cases-title"
          className="mt-6 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl"
          segments={[{ text: c.title }, { text: c.titleMuted, className: "text-neutral-500" }]}
        />
        <div className="mt-16 sm:mt-24">
          {c.items.map((item, i) => (
            <CaseRow
              key={item.client}
              item={item}
              index={i}
              labels={{ highlights: c.highlightsLabel, stack: c.stackLabel }}
            />
          ))}
          <DrawLine className="bg-white/15" />
        </div>
      </div>
    </section>
  );
}
