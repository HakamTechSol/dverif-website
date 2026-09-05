import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { RequestAccessModal } from "./request-access-modal";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const logoSrc = theme === "dark" ? "/assets/logo-dark.png" : "/assets/logo-light.png";

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="glass-nav mx-auto max-w-[1280px] rounded-[18px] border border-border/80 shadow-[0_14px_36px_-22px_color-mix(in_oklab,var(--foreground)_38%,transparent)]">
        <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-2 sm:px-5 lg:px-6">
          <Link
            to="/"
            aria-label="Dverif home"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <img
              key={theme}
              src={logoSrc}
              alt="Dverif - Secure Document Verification Platform Logo"
              className="h-9 w-auto object-contain sm:h-10 animate-fade-in"
              loading="eager"
              decoding="async"
              width="120"
              height="40"
            />
          </Link>

          <nav className="hidden items-center gap-1.5 md:flex" aria-label="Primary navigation">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-400 lg:px-5 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-300 ${
                  path === l.to
                    ? "bg-primary/10 text-primary after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden md:block">
              <RequestAccessModal>
                <Button className="h-10 rounded-xl px-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-95">
                  Schedule A Meeting
                </Button>
              </RequestAccessModal>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-xl border border-border bg-card/80 transition-all duration-300 hover:bg-accent md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <div className="space-y-1 border-t border-border/80 bg-background/85 px-4 py-3 backdrop-blur-xl md:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  path === l.to ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <RequestAccessModal>
                <Button className="h-10 w-full rounded-xl transition-all duration-300 hover:brightness-95">
                  Schedule A Meeting
                </Button>
              </RequestAccessModal>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
