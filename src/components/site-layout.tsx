import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1" style={{ background: 'linear-gradient(to right, var(--background) 0%, var(--section) 100%)' }}>{children}</main>
      <Footer />
    </div>
  );
}
