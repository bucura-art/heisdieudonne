"use client";

import SiteMarque from "@/components/layout/SiteMarque";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteMarque />
      <main className="flex-1">{children}</main>
    </>
  );
}
