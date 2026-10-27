export type ProjectStatus = "concept" | "in-progress" | "completed";

export type ProjectVisual = "rocket" | "sprite" | "website";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  learningPoints: string[];
  status: ProjectStatus;
  statusLabel: string;
  visual: ProjectVisual;
  featured?: boolean;
  demoUrl?: string;
  documentationUrl?: string;
};

export type ClassPath = {
  slug: string;
  title: string;
  level: string;
  description: string;
  topics: string[];
  ctaLabel: string;
  message: string;
  featured?: boolean;
};

export type DocumentationCategory =
  | "Aktivitas Mengajar"
  | "Materi Pembelajaran"
  | "Proyek Coding"
  | "Capaian dan Evaluasi";

export type DocumentationStatus = "material" | "classroom";

export type DocumentationImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type DocumentationEntry = {
  slug: string;
  title: string;
  category: DocumentationCategory;
  topic: string;
  status: DocumentationStatus;
  statusLabel: string;
  date?: string;
  objective: string;
  summary: string;
  reflection?: string;
  image?: DocumentationImage;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type TrustIcon = "code" | "teacher" | "practice" | "path";

export type TrustIndicator = {
  label: string;
  detail: string;
  icon: TrustIcon;
};
