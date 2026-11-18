"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Card wrapper with a pointer-following radial highlight.
 * Children are wrapped once, so absolutely-positioned decoration inside a
 * card stays relative to the card and never leaks into the grid.
 */
export default function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || frame.current) return;
    const { clientX, clientY } = event;
    frame.current = window.requestAnimationFrame(() => {
      frame.current = 0;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  }

  return (
    <div ref={ref} onPointerMove={onPointerMove} className={cn("spotlight", className)}>
      <span className="spotlight-glow" aria-hidden="true" />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
