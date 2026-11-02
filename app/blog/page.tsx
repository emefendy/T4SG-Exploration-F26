import Link from "next/link";
import Demo, { PageHeader } from "@/components/Demo";
import { posts } from "@/lib/posts";

// This file is app/blog/page.tsx → it renders at /blog
export default function BlogIndex() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="6. Routing & dynamic routes"
        description="In Next.js, folders inside app/ become URLs, as long as the folder has a page.tsx file."
      />

      <Demo
        title="Folders → URLs"
        code={`
app/page.tsx                  →  /
app/about/page.tsx            →  /about
app/about/contacts/page.tsx   →  /about/contacts

app/blog/page.tsx             →  /blog          (this page!)
app/blog/[slug]/page.tsx      →  /blog/anything (the posts below)
`}
      >
        <p className="text-slate-700">
          This repo&apos;s own routes: open the <code className="font-mono text-sm">app/</code>{" "}
          folder in VS Code. Every folder with a <code className="font-mono text-sm">page.tsx</code>{" "}
          is a page in the navbar.
        </p>
      </Demo>

      <Demo
        title="Dynamic routes with [slug]"
        code={`
// One file handles every post:
app/blog/[slug]/page.tsx

  /blog/hello-world       → slug = "hello-world"
  /blog/post-1            → slug = "post-1"
  /blog/my-first-project  → slug = "my-first-project"

// Reading the slug (wrap it in <Suspense> with this Next.js config):
async function PostContent({ params }) {
  const { slug } = await params;
  ...
}

// Link between pages with <Link>, not <a>:
import Link from "next/link";
<Link href={\`/blog/\${post.slug}\`}>{post.title}</Link>
`}
      >
        <ul className="flex flex-col gap-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-slate-200 px-4 py-3 hover:border-indigo-400"
              >
                <span className="font-medium">{post.title}</span>
                <span className="block font-mono text-xs text-slate-400">/blog/{post.slug}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Demo>
    </div>
  );
}
