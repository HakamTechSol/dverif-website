import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Shield, User, FileText, Server, Lock, Mail, Phone, MapPin, Eye, Cookie, Database, AlertCircle, CheckCircle2, XCircle, Key, Globe, UserCheck } from "lucide-react";
import { LEGAL_CONFIG } from "@/config/legal";
import { useState, useEffect } from "react";

const privacySections = [
  { id: "introduction", number: "01", title: "Introduction" },
  { id: "information-we-collect", number: "02", title: "Information We Collect" },
  { id: "how-we-use-information", number: "03", title: "How We Use Information" },
  { id: "information-sharing", number: "04", title: "Information Sharing" },
  { id: "organization-controlled-information", number: "05", title: "Organization-Controlled Information" },
  { id: "data-security", number: "06", title: "Data Security" },
  { id: "data-retention", number: "07", title: "Data Retention" },
  { id: "cookies-similar-technologies", number: "08", title: "Cookies & Similar Technologies" },
  { id: "your-privacy-rights", number: "09", title: "Your Privacy Rights" },
  { id: "childrens-privacy", number: "10", title: "Children's Privacy" },
  { id: "third-party-services", number: "11", title: "Third-Party Services" },
  { id: "changes", number: "12", title: "Changes to This Policy" },
  { id: "contact", number: "13", title: "Contact" },
] as const;

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Dverif Privacy Policy" },
      { name: "description", content: "Learn how Dverif collects, uses, protects, and manages information across its platform." },
      { name: "keywords", content: "privacy policy, data protection, document verification privacy, secure verification, data security, Dverif privacy" },
      { property: "og:title", content: "Privacy Policy — Dverif" },
      { property: "og:description", content: "Learn how Dverif collects, uses, protects, and manages information across its platform." },
      { property: "og:url", content: "https://dverif.com/privacy-policy" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy — Dverif" },
      { name: "twitter:description", content: "Learn how Dverif collects, uses, protects, and manages information across its platform." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/privacy-policy" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = privacySections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
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
          <div className="section-kicker">PRIVACY & TRUST</div>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Your privacy matters. Learn how Dverif collects, uses, protects, and manages your information.
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
                {/* Section 1: Introduction */}
                <section id="introduction" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">01</span>
                    <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to Dverif ("Dverif", "we", "us", or "our"). We respect your privacy and are committed to protecting the information you provide when using our website, platform, products, and services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices available to you.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Dverif, you agree to the practices described in this Privacy Policy.
                  </p>
                </section>

                {/* Section 2: Information We Collect */}
                <section id="information-we-collect" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">02</span>
                    <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide secure verification and organization management services, Dverif may collect different types of information.
                  </p>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                          <User className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">Account Information</h3>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Full name</li>
                        <li>• Email address</li>
                        <li>• Phone number</li>
                        <li>• Organization/company name</li>
                        <li>• Job title or role</li>
                        <li>• Login credentials</li>
                        <li>• Account preferences</li>
                      </ul>
                    </div>

                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                          <UserCheck className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">Employee & Organization Data</h3>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Employee information</li>
                        <li>• Departments and designation</li>
                        <li>• Attendance information</li>
                        <li>• Leave information</li>
                        <li>• Payroll-related information</li>
                        <li>• Roles and permissions</li>
                      </ul>
                    </div>

                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                          <FileText className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">Verification & Document Data</h3>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Verification requests</li>
                        <li>• Uploaded documents</li>
                        <li>• Verification certificates</li>
                        <li>• Supporting information</li>
                        <li>• Verification history</li>
                      </ul>
                    </div>

                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                          <Server className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">Technical Information</h3>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• IP address</li>
                        <li>• Browser type</li>
                        <li>• Device information</li>
                        <li>• Operating system</li>
                        <li>• Login activity</li>
                        <li>• Usage information</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="surface-card rounded-xl p-4 bg-primary/5 border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> Users should only submit information they are authorized to provide.
                    </p>
                  </div>
                </section>

                {/* Section 3: How We Use Information */}
                <section id="how-we-use-information" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">03</span>
                    <h2 className="text-2xl font-bold text-foreground">How We Use Information</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We may use collected information to provide and improve our services, ensure security, and comply with legal obligations.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Provide and operate Dverif services",
                      "Create and manage user accounts",
                      "Process verification requests",
                      "Review and manage documents",
                      "Manage employees and teams",
                      "Manage attendance and leave",
                      "Support payroll and salary features",
                      "Provide administrative access",
                      "Provide dashboards and analytics",
                      "Process subscriptions and payments",
                      "Provide customer support",
                      "Improve platform and services",
                      "Detect and prevent fraud",
                      "Maintain platform security",
                      "Communicate service updates",
                      "Comply with legal obligations"
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

                {/* Section 4: Information Sharing */}
                <section id="information-sharing" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">04</span>
                    <h2 className="text-2xl font-bold text-foreground">Information Sharing</h2>
                  </div>
                  
                  <div className="surface-card rounded-xl p-5 bg-primary/5 border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Shield className="h-5 w-5" />
                      </div>
                      <p className="font-semibold text-foreground">We do not sell your personal information.</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    We may share information when reasonably necessary with:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Authorized members of your organization",
                      "Service providers that help us operate Dverif",
                      "Payment and subscription providers",
                      "Hosting and infrastructure providers",
                      "Security and fraud-prevention providers",
                      "Professional advisers",
                      "Government authorities when legally required"
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

                {/* Section 5: Organization-Controlled Information */}
                <section id="organization-controlled-information" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">05</span>
                    <h2 className="text-2xl font-bold text-foreground">Organization-Controlled Information</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    If you use Dverif through an organization, your organization may control certain information entered into the platform.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Organization administrators may be able to access or manage:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Employee information",
                      "Attendance records",
                      "Leave records",
                      "Documents",
                      "Verification requests",
                      "Payroll-related information",
                      "Team and user permissions"
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

                {/* Section 6: Data Security */}
                <section id="data-security" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">06</span>
                    <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
                  </div>
                  
                  <div className="surface-card rounded-xl p-5 bg-primary/5 border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Lock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Your information matters</p>
                        <p className="text-sm text-muted-foreground mt-1">We take reasonable technical and organizational measures to protect information against unauthorized access, misuse, loss, and disclosure.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    We protect information against:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Unauthorized access",
                      "Unauthorized disclosure",
                      "Loss",
                      "Misuse",
                      "Alteration",
                      "Destruction"
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
                      <strong className="text-foreground">Note:</strong> No online system can be guaranteed to be completely secure. Users are responsible for protecting their account credentials.
                    </p>
                  </div>
                </section>

                {/* Section 7: Data Retention */}
                <section id="data-retention" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">07</span>
                    <h2 className="text-2xl font-bold text-foreground">Data Retention</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain information only for as long as reasonably necessary to:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Provide our services",
                      "Maintain business records",
                      "Meet contractual requirements",
                      "Resolve disputes",
                      "Prevent fraud and abuse",
                      "Comply with applicable laws"
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

                {/* Section 8: Cookies */}
                <section id="cookies-similar-technologies" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">08</span>
                    <h2 className="text-2xl font-bold text-foreground">Cookies & Similar Technologies</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif may use cookies and similar technologies to:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Keep users signed in",
                      "Remember preferences",
                      "Improve website performance",
                      "Understand user interactions",
                      "Maintain security",
                      "Analyze platform usage"
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

                {/* Section 9: Your Privacy Rights */}
                <section id="your-privacy-rights" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">09</span>
                    <h2 className="text-2xl font-bold text-foreground">Your Privacy Rights</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Depending on applicable law, users may have rights regarding personal information.
                  </p>
                  
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary mb-3">
                        <Eye className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Access</h3>
                      <p className="text-sm text-muted-foreground">Request access to your information.</p>
                    </div>

                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary mb-3">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Correction</h3>
                      <p className="text-sm text-muted-foreground">Request correction of inaccurate information.</p>
                    </div>

                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary mb-3">
                        <XCircle className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Deletion</h3>
                      <p className="text-sm text-muted-foreground">Request deletion where legally applicable.</p>
                    </div>

                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary mb-3">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Restriction</h3>
                      <p className="text-sm text-muted-foreground">Request restriction of certain processing.</p>
                    </div>

                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary mb-3">
                        <Shield className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Objection</h3>
                      <p className="text-sm text-muted-foreground">Object to certain processing where applicable.</p>
                    </div>

                    <div className="surface-card rounded-xl p-5 transition-all hover:shadow-lg card-hover">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary mb-3">
                        <Database className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Portability</h3>
                      <p className="text-sm text-muted-foreground">Request a copy of certain information.</p>
                    </div>
                  </div>
                </section>

                {/* Section 10: Children's Privacy */}
                <section id="childrens-privacy" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">10</span>
                    <h2 className="text-2xl font-bold text-foreground">Children's Privacy</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif is intended for businesses, organizations, and authorized users and is not intended for children who are not legally permitted to use such services.
                  </p>
                </section>

                {/* Section 11: Third-Party Services */}
                <section id="third-party-services" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">11</span>
                    <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Dverif may integrate with third-party services. Those services may have their own privacy policies and terms.
                  </p>
                </section>

                {/* Section 12: Changes */}
                <section id="changes-to-privacy-policy" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">12</span>
                    <h2 className="text-2xl font-bold text-foreground">Changes to This Privacy Policy</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time.
                  </p>
                </section>

                {/* Section 13: Contact */}
                <section id="contact-us" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">13</span>
                    <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
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
                    {privacySections.map((item) => (
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
                      {privacySections.map((item) => (
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
                Need help understanding our privacy policy? Our team is here to help.
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
