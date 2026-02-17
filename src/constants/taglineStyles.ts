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

export const CHIP_SIZE_CLASS: Record<TagSize, string> = {
  XS: "h-[26px] py-[6px] px-[14px] text-[12px] leading-[1.4]",
  S: "h-[32px] py-[7px] px-[17px] text-[14px] leading-[1.4]",
  M: "h-[38px] py-[8px] px-[20px] text-[16px] leading-[1.4]",
  L: "h-[42px] py-[9px] px-[22px] text-[18px] leading-[1.4]",
  XL: "h-[46px] py-[10px] px-[24px] text-[20px] leading-[1.4]",
};

export const CHIP_RADIUS_CLASS: Record<TagRadius, string> = {
  0: "rounded-none",
  4: "rounded",
  8: "rounded-[6px]",
  12: "rounded-xl",
  100: "rounded-full",
};
