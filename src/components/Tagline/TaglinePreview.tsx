import { observer } from 'mobx-react-lite';
import { clsx } from 'clsx';
import { taglineStore } from '@/stores/taglineStore.ts';
import { TagChip } from './TagChip.tsx';
import type { TagAlignment } from '@/types/tagline.ts';

const OFFSET = 8;

const alignmentClass: Record<TagAlignment, string> = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

const handleTagsAreaClick = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  taglineStore.openMainPanel(rect.right + OFFSET, rect.top);
};

export const TaglinePreview = observer(() => {
  const { items, style } = taglineStore;
  const alignCls = alignmentClass[style.alignment];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center" style={{ background: '#262624' }}>
      <h3
        className="m-0 w-[277px] text-white text-center"
        style={{
          position: 'absolute',
          top: '189.4px',
          left: 'calc(50% - 277px/2 + 0.5px)',
          fontFamily: "'Onest', sans-serif",
          fontWeight: 500,
          fontSize: '37.9486px',
          lineHeight: '140%',
          letterSpacing: '-0.0044em',
        }}
      >
        Tagline element
      </h3>
      {items.length === 0 ? (
        <p
          className="m-0 text-sm text-text-secondary leading-normal cursor-pointer"
          onClick={handleTagsAreaClick}
          onKeyDown={(e) => e.key === 'Enter' && handleTagsAreaClick(e)}
          role="button"
          tabIndex={0}
        >
          No tags yet. Click to add first.
        </p>
      ) : (
        <ul
          className={clsx(
            'flex flex-wrap list-none m-0 p-0 cursor-pointer',
            alignCls,
          )}
          style={{
            width: '400px',
            minHeight: '84px',
            gap: '8px',
            alignItems: 'center',
          }}
          onClick={handleTagsAreaClick}
          onKeyDown={(e) => e.key === 'Enter' && handleTagsAreaClick(e)}
          role="button"
          tabIndex={0}
        >
          {items.map((tag) => (
            <li key={tag.id}>
              <TagChip
                tag={tag}
                size={style.size}
                variant={style.variant}
                radius={style.radius}
                onClick={() => taglineStore.openEditPanel(tag.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
