# Apex Audit Consulting Website

## Overview

A multilingual corporate website for a Georgian audit and consulting firm. The application is a full-stack TypeScript project with a React frontend and Express backend, featuring multi-language support (Georgian, English, Russian), service listings, team member profiles, blog/insights, and a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for page transitions and reveals
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

The frontend follows a page-based structure under `client/src/pages/` with shared components in `client/src/components/`. The UI uses shadcn/ui components (Radix primitives) configured via `components.json`.

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with tsx for development
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL dialect

Routes are defined in `server/routes.ts` with a storage abstraction layer in `server/storage.ts`. The shared schema and route definitions live in `shared/` for type sharing between frontend and backend.

### Data Storage
- **Database**: PostgreSQL (required via DATABASE_URL environment variable)
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit with output to `./migrations`

Database tables include:
- `services` - Audit/consulting services with multilingual content (JSONB)
- `team_members` - Partner/staff profiles with multilingual fields
- `posts` - Blog/insights articles with multilingual content
- `contact_requests` - Form submissions

All multilingual content uses JSONB columns with `{ka, en, ru}` structure.

### Internationalization
Custom i18n implementation via React Context (`LanguageContext.tsx`). Supports three languages:
- Georgian (ka) - primary
- English (en)
- Russian (ru)

Content from the database uses JSONB fields; static UI text uses a translations object in the context.

### Build System
- Development: Vite dev server with HMR, proxied through Express
- Production: Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Database commands: `npm run db:push` uses Drizzle Kit

## External Dependencies

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Connection pooling via `pg` package
- Session storage supports `connect-pg-simple`

### UI/Component Libraries
- Radix UI primitives (dialogs, dropdowns, forms, etc.)
- Lucide React for icons
- Embla Carousel for carousels
- date-fns for date formatting

### Development Tools
- Replit-specific Vite plugins for dev banner and error overlay
- TypeScript with strict mode enabled

## Pending Features

### Email Sending from Contact Form
- Contact form submissions currently save to database but do NOT send emails
- Target email addresses: murmankobaxidze@gmail.com, temuri.gvetadze@gmail.com, guramikobakhidze@gmail.com
- User dismissed SendGrid integration; needs alternative setup (e.g., Gmail SMTP with App Password or Resend)
- Revisit when user is ready to configure email credentials