"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import type { Dictionary } from "@/content/types";
import { cn } from "@/lib/utils";

// Conexões em % do container; convertidas para pixels (pathLength/dash precisam de escala uniforme).
const IN = [[27, 50], [39, 50]] as const;
const OUT_Y = [22, 50, 78];

function buildPaths(w: number, h: number) {
  const x = (v: number) => (v / 100) * w;
  const y = (v: number) => (v / 100) * h;
  return {
    in: `M ${x(IN[0][0])} ${y(IN[0][1])} L ${x(IN[1][0])} ${y(IN[1][1])}`,
    out: OUT_Y.map((ty) => `M ${x(61)} ${y(50)} C ${x(67)} ${y(50)}, ${x(67)} ${y(ty)}, ${x(73)} ${y(ty)}`),
  };
}

function Node({ title, detail, inverted }: { title: string; detail?: string; inverted?: boolean }) {
  return (
    <div
      className={cn(
        "relative z-10 rounded-lg border px-5 py-4",
        inverted ? "border-black bg-black text-white" : "border-neutral-300 bg-white text-black",
      )}
    >
      {inverted && (
        // "Respiração" do agente: sinaliza que ele está processando.
        <span className="absolute top-4 right-4 flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/60" />
          <span className="relative inline-flex size-2 rounded-full bg-white" />
        </span>
      )}
      <p className={cn("font-medium", inverted && "text-lg")}>{title}</p>
      {detail && (
        <p className={cn("mt-1 font-mono text-xs", inverted ? "text-neutral-400" : "text-neutral-500")}>{detail}</p>
      )}
    </div>
  );
}

function Connector({ d, delay, pulseDelay }: { d: string; delay: number; pulseDelay: number }) {
  return (
    <>
      <motion.path
        d={d}
        fill="none"
        stroke="#a3a3a3"
        strokeWidth={1}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut", delay }}
      />
      {/* Pulso de dados percorrendo a conexão */}
      <path
        d={d}
        pathLength={100}
        fill="none"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        className="flow-pulse"
        style={{ animationDelay: `${pulseDelay}s` }}
      />
    </>
  );
}

// Fluxo Fontes de dados → Agente → Ações: as conexões se desenham e um pulso de dados percorre o caminho.
export function AgentFlow({ dict }: { dict: Dictionary }) {
  const { nodes } = dict.agent;
  const boxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setSize({ w: el.offsetWidth, h: el.offsetHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const paths = size ? buildPaths(size.w, size.h) : null;

  return (
    <section id="agentes" aria-labelledby="agent-title" className="scroll-mt-16 bg-white py-28 text-black sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{dict.agent.eyebrow}</p>
            <RevealText
              id="agent-title"
              className="mt-6 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl"
              segments={[{ text: dict.agent.title }]}
            />
          </div>
          <FadeIn delay={0.2} className="lg:pt-12">
            <p className="text-lg leading-relaxed text-pretty text-neutral-600">{dict.agent.description}</p>
          </FadeIn>
        </div>

        <FadeIn className="mt-20">
          <div ref={boxRef} className="relative rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-12">
            {paths && size && (
              <svg
                aria-hidden
                className="absolute inset-0 hidden h-full w-full lg:block"
                viewBox={`0 0 ${size.w} ${size.h}`}
              >
                <Connector d={paths.in} delay={0.2} pulseDelay={0} />
                {paths.out.map((d, i) => (
                  <Connector key={i} d={d} delay={0.8 + i * 0.12} pulseDelay={1.1} />
                ))}
              </svg>
            )}

            <div className="relative grid items-center gap-5 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-[8%]">
              <Node title={nodes.sources} detail={nodes.sourcesDetail} />
              <div className="mx-auto h-6 w-px bg-neutral-400 lg:hidden" aria-hidden />
              <Node title={nodes.agent} detail={nodes.agentDetail} inverted />
              <div className="mx-auto h-6 w-px bg-neutral-400 lg:hidden" aria-hidden />
              <ul className="flex flex-col gap-4 lg:gap-12">
                {nodes.actions.map((action) => (
                  <li key={action}>
                    <Node title={action} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
