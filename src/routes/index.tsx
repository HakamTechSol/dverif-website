import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { RequestAccessModal } from "@/components/request-access-modal";
import {
  ShieldAlert,
  Clock,
  AlertTriangle,
  LayoutDashboard,
  FileCheck2,
  ArrowDownRight,
  CheckCircle2,
  Building2,
  Send,
  SearchX,
  Sparkles,
  XCircle,
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
// import { FeatureShowcase } from "@/components/feature-showcase";
import { ProductJourney } from "@/components/product-capabilities";
import { VideoTestimonials } from "@/components/video-testimonials";
import { ReadyToSimplify } from "@/components/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dverif — Verify Documents in Minutes | Secure Document Verification Platform" },
      {
        name: "description",
        content:
          "Dverif is an invite-only platform to verify documents in minutes. Stop scams, cut hassle, eliminate delays with secure document verification for modern organizations.",
      },
      { name: "keywords", content: "document verification, secure verification, identity verification, scam prevention, document authentication, background checks, employment verification, academic verification, certificate verification" },
      { property: "og:title", content: "Dverif — Verify Documents in Minutes" },
      {
        property: "og:description",
        content: "Invite-only document verification for modern organizations. Stop scams, cut hassle, eliminate delays.",
      },
      { property: "og:url", content: "https://dverif.com" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { name: "twitter:title", content: "Dverif — Verify Documents in Minutes" },
      { name: "twitter:description", content: "Invite-only document verification for modern organizations. Stop scams, cut hassle, eliminate delays." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ProductJourney />
      <Problems />
      {/* <DashboardPreview /> */}
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      <VideoTestimonials />
      <ReadyToSimplify />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="enterprise-dark -mt-[120px] pt-[120px]">
      <div className="container-page grid items-center gap-12 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:grid-cols-[.92fr_1.08fr] lg:gap-14 lg:pt-16 lg:pb-24">
        <div className="animate-fade-up flex w-full flex-col items-center text-center lg:items-start lg:text-left">

          <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.5rem]">
            Verify Documents
            <br />
            <span className="bg-gradient-to-r from-primary to-[color:var(--primary-glow)] bg-clip-text text-transparent">
              in Minutes
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Scams, endless back-and-forth and long delays cost you time and reputation. Dverif
            brings issuers, verifiers, and organizations together in one clean <Link to="/features" className="text-primary hover:underline">secure verification workflow</Link>.
          </p>
          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
            <RequestAccessModal />
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('how-it-works');
                if (element) {
                  const navbarHeight = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-5 text-sm font-medium text-white transition-colors hover:bg-white/15"
            >
              See how it works <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-300 lg:justify-start">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Zero Scam Tolerance
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Minutes, Not Weeks
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Audit Trail
            </div>
            <Link to="/pricing" className="flex items-center gap-2 text-primary hover:underline">
              
            </Link>
          </div>
        </div>
        <div className="animate-fade-in-soft w-full">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-8 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full"
        aria-hidden
      />
      <div className="dark-panel relative aspect-video overflow-hidden rounded-3xl">
        <video
          className="pointer-events-none h-full w-full object-cover"
          src="/assets/dverifvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Dverif platform dashboard overview showing document verification workflow"
          poster="/assets/video-poster.jpg"
          width="1920"
          height="1080"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

function Problems() {
  const items = [
    {
      icon: ShieldAlert,
      title: "Scams",
      body: "Forged documents slip through email chains. Dverif verifies at the source.",
    },
    {
      icon: AlertTriangle,
      title: "Hassle",
      body: "Chasing issuers over phone and email costs your team days each week.",
    },
    {
      icon: Clock,
      title: "Delays",
      body: "Waiting weeks for a verification blocks admissions, hiring and payouts.",
    },
  ];
  return (
    <section className="enterprise-light py-12 lg:py-16">
      <div className="container-page">
        <div className="section-frame px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <SectionHeader
            // eyebrow="The problem"
            title={
              <>
                <span className="block">Verification is Broken ?</span>

                <span className="block">DVerif will Fix it !</span>
              </>
            }
            subtitle={
              <>
                Learn more about our <Link to="/features" className="text-primary hover:underline">secure verification features</Link> that protects your organization.
              </>
            }
          />

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-7">
          {items.map((it) => (
            <div key={it.title} className="surface-card card-hover relative overflow-hidden rounded-2xl p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-glow" />
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

// function DashboardPreview() {
//   const stats = [
//     { icon: Building2, label: "Organizations", value: "128" },
//     { icon: Send, label: "Requests Sent", value: "2,431" },
//     { icon: SearchX, label: "Unmatched", value: "17" },
//   ];
//   return (
//     <section className="section-y">
//       <div className="container-page">
//         <SectionHeader eyebrow="Dashboard" title="A single pane for every verification" />
//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           {stats.map((s) => (
//             <div key={s.label} className="card-hover rounded-2xl border border-border bg-card p-6">
//               <div className="flex items-center justify-between">
//                 <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
//                   <s.icon className="h-5 w-5" />
//                 </div>
//                 <span className="text-xs text-muted-foreground">Live</span>
//               </div>
//               <div className="mt-4 text-3xl font-bold">{s.value}</div>
//               <div className="text-sm text-muted-foreground">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Features() {
//   return (
//     <section className="bg-section py-12 lg:py-16">
//       <div className="container-page">
//         <SectionHeader eyebrow="Features" title="Verification You Need, DVerif will Provide" />
//         <FeatureShowcase />
//       </div>
//     </section>
//   );
// }

// function HowItWorks() {
//   const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2 });
//   const steps = [
//     {
//       icon: Send,
//       title: "Send a Request",
//       body: "Pick the issuer and share the document details.",
//     },
//     {
//       icon: ShieldCheck2,
//       title: "Verification",
//       body: "The issuer confirms directly through Dverif — no back-channels.",
//     },
//     {
//       icon: CheckCircle2,
//       title: "Get a Signed Result",
//       body: "Receive an audit-ready verification you can trust.",
//     },
//   ];
//   return (
//     <section ref={ref} id="how" className={`enterprise-dark py-12 lg:py-16 ${inView ? "how-section-visible" : ""}`}>
//       <div className="container-page how-section-animate">
//         <SectionHeader eyebrow="How it works" title="Three steps. Minutes, Not Weeks." />
//         <div className="relative mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-4">
//           <div
//             className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent how-line-animate"
//             style={{ animationDelay: "0.4s" }}
//             aria-hidden
//           />
//           {steps.map((s, i) => (
//             <div
//               key={s.title}
//               className="dark-panel relative text-center rounded-2xl p-6 text-white sm:p-7 how-step-animate how-step-card lg:min-h-[250px]"
//               style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
//             >
//               <div
//                 className="relative mx-auto grid h-12 w-12 place-items-center rounded-2xl btn-primary-glow how-icon-animate"
//                 style={{ animationDelay: `${i * 0.2 + 0.4}s` }}
//               >
//                 <s.icon className="h-5 w-5" />
//                 <span
//                   className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-card border border-border text-xs font-bold text-primary how-number-animate"
//                   style={{ animationDelay: `${i * 0.2 + 0.5}s` }}
//                 >
//                   {i + 1}
//                 </span>
//               </div>
//               <h3
//                 className="mt-4 font-semibold how-text-animate"
//                 style={{ animationDelay: `${i * 0.2 + 0.6}s` }}
//               >
//                 {s.title}
//               </h3>
//               <p
//                 className="mx-auto mt-1.5 max-w-xs text-sm text-slate-300 how-text-animate"
//                 style={{ animationDelay: `${i * 0.2 + 0.7}s` }}
//               >
//                 {s.body}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Local alias to avoid double import
// function ShieldCheck2(props: React.ComponentProps<typeof ShieldAlert>) {
//   return <FileCheck2 {...props} />;
// }

export function PlanCard({
  name,
  price,
  period,
  tagline,
  features,
  notIncludedFeatures,
  featured,
  badge,
  ctaText,
}: {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  notIncludedFeatures?: string[];
  featured?: boolean;
  badge?: string;
  ctaText?: string;
}) {
  return (
    <div
      className={`card-hover relative flex h-full flex-col rounded-2xl border p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] ${featured ? "border-primary bg-card shadow-[var(--shadow-glow)]" : "border-border bg-card"}`}
    >
      {featured && (
        <div className="absolute -top-3 left-6 flex gap-2">
          <span className="rounded-full btn-primary-glow px-3 py-1 text-xs font-semibold">
            Recommended
          </span>
          {badge && (
            <span className="rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-semibold text-primary">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="text-sm font-bold text-black">{name}</div>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-sm text-muted-foreground">{period}</span>}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{tagline}</div>
      <div className="mt-7 border-t border-border pt-6">
      <ul className="space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> <span className="font-semibold">{f}</span>
          </li>
        ))}
        {notIncludedFeatures?.map((f) => (
          <li key={f} className="flex items-start gap-2 text-muted-foreground opacity-70">
            <XCircle className="h-4 w-4 shrink-0 mt-0.5" /> {f}
          </li>
        ))}
      </ul>
      </div>
      <div className="mt-auto pt-6">
        <RequestAccessModal triggerLabel={ctaText ?? "Subscribe A Plan"} />
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: import("react").ReactNode;
  subtitle?: import("react").ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="section-kicker">{eyebrow}</div>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <div className="mt-4 text-muted-foreground">{subtitle}</div>}
    </div>
  );
}
