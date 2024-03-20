"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!scrolling && window.scrollY >= 345) {
        setScrolling(true);
      } else if (scrolling && window.scrollY < 345) {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolling]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-b-neutral-800 ${scrolling ? "bg-white" : "bg-yellow-500"} transition-colors duration-300`}
    >
      <div className="flex justify-center">
        <div className="mx-4 w-full max-w-7xl sm:mx-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/">
              <div className="block h-8 w-40 rounded bg-neutral-800 transition-colors duration-300 hover:bg-neutral-950" />
            </Link>

            <div className="flex items-center gap-x-4 text-sm *:transition-colors *:duration-300">
              <Link href="#" className="hidden hover:text-neutral-950 sm:block">
                Sign in
              </Link>

              <Link
                href="#"
                className={`rounded-full ${scrolling ? "bg-green-700 hover:bg-green-800" : "bg-neutral-800 hover:bg-neutral-950"} px-4 py-2 text-white`}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
