# AGENTS.md

## Cursor Cloud specific instructions

Wrightfully Fit is a single Next.js 15 (App Router) marketing site — there is one service and no backend/database. Standard commands are defined in `package.json` (`dev`, `build`, `start`, `lint`); see `README.md` for the basics.

- Dev server: `npm run dev` (Turbopack) serves on `http://localhost:3000`. This is a long-running process — start it in a background/tmux session.
- The newsletter "Subscribe" form is purely client-side state (`components/Newsletter.tsx`); submitting shows a "Thank you for subscribing!" confirmation but sends no network request, so it works without any credentials or external services.
- `npm run build` uses `--turbopack`; there is no production API to configure.
