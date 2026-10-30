import {
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  CreditCard,
  FileCheck2,
  FileText,
  KeyRound,
  LayoutDashboard,
  ShieldCheck,
  FileSearch,
  UsersRound,
  BriefcaseBusiness,
  UserRoundPlus,
  UserRoundMinus,
  Receipt,
  FileSignature
} from "lucide-react";
import { useState } from "react";

import onboardingImg from "@/assets/journey-images/onboarding.png";
import pricingImg from "@/assets/journey-images/pricing.png";
import requestImg from "@/assets/journey-images/request.png";
import verificationImg from "@/assets/journey-images/Emailverification.jpeg";

const journeys = [
  { text: "Onboarding", description: "Get started by setting up your organization profile in minutes", image: onboardingImg },
  { text: "Plan Selection", description: "Choose the plan that fits your verification needs", image: pricingImg },
  { text: "Request Addition", description: "Add and submit your verification requests easily", image: requestImg },
  { text: "Verification", description: "Get your documents verified securely and instantly", image: verificationImg },
];

const capabilities = [
  { icon: KeyRound, title: "Authentication & Security", points: ["Email + password login with OTP (one-time-password) verification.", "JWT access tokens with rotating refresh tokens (blacklist on logout).", "Forgot / reset / set password flows with secure email links.", "Rate limiting, Helmet headers, CORS allow-listing, and input validation.", "Role-based access: Super Admin, Org Admin, Employee.", "Audit logging of sensitive actions and full login history tracking."] },
  {
    icon: FileCheck2,
    title: "Verification & Certificates",
    featured: true,
    points: [
      "Generate verification certificates (employment, attendance, salary) rendered as PDF with an embedded QR code.",
      "Public /verify/:qrToken page lets anyone scan & verify a certificate instantly — tamper detection included.",

      // 👇 YAHAN AUTO VERIFICATION ADD KARO
      "Auto Verification: Automatically process eligible verification requests and update verification results, reducing manual intervention.",

      "Verification request inbox and request lifecycle (pending → verified)."
    ]
  },
  { icon: ChartNoAxesCombined, title: "Dashboard, Analytics & i18n", points: ["Charts and KPIs for attendance, leaves, verifications, and organization health.", "Built-in i18n with English and Urdu locales."] },
  { icon: Building2, title: "Organizations (Multi-Tenant)", points: ["Each organization is isolated with its own members, data, branding (logo), and subscription plan.", "Org Admin dashboard to manage the team, templates, and settings."] },
  { icon: UsersRound, title: "Employee & Team Management", points: ["Create and manage employee profiles with document uploads.", "Organization-scoped employee directory and org-admin controls."] },
  { icon: CalendarDays, title: "Attendance & Leave Management", points: ["Clock-in / clock-out and attendance tracking per employee and per org.", "Org-level attendance views and reporting.", "Request and approve leaves with balance tracking.", "Employee and Org-Admin leave dashboards."] },
  { icon: FileText, title: "Payroll & Salary", points: ["Salary records and auto-generated payslip PDFs.", "Payroll dashboard for employees and org admins."] },
  { icon: LayoutDashboard, title: "Dynamic Templates & Requests", points: ["Org Admins build custom request templates with configurable fields.", "Employees submit requests against templates; data rendered dynamically."] },
  { icon: CreditCard, title: "Payments & Subscriptions", points: ["Payment gateway integration, plans, and subscription gating (SubscriptionLocked UI when a plan expires).", "Admin payments dashboard and plan management."] },
  // Add these objects inside your existing capabilities array

  {
    icon: BriefcaseBusiness,
    title: "Recruitment Management",
    points: [
      "Manage recruitment activities and job applicants through a centralized recruitment pipeline.",
      "Track candidate progress through different hiring stages.",
      "Manage interview processes and interview evaluations.",
      "Prepare and send employment offers to selected candidates.",
      "Prevent offer progression when a candidate fails the final interview."
    ]
  },
  {
    icon: UserRoundPlus,
    title: "Employee Onboarding",
    points: [
      "Manage the onboarding process for newly hired employees.",
      "Maintain employee onboarding information and records.",
      "Organize employee documentation during the onboarding process.",
      "Keep employee onboarding activities connected with organization records."
    ]
  },
  {
    icon: UserRoundMinus,
    title: "Employee Offboarding",
    points: [
      "Manage employee offboarding processes within the organization.",
      "Maintain employee exit-related records and documentation.",
      "Organize offboarding information for administrative reference.",
      "Keep employee lifecycle records organized."
    ]
  },
  {
    icon: Receipt,
    title: "Expense Management",
    points: [
      "Manage and organize employee expense records.",
      "Maintain expense-related information within the organization.",
      "Provide administrators with centralized expense management visibility.",
      "Keep expense records accessible for administrative review."
    ]
  },
  {
    icon: FileSignature,
    title: "Letters & Document Templates",
    points: [
      "Manage reusable employment letter and document templates.",
      "Create and organize standardized HR documents.",
      "Generate consistent employee-related documentation.",
      "Keep organizational document templates centralized and accessible."
    ]
  },
  {
    icon: FileSearch,
    title: "Document & Employment Verification",
    points: [
      "Manage document verification requests and their status.",
      "Verify employment-related information through the verification workflow.",
      "Generate digital verification certificates with embedded QR codes.",
      "Allow third parties to verify certificates through a public verification page.",
      "Maintain verification records and request history."
    ]
  },
];

export function ProductJourney() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="how-it-works" className="enterprise-light py-12 lg:py-16 scroll-mt-28">
      <div className="container-page">
        <div className="flex flex-col gap-10">
          <div className="text-center lg:text-left">
            <div className="section-kicker">One Platform that Connects All</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">From your Organization to Instant Verification</h2>
          </div>

          {/* Expanding Cards Layout */}
          <div
            className="flex flex-col gap-4 lg:flex-row lg:h-[350px]"
            onMouseLeave={() => setHoveredIndex(0)}
          >
            {journeys.map(({ text, description, image }, index) => (
              <div
                key={text}
                className={`group relative flex h-60 flex-col cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-out sm:h-72 lg:h-auto ${hoveredIndex === index ? 'lg:flex-[3]' : 'lg:flex-[1]'
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-slate-100">
                  <img
                    src={image}
                    alt={text}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out lg:object-contain lg:group-hover:scale-105"
                  />
                </div>

                {/* Top Gradient Overlay for Title */}
                <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black/50 to-transparent" />

                {/* Title */}
                <div className="relative z-20 p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white">{text}</h3>
                </div>

                {/* Bottom Gradient Overlay for Description */}
                <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Description (Only on expanded card) */}
                <div className={`relative z-20 mt-auto p-6 lg:p-8 transition-all duration-500 ease-out ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'lg:opacity-0 lg:translate-y-4'
                  }`}>
                  <p className="text-base text-white text-center">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductCapabilities() {
  return (
    <section className="enterprise-light section-y">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-kicker">Platform capabilities</div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Everything your organization needs in one place.</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {capabilities.map(({ icon: Icon, title, points, featured }) => (
            <article key={title} className={`relative rounded-2xl border p-6 h-fit ${featured ? "border-primary bg-primary/5 shadow-[var(--shadow-glow)]" : "border-border bg-card shadow-sm"}`}>
              {featured && <div className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Flagship</div>}
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground mb-0">
                {points.map((point) => <li key={point} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
