export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  before: string;
  after: string;
  tech: string[];
  pageSpeed?: number;
  seo?: number;
  highlight?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarInitials: string;
  tag?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface AuditResult {
  url: string;
  score: number;
  seoScore: number;
  loadTime: string;
  issues: string[];
}
