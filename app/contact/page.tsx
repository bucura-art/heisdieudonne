import { socials } from "@/data/socials";
import { profile } from "@/data/profile";
import { faqs } from "@/data/faqs";
import Faq from "@/components/faqs/Faq";
import Link from "next/link";
import Image from "next/image";
import WelcomeMessage from "@/components/layout/Welcome";
import Navbar from "@/components/layout/Navbar";

const logoDevToken = process.env.LOGO_DEV_PUBLISHABLE_KEY?.trim();
const hasLogoDevToken =
  logoDevToken && logoDevToken !== "PASTE_YOUR_LOGO_DEV_PUBLISHABLE_KEY_HERE";

function getLogoDomain(platform: string) {
  switch (platform.toLowerCase()) {
    case "whatsapp":
      return "whatsapp.com";
    case "instagram":
      return "instagram.com";
    case "github":
      return "github.com";
    case "linkedin":
      return "linkedin.com";
    default:
      return null;
  }
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#e6e6e6] [--foreground:222_47%_11%] [--muted:215_16%_47%] [--border:214_32%_85%] text-foreground">
      <div className="grid w-full grid-cols-1 gap-12 px-4 pb-24 pt-16 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:px-6 md:pt-8">
        <section className="order-last flex min-h-[80vh] min-w-0 flex-col justify-center py-8 md:order-first md:py-16">
          <div className="max-w-3xl">
            <h1 className="mb-8 text-slate-900">Contact</h1>
            <p className="mb-12 text-2xl text-slate-900">
              Hit my line to sort it out in minutes not weeks.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div
                role="group"
                aria-label="Social links"
                className="flex flex-wrap gap-4 md:col-span-2"
              >
                {socials
                  .filter(
                    (social) =>
                      social.platform !== "GitHub" &&
                      social.platform !== "LinkedIn",
                  )
                  .map((social) => {
                    const logoDomain = getLogoDomain(social.platform);
                    const actionLabel =
                      social.platform === "WhatsApp"
                        ? "Message"
                        : social.platform === "Instagram"
                          ? "DM"
                          : social.platform === "Phone"
                            ? "Call"
                            : "Email";
                    return (
                      <Link
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        aria-label={`${social.platform}: ${social.username}`}
                        className="group flex w-16 flex-col items-center gap-2 text-center text-xs font-medium text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-900 transition-colors group-hover:border-accent">
                          {social.platform.toLowerCase() === "email" ? (
                            <EmailIcon />
                          ) : logoDomain && hasLogoDevToken ? (
                            <Image
                              src={`https://img.logo.dev/${logoDomain}?token=${logoDevToken}&size=96&format=png`}
                              alt=""
                              width={96}
                              height={96}
                              unoptimized
                              className="h-full w-full object-contain"
                            />
                          ) : logoDomain ? (
                            <span
                              aria-hidden="true"
                              className="text-xs font-bold"
                            >
                              {social.platform.slice(0, 2).toUpperCase()}
                            </span>
                          ) : (
                            <PhoneIcon />
                          )}
                        </span>
                        <span>{actionLabel}</span>
                      </Link>
                    );
                  })}
              </div>

              <div className="mt-4 flex items-start gap-3 text-slate-900 md:col-span-2">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 h-6 w-6 shrink-0"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div className="min-w-0">
                  <p className="wrap-break-words text-lg font-semibold">
                    {profile.location}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                    <span aria-hidden="true" className="text-base">🟢</span>
                    24/7 Available
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <Faq items={faqs} />
            </div>
          </div>
        </section>

        <aside className="order-first flex min-w-0 flex-col gap-8 md:order-last">
          <WelcomeMessage />
          <Navbar />
        </aside>
      </div>
    </div>
  );
}