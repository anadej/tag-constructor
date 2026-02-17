import type { ReactNode } from "react";
import { clsx } from "clsx";

const controlNavCls =
  "flex flex-row items-start flex-none self-stretch grow-0";

interface ControlNavProps {
  gap: string;
  height: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ControlNav = ({
  gap,
  height,
  children,
  className,
  style,
}: ControlNavProps) => (
  <div
    className={clsx(controlNavCls, className)}
    style={{ gap, height, ...style }}
  >
    {children}
  </div>
);
