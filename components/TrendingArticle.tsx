import { format, fromUnixTime } from "date-fns";
import Link from "next/link";

import { type Article } from "@/data/db";

type Props = {
  index: number;
} & Article;

export default function TrendingArticle({
  index,
  title,
  author,
  date,
  readingTime,
}: Props) {
  const formattedIndex = (index + 1).toString().padStart(2, "0");
  const formattedDate = format(fromUnixTime(+date), "MMM d, yyyy");
  const formattedReadingTime = `${readingTime} min read`;

  return (
    <div className="flex items-start gap-4">
      <div className="flex h-8 w-8 shrink-0 -translate-y-1.5 items-center justify-center">
        <span className="text-3xl font-medium leading-none tracking-tighter text-neutral-200">
          {formattedIndex}
        </span>
      </div>

      <div className="flex grow flex-col gap-2">
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

        <Link href="#">
          <h2 className="line-clamp-2 font-bold leading-tight transition-colors duration-300 hover:text-neutral-950">
            {title}
          </h2>
        </Link>

        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span>{formattedDate}</span>
          <span>&bull;</span>
          <span>{formattedReadingTime}</span>
        </div>
      </div>
    </div>
  );
}
