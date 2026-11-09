"use client";

import { useState } from "react";
import DietIcon, { allDietTags, dietLabel } from "./DietIcon";
import { days, meals, type DietTag, type MealName, type MenuItem } from "./menu-data";

// The interactive part of the page. State:
//   - which day and meal are showing
//   - which items are checked (for the nutrition report)
//   - which dietary filters are on
export default function MenuBoard() {
  const [day, setDay] = useState(days[1]);
  const [mealName, setMealName] = useState<MealName>("Lunch");
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [filters, setFilters] = useState<DietTag[]>([]);
  const [showReport, setShowReport] = useState(false);

  const meal = meals.find((m) => m.name === mealName)!;
  const allItems = meals.flatMap((m) => m.categories.flatMap((c) => c.items));
  const checkedItems = allItems.filter((item) => checkedIds.includes(item.id));

  // An item passes if it has EVERY selected filter tag
  const passesFilters = (item: MenuItem) => filters.every((tag) => item.tags.includes(tag));

  const toggleChecked = (id: string) =>
    setCheckedIds(checkedIds.includes(id) ? checkedIds.filter((x) => x !== id) : [...checkedIds, id]);

  const toggleFilter = (tag: DietTag) =>
    setFilters(filters.includes(tag) ? filters.filter((t) => t !== tag) : [...filters, tag]);

  const total = (key: "calories" | "protein" | "carbs" | "fat") =>
    checkedItems.reduce((sum, item) => sum + item[key], 0);

  return (
    <div className="flex flex-col gap-6">
      {/* ── Date picker + filters ─────────────────────────────── */}
      <div className="flex flex-col gap-4 rounded-lg border border-stone-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-2 text-sm font-medium">
          Select a date:
          <select
            value={day}
            onChange={(event) => setDay(event.target.value)}
            className="rounded border border-stone-300 px-2 py-1 font-normal"
          >
            {days.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-medium">Filters:</span>
          {allDietTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleFilter(tag)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1 ${
                filters.includes(tag)
                  ? "border-[#A51C30] bg-[#A51C30]/10 text-[#A51C30]"
                  : "border-stone-300 hover:bg-stone-50"
              }`}
            >
              <DietIcon tag={tag} /> {dietLabel(tag)}
            </button>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-stone-800">Dining Hall Menus for {day}</h2>

      {/* ── Meal tabs ─────────────────────────────────────────── */}
      <div className="flex border-b border-stone-300">
        {meals.map((m) => (
          <button
            key={m.name}
            onClick={() => setMealName(m.name)}
            className={`-mb-px border-b-4 px-5 py-2 font-semibold ${
              m.name === mealName
                ? "border-[#A51C30] text-[#A51C30]"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* ── Menu: categories → item rows ──────────────────────── */}
        <div className="flex flex-col gap-5 lg:col-span-2">
          {meal.categories.map((category) => {
            const visible = category.items.filter(passesFilters);
            if (visible.length === 0) return null; // hide empty categories

            return (
              <section key={category.name} className="overflow-hidden rounded-lg border border-stone-200 bg-white">
                <h3 className="bg-stone-100 px-4 py-2 text-sm font-bold tracking-wide text-stone-700 uppercase">
                  -- {category.name} --
                </h3>
                <ul className="divide-y divide-stone-100">
                  {visible.map((item) => (
                    <li key={item.id}>
                      <label className="flex cursor-pointer items-center gap-3 px-4 py-2.5 hover:bg-stone-50">
                        <input
                          type="checkbox"
                          checked={checkedIds.includes(item.id)}
                          onChange={() => toggleChecked(item.id)}
                          className="h-4 w-4 accent-[#A51C30]"
                        />
                        <span className="flex-1">{item.name}</span>
                        <span className="flex gap-1">
                          {item.tags.map((tag) => (
                            <DietIcon key={tag} tag={tag} />
                          ))}
                        </span>
                        <span className="w-16 text-right text-sm text-stone-500">{item.portion}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
          <p className="text-sm text-stone-500 italic">Subject to availability and cycle in each unit.</p>
        </div>

        {/* ── Nutrition report sidebar ──────────────────────────── */}
        <aside className="flex h-fit flex-col gap-3 rounded-lg border border-stone-200 bg-white p-4 lg:sticky lg:top-6">
          <h3 className="font-semibold">Nutrition report</h3>
          {checkedItems.length === 0 ? (
            <p className="text-sm text-stone-500">Check menu items to build a nutritional analysis.</p>
          ) : (
            <>
              <ul className="text-sm text-stone-700">
                {checkedItems.map((item) => (
                  <li key={item.id} className="flex justify-between gap-2 py-0.5">
                    <span>{item.name}</span>
                    <span className="text-stone-500">{item.calories} cal</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowReport(!showReport)}
                className="rounded bg-[#A51C30] px-4 py-2 text-sm font-semibold text-white hover:bg-[#8a1728]"
              >
                {showReport ? "Hide" : "Get"} Nutrition Report
              </button>
              {showReport && (
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  {(["calories", "protein", "carbs", "fat"] as const).map((key) => (
                    <div key={key} className="rounded bg-stone-100 p-2">
                      <dt className="text-xs text-stone-500 capitalize">{key}</dt>
                      <dd className="text-lg font-semibold">
                        {total(key)}
                        {key === "calories" ? "" : "g"}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              <button onClick={() => setCheckedIds([])} className="text-sm text-stone-500 hover:underline">
                Clear selections
              </button>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
