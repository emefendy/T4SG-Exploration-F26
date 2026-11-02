// Lecture helper: shows a title, the code, and the live result side by side.
// (You don't need to understand this file to follow the lecture.)

type DemoProps = {
  title: string;
  code: string;
  children: React.ReactNode; // whatever is placed between <Demo> and </Demo>
};

export default function Demo({ title, code, children }: DemoProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <pre className="overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm leading-relaxed text-slate-100">
          <code>{code.trim()}</code>
        </pre>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide text-slate-400 uppercase">Result</p>
          {children}
        </div>
      </div>
    </section>
  );
}

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="max-w-3xl text-slate-600">{description}</p>
    </header>
  );
}
