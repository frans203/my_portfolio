"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/content/types";
import { cn } from "@/lib/utils";

type Scenes = Dictionary["services"]["scenes"];

const POP = { type: "spring", stiffness: 260, damping: 18, mass: 0.9 } as const;

/* ---------- 1. Agentes de IA: bot de conversa no celular ---------- */

function TypingDots() {
  return (
    <span className="flex gap-1 px-1 py-1.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-neutral-400"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
        />
      ))}
    </span>
  );
}

function ChatScene({ chat }: { chat: Scenes["chat"] }) {
  // Mensagens aparecem em sequência; antes de cada resposta do bot, "digitando…".
  const [step, setStep] = useState(0);
  const total = chat.messages.length * 2;
  useEffect(() => {
    if (step >= total) return;
    const t = setTimeout(() => setStep((s) => s + 1), step % 2 === 0 ? 650 : 500);
    return () => clearTimeout(t);
  }, [step, total]);

  return (
    <div className="clay-light relative h-[360px] w-[200px] rounded-[42px] p-3 sm:h-[400px] sm:w-[220px]">
      <div className="clay-screen flex h-full flex-col overflow-hidden rounded-[32px]">
        <div className="flex items-center gap-2 px-4 pt-5 pb-3">
          <span className="clay-bubble-light grid size-7 place-items-center rounded-full text-[10px] font-bold text-black">
            AI
          </span>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold text-white">{chat.name}</p>
            <p className="text-[9px] text-neutral-500">{chat.status}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-2 px-3 pb-4">
          {chat.messages.map((m, i) => {
            const shown = step >= i * 2 + 1;
            const typing = m.from === "bot" && step === i * 2;
            if (!shown && !typing) return null;
            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.6, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={POP}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3 py-2 text-[10.5px] leading-snug",
                  m.from === "user"
                    ? "clay-bubble-light self-end rounded-br-md text-black"
                    : "clay-bubble-dark self-start rounded-bl-md text-neutral-100",
                )}
              >
                {typing ? <TypingDots /> : m.text}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- 2. Dados: painel com barras crescendo ---------- */

const BARS = [0.35, 0.55, 0.45, 0.7, 0.62, 0.85, 0.95];

function DashboardScene({ dashboard }: { dashboard: Scenes["dashboard"] }) {
  return (
    <div className="clay-light w-[300px] rounded-[32px] p-4 sm:w-[340px]">
      <div className="clay-screen rounded-[22px] p-5">
        <p className="text-xs font-semibold text-white">{dashboard.title}</p>
        <p className="mt-1 flex items-center gap-1.5 text-[10px] text-neutral-500">
          <motion.span
            className="size-1.5 rounded-full bg-white"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          {dashboard.legend}
        </p>
        <div className="mt-6 flex h-40 items-end gap-2.5">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              className={cn("flex-1 origin-bottom rounded-t-lg", i === BARS.length - 1 ? "clay-bubble-light" : "clay-bubble-dark")}
              style={{ height: `${h * 100}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ ...POP, delay: 0.15 + i * 0.08 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- 3. Manutenção: PC com código rolando e uma correção ---------- */

const CODE: { text: string; kind?: "del" | "add" | "ok" | "dim" }[] = [
  { text: "import { createAgent } from './core'", kind: "dim" },
  { text: "" },
  { text: "export const agent = createAgent({" },
  { text: "  model: 'reasoning'," },
  { text: "  tools: [crm, agenda, whatsapp]," },
  { text: "})" },
  { text: "" },
  { text: "- if (order.status = 'paid') {", kind: "del" },
  { text: "+ if (order.status === 'paid') {", kind: "add" },
  { text: "    await notify(order.customer)" },
  { text: "  }" },
  { text: "" },
  { text: "✓ build ok · tests passed · deployed", kind: "ok" },
];

function CodeScene({ code }: { code: Scenes["code"] }) {
  const [lines, setLines] = useState(0);
  useEffect(() => {
    if (lines >= CODE.length) return;
    const t = setTimeout(() => setLines((n) => n + 1), 170);
    return () => clearTimeout(t);
  }, [lines]);

  return (
    <div className="flex flex-col items-center">
      <div className="clay-light w-[310px] rounded-[28px] p-3.5 sm:w-[360px]">
        <div className="clay-screen h-[210px] overflow-hidden rounded-[18px] sm:h-[230px]">
          <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
            <span className="size-2 rounded-full bg-neutral-600" />
            <span className="size-2 rounded-full bg-neutral-600" />
            <span className="size-2 rounded-full bg-neutral-600" />
            <span className="ml-2 font-mono text-[9px] text-neutral-500">{code.file}</span>
          </div>
          <div className="px-3 py-2 font-mono text-[9.5px] leading-[1.55] sm:text-[10.5px]">
            {CODE.slice(0, lines).map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                  "whitespace-pre",
                  l.kind === "del" && "text-neutral-600 line-through",
                  l.kind === "add" && "text-white",
                  l.kind === "ok" && "font-semibold text-white",
                  l.kind === "dim" && "text-neutral-500",
                  !l.kind && "text-neutral-300",
                )}
              >
                {l.text || " "}
              </motion.div>
            ))}
            {lines < CODE.length && (
              <motion.span
                className="inline-block h-3 w-1.5 bg-white"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        </div>
      </div>
      {/* pé do monitor */}
      <div className="clay-light h-9 w-16 rounded-b-xl" />
      <div className="clay-light h-3.5 w-36 rounded-full" />
    </div>
  );
}

/* ---------- 4. Web & Mobile: navegador e celular sendo montados ---------- */

function Block({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...POP, delay }}
    />
  );
}

function WebScene({ web }: { web: Scenes["web"] }) {
  return (
    <div className="relative">
      <div className="clay-light w-[300px] rounded-[28px] p-3 sm:w-[340px]">
        <div className="clay-screen overflow-hidden rounded-[18px]">
          <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2">
            <span className="size-2 rounded-full bg-neutral-600" />
            <span className="size-2 rounded-full bg-neutral-600" />
            <span className="ml-1 flex-1 truncate rounded-full bg-white/5 px-2 py-0.5 font-mono text-[9px] text-neutral-400">
              {web.url}
            </span>
          </div>
          <div className="space-y-2.5 p-4">
            <Block className="clay-bubble-dark h-3 w-16 rounded-full" delay={0.1} />
            <Block className="clay-bubble-light h-16 rounded-xl" delay={0.25} />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <Block key={i} className="clay-bubble-dark h-12 rounded-lg" delay={0.4 + i * 0.1} />
              ))}
            </div>
            <Block className="clay-bubble-dark h-3 w-28 rounded-full" delay={0.75} />
          </div>
        </div>
      </div>
      <motion.div
        className="clay-dark absolute -right-6 -bottom-8 h-[150px] w-[78px] rounded-[20px] p-1.5 sm:-right-10"
        initial={{ opacity: 0, x: 30, rotate: 12 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ ...POP, delay: 0.55 }}
      >
        <div className="clay-screen flex h-full flex-col gap-1.5 rounded-[15px] p-2">
          <Block className="clay-bubble-light h-8 rounded-md" delay={0.8} />
          <Block className="clay-bubble-dark h-2 w-10 rounded-full" delay={0.9} />
          <Block className="clay-bubble-dark h-2 w-8 rounded-full" delay={1} />
          <Block className="clay-bubble-dark mt-auto h-5 rounded-md" delay={1.1} />
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Palco ---------- */

const DURATION = 4800;

function renderScene(index: number, scenes: Scenes) {
  switch (index) {
    case 0:
      return <ChatScene chat={scenes.chat} />;
    case 1:
      return <DashboardScene dashboard={scenes.dashboard} />;
    case 2:
      return <CodeScene code={scenes.code} />;
    default:
      return <WebScene web={scenes.web} />;
  }
}

/**
 * Cena única (mobile/tablet): aparece acima do texto do serviço.
 * Monta só quando entra na tela, então a animação recomeça toda vez que o usuário rola até ela.
 */
export function ServiceScene({ index, scenes, className }: { index: number; scenes: Scenes; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px" });

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black",
        className,
      )}
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={POP}
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              {renderScene(index, scenes)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="pointer-events-none absolute bottom-6 left-1/2 h-6 w-44 -translate-x-1/2 rounded-[50%] bg-black/70 blur-xl" />
    </div>
  );
}

/**
 * Palco de cenas "massinha" (uma por serviço). Troca sozinho; `active` controlado pela lista
 * (hover/foco num serviço). Pausa fora da tela e não roda sozinho com "reduzir movimento".
 */
export function ServiceStage({
  scenes,
  labels,
  active,
  onActiveChange,
  paused,
}: {
  scenes: Scenes;
  labels: string[];
  active: number;
  onActiveChange: (i: number) => void;
  paused: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const reduce = useReducedMotion();
  const running = inView && !paused && !reduce;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => onActiveChange((active + 1) % 4), DURATION);
    return () => clearTimeout(t);
  }, [running, active, onActiveChange]);

  const scene = renderScene(active, scenes);

  return (
    <div ref={ref} aria-hidden className="relative flex h-full flex-col">
      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.8, y: 40, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -30, rotate: 4, transition: { duration: 0.25 } }}
            transition={POP}
          >
            {/* flutuação leve, como um objeto de massinha suspenso */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              {scene}
            </motion.div>
          </motion.div>
        </AnimatePresence>
        {/* sombra no "chão" */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 h-6 w-48 -translate-x-1/2 rounded-[50%] bg-black/70 blur-xl" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-wide text-neutral-500 uppercase">
          {String(active + 1).padStart(2, "0")} — {labels[active]}
        </span>
        <div className="ml-auto flex gap-1.5">
          {labels.map((_, i) => (
            <span key={i} className="relative h-0.5 w-6 overflow-hidden rounded-full bg-white/15">
              {i === active && (
                <motion.span
                  key={`${active}-${running}`}
                  className="absolute inset-y-0 left-0 bg-white"
                  initial={{ width: running ? "0%" : "100%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: running ? DURATION / 1000 : 0, ease: "linear" }}
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
