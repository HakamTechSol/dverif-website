import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const faqItems = [
  { q: "Is Dverif open for signup?", a: "No — Dverif is invite-only. Request access and our team will reach out." },
  { q: "How fast is a typical verification?", a: "Most verifications complete in minutes when the issuer is on Dverif." },
  { q: "Do you support bulk requests?", a: "Yes, teams on paid plans can send and track requests in bulk with a full audit trail." },
  { q: "How do you prevent fraud?", a: "We verify directly with issuers and flag tampering, duplicates and mismatches automatically." },
];

export function FaqSection({ as = "h2" }: { as?: "h1" | "h2" }) {
  const Heading = as;
  return (
    <section className="page-hero-grid section-y">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-kicker">FAQ</div>
          <Heading className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Questions, answered.</Heading>
        </div>
        <div className="surface-card mt-10 rounded-2xl px-5 py-2 sm:px-7 sm:py-3">
          <Accordion type="single" collapsible className="w-full divide-y divide-border">
            {faqItems.map((it, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="border-0">
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">{it.q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-6 text-muted-foreground">{it.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
