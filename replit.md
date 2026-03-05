# Project Overview

A full-stack web application built with Express (backend) and React/Vite (frontend).

## Architecture

- **Backend**: Express server (`server/`) with API routes
- **Frontend**: React with Vite (`client/`)
- **Shared**: Schema definitions (`shared/`)

## Database Setup

The project uses **two database connections**:

1. **Helium (Replit) DB** (`DATABASE_URL`): Used for the `message_users` table (contact form messages). Managed via `server/db.ts`.
2. **Supabase DB** (`DATABASE_URL`): Used for the `users` table (user accounts). Managed via `server/supabaseDb.ts`.

### Tables
- `users` (Supabase): id, email, password, first_name, last_name, country
- `message_users` (Helium): id, name, email, messages, created_at

## Key Features

- **Contact Form**: POST `/api/contacts` - stores messages in Helium DB
- **Delete Account**: POST `/api/delete-account` - verifies email/password against Supabase DB and deletes the user

## Environment Variables

- `DATABASE_URL`: Replit Helium database connection string (runtime-managed)
- `DATABASE_URL`: Supabase database connection string for user operations
