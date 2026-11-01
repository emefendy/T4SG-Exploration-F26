import type { Project, ProjectStatus } from "@/lib/types";

// A lookup table from status -> label + Tailwind classes.
// Record<ProjectStatus, ...> means TypeScript makes sure every status is covered.
const statusStyles: Record<ProjectStatus, { label: string; className: string }> = {
  "on-track": { label: "On track", className: "bg-emerald-100 text-emerald-700" },
  "at-risk": { label: "At risk", className: "bg-amber-100 text-amber-700" },
  done: { label: "Done", className: "bg-slate-200 text-slate-700" },
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusStyles[project.status];

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold">{project.name}</h3>
          <p className="text-sm text-slate-500">{project.organization}</p>
        </div>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}>
          {status.label}
        </span>
      </div>

      {/* Progress bar: the inner div's width is set from data */}
      <div>
        <div className="mb-1 flex justify-between text-xs text-slate-500">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-indigo-500"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      <p className="text-sm text-slate-600">👥 {project.teamSize} team members</p>
    </div>
  );
}
