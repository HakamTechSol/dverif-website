import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  ShieldCheck,
  Youtube,
} from "lucide-react";
import { RequestAccessModal } from "./request-access-modal";
import { useTheme } from "./theme-provider";

const productLinks = [
  { label: "Features", to: "/features" },
  { label: "How It Works", to: "/", hash: "how" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
] as const;

const companyLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "FAQ", to: "/faq" },
] as const;

const socialIcons = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com", tone: "border-[#0a66c2] bg-[#0a66c2] text-white hover:bg-[#004182]" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com", tone: "border-transparent bg-[linear-gradient(135deg,#f9ce34,#ee2a7b_48%,#6228d7)] text-white hover:brightness-95" },
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com", tone: "border-[#1877f2] bg-[#1877f2] text-white hover:bg-[#0c63d4]" },
] as const;



function FooterLink({ label, to, hash }: { label: string; to: string; hash?: string }) {
  return (
    <Link
      to={to}
      hash={hash}
      className="footer-link text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#edf6ff]"
    >
      {label}
    </Link>
  );
}

function SecurityIllustration() {
  return (
    <div
      className="relative mx-auto flex h-48 w-full max-w-[255px] items-center justify-center sm:h-56"
      aria-hidden="true"
    >
      <div className="absolute inset-x-4 inset-y-2 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute h-40 w-40 rounded-full border border-primary/20" />
      <div className="absolute h-52 w-52 rounded-full border border-dashed border-primary/20" />
      <span className="absolute left-3 top-7 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_3px_rgba(79,140,255,.35)]" />
      <span className="absolute bottom-10 right-4 h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_12px_3px_rgba(79,140,255,.35)]" />
      <div className="relative rotate-[-7deg] rounded-2xl border border-primary/30 bg-white/90 p-3.5 shadow-[0_0_32px_rgba(79,140,255,.18)] backdrop-blur">
        <div className="w-24 rounded-xl border border-primary/10 bg-sky-50 p-3">
          <div className="flex items-center justify-between text-primary">
            <FileText className="h-5 w-5" />
            <span className="h-1.5 w-5 rounded-full bg-[#4f8cff]/60" />
          </div>
          <span className="mt-3 block h-1.5 w-full rounded-full bg-primary/20" />
          <span className="mt-2 block h-1.5 w-4/5 rounded-full bg-primary/15" />
          <span className="mt-2 block h-1.5 w-3/5 rounded-full bg-primary/15" />
        </div>
        <div className="absolute -bottom-5 -right-5 grid h-12 w-12 rotate-[7deg] place-items-center rounded-2xl border border-primary/40 bg-[linear-gradient(135deg,#4f8cff,#60a5fa)] text-white shadow-[0_0_22px_rgba(79,140,255,.35)]">
          <ShieldCheck className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute bottom-5 left-9 flex items-center gap-1.5 rounded-full border border-primary/25 bg-white/85 px-2.5 py-1 text-[10px] font-medium text-primary backdrop-blur">
        <Check className="h-3 w-3" /> Verified
      </div>
    </div>
  );
}

export function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/assets/logo-dark.png" : "/assets/logo-light.png";

  return (
    <footer className="site-footer overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-7 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-x-8 gap-y-11 md:grid-cols-2 xl:grid-cols-12 xl:gap-y-8">
          <section className="xl:col-span-4">
            <Link
              to="/"
              aria-label="Dverif home"
              className="ml-5 inline-flex transition-opacity hover:opacity-80"
            >
              <img
                key={theme}
                src={logoSrc}
                alt="Dverif — Document Verification Platform"
                className="-ml-5 h-16 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Verify documents in minutes. Dverif is an invite-only platform helping organizations
              stop scams and streamline verification.
            </p>
            <a
              href="mailto:dverif26@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Mail className="h-4 w-4 text-primary" /> dverif26@gmail.com
            </a>
          </section>

          <nav className="xl:col-span-2" aria-label="Product links">
            <h2 className="text-sm font-semibold text-foreground">Product</h2>
            <ul className="mt-4 space-y-1">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </nav>

          <nav className="xl:col-span-2" aria-label="Company links">
            <h2 className="text-sm font-semibold text-foreground">Company</h2>
            <ul className="mt-4 space-y-1">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </nav>

          <section className="md:col-span-2 xl:col-span-4 xl:-mt-4">
            <SecurityIllustration />
          </section>
        </div>

        <section
          className="mt-11 flex flex-col items-center text-center"
          aria-label="Dverif social channels"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Follow Us
          </p>
          <div className="mt-3 flex max-w-sm flex-wrap justify-center gap-2">
            {socialIcons.map(({ label, icon: Icon, href, tone }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                aria-label={`Visit Dverif on ${label}`}
                className={`grid h-9 w-9 place-items-center rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${tone}`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-primary/15 pt-6 text-center text-xs text-muted-foreground sm:text-sm lg:flex-row lg:justify-between lg:text-left">
          <p>© 2026 Dverif. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Legal links">
            <p>Design and Developed by Hakam TechSol</p>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function ReadyToSimplify() {
  return (
    <section className="bg-[#102b52] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#6fa6f5]/30 bg-[linear-gradient(115deg,#1b3b6b_0%,#24548d_48%,#1b4275_100%)] px-6 py-8 sm:px-9 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
          <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full border border-white/15 bg-[#79b5ff]/20 blur-2xl" aria-hidden="true" />
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,.42)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Ready to simplify document verification?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200/85 sm:text-base">
              Join forward-thinking organizations that trust Dverif to verify documents faster and build more trust.
            </p>
          </div>
          <RequestAccessModal>
            <button type="button" className="relative mt-6 inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#4f8cff] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#3d7ce8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#24548d] lg:mt-0 lg:w-auto">
              Request Access <ArrowRight className="h-4 w-4" />
            </button>
          </RequestAccessModal>
        </div>
      </div>
    </section>
  );
}
