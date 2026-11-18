/** Honest proficiency labels: Working = used in shipped work, Familiar = used in experiments/coursework, Learning = actively studying. */
export type Level = "Working" | "Familiar" | "Learning";

export type SkillGroup = {
  id: string;
  index: string;
  label: string;
  note: string;
  skills: { name: string; level: Level; detail: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    index: "01",
    label: "Programming",
    note: "The languages I reach for, in the order I actually use them.",
    skills: [
      { name: "Python", level: "Working", detail: "Automation, data pipelines and ML" },
      { name: "PHP", level: "Working", detail: "Laravel applications and APIs" },
      { name: "SQL", level: "Working", detail: "Schema design and queries in MySQL" },
      { name: "TypeScript", level: "Familiar", detail: "Interfaces and utility dashboards" },
      { name: "JavaScript", level: "Familiar", detail: "Blade front ends with Alpine.js" },
      { name: "Bash", level: "Familiar", detail: "Scripts, runners and daily Linux work" },
    ],
  },
  {
    id: "backend",
    index: "02",
    label: "Backend & data",
    note: "Where most of my shipped work lives.",
    skills: [
      { name: "Laravel", level: "Working", detail: "Eloquent, Blade, queues, permissions" },
      { name: "FastAPI", level: "Working", detail: "Typed prediction endpoints" },
      { name: "MySQL", level: "Working", detail: "Migrations, seeders, relational design" },
      { name: "REST APIs", level: "Working", detail: "Validation, errors, versioned responses" },
      { name: "Redis", level: "Familiar", detail: "Caching and queues in local stacks" },
      { name: "PostgreSQL", level: "Familiar", detail: "Coursework and side experiments" },
    ],
  },
  {
    id: "devops",
    index: "03",
    label: "DevOps & infrastructure",
    note: "The discipline I am deliberately building toward.",
    skills: [
      { name: "Linux", level: "Working", detail: "Shell, services, permissions, processes" },
      { name: "Docker / Compose", level: "Working", detail: "Multi-stage builds and reproducible stacks" },
      { name: "GitHub Actions", level: "Working", detail: "Tests, image builds, self-hosted deploy" },
      { name: "CI/CD", level: "Working", detail: "Healthcheck before migrate, secrets out of Git" },
      { name: "Nginx / Apache", level: "Familiar", detail: "Local serving and container web tiers" },
      { name: "Kubernetes", level: "Learning", detail: "Cluster operations and workload scheduling" },
    ],
  },
  {
    id: "cloud",
    index: "04",
    label: "Cloud",
    note: "Fundamentals in practice — architecture is still a study area.",
    skills: [
      { name: "AWS", level: "Familiar", detail: "Core services, IAM, VPC fundamentals" },
      { name: "Terraform", level: "Familiar", detail: "Modules, state, reusable IaC patterns" },
      { name: "Infrastructure as code", level: "Learning", detail: "Remote backends and review-safe plans" },
      { name: "Cloud architecture", level: "Learning", detail: "Cost-aware design and availability" },
    ],
  },
  {
    id: "ai",
    index: "05",
    label: "AI & machine learning",
    note: "From classical pipelines to a trained detector with known limits.",
    skills: [
      { name: "scikit-learn", level: "Working", detail: "Reusable transformers, CV, evaluation" },
      { name: "XGBoost", level: "Working", detail: "Selected by cross-validation in DarPrice" },
      { name: "pandas / NumPy", level: "Working", detail: "Cleaning and feature engineering" },
      { name: "OpenCV", level: "Working", detail: "Histograms, convolution, plate detection" },
      { name: "YOLO11 / PyTorch", level: "Working", detail: "Trained detector for SmartPark Maroc" },
      { name: "Streamlit", level: "Working", detail: "Local interfaces for ML demos" },
    ],
  },
  {
    id: "tools",
    index: "06",
    label: "Tools & environment",
    note: "Small, boring tools that make the work repeatable.",
    skills: [
      { name: "Git & GitHub", level: "Working", detail: "History, reviews, issues, Actions" },
      { name: "Pest", level: "Working", detail: "PHP test suite that gates deployment" },
      { name: "Vite", level: "Familiar", detail: "Asset builds inside container images" },
      { name: "Mailpit", level: "Familiar", detail: "Local mail capture during development" },
      { name: "Google Colab", level: "Familiar", detail: "GPU training for the detection model" },
    ],
  },
];
