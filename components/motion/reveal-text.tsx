"use client";

import { motion } from "motion/react";
import { createElement, Fragment } from "react";
import { cn } from "@/lib/utils";

type Segment = { text: string; className?: string };

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Título que sobe palavra por palavra de dentro de uma máscara (estilo editorial).
 * - `onLoad`: anima ao carregar (hero). Sem ele, anima quando entra na tela, uma vez.
 * - O texto completo fica no DOM (SEO/leitores de tela).
 */
export function RevealText({
  as = "h2",
  segments,
  className,
  id,
  onLoad = false,
  delay = 0,
  stagger = 0.035,
}: {
  as?: "h1" | "h2" | "h3" | "p";
  segments: Segment[];
  className?: string;
  id?: string;
  onLoad?: boolean;
  delay?: number;
  stagger?: number;
}) {
  let index = 0;
  const words = segments.flatMap((seg) =>
    seg.text
      .split(" ")
      .filter(Boolean)
      .map((word) => ({ word, className: seg.className, i: index++ })),
  );

  const trigger = onLoad
    ? { animate: { y: "0%" } }
    : { whileInView: { y: "0%" }, viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return createElement(
    as,
    { id, className },
    words.map(({ word, className: wordClass, i }) => (
      <Fragment key={i}>
        <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={cn("inline-block will-change-transform", wordClass)}
            initial={{ y: "110%" }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * stagger }}
            {...trigger}
          >
            {word}
          </motion.span>
        </span>{" "}
      </Fragment>
    )),
  );
}
