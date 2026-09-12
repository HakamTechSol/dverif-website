import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Shield, User, FileText, CreditCard, AlertTriangle, Scale, Mail, Phone, MapPin, Globe, CheckCircle2, XCircle, Key, BadgeCheck, FileCheck, Lock, Ban } from "lucide-react";
import { LEGAL_CONFIG } from "@/config/legal";
import { useState, useEffect } from "react";

const termsSections = [
  { id: "about-dverif", number: "01", title: "About Dverif" },
  { id: "eligibility", number: "02", title: "Eligibility" },
  { id: "account-registration", number: "03", title: "Account Registration" },
  { id: "organization-administrators", number: "04", title: "Organization Administrators" },
  { id: "verification-services", number: "05", title: "Verification Services" },
  { id: "documents", number: "06", title: "Documents" },
  { id: "acceptable-use", number: "07", title: "Acceptable Use" },
  { id: "payments-subscriptions", number: "08", title: "Payments & Subscriptions" },
  { id: "cancellation", number: "09", title: "Cancellation" },
  { id: "intellectual-property", number: "10", title: "Intellectual Property" },
  { id: "user-content", number: "11", title: "User Content" },
  { id: "service-availability", number: "12", title: "Service Availability" },
  { id: "third-party-services", number: "13", title: "Third-Party Services" },
  { id: "disclaimer", number: "14", title: "Disclaimer" },
  { id: "limitation-of-liability", number: "15", title: "Limitation of Liability" },
  { id: "suspension-termination", number: "16", title: "Suspension & Termination" },
  { id: "changes-to-terms", number: "17", title: "Changes to Terms" },
  { id: "governing-law", number: "18", title: "Governing Law" },
  { id: "contact", number: "19", title: "Contact" },
] as const;

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Dverif Terms & Conditions" },
      { name: "description", content: "Review the terms and conditions governing the use of Dverif." },
      { name: "keywords", content: "terms and conditions, legal terms, service agreement, document verification terms, Dverif terms, usage policy" },
      { property: "og:title", content: "Terms & Conditions — Dverif" },
      { property: "og:description", content: "Review the terms and conditions governing the use of Dverif." },
      { property: "og:url", content: "https://dverif.com/terms-and-conditions" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms & Conditions — Dverif" },
      { name: "twitter:description", content: "Review the terms and conditions governing the use of Dverif." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/terms-and-conditions" },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = termsSections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <SiteLayout>
      {/* Premium Hero Section */}
      <section className="enterprise-dark pb-8 pt-12 sm:pb-10 sm:pt-14 lg:pt-16">
        <div className="container-page animate-fade-up text-center">
          <div className="section-kicker">TERMS & AGREEMENTS</div>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Terms & Conditions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Clear guidelines for using Dverif safely, responsibly, and effectively.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-band section-y pt-4 sm:pt-6">
        <div className="container-page">
          <div className="section-frame p-5 sm:p-8 lg:p-10">
            <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
              {/* Main Content */}
              <div className="space-y-12" style={{ maxWidth: "900px" }}>
                {/* Section 1: About Dverif */}
                <section id="about-dverif" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">01</span>
                    <h2 className="text-2xl font-bold text-foreground">About Dverif</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif provides organizations with a centralized platform for managing verification workflows, teams, employees, documents, attendance, leave, payroll-related information, administrative functions, analytics, templates, requests, and related business operations.
                  </p>
                  <div className="surface-card rounded-xl p-4 bg-primary/5 border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> Features may vary depending on subscription plan or account configuration.
                    </p>
                  </div>
                </section>

                {/* Section 2: Eligibility */}
                <section id="eligibility" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">02</span>
                    <h2 className="text-2xl font-bold text-foreground">Eligibility</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Users must have the legal authority to enter into these Terms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If using Dverif on behalf of a company or organization, the user represents that they have authority to bind that organization.
                  </p>
                </section>

                {/* Section 3: Account Registration */}
                <section id="account-registration" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">03</span>
                    <h2 className="text-2xl font-bold text-foreground">Account Registration</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Users agree to:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Provide accurate information",
                      "Keep account information updated",
                      "Protect login credentials",
                      "Not share accounts without authorization",
                      "Notify Dverif of unauthorized access",
                      "Take responsibility for account activity"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {i + 1}
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 4: Organization Administrators */}
                <section id="organization-administrators" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">04</span>
                    <h2 className="text-2xl font-bold text-foreground">Organization Administrators</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Organization administrators may have permissions to:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Add or remove team members",
                      "Manage user roles",
                      "Review employee information",
                      "Manage documents",
                      "Create verification requests",
                      "Manage attendance and leave",
                      "Access administrative dashboards",
                      "Manage templates and requests"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {i + 1}
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="surface-card rounded-xl p-4 bg-primary/5 border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> Organizations are responsible for ensuring administrators have appropriate authority.
                    </p>
                  </div>
                </section>

                {/* Section 5: Verification Services */}
                <section id="verification-services" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">05</span>
                    <h2 className="text-2xl font-bold text-foreground">Verification Services</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif may provide tools for submitting, reviewing, tracking, and managing verification requests and verification-related documents.
                  </p>
                  <div className="surface-card rounded-xl p-4 bg-primary/5 border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> Users are responsible for ensuring submitted information is accurate and that they have authorization to submit it.
                    </p>
                  </div>
                </section>

                {/* Section 6: Documents */}
                <section id="documents" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">06</span>
                    <h2 className="text-2xl font-bold text-foreground">Documents</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Users represent that:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "They have the right to upload documents",
                      "Documents do not unlawfully infringe rights",
                      "Information provided is accurate",
                      "They will not upload malicious files"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {i + 1}
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 7: Acceptable Use */}
                <section id="acceptable-use" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">07</span>
                    <h2 className="text-2xl font-bold text-foreground">Acceptable Use</h2>
                  </div>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="surface-card rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">Allowed / Responsible Use</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Use Dverif for intended business purposes</li>
                        <li>• Maintain account security</li>
                        <li>• Comply with applicable laws</li>
                        <li>• Respect other users</li>
                        <li>• Provide accurate information</li>
                      </ul>
                    </div>

                    <div className="surface-card rounded-xl p-5 bg-red-50/50 border-red-200/50 dark:bg-red-950/20 dark:border-red-900/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                          <Ban className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">Prohibited Use</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Break applicable laws</li>
                        <li>• Commit fraud</li>
                        <li>• Impersonate another person</li>
                        <li>• Gain unauthorized access</li>
                        <li>• Upload malicious software</li>
                        <li>• Interfere with platform security</li>
                        <li>• Abuse verification systems</li>
                        <li>• Submit knowingly false information</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 8: Payments & Subscriptions */}
                <section id="payments-subscriptions" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">08</span>
                    <h2 className="text-2xl font-bold text-foreground">Payments & Subscriptions</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Certain Dverif features may require a paid subscription. Applicable pricing and billing terms will be presented before purchase.
                  </p>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">Billing</h3>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Monthly, annual, or custom billing</li>
                        <li>• Non-refundable where not required by law</li>
                        <li>• Taxes and charges may apply</li>
                        <li>• Pricing may change with notice</li>
                      </ul>
                    </div>

                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                          <Scale className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">Cancellation</h3>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Cancel through Dverif platform</li>
                        <li>• Stops future billing</li>
                        <li>• No refunds unless required by law</li>
                        <li>• Plan-specific terms apply</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 9: Cancellation */}
                <section id="cancellation" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">09</span>
                    <h2 className="text-2xl font-bold text-foreground">Cancellation</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Users may cancel their subscription according to the cancellation process provided through Dverif.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cancellation may stop future billing but does not necessarily result in a refund for previously paid fees unless required by law or expressly provided under the applicable plan.
                  </p>
                </section>

                {/* Section 10: Intellectual Property */}
                <section id="intellectual-property" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">10</span>
                    <h2 className="text-2xl font-bold text-foreground">Intellectual Property</h2>
                  </div>
                  
                  <div className="surface-card rounded-xl p-5 bg-primary/5 border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Protected Intellectual Property</p>
                        <p className="text-sm text-muted-foreground mt-1">Dverif's proprietary materials are protected by applicable intellectual property laws.</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Dverif and its software, branding, designs, logos, content, interfaces, and technology are owned by or licensed to Dverif and are protected by applicable intellectual property laws.
                    </p>
                  </div>
                  
                  <div className="surface-card rounded-xl p-4 bg-primary/5 border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> Users may not copy, reproduce, modify, distribute, sell, or commercially exploit Dverif proprietary materials without permission.
                    </p>
                  </div>
                </section>

                {/* Section 11: User Content */}
                <section id="user-content" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">11</span>
                    <h2 className="text-2xl font-bold text-foreground">User Content</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Users retain ownership of information and content they lawfully submit to Dverif.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By submitting content, users grant Dverif the permissions reasonably necessary to host, process, store, display, and provide that content as part of the services.
                  </p>
                </section>

                {/* Section 12: Service Availability */}
                <section id="service-availability" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">12</span>
                    <h2 className="text-2xl font-bold text-foreground">Service Availability</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif aims to provide reliable service but does not guarantee uninterrupted or error-free availability.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The service may occasionally be unavailable because of:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Maintenance",
                      "Updates",
                      "Security issues",
                      "Technical failures",
                      "Third-party infrastructure problems",
                      "Events beyond reasonable control"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {i + 1}
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 13: Third-Party Services */}
                <section id="third-party-services" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">13</span>
                    <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif may use or integrate with third-party services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Those services may have their own terms, privacy policies, and practices. Dverif is not responsible for third-party services or their actions.
                  </p>
                </section>

                {/* Section 14: Disclaimer */}
                <section id="disclaimer" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">14</span>
                    <h2 className="text-2xl font-bold text-foreground">Disclaimer</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif and its services are provided "as is" and "as available" without warranties of any kind, whether express or implied.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, Dverif disclaims all warranties, including but not limited to:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Merchantability",
                      "Fitness for a particular purpose",
                      "Non-infringement",
                      "Reliability",
                      "Availability",
                      "Accuracy"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {i + 1}
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 15: Limitation of Liability */}
                <section id="limitation-of-liability" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">15</span>
                    <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, Dverif, its affiliates, officers, directors, employees, and agents shall not be liable for:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Indirect, incidental, special, or consequential damages",
                      "Loss of profits, data, or business opportunities",
                      "Service interruptions or errors",
                      "Unauthorized access to or alteration of your transmissions or data",
                      "Statements or conduct of any third party on the service"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {i + 1}
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 16: Suspension & Termination */}
                <section id="suspension-termination" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">16</span>
                    <h2 className="text-2xl font-bold text-foreground">Suspension & Termination</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif may suspend or terminate access to the service at any time, with or without cause, with or without notice.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Reasons for suspension or termination may include:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Violation of these Terms",
                      "Suspicious or fraudulent activity",
                      "Security concerns",
                      "Non-payment",
                      "Extended inactivity",
                      "Service discontinuation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {i + 1}
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 17: Changes to Terms */}
                <section id="changes-to-terms" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">17</span>
                    <h2 className="text-2xl font-bold text-foreground">Changes to Terms</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif may update these Terms from time to time.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Continued use of Dverif after changes constitutes acceptance of the updated Terms.
                  </p>
                </section>

                {/* Section 18: Governing Law */}
                <section id="governing-law" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">18</span>
                    <h2 className="text-2xl font-bold text-foreground">Governing Law</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms are governed by applicable laws.
                  </p>
                </section>

                {/* Section 19: Contact */}
                <section id="contact" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">19</span>
                    <h2 className="text-2xl font-bold text-foreground">Contact</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="surface-card rounded-xl p-4 text-center">
                      <Mail className="mx-auto h-6 w-6 text-primary mb-2" />
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-xs text-muted-foreground">contact@dverif.com</p>
                    </div>
                    <div className="surface-card rounded-xl p-4 text-center">
                      <Globe className="mx-auto h-6 w-6 text-primary mb-2" />
                      <p className="text-sm font-medium text-foreground">Company</p>
                      <p className="text-xs text-muted-foreground">{LEGAL_CONFIG.company.name}</p>
                    </div>
                    <div className="surface-card rounded-xl p-4 text-center">
                      <MapPin className="mx-auto h-6 w-6 text-primary mb-2" />
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-xs text-muted-foreground">Kolachi IT Park, Gulshan E Jamal, Rashid Minhas Road, Karachi, Sindh, Pakistan</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sticky Table of Contents */}
              <aside className="hidden lg:block">
                <nav className="sticky top-24 space-y-4">
                  <h3 className="text-sm font-semibold text-foreground">ON THIS PAGE</h3>
                  <ul className="space-y-2 text-sm">
                    {termsSections.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`text-left transition-colors block py-1 ${
                            activeSection === item.id
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {item.number} {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-full flex items-center justify-between rounded-xl border border-border bg-card p-4 text-left"
                >
                  <span className="font-medium text-foreground">Table of Contents</span>
                  <span className="text-muted-foreground">{isMobileMenuOpen ? "−" : "+"}</span>
                </button>
                {isMobileMenuOpen && (
                  <nav className="mt-3 space-y-2 rounded-xl border border-border bg-card p-4">
                    <ul className="space-y-2 text-sm">
                      {termsSections.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className={`text-left transition-colors block py-1 ${
                              activeSection === item.id
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                          >
                            {item.number} {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="section-y">
        <div className="container-page">
          <div className="surface-card relative overflow-hidden rounded-2xl p-6 sm:p-9 lg:p-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary" />
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight">Still have questions?</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
                Need help understanding our terms? Our team is here to help.
              </p>
              <Link to="/contact">
                <Button className="mt-7 btn-primary-glow h-12 rounded-xl px-6 font-semibold">
                  Contact Support <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
