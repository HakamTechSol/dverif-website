import { useState, type ReactNode } from "react";
import { submitRequestAccess } from "../config/api";
import {
  Check,
  CheckCircle2,
  FileCheck2,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, InputField, TextArea } from "@/components/form-controls";
import { submitContactForm } from "@/config/api";

const benefits = ["Secure & Private", "Fast Onboarding", "Built for Teams"];

export function RequestAccessModal({
  children,
  variant = "primary",
  triggerLabel = "Schedule A Meeting",
}: {
  children?: ReactNode;
  variant?: "primary" | "outline";
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setError(null);
    setLoading(true);
    try {
     await submitRequestAccess({
  organization_name: String(
    formData.get("organization_name") || ""
  ).trim(),

  contact_name: String(
    formData.get("contact_name") || ""
  ).trim(),

  email: String(
    formData.get("email") || ""
  ).trim(),

  phone: String(
    formData.get("phone") || ""
  ).trim(),

  company_size: String(
    formData.get("company_size") || ""
  ).trim(),

  message: String(
    formData.get("message") || ""
  ).trim(),
});
      form.reset();
      setDone(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn’t send your request. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const changeOpen = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen)
      window.setTimeout(() => {
        setDone(false);
        setError(null);
      }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>
        {children ?? (
          <Button
            variant={variant === "outline" ? "outline" : "default"}
            className={
              variant === "outline"
                ? "border-border bg-background text-foreground shadow-none hover:bg-accent"
                : ""
            }
          >
            {triggerLabel}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-[min(94vw,900px)] overflow-y-auto rounded-2xl border-white/40 bg-background/95 p-0 shadow-2xl backdrop-blur-xl sm:rounded-2xl">
        {done ? (
          <div className="px-6 py-16 text-center sm:px-16">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#4F8CFF]/10 text-[#4F8CFF]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-2xl font-bold tracking-tight">Your request is on its way</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Thanks for your interest in Dverif. Our team will review your details and be in touch
              shortly.
            </p>
            <Button type="button" onClick={() => changeOpen(false)} className="mt-7">
              Close
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[.86fr_1.14fr]">
            <section className="relative overflow-hidden bg-[linear-gradient(135deg,#4F8CFF,#6C63FF)] px-6 py-10 text-white sm:px-10 lg:py-12">
              <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-[#8dd7ff]/20 blur-3xl" />
              <div className="relative">
                <div className="relative mb-8 grid h-20 w-20 place-items-center rounded-2xl border border-white/25 bg-white/15 shadow-lg backdrop-blur-sm">
                  <FileCheck2 className="h-9 w-9" />
                  <ShieldCheck className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white p-1.5 text-[#5a75ff]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                  Dverif access
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">Request Access</h2>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                  Join teams that make document verification clearer, safer, and easier to manage.
                </p>
                <ul className="mt-8 space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm font-medium">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex items-center gap-2 text-xs text-white/70">
                  <Sparkles className="h-4 w-4" /> Usually responds within one business day
                </div>
              </div>
            </section>
            <section className="px-6 py-10 sm:px-10 lg:py-12">
              <DialogHeader className="pr-8 text-left">
                <DialogTitle className="text-2xl font-bold">Tell us a little about you</DialogTitle>
                <DialogDescription className="mt-2 leading-6">
                  We’ll use this to make your onboarding relevant from day one.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <InputField
                  id="ra-name"
                  name="name"
                  label="Name"
                  icon={UserRound}
                  required
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
                <InputField
                  id="ra-email"
                  name="email"
                  label="Work Email"
                  icon={Mail}
                  type="email"
                  required
                  placeholder="jane@company.com"
                  autoComplete="email"
                />
                <InputField
                  id="ra-phone"
                  name="phone"
                  label="Phone"
                  icon={Phone}
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  autoComplete="tel"
                />
                {/* <TextArea
                  id="ra-message"
                  name="message"
                  label="Use case"
                  icon={FileCheck2}
                  required
                  rows={3}
                  placeholder="Tell us what you’re looking to verify…"
                /> */}
                {error && (
                  <p
                    role="alert"
                    className="rounded-lg bg-destructive/10 px-3 py-2.5 text-sm text-destructive"
                  >
                    {error}
                  </p>
                )}
                <Button type="submit" loading={loading} className="mt-2 w-full">
                  {loading ? "Sending request…" : "Schedule A Meeting"}
                </Button>
              </form>
            </section>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
