# LendExpress - Advanced Lending Website

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/chmoralla-code/lendexpress-advanced)

A complete, 100% working lending website built with Next.js, TypeScript, and Vanilla CSS.

## Features

- **Public Landing Page**: Professional design with hero section, stats, and features.
- **Admin Dashboard**:
  - **Credentials**: `admin` / `admin1234`
  - Manage loan applications.
  - View active loans and borrower statistics.
  - Professional sidebar navigation.
- **Borrower Dashboard**:
  - View loan balance and status.
  - Payment history.
  - Apply for new loans.
- **Multi-step Loan Application**: A user-friendly registration and application flow.
- **Supabase Ready**: Integrated with Supabase client for easy database connection.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, CSS Modules.
- **Backend**: Next.js Server Actions / Supabase.
- **Deployment**: Render-ready with `render.yaml`.

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Render

1. Create a new "Web Service" on Render.
2. Connect this GitHub repository.
3. Render will automatically detect the `render.yaml` and configure the build/start commands.
4. Set your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in the Render environment variables if using Supabase.

## Admin Access

- **Username**: `admin`
- **Password**: `admin1234`

(This is configured in `src/app/login/page.tsx` for demo purposes. In a production environment, these should be stored in a secure database with hashed passwords.)
