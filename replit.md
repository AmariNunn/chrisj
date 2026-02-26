# replit.md

## Overview

Jordan Wellness Experience is a full-stack web application for a premium chiropractic and wellness studio based in Nashville, TN. It serves as the studio's marketing website with a luxury, boutique aesthetic. The business is run by Dr. Nicole Cox-Jordan (Chiropractor) and Christopher Jordan, CPT (Fitness & Nutrition Specialist).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with pages: Home (`/`), About (`/about`), Services (`/services`), New Patient Forms (`/new-patient-forms`), Testimonials (`/testimonials`), Contact (`/contact`), and 404.
- **State/Data**: TanStack React Query for server state management
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, styled with Tailwind CSS and CSS variables for theming
- **Animations**: Framer Motion for scroll-triggered animations, hero slideshow transitions, and page section reveals
- **Hero Section**: Full-screen cinematic background slideshow with dark gradient overlay, centered serif typography, "Now Accepting New Patients" scrolling marquee banner below hero
- **Forms**: React Hook Form with Zod resolvers for validation, sharing schemas from the `shared/` directory
- **Styling**: Tailwind CSS with luxury color palette — crisp white backgrounds, warm neutrals (beige, warm gray, taupe), deep gold accent (`hsl(36, 60%, 48%)`). Playfair Display serif for headings, Inter sans-serif for body text.
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Pages
- **Home** (`/`): Hero with slideshow + marquee, location/hours section, 10-slot photo slideshow with labeled placeholders, editorial branding typography section (7 phrases), about/studio description with couple photo, services preview cards, team section, CTA section
- **About** (`/about`): Studio description, Meet the Experts (Dr. Nicole Cox-Jordan & Christopher Jordan full bios)
- **Services** (`/services`): Signature services (Chiropractic, Fitness, Happy Hour) and Premium services (Essential, Body Sculpting, Cryotherapy, Elite VIP) with videos
- **New Patient Forms** (`/new-patient-forms`): Landing page linking to external patient questionnaire
- **Testimonials** (`/testimonials`): Placeholder testimonial cards (ready for real client reviews)
- **Contact** (`/contact`): Contact form, Google Maps embed, phone/email/address/Instagram info, Book Appointment link

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
- **External Links**: Book Appointment links to Vagaro (`https://www.vagaro.com/us04/jordanwellnessexperience`), New Patient Forms links to external questionnaire

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

## Photo Slideshow Slots (Home Page)
The home page has a 10-slot photo slideshow with labeled placeholders. To swap in real photos:
1. Place photo files in `client/src/assets/images/` or `attached_assets/`
2. Import them in `client/src/pages/Home.tsx` at the top of the file
3. Add `src` property to each item in the `slideshowPhotos` array
