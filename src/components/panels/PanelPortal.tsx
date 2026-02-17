import { useEffect } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const panelMotion = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.2 },
};

const slideTransition = { duration: 0.2 };

interface PanelPortalProps {
  isOpen: boolean;
  onClose: () => void;
  anchorX: number;
  anchorY: number;
  children: ReactNode;
}

export const PanelPortal = ({
  isOpen,
  onClose,
  anchorX,
  anchorY,
  children,
}: PanelPortalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const panel = document.querySelector("[data-panel-container]");
      if (panel && !panel.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = (
    <>
      <div
        className="fixed inset-0"
        aria-hidden="true"
        style={{
          zIndex: 999,
          background: "transparent",
        }}
      />
      <motion.div
        data-panel-container
        style={{
          position: "fixed",
          left: anchorX,
          top: anchorY,
          zIndex: 1000,
        }}
        {...panelMotion}
      >
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </motion.div>
    </>
  );

  return createPortal(content, document.body);
};

export const PanelSlide = ({
  children,
  motionKey,
}: {
  children: ReactNode;
  motionKey: string;
}) => (
  <motion.div
    key={motionKey}
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -8 }}
    transition={slideTransition}
  >
    {children}
  </motion.div>
);
