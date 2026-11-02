import type { DietTag } from "./menu-data";

// One small badge per dietary tag. A lookup object keeps the styles in one place.
const icons: Record<DietTag, { letter: string; label: string; className: string }> = {
  vegan: { letter: "VGN", label: "Vegan", className: "bg-green-700 text-white" },
  vegetarian: { letter: "VGT", label: "Vegetarian", className: "bg-lime-500 text-white" },
  halal: { letter: "H", label: "Halal", className: "bg-sky-700 text-white" },
};

export default function DietIcon({ tag }: { tag: DietTag }) {
  const icon = icons[tag];
  return (
    <span
      title={icon.label}
      className={`inline-flex h-5 min-w-5 items-center justify-center rounded px-1 text-[10px] font-bold ${icon.className}`}
    >
      {icon.letter}
    </span>
  );
}

export const allDietTags: DietTag[] = ["vegan", "vegetarian", "halal"];
export const dietLabel = (tag: DietTag) => icons[tag].label;
