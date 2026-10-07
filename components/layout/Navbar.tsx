"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/", icon: "home" },
  { name: "Work", href: "/work", icon: "folder" },
  { name: "Skills", href: "/skills", icon: "education" },
  { name: "Services", href: "/services", icon: "services" },
  { name: "Contact", href: "/contact", icon: "contact" },
] as const;

type NavIconName = (typeof navLinks)[number]["icon"];

function NavIcon({ name }: { name: NavIconName }) {
  if (name === "folder") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8 drop-shadow-sm group-hover:animate-bounce sm:h-10 sm:w-10">
        <defs>
          <linearGradient id="folder-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ffd768" />
            <stop offset="1" stopColor="#f39a24" />
          </linearGradient>
        </defs>
        <path d="M4 12a4 4 0 0 1 4-4h11l5 5h16a4 4 0 0 1 4 4v19a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V12Z" fill="url(#folder-gradient)" />
        <path d="M4 19h40l-4 17a4 4 0 0 1-4 3H8a4 4 0 0 1-4-4V19Z" fill="#ffbd45" />
        <path d="M7 21h34l-3.2 13.3a3 3 0 0 1-2.9 2.3H9.8a3 3 0 0 1-2.9-3.7L7 21Z" fill="#ffe6a3" opacity=".55" />
      </svg>
    );
  }

  if (name === "contact") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8 drop-shadow-sm group-hover:animate-bounce sm:h-10 sm:w-10">
        <defs>
          <linearGradient id="contact-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#62c7ff" />
            <stop offset="1" stopColor="#2474e8" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#contact-gradient)" />
        <circle cx="20" cy="18" r="7" fill="#fff" />
        <path d="M8 37c1.5-6.3 5.8-9.5 12-9.5s10.5 3.2 12 9.5" fill="#fff" />
        <circle cx="36" cy="34" r="9" fill="#fff" />
        <path d="M33 30.8c.4-.6 1-.7 1.6-.3l1.1.8c.4.3.5.8.3 1.2l-.5 1c.6 1.1 1.5 2 2.6 2.6l1-.5c.5-.2.9-.1 1.2.3l.8 1.1c.4.6.3 1.2-.3 1.6-.8.6-1.8.8-2.8.5-3.4-1-6.1-3.7-7.1-7.1-.3-1 .1-1.8 1.1-2.2Z" fill="#2580e8" />
      </svg>
    );
  }

  if (name === "education") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8 drop-shadow-sm group-hover:animate-bounce sm:h-10 sm:w-10">
        <defs>
          <linearGradient id="education-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#64d89b" />
            <stop offset="1" stopColor="#159b70" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#education-gradient)" />
        <path d="m7 19 17-9 17 9-17 9-17-9Z" fill="#fff" />
        <path d="M14 23v8c5.8 4.8 14.2 4.8 20 0v-8l-10 5-10-5Z" fill="#e8fff4" />
        <path d="M39 20v10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "services") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8 drop-shadow-sm group-hover:animate-bounce sm:h-10 sm:w-10">
        <defs>
          <linearGradient id="services-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#c59bff" />
            <stop offset="1" stopColor="#7954df" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#services-gradient)" />
        <path d="M24 10v4m0 20v4m14-14h-4M14 24h-4m24-10-2.8 2.8M16.8 31.2 14 34m20 0-2.8-2.8M16.8 16.8 14 14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" fill="#fff" />
        <circle cx="24" cy="24" r="3" fill="#9671ed" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8 drop-shadow-sm group-hover:animate-bounce sm:h-10 sm:w-10">
      <defs>
        <linearGradient id="home-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#77d5ff" />
          <stop offset="1" stopColor="#3283e7" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#home-gradient)" />
      <path d="m10 23 14-12 14 12v13a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V23Z" fill="#fff" />
      <path d="M20 38V27h8v11" fill="#c6eaff" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 top-auto z-50 flex w-full max-w-full justify-center py-3 md:sticky md:inset-x-auto md:bottom-auto md:top-0 md:justify-end"
    >
      <div className="flex w-full max-w-full flex-nowrap items-center justify-between gap-0.5 rounded-3xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/10 sm:gap-1 sm:p-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            className={`group flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-1.5 text-[10px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:text-xs ${
              isActive(link.href)
                ? "bg-slate-100 font-semibold text-slate-950"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }`}
          >
            <NavIcon name={link.icon} />
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
