import Link from "next/link";
import { services } from "@/data/services";
import WelcomeMessage from "@/components/layout/Welcome";
import Navbar from "@/components/layout/Navbar";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#e6e6e6] [--foreground:222_47%_11%] text-foreground">
      <div className="grid w-full grid-cols-1 gap-12 px-4 pb-24 pt-24 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:px-6 md:pt-8">
        <main className="order-last min-w-0 md:order-first md:pt-24">
          <header className="mb-16 max-w-3xl">
            <h1 className="mb-4 text-slate-900">Services</h1>
            <p className="text-slate-900">
              Practical digital services to help you plan, build, and improve.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.name}
                className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-900"
              >
                <div>
                  <h2 className="mb-3 text-2xl font-bold text-slate-900">
                    {service.name}
                  </h2>
                  <p className="text-slate-700">{service.description}</p>
                  <p className="mt-5 text-sm font-medium text-slate-700">
                    Price: <span className="text-slate-900">{service.price}</span>
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex w-fit items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  {service.cta}
                </Link>
              </article>
            ))}
          </div>
        </main>

        <aside className="order-first flex min-w-0 flex-col gap-8 md:order-last">
          <WelcomeMessage />
          <Navbar />
        </aside>
      </div>
    </div>
  );
}