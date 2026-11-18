"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

import Icon from "@/components/ui/Icon";
import LocalTime from "@/components/ui/LocalTime";
import { site } from "@/config/site";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/cn";

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.36;
      let current = "";
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="nav-glass fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label={`${site.name} — back to top`}
          >
            <span className="font-mono text-sm font-medium tracking-[0.02em] text-ink">
              {site.initials}
              <span className="text-accent">.</span>
            </span>
            <span className="mono-label hidden text-[0.62rem] sm:inline">PORTFOLIO / 26</span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] transition-colors duration-200",
                    isActive
                      ? "bg-white/[0.04] text-ink"
                      : "text-muted hover:bg-white/[0.03] hover:text-ink",
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden xl:inline-flex">
              <LocalTime className="mono-label text-[0.6rem]" />
            </span>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent/60 hover:bg-accent/20 sm:inline-flex"
            >
              <span className="status-dot live" aria-hidden="true" />
              Available
              <Icon name="arrow-up-right" size={12} />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              <Icon name="menu" size={17} />
            </button>
          </div>
        </div>
        <motion.div
          className="absolute inset-x-0 -bottom-px h-px origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
          style={{ scaleX }}
          aria-hidden="true"
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-bg lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="aurora aurora-a left-[-30%] top-[8%] h-[420px] w-[420px] opacity-50" />
              <div className="aurora aurora-b bottom-[-18%] right-[-20%] h-[380px] w-[380px] opacity-40" />
            </div>

            <div className="relative flex h-16 shrink-0 items-center justify-between border-b border-line px-5 sm:px-8">
              <span className="font-mono text-sm font-medium">
                {site.initials}
                <span className="text-accent">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
                aria-label="Close navigation menu"
                autoFocus
              >
                <Icon name="close" size={17} />
              </button>
            </div>

            <nav className="relative flex flex-1 flex-col justify-center px-6 sm:px-8" aria-label="Mobile">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 border-b border-line py-4"
                >
                  <span className="mono-label w-6 shrink-0 text-[0.62rem]">[{item.index}]</span>
                  <span className="text-[clamp(2rem,9vw,3.2rem)] font-medium leading-none tracking-[-0.045em] text-ink transition-colors group-hover:text-accent">
                    {item.label}
                  </span>
                  <Icon
                    name="arrow-up-right"
                    size={18}
                    className="ml-auto text-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
                  />
                </motion.a>
              ))}
            </nav>

            <div className="relative shrink-0 border-t border-line px-6 py-6 sm:px-8">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink"
                >
                  <Icon name="mail" size={14} className="text-accent" />
                  Email
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted"
                >
                  <Icon name="github" size={14} />
                  GitHub
                </a>
                <a
                  href={site.bluesky}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted"
                >
                  <Icon name="bluesky" size={14} />
                  Bluesky
                </a>
              </div>
              <LocalTime className="mono-label mt-5 text-[0.6rem]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
