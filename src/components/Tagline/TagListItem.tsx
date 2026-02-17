import { useState } from "react";
import { clsx } from "clsx";
import type { TagItem } from "@/types/tagline.ts";
import { CloseIcon, IconWrapperDots } from "@/shared/icons";

interface TagListItemProps {
  tag: TagItem;
  onSelect: () => void;
  onRemove: () => void;
  isDragging?: boolean;
  dragHandleProps?: {
    [key: string]: unknown;
  };
}

export const TagListItem = ({
  tag,
  onSelect,
  onRemove,
  isDragging = false,
  dragHandleProps,
}: TagListItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={clsx(
        "group relative flex items-center overflow-visible",
        isDragging && "opacity-60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        className={clsx(
          "shrink-0 flex items-center justify-center border-0 bg-transparent cursor-grab p-0 active:cursor-grabbing transition-opacity duration-150",
          isHovered || isDragging ? "opacity-100" : "opacity-0",
        )}
        {...dragHandleProps}
        aria-label="Drag to reorder"
        style={{
          position: "absolute",
          left: "-9px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "12px",
          height: "16px",
        }}
      >
        <IconWrapperDots size={12} className="text-white" />
      </button>

      <div
        className="relative flex flex-1 items-center rounded-[6px] cursor-pointer transition-colors duration-150"
        style={{
          padding: "0px 4px 0px 12px",
          gap: "8px",
          height: "40px",
          background:
            isHovered && !isDragging
              ? "rgba(255, 255, 255, 0.05)"
              : "transparent",
        }}
        onClick={() => onSelect()}
        onKeyDown={(e) => e.key === "Enter" && onSelect()}
        role="button"
        tabIndex={0}
      >
        <span
          className="flex-1 min-w-0 text-left truncate"
          style={{
            fontFamily: "'Onest', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            letterSpacing: "-0.0044em",
            color: "#FFFFFF",
          }}
        >
          {tag.label || "—"}
        </span>

        <button
          type="button"
          className="border-0 bg-transparent text-text-secondary rounded-md text-lg leading-none flex-shrink-0 transition-colors duration-150 hover:bg-surface hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label="Remove"
        >
          <CloseIcon className="text-white" />
        </button>
      </div>
    </div>
  );
};
