import type { TagVariant, TagSize, TagRadius } from "@/types/tagline";

export const TAGLINE_STYLE_SECTIONS = [
  {
    id: "style" as const,
    title: "Style",
    first: true,
    nav: { gap: "7.97px", height: "37px" },
  },
  {
    id: "size" as const,
    title: "Size",
    nav: { gap: "7.97px", height: "31.88px" },
  },
  {
    id: "radius" as const,
    title: "Radius",
    nav: { gap: "7.97px", height: "31.88px" },
  },
  {
    id: "alignment" as const,
    title: undefined,
    nav: { gap: "3.99px", height: "31.88px" },
  },
] as const;

export const VARIANT_STYLE: Record<
  TagVariant,
  { background: string; color: string; border?: string }
> = {
  1: { background: "rgba(255, 255, 255, 0.1)", color: "#FFFFFF" },
  2: { background: "rgba(21, 123, 218, 0.2)", color: "#56ADFF" },
  3: { background: "rgba(21, 123, 218, 0.93)", color: "#FFFFFF" },
  4: {
    background: "transparent",
    color: "#FFFFFF",
    border: "0.996252px solid rgba(255, 255, 255, 0.25)",
  },
};

export const CHIP_SIZE_STYLE: Record<
  TagSize,
  {
    height: string;
    padding: string;
    fontSize: string;
    lineHeight: string;
  }
> = {
  XS: {
    height: "26px",
    padding: "6px 14px",
    fontSize: "12px",
    lineHeight: "140%",
  },
  S: {
    height: "32px",
    padding: "7px 17px",
    fontSize: "14px",
    lineHeight: "140%",
  },
  M: {
    height: "38px",
    padding: "8px 20px",
    fontSize: "16px",
    lineHeight: "140%",
  },
  L: {
    height: "42px",
    padding: "9px 22px",
    fontSize: "18px",
    lineHeight: "140%",
  },
  XL: {
    height: "46px",
    padding: "10px 24px",
    fontSize: "20px",
    lineHeight: "140%",
  },
};

export const CHIP_SIZE_CLASS: Record<TagSize, string> = {
  XS: "h-[26px]",
  S: "h-[32px]",
  M: "h-[38px]",
  L: "h-[42px]",
  XL: "h-[46px]",
};

export const CHIP_RADIUS_CLASS: Record<TagRadius, string> = {
  0: "rounded-none",
  4: "rounded",
  8: "rounded-[6px]",
  12: "rounded-xl",
  100: "rounded-full",
};
