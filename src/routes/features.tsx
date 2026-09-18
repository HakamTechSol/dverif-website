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
      { title: "Features — Dverif | Document Verification, Employee & HR Management Platform" },
      {
        name: "description",
        content:
          "Explore Dverif features: document verification, employee management, attendance tracking, leave management, user management, payroll management, dashboard, requests, and document review. Every tool your team needs to verify documents and manage your workforce from one place.",
      },
      { name: "keywords", content: "document verification features, verification dashboard, document requests, inbox management, document review, secure verification tools, employee management features, attendance tracking software, leave management software, payroll software, HR features, HRMS features" },
      { property: "og:title", content: "Features — Dverif | Document Verification & HR Platform" },
      {
        property: "og:description",
        content: "Verify documents at the source and manage employees, attendance, leave, and payroll. Every tool your team needs in one platform.",
      },
      { property: "og:url", content: "https://dverif.com/features" },
      { property: "og:image", content: "https://dverif.com/assets/logo-light.png" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Features — Dverif | Document Verification & HR Platform" },
      { name: "twitter:description", content: "Verify documents at the source and manage employees, attendance, leave, and payroll. Every tool your team needs in one platform." },
      { name: "twitter:image", content: "https://dverif.com/assets/logo-light.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/features" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Dverif Features",
          "url": "https://dverif.com/features",
          "description": "Dverif features include document verification, employee management, attendance tracking, leave management, user management, payroll management, dashboard and analytics.",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Dverif",
            "url": "https://dverif.com"
          },
          "about": {
            "@type": "SoftwareApplication",
            "name": "Dverif",
            "applicationCategory": "BusinessApplication"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Document Verification" },
              { "@type": "ListItem", "position": 2, "name": "Employee Management" },
              { "@type": "ListItem", "position": 3, "name": "Attendance Management" },
              { "@type": "ListItem", "position": 4, "name": "Leave Management" },
              { "@type": "ListItem", "position": 5, "name": "User Management" },
              { "@type": "ListItem", "position": 6, "name": "Payroll Management" },
              { "@type": "ListItem", "position": 7, "name": "Dashboard and Analytics" },
              { "@type": "ListItem", "position": 8, "name": "Document Review" }
            ]
          }
        }),
      },
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
