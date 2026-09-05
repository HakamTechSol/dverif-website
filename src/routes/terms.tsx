import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — Dverif" }] }),
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
