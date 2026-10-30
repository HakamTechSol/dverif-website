import { useEffect, useState } from "react";
import {
  FileCheck2,
  FileText,
  Inbox,
  LayoutDashboard,
  LogOut,
  UsersRound,
  CreditCard,
  LucideIcon,
} from "lucide-react";

import { useInView } from "@/hooks/use-in-view";

import expenseImg from "@/assets/journey-images/expense.jpeg";
import expenseCategoryImg from "@/assets/journey-images/expense1.jpeg";
import expenseCategoriesImg from "@/assets/journey-images/expense3.jpeg";
import expenseCategoryEditImg from "@/assets/journey-images/expense4.jpeg";

import experienceLettersImg from "@/assets/journey-images/letter-templete2.jpeg";
import newLetterImg from "@/assets/journey-images/letter-templete3.jpeg";
import letterTemplatesImg from "@/assets/journey-images/letter-templete.jpeg";
import newTemplateImg from "@/assets/journey-images/letter-templete1.jpeg";

import offboardingImg from "@/assets/journey-images/offboarding.jpeg";
import recruitmentPipelineImg from "@/assets/journey-images/recruitment.jpeg";
import recruitmentInterviewImg from "@/assets/journey-images/recruitment1.jpeg";
import employeeRequestsImg from "@/assets/journey-images/request.png";
import verificationImg from "@/assets/journey-images/Emailverification.jpeg";

type Shot = {
  src: string;
  alt: string;
};

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  body: string;
  images: Shot[];
  points?: string[];
};

/* Existing verification-related features */
export const featureItems: FeatureItem[] = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Overview",
    body: "Track organizations, requests, unmatched cases and turnaround time in a single view — filterable by team, status and issuer.",
    images: [
      {
        src: "/assets/dashboard.png.jpeg",
        alt: "DVerif dashboard overview",
      },
    ],
  },
  {
    icon: FileCheck2,
    title: "Verification Requests",
    body: "Send structured requests to issuers. Every action is logged and every result is signed and audit-ready.",
    images: [
      {
        src: "/assets/request2.png.jpeg",
        alt: "DVerif send verification request screen",
      },
      {
        src: "/assets/request.png.jpeg",
        alt: "DVerif received verification requests screen",
      },
    ],
  },
  {
    icon: Inbox,
    title: "Inbox (Review Workflow)",
    body: "Issuer and verifier conversations live in one place. Search across every case without digging through email.",
    images: [
      {
        src: "/assets/inbox.png.jpeg",
        alt: "DVerif inbox review workflow",
      },
    ],
  },
  {
    icon: FileText,
    title: "Document Review",
    body: "Review document details, issuer records and verification checks before marking a request complete.",
    images: [
      {
        src: "/assets/doc.png.jpeg",
        alt: "DVerif document review screen",
      },
    ],
  },
];

/* Existing platform features */

