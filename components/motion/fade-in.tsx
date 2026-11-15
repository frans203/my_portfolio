"use client";

import { motion } from "motion/react";

/** Entrada discreta (opacidade + 12px). Use para blocos de apoio, nunca em tudo. */
export function FadeIn({
  children,
  className,
  delay = 0,
  onLoad = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onLoad?: boolean;
}) {
  const trigger = onLoad
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "0px 0px -10% 0px" } };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      {...trigger}
    >
      {children}
    </motion.div>
  );
}
