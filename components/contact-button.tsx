"use client";

import { cn } from "@/lib/utils";
import { useContactModal } from "@/stores/contact-modal";

type Props = {
  children: React.ReactNode;
  /** "light" = pílula branca (para fundo preto); "dark" = pílula preta (para fundo branco). */
  tone?: "light" | "dark";
  size?: "sm" | "lg";
  className?: string;
};

// Todo CTA de contato passa por aqui: abre o modal global (Zustand).
export function ContactButton({ children, tone = "light", size = "lg", className }: Props) {
  const setOpen = useContactModal((s) => s.setOpen);

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4",
        size === "lg" ? "h-12 px-7 text-[15px]" : "h-9 px-4 text-sm",
        tone === "light"
          ? "bg-white text-black hover:bg-neutral-200 focus-visible:outline-white"
          : "bg-black text-white hover:bg-neutral-800 focus-visible:outline-black",
        className,
      )}
    >
      {children}
    </button>
  );
}
