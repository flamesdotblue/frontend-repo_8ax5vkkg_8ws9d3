import { useState, useMemo } from 'react';
import { Search, CheckCircle2, Image as ImageIcon, Dumbbell } from 'lucide-react';

const exercises = [
  {
    id: 'goblet-squat',
    title: 'Dumbbell Goblet Squat',
    level: 'Beginner',
    equipment: 'Dumbbell',
    muscles: 'Quads, Glutes, Core',
    img: 'https://images.unsplash.com/photo-1596357395105-5c5b4e9c97d3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'bulgarian-split',
    title: 'Bulgarian Split Squat (Home)',
    level: 'Experienced',
    equipment: 'Chair/Bench',
    muscles: 'Quads, Glutes, Balance',
    img: 'https://images.unsplash.com/photo-1594737626072-90dc203d8920?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'push-up',
    title: 'Push-up',
    level: 'Beginner',
    equipment: 'Bodyweight',
    muscles: 'Chest, Triceps, Core',
    img: 'https://images.unsplash.com/photo-1571907480495-4f1b1a43e9d2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'deadlift',
    title: 'Deadlift',
    level: 'Experienced',
    equipment: 'Barbell',
    muscles: 'Posterior chain',
    img: 'https://images.unsplash.com/photo-1526406915894-6c1d6f9f3cfe?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function ExerciseShowcase() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(() => new Set());
  const [imagesMode, setImagesMode] = useState('all'); // 'all' | 'selected' | 'off'

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return exercises;
    return exercises.filter((ex) =>
      [ex.title, ex.level, ex.equipment, ex.muscles].some((f) => f.toLowerCase().includes(q))
    );
  }, [query]);

  const toggleSelected = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const shouldShowImage = (id) => {
    if (imagesMode === 'all') return true;
    if (imagesMode === 'off') return false;
    // selected only
    return selected.has(id);
  };

  return (
    <section id="exercises" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Exercise Library</h2>
            <p className="mt-1 text-slate-600">Search and choose which items display images.</p>
          </div>

          <div className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search exercises (e.g., squat, band, core)"
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-3 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-slate-200 bg-white text-sm shadow-sm">
              {[
                { key: 'all', label: 'All' },
                { key: 'selected', label: 'Selected' },
                { key: 'off', label: 'Off' },
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setImagesMode(opt.key)}
                  className={`px-3 py-2 font-medium transition ${
                    imagesMode === opt.key
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                  aria-pressed={imagesMode === opt.key}
                >
                  Images: {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((ex) => {
            const checked = selected.has(ex.id);
            const showImg = shouldShowImage(ex.id);
            return (
              <article
                key={ex.id}
                className={`group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md ${
                  checked ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-slate-200'
                }`}
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  {showImg ? (
                    <img
                      src={ex.img}
                      alt={ex.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100">
                      <div className="flex items-center gap-2 text-slate-400">
                        <ImageIcon className="h-5 w-5" />
                        <span className="text-sm">Image hidden</span>
                      </div>
                    </div>
                  )}

                  <label className="absolute left-2 top-2 inline-flex cursor-pointer items-center gap-2 rounded-md bg-white/90 px-2 py-1 text-xs text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSelected(ex.id)}
                      className="h-3.5 w-3.5 accent-emerald-600"
                    />
                    <span>Select</span>
                  </label>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{ex.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{ex.muscles}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700 ring-1 ring-emerald-200">{ex.level}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 font-medium text-slate-700 ring-1 ring-slate-200">{ex.equipment}</span>
                  </div>
                  <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                    <CheckCircle2 className="h-4 w-4" /> View details
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 text-sm text-slate-600">
          <div className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
            <Dumbbell className="h-4 w-4 text-slate-400" />
            <p>
              Tip: Use "Images: Selected" and tick only the exercises where you want images shown. Switch to
              "Off" to hide all images for a compact list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
