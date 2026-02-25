# replit.md

## Overview

Jordan Wellness Experience is a full-stack web application for a chiropractic and wellness clinic based in Nashville, TN. It serves as the clinic's marketing website and patient portal, featuring appointment booking, patient reviews, contact inquiries, and newsletter subscriptions. The business is run by Dr. Nicole Cox-Jordan (Chiropractor) and Christopher Jordan (Fitness & Nutrition Specialist).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with pages: Home, About, Services, Booking, Reviews, Contact, Intake, and 404
- **State/Data**: TanStack React Query for server state management; custom hooks in `client/src/hooks/use-api.ts` wrap all API calls with mutations and queries
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, styled with Tailwind CSS and CSS variables for theming
- **Animations**: Framer Motion for page transitions, scroll-triggered animations, and hero slideshow transitions
- **Hero Section**: Full-screen background slideshow (5 clinic photos cycling every 3s) with dark gradient overlay and white text. Navbar switches between white (transparent over hero) and dark (scrolled with white background) styles. Logo uses `brightness-0 invert` filter when navbar is transparent.
- **Forms**: React Hook Form with Zod resolvers for validation, sharing schemas from the `shared/` directory
- **Styling**: Tailwind CSS with custom theme (Deep Blue primary, Gold/Orange accent), Inter font for body text, Outfit for headings. Glassmorphism effects used in navbar and cards
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **API Design**: RESTful JSON API with routes defined in `server/routes.ts`. Route metadata (paths, methods, schemas) centralized in `shared/routes.ts`
- **Endpoints**:
  - `POST /api/inquiries` — Submit contact form inquiry
  - `POST /api/appointments` — Book an appointment
  - `GET /api/reviews` — List published reviews
  - `POST /api/reviews` — Submit a review
  - `POST /api/subscribers` — Newsletter signup
- **Validation**: Zod schemas generated from Drizzle table definitions using `drizzle-zod`, shared between client and server
- **Storage Layer**: `server/storage.ts` defines an `IStorage` interface with a `DatabaseStorage` implementation using Drizzle ORM. This abstraction allows swapping storage backends.
- **Seeding**: `server/seed.ts` auto-seeds initial reviews on startup if the reviews table is empty

### Database
- **Database**: PostgreSQL (required — `DATABASE_URL` environment variable must be set)
- **ORM**: Drizzle ORM with `drizzle-kit` for schema management
- **Schema**: Defined in `shared/schema.ts` with four tables:
  - `inquiries` — id, name, email, subject, message, createdAt
  - `appointments` — id, name, email, phone, date, service, notes, status (pending/confirmed/cancelled), createdAt
  - `reviews` — id, name, rating (1-5), comment, isPublished, createdAt
  - `subscribers` — id, email (unique), createdAt
- **Migrations**: Use `npm run db:push` (drizzle-kit push) to sync schema to database

### Shared Code
- `shared/schema.ts` — Database table definitions, Zod insert schemas, and TypeScript types used by both client and server
- `shared/routes.ts` — API route metadata (paths, methods, input/output schemas) used for type-safe API consumption

### Build & Deploy
- **Development**: `npm run dev` runs the Express server with Vite dev middleware for HMR
- **Production Build**: `npm run build` runs Vite build for the client (output to `dist/public`) and esbuild for the server (output to `dist/index.cjs`), bundling select server dependencies to reduce cold start times
- **Production Start**: `npm start` runs the compiled `dist/index.cjs`

### Dev Server Architecture
- In development, Vite runs as middleware inside Express (`server/vite.ts`), serving the React app with HMR
- In production, `server/static.ts` serves the pre-built static files from `dist/public` with SPA fallback to `index.html`

## External Dependencies

### Required Services
- **PostgreSQL Database**: Must be provisioned with connection string in `DATABASE_URL` environment variable. Used via `pg` Pool and Drizzle ORM.

### Key NPM Packages
- **Frontend**: React, Wouter, TanStack React Query, Framer Motion, React Hook Form, shadcn/ui (Radix UI primitives), Tailwind CSS, date-fns, embla-carousel-react
- **Backend**: Express 5, Drizzle ORM, drizzle-zod, pg (node-postgres), connect-pg-simple (session store), Zod
- **Build Tools**: Vite, esbuild, TypeScript (tsx runtime)
- **Replit Plugins**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner (dev only)

### Fonts (External CDN)
- Google Fonts: Inter, Outfit, Architects Daughter, DM Sans, Fira Code, Geist Mono (loaded via `<link>` in `client/index.html`)