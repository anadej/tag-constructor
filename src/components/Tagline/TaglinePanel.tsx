import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { taglineStore } from "@/stores/taglineStore";
import { PanelPortal, PanelSlide } from "@/components/panels/PanelPortal";
import { TagItemForm } from "./TagItemForm";
import { TagListView } from "./TagListView";
import { TaglineStylesPanel } from "./TaglineStylesPanel";
import type { PanelKind } from "@/types/panel";

const renderPanelContent = (kind: PanelKind): React.ReactNode => {
  switch (kind) {
    case "list":
      return <TagListView />;
    case "create":
      return <TagItemForm />;
    case "edit":
      return taglineStore.editingId ? <TagItemForm editing /> : null;
    case "styles":
      return <TaglineStylesPanel />;
    default:
      return null;
  }
};

export const TaglinePanel = observer(() => {
  const { isOpen, anchorX, anchorY, activePanel } = taglineStore;

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        if (activePanel === "list") {
          taglineStore.close();
        } else {
          taglineStore.backToMain();
        }
      }
    };

    document.addEventListener("keydown", handleEscape, true);
    return () => document.removeEventListener("keydown", handleEscape, true);
  }, [isOpen, activePanel]);

  return (
    <PanelPortal
      isOpen={isOpen}
      onClose={() => taglineStore.close()}
      anchorX={anchorX}
      anchorY={anchorY}
    >
      {activePanel && (
        <PanelSlide key={activePanel} motionKey={activePanel}>
          {renderPanelContent(activePanel)}
        </PanelSlide>
      )}
    </PanelPortal>
  );
});
