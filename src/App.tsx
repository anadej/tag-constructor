import { TaglinePreview } from '@/components/Tagline/TaglinePreview.tsx';
import { TaglinePanel } from '@/components/Tagline/TaglinePanel.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-[640px] rounded-panel overflow-hidden">
        <TaglinePreview />
      </div>
      <TaglinePanel />
    </div>
  );
}
