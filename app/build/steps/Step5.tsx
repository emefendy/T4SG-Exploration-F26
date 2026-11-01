"use client";
// STEP 5: Make it interactive with state.
// "use client" (above) is required for useState and onClick.
// Two pieces of state: which items are favorited, and which meal filter is selected.

import { useState } from "react";

type Meal = "Breakfast" | "Lunch" | "Dinner";

type MenuItem = {
  id: number;
  name: string;
  hall: string;
  meal: Meal;
  description: string;
  calories: number;
  tags: string[];
  imageUrl: string;
};

const menu: MenuItem[] = [
  {
    id: 1,
    name: "Tomato Basil Soup",
    hall: "Annenberg",
    meal: "Lunch",
    description: "Creamy roasted tomato soup with fresh basil.",
    calories: 180,
    tags: ["Vegetarian", "Gluten-free"],
    imageUrl: "https://placehold.co/400x200/fde68a/92400e?text=Tomato+Soup",
  },
  {
    id: 2,
    name: "Grilled Chicken Wrap",
    hall: "Quincy House",
    meal: "Dinner",
    description: "Grilled chicken, romaine and caesar dressing in a flour tortilla.",
    calories: 540,
    tags: ["High protein"],
    imageUrl: "https://placehold.co/400x200/bfdbfe/1e3a8a?text=Chicken+Wrap",
  },
  {
    id: 3,
    name: "Blueberry Pancakes",
    hall: "Annenberg",
    meal: "Breakfast",
    description: "Fluffy pancakes with blueberries and maple syrup.",
    calories: 420,
    tags: ["Vegetarian"],
    imageUrl: "https://placehold.co/400x200/ddd6fe/4c1d95?text=Pancakes",
  },
];

// New props: whether it's a favorite, and a function to call when the button is clicked
type MenuCardProps = {
  item: MenuItem;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

function MenuCard({ item, isFavorite, onToggleFavorite }: MenuCardProps) {
  return (
    <div className="w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img src={item.imageUrl} alt={item.name} className="h-40 w-full object-cover" />
      <div className="flex flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-slate-500">
            {item.hall} · {item.meal}
          </p>
        </div>
        <p className="text-sm text-slate-700">{item.description}</p>
        <div className="flex gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <p className="text-sm text-slate-500">{item.calories} cal</p>
          {/* The button's look depends on state: a ternary picks the classes */}
          <button
            onClick={onToggleFavorite}
            className={`rounded-lg border px-3 py-1 text-sm ${
              isFavorite
                ? "border-rose-300 bg-rose-50 text-rose-600"
                : "border-slate-300 hover:bg-slate-50"
            }`}
          >
            {isFavorite ? "♥ Favorited" : "♡ Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Step5() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [mealFilter, setMealFilter] = useState<Meal | "All">("All");

  const toggleFavorite = (id: number) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id)); // remove
    } else {
      setFavoriteIds([...favoriteIds, id]); // add
    }
  };

  const visibleItems = menu.filter((item) => mealFilter === "All" || item.meal === mealFilter);
  const filters: (Meal | "All")[] = ["All", "Breakfast", "Lunch", "Dinner"];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setMealFilter(filter)}
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              mealFilter === filter
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {filter}
          </button>
        ))}
        <span className="ml-auto text-sm text-slate-500">♥ {favoriteIds.length} favorites</span>
      </div>

      <div className="flex flex-wrap gap-4">
        {visibleItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            isFavorite={favoriteIds.includes(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
