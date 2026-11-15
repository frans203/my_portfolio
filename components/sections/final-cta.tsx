import { ContactButton } from "@/components/contact-button";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";

export function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="cta-title" className="border-t border-white/10 bg-black py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RevealText
          id="cta-title"
          className="max-w-5xl text-4xl leading-[1.03] font-semibold tracking-[-0.035em] sm:text-7xl"
          segments={[{ text: dict.finalCta.title }]}
        />
        <FadeIn delay={0.3}>
          <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-pretty">
              <p className="text-neutral-400">{dict.finalCta.description}</p>
              <p className="text-white">{dict.finalCta.direct}</p>
            </div>
            <ContactButton className="h-auto min-h-12 py-3 text-center whitespace-normal">
              {dict.finalCta.cta}
            </ContactButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
