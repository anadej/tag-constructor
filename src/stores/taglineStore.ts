import { makeAutoObservable } from "mobx";
import type {
  TagItem,
  TaglineStyle,
  TagSize,
  TagRadius,
  TagAlignment,
  TagVariant,
  TaglineData,
} from "@/types/tagline";
import { saveTagline } from "@/api/taglineApi";
import type { PanelKind } from "@/types/panel";

const createId = (): string => crypto.randomUUID();

const defaultStyle: TaglineStyle = {
  variant: 1,
  size: "M",
  radius: 8,
  alignment: "left",
};

const INITIAL_TAGS: { label: string; link: string }[] = [
  { label: "Marketing", link: "https://onepage.io" },
  { label: "Design", link: "https://onepage.io" },
  { label: "Development", link: "https://onepage.io" },
  { label: "Front", link: "https://onepage.io" },
  { label: "AI Engineering", link: "https://onepage.io" },
];

const initialItems: TagItem[] = INITIAL_TAGS.map((t, i) => ({
  id: `initial-${i}`,
  label: t.label,
  link: t.link,
}));

const persist = (items: TagItem[], style: TaglineStyle): void => {
  const data: TaglineData = { items, style };
  saveTagline(data);
};

export const taglineStore = makeAutoObservable({
  items: [...initialItems] as TagItem[],
  style: { ...defaultStyle } as TaglineStyle,

  // UI state
  isOpen: false,
  activePanel: null as PanelKind,
  editingId: null as string | null,
  anchorX: 0,
  anchorY: 0,

  // Tag actions
  addTag(label: string, link: string): void {
    this.items.push({
      id: createId(),
      label: label.trim() || "Tag",
      link: link.trim() || "",
    });
    persist(this.items, this.style);
  },

  updateTag(id: string, label: string, link: string): void {
    this.items = this.items.map((t) =>
      t.id === id
        ? { ...t, label: label.trim() || "Tag", link: link.trim() || "" }
        : t,
    );
    persist(this.items, this.style);
  },

  removeTag(id: string): void {
    this.items = this.items.filter((t) => t.id !== id);
    persist(this.items, this.style);
  },

  reorderTags(fromIndex: number, toIndex: number): void {
    if (fromIndex === toIndex) return;
    const copy = [...this.items];
    const [removed] = copy.splice(fromIndex, 1);
    copy.splice(toIndex, 0, removed!);
    this.items = copy;
    persist(this.items, this.style);
  },

  // Style actions
  setVariant(v: TagVariant): void {
    this.style = { ...this.style, variant: v };
    persist(this.items, this.style);
  },

  setSize(s: TagSize): void {
    this.style = { ...this.style, size: s };
    persist(this.items, this.style);
  },

  setRadius(r: TagRadius): void {
    this.style = { ...this.style, radius: r };
    persist(this.items, this.style);
  },

  setAlignment(a: TagAlignment): void {
    this.style = { ...this.style, alignment: a };
    persist(this.items, this.style);
  },

  // UI actions
  openMainPanel(x: number, y: number): void {
    this.isOpen = true;
    this.activePanel = "list";
    this.editingId = null;
    this.anchorX = x;
    this.anchorY = y;
  },

  openCreatePanel(): void {
    this.activePanel = "create";
    this.editingId = null;
  },

  openEditPanel(tagId: string): void {
    this.activePanel = "edit";
    this.editingId = tagId;
  },

  openStylesPanel(): void {
    this.activePanel = "styles";
    this.editingId = null;
  },

  backToMain(): void {
    this.activePanel = "list";
    this.editingId = null;
  },

  close(): void {
    this.isOpen = false;
    this.activePanel = null;
    this.editingId = null;
  },
});
