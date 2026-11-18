export type ProjectStatus = "Deployed" | "Shipped" | "In progress";

export type Project = {
  index: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  status: ProjectStatus;
  statusNote: string;
  summary: string;
  problem: string;
  solution: string;
  contribution: string;
  facts: { label: string; value: string }[];
  stack: string[];
  image: string;
  imageAlt: string;
  github: string;
  caveat?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "optical-crm",
    title: "Optical CRM",
    category: "Full-stack CRM · DevOps delivery · Internship",
    year: "2026",
    status: "Deployed",
    statusNote: "Self-hosted deployment · no public demo URL",
    summary:
      "A complete CRM for optical stores covering the customer lifecycle: prescriptions, orders, stock, payments and PDF invoicing. Built full-stack during a one-month internship at SEOCOM in Marrakech, then containerized with Docker and shipped through a self-hosted GitHub Actions pipeline with tests, healthchecks and release steps.",
    problem:
      "An optical store juggles customer records, prescriptions, orders, stock movements, partial payments and invoices. Spreadsheets and paper let that data drift: stock stops matching reality, balances get lost, and nobody can answer who changed what.",
    solution:
      "One Laravel application with role-based access, versioned prescription history, automatic stock deduction, payment balances, PDF invoices, audit trails and a KPI dashboard. A multi-stage Docker build and a GitHub Actions pipeline run Pest tests, build the image, healthcheck /up, then migrate and release.",
    contribution:
      "Full-stack design, backend, frontend, containerization, CI/CD and deployment — the primary deliverable of the PFA internship.",
    facts: [
      { label: "Access roles", value: "3 · admin, manager, employee" },
      { label: "Runtime", value: "3 containers · app, database, mail" },
      { label: "Delivery", value: "1 push → test → healthcheck → deploy" },
      { label: "Testing", value: "Pest suite blocks a red release" },
    ],
    stack: ["Laravel", "PHP 8.5", "MySQL", "Blade", "Tailwind", "Docker", "GitHub Actions", "Pest"],
    image: "/images/optical-dashboard.webp",
    imageAlt: "Optical CRM dashboard showing sales and order KPIs",
    github: "https://github.com/mohamedait-abbou/optical-management-system",
  },
  {
    index: "02",
    slug: "darprice",
    title: "DarPrice",
    category: "Machine learning · Prediction API",
    year: "2025 — 2026",
    status: "Shipped",
    statusNote: "API + UI in repository · public hosting not yet enabled",
    summary:
      "A Moroccan house-price predictor built as a complete path from raw listings to a callable service: cleaned data, feature engineering, cross-validated training, error analysis, a FastAPI prediction endpoint and a Streamlit interface.",
    problem:
      "A model that only exists in a notebook is a demo. The useful part is a repeatable path: the same preprocessing applied to new input, the same trained pipeline applied to it, and a response any client can request over HTTP.",
    solution:
      "Two scraped sources are merged and cleaned into 7,014 listings. A scikit-learn pipeline handles feature engineering, imputation, scaling and encoding; XGBoost was selected by 5-fold cross-validation and evaluated once on a held-out test set. The full pipeline is served through FastAPI with validation, batch prediction and a Streamlit UI.",
    contribution:
      "Data preparation, training pipeline, evaluation, API design, Streamlit demo and containerization.",
    facts: [
      { label: "Dataset", value: "7,014 cleaned listings" },
      { label: "Final model", value: "XGBoost · selected by 5-fold CV" },
      { label: "Held-out test", value: "R² 0.900 · MAE 567,944 MAD" },
      { label: "Serving", value: "FastAPI · /predict, /predict/batch" },
    ],
    stack: ["Python", "pandas", "scikit-learn", "XGBoost", "FastAPI", "Streamlit", "Docker", "GitHub Actions"],
    image: "/images/darprice-eval.webp",
    imageAlt: "DarPrice chart comparing predicted and actual house prices",
    github: "https://github.com/mohamedait-abbou/DarPrice-Moroccan-House-Price-Prediction",
    caveat:
      "The reported R² comes from one held-out split of the cleaned dataset; it is not a claim about every Moroccan property market.",
  },
  {
    index: "03",
    slug: "smartpark-maroc",
    title: "SmartPark Maroc",
    category: "Computer vision · Actively built",
    year: "2026",
    status: "In progress",
    statusNote: "Detector trained · OCR and latency testing next",
    summary:
      "A CPU-first computer-vision system for Moroccan parking entrances: find a licence plate in an image, crop it, and prepare the path to reading its characters through a local Streamlit interface.",
    problem:
      "Moroccan plates mix digits, Arabic letters and a region code. Generic OCR struggles with cursive script, plate fonts, dirt, glare and camera angles. A parking system also needs privacy by default — plate images are personal data.",
    solution:
      "Start with a reproducible detector rather than a full recognition claim. A validated set of 1,596 labelled plate images is split 1,277 / 319. YOLO11n was trained for 50 epochs on a T4, local inference runs CPU-only, and the Streamlit app supports upload, preview and detection. OCR currently exists as preprocessing and a plug-in interface.",
    contribution:
      "Dataset validation, training pipeline, detector wrapper, Streamlit demo, verification script and documentation of what remains unproven.",
    facts: [
      { label: "Dataset", value: "1,596 labelled image pairs" },
      { label: "Detector", value: "YOLO11n · 50 epochs · T4" },
      { label: "Validation", value: "mAP50 0.995 on 319 images" },
      { label: "Next", value: "OCR baseline · CPU latency · unseen cameras" },
    ],
    stack: ["Python", "PyTorch", "YOLO11", "OpenCV", "Streamlit", "pytest"],
    image: "/images/smartpark-detection.jpg",
    imageAlt: "Real YOLO11n licence-plate detection on a street photo, with plate pixels anonymised",
    github: "https://github.com/mohamedait-abbou/SmartPark-computer-vision-project",
    caveat:
      "Validation metrics come from one random split of one dataset. They are not a measured real-entrance accuracy, and OCR is not implemented yet.",
  },
];

export type SecondarySystem = {
  name: string;
  detail: string;
  stack: string[];
  github?: string;
};

export const secondarySystems: SecondarySystem[] = [
  {
    name: "DNS Traffic Monitor",
    detail:
      "Python packet analyzer for live capture, pcap review, suspicious-domain detection and rate-limit alerts.",
    stack: ["Python", "Scapy", "Networking"],
    github: "https://github.com/mohamedait-abbou/dns-monitor",
  },
  {
    name: "Computer Vision Lab",
    detail:
      "Fundamentals exercised directly: histograms, convolution kernels, feature extraction and classical ML on image arrays.",
    stack: ["Python", "OpenCV", "NumPy"],
  },
  {
    name: "CI/CD Automation Platform",
    detail:
      "One pipeline configuration standardised across side projects — build, test and deploy without rebuilding the runner setup.",
    stack: ["Next.js", "Node.js", "Docker", "GitHub Actions"],
  },
];
