# T4SG Exploration F26

Starter repo for the Week 4 deliverable: **build one small section of your hi-fi prototype** (a dashboard, a card, a list, a form) with **HTML, Tailwind and TypeScript**.

It doesn't have to be perfect. Aim for a working skeleton of your section that shows how you're keeping track of its data.

**Stack:** [Next.js](https://nextjs.org/docs) (React framework) · [TypeScript](https://www.typescriptlang.org/docs/) · [Tailwind CSS](https://tailwindcss.com/docs)

---

## 1. One-time setup

Install these first:
- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/) (the **LTS** version)
- [Git](https://git-scm.com/downloads) (Windows only; Macs already have it)
- A [GitHub](https://github.com/) account

Then open a terminal in VS Code (**View → Terminal**) and run:

```bash
git clone https://github.com/emefendy/T4SG-Exploration-F26.git
cd T4SG-Exploration-F26
npm install
npm run dev
```

Open **http://localhost:3000**. You should see the home page. Leave `npm run dev` running: the page updates every time you save a file. Press `Ctrl + C` to stop it.

---

## 2. Make your own branch

**Never work on `main`.** Create a branch named after you and what you're building:

```bash
git pull                                # get the latest code first
git checkout -b jane-doe/dashboard-card # create + switch to your branch
```

---

## 3. Make your page

1. Copy the folder `app/students/_template` and rename the copy to your name (lowercase, dashes): `app/students/jane-doe`
2. Go to **http://localhost:3000/students/jane-doe**. That's your page!
3. Edit `page.tsx` and the files in `components/` to build your section.

**Keep all your files inside your own folder.** That way you'll never get a merge conflict with anyone else.

```
app/
├── page.tsx               ← home page (lists everyone's pages automatically)
├── layout.tsx             ← navbar that wraps every page
├── example/page.tsx       ← finished example dashboard: read this!
└── students/
    ├── _template/         ← copy this
    └── jane-doe/          ← ✅ your folder
        ├── page.tsx       ← localhost:3000/students/jane-doe
        └── components/
            └── MyCard.tsx
components/                ← example components (StatCard, ProjectCard, TaskList)
lib/
├── types.ts               ← example TypeScript types
└── mock-data.ts           ← fake data to build with
```

### What to include
- [ ] At least **2 components** of your own, each with **typed props**
- [ ] Data stored in a typed array or object that you `.map()` over, not hard-coded HTML repeated over and over
- [ ] Styling done with **Tailwind classes** in `className`
- [ ] *(Stretch)* Something interactive with `useState` (a toggle, a filter, a form). See `components/TaskList.tsx`

### Use the example
Open **http://localhost:3000/example** next to `app/example/page.tsx` and the files in `components/`. Every pattern you need is in there with comments: props, types, `.map()`, conditional styling, `useState` and event listeners.

---

## 4. Save and submit your work

```bash
git add .
git commit -m "Add dashboard stat cards"
git push -u origin jane-doe/dashboard-card   # first push; after that just `git push`
```

Then on GitHub:
1. Click **Compare & pull request**
2. Fill in the template (what you built + a screenshot)
3. Add a reviewer and click **Create pull request**
4. If a reviewer asks for changes, make them, then `add` / `commit` / `push` again. The PR updates automatically.

Before you open the PR, run `npm run build` to make sure there are no errors.

---

## Cheat sheets

### Git
| Command | What it does |
|---|---|
| `git pull` | Get everyone's latest changes (do this often!) |
| `git status` | See what you changed and which branch you're on |
| `git checkout -b <name>` | Create a branch and switch to it |
| `git add .` | Stage all your changes |
| `git commit -m "msg"` | Save a snapshot (on your computer only) |
| `git push` | Upload your commits to GitHub |

### Tailwind classes you'll use constantly
| Want to... | Classes |
|---|---|
| Lay things out in a row / column | `flex`, `flex-col`, `items-center`, `justify-between`, `gap-4` |
| Make a grid | `grid grid-cols-1 md:grid-cols-3 gap-4` |
| Spacing | `p-4` (padding), `px-4 py-2`, `m-4` (margin), `mt-2` |
| Text | `text-sm`, `text-2xl`, `font-semibold`, `text-slate-600` |
| Backgrounds & borders | `bg-white`, `bg-indigo-600`, `border`, `border-slate-200`, `rounded-xl`, `shadow-sm` |
| Hover & responsive | `hover:bg-indigo-700`, `md:` / `lg:` prefixes apply at bigger screens |

Search any CSS property at **https://tailwindcss.com/docs**.

### React + TypeScript patterns
```tsx
// Typed props
type CardProps = { title: string; count: number };
function Card({ title, count }: CardProps) {
  return <div className="p-4">{title}: {count}</div>;
}

// Render a list from data
{items.map((item) => <Card key={item.id} title={item.name} count={item.count} />)}

// Interactive state (add "use client" at the very top of the file)
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
```

---

## Troubleshooting
- **`npm: command not found`**: Node.js isn't installed, or you need to restart VS Code after installing it.
- **My page 404s**: the folder must contain a file named exactly `page.tsx`, and the folder name can't start with `_`.
- **`useState` / `onClick` error about Server Components**: add `"use client";` as the first line of that file.
- **Red squiggly lines**: hover over them. TypeScript is telling you what's wrong.
- **Merge conflict**: ask a lead! (If you only touch your own folder, this shouldn't happen.)
