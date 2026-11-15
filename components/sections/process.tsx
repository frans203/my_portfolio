"use client";

import { motion, type MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";

function Step({
  step,
  index,
  total,
  progress,
}: {
  step: { title: string; description: string };
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // A etapa "acende" quando a linha de progresso chega nela.
  const start = index / total;
  const opacity = useTransform(progress, [start - 0.05, start + 0.1], [0.3, 1]);
  return (
    <motion.li style={{ opacity }} className="relative pt-8">
      <span className="absolute top-0 left-0 -mt-[5px] size-[11px] rounded-full border border-black bg-white" />
      <span className="font-mono text-sm text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-4 text-xl font-semibold tracking-tight">{step.title}</h3>
      <p className="mt-3 leading-relaxed text-pretty text-neutral-600">{step.description}</p>
    </motion.li>
  );
}

// Linha do tempo: a linha se preenche com a rolagem, uma etapa após a outra.
export function Process({ dict }: { dict: Dictionary }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const steps = dict.process.steps;

  return (
    <section id="processo" aria-labelledby="process-title" className="scroll-mt-16 bg-white py-28 text-black sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{dict.process.eyebrow}</p>
        <RevealText
          id="process-title"
          className="mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl"
          segments={[{ text: dict.process.title }]}
        />
        <div className="relative mt-20">
          <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" aria-hidden />
          <motion.div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px origin-left bg-black"
            style={{ scaleX: scrollYProgress }}
          />
          <ol ref={ref} className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Step key={step.title} step={step} index={i} total={steps.length} progress={scrollYProgress} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
