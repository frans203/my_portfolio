"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Linha fina que se desenha da esquerda para a direita quando entra na tela. */
export function DrawLine({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className={cn("block h-px w-full origin-left", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay }}
    />
  );
}
