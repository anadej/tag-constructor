import { useState } from "react";
import { clsx } from "clsx";
import type { TagItem } from "@/types/tagline.ts";
import { CloseIcon, IconWrapperDots } from "@/shared/icons";
import { HEADER_BUTTON_CLASS } from "@/constants/panelStyles";
import { BASE_LABEL_TYPOGRAPHY } from "@/constants/typography";

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
          left: "-13px",
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
          isolation: "isolate",
        }}
        onClick={() => onSelect()}
        onKeyDown={(e) => e.key === "Enter" && onSelect()}
        role="button"
        tabIndex={0}
      >
        <span
          className="flex-1 min-w-0 text-left truncate"
          style={{
            ...BASE_LABEL_TYPOGRAPHY,
            fontWeight: 400,
            color: "#FFFFFF",
          }}
        >
          {tag.label || "—"}
        </span>

        <button
          type="button"
          className={HEADER_BUTTON_CLASS}
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
