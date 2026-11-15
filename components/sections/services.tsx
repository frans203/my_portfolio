import { DrawLine } from "@/components/motion/draw-line";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";

// Lista editorial numerada; as linhas se desenham uma a uma ao entrar na tela.
export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="servicos" aria-labelledby="services-title" className="scroll-mt-16 bg-black py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{dict.services.eyebrow}</p>
        <RevealText
          id="services-title"
          className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl"
          segments={[{ text: dict.services.title }]}
        />

        <ol className="mt-16">
          {dict.services.items.map((service, i) => (
            <li key={service.title} className="group">
              <DrawLine className="bg-white/20" delay={i * 0.12} />
              <FadeIn delay={0.15 + i * 0.12}>
                <div className="grid gap-4 py-10 sm:grid-cols-[5rem_1fr] lg:grid-cols-[5rem_1fr_1fr] lg:gap-12 lg:py-14">
                  <span className="font-mono text-sm text-neutral-500 transition-colors group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl leading-tight font-semibold tracking-tight text-balance transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-pretty text-neutral-400 sm:col-start-2 lg:col-start-3">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            </li>
          ))}
          <li aria-hidden>
            <DrawLine className="bg-white/20" delay={0.5} />
          </li>
        </ol>
      </div>
    </section>
  );
}
