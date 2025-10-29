import { Dumbbell, PlayCircle, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 ring-1 ring-emerald-400/30">
              <Dumbbell className="h-4 w-4" />
              Fitness • Nutrition • Tools
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Train smarter. Eat better. Feel stronger.
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              Curated gym and home workouts, goal-based diet plans, and calculators to
              personalize your path — for Beginners and Experienced athletes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#programs" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-400 transition">
                Get a Program
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#exercises" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition">
                Browse Exercises
              </a>
              <button className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-black/30 transition">
                <PlayCircle className="h-4 w-4" /> Quick tour (60s)
              </button>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Always consult a qualified professional for medical concerns. Results vary.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1600&auto=format&fit=crop"
                alt="Athlete training with dumbbells"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-12 right-0 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
