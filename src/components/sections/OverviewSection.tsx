import CopyEmail from "@/components/ui/CopyEmail";
import Icon from "@/components/ui/Icon";
import LocalTime from "@/components/ui/LocalTime";
import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";
import { site } from "@/config/site";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/cn";

const path = ["Interface", "Database", "Container", "CI/CD", "Monitoring"];

const strengths = [
  {
    icon: "layers" as const,
    title: "Full path, not fragments",
    detail: "Interface, database, container, pipeline and monitoring — joined and documented.",
  },
  {
    icon: "shield" as const,
    title: "Tests gate the release",
    detail: "Pest suites, healthchecks and rollback steps before anything reaches a server.",
  },
  {
    icon: "spark" as const,
    title: "Honest trade-offs",
    detail: "Real numbers, stated limits and a visible list of what is still unfinished.",
  },
];

const toolsTracked = skillGroups.reduce((total, group) => total + group.skills.length, 0);
const workingTools = skillGroups.reduce(
  (total, group) => total + group.skills.filter((skill) => skill.level === "Working").length,
  0,
);

const stats = [
  { value: "03", label: "featured builds" },
  { value: "01", label: "shipped internship" },
  { value: "06", label: "stack areas" },
  { value: `${workingTools}/${toolsTracked}`, label: "tools in working use" },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="relative overflow-hidden border-b border-line py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono-label flex items-center gap-2">
                <span className="status-dot live" aria-hidden="true" />
                [ 00 / Recruiter snapshot ]
              </p>
              <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                The short version<span className="text-accent">.</span>
              </h2>
            </div>
            <p className="mono-label max-w-xs text-left sm:text-right">
              Everything a first-pass review needs, in one screen.
            </p>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-3 lg:grid-cols-12">
          {/* Availability + positioning */}
          <Reveal className="lg:col-span-7">
            <Spotlight className="glass edge-glow h-full rounded-[var(--radius-card)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink">
                  <span className="status-dot live" aria-hidden="true" />
                  Open to internships
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  Full-stack · DevOps · AI/ML
                </span>
              </div>

              <p className="mt-7 max-w-[24ch] text-[clamp(1.55rem,2.7vw,2.35rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">
                An engineering student who ships the{" "}
                <span className="hinge hinge-accent">whole</span> system.
              </p>
              <p className="mt-4 max-w-lg text-[0.92rem] leading-[1.75] text-muted">
                I turn an idea into a running product: the interface people touch, the database
                behind it, the container that carries it and the pipeline that deploys it.
              </p>

              <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
                <div className="bg-bg/70 px-4 py-3.5">
                  <p className="mono-label text-[0.58rem]">[ Role ]</p>
                  <p className="mt-1.5 text-[0.82rem] text-ink">Software engineering</p>
                </div>
                <div className="bg-bg/70 px-4 py-3.5">
                  <p className="mono-label text-[0.58rem]">[ Based ]</p>
                  <p className="mt-1.5 text-[0.82rem] text-ink">{site.location}</p>
                </div>
                <div className="bg-bg/70 px-4 py-3.5">
                  <p className="mono-label text-[0.58rem]">[ Local time ]</p>
                  <LocalTime
                    className="mt-1.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink"
                    label=""
                    dot={false}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a href="#work" className="btn btn-primary">
                  <span>See the work</span>
                  <Icon name="arrow-right" size={15} />
                </a>
                <CopyEmail email={site.email} label="Copy email" />
                <a
                  href={`mailto:${site.email}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-ghost !px-4"
                  aria-label="Send an email"
                >
                  <Icon name="mail" size={15} />
                </a>
              </div>
            </Spotlight>
          </Reveal>

          {/* Selected systems */}
          <Reveal className="lg:col-span-5" delay={0.06}>
            <Spotlight className="glass h-full rounded-[var(--radius-card)] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="mono-label">[ Selected systems ]</p>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                  2025 — 2026
                </span>
              </div>

              <ul className="mt-5">
                {projects.map((project) => (
                  <li key={project.slug} className="border-t border-line first:border-t-0">
                    <a
                      href="#work"
                      className="group flex items-center gap-3 py-4 transition-colors"
                    >
                      <span className="font-mono text-[0.62rem] text-accent">{project.index}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[0.95rem] font-medium tracking-[-0.02em] text-ink transition-colors group-hover:text-accent">
                          {project.title}
                        </span>
                        <span className="mt-0.5 block truncate font-mono text-[0.6rem] uppercase tracking-[0.08em] text-muted">
                          {project.category.split(" · ")[0]}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "h-1.5 w-1.5 shrink-0 rounded-full",
                          project.status === "In progress"
                            ? "bg-amber-400/80"
                            : "bg-emerald-400/80",
                        )}
                        aria-label={project.status}
                        title={project.status}
                      />
                      <Icon
                        name="arrow-up-right"
                        size={14}
                        className="text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#work"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
              >
                Read the case studies
                <Icon name="arrow-right" size={13} />
              </a>
            </Spotlight>
          </Reveal>

          {/* Strengths */}
          <Reveal className="lg:col-span-4" delay={0.08}>
            <Spotlight className="glass h-full rounded-[var(--radius-card)] p-6">
              <p className="mono-label">[ What I bring ]</p>
              <ul className="mt-5 space-y-5">
                {strengths.map((item) => (
                  <li key={item.title} className="flex gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2/70 text-accent">
                      <Icon name={item.icon} size={15} />
                    </span>
                    <span>
                      <span className="block text-[0.88rem] font-medium tracking-[-0.01em] text-ink">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[0.76rem] leading-relaxed text-muted">
                        {item.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Spotlight>
          </Reveal>

          {/* Numbers */}
          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="glass grid h-full grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] bg-line p-px lg:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label} className="group bg-surface/60 px-5 py-4">
                  <p className="text-[1.45rem] font-medium leading-none tracking-[-0.04em] text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Delivery path */}
          <Reveal className="lg:col-span-5" delay={0.12}>
            <Spotlight className="glass h-full rounded-[var(--radius-card)] p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="mono-label">[ The delivery path ]</p>
                <Icon name="server" size={15} className="text-accent" />
              </div>

              <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3">
                {path.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-line bg-bg/60 px-2.5 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-ink">
                      {step}
                    </span>
                    {i < path.length - 1 && (
                      <Icon name="chevron" size={11} className="text-accent/70" />
                    )}
                  </li>
                ))}
              </ol>

              <div className="relative mt-6 h-px overflow-hidden bg-line" aria-hidden="true">
                <span className="flow-line" />
              </div>

              <p className="mt-5 text-[0.78rem] leading-relaxed text-muted">
                Every project is documented along the same path — including the parts that are not
                finished yet.
              </p>
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
