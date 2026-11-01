import fs from "node:fs";
import path from "node:path";
import { PageHeader } from "@/components/Demo";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

// Reads each step's actual source file so the code shown always matches what renders.
function source(file: string) {
  return fs.readFileSync(path.join(process.cwd(), "app", "build", "steps", file), "utf8");
}

const steps = [
  {
    file: "Step1.tsx",
    title: "Step 1: Write the HTML structure",
    what: "Look at your design and list every piece top to bottom: image, title, subtitle, tags, button. No styling yet. Ugly is fine!",
    Component: Step1,
  },
  {
    file: "Step2.tsx",
    title: "Step 2: Style it with Tailwind",
    what: "Same HTML, now with className. Work outside-in: the card box, then the image, text sizes and colors, then rows (flex) for the tags and footer.",
    Component: Step2,
  },
  {
    file: "Step3.tsx",
    title: "Step 3: Turn it into a component with props",
    what: "Anything that changes between cards (name, hall, calories) becomes a typed prop. Now one component can show any dish.",
    Component: Step3,
  },
  {
    file: "Step4.tsx",
    title: "Step 4: Separate the data from the UI",
    what: "Define a MenuItem type, put the items in an array, and .map() over it. Adding a dish now means adding data, not copying HTML.",
    Component: Step4,
  },
  {
    file: "Step5.tsx",
    title: "Step 5: Make it interactive with state",
    what: 'Add "use client" and useState to track favorites and a meal filter. The UI updates automatically when state changes.',
    Component: Step5,
  },
];

export default function BuildPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title="Build an element: from design to component"
        description="How to turn one piece of your hi-fi prototype into code, using a dining hall menu card as the example. Each step is a real file in app/build/steps/, so open them side by side to see exactly what changed."
      />

      <section className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
        <h2 className="font-semibold text-indigo-900">The recipe (use it for any element)</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-indigo-900">
          <li>Pick ONE element from your Figma frame (a card, a header, a list row).</li>
          <li>Draw boxes on it: what&apos;s stacked vertically (flex-col)? What sits in a row (flex)?</li>
          <li>Write the plain HTML for each box.</li>
          <li>Add Tailwind: size and border → spacing → text → colors → hover.</li>
          <li>Find what changes between copies and make those props.</li>
          <li>Put the real content in a typed array and .map() it.</li>
          <li>Only then add interactivity (useState).</li>
        </ol>
      </section>

      {steps.map(({ file, title, what, Component }) => (
        <section key={file} className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-1 max-w-3xl text-slate-600">{what}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-100 p-6">
            <Component />
          </div>

          <details className="group">
            <summary className="cursor-pointer text-sm font-medium text-indigo-600 hover:underline">
              Show code: <code className="font-mono">app/build/steps/{file}</code>
            </summary>
            <pre className="mt-3 max-h-[36rem] overflow-auto rounded-xl bg-slate-900 p-5 font-mono text-sm leading-relaxed text-slate-100">
              <code>{source(file)}</code>
            </pre>
          </details>
        </section>
      ))}
    </div>
  );
}
