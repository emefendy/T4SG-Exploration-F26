import DietIcon, { allDietTags, dietLabel } from "./DietIcon";
import MenuBoard from "./MenuBoard";

// A recreation of the HUDS FoodPro "Dining Hall Menus" page, rebuilt with
// React + Tailwind. All menu data is SAMPLE data from ./menu-data.ts.
//
// How it's split up:
//   page.tsx       → static parts (header, instructions, legend, footer)
//   MenuBoard.tsx  → interactive parts ("use client": date, tabs, checkboxes, report)
//   DietIcon.tsx   → small reusable badge component
//   menu-data.ts   → typed sample data (meals → categories → items)

export default function HudsMenuPage() {
  return (
    <div className="-mx-6 -my-10 min-h-screen bg-stone-50">
      {/* ── Header bar ──────────────────────────────────────── */}
      <header className="bg-[#A51C30] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5">
          <p className="text-xs font-semibold tracking-widest uppercase opacity-80">Campus Services</p>
          <h1 className="font-serif text-3xl">Harvard University Dining Services</h1>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
        <p className="rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-900">
          🎓 Lecture demo: a recreation of the FoodPro menu page with <strong>sample data</strong>,
          not the real menu.
        </p>

        {/* ── Instructions ────────────────────────────────────── */}
        <div className="flex flex-col gap-2 text-sm text-stone-700">
          <p>
            Select the menu daypart (breakfast, lunch or dinner) and then the menu items to create an
            interactive nutritional analysis report.
          </p>
          <p className="text-stone-500">
            Some vegan recipes may be prepared in facilities that also process milk or eggs; these
            items are noted in the allergen and ingredient information.
          </p>
        </div>

        <MenuBoard />

        {/* ── Legend ──────────────────────────────────────────── */}
        <section className="flex flex-wrap items-center gap-4 rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm">
          <span className="font-semibold">Legend:</span>
          {allDietTags.map((tag) => (
            <span key={tag} className="flex items-center gap-1.5">
              <DietIcon tag={tag} /> {dietLabel(tag)}
            </span>
          ))}
        </section>
      </div>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-stone-500 sm:flex-row sm:justify-between">
          <span>Demo recreation for T4SG Exploration F26</span>
          <span className="flex gap-4">
            <span>Accessibility</span>
            <span>Info Practices</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
