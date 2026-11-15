import { ArrowRight } from "lucide-react";
import { ContactButton } from "@/components/contact-button";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";
import { HeroGlobe } from "./hero-globe";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden bg-black pt-40 pb-24 sm:pt-52 sm:pb-32">
      <HeroGlobe className="absolute top-20 right-[-45%] -z-10 w-[130%] opacity-50 [mask-image:linear-gradient(to_bottom,black_55%,transparent)] sm:right-[-25%] sm:w-[85%] lg:top-16 lg:right-[-10rem] lg:w-[50rem] lg:opacity-100" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn onLoad>
          <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{dict.hero.eyebrow}</p>
        </FadeIn>
        <RevealText
          as="h1"
          onLoad
          delay={0.15}
          className="mt-8 max-w-4xl text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.035em] sm:text-7xl lg:text-[5.25rem]"
          segments={[{ text: dict.hero.headline }, { text: dict.hero.headlineMuted, className: "text-neutral-500" }]}
        />
        <FadeIn onLoad delay={0.9}>
          <p className="mt-10 font-mono text-[11px] tracking-wide text-neutral-500 uppercase">{dict.hero.globeCaption}</p>
          <div className="mt-6 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-lg leading-relaxed text-pretty text-neutral-400">{dict.hero.subheadline}</p>
            <div className="flex flex-wrap items-center gap-6">
              <ContactButton>{dict.hero.primaryCta}</ContactButton>
              <a
                href="#servicos"
                className="group inline-flex items-center gap-2 text-[15px] text-neutral-300 transition-colors hover:text-white"
              >
                {dict.hero.secondaryCta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
