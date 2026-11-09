import Demo, { PageHeader } from "@/components/Demo";
import TaskList from "@/components/TaskList";
import { initialTasks } from "@/lib/mock-data";
import LifecycleDemo from "./LifecycleDemo";

export default function StatePage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="5. State, lifecycle & debugging"
        description="State is data that can change. When state changes, React re-renders the component, compares the new virtual DOM to the old one, and updates only what changed in the real DOM."
      />

      <Demo
        title="useState + useEffect"
        code={`
"use client";
import { useState, useEffect } from "react";

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // Runs after the first render AND every time count changes
  useEffect(() => {
    console.log("count is now", count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setShow(!show)}>Toggle child</button>
      {show && <Child />}
    </>
  );
}

function Child() {
  useEffect(() => {
    console.log("Child mounted");             // appears
    return () => console.log("Child unmounted"); // removed
  }, []); // [] = run once
  return <p>I'm the child</p>;
}
`}
      >
        <LifecycleDemo />
      </Demo>

      <Demo
        title="Lifecycle in one picture"
        code={`
Mount     component appears on the page for the first time
   ↓
Update    state or props change → React re-renders it
   ↓      (can happen many times)
Unmount   component is removed from the page
`}
      >
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>
            <strong>Mount:</strong> click &quot;Toggle child&quot; twice and watch the log.
          </li>
          <li>
            <strong>Update:</strong> click +1. The component re-renders with the new count.
          </li>
          <li>
            <strong>Unmount:</strong> hide the child and its cleanup function runs.
          </li>
        </ol>
      </Demo>

      <Demo
        title="Debugging checklist"
        code={`
1. console.log("here", someValue)
   → Right-click → Inspect → Console tab
   (logs from Server Components show in the TERMINAL, not the browser!)

2. Elements tab → see the real DOM + which Tailwind classes applied

3. React Developer Tools extension → Components tab
   → inspect props and state of any component

4. Read the red error overlay: it names the file and line

5. Hover red squiggles in VS Code: TypeScript tells you what's wrong
`}
      >
        <p className="text-slate-700">
          Open your browser&apos;s DevTools now and use the demo above: every click logs a
          message to the Console.
        </p>
      </Demo>

      <Demo
        title="Real example: components/TaskList.tsx"
        code={`
const [tasks, setTasks] = useState<Task[]>(initialTasks);

const toggleTask = (id: number) => {
  setTasks(tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  ));
};
`}
      >
        <TaskList initialTasks={initialTasks} />
      </Demo>
    </div>
  );
}
