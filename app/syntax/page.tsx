import Demo, { PageHeader } from "@/components/Demo";
import ClickCounter from "./ClickCounter";

// ── Variables ────────────────────────────────────────────────
const orgName = "Greater Boston Food Bank"; // const: can't be reassigned
let volunteers = 10; // let: can be reassigned
volunteers = volunteers + 5;

// ── Functions ────────────────────────────────────────────────
function greet(name: string) {
  return `Welcome, ${name}!`;
}

// ── Arrow function: same thing, shorter ──────────────────────
const greetArrow = (name: string) => `Welcome, ${name}!`;

// ── For loop: repeat a set number of times ───────────────────
const countdown: number[] = [];
for (let i = 3; i > 0; i--) {
  countdown.push(i);
}

// ── While loop: repeat while a condition is true ─────────────
let meals = 1;
let days = 0;
while (meals < 100) {
  meals = meals * 2;
  days++;
}

export default function SyntaxPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="1. Must-know syntax"
        description="The JavaScript/TypeScript building blocks you'll use in every component. The code at the top of app/syntax/page.tsx runs, and its results are shown on the right."
      />

      <Demo
        title="Variables: let vs const"
        code={`
const orgName = "Greater Boston Food Bank";
// orgName = "Something else"; ❌ error: const can't change

let volunteers = 10;
volunteers = volunteers + 5; // ✅ let can change
`}
      >
        <p>orgName = &quot;{orgName}&quot;</p>
        <p>volunteers = {volunteers}</p>
      </Demo>

      <Demo
        title="Functions & arrow functions"
        code={`
function greet(name: string) {
  return \`Welcome, \${name}!\`;
}

// Same thing as an arrow function:
const greetArrow = (name: string) => \`Welcome, \${name}!\`;

greet("Ana");
greetArrow("Bo");
`}
      >
        <p>{greet("Ana")}</p>
        <p>{greetArrow("Bo")}</p>
      </Demo>

      <Demo
        title="Loops"
        code={`
// for: repeat a set number of times
const countdown: number[] = [];
for (let i = 3; i > 0; i--) {
  countdown.push(i);
}

// while: repeat as long as a condition is true
let meals = 1;
let days = 0;
while (meals < 100) {
  meals = meals * 2;
  days++;
}
`}
      >
        <p>countdown = [{countdown.join(", ")}]</p>
        <p>
          Doubling meals each day passes 100 after {days} days ({meals} meals)
        </p>
      </Demo>

      <Demo
        title="Event listeners"
        code={`
"use client"; // needed for anything interactive

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
`}
      >
        <ClickCounter />
      </Demo>
    </div>
  );
}
