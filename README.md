# sifrsifr.one

**Bilingual Arabic/English digital-services platform for businesses in Iraq.**

[Live Demo](https://sifrsifr.one) · [Arabic](https://sifrsifr.one/ar) · [English](https://sifrsifr.one/en)

## Overview

sifrsifr.one is a production-deployed full-stack web project designed to present and support digital services for businesses in Iraq. The platform combines bilingual content, service pages, industry-specific demos, contact/project forms, legal content and production deployment in one maintainable codebase.

### What this project demonstrates

- Building and maintaining a modern **Next.js / React / TypeScript** application
- Arabic/English localization and RTL/LTR support
- Component- and content-driven architecture
- Production forms and server-side email delivery
- Security-oriented HTTP response headers
- Validation through type checking, linting, automated tests and production builds
- Deployment and DNS/domain operation for a live product
- Iterative, AI-assisted development on a real production codebase

## Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript 5.9**
- **Tailwind CSS 4**
- **Vite / Vinext**
- **Cloudflare tooling / Wrangler**
- **Resend** for server-side email delivery
- **Vercel / custom domain deployment**

## Product Structure

The project separates business content and configuration from application logic, which makes it easier to add industries, services and bilingual content without duplicating UI code.

```text
app/                         Application routes and pages
src/content/                 Site settings, services and localized content
src/content/siteSettings.ts  Identity, contact and business configuration
src/content/services.ts      Service definitions
src/content/industries.ts    Industry-specific content
src/content/demoProjects.ts  Demonstration projects
src/content/legalContent.ts  Arabic/English legal content
public/                      Static assets
```

## Selected Features

### Bilingual Arabic / English UX

The live site supports Arabic and English with localized routes and RTL/LTR presentation.

### Industry-focused product presentation

Services are presented through business-specific examples and demonstrations rather than a single generic marketing page.

### Project and contact forms

Successful form submissions are delivered server-side through Resend to the project mailbox. Credentials are kept outside the repository and are not committed to Git.

### Security-conscious configuration

The application disables the default framework signature and applies response headers including:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- restricted camera, microphone and geolocation permissions
- `Cross-Origin-Opener-Policy: same-origin`

### Verification workflow

The repository includes a combined verification command:

```bash
npm run verify
```

It runs:

1. TypeScript type checking
2. ESLint
3. Automated tests
4. Production build

## Run Locally

Requirements: **Node.js 22.13 or newer**.

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000/ar
http://localhost:3000/en
```

## Environment Variables

Copy the example file and provide the server-side email API key locally:

```bash
cp .env.example .env.local
```

Example:

```env
RESEND_API_KEY=
```

Real credentials are intentionally excluded from the repository.

## Quality Checks

Run the complete validation pipeline:

```bash
npm run verify
```

Individual commands are also available:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Live Product

- Main site: https://sifrsifr.one
- Arabic: https://sifrsifr.one/ar
- English: https://sifrsifr.one/en

## Development Approach

I use AI-assisted development to accelerate requirements analysis, implementation, debugging and iteration while reviewing the generated code and maintaining control over architecture, deployment, security decisions and production behavior.

## Portfolio Note

This repository is shared as part of my professional software-development portfolio. It contains no production credentials or customer login data. Infrastructure-specific values may change over time as the deployment evolves.

---

**Omar Al-Ezzi**  
Fullstack Developer · AI & SaaS Applications  
GitHub: https://github.com/omaralezzi  
Portfolio: https://al-ezzi.netlify.app
