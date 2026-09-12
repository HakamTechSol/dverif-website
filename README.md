# Dverif Shine

Update the existing Dverif marketing website UI to a modern SaaS-level design with both Light Mode and Dark Mode support.

🎨 THEME & DESIGN SYSTEM:
- Primary Color: #2563EB (Blue)
- Light Mode:
  - Background: #FFFFFF
  - Sections: #F8FAFC
  - Text: #0F172A
- Dark Mode:
  - Background: #0B1220
  - Sections: #111827
  - Cards: #1F2937
  - Text: #E5E7EB
- Accent: subtle blue glow, soft shadows, rounded corners (12px–16px)
- Font: Inter or Poppins
- Style: Clean, minimal, SaaS dashboard inspired

🌗 DARK / LIGHT MODE:
- Add toggle button in navbar (top right)
- Default: Light Mode
- Save user preference in localStorage
- Smooth transition between modes (fade effect)

🧩 UI IMPROVEMENTS:
- Add glassmorphism effect on navbar (slight blur)
- Use modern card design with hover effects (scale + shadow)
- Add subtle animations (fade-in, slide-up)
- Add loading skeletons or spinner with brand color

🏠 HOME PAGE:
- Hero section:
  - Bold heading: “Verify Documents in Minutes”
  - Subtext about scams & hassle
  - CTA: “Request Access” (primary button)
  - Add illustration or dashboard preview on right
- Problem → Solution:
  - 3 cards (Scam, Hassle, Delay) with icons
- Dashboard Preview:
  - Show stats cards (Organizations, Requests Sent, Unmatched)
- Features section:
  - Grid layout with icons (Dashboard, Requests, Inbox, Payments, Settings)
- How It Works:
  - 3 steps with icons and connecting line
- Pricing:
  - Highlight Free Plan card
- FAQ:
  - Accordion style
- Footer:
  - Clean, multi-column, dark background in both modes

📄 OTHER PAGES:
- Features page: detailed sections with images/screenshots
- Pricing page: clear plan cards, highlight active plan
- Contact page:
  - Form (Name, Email, Company, Phone, Message)
  - WhatsApp button
  - Email:contact@dverif.com
  - Note: “Dverif is invite-only…”

🚫 IMPORTANT:
- Do NOT add login/signup buttons (invite-only system)
- Only “Request Access” CTA everywhere

⚡ INTERACTIONS:
- CTA button opens modal form
- Form ready for API integration (no backend logic)
- Add success message after submission

📱 RESPONSIVENESS:
- Fully responsive (mobile, tablet, desktop)
- Stack sections properly on mobile

🎯 GOAL:
Make it look like a premium SaaS product (similar to Stripe / Linear / Notion level UI)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/59ab5643-b5c4-4206-aced-d7bc7ff6641e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
