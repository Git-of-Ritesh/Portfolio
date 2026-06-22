import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";

type JournalArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: JournalArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Journal | Raj Pandey",
    };
  }

  return {
    title: `${post.title} | Raj Pandey`,
    description: post.excerpt,
  };
}

export default async function JournalArticlePage({ params }: JournalArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <div className="bg-black">
      <Navbar />
      <main className="relative z-10 overflow-clip rounded-b-[2rem] bg-white text-black md:rounded-b-[3rem]">
        <article className="px-6 pb-24 pt-32 md:pb-32 md:pt-40">
          <div className="mx-auto max-w-3xl">
            <Link href="/journal" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition-colors hover:text-black">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to journal
            </Link>

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500">
                {post.tag}
              </span>
              <span className="text-xs text-neutral-400">{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span className="text-xs text-neutral-400">{post.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">{post.title}</h1>
            <p className="mt-7 text-lg leading-relaxed text-neutral-500 md:text-xl">{post.intro}</p>

            <div className="mt-14 space-y-12">
              {post.sections.map((section) => (
                <section key={section.heading} className="border-t border-neutral-200 pt-8">
                  <h2 className="text-2xl font-bold text-black">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-5 text-base leading-8 text-neutral-600">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-6 grid gap-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-base leading-7 text-neutral-600">
                          <span className="mt-3 h-px w-5 shrink-0 bg-black" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer reveal />
    </div>
  );
}
