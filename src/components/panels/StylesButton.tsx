import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

const STYLES_BUTTON_CLS =
  "flex items-center gap-[13px] w-full border-0 bg-transparent text-white cursor-pointer transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset";

const stylesButtonLabelStyle = {
  fontFamily: "'Onest', sans-serif",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "140%",
  letterSpacing: "-0.0044em",
} as const;

interface StylesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

export const StylesButton = ({
  iconLeft,
  iconRight,
  children,
  className,
  style,
  ...rest
}: StylesButtonProps) => (
  <button
    type="button"
    className={clsx(STYLES_BUTTON_CLS, className)}
    style={{ ...stylesButtonLabelStyle, ...style }}
    {...rest}
  >
    <span className="shrink-0">{iconLeft}</span>
    <span className="flex-1 text-left">{children}</span>
    {iconRight != null && <span className="shrink-0">{iconRight}</span>}
  </button>
);
