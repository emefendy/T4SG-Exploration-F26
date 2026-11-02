import type { Project, Stat, Task } from "./types";

// Fake data so you can build UI without a backend.
// Feel free to add your own mock data in your own folder (app/students/<your-name>/).

export const stats: Stat[] = [
  { label: "Volunteers", value: "1,284", change: 12 },
  { label: "Hours logged", value: "9,410", change: 8 },
  { label: "Partner orgs", value: "37", change: -3 },
  { label: "Open requests", value: "52", change: 4 },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Food Bank Inventory",
    organization: "Greater Boston Food Bank",
    status: "on-track",
    progress: 72,
    teamSize: 6,
  },
  {
    id: 2,
    name: "Tutor Matching",
    organization: "Cambridge Youth Programs",
    status: "at-risk",
    progress: 38,
    teamSize: 4,
  },
  {
    id: 3,
    name: "Shelter Bed Tracker",
    organization: "Pine Street Inn",
    status: "done",
    progress: 100,
    teamSize: 5,
  },
];

export const initialTasks: Task[] = [
  { id: 1, title: "Clone the repo", done: true },
  { id: 2, title: "Make a branch", done: false },
  { id: 3, title: "Build your first component", done: false },
  { id: 4, title: "Open a pull request", done: false },
];
