import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Journal | Raj Pandey",
  description: "Flutter notes on performance, Firebase integration, and app store release preparation.",
};

export default function JournalPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="relative z-10 overflow-clip rounded-b-[2rem] bg-white text-black md:rounded-b-[3rem]">
        <section className="px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-3">
              <span className="section-number">05</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">Journal</span>
            </div>

            <div className="mb-14 max-w-3xl">
              <h1 className="text-5xl font-bold leading-[0.95] md:text-7xl">
                Flutter notes.
                <br />
                <span className="text-neutral-400">Built from practice.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
                Short, practical articles about building Flutter apps, connecting Firebase and APIs, keeping UI stable, and preparing releases for public stores.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/journal/${post.slug}`} className="group flex flex-col gap-5 bg-white p-7 transition-colors hover:bg-neutral-50">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500">
                      {post.tag}
                    </span>
                    <span className="text-xs text-neutral-400">{post.readTime}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold leading-snug text-black group-hover:text-neutral-700">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-neutral-100 pt-4 text-xs">
                    <span className="text-neutral-400">{post.date}</span>
                    <span className="font-semibold text-black">Read article</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer reveal />
    </div>
  );
}
