import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Search, HelpCircle, Shield, Users, FileCheck, Clock, DollarSign, Globe, CreditCard, Lock, HeadphonesIcon, FileText, BarChart, LayoutDashboard, Calendar } from "lucide-react";
import { useState, useMemo } from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { LEGAL_CONFIG } from "@/config/legal";

const FAQ_CATEGORIES = [
  { id: "All", label: "All", icon: HelpCircle, description: "All questions" },
  { id: "General", label: "General", icon: HelpCircle, description: "Getting started with Dverif" },
  { id: "Account & Security", label: "Account & Security", icon: Shield, description: "Keep your Dverif account and organization secure" },
  { id: "Verification", label: "Verification", icon: FileCheck, description: "Document verification services and workflows" },
  { id: "Employees & Teams", label: "Employees & Teams", icon: Users, description: "Team and employee management" },
  { id: "Attendance & Leave", label: "Attendance & Leave", icon: Calendar, description: "Attendance tracking and leave management" },
  { id: "Payroll & Salary", label: "Payroll & Salary", icon: DollarSign, description: "Salary and payroll features" },
  { id: "Documents", label: "Documents", icon: FileText, description: "Document management and review" },
  { id: "Dashboard & Analytics", label: "Dashboard & Analytics", icon: BarChart, description: "Dashboard and insights" },
  { id: "Templates & Requests", label: "Templates & Requests", icon: LayoutDashboard, description: "Custom templates and requests" },
  { id: "Languages", label: "Languages", icon: Globe, description: "Language support" },
  { id: "Payments & Subscriptions", label: "Payments & Subscriptions", icon: CreditCard, description: "Plans and billing" },
  { id: "Privacy", label: "Privacy", icon: Lock, description: "Privacy and data protection" },
  { id: "Support", label: "Support", icon: HeadphonesIcon, description: "Help and support" },
] as const;

