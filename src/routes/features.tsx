import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { SectionHeader } from "./index";
import { RequestAccessModal } from "@/components/request-access-modal";
import { FeatureShowcase } from "@/components/feature-showcase";
import { ProductCapabilities } from "@/components/product-capabilities";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Dverif" },
      {
        name: "description",
        content:
          "Explore Dverif features: dashboard, requests, inbox, and document review for modern document verification.",
      },
      { property: "og:title", content: "Features — Dverif" },
      {
        property: "og:description",
        content: "Every tool your team needs to verify documents at the source.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
            Every capability in Dverif is designed to remove friction between issuers, verifiers and
            organizations.
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
          <SectionHeader
            title="Ready to See it in Action?"
            subtitle="Request access and our team will set you up with a live walkthrough."
          />
          <div className="mt-8 flex justify-center">
            <RequestAccessModal />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
