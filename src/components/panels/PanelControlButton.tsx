import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

const BORDER_RADIUS = "5.97751px";
const BUTTON_PADDING = "7.97002px 13.9475px";

const CONTROL_LABEL_STYLE = {
  fontFamily: "'Onest', sans-serif",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "140%",
  letterSpacing: "-0.002em",
  textAlign: "center" as const,
  color: "#FFFFFF",
} as const;

const controlButtonBaseCls =
  "flex flex-col justify-center items-center flex-none grow cursor-pointer transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-panel rounded-[5.97751px] border-0 font-[Onest]";

const SIZE_RADIUS_BUTTON = {
  width: "44.02px",
  height: "31.88px",
  padding: BUTTON_PADDING,
  borderRadius: BORDER_RADIUS,
} as const;

const ALIGN_BUTTON = {
  flex: 1,
  minWidth: 0,
  height: "31.88px",
  padding: BUTTON_PADDING,
  borderRadius: BORDER_RADIUS,
} as const;

const STYLE_BUTTON = {
  width: "57.02px",
  height: "37px",
  padding: BUTTON_PADDING,
  borderRadius: BORDER_RADIUS,
} as const;

export const BTN_SELECTED_BG = "rgba(255, 255, 255, 0.05)";

type Variant = "size" | "radius" | "align" | "style";

interface PanelControlButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  variant: Variant;
  selected?: boolean;
  customStyle?: {
    background?: string;
    color?: string;
    border?: string;
    [key: string]: unknown;
  };
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const variantBoxStyle: Record<Variant, React.CSSProperties> = {
  size: SIZE_RADIUS_BUTTON,
  radius: SIZE_RADIUS_BUTTON,
  align: ALIGN_BUTTON,
  style: STYLE_BUTTON,
};

export const PanelControlButton = ({
  variant,
  selected = false,
  customStyle,
  children,
  className,
  style,
  ...rest
}: PanelControlButtonProps) => {
  const isAlign = variant === "align";
  const isStyle = variant === "style";

  return (
    <button
      type="button"
      className={clsx(
        controlButtonBaseCls,
        isAlign && "flex items-center justify-center",
        isStyle &&
          selected &&
          "ring-1 ring-offset-2 ring-offset-[rgba(51,51,51,0.7)]",
        className
      )}
      style={{
        ...variantBoxStyle[variant],
        ...(isStyle && customStyle
          ? {
              background: customStyle.background,
              color: customStyle.color,
              ...(customStyle.border && { border: customStyle.border }),
              ...(selected && {
                ["--tw-ring-color" as string]: BTN_SELECTED_BG,
              }),
            }
          : {
              ...(selected && { background: BTN_SELECTED_BG }),
              ...CONTROL_LABEL_STYLE,
            }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
