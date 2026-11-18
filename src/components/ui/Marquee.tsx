import { cn } from "@/lib/cn";

/** Infinite, pause-on-hover ticker. The duplicate track is hidden from assistive tech. */
export default function Marquee({
  items,
  className,
  reverse = false,
  separator = "·",
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  separator?: string;
}) {
  return (
    <div className={cn("marquee", className)}>
      <div
        className="marquee-track"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center"
          >
            {items.map((item, i) => (
              <span key={`${copy}-${item}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                  {item}
                </span>
                <span className="mx-5 text-accent/70" aria-hidden="true">
                  {separator}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
