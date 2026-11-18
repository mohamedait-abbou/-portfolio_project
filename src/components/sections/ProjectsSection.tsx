"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Spotlight from "@/components/ui/Spotlight";
import { projects, secondarySystems } from "@/data/projects";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/cn";

const accents = ["#4f7cff", "#9a6bff", "#3dd6e8"];
const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectsSection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const project = projects[active];
  const accent = accents[active] ?? accents[0];
  const previous = projects[(active - 1 + projects.length) % projects.length];
  const next = projects[(active + 1) % projects.length];

  return (
    <section id="work" className="relative overflow-hidden border-t border-line py-24 lg:py-32">
      <div
        className="pointer-events-none absolute right-[-10%] top-[12%] h-[520px] w-[520px] rounded-full opacity-30 blur-[140px]"
        style={{ background: `radial-gradient(circle, ${accent}44, transparent 68%)` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="01"
          label="Work"
          title="Selected work, with the"
          hinge="trade-offs"
          note="Select a system to inspect the problem, the decisions and what is still unfinished. Every claim links back to a repository."
        />

        <p className="sr-only" aria-live="polite">
          {project.title} selected
        </p>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Selector */}
          <div className="lg:col-span-5">
            <div
              className="flex gap-2 overflow-x-auto pb-2 lg:hidden"
              role="group"
              aria-label="Select project"
            >
              {projects.map((item, i) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={cn(
                    "shrink-0 rounded-full border px-3.5 py-2 font-mono text-[0.64rem] uppercase tracking-[0.08em] transition-colors",
                    active === i
                      ? "border-accent/60 bg-accent/10 text-ink"
                      : "border-line text-muted hover:border-line-strong hover:text-ink",
                  )}
                >
                  <span className="mr-2 text-accent">[{item.index}]</span>
                  {item.title}
                </button>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <ul className="hidden overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface/30 backdrop-blur-sm lg:block">
                {projects.map((item, i) => {
                  const isActive = active === i;
                  return (
                    <li key={item.slug} className="border-b border-line last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-pressed={isActive}
                        className={cn(
                          "group relative grid w-full grid-cols-[2.4rem_1fr_auto] items-start gap-4 px-5 py-7 text-left transition-colors",
                          isActive ? "bg-white/[0.035]" : "hover:bg-white/[0.02]",
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="project-active"
                            className="absolute inset-y-0 left-0 w-[2px]"
                            style={{ background: accent }}
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span
                          className={cn(
                            "pt-1 font-mono text-[0.62rem] tabular-nums transition-colors",
                            isActive ? "text-accent" : "text-muted",
                          )}
                        >
                          {item.index}
                        </span>
                        <span>
                          <span
                            className={cn(
                              "block text-xl font-medium tracking-[-0.03em] transition-colors",
                              isActive ? "text-ink" : "text-ink/80 group-hover:text-ink",
                            )}
                          >
                            {item.title}
                          </span>
                          <span className="mono-label mt-2 block normal-case tracking-[0.04em]">
                            {item.category}
                          </span>
                          <span className="mt-3 flex flex-wrap gap-1.5">
                            {item.stack.slice(0, 4).map((tech) => (
                              <span key={tech} className="chip !py-1 !text-[0.62rem]">
                                {tech}
                              </span>
                            ))}
                          </span>
                        </span>
                        <span className="flex items-center gap-2 pt-1">
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              item.status === "In progress"
                                ? "bg-amber-400/80"
                                : "bg-emerald-400/80",
                            )}
                            title={item.status}
                          />
                          <Icon
                            name="arrow-up-right"
                            size={16}
                            className={cn(
                              "transition-all",
                              isActive
                                ? "text-accent"
                                : "text-muted group-hover:translate-x-0.5 group-hover:text-ink",
                            )}
                          />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 hidden items-center gap-4 lg:flex">
                <span className="mono-label text-[0.62rem]">
                  [ {project.index} / 0{projects.length} ]
                </span>
                <span className="relative h-px flex-1 bg-line">
                  <motion.span
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent-2"
                    animate={{ width: `${((active + 1) / projects.length) * 100}%` }}
                    transition={{ duration: reduce ? 0 : 0.45, ease }}
                  />
                </span>
                <span className="mono-label text-[0.62rem]">Selected</span>
              </div>
            </div>
          </div>

          {/* Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.article
                key={project.slug}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
                transition={{ duration: reduce ? 0 : 0.38, ease }}
              >
                <Spotlight className="group relative overflow-hidden rounded-[22px] border border-line bg-surface shadow-[0_40px_120px_-60px_rgba(79,124,255,0.5)]">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                    <Image
                      src={asset(project.image)}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="img-reveal object-cover object-center"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-40 mix-blend-color"
                      style={{
                        background: `radial-gradient(110% 100% at 85% 0%, ${accent}66, transparent 62%)`,
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent"
                      aria-hidden="true"
                    />

                    <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-line bg-bg/70 px-3 py-2 backdrop-blur-md">
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          project.status === "In progress"
                            ? "bg-amber-400/80"
                            : "bg-emerald-400/80",
                        )}
                      />
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink">
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-wrap items-end justify-between gap-3 p-4 sm:p-5">
                      <div>
                        <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-accent">
                          Case study / {project.index}
                        </p>
                        <p className="mt-1 max-w-[24ch] font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.08em] text-ink/80">
                          {project.category}
                        </p>
                      </div>
                      <span className="rounded-full border border-line bg-bg/60 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-muted backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </Spotlight>

                <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="section-index">Project {project.index}</span>
                  <span className="h-px w-8 bg-line-strong" />
                  <span className="mono-label">{project.category}</span>
                  <span className="mono-label ml-auto hidden sm:inline">{project.statusNote}</span>
                </div>

                <h3 className="mt-4 text-[clamp(1.8rem,3.2vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                  {project.title}
                  <span className="text-accent">.</span>
                </h3>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-[1.75] text-muted sm:text-[1.02rem]">
                  {project.summary}
                </p>

                {/* Three-part brief: problem / approach / contribution */}
                <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
                  {[
                    { label: "Problem", body: project.problem },
                    { label: "Approach", body: project.solution },
                    { label: "My part", body: project.contribution },
                  ].map((block) => (
                    <div key={block.label} className="bg-bg/85 p-5">
                      <p className="mono-label text-[0.58rem]">[ {block.label} ]</p>
                      <p className="mt-3 text-[0.82rem] leading-[1.7] text-muted">{block.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {project.facts.map((fact) => (
                    <div key={fact.label} className="bg-bg/85 px-5 py-4">
                      <p className="mono-label text-[0.58rem]">{fact.label}</p>
                      <p className="mt-2 text-sm text-ink">{fact.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.caveat && (
                  <p className="mt-6 border-l-2 border-line-strong pl-4 text-xs leading-relaxed text-muted">
                    <span className="text-accent">{"// "}</span>
                    {project.caveat}
                  </p>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                  >
                    <Icon name="github" size={15} />
                    <span>View repository</span>
                  </a>
                  <a href="#contact" className="btn btn-ghost">
                    Ask me about it
                    <Icon name="arrow-right" size={15} />
                  </a>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Previous / next */}
            <div className="mt-10 flex items-stretch justify-between gap-3 border-t border-line pt-6">
              <button
                type="button"
                onClick={() => setActive((active - 1 + projects.length) % projects.length)}
                className="group flex max-w-[48%] flex-1 items-center gap-3 text-left"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
                  <Icon name="arrow-right" size={14} className="rotate-180" />
                </span>
                <span className="min-w-0">
                  <span className="mono-label block text-[0.56rem]">Previous</span>
                  <span className="mt-0.5 block truncate text-[0.8rem] text-ink">
                    {previous.title}
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActive((active + 1) % projects.length)}
                className="group flex max-w-[48%] flex-1 items-center justify-end gap-3 text-right"
              >
                <span className="min-w-0">
                  <span className="mono-label block text-[0.56rem]">Next</span>
                  <span className="mt-0.5 block truncate text-[0.8rem] text-ink">{next.title}</span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
                  <Icon name="arrow-right" size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary systems */}
        <Reveal className="mt-24 lg:mt-32">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
            <p className="mono-label">[ Also in the repository ]</p>
            <p className="section-index">03 entries</p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {secondarySystems.map((system) => (
              <Spotlight
                key={system.name}
                className="glass group h-full rounded-[var(--radius-card)] p-6 transition-colors hover:border-accent/25"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium tracking-[-0.025em] text-ink">
                    {system.name}
                  </h3>
                  {system.github ? (
                    <a
                      href={system.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
                      aria-label={`${system.name} on GitHub`}
                    >
                      <Icon name="arrow-up-right" size={14} />
                    </a>
                  ) : (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted">
                      <Icon name="code" size={14} />
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[0.82rem] leading-[1.7] text-muted">{system.detail}</p>
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
                  {system.stack.map((tech) => (
                    <span key={tech} className="chip !py-1 !text-[0.62rem]">
                      {tech}
                    </span>
                  ))}
                </div>
              </Spotlight>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
