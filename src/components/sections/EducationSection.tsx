import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Spotlight from "@/components/ui/Spotlight";
import { site } from "@/config/site";

const focus = ["Networking", "Systems", "Security", "Databases", "Software engineering"];

export default function EducationSection() {
  return (
    <section id="education" className="relative border-t border-line py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="05"
          label="Study"
          title="Networks, systems and"
          hinge="deliberate"
          hingeAccent={false}
          note="Formal training alongside hands-on building — the two inform each other."
        />

        <Reveal className="mt-12 lg:mt-16">
          <Spotlight className="glass edge-glow relative overflow-hidden rounded-[26px] p-7 sm:p-10 lg:p-12">
            <div className="grid-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

            <div
              className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full border border-line"
              aria-hidden="true"
            >
              <span className="slow-spin absolute inset-6 rounded-full border border-dashed border-accent/25" />
              <span className="slow-spin-reverse absolute inset-20 rounded-full border border-line" />
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_18px_4px_rgba(79,124,255,0.4)]" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink">
                    <span className="status-dot live" aria-hidden="true" />
                    2025 — Today
                  </span>
                  <span className="chip !py-1 !text-[0.58rem]">Engineering cycle</span>
                </div>

                <p className="mt-8 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                  [ Cadi Ayyad University ]
                </p>
                <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                  [ FST Marrakech ]
                </p>

                <div className="mt-8 hidden items-center gap-3 lg:flex">
                  <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                  <span className="font-display text-3xl italic leading-none text-ink/40">05</span>
                </div>
              </div>

              <div className="lg:col-span-8">
                <h3 className="max-w-[23ch] text-[clamp(1.6rem,3vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.035em]">
                  {site.program}
                </h3>
                <p className="mt-4 text-lg text-ink sm:text-xl">{site.university}</p>

                <p className="mt-6 max-w-2xl text-[0.94rem] leading-[1.8] text-muted">
                  Networks and information systems engineering program, with a continued interest
                  in security. Academic work in systems and networking runs alongside hands-on
                  building across full-stack and DevOps.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-line bg-bg/50 p-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-line bg-surface-2/70 text-accent">
                        <Icon name="target" size={13} />
                      </span>
                      <p className="mono-label text-[0.56rem]">[ Academic ]</p>
                    </div>
                    <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">
                      Networks, systems, security and databases — the theory behind the systems I
                      build.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line bg-bg/50 p-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-line bg-surface-2/70 text-accent">
                        <Icon name="code" size={13} />
                      </span>
                      <p className="mono-label text-[0.56rem]">[ Self-directed ]</p>
                    </div>
                    <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">
                      Full-stack applications, containers, CI/CD and applied ML — learned by
                      shipping real projects.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {focus.map((item) => (
                    <div key={item} className="bg-surface/50 px-5 py-3.5">
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Spotlight>
        </Reveal>
      </div>
    </section>
  );
}
