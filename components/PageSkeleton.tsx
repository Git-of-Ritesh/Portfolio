function SkeletonLine({ className = "" }: { className?: string }) {
  return <div className={`skeleton rounded-full ${className}`} />;
}

function SkeletonTag({ className = "" }: { className?: string }) {
  return <div className={`skeleton h-7 rounded-full ${className}`} />;
}

export function HomePageSkeleton() {
  return (
    <main className="min-h-screen bg-white">
      <section className="grid-bg px-6 pb-20 pt-32">
        <div className="mx-auto max-w-6xl">
          <SkeletonLine className="h-8 w-56" />
          <div className="mt-8 space-y-4">
            <SkeletonLine className="h-14 w-full max-w-3xl md:h-20" />
            <SkeletonLine className="h-14 w-10/12 max-w-2xl md:h-20" />
          </div>
          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="space-y-3">
              <SkeletonLine className="h-4 w-80 max-w-full" />
              <SkeletonLine className="h-4 w-72 max-w-full" />
              <SkeletonLine className="h-4 w-60 max-w-full" />
            </div>
            <div className="flex gap-3">
              <SkeletonLine className="h-11 w-32" />
              <SkeletonLine className="h-11 w-40" />
            </div>
          </div>
          <div className="mt-16 grid overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="bg-white p-6">
                <SkeletonLine className="h-8 w-14" />
                <SkeletonLine className="mt-3 h-3 w-36" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectSectionSkeleton compact />
    </main>
  );
}

export function ProjectSectionSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`bg-white px-6 ${compact ? "py-20" : "pt-36 pb-20"}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SkeletonLine className="h-4 w-40" />
            <div className="mt-5 space-y-3">
              <SkeletonLine className="h-10 w-72 md:h-14 md:w-96" />
              <SkeletonLine className="h-10 w-56 md:h-14 md:w-80" />
            </div>
          </div>
          <div className="space-y-3 md:items-end">
            <SkeletonLine className="h-4 w-72" />
            <SkeletonLine className="h-4 w-56" />
          </div>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950 sm:aspect-[16/10] md:h-screen md:aspect-auto">
        <div className="skeleton absolute inset-0 opacity-60" />
        <div className="absolute inset-x-6 bottom-8 max-w-6xl md:left-1/2 md:-translate-x-1/2">
          <SkeletonLine className="h-5 w-48 bg-white/15" />
          <SkeletonLine className="mt-5 h-14 w-80 max-w-full bg-white/15 md:h-20 md:w-[34rem]" />
          <SkeletonLine className="mt-4 h-14 w-64 max-w-full bg-white/15 md:h-20 md:w-[28rem]" />
          <div className="mt-7 flex flex-wrap gap-2">
            {[0, 1, 2, 3].map((item) => (
              <SkeletonTag key={item} className="w-24 bg-white/15" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudySkeleton() {
  return (
    <main className="bg-white px-6 pb-20 pt-36 text-black md:pt-44">
      <div className="mx-auto max-w-6xl">
        <SkeletonLine className="h-4 w-40" />
        <div className="mt-5 space-y-3">
          <SkeletonLine className="h-14 w-72 md:h-20 md:w-[30rem]" />
          <SkeletonLine className="h-14 w-80 max-w-full md:h-20 md:w-[42rem]" />
        </div>
        <div className="mt-8 space-y-3">
          <SkeletonLine className="h-4 w-full max-w-2xl" />
          <SkeletonLine className="h-4 w-11/12 max-w-xl" />
          <SkeletonLine className="h-4 w-8/12 max-w-md" />
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {[0, 1, 2, 3].map((item) => (
            <SkeletonTag key={item} className="w-24" />
          ))}
        </div>
        <div className="skeleton mt-14 aspect-[4/3] rounded-lg shadow-[0_34px_90px_rgba(0,0,0,0.08)] sm:aspect-[16/9]" />
      </div>
      <div className="mx-auto mt-20 grid max-w-6xl gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="bg-white p-6 md:p-8">
            <SkeletonLine className="h-3 w-24" />
            <SkeletonLine className="mt-5 h-6 w-full" />
            <SkeletonLine className="mt-3 h-6 w-9/12" />
          </div>
        ))}
      </div>
    </main>
  );
}

export function JournalSkeleton() {
  return (
    <main className="relative z-10 overflow-clip rounded-b-[2rem] bg-white text-black md:rounded-b-[3rem]">
      <section className="px-6 pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <SkeletonLine className="h-4 w-36" />
          <div className="mb-14 mt-12 max-w-3xl">
            <SkeletonLine className="h-14 w-72 md:h-20 md:w-[32rem]" />
            <SkeletonLine className="mt-3 h-14 w-80 max-w-full md:h-20 md:w-[38rem]" />
            <div className="mt-7 space-y-3">
              <SkeletonLine className="h-4 w-full max-w-xl" />
              <SkeletonLine className="h-4 w-11/12 max-w-lg" />
              <SkeletonLine className="h-4 w-8/12 max-w-sm" />
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="bg-white p-7">
                <div className="flex items-center justify-between gap-4">
                  <SkeletonTag className="w-24" />
                  <SkeletonLine className="h-3 w-16" />
                </div>
                <SkeletonLine className="mt-8 h-6 w-full" />
                <SkeletonLine className="mt-3 h-6 w-9/12" />
                <div className="mt-5 space-y-3">
                  <SkeletonLine className="h-3 w-full" />
                  <SkeletonLine className="h-3 w-11/12" />
                  <SkeletonLine className="h-3 w-8/12" />
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-4">
                  <SkeletonLine className="h-3 w-20" />
                  <SkeletonLine className="h-3 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function JournalArticleSkeleton() {
  return (
    <main className="relative z-10 overflow-clip rounded-b-[2rem] bg-white text-black md:rounded-b-[3rem]">
      <article className="px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <SkeletonLine className="mb-10 h-5 w-36" />
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <SkeletonTag className="w-24" />
            <SkeletonLine className="h-3 w-24" />
            <SkeletonLine className="h-3 w-16" />
          </div>
          <SkeletonLine className="h-12 w-full md:h-16" />
          <SkeletonLine className="mt-3 h-12 w-10/12 md:h-16" />
          <div className="mt-7 space-y-3">
            <SkeletonLine className="h-5 w-full" />
            <SkeletonLine className="h-5 w-11/12" />
            <SkeletonLine className="h-5 w-8/12" />
          </div>

          <div className="mt-14 space-y-12">
            {[0, 1, 2].map((item) => (
              <section key={item} className="border-t border-neutral-200 pt-8">
                <SkeletonLine className="h-8 w-56" />
                <div className="mt-5 space-y-4">
                  <SkeletonLine className="h-4 w-full" />
                  <SkeletonLine className="h-4 w-11/12" />
                  <SkeletonLine className="h-4 w-full" />
                  <SkeletonLine className="h-4 w-9/12" />
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
