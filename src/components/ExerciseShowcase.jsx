import { Search, CheckCircle2 } from 'lucide-react';

const exercises = [
  {
    title: 'Dumbbell Goblet Squat',
    level: 'Beginner',
    equipment: 'Dumbbell',
    muscles: 'Quads, Glutes, Core',
    img: 'https://images.unsplash.com/photo-1596357395105-5c5b4e9c97d3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Bulgarian Split Squat (Home)',
    level: 'Experienced',
    equipment: 'Chair/Bench',
    muscles: 'Quads, Glutes, Balance',
    img: 'https://images.unsplash.com/photo-1594737626072-90dc203d8920?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Push-up',
    level: 'Beginner',
    equipment: 'Bodyweight',
    muscles: 'Chest, Triceps, Core',
    img: 'https://images.unsplash.com/photo-1571907480495-4f1b1a43e9d2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Deadlift',
    level: 'Experienced',
    equipment: 'Barbell',
    muscles: 'Posterior chain',
    img: 'https://images.unsplash.com/photo-1526406915894-6c1d6f9f3cfe?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function ExerciseShowcase() {
  return (
    <section id="exercises" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Exercise Library</h2>
            <p className="mt-1 text-slate-600">Filter by difficulty, equipment, or muscle group.</p>
          </div>
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search exercises (e.g., squat, band, core)"
              className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-3 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exercises.map((ex) => (
            <article key={ex.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img src={ex.img} alt={ex.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
