import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

// Finds every folder in app/students/ that has a page.tsx, so your page shows up
// here automatically. Nobody has to edit a shared list, so there are no merge conflicts.
function getStudentPages(): string[] {
  const studentsDir = path.join(process.cwd(), "app", "students");
  return fs
    .readdirSync(studentsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .filter((entry) => fs.existsSync(path.join(studentsDir, entry.name, "page.tsx")))
    .map((entry) => entry.name)
    .sort();
}

export default function Home() {
  const students = getStudentPages();

  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-4xl font-bold tracking-tight">T4SG Exploration F26 👋</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          This week you&apos;ll build one section of your hi-fi prototype (a dashboard, a card, a
          form) with HTML, Tailwind and TypeScript. Start by looking at the{" "}
          <Link href="/example" className="font-medium text-indigo-600 hover:underline">
            example dashboard
          </Link>
          , then follow the steps in the README.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Student pages</h2>
        {students.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-slate-500">
            No pages yet. Be the first! Copy <code className="font-mono">app/students/_template</code>{" "}
            to <code className="font-mono">app/students/your-name</code>.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((name) => (
              <li key={name}>
                <Link
                  href={`/students/${name}`}
                  className="block rounded-xl border border-slate-200 bg-white p-4 font-medium shadow-sm hover:border-indigo-400 hover:text-indigo-600"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
