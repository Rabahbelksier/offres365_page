# Project Overview

A full-stack web application built with Express (backend) and React/Vite (frontend). This is a multi-app landing page supporting two apps: **Offres 365** and **Ali Affiliate**.

## Architecture

- **Backend**: Express server (`server/`) with API routes
- **Frontend**: React with Vite (`client/`)
- **Shared**: Schema definitions (`shared/`)

## Database Setup

The project uses a single PostgreSQL database (`DATABASE_URL`).

### Tables
- `users`: id, email, password, first_name, last_name, country
- `message_users`: id, name, email, messages, app, created_at

The `app` column in `message_users` stores which app (Offres 365 or Ali Affiliate) the contact message was sent from.

## Key Features

- **Contact Form**: POST `/api/contacts` - stores messages in DB with app name identifier
- **Delete Account**: POST `/api/delete-account` - verifies email/password and deletes the user

## Pages & Routes

- `/` → Offres 365 home page
- `/privacy-policy` → Offres 365 privacy policy
- `/delete-account` → Account deletion page (Offres 365 only)
- `/ali-affiliate` → Ali Affiliate app landing page
- `/ali-affiliate/privacy-policy` → Ali Affiliate privacy policy

## Components

- `Navbar` – Route-aware: shows Ali Affiliate branding on `/ali-affiliate*` routes, hides "Delete Account" on Ali Affiliate pages, shows "All Apps" section in sidebar
- `Contact` – Accepts `appName`, `appIcon`, `appTagline` props to be reused across both apps
- All other components (Hero, Features, Gallery, Footer) remain specific to Offres 365; Ali Affiliate has its own inline components in `AliAffiliate.tsx`

## Environment Variables

- `DATABASE_URL`: PostgreSQL database connection string
