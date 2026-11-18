"use client";

import { useEffect, useState } from "react";

import { navItems } from "@/data/nav";

/** Desktop section rail with scroll-spy. Secondary navigation, not a replacement for the nav. */
export default function SectionRail() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.4;
      let current = "top";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= marker) current = item.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="section-rail" aria-label="Section progress">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          data-active={active === item.id}
          aria-current={active === item.id ? "location" : undefined}
        >
          <span>
            {item.index} / {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
