import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { observer } from "mobx-react-lite";
import type { TagItem } from "@/types/tagline";
import { TagListItem } from "./TagListItem";

interface SortableTagItemProps {
  tag: TagItem;
  onSelect: (id: string) => void;
  onRemove: (id: string) => void;
}

export const SortableTagItem = observer(
  ({ tag, onSelect, onRemove }: SortableTagItemProps) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({
      id: tag.id,
    });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <li ref={setNodeRef} style={style} className="overflow-visible">
        <TagListItem
          tag={tag}
          onSelect={() => onSelect(tag.id)}
          onRemove={() => onRemove(tag.id)}
          isDragging={isDragging}
          dragHandleProps={{ ...attributes, ...listeners }}
        />
      </li>
    );
  },
);
