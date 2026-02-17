import { observer } from "mobx-react-lite";
import { taglineStore } from "@/stores/taglineStore.ts";
import { PanelPortal, PanelSlide } from "@/components/panels/PanelPortal.tsx";
import { TagItemForm } from "./TagItemForm.tsx";
import { TagListView } from "./TagListView.tsx";
import { TaglineStylesPanel } from "./TaglineStylesPanel.tsx";
import type { PanelKind } from "@/types/panel.ts";

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
  const { isOpen, close, anchorX, anchorY, activePanel } = taglineStore;

  return (
    <PanelPortal
      isOpen={isOpen}
      onClose={close}
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
