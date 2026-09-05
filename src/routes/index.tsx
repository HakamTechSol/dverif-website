import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { RequestAccessModal } from "@/components/request-access-modal";
import {
  ShieldAlert,
  Clock,
  AlertTriangle,
  LayoutDashboard,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  Building2,
  Send,
  SearchX,
  Sparkles,
  Quote,
  Star,
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
// import { FeatureShowcase } from "@/components/feature-showcase";
import { ProductJourney } from "@/components/product-capabilities";
import { ReadyToSimplify } from "@/components/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dverif — Verify Documents in Minutes" },
      {
        name: "description",
        content:
          "Dverif is an invite-only platform to verify documents in minutes. Stop scams, cut hassle, eliminate delays.",
      },
      { property: "og:title", content: "Dverif — Verify Documents in Minutes" },
      {
        property: "og:description",
        content: "Invite-only document verification for modern organizations.",
      },
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
      <Testimonials />
      <ReadyToSimplify />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="enterprise-dark">
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
            brings issuers, verifiers, and organizations together in one clean workflow.
          </p>
          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
            <RequestAccessModal />
            <a
              href="#how"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-5 text-sm font-medium text-white transition-colors hover:bg-white/15"
            >
              See how it works <ArrowRight className="h-4 w-4" />
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
          aria-label="Dverif platform overview"
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
          />

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-7">
          {items.map((it) => (
            <div key={it.title} className="surface-card card-hover relative overflow-hidden rounded-2xl p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-glow" />
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Dverif has turned a slow, manual verification process into a workflow our team can complete with confidence.",
      name: "Ayesha Khan",
      role: "Admissions Manager",
      initials: "AK",
    },
    {
      quote:
        "We now have a clear audit trail for every request and can respond to applicants far more quickly.",
      name: "Hamza Ali",
      role: "Operations Lead",
      initials: "HA",
    },
    {
      quote:
        "The platform makes it simple to verify documents directly at the source without the usual back-and-forth.",
      name: "Sara Ahmed",
      role: "People Operations",
      initials: "SA",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  const changeSlide = (direction: -1 | 1) => {
    setActiveIndex((currentIndex) =>
      (currentIndex + direction + testimonials.length) % testimonials.length,
    );
  };

  const handleTouchEnd = (touchEndX: number) => {
    if (touchStartX === null) return;

    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) > 50) {
      changeSlide(swipeDistance > 0 ? 1 : -1);
    }
    setTouchStartX(null);
  };

  return (
    <section className="enterprise-light py-12 lg:py-16">
      <div className="container-page">
        <div className="section-frame px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted By Thousands"
            // subtitle="A simpler way to verify documents, reduce delays, and keep every decision accountable."
          />
          <div
            className="mt-10 overflow-hidden"
            onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
            onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0 px-0.5">
                <article className="surface-card mx-auto flex min-h-64 max-w-2xl flex-col rounded-2xl p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/70" aria-hidden="true" />
                    <div className="flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-5 text-base leading-7 text-foreground">
                    “{testimonial.quote}”
                  </blockquote>
                  <footer className="mt-auto flex items-center gap-3 pt-6">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {testimonial.initials}
                    </span>
                    <div>
                      <cite className="not-italic text-sm font-semibold text-foreground">{testimonial.name}</cite>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </footer>
                </article>
              </div>
            ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2" aria-label="Testimonial navigation">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${activeIndex === index ? "w-7 bg-primary" : "w-2.5 bg-primary/25 hover:bg-primary/50"}`}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={activeIndex === index}
              />
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
  featured,
  badge,
  ctaText,
}: {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
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
      <div className="text-sm font-semibold text-muted-foreground">{name}</div>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-sm text-muted-foreground">{period}</span>}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{tagline}</div>
      <div className="mt-7 border-t border-border pt-6">
      <ul className="space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {f}
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
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="section-kicker">{eyebrow}</div>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
