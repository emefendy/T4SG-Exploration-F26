// STEP 4: Keep the data separate from the UI.
// Describe ONE menu item with a type, put all items in an array, and .map() over it.
// Later, this array is what you'd replace with data from a database or API.

type MenuItem = {
  id: number;
  name: string;
  hall: string;
  meal: "Breakfast" | "Lunch" | "Dinner"; // only these three values allowed
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

// The card now takes ONE prop: the whole item
function MenuCard({ item }: { item: MenuItem }) {
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
          <button className="rounded-lg border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50">
            ♡ Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Step4() {
  return (
    <div className="flex flex-wrap gap-4">
      {menu.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}
