export type Post = {
  slug: string; // the part of the URL: /blog/<slug>
  title: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, world",
    body: "This page lives at /blog/hello-world, but there is no hello-world folder. One [slug] page handles every post.",
  },
  {
    slug: "post-1",
    title: "Our first project",
    body: "Dynamic routes let one file render many URLs. The slug from the URL is used to look up the right data.",
  },
  {
    slug: "my-first-project",
    title: "What I learned building my first page",
    body: "Folders become URLs, page.tsx makes them visible, and square brackets make them dynamic.",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
