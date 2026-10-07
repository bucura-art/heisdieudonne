import Hero from "@/components/home/Hero";
import UseCase from "@/components/home/UseCase";
import WelcomeMessage from "@/components/layout/Welcome";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#e6e6e6] [--foreground:222_47%_11%] text-foreground">
      <div className="grid w-full grid-cols-1 gap-12 px-4 pb-24 pt-16 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:px-6 md:pt-8">
        <main className="order-last min-w-0 md:order-first">
          <Hero />
          <UseCase />
        </main>
        <aside className="order-first flex min-w-0 flex-col gap-8 md:order-last">
          <WelcomeMessage />
          <Navbar />
        </aside>
      </div>
    </div>
  );
}
