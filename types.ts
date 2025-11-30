export type AspectRatio = "16:9" | "1:1" | "9:16" | "4:3" | "3:4";

export interface NavItem {
  label: string;
  path: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface GeminiImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: AspectRatio;
}