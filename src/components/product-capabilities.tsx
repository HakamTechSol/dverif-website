import {
  Bell,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  CreditCard,
  FileCheck2,
  FileText,
  KeyRound,
  LayoutDashboard,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const journeys = [
  "Org signs up → picks a plan → invites team.",
  "Employee clocks attendance, requests leave, views payslips.",
  "Org issues a Verified Certificate → employee shares the QR/PDF.",
  "Any verifier scans the QR → instant, tamper-proof confirmation.",
];

const capabilities = [
  { icon: KeyRound, title: "Authentication & Security", points: ["Email + password login with OTP (one-time-password) verification.", "JWT access tokens with rotating refresh tokens (blacklist on logout).", "Forgot / reset / set password flows with secure email links.", "Rate limiting, Helmet headers, CORS allow-listing, and input validation.", "Role-based access: Super Admin, Org Admin, Employee.", "Audit logging of sensitive actions and full login history tracking."] },
  { icon: Building2, title: "Organizations (Multi-Tenant)", points: ["Each organization is isolated with its own members, data, branding (logo), and subscription plan.", "Org Admin dashboard to manage the team, templates, and settings."] },
  { icon: UsersRound, title: "Employee & Team Management", points: ["Create and manage employee profiles with document uploads.", "Organization-scoped employee directory and org-admin controls."] },
  { icon: CalendarDays, title: "Attendance & Leave Management", points: ["Clock-in / clock-out and attendance tracking per employee and per org.", "Org-level attendance views and reporting.", "Request and approve leaves with balance tracking.", "Employee and Org-Admin leave dashboards."] },
  { icon: FileText, title: "Payroll & Salary", points: ["Salary records and auto-generated payslip PDFs.", "Payroll dashboard for employees and org admins."] },
  { icon: ChartNoAxesCombined, title: "Dashboard, Analytics & i18n", points: ["Charts and KPIs for attendance, leaves, verifications, and organization health.", "Built-in i18n with English and Urdu locales."] },
  { icon: FileCheck2, title: "Verification & Certificates", featured: true, points: ["Generate verification certificates (employment, attendance, salary) rendered as PDF with an embedded QR code.", "Public /verify/:qrToken page lets anyone scan & verify a certificate instantly — tamper detection included.", "Verification request inbox and request lifecycle (pending → verified)."] },
  { icon: LayoutDashboard, title: "Dynamic Templates & Requests", points: ["Org Admins build custom request templates with configurable fields.", "Employees submit requests against templates; data rendered dynamically."] },
  { icon: Bell, title: "Notifications", points: ["In-app notifications for requests, verifications, and approvals."] },
  { icon: CreditCard, title: "Payments & Subscriptions", points: ["Payment gateway integration, plans, and subscription gating (SubscriptionLocked UI when a plan expires).", "Admin payments dashboard and plan management."] },
  { icon: ShieldCheck, title: "Leads & Admin Console", points: ["Super-admin lead capture and management.", "Admin dashboards: users, organizations, payments, activity logs, unresponsive orgs, and null-request monitoring."] },
];

export function ProductJourney() {
  return (
    <section className="enterprise-light py-12 lg:py-16">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <div className="section-kicker">One connected platform</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">From your organization to instant verification.</h2>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {journeys.map((journey, index) => (
              <li key={journey} className="surface-card flex gap-4 rounded-2xl p-5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">{index + 1}</span>
                <span className="text-sm leading-6 text-muted-foreground">{journey}</span>
              </li>
            ))}
          </ol>
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
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, points, featured }) => (
            <article key={title} className={`relative rounded-2xl border p-6 ${featured ? "border-primary bg-primary/5 shadow-[var(--shadow-glow)] md:col-span-2 xl:col-span-2" : "border-border bg-card shadow-sm"}`}>
              {featured && <div className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Flagship</div>}
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {points.map((point) => <li key={point} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
