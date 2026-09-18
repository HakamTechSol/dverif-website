import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../components/theme-provider";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dverif.com/#organization",
      "name": "Dverif",
      "url": "https://dverif.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dverif.com/assets/logo-light.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://www.linkedin.com/company/dverif",
        "https://www.instagram.com/d.verif/",
        "https://www.facebook.com/profile.php?id=61594065642255"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "contact@dverif.com",
          "telephone": "+923199421413",
          "contactType": "customer support",
          "areaServed": "PK",
          "availableLanguage": "English"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kolachi IT Park, Gulshan E Jamal, Rashid Minhas Road",
        "addressLocality": "Karachi",
        "addressRegion": "Sindh",
        "addressCountry": "PK"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://dverif.com/#website",
      "url": "https://dverif.com",
      "name": "Dverif",
      "description": "Verify documents in minutes. Dverif is a secure document verification and organization management platform for modern companies.",
      "publisher": { "@id": "https://dverif.com/#organization" },
      "inLanguage": "en",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://dverif.com/faq?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://dverif.com/#webpage",
      "url": "https://dverif.com",
      "name": "Dverif — Verify Documents in Minutes | Secure Document Verification Platform",
      "description": "Dverif is a secure document verification and organization management platform. Verify documents in minutes, stop scams, and streamline HR workflows with employee management, attendance, leave, and payroll.",
      "isPartOf": { "@id": "https://dverif.com/#website" },
      "inLanguage": "en",
      "potentialAction": {
        "@type": "ReadAction",
        "target": "https://dverif.com"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://dverif.com/#software",
      "name": "Dverif",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "PKR",
        "description": "Document verification and organization management platform with free, basic, and professional plans."
      },
      "description": "Dverif is a secure document verification and organization management platform. Verify documents in minutes, stop scams, cut hassle, and eliminate delays. Includes employee management, attendance management, user management, leave management, and payroll management.",
      "url": "https://dverif.com",
      "publisher": { "@id": "https://dverif.com/#organization" },
      "featureList": [
        "Document verification",
        "Employee management",
        "Attendance management",
        "Leave management",
        "User management",
        "Payroll management",
        "Scam prevention",
        "Secure authentication",
        "Real-time verification",
        "Audit trail",
        "Verification certificates",
        "Dashboard and analytics",
        "Multiple administrators",
        "Role-based access control",
        "Custom templates",
        "Multi-language support"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "120",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dverif.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://dverif.com"
        }
      ]
    }
  ]
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dverif — Verify Documents in Minutes | Secure Document Verification Platform" },
      { name: "description", content: "Dverif is a secure document verification platform. Verify documents in minutes, stop scams, and streamline HR workflows — employee management, attendance, leave, and payroll from one place." },
      { name: "keywords", content: "document verification, secure verification, identity verification, scam prevention, document authentication, background checks, employment verification, academic verification, certificate verification, employee management software, attendance management software, leave management software, payroll management software, HR software, HRMS, organization management platform" },
      { name: "author", content: "Dverif" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "language", content: "English" },
      { name: "geo.region", content: "PK-SD" },
      { name: "geo.placename", content: "Karachi" },
      { name: "geo.position", content: "24.8607;67.0011" },
      { name: "ICBM", content: "24.8607, 67.0011" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Dverif — Verify Documents in Minutes | Secure Document Verification Platform" },
      { property: "og:description", content: "Secure document verification and organization management. Verify documents in minutes and manage employees, attendance, leave, and payroll from one place." },
      { property: "og:site_name", content: "Dverif" },
      { property: "og:url", content: "https://dverif.com" },
      { property: "og:image", content: "https://dverif.com/assets/logo-light.png" },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:image:alt", content: "Dverif — Secure Document Verification & Organization Management" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dverif — Verify Documents in Minutes" },
      { name: "twitter:description", content: "Secure document verification and organization management. Verify documents in minutes and manage employees, attendance, leave, and payroll from one place." },
      { name: "twitter:image", content: "https://dverif.com/assets/logo-light.png" },
      { name: "twitter:site", content: "@dverif" },
      { name: "twitter:creator", content: "@dverif" },
      { name: "theme-color", content: "#2563EB" },
      { httpEquiv: "X-DNS-Prefetch-Control", content: "on" },
      { name: "format-detection", content: "telephone=no" },
      { name: "apple-mobile-web-app-title", content: "Dverif" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "application-name", content: "Dverif" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "preload", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap", as: "style" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "canonical", href: "https://dverif.com" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "alternate", hrefLang: "en", href: "https://dverif.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
