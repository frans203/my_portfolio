import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  /** Mensagem pré-preenchida no WhatsApp (use `dict.contact.whatsappMessage`). */
  message: string;
  /** "light" = pílula branca (para fundo preto); "dark" = pílula preta (para fundo branco). */
  tone?: "light" | "dark";
  size?: "sm" | "lg";
  className?: string;
};

// Todo CTA de contato passa por aqui: abre conversa no WhatsApp em nova aba.
export function ContactButton({ children, message, tone = "light", size = "lg", className }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  );
}
