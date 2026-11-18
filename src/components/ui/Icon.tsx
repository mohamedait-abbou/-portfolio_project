import type { ReactNode, SVGProps } from "react";

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const icons: Record<string, ReactNode> = {
  "arrow-right": (
    <>
      <path d="M4 12h15" {...s} />
      <path d="M13 6l6 6-6 6" {...s} />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17L17 7" {...s} />
      <path d="M8 7h9v9" {...s} />
    </>
  ),
  "arrow-down": (
    <>
      <path d="M12 4v15" {...s} />
      <path d="M6 13l6 6 6-6" {...s} />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" {...s} />
      <path d="M18 6L6 18" {...s} />
    </>
  ),
  menu: (
    <>
      <path d="M4 8h16" {...s} />
      <path d="M4 16h16" {...s} />
    </>
  ),
  github: (
    <path
      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      {...s}
    />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" {...s} />
      <path d="M8 11v6" {...s} />
      <path d="M8 8v.01" {...s} />
      <path d="M12 17v-4a2 2 0 0 1 4 0v4" {...s} />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" {...s} />
      <path d="M3.5 7l8.5 6 8.5-6" {...s} />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V8l-4.5-5z" {...s} />
      <path d="M14 3v5h5" {...s} />
    </>
  ),
  bluesky: (
    <path
      d="M12 11c-2.4-3.8-5.8-5-7-3.8-1.2 1.2 0 4.8 2.7 6.9-2.2.4-4 1.5-4.6 3.2 1.8 1 4 .9 5.7.1 1.1 1.3 2.1 2.2 3.2 2.2s2.1-.9 3.2-2.2c1.7.8 3.9.9 5.7-.1-.6-1.7-2.4-2.8-4.6-3.2 2.7-2.1 3.9-5.7 2.7-6.9-1.2-1.2-4.6 0-7 3.8z"
      {...s}
    />
  ),
  terminal: (
    <>
      <path d="M5 17l5-5-5-5" {...s} />
      <path d="M12 19h7" {...s} />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" {...s} />
      <path d="M20 4l-9 9" {...s} />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" {...s} />
    </>
  ),
  chevron: <path d="M9 5l7 7-7 7" {...s} />,
  check: <path d="M4.5 12.5l5 5 10-11" {...s} />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" {...s} />
      <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" {...s} />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" {...s} />
      <path d="M3 12.5l9 5 9-5" {...s} />
      <path d="M3 17l9 5 9-5" {...s} />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" {...s} />
      <path d="M9 12l2 2 4-4" {...s} />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" {...s} />
      <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" {...s} />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" {...s} />
      <rect x="3" y="13" width="18" height="7" rx="2" {...s} />
      <path d="M7 7.5h.01M7 16.5h.01" {...s} />
    </>
  ),
  cloud: (
    <path
      d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5h.5a4.25 4.25 0 0 1 0 8.5H7z"
      {...s}
    />
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" {...s} />
      <rect x="10" y="10" width="4" height="4" rx="1" {...s} />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" {...s} />
    </>
  ),
  code: (
    <>
      <path d="M8 8l-4 4 4 4" {...s} />
      <path d="M16 8l4 4-4 4" {...s} />
      <path d="M13 5l-2 14" {...s} />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" {...s} />
      <circle cx="12" cy="12" r="3.5" {...s} />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" {...s} />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" {...s} />
      <path d="M12 7.5V12l3 2" {...s} />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" {...s} />
      <circle cx="12" cy="11" r="2.3" {...s} />
    </>
  ),
};

export type IconName = keyof typeof icons;

export default function Icon({
  name,
  size = 18,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
