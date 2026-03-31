
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  tags: string[];
  links: {
    pdf?: string;
    code?: string;
    data?: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  interests: string;
  links: {
    scholar?: string;
    github?: string;
    twitter?: string;
  };
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
  image?: string;
}
