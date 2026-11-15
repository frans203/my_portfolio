import { cn } from "@/lib/utils";

// Monograma FS (mesmo desenho de public/brand/fs-mark-*.svg), em currentColor.
// `draw` anima o traço sendo desenhado (CSS, respeita prefers-reduced-motion).
export const FS_PATHS = ["M11 53V11H53", "M11 32H27", "M37 11V32H53V53H35"] as const;

export function FsMark({
  className,
  draw = false,
  strokeWidth = 6,
  title,
}: {
  className?: string;
  draw?: boolean;
  strokeWidth?: number;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {FS_PATHS.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          className={draw ? "fs-draw" : undefined}
          style={draw ? { animationDelay: `${i * 0.22}s` } : undefined}
        />
      ))}
    </svg>
  );
}
