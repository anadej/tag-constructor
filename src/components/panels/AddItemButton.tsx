import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { AddIcon } from "@/shared/icons";
import { BASE_LABEL_TYPOGRAPHY } from "@/constants/typography";

const ADD_ITEM_BUTTON_CLS =
  "w-full flex items-center gap-2 h-10 rounded-[6px] border-0 bg-transparent text-left cursor-pointer transition-colors duration-150 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset";

const addItemButtonStyle = {
  ...BASE_LABEL_TYPOGRAPHY,
  fontWeight: 400,
  color: "rgba(255, 255, 255, 0.45)",
} as const;

interface AddItemButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const AddItemButton = ({
  children = "Add item",
  className,
  style,
  ...rest
}: AddItemButtonProps) => (
  <button
    type="button"
    className={clsx(ADD_ITEM_BUTTON_CLS, className)}
    style={{
      padding: "0px 4px 0px 12px",
      ...addItemButtonStyle,
      ...style,
    }}
    {...rest}
  >
    <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-[6.02257px] text-white">
      <AddIcon className="opacity-45" />
    </div>
    <span>{children}</span>
  </button>
);
