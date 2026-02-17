import type { ReactNode } from "react";
import { clsx } from "clsx";
import { BORDER_PANEL_TOP } from "@/constants/panelStyles";

const SECTION_BOX_STYLE = {
  padding: "12px 14px",
  gap: "8px",
  borderTop: BORDER_PANEL_TOP,
  boxSizing: "border-box" as const,
};

const SECTION_TITLE_STYLE = {
  fontSize: "13.9475px",
  lineHeight: "140%",
  height: "20px",
} as const;

const sectionCls = "flex flex-col items-start flex-none self-stretch grow-0";
const sectionTitleCls =
  "m-0 flex-none order-0 grow font-[Onest] font-bold text-white";

interface SectionBoxProps {
  title?: ReactNode;
  first?: boolean;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionBox = ({
  title,
  first = false,
  children,
  className,
  style,
}: SectionBoxProps) => (
  <div
    className={clsx(sectionCls, className)}
    style={{
      ...SECTION_BOX_STYLE,
      ...(first && { borderTop: "none" }),
      ...style,
    }}
  >
    {title != null && (
      <h3 className={sectionTitleCls} style={SECTION_TITLE_STYLE}>
        {title}
      </h3>
    )}
    {children}
  </div>
);
