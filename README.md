# Oak & Iron Client Hub (Milestone 1)

Cloud-only deployment guide (no local hosting required).

## 1) Create Supabase project
- New project → note the **Project URL** and **anon key**.
- Auth → URL Configuration:
  - Add `https://YOUR-VERCEL-URL` and `http://localhost:3000` (local optional)
  - Add redirect `https://YOUR-VERCEL-URL/dashboard`
- SQL Editor → run the schema from your spec doc (Discovery & Spec → Milestone 1).

## 2) Put this code on GitHub (web UI)
- Create a new repo in GitHub → **Upload files** → drag everything from this folder.
- Commit.

## 3) Deploy on Vercel
- Import the GitHub repo.
- Add environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key
- Deploy. Test magic-link login.

