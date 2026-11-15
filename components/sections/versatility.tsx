import { FadeIn } from "@/components/motion/fade-in";
import { ScrollHighlight } from "@/components/motion/scroll-highlight";
import type { Dictionary } from "@/content/types";

// A pergunta "acende" palavra por palavra com a rolagem; a resposta entra em seguida.
export function Versatility({ dict }: { dict: Dictionary }) {
  const v = dict.versatility;
  return (
    <section aria-labelledby="versatility-title" className="bg-black py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{v.eyebrow}</p>
        <ScrollHighlight
          id="versatility-title"
          text={`“${v.question}”`}
          className="mt-6 max-w-5xl text-3xl leading-[1.12] font-semibold tracking-[-0.03em] text-balance sm:text-5xl"
        />
        <FadeIn className="mt-12 sm:ml-[5rem]">
          <p className="max-w-3xl border-l border-white pl-6 text-lg leading-relaxed text-pretty text-neutral-400">
            {v.answer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
