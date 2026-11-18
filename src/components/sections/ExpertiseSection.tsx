"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Spotlight from "@/components/ui/Spotlight";
import { skillGroups, type Level } from "@/data/skills";
import { cn } from "@/lib/cn";

const levelStyle: Record<Level, string> = {
  Working: "border-accent/45 bg-accent/10 text-accent",
  Familiar: "border-line-strong bg-white/[0.03] text-ink",
  Learning: "border-line text-muted",
};

const levelDot: Record<Level, string> = {
  Working: "bg-accent",
  Familiar: "bg-ink/70",
  Learning: "bg-muted/50",
};

const levels: Level[] = ["Working", "Familiar", "Learning"];

const legend: { level: Level; meaning: string }[] = [
  { level: "Working", meaning: "Used in shipped work" },
  { level: "Familiar", meaning: "Used in experiments or coursework" },
  { level: "Learning", meaning: "Actively studying" },
];

const allSkills = skillGroups.flatMap((group) => group.skills);
const total = allSkills.length;

export default function ExpertiseSection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const group = skillGroups[active];

  const groupCounts = levels.map((level) => ({
    level,
    count: group.skills.filter((skill) => skill.level === level).length,
  }));

  return (
    <section id="expertise" className="relative border-t border-line py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="04"
          label="Stack"
          title="What I use, and what I am still"
          hinge="learning"
          note="No proficiency bars. Each label describes where a tool actually sits in my work."
        />

        <Reveal className="mt-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="glass rounded-2xl px-5 py-4">
              <p className="text-[1.6rem] font-medium leading-none tracking-[-0.04em] text-gradient">
                {total}
              </p>
              <p className="mt-1.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                tools tracked
              </p>
            </div>
            {levels.map((level) => (
              <div key={level} className="glass rounded-2xl px-5 py-4">
                <p className="flex items-baseline gap-2">
                  <span className="text-[1.6rem] font-medium leading-none tracking-[-0.04em] text-ink">
                    {allSkills.filter((skill) => skill.level === level).length}
                  </span>
                  <span className={cn("h-1.5 w-1.5 rounded-full", levelDot[level])} />
                </p>
                <p className="mt-1.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                  {level}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          <div
            className="flex gap-1 overflow-x-auto border-b border-line pb-px"
            role="tablist"
            aria-label="Skill groups"
          >
            {skillGroups.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "relative shrink-0 rounded-t-lg px-3.5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-colors",
                  active === i ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                <span className="mr-1.5 text-accent/80">{item.index}</span>
                {item.label}
                {active === i && (
                  <motion.span
                    layoutId="skill-active"
                    className="absolute inset-x-2 -bottom-px h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={group.id}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
              role="tabpanel"
              className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="mono-label">
                    <span className="text-accent">{"//"}</span> [{group.index}]{""}
                    {group.label.toUpperCase()}
                  </p>
                  <p className="text-xs text-muted">{group.note}</p>
                </div>

                <ul className="mt-5 overflow-hidden rounded-[var(--radius-card)] border border-line">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line bg-surface/25 px-5 py-4 transition-colors last:border-b-0 hover:bg-white/[0.03] sm:grid-cols-[1fr_1fr_auto] sm:gap-6"
                    >
                      <span className="text-[0.96rem] font-medium tracking-[-0.01em] text-ink">
                        {skill.name}
                      </span>
                      <span className="col-start-1 text-[0.76rem] leading-relaxed text-muted sm:col-start-2 sm:row-start-1">
                        {skill.detail}
                      </span>
                      <span
                        className={cn(
                          "col-start-2 row-start-1 justify-self-end rounded-full border px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.08em] sm:col-start-3",
                          levelStyle[skill.level],
                        )}
                      >
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:col-span-4">
                <Spotlight className="glass h-full rounded-[var(--radius-card)] p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="mono-label">[ Group signal ]</p>
                    <Icon name="target" size={15} className="text-accent" />
                  </div>

                  <div className="mt-5">
                    <div className="flex h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      {groupCounts.map((item) =>
                        item.count > 0 ? (
                          <span
                            key={item.level}
                            className={levelDot[item.level]}
                            style={{ width: `${(item.count / group.skills.length) * 100}%` }}
                          />
                        ) : null,
                      )}
                    </div>
                    <ul className="mt-5 space-y-3">
                      {groupCounts.map((item) => (
                        <li
                          key={item.level}
                          className="flex items-center justify-between gap-3 text-[0.76rem]"
                        >
                          <span className="flex items-center gap-2 text-muted">
                            <span className={cn("h-1.5 w-1.5 rounded-full", levelDot[item.level])} />
                            {item.level}
                          </span>
                          <span className="font-mono text-[0.68rem] text-ink">{item.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-line pt-5">
                    <p className="mono-label text-[0.56rem]">[ How to read this ]</p>
                    <p className="mt-2 text-[0.74rem] leading-relaxed text-muted">
                      Labels describe context, not confidence: shipped work, side experiments, or
                      active study. The work section is the evidence.
                    </p>
                  </div>
                </Spotlight>
              </aside>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {legend.map((item) => (
              <div key={item.level} className="rounded-2xl border border-line p-4">
                <span className="flex items-center gap-2">
                  <span className={cn("h-1.5 w-1.5 rounded-full", levelDot[item.level])} />
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-ink">
                    {item.level}
                  </span>
                </span>
                <p className="mt-2 text-[0.72rem] leading-relaxed text-muted">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
