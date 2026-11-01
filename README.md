# T4SG Exploration F26: Week 4 Lecture

Lecture demos for **React, Next.js, TypeScript and Tailwind**. Each page shows the code next to what it renders, so you can follow along in VS Code.

> **Looking for your project?** This repo is just for the lecture. Your team's starter is:
> - HUDS: [DarrenA339/F26-Exploration-HUDS](https://github.com/DarrenA339/F26-Exploration-HUDS)
> - Senior Sales: [DarrenA339/F26-Exploration-Senior-Sales](https://github.com/DarrenA339/F26-Exploration-Senior-Sales)
>
> This repo uses the same Next.js version and config as those starters, so anything you see here works there too.

## Run it

You need [VS Code](https://code.visualstudio.com/), [Node.js](https://nodejs.org/) (LTS) and [Git](https://git-scm.com/downloads) (Windows only; Macs already have it).

```bash
git clone https://github.com/emefendy/T4SG-Exploration-F26.git
cd T4SG-Exploration-F26
npm install
npm run dev
```

Open **http://localhost:3000**. The page updates every time you save a file. Press `Ctrl + C` in the terminal to stop.

## What's in here

| # | Topic | URL | File to open |
|---|---|---|---|
| 1 | Must-know syntax: `let`/`const`, functions, arrow functions, loops, event listeners | `/syntax` | `app/syntax/page.tsx` |
| 2 | JSX/TSX: curly braces, `.map()`, conditionals, gotchas | `/jsx` | `app/jsx/page.tsx` |
| 3 | Components & typed props | `/props` | `app/props/page.tsx` |
| 4 | Tailwind: building up classes, flex, grid, responsive | `/tailwind` | `app/tailwind/page.tsx` |
| 5 | State, lifecycle (`useState`, `useEffect`) & debugging | `/state` | `app/state/page.tsx` |
| 6 | Routing & dynamic routes (`[slug]`) | `/blog` | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` |
| 7 | Putting it together: a dashboard | `/dashboard` | `app/dashboard/page.tsx` |
| 8 | **Build an element step by step**: plain HTML → Tailwind → props → typed data → state | `/build` | `app/build/steps/Step1.tsx` … `Step5.tsx` |
| 9 | **Full page demo**: HUDS dining menu recreation (sample data) with meal tabs, dietary filters and a nutrition report | `/huds-menu` | `app/huds-menu/` |
| 🎤 | Empty page for live coding | `/live` | `app/live/page.tsx` |

Reusable pieces:
```
components/
├── StatCard.tsx      ← simple typed props
├── ProjectCard.tsx   ← an object prop + conditional styling
├── TaskList.tsx      ← "use client", useState, event listeners
└── Demo.tsx          ← lecture helper (code + result side by side)
lib/
├── types.ts          ← TypeScript types for the mock data
├── mock-data.ts      ← fake data to build with
└── posts.ts          ← data for the dynamic routing demo
```

## Summary

- **TypeScript** adds types for safer code
- **React** builds UI with components
- **Next.js** organizes the app and handles routing
- **Tailwind** styles the UI

## Git workflow (for your project repo)

```bash
git clone <your-starter-repo-url>     # once
git pull                              # often! stay up to date
git checkout -b your-name/feature     # never work on main
git add .                             # stage changes
git commit -m "Add dashboard cards"   # save a snapshot (local only)
git push -u origin your-name/feature  # upload, then open a Pull Request on GitHub
```

PR cycle: push your branch → open a PR with a clear description → add reviewers → make requested edits → merge into `main` once approved.

## Good to know about this Next.js version

This is **Next.js 16** with `cacheComponents` turned on (same as the starters). Most online tutorials still work, but a few things differ:
- `params` in a page is a **Promise**: `const { slug } = await params;`
- Code that reads `params` must be inside a `<Suspense>` boundary (see `app/blog/[slug]/page.tsx`), or the dev overlay shows an error.
- Anything interactive (`useState`, `onClick`) needs `"use client";` at the top of the file.
