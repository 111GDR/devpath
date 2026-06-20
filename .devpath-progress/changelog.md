# DevPath — Changelog

Timestamped log of every implementation step completed.

---

## [2026-06-16 13:15] — Project Initialized
- Created implementation plan
- Created progress tracking folder (.devpath-progress/)
- Ready to begin Step 1

## [2026-06-16 13:16] — Step 1: Folder Structure + Root Setup
- Created root package.json with concurrently
- Created .env.example, .gitignore, README.md
- Set up monorepo structure (client/ + server/)

## [2026-06-16 13:17] — Step 2: Server — Express Boilerplate
- Created server/package.json with all dependencies
- Created server/index.js with Express, MongoDB, CORS, helmet, rate limiting, error handler
- Created server/.env for local development

## [2026-06-16 13:17] — Step 3: Database Models
- Created server/models/User.js (bcrypt hashing, password comparison, JSON sanitization)
- Created server/models/Task.js (indexed by index, phase, week, day)
- Created server/models/UserTask.js (compound unique index on userId+taskIndex)

## [2026-06-16 13:23] — Step 4: Seed Script
- Created server/data/tasks.js with all 284 tasks across 5 phases
- Tasks 0-49: Full detail from spec (Phase 1 + Phase 2 weeks 6-10)
- Tasks 50-283: Generated from spec's topic summaries
- Created server/seed.js (idempotent, clears and re-seeds)

## [2026-06-16 13:24] — Step 5: Middleware
- Created server/middleware/auth.js (JWT from httpOnly cookie → req.user)
- Created server/middleware/requireAdmin.js (role check, 403 on failure)

## [2026-06-16 13:24] — Step 6: Auth Routes
- Created server/controllers/authController.js (register, login, logout, me)
- Login includes streak logic: yesterday → increment, today → nothing, older → reset to 1
- Login pushes today to loginDates array
- Created server/routes/auth.js

## [2026-06-16 13:25] — Steps 7-9: Student & Admin API
- Created server/controllers/userController.js (progress, streak, calendar)
- Created server/routes/user.js (student role enforcement)
- Created server/controllers/taskController.js (today, complete, all with status)
- Created server/routes/tasks.js (student role enforcement)
- Created server/controllers/adminController.js (users list, user detail, skip with validation)
- Created server/routes/admin.js (auth + requireAdmin layered)

## [2026-06-16 13:40] — Step 10: Client Setup
- Scaffolded React app with Vite
- Installed react-router-dom
- Created client/src/context/AuthContext.jsx (login, register, logout, persist via /me)
- Created client/src/App.jsx (React Router with protected routes by role)
- Created client/src/components/Navbar.jsx (role-based nav)
- Configured Vite proxy for /api → localhost:3001

## [2026-06-16 13:51] — Steps 11-16: All Client Pages
- Login.jsx — email/password form with error handling
- Register.jsx — name/email/password/confirm with frontend validation
- Dashboard.jsx — greeting, stats grid (streak/progress/tasks), progress bar, task card with full details, done-for-today message, 365-day calendar heatmap
- Progress.jsx — full roadmap grouped by phase/week with completed/current/locked status
- Profile.jsx — avatar, user info, streak, member since
- AdminDashboard.jsx — student table with progress bars, clickable rows
- AdminUserDetail.jsx — student roadmap with "Skip to this task" buttons

## [2026-06-16 13:51] — Step 17: Global CSS System
- Created client/src/styles/global.css
- CSS reset + Inter font from Google Fonts
- Complete design system: colors (#0f1117 navy, #4f8ef7 blue, #22c55e green)
- Components: buttons, forms, cards, badges, tables, progress bars
- Heatmap styles, animations (fadeIn, slideUp, shimmer)
- Mobile-first responsive breakpoints (375px → 1440px)
- Custom scrollbar, glassmorphism header
