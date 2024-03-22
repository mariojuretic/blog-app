import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import ArticleList from "@/components/ArticleList";
import DiscoverTopics from "@/components/DiscoverTopics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TrendingArticle from "@/components/TrendingArticle";
import { ARTICLES } from "@/data/db";

export default function Page() {
  return (
    <>
      <Header />

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
                href="#"
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
              <ArrowTrendingUpIcon className="h-5 w-5 shrink-0 rounded-full border border-neutral-800 text-neutral-800" />
              <h2 className="font-medium leading-tight">Trending on Medium</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {...ARTICLES.slice(0, 6).map((article, index) => (
                <TrendingArticle key={article.id} index={index} {...article} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-b border-b-neutral-200 lg:hidden">
        <div className="mx-4 w-full max-w-7xl sm:mx-8">
          <div className="py-8">
            <DiscoverTopics />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mx-4 w-full max-w-7xl sm:mx-8">
          <div className="py-12 sm:py-16">
            <div className="grid grid-cols-12 lg:gap-8 xl:gap-0">
              <section className="col-span-12 lg:col-span-8 xl:col-span-7">
                <ArticleList articles={ARTICLES} />
              </section>

              <aside className="col-span-4 hidden lg:block xl:col-start-9">
                <div className="sticky top-28">
                  <div className="border-b border-b-neutral-200 pb-8">
                    <DiscoverTopics />
                  </div>

                  <div className="py-8">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500 *:transition-colors *:duration-300 hover:*:text-neutral-950">
                      <Link href="/#">Help</Link>
                      <Link href="/#">Status</Link>
                      <Link href="/#">About</Link>
                      <Link href="/#">Careers</Link>
                      <Link href="/#">Blog</Link>
                      <Link href="/#">Privacy</Link>
                      <Link href="/#">Terms</Link>
                      <Link href="/#">Text to speech</Link>
                      <Link href="/#">Teams</Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
