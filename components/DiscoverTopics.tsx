import Link from "next/link";

import { TOPICS } from "@/data/db";
import TopicLink from "./TopicLink";

type Props = {};

export default function DiscoverTopics({}: Props) {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="font-medium leading-tight">
        Discover more of what matters to you
      </h2>

      <div className="flex flex-wrap gap-2">
        {TOPICS.map((topic) => (
          <TopicLink key={topic.id} label={topic.name} />
        ))}
      </div>

      <Link href="#">
        <p className="text-sm text-green-700 transition-colors duration-300 hover:text-neutral-950">
          See more topics
        </p>
      </Link>
    </div>
  );
}