const FAQ_ITEMS = [
  {
    category: "General",
    q: "What is Dverif?",
    a: "Dverif is an organization management and verification platform designed to help businesses manage verification workflows, employees, teams, documents, attendance, leave, payroll-related information, requests, and administrative operations from one place.",
  },
  {
    category: "General",
    q: "Who can use Dverif?",
    a: "Dverif is designed for organizations, businesses, administrators, HR teams, managers, and authorized employees who need a centralized platform for managing organizational workflows.",
  },
  {
    category: "General",
    q: "What can I manage with Dverif?",
    a: "Depending on your plan, Dverif can help manage employee and team information, verification requests, documents, verification certificates, attendance, leave requests, payroll and salary-related information, multiple administrators, dashboards, analytics, templates, requests, payments, subscriptions, leads, and language preferences.",
  },
  {
    category: "Account & Security",
    q: "How do I create a Dverif account?",
    a: "You can create an account through the Dverif registration process. You may need to provide basic information such as your name, email address, and organization details.",
  },
  {
    category: "Account & Security",
    q: "Is Dverif secure?",
    a: "Dverif is designed with security and controlled access in mind. Access permissions and administrative controls help organizations manage who can access different areas of the platform.",
  },
  {
    category: "Account & Security",
    q: "Can I have multiple administrators?",
    a: "Yes. Dverif supports multi-admin access, allowing organizations to assign administrative responsibilities to multiple authorized users.",
  },
  {
    category: "Account & Security",
    q: "Can I control what employees can access?",
    a: "Yes. Dverif provides roles and access controls that can be used to manage what different users or administrators can access, depending on account configuration.",
  },
  {
    category: "Verification",
    q: "What is a verification request?",
    a: "A verification request allows an authorized user or organization to submit information or documents for a verification-related workflow and track its progress.",
  },
  {
    category: "Verification",
    q: "Can I track verification requests?",
    a: "Yes. Dverif provides tools for managing and tracking verification requests and their status.",
  },
  {
    category: "Verification",
    q: "Does Dverif provide verification certificates?",
    a: "Dverif supports verification certificate workflows where enabled by your organization or subscription plan.",
  },
  {
    category: "Verification",
    q: "Can I review submitted documents?",
    a: "Yes. Dverif includes document review functionality that allows authorized users to review documents submitted through supported workflows.",
  },
  {
    category: "Employees & Teams",
    q: "Can I manage employees through Dverif?",
    a: "Yes. Organizations can use Dverif to manage employee and team-related information from a centralized platform.",
  },
  {
    category: "Employees & Teams",
    q: "Can I organize employees into teams?",
    a: "Yes. Team management features allow organizations to organize and manage team members according to their organizational structure.",
  },
  {
    category: "Employees & Teams",
    q: "Can different administrators have different access?",
    a: "Yes. Access can be controlled through roles and permissions so authorized administrators receive appropriate levels of access.",
  },
  {
    category: "Attendance & Leave",
    q: "Does Dverif support attendance tracking?",
    a: "Yes. Dverif includes attendance tracking functionality for organizations that use the feature.",
  },
  {
    category: "Attendance & Leave",
    q: "Can employees submit leave requests?",
    a: "Yes. Dverif supports leave request workflows where employees can submit requests and authorized users can manage them.",
  },
  {
    category: "Attendance & Leave",
    q: "Can managers review leave requests?",
    a: "Yes. Authorized managers or administrators can review and manage leave requests according to configured permissions.",
  },
  {
    category: "Payroll & Salary",
    q: "Does Dverif support payroll management?",
    a: "Dverif includes payroll and salary management functionality for organizations where the feature is enabled.",
  },
  {
    category: "Payroll & Salary",
    q: "Can employee salary information be managed?",
    a: "Authorized users may manage salary-related information according to their organization's permissions and subscription configuration. Organizations remain responsible for ensuring payroll practices comply with applicable laws.",
  },
  {
    category: "Documents",
    q: "What types of documents can I upload?",
    a: "The types of documents supported may depend on the verification workflow and account configuration.",
  },
  {
    category: "Documents",
    q: "Who can see uploaded documents?",
    a: "Document access is controlled through user roles and permissions. Only authorized users should have access to sensitive organizational information.",
  },
  {
    category: "Documents",
    q: "Can documents be reviewed before approval?",
    a: "Yes. Dverif provides document review functionality as part of supported workflows.",
  },
  {
    category: "Dashboard & Analytics",
    q: "Does Dverif provide analytics?",
    a: "Yes. Dverif provides dashboards and analytics to help organizations monitor relevant organizational activities and workflows.",
  },
  {
    category: "Dashboard & Analytics",
    q: "What can I see on the dashboard?",
    a: "Information available depends on your role, permissions, and subscription. Dashboards may provide insights into verification requests, employees, attendance, leave, and other organizational activities.",
  },
  {
    category: "Templates & Requests",
    q: "Can I create custom templates?",
    a: "Dverif provides dynamic template functionality where organizations can create and manage templates according to supported features.",
  },
  {
    category: "Templates & Requests",
    q: "Can I manage different types of requests?",
    a: "Yes. Dverif provides request-management functionality designed to help organizations create, track, and manage different workflows.",
  },
  {
    category: "Languages",
    q: "Does Dverif support multiple languages?",
    a: "Dverif includes language support designed to make the platform accessible to users with different language preferences. Available languages may depend on the current version of the platform.",
  },
  {
    category: "Payments & Subscriptions",
    q: "Does Dverif offer paid plans?",
    a: "Dverif may offer different subscription plans depending on the organization's requirements.",
  },
  {
    category: "Payments & Subscriptions",
    q: "How can I manage my subscription?",
    a: "Subscription and payment management can be handled through the billing functionality available to your account.",
  },
  {
    category: "Payments & Subscriptions",
    q: "Can I cancel my subscription?",
    a: "Yes. Subscription cancellation is subject to the applicable plan and billing terms.",
  },
  {
    category: "Privacy",
    q: "Does Dverif sell my personal information?",
    a: "No. Dverif does not sell personal information. Information may be processed or shared with service providers where necessary to operate the platform, provide services, maintain security, process payments, or comply with legal obligations.",
  },
  {
    category: "Privacy",
    q: "How does Dverif protect my information?",
    a: "Dverif uses reasonable technical and organizational measures designed to protect information against unauthorized access, misuse, loss, and disclosure.",
  },
  {
    category: "Privacy",
    q: "Can I request deletion of my information?",
    a: "Depending on applicable law and whether information is controlled by you or your organization, you may be able to request access, correction, or deletion of personal information.",
  },
  {
    category: "Support",
    q: "How can I contact Dverif support?",
    a: "You can contact the Dverif support team at: contact@dverif.com",
  },
  {
    category: "Support",
    q: "What should I do if I cannot access my account?",
    a: "Use the account recovery/password reset option available on the login page. If you still cannot access your account, contact Dverif support.",
  },
  {
    category: "Support",
    q: "What should I do if I notice unauthorized activity?",
    a: "Immediately secure your account by changing your password and contact Dverif support so the issue can be investigated.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Dverif FAQ" },
      { name: "description", content: "Find answers to common questions about Dverif verification, employee management, attendance, payroll, security, and more." },
      { name: "keywords", content: "document verification FAQ, verification questions, Dverif FAQ, document verification help, verification process, secure verification questions" },
      { property: "og:title", content: "FAQ — Dverif Document Verification" },
      { property: "og:description", content: "Find answers to common questions about Dverif verification, employee management, attendance, payroll, security, and more." },
      { property: "og:url", content: "https://dverif.com/faq" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FAQ — Dverif Document Verification" },
      { name: "twitter:description", content: "Find answers to common questions about Dverif verification, employee management, attendance, payroll, security, and more." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://dverif.com/faq" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesSearch = 
        searchQuery === "" || 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "All" || 
        item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const selectedCategoryData = FAQ_CATEGORIES.find(cat => cat.id === selectedCategory);

  return (
    <SiteLayout>
      {/* Premium Hero Section */}
      <section className="enterprise-dark pb-8 pt-12 sm:pb-10 sm:pt-14 lg:pt-16">
        <div className="container-page animate-fade-up text-center">
          <div className="section-kicker">HELP CENTER</div>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about Dverif, verification, employee management, security, attendance, payroll, and more.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-band section-y pt-4 sm:pt-6">
        <div className="container-page">
          <div className="section-frame p-5 sm:p-8 lg:p-10">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search your question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-12 rounded-xl border-border/80 bg-background/70 shadow-sm focus-visible:border-[#4F8CFF] focus-visible:ring-4 focus-visible:ring-[#4F8CFF]/15 text-base"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {FAQ_CATEGORIES.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? "bg-primary text-white shadow-lg"
                          : "bg-background/70 text-muted-foreground hover:text-foreground hover:bg-accent border border-border/50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Description */}
            {selectedCategoryData && selectedCategory !== "All" && (
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">{selectedCategoryData.description}</p>
              </div>
            )}

            {/* FAQ Accordion */}
            {filteredFAQs.length === 0 ? (
              <div className="surface-card rounded-2xl p-12 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No questions found</h3>
                <p className="text-muted-foreground">Try searching with a different keyword or selecting a different category.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {FAQ_CATEGORIES.filter(cat => cat.id !== "All").map((category) => {
                  const categoryQuestions = filteredFAQs.filter(item => item.category === category.id);
                  if (categoryQuestions.length === 0) return null;
                  
                  const Icon = category.icon;
                  
                  return (
                    <div key={category.id} className="space-y-4">
                      {/* Category Header */}
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{category.label}</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>

                      {/* Category Questions */}
                      <div className="surface-card rounded-2xl p-3 sm:p-4">
                        <Accordion type="single" collapsible className="w-full divide-y divide-border">
                          {categoryQuestions.map((item, index) => (
                            <AccordionItem 
                              key={`${category.id}-${index}`} 
                              value={`faq-${category.id}-${index}`}
                              className="border-0"
                            >
                              <AccordionTrigger className="py-4 px-4 text-left text-base font-semibold hover:no-underline hover:bg-accent/50 rounded-lg transition-colors">
                                {item.q}
                              </AccordionTrigger>
                              <AccordionContent className="pb-4 px-4 text-sm leading-6 text-muted-foreground">
                                {item.a}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="section-y">
        <div className="container-page">
          <div className="surface-card relative overflow-hidden rounded-2xl p-6 sm:p-9 lg:p-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary" />
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight">Can't find what you're looking for?</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
                Talk to our team and we'll help you find the right answer.
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
