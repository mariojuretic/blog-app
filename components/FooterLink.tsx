import Link from "next/link";

type Props = React.ComponentPropsWithoutRef<typeof Link>;

export default function FooterLink(props: Props) {
  return <Link className="hover:underline" {...props} />;
}
