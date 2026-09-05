import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { RequestAccessModal } from "@/components/request-access-modal";
import { DEFAULT_MARKETING_PLANS, fetchMarketingPlans, type MarketingPlan } from "@/config/api";
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
      { title: "Pricing — Dverif | Document Verification Plans & Pricing" },
      { name: "description", content: "Straightforward document-verification plans for every team. Choose monthly flexibility or yearly savings with transparent pricing for secure document verification." },
      { name: "keywords", content: "document verification pricing, verification plans, secure verification costs, document authentication pricing, background check pricing, verification service plans" },
      { property: "og:title", content: "Pricing — Dverif" },
      { property: "og:description", content: "Choose monthly flexibility or yearly savings with transparent pricing for secure document verification." },
      { property: "og:url", content: "https://dverif.com/pricing" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pricing — Dverif" },
      { name: "twitter:description", content: "Choose monthly flexibility or yearly savings with transparent pricing for secure document verification." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/pricing" },
    ],
  }),
  component: Page,
});

function Page() {
  const [plans, setPlans] = useState<MarketingPlan[]>(DEFAULT_MARKETING_PLANS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchMarketingPlans()
      .then((response) => { if (active) setPlans(response); })
      .catch((requestError: unknown) => {
        console.error("Unable to fetch pricing plans:", requestError);
        if (active) {
          setError("Unable to fetch the latest pricing. Showing default plans.");
          return;
        }
        if (active) setError(requestError instanceof Error ? requestError.message : "We couldn’t load pricing plans. Please try again shortly.");
      })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

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
          <div className="section-frame mx-auto grid max-w-6xl items-stretch gap-6 p-5 sm:p-8 lg:grid-cols-2 lg:gap-8 lg:p-10">
          {loading && <p className="text-sm text-muted-foreground">Loading plans…</p>}
          {plans.map((plan) => (
            <PlanCard key={plan.id} name={plan.name} price={plan.price} period={plan.period} tagline={plan.description} features={plan.features} featured={plan.featured} badge={plan.badge} ctaText={plan.ctaText} />
          ))}
          {error && <p className="lg:col-span-2 text-center text-sm text-muted-foreground" role="alert">{error}</p>}
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
