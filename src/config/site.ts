/**
 * Single source of truth for identity and links.
 * Values come from the existing repository and the owner's GitHub profile.
 */
export const site = {
  name: "Mohamed Ait Abbou",
  initials: "MA",
  role: "Engineering Student · Full-Stack / DevOps / AI",
  roleLine:
    "Computer engineering student building products end to end — application, database, container, pipeline and monitoring.",
  location: "Marrakech, Morocco",
  university: "Cadi Ayyad University · FST Marrakech",
  program: "IRISI — Computer Networks and Information Systems Engineering",
  email: "mohamedmohamedait2005@gmail.com",
  github: "https://github.com/mohamedait-abbou",
  bluesky: "https://bsky.app/profile/mohamedait-abbou",
  siteUrl: "https://mohamedait-abbou.github.io",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: "mail" | "github" | "bluesky";
  hint: string;
};

export const socials: SocialLink[] = [
  { label: "Email", href: `mailto:${site.email}`, icon: "mail", hint: "Direct line" },
  { label: "GitHub", href: site.github, icon: "github", hint: "Source & repositories" },
  { label: "Bluesky", href: site.bluesky, icon: "bluesky", hint: "Social" },
];
