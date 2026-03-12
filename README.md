# Vienna Visitas — Next.js

Full-stack Next.js conversion of the original React + FastAPI project.

## What Changed

| Before | After |
|---|---|
| React CRA frontend (`/app/frontend`) | Next.js App Router (`/app`, `/components`) |
| FastAPI backend (`/app/backend/server.py`) | Next.js API Routes (`/app/api/`) |
| React Router `<Link>` | Next.js `<Link href>` |
| `BrowserRouter` + `<Outlet>` layout | Next.js `layout.jsx` + `children` |
| `useLocation` scroll manager | Next.js built-in scroll behaviour |
| `process.env.REACT_APP_BACKEND_URL` | Relative `/api` paths (same origin) |
| Pydantic + uvicorn validation | Next.js route handlers with inline validation |
| `motor` async MongoDB | `mongoose` with cached connection |
| `next-themes` Toaster | Simplified Sonner Toaster (light theme) |

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.local.example .env.local
# Edit .env.local and set your MONGODB_URI

# 3. Run development server
npm run dev
```

App runs at http://localhost:3000

## API Routes

- `POST /api/contact` — Save a contact message
- `GET /api/contact` — Retrieve all contact messages
- `GET /api/status` — Health check

## Project Structure

```
/
├── app/
│   ├── layout.jsx          # Root layout (header + footer + toaster)
│   ├── page.jsx            # Home page
│   ├── things-to-do/
│   ├── places/
│   ├── vienna-guide/
│   ├── gallery/
│   ├── inspired/
│   ├── not-found.jsx
│   └── api/
│       ├── contact/route.js
│       └── status/route.js
├── components/
│   ├── layout/MainLayout.jsx
│   ├── shared/CtaStrip.jsx
│   ├── shared/PageHero.jsx
│   └── ui/button.jsx, input.jsx, textarea.jsx, sonner.jsx
├── data/siteContent.js
└── lib/
    ├── mongodb.js
    ├── api.js
    ├── utils.js
    └── models/ContactMessage.js
```
