import Link from "next/link";
import { lectures } from "@/lib/lectures";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-4xl font-bold tracking-tight">T4SG Exploration F26: Week 4 lecture</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          React, Next.js, TypeScript and Tailwind, one small demo at a time. Each page shows the
          code next to what it renders. Open the matching file in VS Code and follow along.
        </p>
      </section>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {lectures.map((lecture) => (
          <li key={lecture.href}>
            <Link
              href={lecture.href}
              className="flex h-full flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-400 hover:shadow-md"
            >
              <span className="font-semibold">{lecture.title}</span>
              <span className="text-sm text-slate-600">{lecture.summary}</span>
              <code className="mt-2 font-mono text-xs text-slate-400">{lecture.file}</code>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
