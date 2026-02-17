// Tagline element and data types

export interface TagItem {
  id: string;
  label: string;
  link: string;
}

export type TagVariant = 1 | 2 | 3 | 4;
export type TagSize = "XL" | "L" | "M" | "S" | "XS";
export type TagRadius = 0 | 4 | 8 | 12 | 100;
export type TagAlignment = "left" | "center" | "right";

export interface TaglineStyle {
  variant: TagVariant;
  size: TagSize;
  radius: TagRadius;
  alignment: TagAlignment;
}

export interface TaglineData {
  items: TagItem[];
  style: TaglineStyle;
}

export const TAG_VARIANTS: TagVariant[] = [1, 2, 3, 4];
export const TAG_SIZES: TagSize[] = ["XL", "L", "M", "S", "XS"];
export const TAG_RADIUS_OPTIONS: TagRadius[] = [0, 4, 8, 12, 100];
export const TAG_ALIGNMENTS: TagAlignment[] = ["left", "center", "right"];
