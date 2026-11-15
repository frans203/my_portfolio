"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Onde já atuamos: Brasil e Abu Dhabi (Halavanca BJJ).
const BRAZIL: [number, number] = [-15.79, -47.88];
const ABU_DHABI: [number, number] = [24.45, 54.38];

/**
 * Globo de pontos em WebGL (cobe), monocromático, girando devagar.
 * - Arrastável com mouse/toque.
 * - Pausa fora da tela e respeita `prefers-reduced-motion` (fica parado).
 */
export function HeroGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drag = useRef<{ startX: number; delta: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.offsetWidth;
    let phi = 4.6; // começa mostrando América do Sul → Oriente Médio
    let dragOffset = 0;
    let visible = true;
    let frame = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi,
      theta: 0.28,
      dark: 1,
      diffuse: 1.1,
      mapSamples: 18000,
      mapBrightness: 5,
      mapBaseBrightness: 0,
      baseColor: [0.28, 0.28, 0.28],
      markerColor: [1, 1, 1],
      glowColor: [0.12, 0.12, 0.12],
      markers: [
        { location: BRAZIL, size: 0.06 },
        { location: ABU_DHABI, size: 0.06 },
      ],
      arcs: [{ from: BRAZIL, to: ABU_DHABI }],
      arcColor: [1, 1, 1],
      arcWidth: 0.6,
      arcHeight: 0.35,
      opacity: 0.95,
    });

    const loop = () => {
      if (visible) {
        if (!reduceMotion && !drag.current) phi += 0.0025;
        const live = drag.current ? drag.current.delta : 0;
        globe.update({ phi: phi + dragOffset + live, width: width * dpr, height: width * dpr });
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const resize = new ResizeObserver(() => {
      width = canvas.offsetWidth;
    });
    resize.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    io.observe(canvas);

    // Ao soltar o arraste, incorpora o deslocamento ao offset permanente.
    const commitDrag = () => {
      if (drag.current) dragOffset += drag.current.delta;
      drag.current = null;
      canvas.style.cursor = "grab";
    };
    window.addEventListener("pointerup", commitDrag);

    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      io.disconnect();
      window.removeEventListener("pointerup", commitDrag);
      globe.destroy();
    };
  }, []);

  return (
    <div aria-hidden className={cn("pointer-events-none aspect-square", className)}>
      <canvas
        ref={canvasRef}
        className="pointer-events-auto size-full cursor-grab opacity-0 transition-opacity duration-[1.5s] [contain:layout_paint_size]"
        onPointerDown={(e) => {
          drag.current = { startX: e.clientX, delta: 0 };
          e.currentTarget.style.cursor = "grabbing";
        }}
        onPointerMove={(e) => {
          if (drag.current) drag.current.delta = (e.clientX - drag.current.startX) / 200;
        }}
        onTouchMove={(e) => {
          const t = e.touches[0];
          if (drag.current && t) drag.current.delta = (t.clientX - drag.current.startX) / 120;
        }}
      />
    </div>
  );
}
