import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { FaqSection } from "@/components/faq-section";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Dverif | Document Verification Questions & Answers" },
      { name: "description", content: "Answers about Dverif's invite-only access, verification speed, bulk requests and fraud prevention. Get all your document verification questions answered." },
      { name: "keywords", content: "document verification FAQ, verification questions, Dverif FAQ, document verification help, verification process, secure verification questions" },
      { property: "og:title", content: "FAQ — Dverif Document Verification" },
      { property: "og:description", content: "Answers about Dverif's invite-only access, verification speed, bulk requests and fraud prevention." },
      { property: "og:url", content: "https://dverif.com/faq" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FAQ — Dverif Document Verification" },
      { name: "twitter:description", content: "Answers about Dverif's invite-only access, verification speed, bulk requests and fraud prevention." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/faq" },
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
