import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import RootLayoutClient from "@/components/layout/RootLayoutClient";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Correct the cooljazz name if you want to use Cooljazz font
const rosemary = localFont({
  src: "../public/fonts/Cooljazz.ttf",
  variable: "--font-Cooljaz",
  display: "swap",
});
const moara = localFont({
  src: "../public/fonts/Moara.ttf",
  variable: "--font-moara",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heisdieudonne — portifolio",
  description:
    "Networking student and developer. Learning, building, and shipping real projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${rosemary.variable} ${moara.variable} font-sans bg-background text-foreground antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
          <RootLayoutClient>{children}</RootLayoutClient>
          <footer className="border-t">
            <Footer />
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
