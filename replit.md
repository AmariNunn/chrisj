# replit.md

## Overview

Jordan Wellness Experience is a full-stack web application for a premium chiropractic and wellness studio based in Nashville, TN. It serves as the studio's marketing website with a luxury, boutique aesthetic. The business is run by Dr. Nicole Cox-Jordan (Chiropractor) and Christopher Jordan, CPT (Fitness & Nutrition Specialist).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with 6 main pages:
  - Home (`/`)
  - The Experience (`/experience`)
  - Services (`/services`)
  - Membership (`/membership`)
  - Contact (`/contact`)
  - Testimonials (`/testimonials`)
- **State/Data**: TanStack React Query for server state management
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, styled with Tailwind CSS and CSS variables for theming
- **Animations**: Framer Motion for scroll-triggered animations, hero slideshow transitions, and page section reveals
- **Hero Section**: Full-screen cinematic background slideshow (10 real photos, 4-second intervals) with dark gradient overlay, centered serif typography, location/hours strip at bottom, "Now Accepting New Patients" scrolling marquee banner below
- **Forms**: React Hook Form with Zod resolvers for validation, sharing schemas from the `shared/` directory
- **Styling**: Tailwind CSS with luxury color palette — crisp white backgrounds, warm neutrals (beige, warm gray, taupe), deep gold accent (`hsl(36, 60%, 48%)`). Playfair Display serif for headings, Inter sans-serif for body text.
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Pages
- **Home** (`/`): Hero (10-photo slideshow, "Begin Your Experience" + "Services" CTAs, location strip), photo gallery slideshow (10 real photos), editorial branding typography section (7 phrases), about/studio section, services preview cards, Meet the Experts (team bios), CTA section
- **The Experience** (`/experience`): Welcome/gateway page — welcome text, Meet the Team, What to Expect (first visit checklist), Who Services Are For, Investment Transparency ($130), Jordan Wellness Portfolio (intake forms link), How JWE Differs, 3 Pillars (Precision/Performance/Longevity), Services Preview (Signature vs Premium), CTA (Apply for Membership + Contact Us), Testimonials strip + Google Review button
- **Services** (`/services`): Signature services (Chiropractic, Fitness, Happy Hour) and Premium services (Essential, Body Sculpting, Cryotherapy, Elite VIP) with videos, CTA
- **Membership** (`/membership`): Membership model intro, 4 tiers (Essential ChiroFitness, Enhanced Body Sculpting, Elevated Cryotherapy, Elite VIP Concierge) with full descriptions, Apply for Membership + Contact Us CTAs
- **Contact** (`/contact`): Contact form, Google Maps embed, phone/email/address/Instagram info, Book Appointment link
- **Testimonials** (`/testimonials`): Placeholder testimonial cards + Google Review button

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **API Design**: RESTful JSON API with routes defined in `server/routes.ts`
- **Endpoints**:
  - `POST /api/inquiries` — Submit contact form inquiry
  - `POST /api/appointments` — Book an appointment
  - `GET /api/reviews` — List published reviews
  - `POST /api/reviews` — Submit a review
  - `POST /api/subscribers` — Newsletter signup
- **Validation**: Zod schemas generated from Drizzle table definitions using `drizzle-zod`
- **Storage Layer**: `server/storage.ts` defines an `IStorage` interface with a `DatabaseStorage` implementation using Drizzle ORM

### Database
- **Database**: PostgreSQL (required — `DATABASE_URL` environment variable must be set)
- **ORM**: Drizzle ORM with `drizzle-kit` for schema management
- **Schema**: Defined in `shared/schema.ts` with four tables:
  - `inquiries` — id, name, email, subject, message, createdAt
  - `appointments` — id, name, email, phone, date, service, notes, status, createdAt
  - `reviews` — id, name, rating (1-5), comment, isPublished, createdAt
  - `subscribers` — id, email (unique), createdAt

### Build & Deploy
- **Development**: `npm run dev` runs the Express server with Vite dev middleware for HMR
- **Production Build**: `npm run build` runs Vite build for the client and esbuild for the server
- **Netlify**: Configured via `netlify.toml` — build command `npm run build`, publish directory `dist/public`, SPA redirect rule
- **External Links**:
  - Book Appointment → `https://www.vagaro.com/us04/jordanwellnessexperience`
  - Intake Forms / Apply for Membership → `https://jordanwellnessxp.com/jordan-wellness-patient-questionnaire/`
  - Google Review → `https://www.google.com/search?q=Jordan+Wellness+Experience+Nashville+TN`

## External Dependencies

### Required Services
- **PostgreSQL Database**: Must be provisioned with connection string in `DATABASE_URL` environment variable

### Key NPM Packages
- **Frontend**: React, Wouter, TanStack React Query, Framer Motion, React Hook Form, shadcn/ui (Radix UI), Tailwind CSS, date-fns, Lucide React icons
- **Backend**: Express 5, Drizzle ORM, drizzle-zod, pg (node-postgres), Zod
- **Build Tools**: Vite, esbuild, TypeScript (tsx runtime)

### Fonts (Google Fonts CDN)
- Playfair Display (serif, headings)
- Inter (sans-serif, body text)

## Photo Assets

### Hero Slideshow (10 photos, in `client/src/components/sections/Hero.tsx`):
1. `@assets/IMG_2228_*.jpg` — Dr. Cox-Jordan neck adjustment
2. `@assets/IMG_2364_*.jpg` — Percussion therapy
3. `@/assets/images/slide-2386.jpg` — Wellness care session
4. `@/assets/images/slide-2406.jpg` — Patient consultation
5. `@/assets/images/slide-3100.jpg` — Clinic treatment
6. `@assets/IMG_5085_*.jpg` — Studio session
7. `@assets/IMG_6517_*.jpg` — Wellness experience
8. `@/assets/images/img-3944.jpg` — Converted from IMG_3944.heic
9. `@/assets/images/img-4930.jpg` — Converted from IMG_4930.heic
10. `@/assets/images/img-5103.jpg` — Converted from IMG_5103.heic

### Home Page Photo Gallery (10 photos, in `client/src/pages/Home.tsx`):
Uses same photo set as hero plus `img-5128.jpg` (converted from IMG_5128.heic)

### Team Photos:
- Dr. Nicole Cox-Jordan: `@assets/IMG_2611_*.JPG`
- Christopher Jordan: `@assets/IMG_1722_*.JPG`
- Couple (Chris & Dr. Nicole): `@assets/IMG_2607_*.JPG`

### Adding New Photos:
1. Place image file in `attached_assets/` (or `client/src/assets/images/` if already JPG/PNG)
2. If HEIC: run `magick attached_assets/FILE.heic -quality 90 client/src/assets/images/name.jpg`
3. Import and add to the slideshow array in the relevant component
