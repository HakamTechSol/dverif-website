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
  "@type": "SoftwareApplication",
  "name": "Dverif",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Invite-only document verification platform"
  },
  "description": "Dverif is an invite-only platform to verify documents in minutes. Stop scams, cut hassle, eliminate delays with secure document verification for modern organizations.",
  "url": "https://dverif.com",
  "publisher": {
    "@type": "Organization",
    "name": "Dverif",
    "url": "https://dverif.com",
    "logo": "https://dverif.com/assets/logo-light.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "dverif26@gmail.com",
      "contactType": "customer support"
    }
  },
  "featureList": [
    "Document verification",
    "Scam prevention",
    "Secure authentication",
    "Real-time verification",
    "Audit trail",
    "Bulk verification",
    "API integration"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "120",
    "bestRating": "5",
    "worstRating": "1"
  }
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
      { name: "description", content: "Dverif is an invite-only platform to verify documents in minutes. Stop scams, cut hassle, eliminate delays with secure document verification for modern organizations." },
      { name: "keywords", content: "document verification, secure verification, identity verification, scam prevention, document authentication, background checks, employment verification, academic verification, certificate verification" },
      { name: "author", content: "Dverif" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Dverif — Verify Documents in Minutes" },
      { property: "og:description", content: "Invite-only document verification for modern organizations. Stop scams, cut hassle, eliminate delays." },
      { property: "og:site_name", content: "Dverif" },
      { property: "og:url", content: "https://dverif.com" },
      { property: "og:image", content: "https://dverif.com/assets/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Dverif Document Verification Platform" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dverif — Verify Documents in Minutes" },
      { name: "twitter:description", content: "Invite-only document verification for modern organizations. Stop scams, cut hassle, eliminate delays." },
      { name: "twitter:image", content: "https://dverif.com/assets/og-image.png" },
      { name: "twitter:site", content: "@dverif" },
      { name: "twitter:creator", content: "@dverif" },
      { name: "theme-color", content: "#2563EB" },
      { httpEquiv: "X-DNS-Prefetch-Control", content: "on" },
      { httpEquiv: "X-Frame-Options", content: "SAMEORIGIN" },
      { name: "format-detection", content: "telephone=no" },
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
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(jsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

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
