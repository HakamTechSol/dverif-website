// // CRA exposes REACT_APP_* variables while Vite exposes VITE_* variables. Supporting
// // both keeps the public client configuration portable between the two setups.
// export const BASE_URL =
//   (typeof process !== "undefined" ? process.env.REACT_APP_API_BASE_URL : undefined) ||
//   import.meta.env.VITE_API_BASE_URL;

// export type ContactFormData = {
//   name: string;
//   email: string;
//   phone: string;
//   subject?: string;
//   message: string;
// };

// type ApiResponse = {
//   message?: string;
// };

// export async function submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
//   if (!BASE_URL) {
//     throw new Error("We can’t send your message right now. Please try again shortly.");
//   }

//   try {
//     const response = await fetch(`${BASE_URL.replace(/\/$/, "")}/leads/contact`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     const data = (await response.json().catch(() => ({}))) as ApiResponse;

//     if (!response.ok) {
//       throw new Error(data.message || "We couldn’t send your message. Please try again.");
//     }

//     return data;
//   } catch (error) {
//     if (error instanceof TypeError) {
//       throw new Error(
//         "We’re having trouble connecting. Please check your connection and try again.",
//       );
//     }
//     throw error;
//   }
  
// }


// CRA exposes REACT_APP_* variables while Vite exposes VITE_* variables.
// Supporting both keeps the public client configuration portable between the two setups.
export const BASE_URL =
  (typeof process !== "undefined" ? process.env.REACT_APP_API_BASE_URL : undefined) ||
  import.meta.env.VITE_API_BASE_URL;

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
};

export type RequestAccessFormData = {
  organization_name: string;
  contact_name: string;
  email: string;
  phone?: string;
  company_size?: string;
  message?: string;
};

type ApiResponse = {
  message?: string;
};

export type MarketingPlan = {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  notIncludedFeatures?: string[];
  ctaText?: string;
  featured?: boolean;
  badge?: string;
};

export const DEFAULT_MARKETING_PLANS: MarketingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "PKR 0",
    period: "/ Month",
    description: "Start for free",
    features: ["1 request per day"],
    notIncludedFeatures: ["Payroll Management", "Attendance Management", "Employee Management", "User Management", "Leave Management"],
  },
  {
    id: "monthly",
    name: "Basic",
    price: "PKR 20,000",
    period: "/ Month",
    description: "Flexible monthly billing",
    features: ["10 request per day", "Payroll Management", "Attendance Management", "Employee Management", "User Management", "Leave Management"],
  },
  {
    id: "yearly",
    name: "Professional",
    price: "PKR 30,000",
    period: "/ Month",
    description: "Best value for growing teams",
    featured: true,
    features: ["100 request per day", "Payroll Management", "Attendance Management", "Employee Management", "User Management", "Leave Management"],
  },
];

type ApiRecord = Record<string, unknown>;

const isRecord = (value: unknown): value is ApiRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const textValue = (value: unknown) =>
  typeof value === "string" || typeof value === "number" ? String(value) : undefined;

function getPlansPayload(payload: unknown): unknown[] {
  if (Array.isArray(payload)) return payload;
  if (!isRecord(payload)) return [];
  const nested = payload.data ?? payload.plans ?? payload.results;
  if (Array.isArray(nested)) return nested;
  return isRecord(nested) ? getPlansPayload(nested) : [];
}

function formatPrice(plan: ApiRecord): string | undefined {
  const price = textValue(plan.price ?? plan.amount ?? plan.cost);
  if (!price) return undefined;
  if (/[^\d.,]/.test(price)) return price;
  const currency = textValue(plan.currency ?? plan.currency_code);
  return currency ? `${currency} ${price}` : price;
}

function getFeatures(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((feature) => {
    const direct = textValue(feature);
    if (direct) return [direct];
    if (!isRecord(feature)) return [];
    const labelled = textValue(feature.name ?? feature.title ?? feature.description ?? feature.text);
    return labelled ? [labelled] : [];
  });
}

function mapMarketingPlan(value: unknown, index: number): MarketingPlan | null {
  if (!isRecord(value)) return null;
  const name = textValue(value.name ?? value.plan_name ?? value.title);
  const price = formatPrice(value);
  const description = textValue(value.description ?? value.tagline ?? value.summary);
  const features = getFeatures(value.features ?? value.benefits ?? value.inclusions);
  if (!name || !price || !description || features.length === 0) return null;

  const billingPeriod = textValue(value.billing_period ?? value.billing_cycle ?? value.interval ?? value.period);
  return {
    id: textValue(value.id ?? value.slug ?? value.code) ?? `${name}-${index}`,
    name, price, description, features,
    period: billingPeriod ? (billingPeriod.startsWith("/") ? billingPeriod : `/ ${billingPeriod}`) : undefined,
    ctaText: textValue(value.cta_text ?? value.button_text ?? value.cta_label),
    featured: value.featured === true || value.is_featured === true || value.recommended === true,
    badge: textValue(value.badge ?? value.badge_text),
  };
}

export async function fetchMarketingPlans(): Promise<MarketingPlan[]> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/marketing/plans`, {
      signal: controller.signal,
    });
    const payload = (await response.json().catch(() => null)) as unknown;

    if (!response.ok) {
      throw new Error(`Pricing plans request failed with HTTP ${response.status}.`);
    }

    const plans = getPlansPayload(payload).map(mapMarketingPlan).filter((plan): plan is MarketingPlan => plan !== null);
    if (plans.length === 0) throw new Error("Pricing plans API returned an invalid or empty response.");
    return plans;
  } catch (error) {
    if (controller.signal.aborted) throw new Error("Pricing plans request timed out.");
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

const getBaseUrl = () => {
  if (!BASE_URL) {
    throw new Error(
      "API URL is not configured. Please try again shortly."
    );
  }

  return BASE_URL.replace(/\/$/, "");
};

// ======================================================
// CONTACT FORM API
// POST /leads/contact
// ======================================================

export async function submitContactForm(
  formData: ContactFormData
): Promise<ApiResponse> {
  const baseUrl = getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/leads/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = (await response.json().catch(() => ({}))) as ApiResponse;

    if (!response.ok) {
      throw new Error(
        data.message || "We couldn’t send your message. Please try again."
      );
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "We’re having trouble connecting. Please check your connection and try again."
      );
    }

    throw error;
  }
}

// ======================================================
// REQUEST ACCESS API
// POST /leads/request-access
// ======================================================

export async function submitRequestAccess(
  formData: RequestAccessFormData
): Promise<ApiResponse> {
  const baseUrl = getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/leads/request-access`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = (await response.json().catch(() => ({}))) as ApiResponse;

    if (!response.ok) {
      throw new Error(
        data.message ||
          "We couldn’t submit your access request. Please try again."
      );
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "We’re having trouble connecting. Please check your connection and try again."
      );
    }

    throw error;
  }
}
