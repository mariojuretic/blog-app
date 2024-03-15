import Link from "next/link";

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
    </>
  );
}
