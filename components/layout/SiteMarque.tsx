import Link from "next/link";

const marqueeMessages = [
  "Hey visitor",
  "What are you up to?",
  "Have a question?",
  "Let’s build something great",
];

function MarqueeMessage() {
  return (
    <div className="flex shrink-0 items-center gap-10 px-6">
      {marqueeMessages.map((message) => (
        <span
          key={message}
          className="flex items-center gap-10 text-sm font-semibold tracking-wide sm:text-base"
        >
          {message}
          <span aria-hidden="true" className="text-sky-300">
            *
          </span>
        </span>
      ))}
    </div>
  );
}

export default function SiteMarque() {
  return (
    <div
      role="region"
      aria-label="Hey visitor. Say hy to get in touch."
      className="site-marquee relative hidden overflow-hidden border-b border-slate-700 bg-slate-950 py-2 text-white md:block"
    >
      <div className="site-marquee-track flex w-max">
        <MarqueeMessage />
        <div aria-hidden="true" className="shrink-0">
          <MarqueeMessage />
        </div>
      </div>
      <div className="absolute right-0 top-0 z-10 flex h-full items-center bg-slate-950 pl-8 pr-4 sm:pr-6">
        <Link
          href="/contact"
          className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Say hello
        </Link>
      </div>
    </div>
  );
}