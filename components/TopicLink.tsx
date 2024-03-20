import Link from "next/link";

type Props = {
  label: string;
};

export default function TopicLink({ label }: Props) {
  return (
    <Link href="#" className="overflow-hidden rounded-full">
      <div className="bg-neutral-100 px-4 py-2 text-sm text-neutral-600 transition-colors duration-300 hover:bg-neutral-200 hover:text-neutral-950">
        {label}
      </div>
    </Link>
  );
}
