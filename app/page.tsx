import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Article = {
  author: string;
  title: string;
  date: string;
  readingTime: string;
};

const TRENDING_ARTICLES: Article[] = [
  {
    author: "CJ Sullivan",
    title: "What I Learned in my First 3 Months as a Freelance Data Scientist",
    date: "Mar 16, 2024",
    readingTime: "14 min",
  },
  {
    author: "Christine Vallaure",
    title: "Why UI designers should understand Flexbox and CSS Grid",
    date: "Mar 17, 2024",
    readingTime: "16 min",
  },
  {
    author: "Admiral Cloudberg",
    title:
      "Insanity in the Air: The crash of Pakistan International Airlines flight 8303",
    date: "Mar 17, 2024",
    readingTime: "54 min",
  },
  {
    author: "John Nye",
    title: "The Political Economy of Dune",
    date: "Mar 15, 2024",
    readingTime: "9 min",
  },
  {
    author: "Tim Berners-Lee",
    title: "Marking the Web's 35th Birthday: An Open Letter",
    date: "Mar 12, 2024",
    readingTime: "5 min",
  },
  {
    author: "Bobbie O'Brien",
    title:
      'Just Diagnosed with Alzheimer\'s, My Neighbor Said "Now I Know Why People Kill Themselves"',
    date: "Mar 14, 2024",
    readingTime: "4 min",
  },
];

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
              {TRENDING_ARTICLES.map((article, index) => (
                <TrendingArticle
                  key={article.title}
                  index={index}
                  author={article.author}
                  title={article.title}
                  date={article.date}
                  readingTime={article.readingTime}
                />
              ))}
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
  author,
  title,
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
          <div className="h-5 w-5 rounded bg-neutral-600 group-hover:bg-neutral-950" />
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
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span>{date}</span>
          <span>·</span>
          <span>{readingTime} read</span>
        </div>
      </div>
    </div>
  );
}
