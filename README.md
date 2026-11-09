# ARCO STUDIO — Architecture & Interior Design Web Platform

Official production web platform for **ARCO STUDIO (Architecture Consultancy & Engineering Services)**, an architectural and interior design firm based at **Laxmi Road, Nehru Colony, Dehradun, Uttarakhand**.

- **Production Domain:** [arcostudio.co.in](https://arcostudio.co.in)
- **Founders & Principal Architects:** Mohammad Aneesh & Sudha Dabral *(DIT University, Dehradun • Council of Architecture)*

---

## Key Features

- **Portfolio & Filterable Showcase:** Interactive project gallery spanning Residential, Commercial, Institutional, Housing, and Interior Design works across Uttarakhand.
- **Technical & Local SEO:**
  - Route-aware dynamic metadata (`title`, `description`, `canonical`, Open Graph, and Twitter Cards).
  - Local Geographic (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) meta tags for Dehradun, Uttarakhand.
  - Rich `JSON-LD` Structured Data (`ArchitecturalFirm`, `LocalBusiness`, `Person`, `WebSite`, and `FAQPage` schemas).
  - Automated `sitemap.xml` (with image sitemap annotations) and `robots.txt`.
- **Generative Engine Optimization (GEO):** Standardized `/llms.txt` index and explicit AI crawler allowances (`GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`) for accurate citation in AI search engines.
- **Production Security & Edge Caching (`vercel.json`):**
  - SPA fallback routing (`rewrites`) for zero-404 deep linking.
  - Hardened HTTP headers (`Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
  - Immutable Edge CDN caching (`max-age=31536000`) for portfolio and team assets.

---

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Routing:** React Router v7
- **Styling & Motion:** Tailwind CSS + Framer Motion + Lucide Icons
- **Linting:** Oxlint
- **Deployment:** Vercel

---

## Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```
