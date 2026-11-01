// STEP 2: Style it with Tailwind.
// Same HTML as step 1, plus className. Work outside-in:
//   card box → image → text sizes/colors → tags in a row → footer row

export default function Step2() {
  return (
    <div className="w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img
        src="https://placehold.co/400x200/fde68a/92400e?text=Tomato+Soup"
        alt="Tomato soup"
        className="h-40 w-full object-cover"
      />
      <div className="flex flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-semibold">Tomato Basil Soup</h3>
          <p className="text-sm text-slate-500">Annenberg · Lunch</p>
        </div>
        <p className="text-sm text-slate-700">Creamy roasted tomato soup with fresh basil.</p>
        <div className="flex gap-2">
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
            Vegetarian
          </span>
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
            Gluten-free
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <p className="text-sm text-slate-500">180 cal</p>
          <button className="rounded-lg border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50">
            ♡ Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
