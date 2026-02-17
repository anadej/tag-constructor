import { useCallback } from "react";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { observer } from "mobx-react-lite";
import type { TagItem } from "@/types/tagline";
import { taglineStore } from "@/stores/taglineStore";
import { PanelLayout } from "@/components/panels/PanelLayout";
import { AddItemButton } from "@/components/panels/AddItemButton";
import { StylesButton } from "@/components/panels/StylesButton";
import { SortableTagItem } from "./SortableTagItem";
import { ArrowRightIcon, StylesIcon } from "@/shared/icons";
import { BORDER_PANEL_TOP } from "@/constants/panelStyles";

export const TagListView = observer(() => {
  const { items } = taglineStore;
  const tagIds = items.map((t: TagItem) => t.id);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;
      const fromIndex = items.findIndex((t: TagItem) => t.id === active.id);
      const toIndex = items.findIndex((t: TagItem) => t.id === over.id);
      if (fromIndex === -1 || toIndex === -1) return;
      taglineStore.reorderTags(fromIndex, toIndex);
    },
    [items],
  );

  const handleClose = useCallback(() => {
    taglineStore.close();
  }, []);

  const handleAddItem = useCallback(() => {
    taglineStore.openCreatePanel();
  }, []);

  const handleStyles = useCallback(() => {
    taglineStore.openStylesPanel();
  }, []);

  const handleSelectTag = useCallback((id: string) => {
    taglineStore.openEditPanel(id);
  }, []);

  const handleRemoveTag = useCallback((id: string) => {
    taglineStore.removeTag(id);
  }, []);

  return (
    <PanelLayout title="Tagline" onClose={handleClose}>
      <div
        className="flex flex-col items-start p-[14px] gap-2"
        style={{ borderTop: BORDER_PANEL_TOP }}
      >
        <ul className="list-none m-0 p-0 w-full flex flex-col gap-1">
          {items.length > 0 && (
            <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
              <SortableContext
                items={tagIds}
                strategy={verticalListSortingStrategy}
              >
                {items.map((tag: TagItem) => (
                  <SortableTagItem
                    key={tag.id}
                    tag={tag}
                    onSelect={handleSelectTag}
                    onRemove={handleRemoveTag}
                  />
                ))}
              </SortableContext>
            </DndContext>
          )}
          <li>
            <AddItemButton onClick={handleAddItem} />
          </li>
        </ul>
      </div>
      <div
        className="flex items-center px-[14px] h-12 border-0"
        style={{
          borderTop: BORDER_PANEL_TOP,
          borderRadius: "0px 0px 4px 4px",
        }}
      >
        <StylesButton
          iconLeft={<StylesIcon size={16} className="text-white" />}
          iconRight={
            <ArrowRightIcon size={16} className="text-white opacity-80" />
          }
          onClick={handleStyles}
        >
          Styles
        </StylesButton>
      </div>
    </PanelLayout>
  );
});
