import Icon from "@/components/ui/Icon";
import LocalTime from "@/components/ui/LocalTime";
import { site } from "@/config/site";
import { navItems } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="mono-label">[ End of file ]</p>
            <p className="mt-5 max-w-md text-lg leading-snug tracking-[-0.02em] text-ink sm:text-xl">
              Applications and the systems that ship them — built with care, documented honestly.
            </p>
            <a href={`mailto:${site.email}`} className="arrow-link mt-8">
              {site.email}
              <Icon name="arrow-up-right" size={15} />
            </a>

            <div className="mt-6 flex items-center gap-2">
              <span className="status-dot live" aria-hidden="true" />
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
                Open to internships
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-12">
            <div>
              <p className="mono-label">[ Menu ]</p>
              <ul className="mt-5 space-y-3">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono-label">[ Source ]</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.bluesky}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent"
                  >
                    Bluesky
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted transition-colors hover:text-accent"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mono-label">[ Location ]</p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.08em] text-muted">
                {site.location}
                <br />
                {site.university.split(" · ")[1]}
              </p>
              <LocalTime className="mono-label mt-4 text-[0.58rem]" />
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-t border-line pt-6">
          <p
            aria-hidden="true"
            className="select-none whitespace-nowrap font-display text-[clamp(4rem,13.5vw,13rem)] font-normal leading-[0.78] tracking-[-0.06em] text-ink/[0.07]"
          >
            AIT ABBOU
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label">© 2026 {site.name}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="mono-label">Next.js · TypeScript · Tailwind · Framer Motion</p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent"
            >
              Back to top
              <Icon
                name="arrow-right"
                size={13}
                className="-rotate-90 transition-transform group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
