import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Dverif | Document Verification Terms" },
      { name: "description", content: "Dverif's terms of service for document verification platform. Learn about our service terms, usage policies, and legal agreements." },
      { name: "keywords", content: "terms of service, legal terms, service agreement, document verification terms, Dverif terms, usage policy" },
      { property: "og:title", content: "Terms of Service — Dverif" },
      { property: "og:description", content: "Dverif's terms of service for document verification platform." },
      { property: "og:url", content: "https://dverif.com/terms" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms of Service — Dverif" },
      { name: "twitter:description", content: "Dverif's terms of service for document verification platform." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/terms" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <section className="page-hero-grid py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Legal</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Terms</h1>
          <p className="mt-5 text-lg text-muted-foreground">Content will be added later.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
