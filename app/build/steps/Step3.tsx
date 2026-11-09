// STEP 3: Turn it into a component with typed props.
// Everything that would change between cards (name, hall, calories...) becomes a prop.
// Everything that stays the same (layout, colors) stays inside the component.

type MenuCardProps = {
  name: string;
  hall: string;
  meal: string;
  description: string;
  calories: number;
  tags: string[];
  imageUrl: string;
};

function MenuCard({ name, hall, meal, description, calories, tags, imageUrl }: MenuCardProps) {
  return (
    <div className="w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img src={imageUrl} alt={name} className="h-40 w-full object-cover" />
      <div className="flex flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-slate-500">
            {hall} · {meal}
          </p>
        </div>
        <p className="text-sm text-slate-700">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <p className="text-sm text-slate-500">{calories} cal</p>
          <button className="rounded-lg border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50">
            ♡ Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

// Now the same component can show two different dishes:
export default function Step3() {
  return (
    <div className="flex flex-wrap gap-4">
      <MenuCard
        name="Tomato Basil Soup"
        hall="Annenberg"
        meal="Lunch"
        description="Creamy roasted tomato soup with fresh basil."
        calories={180}
        tags={["Vegetarian", "Gluten-free"]}
        imageUrl="https://placehold.co/400x200/fde68a/92400e?text=Tomato+Soup"
      />
      <MenuCard
        name="Grilled Chicken Wrap"
        hall="Quincy House"
        meal="Dinner"
        description="Grilled chicken, romaine and caesar dressing in a flour tortilla."
        calories={540}
        tags={["High protein"]}
        imageUrl="https://placehold.co/400x200/bfdbfe/1e3a8a?text=Chicken+Wrap"
      />
    </div>
  );
}
