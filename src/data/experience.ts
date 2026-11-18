export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  kind: "work" | "study" | "build";
  body: string;
  tags: string[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "July 2026",
    title: "CRM Full-Stack & DevOps — Internship (PFA)",
    org: "SEOCOM · Marrakech",
    kind: "work",
    body: "Owned the Optical CRM from product surface to production path during a one-month internship: Laravel/PHP backend, MySQL schema, Blade interface, then the Docker runtime and a self-hosted GitHub Actions pipeline with Pest tests, healthchecks, migrations and release steps. One project, both sides of the delivery — application and operations.",
    tags: ["Laravel", "PHP", "MySQL", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    period: "2025 — Today",
    title: "Engineering Cycle",
    org: "IRISI · FST Marrakech, Cadi Ayyad University",
    kind: "study",
    body: "Networks and information systems engineering program, with a continued interest in security. Academic work in systems and networking runs alongside hands-on building across full-stack and DevOps.",
    tags: ["Networking", "Systems", "Security"],
  },
  {
    period: "2024 — 2025",
    title: "Independent Project Work",
    org: "Self-directed",
    kind: "build",
    body: "Built and shipped projects across web applications, containerized services and cloud tooling — building real proficiency before and during formal engineering study.",
    tags: ["React", "Next.js", "Docker", "AWS"],
  },
];

/** Tracks taken up, not completed claims. */
export const certificationTracks = [
  {
    vendor: "AWS",
    title: "Solutions Architect — Associate",
    note: "Core services, VPC design, IAM and cost-aware architecture.",
  },
  {
    vendor: "CNCF",
    title: "Certified Kubernetes Administrator",
    note: "Cluster operations, workload scheduling, storage and troubleshooting.",
  },
  {
    vendor: "Google Cloud",
    title: "Professional DevOps Engineer",
    note: "CI/CD, SRE practices and GCP-native delivery pipelines.",
  },
  {
    vendor: "HashiCorp",
    title: "Terraform Associate",
    note: "Modules, state, remote backends and reusable IaC patterns.",
  },
];
