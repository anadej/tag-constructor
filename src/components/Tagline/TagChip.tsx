import { clsx } from "clsx";
import type {
  TagItem,
  TagSize,
  TagVariant,
  TagRadius,
} from "@/types/tagline.ts";
import {
  VARIANT_STYLE,
  CHIP_SIZE_CLASS,
  CHIP_RADIUS_CLASS,
  CHIP_SIZE_STYLE,
} from "@/constants/taglineStyles.ts";

interface TagChipProps {
  tag: TagItem;
  size: TagSize;
  variant: TagVariant;
  radius: TagRadius;
  onClick?: () => void;
}

const tagBase =
  "inline-flex items-center justify-center no-underline transition-colors duration-150";

export const TagChip = ({ tag, size, variant, radius, onClick }: TagChipProps) => {
  const sizeCls = CHIP_SIZE_CLASS[size];
  const radiusCls = CHIP_RADIUS_CLASS[radius];
  const vs = VARIANT_STYLE[variant];

  const sizeStyle = CHIP_SIZE_STYLE[size];
  const baseStyles: React.CSSProperties = {
    fontFamily: "'Onest', sans-serif",
    fontWeight: 500,
    color: vs.color,
    background: vs.background,
    ...(vs.border && { border: vs.border }),
    height: sizeStyle.height,
    padding: sizeStyle.padding,
    fontSize: sizeStyle.fontSize,
    lineHeight: sizeStyle.lineHeight,
  };

  const className = clsx(tagBase, sizeCls, radiusCls);

  if (tag.link) {
    return (
      <a
        href={tag.link}
        className={className}
        style={baseStyles}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
        }}
      >
        {tag.label}
      </a>
    );
  }

  return (
    <span className={className} style={baseStyles} onClick={onClick}>
      {tag.label}
    </span>
  );
};
