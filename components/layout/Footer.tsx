import Link from "next/link";
import Image from "next/image";
import { socials } from "@/data/socials";

const logoDevToken = process.env.LOGO_DEV_PUBLISHABLE_KEY?.trim();
const hasLogoDevToken =
  logoDevToken && logoDevToken !== "PASTE_YOUR_LOGO_DEV_PUBLISHABLE_KEY_HERE";

const socialDomains: Record<string, string> = {
  WhatsApp: "whatsapp.com",
  Instagram: "instagram.com",
  GitHub: "github.com",
  LinkedIn: "linkedin.com",
};

function ContactIcon({ platform }: { platform: "Phone" | "Email" }) {
  if (platform === "Phone") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#fafafa]">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 text-sm md:flex-row">
        <h6 className="hidden text-center text-slate-800 md:block md:text-left">
          © {year} All rights reserved.
        </h6>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-semibold text-slate-900">Let&apos;s connect</h2>
          <nav aria-label="Social links" className="flex items-center gap-5">
            {socials.map((social) => {
              const domain = socialDomains[social.platform];
              const logoUrl =
                domain && hasLogoDevToken
                  ? `https://img.logo.dev/${domain}?token=${logoDevToken}&size=96&format=png`
                  : null;

              return (
                <Link
                  key={social.platform}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`${social.platform}: ${social.username}`}
                  title={social.platform}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  {domain && logoUrl ? (
                    <Image
                      src={logoUrl}
                      alt=""
                      width={24}
                      height={24}
                      unoptimized
                      className="h-6 w-6 object-contain"
                    />
                  ) : domain ? (
                    <span aria-hidden="true" className="text-xs font-bold">
                      {social.platform.slice(0, 2).toUpperCase()}
                    </span>
                  ) : social.platform === "Phone" ? (
                    <ContactIcon platform="Phone" />
                  ) : (
                    <ContactIcon platform="Email" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center justify-center md:flex md:justify-end">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border bg-muted/20">
            <Image
              src="/developer/bucura-icon.jpg"
              alt="Heisdieudonne"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div
        aria-label="Bucura Art"
        className="overflow-hidden px-2 pb-2 text-center font-[family-name:var(--font-moara)] text-[clamp(4rem,18vw,16rem)] leading-[0.8] tracking-[0.12em] text-slate-900"
      >
        BUCURA ART
      </div>
    </div>
  );
}
