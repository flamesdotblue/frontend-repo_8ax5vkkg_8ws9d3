import { Flame, BarChart2, Calendar } from 'lucide-react';

const programs = [
  {
    name: 'Beginner Full-Body (3x/week)',
    focus: 'Learn basics • Build consistency',
    length: '8–12 weeks',
    badge: 'Beginner',
  },
  {
    name: 'Push / Pull / Legs',
    focus: 'Hypertrophy and strength',
    length: '12 weeks',
    badge: 'Experienced',
  },
  {
    name: 'Home — No Equipment',
    focus: 'Bodyweight + mobility',
    length: '6–8 weeks',
    badge: 'Home',
  },
];

export default function ProgramHighlights() {
  return (
    <section id="programs" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Programs that adapt to you</h2>
          <a href="#" className="text-sm font-semibold text-emerald-700 hover:text-emerald-600">See all programs →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">{p.badge}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.focus}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-700">
                <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {p.length}</div>
                <div className="inline-flex items-center gap-2"><BarChart2 className="h-4 w-4" /> Progressive</div>
              </div>
              <button className="mt-6 w-full rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-400">Start this plan</button>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-emerald-950">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/30 px-3 py-1 text-xs font-semibold">
                <Flame className="h-4 w-4" /> HIIT & Conditioning bonus pack
              </div>
              <p className="mt-3 text-lg font-semibold">Short on time? Try 20-minute finishers you can add to any day.</p>
            </div>
            <a href="#" className="inline-flex items-center rounded-lg bg-white px-4 py-2 font-semibold text-emerald-800 hover:bg-emerald-50">Download sample</a>
          </div>
        </div>
      </div>
    </section>
  );
}
