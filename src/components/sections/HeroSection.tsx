"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import HeroCanvasLoader from "@/components/three/HeroCanvasLoader";
import Icon from "@/components/ui/Icon";
import LocalTime from "@/components/ui/LocalTime";
import { site } from "@/config/site";
import { intro } from "@/data/profile";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease },
};

const headline = [
  { text: "Engineering" },
  { text: "ideas" },
  { text: "into" },
  { text: "intelligent", hinge: true },
  { text: "systems." },
];

const facts = [
  { label: "Based", value: "Marrakech, MA" },
  { label: "Focus", value: "Full-stack · DevOps · AI" },
  { label: "Status", value: "Open to internships" },
];

function KineticHeadline() {
  const reduce = useReducedMotion();

  return (
    <h1
      className="mt-7 max-w-[15ch] text-[clamp(2.9rem,6.1vw,6.2rem)] font-medium leading-[0.92] tracking-[-0.055em] text-ink"
      aria-label="Engineering ideas into intelligent systems."
    >
      {headline.map((word, i) => (
        <span key={word.text} aria-hidden="true">
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className={cn("inline-block", word.hinge && "hinge hinge-accent pr-[0.04em]")}
              initial={reduce ? { y: 0, opacity: 1 } : { y: "115%", opacity: 0, rotate: 3 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{
                duration: reduce ? 0 : 0.9,
                delay: reduce ? 0 : 0.16 + i * 0.075,
                ease,
              }}
            >
              {word.text}
            </motion.span>
          </span>
          {i < headline.length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
}

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-12 pt-28 lg:pb-14 lg:pt-32"
    >
      {/* Atmosphere */}
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="aurora aurora-a left-[-12%] top-[8%] h-[520px] w-[520px]"
        aria-hidden="true"
      />
      <div
        className="aurora aurora-b right-[-8%] top-[2%] h-[460px] w-[460px]"
        aria-hidden="true"
      />
      <div
        className="aurora aurora-c bottom-[-12%] left-[38%] h-[340px] w-[340px] opacity-40"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Statement */}
          <div className="lg:col-span-7">
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.04 }}>
              <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-line bg-surface/50 py-2 pl-3 pr-4 backdrop-blur-md">
                <span className="status-dot live" aria-hidden="true" />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink">
                  Available for internships
                </span>
                <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  Marrakech · 2026
                </span>
              </div>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="mono-label mt-7"
            >
              Computer engineering student <span className="text-accent">/</span> Full-stack · DevOps ·
              AI
            </motion.p>

            <KineticHeadline />

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.44 }}
              className="mt-8 max-w-xl"
            >
              <p className="text-[1.02rem] leading-[1.75] text-muted sm:text-[1.08rem]">{intro}</p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.52 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#work" className="btn btn-primary">
                <span>Explore selected work</span>
                <Icon name="arrow-right" size={16} />
              </a>
              <a href={`mailto:${site.email}`} className="btn btn-ghost">
                <Icon name="mail" size={15} />
                Get in touch
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-ghost !px-4"
                aria-label="GitHub profile"
              >
                <Icon name="github" size={16} />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {[
                { label: "GitHub", href: site.github, icon: "github" as const },
                { label: "Bluesky", href: site.bluesky, icon: "bluesky" as const },
                { label: "Email", href: `mailto:${site.email}`, icon: "mail" as const },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="group inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
                >
                  <Icon
                    name={link.icon}
                    size={14}
                    className="transition-colors group-hover:text-accent"
                  />
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Portrait + one wireframe object + live context */}
          <motion.div
            initial={false}
            className="relative lg:col-span-5"
            aria-label="Portrait and current focus"
          >
            <div className="pointer-events-none absolute -inset-16 lg:-inset-20" aria-hidden="true">
              <HeroCanvasLoader />
            </div>

            <div className="relative mx-auto w-full max-w-[382px] lg:ml-auto lg:mr-0">
              <div className="float-y relative">
                <div className="absolute -left-3 top-8 z-20 hidden sm:block">
                  <div className="glass edge-glow flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4">
                    <span className="status-dot live" aria-hidden="true" />
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink">
                      Now building
                    </span>
                    <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
                      SmartPark
                    </span>
                  </div>
                </div>

                <div className="bracket-frame group relative aspect-[4/5] overflow-hidden rounded-[22px] border border-line-strong bg-surface shadow-[0_40px_120px_-40px_rgba(79,124,255,0.35)]">
                  <Image
                    src={asset("/images/portrait.jpg")}
                    alt="Portrait of Mohamed Ait Abbou"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 382px"
                    className="object-cover object-top grayscale contrast-[1.08] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/25 via-transparent to-accent-2/15 mix-blend-color"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-bg via-bg/55 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-full border border-line bg-bg/45 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink backdrop-blur-md">
                      Fig. 01
                    </span>
                    <span className="font-display text-2xl italic leading-none text-ink/60">26</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                    <div>
                      <p className="text-[0.98rem] font-medium tracking-[-0.02em] text-ink">
                        {site.name}
                      </p>
                      <p className="mono-label mt-1 text-[0.62rem]">
                        Engineer, in progress
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg/40 text-accent backdrop-blur-md">
                      <Icon name="arrow-up-right" size={15} />
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-3 z-20 hidden sm:block">
                  <div className="glass edge-glow rounded-2xl px-4 py-3">
                    <p className="mono-label text-[0.58rem]">Next milestone</p>
                    <p className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink">
                      OCR · CPU latency
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-line bg-surface/40 px-3 py-3 backdrop-blur-sm"
                  >
                    <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-accent">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-[0.72rem] leading-snug text-ink">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex w-full max-w-[1440px] flex-wrap items-center gap-x-6 gap-y-4 px-5 sm:px-8 lg:mt-14 lg:px-12">
        <a href="#about" className="scroll-cue">
          <span className="scroll-cue-line" aria-hidden="true" />
          Scroll to explore
        </a>
        <span className="hidden h-px flex-1 bg-line sm:block" />
        <span className="mono-label hidden items-center gap-2 sm:flex">
          <span className="status-dot" aria-hidden="true" />
          Marrakech <LocalTime label="" dot={false} className="text-muted" />
        </span>
        <span className="mono-label hidden sm:inline">03 builds / 06 stack areas</span>
      </div>
    </section>
  );
}
