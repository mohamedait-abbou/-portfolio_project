import { site } from "@/config/site";

/** BASE_PATH is read at build time so GitHub Pages and root domains both work. */
export const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
export const origin = `${site.siteUrl}${basePath}`;

export function absoluteUrl(path = "") {
  if (/^https?:\/\//.test(path)) return path;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: origin,
  jobTitle: "Computer Engineering Student",
  description: site.roleLine,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  sameAs: [site.github, site.bluesky],
  knowsAbout: [
    "Full-stack development",
    "Software engineering",
    "DevOps",
    "Cloud infrastructure",
    "Linux",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Laravel",
    "CRM systems",
    "Platform engineering",
    "Python",
    "Machine learning",
    "Computer vision",
  ],
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} — Engineering systems from idea to production`,
  url: origin,
  description: site.roleLine,
  author: { "@type": "Person", name: site.name },
} as const;
