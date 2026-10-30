import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteLayout } from "@/components/site-layout";
import { RequestAccessModal } from "@/components/request-access-modal";
import { FeatureShowcase } from "@/components/feature-showcase";
import { ProductCapabilities } from "@/components/product-capabilities";

function FeaturesSectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && <div className="section-kicker">{eyebrow}</div>}

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <div className="mt-4 text-muted-foreground">{subtitle}</div>
      )}
    </div>
  );
}

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      {
        title:
          "Features — DVerif | Document Verification, Employee & HR Management Platform",
      },
      {
        name: "description",
        content:
          "Explore DVerif features for recruitment, employee onboarding and offboarding, document and experience verification, expense claims, reusable letter templates, employee requests and pricing.",
      },
      {
        name: "keywords",
        content:
          "document verification features, recruitment management, employee onboarding, employee offboarding, experience verification, expense management, letter templates, employee requests, HR software pricing",
      },
      {
        property: "og:title",
        content:
          "Features — DVerif | Document Verification & HR Platform",
      },
      {
        property: "og:description",
        content:
          "Explore DVerif tools for hiring, employee lifecycle management, verification, expense claims, HR letters and team requests.",
      },
      {
        property: "og:url",
        content: "https://dverif.com/features",
      },
      {
        property: "og:image",
        content: "https://dverif.com/assets/logo-light.png",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Features — DVerif | Document Verification & HR Platform",
      },
      {
        name: "twitter:description",
        content:
          "Verify documents at the source and manage employees, attendance, leave, and payroll. Every tool your team needs in one platform.",
      },
      {
        name: "twitter:image",
        content: "https://dverif.com/assets/logo-light.png",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://dverif.com/features",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "DVerif Features",
          url: "https://dverif.com/features",
          description:
            "DVerif features include recruitment, employee onboarding and offboarding, document and experience verification, expense claims, letter templates, employee requests and pricing.",
          isPartOf: {
            "@type": "WebSite",
            name: "DVerif",
            url: "https://dverif.com",
          },
          about: {
            "@type": "SoftwareApplication",
            name: "DVerif",
            applicationCategory: "BusinessApplication",
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              "Document Verification",
              "Employee Management",
              "Attendance Management",
              "Leave Management",
              "User Management",
              "Payroll Management",
              "Dashboard and Analytics",
              "Document Review",
              "Recruitment Management",
              "Employee Onboarding",
              "Employee Offboarding",
              "Experience Verification",
              "Expense Management",
              "Letter and Document Templates",
              "Employee Requests",
              "Pricing",
            ].map((name, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name,
            })),
          },
        }),
      },
    ],
  }),

  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="enterprise-dark pb-16 pt-20 sm:pb-20 lg:pt-28">
        <div className="container-page animate-fade-up text-center">
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Build for Teams that Verify at Scale
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Explore tools for hiring, employee management, verification and
            everyday HR workflows.
          </p>
        </div>
      </section>

      {/* Feature showcase */}
      <section className="section-band section-y pt-10 sm:pt-12">
        <div className="container-page">
          <div className="section-frame p-4 sm:p-6 lg:p-8">
            <FeatureShowcase />
          </div>
        </div>
      </section>

      {/* Product capabilities */}
      <ProductCapabilities />

      {/* CTA */}
      <section className="enterprise-dark section-y">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FeaturesSectionHeader
            title="Ready to See it in Action?"
            subtitle={
              <>
                Request access and our team will set you up with a live
                walkthrough.
                <br />
                <Link
                  to="/pricing"
                  className="font-bold text-primary hover:underline"
                >
                  View our pricing plans
                </Link>
                .
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