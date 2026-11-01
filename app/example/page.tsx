import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";
import TaskList from "@/components/TaskList";
import { initialTasks, projects, stats } from "@/lib/mock-data";

// This file lives at app/example/page.tsx, so it shows up at localhost:3000/example
// It's a finished example: read it, then copy the patterns into your own page.
export default function ExampleDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold">Example dashboard</h1>
        <p className="mt-1 text-slate-600">
          Built from small components in <code className="font-mono text-sm">components/</code>{" "}
          with mock data from <code className="font-mono text-sm">lib/mock-data.ts</code>.
        </p>
      </header>

      {/* Stat row: a responsive grid. 1 column on phones, 2 on tablets, 4 on desktops. */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          // {...stat} passes every field of `stat` as a prop: label, value, change
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Your tasks</h2>
          <TaskList initialTasks={initialTasks} />
        </div>
      </section>
    </div>
  );
}
