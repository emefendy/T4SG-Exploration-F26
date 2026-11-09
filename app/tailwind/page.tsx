import Demo, { PageHeader } from "@/components/Demo";

export default function TailwindPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="4. Styling with Tailwind"
        description="Tailwind is utility-first: instead of writing CSS in a separate file, you stack small class names in className. Docs: tailwindcss.com/docs"
      />

      <Demo
        title="Building a button one class at a time"
        code={`
<button>Sign up</button>

<button className="bg-indigo-600 text-white">Sign up</button>

<button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
  Sign up
</button>

<button className="bg-indigo-600 text-white px-4 py-2 rounded-lg
                   font-medium shadow hover:bg-indigo-700">
  Sign up
</button>
`}
      >
        <div className="flex flex-col items-start gap-3">
          <button>Sign up</button>
          <button className="bg-indigo-600 text-white">Sign up</button>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">Sign up</button>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-700">
            Sign up
          </button>
        </div>
      </Demo>

      <Demo
        title="Flexbox: rows and columns"
        code={`
// Row, spaced apart, vertically centered
<div className="flex items-center justify-between">
  <span>Logo</span>
  <span>Menu</span>
</div>

// Column with gaps between children
<div className="flex flex-col gap-2">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
`}
      >
        <div className="flex items-center justify-between rounded bg-slate-100 p-3">
          <span className="rounded bg-indigo-200 px-2 py-1">Logo</span>
          <span className="rounded bg-indigo-200 px-2 py-1">Menu</span>
        </div>
        <div className="mt-4 flex flex-col gap-2 rounded bg-slate-100 p-3">
          <div className="rounded bg-emerald-200 px-2 py-1">One</div>
          <div className="rounded bg-emerald-200 px-2 py-1">Two</div>
          <div className="rounded bg-emerald-200 px-2 py-1">Three</div>
        </div>
      </Demo>

      <Demo
        title="Responsive grid"
        code={`
// 1 column on phones, 2 at md (768px+), 4 at lg (1024px+)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  ...
</div>
`}
      >
        <p className="mb-3 text-sm text-slate-500">Resize your browser window to see it change.</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="rounded bg-amber-200 p-3 text-center font-medium">
              {n}
            </div>
          ))}
        </div>
      </Demo>

      <Demo
        title="A card, from scratch"
        code={`
<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
  <p className="text-sm font-medium text-slate-500">Volunteers</p>
  <p className="mt-2 text-3xl font-semibold">1,284</p>
  <p className="mt-1 text-sm text-emerald-600">▲ 12% this month</p>
</div>
`}
      >
        <div className="max-w-xs rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Volunteers</p>
          <p className="mt-2 text-3xl font-semibold">1,284</p>
          <p className="mt-1 text-sm text-emerald-600">▲ 12% this month</p>
        </div>
      </Demo>

      <Demo
        title="Cheat sheet"
        code={`
Layout      flex  flex-col  items-center  justify-between  gap-4  grid  grid-cols-3
Spacing     p-4  px-4  py-2  m-4  mt-2   (1 unit = 4px, so p-4 = 16px)
Size        w-full  max-w-md  h-10
Text        text-sm  text-2xl  font-semibold  text-slate-600
Color       bg-white  bg-indigo-600  text-white   (shades 50 → 950)
Borders     border  border-slate-200  rounded-lg  rounded-full  shadow-sm
States      hover:bg-indigo-700  focus:outline-none
Responsive  sm:  md:  lg:   → apply at that screen width and up
`}
      >
        <p className="text-slate-700">
          Can&apos;t remember a class? Search the CSS property name at{" "}
          <a
            href="https://tailwindcss.com/docs"
            className="font-medium text-indigo-600 hover:underline"
          >
            tailwindcss.com/docs
          </a>
          , e.g. &quot;padding&quot; or &quot;justify-content&quot;.
        </p>
      </Demo>
    </div>
  );
}
