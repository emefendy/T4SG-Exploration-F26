import MyCard from "./components/MyCard";

// ─────────────────────────────────────────────────────────────────────────────
// YOUR PAGE STARTS HERE
//
// 1. Copy this whole `_template` folder and rename the copy to your name,
//    e.g. app/students/jane-doe/
//    (Folders starting with "_" are hidden from routing, which is why this
//     template has no URL. Your copy WILL have one.)
// 2. Visit localhost:3000/students/jane-doe to see it.
// 3. Replace everything below with the section of your hi-fi prototype
//    you're building (a dashboard, a card, a form, a list...).
//
// Keep ALL your files inside your own folder so you never conflict with anyone.
// ─────────────────────────────────────────────────────────────────────────────

export default function MyPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Your Name&apos;s page</h1>

      <p className="text-slate-600">
        TODO: describe which part of your hi-fi prototype this page recreates.
      </p>

      {/* TODO: replace these with your own components */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <MyCard title="First card" description="Props let you reuse one component with different data." />
        <MyCard title="Second card" description="Change the Tailwind classes in MyCard.tsx and watch this update." />
      </div>
    </div>
  );
}
