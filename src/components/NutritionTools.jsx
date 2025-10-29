import { Apple, Calculator, UtensilsCrossed } from 'lucide-react';

export default function NutritionTools() {
  return (
    <section id="nutrition" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Diet plans and smart calculators</h2>
          <a href="#" className="text-sm font-semibold text-emerald-700 hover:text-emerald-600">Explore diet guides →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Apple className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-slate-900">Goal‑based meal plans</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">Fat loss, maintenance, or muscle gain with macro targets in kcal, g, and %.</p>
            <ul className="mt-3 list-inside list-disc text-sm text-slate-700">
              <li>Omnivore, vegetarian, and dairy‑free options</li>
              <li>Shopping lists and prep guides</li>
              <li>Allergen substitutions highlighted</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-slate-900">Calorie & macro calculator</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">Based on Mifflin‑St Jeor BMR with activity multipliers. Metric and Imperial.</p>
            <form className="mt-4 grid grid-cols-2 gap-3">
              <input className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Age (years)" />
              <input className="rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Height (cm)" />
              <input className="rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Weight (kg)" />
              <select className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm">
                <option>Lightly active (x1.375)</option>
                <option>Moderately active (x1.55)</option>
                <option>Very active (x1.725)</option>
              </select>
              <button type="button" className="col-span-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">Estimate calories</button>
            </form>
            <p className="mt-3 text-xs text-slate-500">This is educational content, not medical advice. Consult a professional for medical conditions.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <UtensilsCrossed className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-slate-900">Sample 2,000 kcal day</h3>
            </div>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li><span className="font-semibold">Breakfast:</span> Greek yogurt, berries, oats — 500 kcal (30C/30P/15F)</li>
              <li><span className="font-semibold">Lunch:</span> Chicken, rice, veggies — 650 kcal (70C/45P/15F)</li>
              <li><span className="font-semibold">Snack:</span> Apple + almonds — 250 kcal (25C/6P/14F)</li>
              <li><span className="font-semibold">Dinner:</span> Salmon, potatoes, salad — 600 kcal (45C/40P/25F)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
