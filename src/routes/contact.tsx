import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  MessageSquareText,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Button, InputField, TextArea } from "@/components/form-controls";
import { submitContactForm } from "@/config/api";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dverif | Get in Touch with Document Verification Experts" },
      { name: "description", content: "Get in touch with the Dverif team for document verification support, questions, or partnership inquiries. Contact us via email, WhatsApp, or our contact form." },
      { name: "keywords", content: "contact Dverif, document verification support, verification help, customer support, partnership inquiries, Dverif contact information" },
      { property: "og:title", content: "Contact — Dverif" },
      { property: "og:description", content: "Get in touch with the Dverif team for document verification support and inquiries." },
      { property: "og:url", content: "https://dverif.com/contact" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact — Dverif" },
      { name: "twitter:description", content: "Get in touch with the Dverif team for document verification support and inquiries." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/contact" },
    ],
  }),
  component: Page,
});

const contactCards = [
  {
    icon: Mail,
    title: "Email us",
    copy: "For general questions and support.",
    value: "info@dverif.com",
    href: "mailto:info@dverif.com",
    tint: "bg-[#4F8CFF]/10 text-[#4F8CFF]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    copy: "A quick chat with our team.",
    value: "Start a conversation",
    href: "https://wa.me/00000000000",
    tint: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Clock3,
    title: "Business hours",
    copy: "Monday — Friday",
    value: "9:00 AM — 6:00 PM",
    tint: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
];

function Page() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setError(null);
    setLoading(true);
    try {
      await submitContactForm({
        name: String(data.get("name") || "").trim(),
        email: String(data.get("email") || "").trim(),
        phone: String(data.get("phone") || "").trim(),
        subject: String(data.get("subject") || "").trim(),
        message: String(data.get("message") || "").trim(),
      });
      form.reset();
      setDone(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn’t send your message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <section className="page-hero-grid py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center animate-fade-up">
            {/* <div className="section-kicker gap-2"> */}
              {/* <MessageSquareText className="h-3.5 w-3.5" /> CONTACT OUR TEAM */}
            {/* </div> */}
            <h1 className="mt-5 text-4xl font-bold tracking-[-.04em] sm:text-5xl">
              How Can we Help?
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Have a question, need support, or want to explore Dverif? Send us a note and we’ll get
              back to you shortly.
            </p>
          </header>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.16fr_.84fr] lg:gap-8 lg:items-start">
            <section className="surface-card relative overflow-hidden rounded-2xl p-6 sm:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary" />
              {done ? (
                <div className="flex min-h-[525px] flex-col items-center justify-center text-center animate-fade-up">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#4F8CFF]/10 text-[#4F8CFF]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">Message sent successfully</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                    Thanks for reaching out. A member of our team will reply as soon as possible.
                  </p>
                  <Button type="button" onClick={() => setDone(false)} className="mt-7">
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,#4F8CFF,#6C63FF)] text-white shadow-lg shadow-[#4F8CFF]/25">
                      <Send className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        We’d love to hear what’s on your mind.
                      </p>
                    </div>
                  </div>
                  <form onSubmit={submit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <InputField
                        id="contact-name"
                        name="name"
                        label="Name"
                        icon={UserRound}
                        required
                        placeholder="Jane Doe"
                        autoComplete="name"
                      />
                      <InputField
                        id="contact-email"
                        name="email"
                        label="Email"
                        icon={Mail}
                        type="email"
                        required
                        placeholder="jane@company.com"
                        autoComplete="email"
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <InputField
                        id="contact-phone"
                        name="phone"
                        label="Phone"
                        icon={Phone}
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        autoComplete="tel"
                      />
                      <InputField
                        id="contact-subject"
                        name="subject"
                        label="Subject"
                        icon={Building2}
                        required
                        placeholder="How Can we Help?"
                      />
                    </div>
                    <TextArea
                      id="contact-message"
                      name="message"
                      label="Message"
                      icon={MessageSquareText}
                      required
                      rows={5}
                      placeholder="Tell us a little more about what you need…"
                    />
                    {error && (
                      <p
                        role="alert"
                        className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
                      >
                        {error}
                      </p>
                    )}
                    <Button type="submit" loading={loading} className="w-full sm:w-auto">
                      {loading ? "Sending message…" : "Send Message"}
                    </Button>
                  </form>
                </>
              )}
            </section>
            <aside className="section-frame space-y-4 p-4 sm:p-5">
              {contactCards.map(({ icon: Icon, title, copy, value, href, tint }) => {
                const content = (
                  <>
                    <div className={`grid h-11 w-11 place-items-center rounded-xl ${tint}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{copy}</p>
                      <p className="mt-3 text-sm font-semibold text-foreground">{value}</p>
                    </div>
                  </>
                );
                return href ? (
                  <a
                    key={title}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="surface-card card-hover flex gap-4 rounded-2xl p-5 sm:p-6"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={title}
                    className="surface-card flex gap-4 rounded-2xl p-5 sm:p-6"
                  >
                    {content}
                  </div>
                );
              })}
              <div className="relative overflow-hidden rounded-2xl border border-[#4F8CFF]/20 bg-[linear-gradient(135deg,rgba(79,140,255,.12),rgba(108,99,255,.11))] p-6 sm:p-7">
                <div className="absolute -right-5 -top-6 h-20 w-20 rounded-full bg-white/35 blur-xl" />
                <h3 className="relative text-lg font-bold">We’re here to help</h3>
                <p className="relative mt-2 text-sm leading-6 text-muted-foreground">
                  Whether you’re just getting started or need a hand with something specific, our
                  team is ready to help.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
