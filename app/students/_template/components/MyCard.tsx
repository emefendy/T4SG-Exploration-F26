// A starter component. Rename it, restyle it, add props, make more of them!

type MyCardProps = {
  title: string;
  description: string;
};

export default function MyCard({ title, description }: MyCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
    </div>
  );
}
