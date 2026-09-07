import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { SectionHeader } from "./index";

// Local SectionHeader component for features page
function FeaturesSectionHeader({
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
import { RequestAccessModal } from "@/components/request-access-modal";
import { FeatureShowcase } from "@/components/feature-showcase";
import { ProductCapabilities } from "@/components/product-capabilities";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Dverif | Document Verification Platform Capabilities" },
      {
        name: "description",
        content:
          "Explore Dverif features: dashboard, requests, inbox, and document review for modern document verification. Every tool your team needs to verify documents at the source.",
      },
      { name: "keywords", content: "document verification features, verification dashboard, document requests, inbox management, document review, secure verification tools" },
      { property: "og:title", content: "Features — Dverif" },
      {
        property: "og:description",
        content: "Every tool your team needs to verify documents at the source.",
      },
      { property: "og:url", content: "https://dverif.com/features" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Features — Dverif" },
      { name: "twitter:description", content: "Every tool your team needs to verify documents at the source." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/features" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="enterprise-dark pb-16 pt-20 sm:pb-20 lg:pt-28">
        <div className="container-page animate-fade-up text-center">
          {/* <div className="section-kicker">Features</div> */}
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Build for Teams that Verify at Scale
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
           
          </p>
        </div>
      </section>

      <section className="section-band section-y pt-10 sm:pt-12">
        <div className="container-page">
          <div className="section-frame p-5 sm:p-8 lg:p-10">
            <FeatureShowcase />
          </div>
        </div>
      </section>

      <ProductCapabilities />

      <section className="enterprise-dark section-y">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FeaturesSectionHeader
            title="Ready to See it in Action?"
            subtitle={
              <>
                Request access and our team will set you up with a live walkthrough.<br />
                <Link to="/pricing" className="text-primary hover:underline font-bold">View our pricing plans</Link>.
              </>
            }
          />
          <div className="mt-8 flex justify-center">
            <RequestAccessModal />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
