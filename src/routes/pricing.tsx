import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { RequestAccessModal } from "@/components/request-access-modal";
import { fetchMarketingPlans, type MarketingPlan } from "@/config/api";
import { PlanCard } from "./index";

// Local SectionHeader component for pricing page
function PricingSectionHeader({
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

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Dverif | Document Verification & HR Management Plans" },
      { name: "description", content: "Simple, honest pricing for document verification and organization management. Free plan with 1 request per day and employee management. Basic plan at PKR 20,000/month. Professional plan at PKR 30,000/month with everything included." },
      { name: "keywords", content: "document verification pricing, verification plans, secure verification costs, document authentication pricing, background check pricing, verification service plans, HR software pricing, employee management pricing, payroll software price Pakistan" },
      { property: "og:title", content: "Pricing — Dverif | Document Verification & HR Plans" },
      { property: "og:description", content: "Free plan with employee management, Basic at PKR 20,000/month, Professional at PKR 30,000/month. Transparent pricing for secure document verification and organization management." },
      { property: "og:url", content: "https://dverif.com/pricing" },
      { property: "og:image", content: "https://dverif.com/assets/logo-light.png" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pricing — Dverif" },
      { name: "twitter:description", content: "Free plan with employee management, Basic at PKR 20,000/month, Professional at PKR 30,000/month with everything included." },
      { name: "twitter:image", content: "https://dverif.com/assets/logo-light.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/pricing" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Dverif — Document Verification & Organization Management Plans",
          "url": "https://dverif.com/pricing",
          "description": "Dverif offers three plans: Free with 1 request per day and employee management, Basic at PKR 20,000/month with attendance, employee, user, and leave management, and Professional at PKR 30,000/month with everything including payroll.",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "0",
            "highPrice": "30000",
            "priceCurrency": "PKR",
            "offerCount": "3",
            "offers": [
              {
                "@type": "Offer",
                "name": "Free Plan",
                "price": "0",
                "priceCurrency": "PKR",
                "description": "1 request per day and employee management",
                "availability": "https://schema.org/InStock",
                "url": "https://dverif.com/pricing"
              },
              {
                "@type": "Offer",
                "name": "Basic Plan",
                "price": "20000",
                "priceCurrency": "PKR",
                "description": "10 requests per day, attendance, employee, user, and leave management",
                "availability": "https://schema.org/InStock",
                "url": "https://dverif.com/pricing"
              },
              {
                "@type": "Offer",
                "name": "Professional Plan",
                "price": "30000",
                "priceCurrency": "PKR",
                "description": "100 requests per day, everything in Basic plus payroll management",
                "availability": "https://schema.org/InStock",
                "url": "https://dverif.com/pricing"
              }
            ]
          },
          "brand": {
            "@type": "Organization",
            "name": "Dverif",
            "url": "https://dverif.com"
          }
        }),
      },
    ],
  }),
  component: Page,
});

const STATIC_PLANS: MarketingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "PKR 0",
    period: "/ Month",
    description: "Start for Free",
    features: ["1 request per day", "Employee Management"],
    notIncludedFeatures: ["Attendance Management", "User Management", "Leave Management", "Payroll Management"],
  },
  {
    id: "monthly",
    name: "Basic",
    price: "PKR 20,000",
    period: "/ Month",
    description: "Flexible Monthly Billing",
    features: ["10 requests per day", "Attendance Management", "Employee Management", "User Management", "Leave Management"],
    notIncludedFeatures: ["Payroll Management"],
  },
  {
    id: "yearly",
    name: "Professional",
    price: "PKR 30,000",
    period: "/ Month",
    description: "Best Value for Growing Teams",
    featured: true,
    features: ["100 requests per day", "Attendance Management", "Employee Management", "User Management", "Leave Management", "Payroll Management"],
  },
];

function Page() {
  const [plans, setPlans] = useState<MarketingPlan[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchMarketingPlans()
      .then((data) => {
        if (!cancelled) setPlans(data);
      })
      .catch((plansError) => {
        if (!cancelled)
          setError(
            plansError instanceof Error ? plansError.message : "Couldn’t load plans.",
          );
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const isLoading = plans === null && error === null;
  const displayPlans = plans ?? STATIC_PLANS;

  return (
    <SiteLayout>
      <section className="enterprise-dark py-20 sm:py-24 lg:py-28">
        <div className="container-page text-center animate-fade-up">
          {/* <div className="section-kicker">Pricing</div> */}
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Simple, Honest Pricing</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Choose the plan that fits your verification needs. Both plans include a simple request-access process.
          </p>
        </div>
      </section>

      <section className="enterprise-light section-y">
        <div className="container-page">
          <div className={`section-frame mx-auto grid max-w-6xl items-stretch gap-6 p-5 sm:p-8 lg:gap-8 lg:p-10 ${displayPlans.length === 2 ? "lg:max-w-4xl lg:grid-cols-2" : "lg:grid-cols-3"}`}>
            {isLoading ? (
              <p className="col-span-full py-16 text-center text-muted-foreground">
                Loading plans…
              </p>
            ) : (
              displayPlans.map((plan) => (
                <PlanCard key={plan.id} name={plan.name} price={plan.price} period={plan.period} tagline={plan.description} features={plan.features} notIncludedFeatures={plan.notIncludedFeatures} featured={plan.featured} badge={plan.badge} ctaText={plan.ctaText} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="enterprise-dark section-y">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <PricingSectionHeader
            title="Not Sure Which Plan?"
            subtitle={
              <>
                Schedule a meeting and our team will help you choose the right plan. <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for personalized assistance.
              </>
            }
          />
         </div>
        <div className="mt-6 flex justify-center">
          <RequestAccessModal />
        </div>
      </section>
    </SiteLayout>
  );
}
