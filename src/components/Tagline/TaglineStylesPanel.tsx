import type { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { taglineStore } from "@/stores/taglineStore.ts";
import {
  TAG_VARIANTS,
  TAG_SIZES,
  TAG_RADIUS_OPTIONS,
  TAG_ALIGNMENTS,
} from "@/types/tagline.ts";
import type {
  TagVariant,
  TagSize,
  TagRadius,
  TagAlignment,
} from "@/types/tagline.ts";
import {
  VARIANT_STYLE,
  TAGLINE_STYLE_SECTIONS,
} from "@/constants/taglineStyles.ts";
import { PanelLayout } from "@/components/panels/PanelLayout.tsx";
import { SectionBox } from "@/components/panels/SectionBox.tsx";
import { ControlNav } from "@/components/panels/ControlNav.tsx";
import { PanelControlButton } from "@/components/panels/PanelControlButton.tsx";
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from "@/shared/icons";

const styleButtonLabelCls =
  "font-[Onest] font-medium leading-[140%] text-center";

const renderSectionContent = (
  sectionId: (typeof TAGLINE_STYLE_SECTIONS)[number]["id"],
  style: typeof taglineStore.style
): ReactNode => {
  switch (sectionId) {
    case "style":
      return (
        <>
          {TAG_VARIANTS.map((v: TagVariant) => (
            <PanelControlButton
              key={v}
              variant="style"
              selected={style.variant === v}
              customStyle={VARIANT_STYLE[v]}
              onClick={() => taglineStore.setVariant(v)}
              title={`Variant ${v}`}
            >
              <span
                className={styleButtonLabelCls}
                style={{ fontSize: "14px", letterSpacing: "-0.002em" }}
              >
                Aa
              </span>
            </PanelControlButton>
          ))}
        </>
      );
    case "size":
      return (
        <>
          {TAG_SIZES.map((s: TagSize) => (
            <PanelControlButton
              key={s}
              variant="size"
              selected={style.size === s}
              onClick={() => taglineStore.setSize(s)}
            >
              {s}
            </PanelControlButton>
          ))}
        </>
      );
    case "radius":
      return (
        <>
          {TAG_RADIUS_OPTIONS.map((r: TagRadius) => (
            <PanelControlButton
              key={r}
              variant="radius"
              selected={style.radius === r}
              onClick={() => taglineStore.setRadius(r)}
            >
              {r === 100 ? "100" : r}
            </PanelControlButton>
          ))}
        </>
      );
    case "alignment":
      return (
        <>
          {TAG_ALIGNMENTS.map((a: TagAlignment) => (
            <PanelControlButton
              key={a}
              variant="align"
              selected={style.alignment === a}
              onClick={() => taglineStore.setAlignment(a)}
              title={
                a === "left"
                  ? "Align left"
                  : a === "center"
                    ? "Align center"
                    : "Align right"
              }
            >
              {a === "left" && (
                <AlignLeftIcon size={16} className="block" aria-hidden />
              )}
              {a === "center" && (
                <AlignCenterIcon size={16} className="block" aria-hidden />
              )}
              {a === "right" && (
                <AlignRightIcon size={16} className="block" aria-hidden />
              )}
            </PanelControlButton>
          ))}
        </>
      );
    default:
      return null;
  }
};

export const TaglineStylesPanel = observer(() => {
  const { style } = taglineStore;

  const handleClose = (): void => {
    taglineStore.backToMain();
  };

  return (
    <PanelLayout
      title="Styles"
      onClose={handleClose}
      showBack
      onBack={handleClose}
    >
      <div
        style={{
          borderTop: "0.996252px solid rgba(233, 236, 246, 0.07)",
        }}
      >
        {TAGLINE_STYLE_SECTIONS.map((section) => (
          <SectionBox
            key={section.id}
            title={section.title}
            first={"first" in section ? section.first === true : false}
          >
            <ControlNav gap={section.nav.gap} height={section.nav.height}>
              {renderSectionContent(section.id, style)}
            </ControlNav>
          </SectionBox>
        ))}
      </div>
    </PanelLayout>
  );
});
