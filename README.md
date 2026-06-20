# DevPath

A personalized developer training tracker that acts like a senior developer assigning daily tasks to a junior employee.

## Tech Stack

- **Frontend**: React (Vite) + plain CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB with Mongoose
- **Auth**: JWT stored in httpOnly cookies

## Setup

```bash
# 1. Clone the repo
git clone <repo-url>
cd devpath

# 2. Install all dependencies
npm run install:all

# 3. Configure environment
cp .env.example server/.env
# Edit server/.env with your MongoDB URI and secrets

# 4. Seed the database
npm run seed

# 5. Start development
npm run dev
```

The client runs on `http://localhost:5173` and the server on `http://localhost:3001`.

## API Endpoints

### Auth — `/api/auth`
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/auth/register` | No | Create student account |
| POST | `/api/auth/login` | No | Login (student or admin) |
| POST | `/api/auth/logout` | No | Clear cookie |
| GET | `/api/auth/me` | Yes | Return current user |

### Student — `/api/user` (role: student)
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/user/progress` | Yes | currentTaskIndex, totalTasks, percentage |
| GET | `/api/user/streak` | Yes | Streak count, lastLoginDate |
| GET | `/api/user/calendar` | Yes | Login dates (last 365 days) |

### Tasks — `/api/tasks` (role: student)
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/tasks/today` | Yes | Current task or already-done status |
| POST | `/api/tasks/complete` | Yes | Mark today's task done |
| GET | `/api/tasks/all` | Yes | Full roadmap with per-task status |

### Admin — `/api/admin` (role: admin)
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/admin/users` | Yes | List all students |
| GET | `/api/admin/users/:userId` | Yes | One user's full roadmap |
| POST | `/api/admin/users/:userId/skip` | Yes | Set user's currentTaskIndex |

## Admin Role

To create an admin user, either:
1. Register a normal account and manually update the `role` field to `"admin"` in MongoDB
2. Or use the seed script which can create a default admin

## Seed Script

```bash
npm run seed
```

This seeds all 284 training tasks into the database. The script is idempotent — running it multiple times will not create duplicates.

## Screenshots

_Coming soon_
