import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Youtube,
} from "lucide-react";
import { RequestAccessModal } from "./request-access-modal";
import { useTheme } from "./theme-provider";

const productLinks = [
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
] as const;

const companyLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "FAQ", to: "/faq" },
] as const;

const socialIcons = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/dverif", tone: "border-[#0a66c2] bg-[#0a66c2] text-white hover:bg-[#004182]" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/d.verif/", tone: "border-transparent bg-[linear-gradient(135deg,#f9ce34,#ee2a7b_48%,#6228d7)] text-white hover:brightness-95" },
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61594065642255", tone: "border-[#1877f2] bg-[#1877f2] text-white hover:bg-[#0c63d4]" },
] as const;



function FooterLink({ label, to, hash }: { label: string; to: string; hash?: string }) {
  return (
    <Link
      to={to}
      hash={hash}
      className="footer-link text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f203d]"
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
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pb-12 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-0">
          <section className="col-span-2 lg:col-span-5 lg:pr-8 xl:pr-12">
            <div className="flex h-full flex-col">
              <div className="-ml-7 overflow-hidden">
                <Link
                  to="/"
                  aria-label="Dverif home"
                  className="inline-flex w-fit transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f203d]"
                >
                  <img
                    key={theme}
                    src={logoSrc}
                    alt="Dverif - Secure Document Verification Platform Logo"
                    className="h-20 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                    width="200"
                    height="80"
                  />
                </Link>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
                Verify documents in minutes. Dverif is an invite-only platform helping organizations
                stop scams and streamline verification.
              </p>
              <div className="mt-6 flex max-w-sm flex-col gap-3">
                <a
                  href="mailto:contact@dverif.com"
                  className="inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f203d]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span className="break-all">contact@dverif.com</span>
                </a>
                <a
                  href="tel:+923199421413"
                  className="inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f203d]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>+92 319 9421413</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">
                    Kolachi IT Park, Gulshan E Jamal, Rashid Minhas Road, Karachi, Sindh, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </section>

          <nav className="col-span-1 lg:col-span-2 lg:pt-1" aria-label="Product links">
            <h2 className="text-sm font-semibold text-foreground">Product</h2>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </nav>

          <nav className="col-span-1 lg:col-span-2 lg:pt-1" aria-label="Company links">
            <h2 className="text-sm font-semibold text-foreground">Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-3 lg:self-end lg:pb-1">
            <SecurityIllustration />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:mt-14 lg:mt-16 lg:grid lg:grid-cols-3 lg:text-sm">
          <p className="text-center lg:justify-self-start lg:text-left">© 2026 Dverif. All rights reserved.</p>
          <div className="mt-6 flex items-center justify-center gap-2.5 lg:mt-0">
            {socialIcons.map(({ label, icon: Icon, href, tone }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                aria-label={`Visit Dverif on ${label}`}
                className={`grid h-9 w-9 place-items-center rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f203d] ${tone}`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-center lg:mt-0 lg:justify-self-end lg:text-right">
            Powered by{" "}
            <a
              href="https://hakamtechsol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f203d]"
            >
              HakamTechSol
            </a>
          </p>
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
              Join forward-thinking organizations that trust Dverif to verify documents faster and build trust.
            </p>
          </div>
          <RequestAccessModal>
            <button type="button" className="relative mt-6 inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#4f8cff] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#3d7ce8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#24548d] lg:mt-0 lg:w-auto">
              Request A Meeting <ArrowUpRight className="h-4 w-4" />
            </button>
          </RequestAccessModal>
        </div>
      </div>
    </section>
  );
}
