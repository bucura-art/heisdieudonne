import { profile } from "@/data/profile";
import Image from "next/image";

const logoDevToken = process.env.LOGO_DEV_PUBLISHABLE_KEY?.trim();
const hasLogoDevToken =
  logoDevToken && logoDevToken !== "PASTE_YOUR_LOGO_DEV_PUBLISHABLE_KEY_HERE";

const productivityTools = [
  { name: "GitHub", domain: "github.com", mark: "GH", left: "50%", top: "7%" },
  { name: "Canva", domain: "canva.com", mark: "C", left: "80%", top: "19%" },
  { name: "Google", domain: "google.com", mark: "G", left: "86%", top: "57%" },
  { name: "ChatGPT", domain: "openai.com", mark: "AI", left: "68%", top: "87%" },
  { name: "Microsoft365", domain: "microsoft.com", mark: "M", left: "32%", top: "87%" },
  { name: "Claude", domain: "claude.com", mark: "A", left: "14%", top: "57%" },
  { name: "Notion", domain: "notion.com", mark: "N", left: "20%", top: "19%" },
];

const outerProductivityTools = [
  { name: "Cloudflare", domain: "cloudflare.com", mark: "CF", left: "68%", top: "5%" },
  { name: "Vercel", domain: "vercel.com", mark: "V", left: "95%", top: "37%" },
  { name: "Supabase", domain: "supabase.com", mark: "S", left: "84%", top: "80%" },
  { name: "Firebase", domain: "firebase.google.com", mark: "F", left: "50%", top: "97%" },
  { name: "CapCut", domain: "capcut.com", mark: "CC", left: "16%", top: "80%" },
  { name: "Spotify", domain: "spotify.com", mark: "S", left: "5%", top: "37%" },
  { name: "Meta", domain: "meta.com", mark: "M", left: "32%", top: "5%" },
];

export default function Hero() {
  const { wrappedStats } = profile;
  const stats = [
    { label: "People Assisted", value: wrappedStats.Assisted },
    { label: "Hours Saved", value: wrappedStats.hoursSaved },
    { label: "Automations", value: wrappedStats.automations },
    { label: "Money Saved", value: `$ ${wrappedStats.moneySaved}` },
  ];

  return (
    <section className="order-last flex-1 md:order-first">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)]">
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-3 text-center sm:p-6"
            >
              <p className="mb-2 text-3xl font-bold text-black">{stat.value}</p>
              <h2 className="text-sm text-black">{stat.label}</h2>
            </div>
          ))}
        </div>
        <div className="relative mx-auto mt-4 aspect-square w-full max-w-[22rem] lg:mt-0">
          <div
            aria-hidden="true"
            className="absolute inset-[1%] rounded-full border border-slate-200"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[10%] rounded-full border border-dashed border-slate-300"
          />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white shadow-xl ring-1 ring-slate-200 sm:h-32 sm:w-32">
            <Image
              src="/developer/bucura-icon.jpg"
              alt="Bucura"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          {productivityTools.map((tool) => (
            <div
              key={tool.name}
              role="img"
              aria-label={tool.name}
              tabIndex={0}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              style={{ left: tool.left, top: tool.top }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-md sm:h-12 sm:w-12"
              >
                {hasLogoDevToken ? (
                  <Image
                    src={`https://img.logo.dev/${tool.domain}?token=${logoDevToken}&size=96&format=png`}
                    alt={`${tool.name} logo`}
                    width={96}
                    height={96}
                    unoptimized
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-bold text-slate-700">
                    {tool.mark}
                  </span>
                )}
              </div>
              <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[10px] font-medium text-white opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {tool.name}
              </span>
            </div>
          ))}
          {outerProductivityTools.map((tool) => (
            <div
              key={tool.name}
              role="img"
              aria-label={tool.name}
              tabIndex={0}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              style={{ left: tool.left, top: tool.top }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-md sm:h-10 sm:w-10"
              >
                {hasLogoDevToken ? (
                  <Image
                    src={`https://img.logo.dev/${tool.domain}?token=${logoDevToken}&size=80&format=png`}
                    alt={`${tool.name} logo`}
                    width={80}
                    height={80}
                    unoptimized
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold text-slate-700">
                    {tool.mark}
                  </span>
                )}
              </div>
              <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[9px] font-medium text-white opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
