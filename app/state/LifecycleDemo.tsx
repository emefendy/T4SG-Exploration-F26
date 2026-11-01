"use client";

import { useEffect, useState } from "react";

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [log, setLog] = useState<string[]>([]);

  // Also print to the on-page log so it's visible without opening DevTools
  const record = (message: string) => {
    console.log(message);
    setLog((previous) => [message, ...previous].slice(0, 6));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- teaching demo: logging every change
    record(`count is now ${count}`);
  }, [count]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
        >
          +1 (count: {count})
        </button>
        <button
          onClick={() => setShow(!show)}
          className="rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50"
        >
          Toggle child
        </button>
      </div>

      {show && <Child onLog={record} />}

      <div className="rounded-lg bg-slate-900 p-3 font-mono text-xs text-emerald-300">
        {log.map((line, index) => (
          <div key={index} className={index === 0 ? "" : "opacity-50"}>
            &gt; {line}
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-500">
        Seeing &quot;mounted → unmounted → mounted&quot; on page load? That&apos;s React Strict Mode: in
        development it runs effects twice on purpose to help catch bugs. It doesn&apos;t happen in
        production.
      </p>
    </div>
  );
}

function Child({ onLog }: { onLog: (message: string) => void }) {
  useEffect(() => {
    onLog("Child mounted");
    return () => onLog("Child unmounted");
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount/unmount
  }, []);

  return <p className="rounded-lg bg-amber-100 px-3 py-2">I&apos;m the child component 👋</p>;
}
