export interface CVEntryType {
  title: string;
  subtitle?: string;
  organisation?: string;
  content: string;
}

export interface ProjectType {
  name: string;
  tech: string;
  images: {
    path: string;
    caption: string;
  }[];
  description: string;
  link?: string;
}