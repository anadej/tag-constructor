import type { ReactNode } from "react";
import { clsx } from "clsx";
import { ArrowLeftIcon, CloseIcon, DragHandleIcon } from "@/shared/icons";

interface PanelLayoutProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  showBack?: boolean;
  onBack?: () => void;
  titleAlign?: "left" | "center";
  headerClassName?: string;
  contentClassName?: string;
}

export const PanelLayout = ({
  title,
  onClose,
  children,
  showBack = false,
  onBack,
  titleAlign = "center",
  headerClassName,
  contentClassName,
}: PanelLayoutProps) => (
  <div
    className="relative w-[280px] flex flex-col overflow-hidden z-[1000]"
    style={{
      background: "rgba(51, 51, 51, 0.7)",
      boxShadow: "0px 80px 80px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(174px)",
      borderRadius: "7.97002px",
    }}
    role="dialog"
    aria-modal="true"
    aria-labelledby="panel-title"
  >
    <div className="flex items-center justify-center h-[11px] py-0">
      <DragHandleIcon className="text-[#E9ECF6]" />
    </div>
    <header
      className={clsx(
        "grid grid-cols-[1fr_auto_1fr] items-center h-[56px] px-4 gap-2",
        headerClassName ?? "bg-transparent",
      )}
    >
      <div className="flex justify-start min-w-0">
        {showBack && onBack ? (
          <button
            type="button"
            className="border-0 bg-transparent text-text-secondary rounded-md text-lg leading-none flex-shrink-0 transition-colors duration-150 hover:bg-surface hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
            onClick={onBack}
            aria-label="Back"
          >
            <ArrowLeftIcon className="text-inherit" />
          </button>
        ) : null}
      </div>
      <h2
        id="panel-title"
        className={clsx(
          "m-0 text-white justify-self-center text-center min-w-0 truncate",
          titleAlign === "left" ? "text-left justify-self-start" : "",
        )}
        style={{
          fontFamily: "'Onest', sans-serif",
          fontWeight: 700,
          fontSize: "15.94px",
          lineHeight: "24px",
        }}
      >
        {title}
      </h2>
      <div className="flex justify-end min-w-0">
        <button
          type="button"
          className="border-0 bg-transparent text-text-secondary rounded-md text-lg leading-none flex-shrink-0 transition-colors duration-150 hover:bg-surface hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon className="text-inherit" />
        </button>
      </div>
    </header>
    <div
      className={clsx(
        "overflow-y-auto max-h-[70vh]",
        contentClassName ?? "bg-transparent",
      )}
    >
      {children}
    </div>
  </div>
);
