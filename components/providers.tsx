"use client";

import { MotionConfig } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Com "reduzir movimento" ligado no sistema, o motion desliga as transformações.
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  );
}