const pageFeatureItems: FeatureItem[] = [
  {
    icon: LayoutDashboard,
    title: "Secure Sign In",
    body: "Protect your organization's access with a secure authentication system. DVerif provides a straightforward sign-in experience while supporting additional account security.",
    images: [
      {
        src: "/assets/login.jpeg",
        alt: "DVerif login screen",
      },
    ],
    points: [
      "Email and password-based authentication.",
      "OTP verification for additional account security.",
      "Secure password reset and account recovery.",
      "Role-based access for Super Admins, Organization Admins and Employees.",
    ],
  },
  {
    icon: FileCheck2,
    title: "Verification Requests",
    body: "Create and manage verification requests through a structured workflow. Keep track of submitted requests and their progress from a centralized interface.",
    images: [
      {
        src: "/assets/verification-request.jpeg",
        alt: "DVerif verification request screen",
      },
    ],
    points: [
      "Create and submit structured verification requests.",
      "Track request progress and verification status.",
      "Manage incoming and outgoing verification requests.",
      "Keep verification activities organized for easier follow-up.",
      "Auto Verification: Automatically process verification requests and update verification results, reducing manual effort and speeding up the verification workflow.",
    ],
  },
  {
    icon: Inbox,
    title: "Inbox",
    body: "Manage verification-related communication and requests from one centralized inbox. Keep important updates and review activities organized.",
    images: [
      {
        src: "/assets/inbox.jpeg",
        alt: "DVerif inbox screen",
      },
    ],
    points: [
      "View incoming verification requests and updates.",
      "Keep communication and review activities organized.",
      "Access relevant request information from one place.",
      "Make it easier to follow up on pending verification activities.",
    ],
  },
  {
    icon: FileText,
    title: "Document Review",
    body: "Review submitted documents and their associated verification information. Keep document review activities organized before completing a verification request.",
    images: [
      {
        src: "/assets/documentreviwe.jpeg",
        alt: "DVerif document review screen",
      },
    ],
    points: [
      "Review submitted employee documents.",
      "Access document details and related verification information.",
      "Check available issuer records and verification results.",
      "Maintain a structured document review workflow.",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Admin Access",
    body: "Allow multiple authorized administrators to manage an organization. Give team members appropriate access according to their assigned responsibilities.",
    images: [
      {
        src: "/assets/multiadmin.jpeg",
        alt: "DVerif multi-admin management screen",
      },
    ],
    points: [
      "Manage multiple administrators within an organization.",
      "Assign role-based access to team members.",
      "Separate administrative responsibilities.",
      "Keep organization management centralized.",
    ],
  },
  {
    icon: FileCheck2,
    title: "Attendance Tracking",
    body: "Maintain employee attendance records through a centralized attendance management system. Give employees and administrators access to relevant attendance information.",
    images: [
      {
        src: "/assets/attendence.jpeg",
        alt: "DVerif attendance tracking screen",
      },
    ],
    points: [
      "Record employee clock-in and clock-out activity.",
      "Maintain attendance records for each employee.",
      "View organization-level attendance information.",
      "Support attendance monitoring and reporting.",
    ],
  },
  {
    icon: FileText,
    title: "Leave Requests",
    body: "Simplify employee leave management with a structured request and approval workflow. Employees can submit leave requests while administrators manage and review them.",
    images: [
      {
        src: "/assets/leaverequest1.jpeg",
        alt: "DVerif leave request overview",
      },
      {
        src: "/assets/leaverequest2.jpeg",
        alt: "DVerif leave request details",
      },
    ],
    points: [
      "Allow employees to submit leave requests.",
      "Review and manage employee leave applications.",
      "Approve or reject leave requests.",
      "Maintain leave balances and employee leave records.",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Salary Management",
    body: "Organize employee salary information and payroll records in one place. Make salary-related information accessible through dedicated employee and administrator dashboards.",
    images: [
      {
        src: "/assets/salarymanagment.jpeg",
        alt: "DVerif salary management screen",
      },
    ],
    points: [
      "Maintain employee salary records.",
      "Generate employee payslip PDFs.",
      "Access payroll information through dedicated dashboards.",
      "Keep salary-related records organized within the organization.",
    ],
  },
  {
    icon: Inbox,
    title: "Language Support",
    body: "Make DVerif accessible to a wider range of users with built-in multilingual support. Users can work with the platform in their preferred supported language.",
    images: [
      {
        src: "/assets/langugesupport.jpeg",
        alt: "DVerif language support screen",
      },
    ],
    points: [
      "Built-in English language support.",
      "Built-in Urdu language support.",
      "Provide a more accessible experience for different users.",
      "Support multilingual employee and administrative workflows.",
    ],
  },
];


/* HR and employee lifecycle features */
const hrFeatureItems: FeatureItem[] = [
  {
    icon: UsersRound,
    title: "Recruitment Management",
    body: "Manage open roles and move candidates through a visible hiring pipeline.",
    images: [
      {
        src: recruitmentPipelineImg,
        alt: "Recruitment candidate pipeline across hiring stages",
      },
      {
        src: recruitmentInterviewImg,
        alt: "Recruitment pipeline with a candidate in the interview stage",
      },
    ],
    points: [
      "Keep candidate records organized by opening.",
      "Track candidates from applied through screening, interview, selection and offer.",
      "Search candidates and review interview and offer tabs.",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Employee Onboarding",
    body: "Bring new hires into your organization with a managed employee record and account access.",
    images: [
      {
        src: "/assets/teampage.jpeg",
        alt: "DVerif employee directory with an Add Employee action",
      },
    ],
    points: [
      "Add employee records to your organization directory.",
      "Search employee records by name, email or other identifying details.",
      "Promote an employee to create a platform user.",
      "Keep employee management within your organization.",
    ],
  },
  {
    icon: LogOut,
    title: "Employee Offboarding",
    body: "Coordinate exit requests and clearance steps for resignations and terminations.",
    images: [
      {
        src: offboardingImg,
        alt: "Offboarding exit requests, clearances and clearance settings",
      },
    ],
    points: [
      "Record resignation or termination exit requests.",
      "Search requests and filter them by status.",
      "Review clearances and configure clearance settings.",
      "Support clearance and final-settlement steps.",
    ],
  },
  {
    icon: FileCheck2,
    title: "Document Verification",
    body: "Review verification outcomes and give employees a clear way to access verified records.",
    images: [
      {
        src: verificationImg,
        alt: "DVerif email confirming a document has been verified",
      },
    ],
    points: [
      "Submit documents for verification through a request workflow.",
      "Receive confirmation when a document is verified.",
      "Direct employees to the verified record and certificate in the portal.",
    ],
  },
  {
    icon: FileText,
    title: "Experience Verification",
    body: "Issue experience letters that employees can share as verifiable records.",
    images: [
      {
        src: experienceLettersImg,
        alt: "DVerif HR letters list with draft, issued and revoked filters",
      },
      {
        src: newLetterImg,
        alt: "DVerif form for creating an HR letter draft from a template",
      },
    ],
    points: [
      "Create experience letters from employee and template details.",
      "Prepare a draft and review it before issuing.",
      "Generate an issued, verifiable PDF.",
      "Search letters and filter by draft, issued or revoked status.",
    ],
  },
  {
    icon: CreditCard,
    title: "Expense Management",
    body: "Set claim rules and review employee expenses through clear status-based workflows.",
    images: [
      {
        src: expenseImg,
        alt: "Expense claims with pending, approved, paid and rejected filters",
      },
      {
        src: expenseCategoryImg,
        alt: "Expense category form with a claim limit and receipt requirement",
      },
      {
        src: expenseCategoriesImg,
        alt: "Expense category management view",
      },
      {
        src: expenseCategoryEditImg,
        alt: "Expense category setup with receipt requirements",
      },
    ],
    points: [
      "Organize claims into configurable expense categories.",
      "Set a maximum claim amount and whether a receipt is required.",
      "Review claims by pending, approved, paid or rejected status.",
      "Manage active and removed categories.",
    ],
  },
  {
    icon: FileText,
    title: "Letter & Document Templates",
    body: "Build reusable HR letter templates with employee details and merge tags.",
    images: [
      {
        src: letterTemplatesImg,
        alt: "DVerif letter templates list",
      },
      {
        src: newTemplateImg,
        alt: "DVerif template editor with merge tags and letter body",
      },
    ],
    points: [
      "Create reusable letter bodies and choose a letter type.",
      "Insert automatic and manually supplied merge tags.",
      "Use a template to create a letter draft for an employee.",
      "Update a template without changing letters already issued.",
    ],
  },
  {
    icon: Inbox,
    title: "Employee Requests",
    body: "Give employees a centralized place to submit and track requests.",
    images: [
      {
        src: employeeRequestsImg,
        alt: "DVerif employee requests screen",
      },
    ],
    points: [
      "Submit employee requests through the available request workflow.",
      "Keep employee requests organized in one place.",
      "Review request information from the organization dashboard.",
    ],
  },
];

/* Screenshot frame */
function ShotFrame({
  images,
  title,
}: {
  images: Shot[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const multi = images.length > 1;

  useEffect(() => {
    if (!multi) return;

    const intervalId = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, [multi, images.length]);

  return (
    <div
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-section p-3 shadow-inner"
      aria-label={`${title} screenshots`}
    >
      {images.map((img, index) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          className={`absolute inset-3 m-auto h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] object-contain object-center transition-opacity duration-700 ease-in-out ${
            multi
              ? active === index
                ? "opacity-100"
                : "opacity-0"
              : "opacity-100"
          }`}
        />
      ))}

      {multi && (
        <div className="absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5">
          {images.map((img, index) => (
            <span
              key={img.src}
              aria-label={
                active === index
                  ? `${img.alt}, active`
                  : img.alt
              }
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* Individual feature card */
export function FeatureCard({
  item,
  index = 0,
}: {
  item: FeatureItem;
  index?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  const Icon = item.icon;

  return (
    <article
      ref={ref}
      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-elegant)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6 lg:p-7 ${
        inView ? "reveal-in" : "reveal"
      }`}
      style={{
        animationDelay: `${Math.min(index * 0.06, 0.36)}s`,
      }}
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-primary-glow transition-transform duration-300 group-hover:scale-x-100" />

      {/* Screenshot */}
      <div className="w-full shrink-0">
        <ShotFrame images={item.images} title={item.title} />
      </div>

      {/* Feature content */}
      <div className="flex flex-1 flex-col">
        <div className="mt-5 flex min-h-12 min-w-0 items-center gap-3 sm:mt-6">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-5 w-5" />
          </span>

          <h3 className="min-w-0 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
            {item.title}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.body}
        </p>

        {item.points && item.points.length > 0 && (
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            {item.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

/* Complete feature showcase grid */
export function FeatureShowcase() {
  const allFeatures = [...pageFeatureItems, ...hrFeatureItems];

  return (
    <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
      {allFeatures.map((item, index) => (
        <FeatureCard
          key={item.title}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
}