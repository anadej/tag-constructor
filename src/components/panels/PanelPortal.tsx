import { useEffect, useCallback } from "react";
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
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  const content = (
    <>
      <div className="fixed inset-0 z-[999]" aria-hidden onClick={onClose} />
      <motion.div
        style={{
          position: "fixed",
          left: anchorX,
          top: anchorY,
          zIndex: 1000,
        }}
        {...panelMotion}
        onClick={(e) => e.stopPropagation()}
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
