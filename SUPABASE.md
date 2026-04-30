# Supabase Integration Guide

Your project is now configured for Supabase.

## Setup
1. Create a `.env.local` file in the root directory.
2. Add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

## Database Schema
The database schema has been defined via the SQL provided in the Supabase SQL Editor. 
The core tables are:
- `profiles`: Extends `auth.users` for user metadata.
- `loans`: Manages user loan applications.
- `payments`: Tracks loan payment history.

## Usage
Import the pre-configured Supabase client in your components:
```typescript
import { supabase } from '@/lib/supabase';
```
