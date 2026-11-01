import Demo, { PageHeader } from "@/components/Demo";

const user = "Ana";
const hobbies = ["coding", "chess", "soccer"];
const isLoggedIn = true;
const unreadMessages = 3;

export default function JsxPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="2. JSX / TSX"
        description="JSX lets you write HTML-like markup inside TypeScript. Curly braces { } switch back into TypeScript so you can use variables, expressions, lists and conditions."
      />

      <Demo
        title="Plain HTML"
        code={`
<div>
  <h1>Hello!</h1>
  <p>This is a paragraph.</p>
  <button>Click me</button>
</div>
`}
      >
        <div>
          <h1 className="text-2xl font-bold">Hello!</h1>
          <p>This is a paragraph.</p>
          <button className="mt-2 rounded border px-3 py-1">Click me</button>
        </div>
      </Demo>

      <Demo
        title="Curly braces: variables & expressions"
        code={`
const user = "Ana";

<h1>Hi, {user}!</h1>
<p>2 + 2 = {2 + 2}</p>
<p>{user.toUpperCase()}</p>
`}
      >
        <h1 className="text-2xl font-bold">Hi, {user}!</h1>
        <p>2 + 2 = {2 + 2}</p>
        <p>{user.toUpperCase()}</p>
      </Demo>

      <Demo
        title="Lists with .map()"
        code={`
const hobbies = ["coding", "chess", "soccer"];

<ul>
  {hobbies.map((hobby) => (
    <li key={hobby}>{hobby}</li>  // every item needs a unique key
  ))}
</ul>
`}
      >
        <ul className="list-disc pl-5">
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </Demo>

      <Demo
        title="Conditionals"
        code={`
const isLoggedIn = true;
const unreadMessages = 3;

// if/else → ternary
<p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>

// "only show if true" → &&
{unreadMessages > 0 && <p>You have {unreadMessages} new messages</p>}
`}
      >
        <p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>
        {unreadMessages > 0 && <p>You have {unreadMessages} new messages</p>}
      </Demo>

      <Demo
        title="JSX gotchas"
        code={`
// 1. class → className
<div className="card">...</div>

// 2. Return ONE parent element (wrap siblings in <div> or <>...</>)
return (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
);

// 3. Close every tag, even "empty" ones
<img src="/logo.png" alt="Logo" />
<input />

// 4. Component names start with a Capital letter
<ProjectCard />   // ✅ component
<projectCard />   // ❌ treated as an unknown HTML tag
`}
      >
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>
            <code>className</code>, not <code>class</code>
          </li>
          <li>One parent element per return</li>
          <li>Self-close empty tags</li>
          <li>Capitalize component names</li>
        </ul>
      </Demo>
    </div>
  );
}
