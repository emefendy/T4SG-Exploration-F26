import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getPost, posts } from "@/lib/posts";

// Tells Next.js which slugs exist, so it can build these pages ahead of time.
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// `params` holds the values from the URL. It's a Promise (data that arrives later).
// With cacheComponents on (like your starter repos), code that waits on params
// must be wrapped in <Suspense>, which shows the fallback until it's ready.
export default function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <article className="flex max-w-2xl flex-col gap-4">
      <Link href="/blog" className="text-sm font-medium text-indigo-600 hover:underline">
        ← Back to routing demo
      </Link>
      <Suspense fallback={<p className="text-slate-400">Loading post…</p>}>
        <PostContent params={params} />
      </Suspense>
    </article>
  );
}

async function PostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // e.g. /blog/hello-world → slug = "hello-world"
  const post = getPost(slug);

  if (!post) {
    notFound(); // shows the 404 page for slugs that don't exist
  }

  return (
    <>
      <p className="font-mono text-sm text-slate-400">
        app/blog/[slug]/page.tsx · slug = &quot;{slug}&quot;
      </p>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-lg text-slate-700">{post.body}</p>
    </>
  );
}
