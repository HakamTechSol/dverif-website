import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Dverif | Document Verification Privacy" },
      { name: "description", content: "Dverif's privacy policy for document verification services. Learn how we protect your data and ensure secure document verification processes." },
      { name: "keywords", content: "privacy policy, data protection, document verification privacy, secure verification, data security, Dverif privacy" },
      { property: "og:title", content: "Privacy Policy — Dverif" },
      { property: "og:description", content: "Dverif's privacy policy for document verification services." },
      { property: "og:url", content: "https://dverif.com/privacy-policy" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy — Dverif" },
      { name: "twitter:description", content: "Dverif's privacy policy for document verification services." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/privacy-policy" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <section className="page-hero-grid py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Legal</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-lg text-muted-foreground">Content will be added later.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
