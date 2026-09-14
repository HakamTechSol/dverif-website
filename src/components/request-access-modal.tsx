import { useState, type ReactNode } from "react";
import { submitRequestAccess } from "../config/api";
import {
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  FileCheck2,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button, InputField, TextArea } from "@/components/form-controls";

const benefits = ["Secure & Private", "Fast Onboarding", "Built for Teams"];

const companySizeOptions = ["1-10", "11-50", "51-200", "201-500", "500+"];

export function RequestAccessModal({
  children,
  variant = "primary",
  triggerLabel = "Request A Meeting",
}: {
  children?: ReactNode;
  variant?: "primary" | "outline";
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [companySize, setCompanySize] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setError(null);
    setLoading(true);
    try {
      await submitRequestAccess({
        organization_name: String(formData.get("organization_name") || "").trim(),
        contact_name: String(formData.get("contact_name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim() || undefined,
        company_size: companySize.trim() || undefined,
        message: String(formData.get("message") || "").trim() || undefined,
      });
      form.reset();
      setCompanySize("");
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
        setCompanySize("");
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
            {triggerLabel} <ArrowUpRight className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-[min(94vw,900px)] overflow-y-auto rounded-2xl border-white/40 bg-background/95 p-0 shadow-2xl backdrop-blur-xl sm:rounded-2xl [scrollbar-width:thin] [scrollbar-color:color-mix(in_oklab,var(--foreground)_25%,transparent)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/25 hover:[&::-webkit-scrollbar-thumb]:bg-foreground/40">
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
            <section className="relative overflow-hidden bg-[linear-gradient(135deg,#4F8CFF,#6C63FF)] px-6 py-8 text-white sm:px-10 sm:py-10 lg:py-12">
              <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-[#8dd7ff]/20 blur-3xl" />
              <div className="relative">
                <div className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/25 bg-white/15 shadow-lg backdrop-blur-sm sm:mb-8 sm:h-20 sm:w-20">
                  <FileCheck2 className="h-7 w-7 sm:h-9 sm:w-9" />
                  <ShieldCheck className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full bg-white p-1.5 text-[#5a75ff] sm:h-8 sm:w-8" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                  Dverif access
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Request A Meeting</h2>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                  Join teams that make document verification clearer, safer, and easier to manage.
                </p>
                <ul className="mt-6 hidden space-y-4 sm:mt-8 sm:block">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm font-medium">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 hidden items-center gap-2 text-xs text-white/70 sm:mt-10 sm:flex">
                  <Sparkles className="h-4 w-4" /> Usually responds within one business day
                </div>
              </div>
            </section>
            <section className="px-6 py-10 sm:px-10 lg:border-l lg:border-border/60 lg:py-12">
              <DialogHeader className="pr-8 text-left">
                <DialogTitle className="text-2xl font-bold">Tell us a little about you</DialogTitle>
                <DialogDescription className="mt-2 leading-6">
                  We’ll use this to make your onboarding relevant from day one.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-7">
                <InputField
                  id="ra-organization"
                  name="organization_name"
                  label="Organization Name"
                  icon={Building2}
                  required
                  placeholder="Acme Corp"
                  autoComplete="organization"
                />
                <InputField
                  id="ra-contact"
                  name="contact_name"
                  label="Contact Name"
                  icon={UserRound}
                  required
                  placeholder="Jane Smith"
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    id="ra-phone"
                    name="phone"
                    label="Phone (optional)"
                    icon={Phone}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    autoComplete="tel"
                  />
                  <div className="space-y-2">
                    <Label htmlFor="ra-company-size" className="text-sm font-medium text-foreground">
                      Company Size (optional)
                    </Label>
                    <div className="group relative">
                      <Users className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-[#4F8CFF]" />
                      <Select value={companySize} onValueChange={setCompanySize}>
                        <SelectTrigger
                          id="ra-company-size"
                          className="h-12 rounded-xl border-border/80 bg-background/70 pl-10 shadow-sm transition-all data-[placeholder]:text-muted-foreground/70 focus-visible:border-[#4F8CFF] focus-visible:ring-4 focus-visible:ring-[#4F8CFF]/15"
                        >
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {companySizeOptions.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <TextArea
                  id="ra-message"
                  name="message"
                  label="Use Case (optional)"
                  icon={FileCheck2}
                  rows={3}
                  placeholder="Tell us what you're looking to verify…"
                />
                {error && (
                  <p
                    role="alert"
                    className="rounded-lg bg-destructive/10 px-3 py-2.5 text-sm text-destructive"
                  >
                    {error}
                  </p>
                )}
                <Button type="submit" loading={loading} className="mt-2 w-full">
                  {loading ? "Sending request…" : "Request A Meeting"}
                </Button>
              </form>
            </section>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
