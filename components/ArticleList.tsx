import { type Article } from "@/data/db";
import ArticleListItem from "./ArticleListItem";

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      {articles.map((article) => (
        <ArticleListItem key={article.id} {...article} />
      ))}
    </div>
  );
}
