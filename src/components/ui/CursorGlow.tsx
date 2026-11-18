"use client";

import { useEffect, useRef } from "react";

/** Soft accent aura that trails the pointer. Desktop pointers only. */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduce.matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let visible = false;

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (Math.abs(targetX - x) < 0.4 && Math.abs(targetY - y) < 0.4) {
        raf = 0;
        return;
      }
      raf = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!raf) raf = window.requestAnimationFrame(tick);
    };

    const onMove = (event: globalThis.PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!visible) {
        visible = true;
        x = targetX;
        y = targetY;
        el.style.opacity = "1";
      }
      start();
    };

    const onLeave = () => {
      visible = false;
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="cursor-glow"
      style={{ opacity: 0, transition: "opacity 600ms ease" }}
    />
  );
}
