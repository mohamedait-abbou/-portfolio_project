import CopyEmail from "@/components/ui/CopyEmail";
import Icon from "@/components/ui/Icon";
import LocalTime from "@/components/ui/LocalTime";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Spotlight from "@/components/ui/Spotlight";
import { site } from "@/config/site";

const links = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: "mail" as const,
  },
  {
    label: "GitHub",
    value: "github.com/mohamedait-abbou",
    href: site.github,
    icon: "github" as const,
  },
  {
    label: "Bluesky",
    value: "@mohamedait-abbou",
    href: site.bluesky,
    icon: "bluesky" as const,
  },
];

const lookingFor = [
  "Software engineering internships",
  "DevOps / cloud / platform internships",
  "Applied AI & computer-vision work",
];

const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Internship opportunity — portfolio conversation",
)}`;

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 lg:py-32">
      <div
        className="aurora aurora-a left-[-10%] bottom-[-20%] h-[460px] w-[460px] opacity-35"
        aria-hidden="true"
      />
      <div
        className="aurora aurora-b right-[-8%] top-[8%] h-[400px] w-[400px] opacity-30"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          index="06"
          label="Contact"
          title="Open to what comes"
          hinge="next"
          note="Internships and junior roles where software engineering meets infrastructure and applied AI."
        />

        <div className="mt-12 grid gap-3 lg:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Spotlight className="glass edge-glow relative h-full overflow-hidden rounded-[26px] p-7 sm:p-10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                aria-hidden="true"
              />
              <div className="grid-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

              <div className="relative">
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-emerald-300">
                  <span className="status-dot live" aria-hidden="true" />
                  Available for internships · 2026
                </p>

                <h3 className="mt-7 max-w-[18ch] text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink">
                  Let&apos;s build something that{" "}
                  <span className="hinge hinge-accent">ships</span>.
                </h3>

                <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.8] text-muted">
                  I am looking for work where there are real constraints to solve — pipelines,
                  services, models, and the unglamorous details that keep them running. If that
                  sounds like what you are building, send a message.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  <a href={mailto} className="btn btn-primary">
                    <Icon name="mail" size={15} />
                    <span>Start a conversation</span>
                  </a>
                  <CopyEmail email={site.email} label="Copy email" />
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-ghost"
                  >
                    <Icon name="github" size={15} />
                    GitHub
                  </a>
                </div>

                <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
                  <div className="bg-bg/70 px-4 py-3.5">
                    <p className="mono-label text-[0.56rem]">[ Based ]</p>
                    <p className="mt-1.5 text-[0.8rem] text-ink">{site.location}</p>
                  </div>
                  <div className="bg-bg/70 px-4 py-3.5">
                    <p className="mono-label text-[0.56rem]">[ Local time ]</p>
                    <LocalTime
                      className="mt-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink"
                      label=""
                      dot={false}
                    />
                  </div>
                  <div className="bg-bg/70 px-4 py-3.5">
                    <p className="mono-label text-[0.56rem]">[ Focus ]</p>
                    <p className="mt-1.5 text-[0.8rem] text-ink">Full-stack · DevOps · AI</p>
                  </div>
                </div>
              </div>
            </Spotlight>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="flex h-full flex-col gap-3">
              <div className="glass overflow-hidden rounded-[var(--radius-card)]">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-line px-5 py-5 transition-colors last:border-b-0 hover:bg-white/[0.03]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                      <Icon name={link.icon} size={14} />
                    </span>
                    <span className="min-w-0">
                      <span className="mono-label block text-[0.54rem]">{link.label}</span>
                      <span className="mt-1 block truncate font-mono text-[0.72rem] text-ink transition-colors group-hover:text-accent">
                        {link.value}
                      </span>
                    </span>
                    <Icon
                      name="arrow-up-right"
                      size={15}
                      className="text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                ))}
              </div>

              <div className="glass flex-1 rounded-[var(--radius-card)] p-6">
                <p className="mono-label">[ Looking for ]</p>
                <ul className="mt-4 space-y-3">
                  {lookingFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.82rem] text-muted">
                      <Icon name="check" size={14} className="mt-0.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="mono-label text-[0.56rem]">[ What happens next ]</p>
                  <p className="mt-2 text-[0.78rem] leading-relaxed text-muted">
                    Send a note with the role and the constraints. I reply with the most relevant
                    project, the repository and the trade-offs behind it.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
