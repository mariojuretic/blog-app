import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { format, fromUnixTime } from "date-fns";
import Link from "next/link";

import { ARTICLES, type Article } from "@/data/db";

export default function Page() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 w-full border-b border-b-neutral-800 bg-yellow-500 transition-colors duration-300">
        <div className="flex justify-center">
          <div className="mx-4 w-full max-w-7xl sm:mx-8">
            <div className="flex h-20 items-center justify-between">
              <Link href="/">
                <span className="block h-8 w-40 rounded bg-neutral-800 transition-colors duration-300 hover:bg-neutral-950" />
              </Link>

              <div className="flex items-center gap-x-4">
                <Link
                  href="/"
                  className="hidden text-sm transition-colors duration-300 hover:text-neutral-950 sm:block"
                >
                  Sign in
                </Link>

                <Link
                  href="/"
                  className="rounded-full bg-neutral-800 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-neutral-950"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-b-neutral-800 bg-yellow-500">
        <div className="mb-px h-20" />

        <div className="flex justify-center">
          <div className="mx-4 w-full max-w-7xl sm:mx-8">
            <div className="flex flex-col items-start py-24">
              <h2 className="mb-6 font-serif text-6xl tracking-tighter text-neutral-950 sm:text-7xl lg:text-8xl">
                Stay curious.
              </h2>
              <h3 className="mb-12 w-4/5 text-2xl leading-none">
                Discover stories, thinking, and expertise from writers on any
                topic.
              </h3>
              <Link
                href="/"
                className="rounded-full bg-neutral-800 px-8 py-2 text-lg text-white transition-colors duration-300 hover:bg-neutral-950"
              >
                Start reading
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-b border-b-neutral-200">
        <div className="mx-4 w-full max-w-7xl sm:mx-8">
          <div className="py-12">
            <div className="mb-8 flex items-center gap-x-4">
              <ArrowTrendingUpIcon className="h-6 w-6 shrink-0 rounded-full border border-neutral-800 text-neutral-800" />
              <h2 className="font-medium">Trending on Medium</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {ARTICLES.filter((article) => article.id < 7).map(
                (article, index) => (
                  <TrendingArticle
                    key={article.id}
                    index={index}
                    {...article}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mx-4 w-full max-w-7xl sm:mx-8">
          <div className="py-12 sm:py-16">
            <div className="grid grid-cols-12 lg:items-start lg:gap-8 xl:gap-0">
              <div className="col-span-12 lg:col-span-8 xl:col-span-7">
                <div className="flex flex-col gap-8 sm:gap-12">
                  {ARTICLES.sort((a, b) => +b.date - +a.date).map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))}
                </div>
              </div>

              <div className="col-span-4 hidden lg:block xl:col-start-9">
                Sidebar
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type TrendingArticleProps = Article & {
  index: number;
};

function TrendingArticle({
  index,
  title,
  author,
  date,
  readingTime,
}: TrendingArticleProps) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-8 w-8 shrink-0 -translate-y-1.5 items-center justify-center text-3xl font-medium leading-none tracking-tighter text-neutral-200">
        0{index + 1}
      </span>
      <div className="flex grow flex-col gap-2">
        <Link
          href="/"
          className="group flex items-center gap-2 *:transition-colors *:duration-300"
        >
          <div className="h-5 w-5 rounded-full bg-neutral-600 group-hover:bg-neutral-950" />
          <span className="text-xs font-medium group-hover:text-neutral-950">
            {author}
          </span>
        </Link>
        <Link
          href="/"
          className="line-clamp-2 font-bold leading-tight transition-colors duration-300 hover:text-neutral-950"
        >
          {title}
        </Link>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span>{format(fromUnixTime(+date), "MMM d, yyyy")}</span>
          <span>·</span>
          <span>{readingTime} min read</span>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({
  title,
  description,
  author,
  date,
  readingTime,
}: Article) {
  return (
    <div className="flex items-start gap-4 sm:gap-6 md:items-center">
      <div className="flex grow flex-col gap-2 md:gap-3">
        <Link
          href="/"
          className="group flex items-center gap-2 *:transition-colors *:duration-300"
        >
          <div className="h-5 w-5 rounded-full bg-neutral-600 group-hover:bg-neutral-950" />
          <span className="text-xs font-medium group-hover:text-neutral-950">
            {author}
          </span>
        </Link>

        <Link
          href="/"
          className="group flex flex-col *:transition-colors *:duration-300 md:gap-1"
        >
          <h2 className="line-clamp-2 font-bold leading-tight group-hover:text-neutral-950 md:text-xl md:leading-6">
            {title}
          </h2>
          <p className="hidden leading-tight text-neutral-500 group-hover:text-neutral-950 md:line-clamp-2">
            {description}
          </p>
        </Link>

        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span>{format(fromUnixTime(+date), "MMM d, yyyy")}</span>
          <span>·</span>
          <span>{readingTime} min read</span>
        </div>
      </div>

      <Link href="/" className="shrink-0">
        <div className="aspect-square w-24 bg-neutral-200 sm:aspect-[4/3] sm:w-36 md:w-48" />
      </Link>
    </div>
  );
}
