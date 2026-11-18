"use client";

import { ArrowUpRight } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FS_PATHS } from "@/components/brand/fs-mark";
import { ContactButton } from "@/components/contact-button";
import { DrawLine } from "@/components/motion/draw-line";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";

// "Quem está por trás": Francisco Santana. O monograma FS se desenha ao entrar na tela.
export function Founder({ dict }: { dict: Dictionary }) {
  const f = dict.founder;
  // Mesmo traço em CSS do logo do header (.fs-draw), que funciona em todos os navegadores mobile.
  // O motion só detecta a entrada na tela; o desenho é feito pelo stroke-dashoffset em CSS.
  const markRef = useRef<SVGSVGElement>(null);
  const markInView = useInView(markRef, { once: true, amount: 0.4 });
  return (
    <section id="sobre" aria-labelledby="founder-title" className="scroll-mt-16 bg-white py-28 text-black sm:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:gap-24">
        <div className="flex aspect-square w-full max-w-md items-center justify-center bg-black p-[18%] text-white">
          <svg
            ref={markRef}
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth={6}
            strokeLinecap="square"
            strokeLinejoin="miter"
            className="size-full"
            role="img"
            aria-label="FS — Francisco Santana"
          >
            {FS_PATHS.map((d, i) => (
              <path
                key={d}
                d={d}
                pathLength={1}
                className={markInView ? "fs-draw fs-draw-slow" : undefined}
                style={
                  markInView
                    ? { animationDelay: `${0.2 + i * 0.3}s` }
                    : { strokeDasharray: 1, strokeDashoffset: 1 }
                }
              />
            ))}
          </svg>
        </div>

        <div>
          <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{f.eyebrow}</p>
          <RevealText
            id="founder-title"
            className="mt-6 text-5xl leading-[0.98] font-semibold tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            segments={[{ text: f.name }]}
          />
          <FadeIn delay={0.3}>
            <p className="mt-6 font-mono text-sm text-neutral-500">{f.role}</p>
          </FadeIn>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-pretty text-neutral-700">
            {f.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <p>{p}</p>
              </FadeIn>
            ))}
          </div>

          <dl className="mt-14">
            {f.facts.map((fact, i) => (
              <div key={fact.label}>
                <DrawLine className="bg-neutral-300" delay={0.1 * i} />
                <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="font-mono text-xs tracking-wide text-neutral-500 uppercase sm:pt-0.5">{fact.label}</dt>
                  <dd className="font-medium">{fact.value}</dd>
                </div>
              </div>
            ))}
            <DrawLine className="bg-neutral-300" delay={0.3} />
          </dl>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <ContactButton message={dict.contact.whatsappMessage} tone="dark">{f.cta}</ContactButton>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[15px] text-neutral-600 transition-colors hover:text-black"
            >
              {f.linkedin}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
