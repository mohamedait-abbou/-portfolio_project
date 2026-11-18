import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Spotlight from "@/components/ui/Spotlight";
import { certificationTracks, timeline, type TimelineEntry } from "@/data/experience";

const kindLabel: Record<TimelineEntry["kind"], string> = {
  work: "Internship · Full-stack + DevOps",
  study: "Education",
  build: "Self-directed",
};

const internshipEvidence = [
  { label: "Product", value: "Laravel CRM · MySQL · Blade" },
  { label: "Runtime", value: "Docker · app, database, mail" },
  { label: "Quality gate", value: "Pest suite blocks red releases" },
  { label: "Delivery", value: "Actions · healthcheck → migrate → release" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative border-t border-line py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="02"
          label="Path"
          title="Built in the open, one"
          hinge="real"
          hingeAccent={false}
          note="A CRM internship across full-stack and DevOps, formal study, and independent builds — in that order of recency."
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <ol className="relative border-l border-line pl-6 sm:pl-8">
              <span
                className="pointer-events-none absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-accent via-line to-transparent"
                aria-hidden="true"
              />
              {timeline.map((entry, i) => (
                <Reveal key={entry.title} delay={i * 0.06}>
                  <li className="relative pb-8 last:pb-0">
                    <span
                      className={
                        i === 0
                          ? "absolute -left-[calc(1.5rem+4px)] top-8 h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(79,124,255,0.16)] sm:-left-[calc(2rem+4px)]"
                          : "absolute -left-[calc(1.5rem+3px)] top-8 h-[7px] w-[7px] rounded-full border border-line-strong bg-bg sm:-left-[calc(2rem+3px)]"
                      }
                      aria-hidden="true"
                    />

                    <Spotlight
                      className={
                        i === 0
                          ? "glass edge-glow rounded-[var(--radius-card)] p-6 sm:p-7"
                          : "glass rounded-[var(--radius-card)] p-6 transition-colors hover:border-line-strong sm:p-7"
                      }
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <p className="mono-label tabular-nums text-[0.62rem]">{entry.period}</p>
                        <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.1em] text-accent">
                          {kindLabel[entry.kind]}
                        </span>
                        {i === 0 && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.1em] text-emerald-300">
                            <span className="status-dot live" aria-hidden="true" />
                            Most recent
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-xl font-medium tracking-[-0.025em] text-ink sm:text-2xl">
                        {entry.title}
                      </h3>
                      <p className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">
                        {entry.org}
                      </p>
                      <p className="mt-4 max-w-2xl text-[0.92rem] leading-[1.75] text-muted">
                        {entry.body}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <li key={tag} className="chip !py-1 !text-[0.62rem]">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </Spotlight>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-3 lg:sticky lg:top-24">
              <Reveal>
                <Spotlight className="glass rounded-[var(--radius-card)] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="mono-label">[ Internship evidence ]</p>
                    <Icon name="server" size={15} className="text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium tracking-[-0.02em] text-ink">
                    Full-stack, then the delivery path.
                  </h3>
                  <ul className="mt-5 border-t border-line">
                    {internshipEvidence.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-baseline justify-between gap-3 border-b border-line py-3.5"
                      >
                        <span className="mono-label text-[0.56rem]">{item.label}</span>
                        <span className="text-right text-[0.74rem] leading-snug text-ink">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Spotlight>
              </Reveal>

              <Reveal delay={0.06}>
                <Spotlight className="glass rounded-[var(--radius-card)] p-6">
                  <p className="mono-label">[ Certification roadmap ]</p>
                  <h3 className="mt-4 text-lg font-medium tracking-[-0.02em]">
                    In progress, not claimed.
                  </h3>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">
                    Tracks taken up to structure what I am learning. No completed claims until the
                    passes are real.
                  </p>

                  <ul className="mt-5 border-t border-line">
                    {certificationTracks.map((track) => (
                      <li key={track.title} className="border-b border-line py-4">
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="mono-label text-[0.56rem]">{track.vendor}</p>
                          <span className="font-mono text-[0.56rem] uppercase tracking-[0.1em] text-muted">
                            In progress
                          </span>
                        </div>
                        <p className="mt-1.5 text-[0.82rem] leading-snug text-ink">{track.title}</p>
                        <p className="mt-1.5 text-[0.7rem] leading-relaxed text-muted">
                          {track.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Spotlight>
              </Reveal>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
