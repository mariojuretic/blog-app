import Link from "next/link";

import FooterLink from "./FooterLink";

const links = [
  { label: "About", path: "#" },
  { label: "Help", path: "#" },
  { label: "Terms", path: "#" },
  { label: "Privacy", path: "#" },
];

export default function Footer() {
  return (
    <div className="flex justify-center bg-neutral-950 text-white lg:hidden">
      <div className="mx-4 w-full max-w-7xl sm:mx-8">
        <div className="py-8">
          <div className="flex flex-col items-start gap-4">
            <Link href="/">
              <div className="h-8 w-40 rounded bg-white" />
            </Link>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {links.map((link) => (
                <FooterLink key={link.label} href={link.path}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
