import { useCallback, useState, useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { taglineStore } from "@/stores/taglineStore.ts";
import { PanelLayout } from "@/components/panels/PanelLayout.tsx";
import { FormField } from "@/components/panels/FormField.tsx";
import { isValidUrl } from "@/utils/validateUrl.ts";

interface TagItemFormProps {
  editing?: boolean;
}

export const TagItemForm = observer(({ editing = false }: TagItemFormProps) => {
  const tag =
    editing && taglineStore.editingId
      ? taglineStore.items.find((t) => t.id === taglineStore.editingId)
      : null;

  const [label, setLabel] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (editing && tag) {
      setLabel(tag.label);
      setLink(tag.link);
    } else {
      setLabel("");
      setLink("");
    }
  }, [editing, tag, taglineStore.editingId]);

  const linkError = useMemo(() => {
    if (link.trim() === "") return undefined;
    return isValidUrl(link) ? undefined : "Enter a valid URL";
  }, [link]);

  const canSave = label.trim() !== "" && !linkError;

  const handleClose = useCallback(() => {
    if (canSave) {
      if (editing && taglineStore.editingId) {
        taglineStore.updateTag(taglineStore.editingId, label, link);
      } else {
        taglineStore.addTag(label, link);
      }
    }
    taglineStore.backToMain();
  }, [editing, label, link, canSave]);

  if (editing && !tag) return null;

  return (
    <PanelLayout
      title="Item"
      onClose={handleClose}
      showBack
      onBack={handleClose}
    >
      <div
        className="flex flex-col items-start flex-none self-stretch grow-0"
        style={{
          padding: "12px 14px",
          gap: "8px",
          borderTop: "0.996252px solid rgba(233, 236, 246, 0.07)",
          boxSizing: "border-box",
        }}
      >
        <FormField
          id={editing ? "edit-label" : "create-label"}
          label="Label"
          placeholder="Tag text"
          value={label}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLabel(e.target.value)
          }
        />
        <FormField
          id={editing ? "edit-link" : "create-link"}
          label="Link"
          placeholder="https://..."
          type="url"
          value={link}
          error={linkError}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLink(e.target.value)
          }
        />
      </div>
    </PanelLayout>
  );
});
