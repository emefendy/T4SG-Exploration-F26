// TypeScript types describe the SHAPE of our data.
// If you try to use a field that doesn't exist (or the wrong kind of value),
// VS Code underlines it in red before you even run the code.

export type ProjectStatus = "on-track" | "at-risk" | "done";

export type Project = {
  id: number;
  name: string;
  organization: string;
  status: ProjectStatus; // can ONLY be one of the three strings above
  progress: number; // 0 to 100
  teamSize: number;
};

export type Stat = {
  label: string;
  value: string;
  change: number; // percent change, e.g. 12 or -4
};

export type Task = {
  id: number;
  title: string;
  done: boolean;
};
