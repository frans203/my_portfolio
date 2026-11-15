"use client";

import { useCallback, useState } from "react";
import { DrawLine } from "@/components/motion/draw-line";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";
import { cn } from "@/lib/utils";
import { ServiceScene, ServiceStage } from "./service-scenes";

// Lista editorial numerada + palco de cenas "massinha" (uma por serviço).
// Passar o mouse/focar num serviço mostra a cena dele; sem interação, as cenas trocam sozinhas.
export function Services({ dict }: { dict: Dictionary }) {
  const items = dict.services.items;
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const onActiveChange = useCallback((i: number) => setActive(i), []);

  return (
    <section id="servicos" aria-labelledby="services-title" className="scroll-mt-16 bg-black py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{dict.services.eyebrow}</p>
        <RevealText
          id="services-title"
          className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl"
          segments={[{ text: dict.services.title }]}
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-16">
          {/* Desktop: palco fixo ao lado da lista */}
          <FadeIn className="hidden lg:sticky lg:top-24 lg:order-last lg:block lg:h-[min(600px,calc(100vh-8rem))] lg:min-h-[460px]">
            <ServiceStage
              scenes={dict.services.scenes}
              labels={items.map((s) => s.title)}
              active={active}
              onActiveChange={onActiveChange}
              paused={hovering}
            />
          </FadeIn>

          <ol onMouseLeave={() => setHovering(false)}>
            {items.map((service, i) => (
              <li
                key={service.title}
                tabIndex={0}
                onMouseEnter={() => {
                  setHovering(true);
                  setActive(i);
                }}
                onFocus={() => setActive(i)}
                className="group cursor-default outline-none [&+li]:mt-10 lg:[&+li]:mt-0"
              >
                {/* Mobile/tablet: a cena do serviço aparece antes do texto dele */}
                <ServiceScene index={i} scenes={dict.services.scenes} className="mb-10 h-[440px] sm:h-[500px] lg:hidden" />
                <DrawLine className="bg-white/20" delay={i * 0.12} />
                <FadeIn delay={0.15 + i * 0.12}>
                  <div
                    className={cn(
                      "grid gap-3 py-9 transition-opacity duration-500 sm:grid-cols-[4rem_1fr] lg:py-11",
                      active === i ? "lg:opacity-100" : "lg:opacity-50",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-sm transition-colors",
                        active === i ? "text-white" : "text-white lg:text-neutral-500",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className={cn(
                          "text-2xl leading-tight font-semibold tracking-tight text-balance transition-transform duration-500 sm:text-3xl",
                          active === i && "lg:translate-x-2",
                        )}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-xl leading-relaxed text-pretty text-neutral-400">{service.description}</p>
                    </div>
                  </div>
                </FadeIn>
              </li>
            ))}
            <li aria-hidden>
              <DrawLine className="bg-white/20" delay={0.5} />
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
