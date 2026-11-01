"use client";
// ^ "use client" is needed for anything interactive (useState, onClick, onChange...).
//   Components without it run on the server and can't respond to clicks.

import { useState } from "react";
import type { Task } from "@/lib/types";

type TaskListProps = {
  initialTasks: Task[];
};

export default function TaskList({ initialTasks }: TaskListProps) {
  // STATE: data that can change. When you call setTasks, React re-renders this component.
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTitle, setNewTitle] = useState("");

  const doneCount = tasks.filter((task) => task.done).length;

  // Arrow function that flips one task's `done` value
  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // stop the browser from reloading the page
    if (newTitle.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), title: newTitle.trim(), done: false }]);
    setNewTitle("");
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold">Onboarding checklist</h3>
        <span className="text-sm text-slate-500">
          {doneCount}/{tasks.length} done
        </span>
      </div>

      <ul className="flex flex-col gap-2">
        {/* .map() turns each item in the array into a piece of JSX. Each needs a unique `key`. */}
        {tasks.map((task) => (
          <li key={task.id}>
            <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-slate-50">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)} // event listener
                className="h-4 w-4 accent-indigo-600"
              />
              <span className={task.done ? "text-slate-400 line-through" : ""}>{task.title}</span>
            </label>
          </li>
        ))}
      </ul>

      <form onSubmit={addTask} className="mt-4 flex gap-2">
        <input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
          placeholder="Add a task..."
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Add
        </button>
      </form>
    </div>
  );
}
