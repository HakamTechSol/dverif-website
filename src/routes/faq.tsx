import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { FaqSection } from "@/components/faq-section";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Dverif Document Verification" },
      { name: "description", content: "Answers about Dverif's invite-only access, verification speed, bulk requests and fraud prevention." },
      { property: "og:title", content: "FAQ — Dverif Document Verification" },
      { property: "og:description", content: "Answers about Dverif's invite-only access, verification speed, bulk requests and fraud prevention." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <FaqSection as="h1" />
    </SiteLayout>
  );
}
