import type { Stat } from "@/lib/types";

// A component is just a function that returns JSX.
// Its props (the "arguments") are typed with the Stat type from lib/types.ts.
export default function StatCard({ label, value, change }: Stat) {
  const isUp = change >= 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      {/* Curly braces let you run JavaScript inside JSX, like this ternary (if/else) */}
      <p className={`mt-1 text-sm font-medium ${isUp ? "text-emerald-600" : "text-rose-600"}`}>
        {isUp ? "▲" : "▼"} {Math.abs(change)}% this month
      </p>
    </div>
  );
}
