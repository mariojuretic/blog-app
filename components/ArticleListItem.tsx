import { format, fromUnixTime } from "date-fns";
import Link from "next/link";

import { type Article } from "@/data/db";

type Props = Article;

export default function ArticleListItem({
  title,
  description,
  author,
  date,
  readingTime,
}: Props) {
  const formattedDate = format(fromUnixTime(+date), "MMM d, yyyy");
  const formattedReadingTime = `${readingTime} min read`;

  return (
    <div className="flex items-start gap-4 sm:gap-6 md:items-center">
      <div className="flex grow flex-col gap-2 md:gap-3">
        <div className="flex items-center gap-2">
          <Link href="#">
            <div className="h-5 w-5 rounded-full bg-neutral-600" />
          </Link>

          <Link href="#">
            <h4 className="text-xs font-medium transition-colors duration-300 hover:text-neutral-950">
              {author}
            </h4>
          </Link>
        </div>

        <Link href="#" className="group flex flex-col gap-1">
          <h2 className="line-clamp-2 font-bold leading-tight transition-colors duration-300 group-hover:text-neutral-950 md:text-xl md:leading-6">
            {title}
          </h2>

          <h3 className="hidden leading-tight text-neutral-500 md:line-clamp-2">
            {description}
          </h3>
        </Link>

        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span>{formattedDate}</span>
          <span>&bull;</span>
          <span>{formattedReadingTime}</span>
        </div>
      </div>

      <Link href="#" className="shrink-0">
        <div className="aspect-square w-24 bg-neutral-200 sm:aspect-[4/3] sm:w-36 md:w-48" />
      </Link>
    </div>
  );
}
