import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

/**
 * One hierarchy rule for every content section:
 * oversized index / kicker / one headline with a single serif hinge word / optional short note.
 */
export default function SectionHeading({
  index,
  label,
  title,
  hinge,
  hingeAccent = true,
  note,
}: {
  index: string;
  label: string;
  title: string;
  hinge?: string;
  hingeAccent?: boolean;
  note?: string;
}) {
  return (
    <Reveal>
      <div className="relative flex flex-col gap-7 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="flex items-start gap-5 sm:gap-8">
          <div className="relative shrink-0">
            <span
              aria-hidden="true"
              className="block select-none font-mono text-[clamp(2.2rem,4.4vw,3.8rem)] font-medium leading-[0.78] tracking-[-0.08em] text-ink/15"
            >
              {index}
            </span>
            <span
              className="mt-3 block h-px w-7 bg-gradient-to-r from-accent to-transparent"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="mono-label flex items-center gap-2.5">
              <span className="inline-block h-px w-5 bg-accent/70" aria-hidden="true" />
              {label} <span className="text-ink/30">/</span> Section {index}
            </p>
            <h2 className="mt-4 max-w-[20ch] text-[clamp(2rem,3.9vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink">
              {title}{" "}
              {hinge && (
                <span className={cn("hinge", hingeAccent && "hinge-accent")}>{hinge}</span>
              )}
            </h2>
          </div>
        </div>
        {note && (
          <p className="max-w-sm text-sm leading-relaxed text-muted lg:max-w-[19rem] lg:pb-2 lg:text-right">
            {note}
          </p>
        )}
        <span
          className="pointer-events-none absolute bottom-0 left-0 h-px w-28 bg-gradient-to-r from-accent/70 via-accent/20 to-transparent"
          aria-hidden="true"
        />
      </div>
    </Reveal>
  );
}
