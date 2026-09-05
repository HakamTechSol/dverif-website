import { useEffect, useState } from "react";
import { FileCheck2, FileText, Inbox, LayoutDashboard } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

type Shot = { src: string; alt: string };
type FeatureItem = { icon: typeof LayoutDashboard; title: string; body: string; images: Shot[] };

export const featureItems: FeatureItem[] = [
  { icon: LayoutDashboard, title: "Dashboard Overview", body: "Track organizations, requests, unmatched cases and turnaround time in a single view â€” filterable by team, status and issuer.", images: [{ src: "/assets/dashboard.png.jpeg", alt: "Dverif dashboard overview" }] },
  { icon: FileCheck2, title: "Verification Requests", body: "Send structured requests to issuers. Every action is logged and every result is signed and audit-ready.", images: [{ src: "/assets/request2.png.jpeg", alt: "Dverif send verification request screen" }, { src: "/assets/request.png.jpeg", alt: "Dverif received verification requests screen" }] },
  { icon: Inbox, title: "Inbox (Review Workflow)", body: "Issuer and verifier conversations live in one place. Search across every case without digging through email.", images: [{ src: "/assets/inbox.png.jpeg", alt: "Dverif inbox review workflow" }] },
  { icon: FileText, title: "Document Review", body: "Review document details, issuer records and verification checks before marking a request complete.", images: [{ src: "/assets/doc.png.jpeg", alt: "Dverif document review screen" }] },
];

const pageFeatureItems: FeatureItem[] = [
  { icon: LayoutDashboard, title: "Secure Sign In", body: "A simple and secure starting point for your team.", images: [{ src: "/assets/login.jpeg", alt: "Dverif login screen" }] },
  { icon: LayoutDashboard, title: "Team Management", body: "Keep your organization and team details in one place.", images: [{ src: "/assets/teampage.jpeg", alt: "Dverif team management screen" }] },
  { icon: FileCheck2, title: "Verification Requests", body: "Create, manage and track verification requests with a clear workflow.", images: [{ src: "/assets/verification-request.jpeg", alt: "Dverif verification request screen" }] },
  { icon: Inbox, title: "Inbox", body: "Keep requests and important updates organized in one inbox.", images: [{ src: "/assets/inbox.jpeg", alt: "Dverif inbox screen" }] },
  { icon: FileText, title: "Document Review", body: "Review submitted documents with all the details you need.", images: [{ src: "/assets/documentreviwe.jpeg", alt: "Dverif document review screen" }] },
  { icon: LayoutDashboard, title: "Multi-Admin Access", body: "Give the right people access to manage your organization.", images: [{ src: "/assets/multiadmin.jpeg", alt: "Dverif multi-admin management screen" }] },
  { icon: FileCheck2, title: "Attendance Tracking", body: "Monitor attendance records from a clear, centralized view.", images: [{ src: "/assets/attendence.jpeg", alt: "Dverif attendance tracking screen" }] },
  { icon: FileText, title: "Leave Requests", body: "Submit and manage employee leave requests with ease.", images: [{ src: "/assets/leaverequest1.jpeg", alt: "Dverif leave request overview" }, { src: "/assets/leaverequest2.jpeg", alt: "Dverif leave request details" }] },
  { icon: LayoutDashboard, title: "Salary Management", body: "Access and manage salary information in one secure place.", images: [{ src: "/assets/salarymanagment.jpeg", alt: "Dverif salary management screen" }] },
  { icon: Inbox, title: "Language Support", body: "Use the platform in the language that works best for your team.", images: [{ src: "/assets/langugesupport.jpeg", alt: "Dverif language support screen" }] },
];

function ShotFrame({ images, title }: { images: Shot[]; title: string }) {
  const [active, setActive] = useState(0);
  const multi = images.length > 1;
  useEffect(() => {
    if (!multi) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % images.length), 2800);
    return () => window.clearInterval(id);
  }, [multi, images.length]);

  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-section p-3 shadow-inner">
      {images.map((img, i) => <img key={img.src} src={img.src} alt={img.alt} loading="lazy" decoding="async" className={`absolute inset-3 m-auto h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] object-contain object-center transition-opacity duration-700 ease-in-out ${multi ? (active === i ? "opacity-100" : "opacity-0") : "opacity-100"}`} />)}
      {multi && <div className="absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5" aria-label={`${title} screenshots`}>
        {images.map((img, i) => <span key={img.src} aria-label={active === i ? `${img.alt}, active` : img.alt} className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/40"}`} />)}
      </div>}
    </div>
  );
}

export function FeatureCard({ item, index = 0 }: { item: FeatureItem; index?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const Icon = item.icon;
  const layout = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"][index % 4];

  return (
    <div ref={ref} className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-elegant)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-primary/40 sm:p-7 ${layout} ${inView ? "reveal-in" : "reveal"}`} style={{ animationDelay: `${index * 0.09}s` }}>
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-primary-glow transition-transform duration-300 group-hover:scale-x-100" />
      <div className="w-full"><ShotFrame images={item.images} title={item.title} /></div>
      <div>
        <div className="mt-6 flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110"><Icon className="h-5 w-5" /></span>
          <h3 className="min-w-0 text-lg font-semibold tracking-tight sm:text-xl">{item.title}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return <div className="mt-14 grid auto-rows-[minmax(220px,auto)] gap-5 sm:gap-7 md:grid-cols-2 lg:grid-cols-12">{pageFeatureItems.map((item, i) => <FeatureCard key={item.title} item={item} index={i} />)}</div>;
}
