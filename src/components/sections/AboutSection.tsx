import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Spotlight from "@/components/ui/Spotlight";
import { aboutParagraphs, currentFocus, heroStatement, principles } from "@/data/profile";

const focusIcons = ["cpu", "spark", "target"] as const;

export default function AboutSection() {
  const [lead, ...rest] = aboutParagraphs;

  return (
    <section id="about" className="relative overflow-hidden border-t border-line py-24 lg:py-32">
      <div
        className="pointer-events-none absolute left-[-12%] top-[18%] h-[420px] w-[420px] rounded-full bg-accent/[0.06] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="03"
          label="About"
          title="I build the app and the"
          hinge="system"
          note="Engineering student, end-to-end builder. The details below are the ones I can point at."
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="max-w-2xl text-[1.1rem] leading-[1.75] text-ink sm:text-[1.22rem]">
              {lead}
            </p>

            <div className="mt-7 space-y-5 text-[0.95rem] leading-[1.8] text-muted sm:text-[1rem]">
              {rest.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
              <span className="mono-label">Mohamed Ait Abbou</span>
              <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
              <span className="mono-label">Marrakech, Morocco</span>
            </div>

            <div className="glass edge-glow mt-9 overflow-hidden rounded-[var(--radius-card)] p-6 sm:p-7">
              <p className="mono-label text-[0.58rem]">[ Working thesis ]</p>
              <p className="mt-3 max-w-2xl font-display text-[1.35rem] italic leading-[1.45] text-ink sm:text-[1.55rem]">
                {heroStatement}
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <Spotlight className="glass h-full rounded-[var(--radius-card)] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="mono-label">[ Operating principles ]</p>
                <Icon name="layers" size={15} className="text-accent" />
              </div>

              <div className="mt-5 border-t border-line">
                {principles.map((principle, i) => (
                  <div
                    key={principle.label}
                    className="group grid grid-cols-[2.2rem_1fr] gap-4 border-b border-line py-5"
                  >
                    <span className="font-mono text-[0.62rem] tabular-nums text-accent">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-[0.98rem] font-medium tracking-[-0.02em] text-ink">
                        {principle.label}
                      </h3>
                      <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">
                        {principle.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2.5">
                <span className="status-dot live" aria-hidden="true" />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
                  Currently shipping SmartPark
                </span>
              </div>
            </Spotlight>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-14 grid gap-3 sm:grid-cols-3 lg:mt-16">
            {currentFocus.map((item, i) => (
              <Spotlight
                key={item.label}
                className="glass h-full rounded-[var(--radius-card)] p-6 transition-colors hover:border-accent/25"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="mono-label">[ {item.label} ]</p>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface-2/70 text-accent">
                    <Icon name={focusIcons[i] ?? "spark"} size={15} />
                  </span>
                </div>
                <p className="mt-5 text-[0.95rem] leading-snug text-ink">{item.value}</p>
              </Spotlight>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
