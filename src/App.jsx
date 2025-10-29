import Hero from './components/Hero';
import ExerciseShowcase from './components/ExerciseShowcase';
import ProgramHighlights from './components/ProgramHighlights';
import NutritionTools from './components/NutritionTools';
import { User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> FitGuide
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#exercises" className="hover:text-slate-900">Exercises</a>
            <a href="#programs" className="hover:text-slate-900">Programs</a>
            <a href="#nutrition" className="hover:text-slate-900">Nutrition</a>
            <a href="#tools" className="hover:text-slate-900">Tools</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            <User className="h-4 w-4" /> Sign in
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <ExerciseShowcase />
        <ProgramHighlights />
        <NutritionTools />

        <section id="tools" className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p>
                Disclaimer: The information on this site is for educational purposes only and
                does not substitute professional medical advice. Always consult your physician if
                you have medical conditions, injuries, or dietary needs.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-600">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} FitGuide. Train smart. Eat well.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
