// The list of lecture demos. The home page and navbar are built from this array.
export type Lecture = {
  href: string;
  title: string;
  summary: string;
  file: string;
};

export const lectures: Lecture[] = [
  {
    href: "/syntax",
    title: "1. Must-know syntax",
    summary: "let vs const, functions, arrow functions, loops, event listeners",
    file: "app/syntax/page.tsx",
  },
  {
    href: "/jsx",
    title: "2. JSX / TSX",
    summary: "HTML inside TypeScript, curly braces, lists, conditionals",
    file: "app/jsx/page.tsx",
  },
  {
    href: "/props",
    title: "3. Components & props",
    summary: "Reusing one component with different data, typed props",
    file: "app/props/page.tsx",
  },
  {
    href: "/tailwind",
    title: "4. Styling with Tailwind",
    summary: "Utility classes, layout with flex/grid, hover and responsive prefixes",
    file: "app/tailwind/page.tsx",
  },
  {
    href: "/state",
    title: "5. State, lifecycle & debugging",
    summary: "useState, useEffect, console.log and DevTools",
    file: "app/state/page.tsx",
  },
  {
    href: "/blog",
    title: "6. Routing & dynamic routes",
    summary: "Folders become URLs, [slug] pages, Link",
    file: "app/blog/[slug]/page.tsx",
  },
  {
    href: "/dashboard",
    title: "7. Putting it together: a dashboard",
    summary: "A small hi-fi prototype section built from typed components",
    file: "app/dashboard/page.tsx",
  },
  {
    href: "/build",
    title: "8. Build an element, step by step",
    summary: "From a hi-fi design to an interactive component in 5 steps (menu card)",
    file: "app/build/steps/Step1.tsx … Step5.tsx",
  },
  {
    href: "/huds-menu",
    title: "9. Full page demo: HUDS dining menu",
    summary: "A recreation of the FoodPro menu page: date picker, meal tabs, filters, nutrition report",
    file: "app/huds-menu/",
  },
  {
    href: "/live",
    title: "🎤 Live coding",
    summary: "Empty page for coding along during lecture",
    file: "app/live/page.tsx",
  },
];
