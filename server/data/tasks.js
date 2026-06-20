/**
 * DevPath — Complete Task Seed Data
 * 284 tasks across 5 phases, 42 weeks
 * 
 * Phase 1: Foundations (Weeks 1–5, Tasks 0–24)
 * Phase 2: Core Stack (Weeks 6–14, Tasks 25–88)
 * Phase 3: Performance, Stability & Security (Weeks 15–24, Tasks 89–158)
 * Phase 4: Real Projects (Weeks 25–36, Tasks 159–242)
 * Phase 5: Professional Practices (Weeks 37–42, Tasks 243–283)
 */

const tasks = [
  // ══════════════════════════════════════════════════════════
  // PHASE 1 — FOUNDATIONS (Weeks 1–5)
  // ══════════════════════════════════════════════════════════

  // ─── Week 1: HTML & Semantic Structure ─────────────────
  {
    index: 0, phase: 1, week: 1, day: 1,
    title: "Audit a Webpage with DevTools",
    description: "Audit a webpage using DevTools. Identify non-semantic elements and rewrite 3 sections using proper tags (header, nav, main, section, article, footer, aside).",
    estimatedTime: "~60 min", difficulty: "Beginner",
    concepts: ["Semantic HTML", "DevTools", "Accessibility"],
    videos: [
      { title: "HTML Semantic Elements", url: "https://www.youtube.com/watch?v=kX3TfdUqpuU" },
      { title: "HTML Tutorial for Beginners", url: "https://www.youtube.com/watch?v=qz0aGYrrlhU" }
    ],
    docs: [{ title: "MDN HTML elements reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" }],
    deliverable: "Before/after HTML file committed to GitHub."
  },
  {
    index: 1, phase: 1, week: 1, day: 2,
    title: "Build a Blog Post Page with Semantic HTML",
    description: "Build a full blog post page using only semantic HTML — no CSS. Must include nav, article with header/footer, sidebar using aside, and a comments section.",
    estimatedTime: "~75 min", difficulty: "Beginner",
    concepts: ["Semantic HTML", "Document structure"],
    videos: [
      { title: "HTML Crash Course for Beginners", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" }
    ],
    docs: [{ title: "MDN article element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article" }],
    deliverable: "Valid HTML file on GitHub."
  },
  {
    index: 2, phase: 1, week: 1, day: 3,
    title: "Accessibility Audit with ARIA and axe",
    description: "Add ARIA labels, alt text, tab order, and skip links to yesterday's blog. Run axe DevTools browser extension and fix all errors.",
    estimatedTime: "~90 min", difficulty: "Beginner",
    concepts: ["ARIA", "Accessibility", "axe DevTools"],
    videos: [
      { title: "Web Accessibility (a11y) Masterclass", url: "https://www.youtube.com/watch?v=dAOGdIOcLps" }
    ],
    docs: [
      { title: "MDN ARIA guide", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" },
      { title: "WebAIM checklist", url: "https://webaim.org/standards/wcag/checklist" }
    ],
    deliverable: "Accessible HTML with 0 axe errors."
  },
  {
    index: 3, phase: 1, week: 1, day: 4,
    title: "Forms Deep Dive",
    description: "Build a registration form using fieldset, legend, label, and all major input types (email, password, tel, date, checkbox, radio). Add validation attributes. No JS.",
    estimatedTime: "~75 min", difficulty: "Beginner",
    concepts: ["HTML Forms", "Input types", "Validation attributes"],
    videos: [
      { title: "HTML Forms Full Course", url: "https://www.youtube.com/watch?v=fNcJuPIZ2WE" },
      { title: "HTML Crash Course (Form Section)", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" }
    ],
    docs: [],
    deliverable: "Working form with all input types."
  },
  {
    index: 4, phase: 1, week: 1, day: 5,
    title: "Git Setup and First Real Workflow",
    description: "Install Git, create GitHub account, initialize a repo, make 5 descriptive commits, push to GitHub. Understand the difference between commit messages that are useful vs useless.",
    estimatedTime: "~60 min", difficulty: "Beginner",
    concepts: ["Git", "GitHub", "Version control"],
    videos: [
      { title: "Git and GitHub Crash Course", url: "https://www.youtube.com/watch?v=vA5TTz6BXhY" }
    ],
    docs: [
      { title: "Git official docs", url: "https://git-scm.com/doc" },
      { title: "GitHub quickstart", url: "https://docs.github.com/en/get-started/quickstart" }
    ],
    deliverable: "Public GitHub repo with 5 real commits."
  },

  // ─── Week 2: CSS Layout & Responsive Design ───────────
  {
    index: 5, phase: 1, week: 2, day: 1,
    title: "CSS Reset and Custom Properties",
    description: "Set up a CSS reset, define :root variables for colors, fonts, spacing, border-radius. Apply to your blog project.",
    estimatedTime: "~60 min", difficulty: "Beginner",
    concepts: ["CSS reset", "CSS variables", ":root"],
    videos: [
      { title: "CSS Custom Properties", url: "https://www.youtube.com/watch?v=oZPR_78wCnY" },
      { title: "CSS Variables Introduction", url: "https://www.youtube.com/watch?v=h24noHYsuGc" }
    ],
    docs: [],
    deliverable: "Clean base stylesheet committed."
  },
  {
    index: 6, phase: 1, week: 2, day: 2,
    title: "Flexbox Responsive Layout",
    description: "Build a responsive navbar and card grid using only Flexbox. Must work from 375px to 1440px.",
    estimatedTime: "~90 min", difficulty: "Beginner",
    concepts: ["Flexbox", "Responsive design", "CSS layout"],
    videos: [
      { title: "Flexbox in 20 minutes", url: "https://www.youtube.com/watch?v=JJSoEo8JSnc" },
      { title: "Flexbox Responsive Layouts", url: "https://www.youtube.com/watch?v=u044iM9xsWU" }
    ],
    docs: [{ title: "MDN Flexbox guide", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" }],
    deliverable: "Responsive nav + card grid."
  },
  {
    index: 7, phase: 1, week: 2, day: 3,
    title: "CSS Grid Layout",
    description: "Rebuild yesterday's card grid using Grid. Write a note explaining when to use Grid vs Flexbox.",
    estimatedTime: "~90 min", difficulty: "Beginner",
    concepts: ["CSS Grid", "Layout decisions"],
    videos: [
      { title: "CSS Grid Crash Course", url: "https://www.youtube.com/watch?v=0xMQfnTU6oo" },
      { title: "CSS Grid Net Ninja Tutorial", url: "https://www.youtube.com/watch?v=x7tLPhnA06w" }
    ],
    docs: [{ title: "MDN Grid guide", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids" }],
    deliverable: "Grid layout + written explanation."
  },
  {
    index: 8, phase: 1, week: 2, day: 4,
    title: "Mobile-First Responsive Design",
    description: "Take a desktop layout and rewrite it mobile-first using only min-width media queries. No max-width allowed today.",
    estimatedTime: "~90 min", difficulty: "Beginner",
    concepts: ["Mobile-first", "Media queries", "Responsive design"],
    videos: [
      { title: "Mobile First CSS", url: "https://www.youtube.com/watch?v=0ohtVzCSHqs" }
    ],
    docs: [],
    deliverable: "Fully responsive mobile-first page."
  },
  {
    index: 9, phase: 1, week: 2, day: 5,
    title: "Full Landing Page Build & Deploy",
    description: "Build a complete page (hero, features, testimonials, footer) using semantic HTML and responsive CSS. No frameworks. Deploy to GitHub Pages.",
    estimatedTime: "~120 min", difficulty: "Beginner",
    concepts: ["Full page layout", "GitHub Pages", "Responsive"],
    videos: [
      { title: "Build a landing page", url: "https://www.youtube.com/watch?v=p0bGHP-PXD4" },
      { title: "Responsive Landing Page Tutorial", url: "https://www.youtube.com/watch?v=oYRda7UtuhA" }
    ],
    docs: [],
    deliverable: "Live GitHub Pages URL."
  },

  // ─── Week 3: JavaScript Core ──────────────────────────
  {
    index: 10, phase: 1, week: 3, day: 1,
    title: "JavaScript Fundamentals",
    description: "var/let/const differences, type coercion, and the event loop. Write 10 annotated console.log experiments proving you understand each concept.",
    estimatedTime: "~75 min", difficulty: "Beginner",
    concepts: ["JavaScript basics", "Event loop", "Type coercion"],
    videos: [{ title: "JavaScript Event Loop", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ" }],
    docs: [{ title: "MDN JavaScript guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }],
    deliverable: "Annotated JS file."
  },
  {
    index: 11, phase: 1, week: 3, day: 2,
    title: "Closures and Scope",
    description: "Write 5 functions demonstrating closure. Build a counter factory using closures. Explain in a comment why this is useful.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Closures", "Scope", "Factory functions"],
    videos: [{ title: "JavaScript Closures Explained", url: "https://www.youtube.com/watch?v=vKJpN5FAeF4" }],
    docs: [],
    deliverable: "Closure examples file."
  },
  {
    index: 12, phase: 1, week: 3, day: 3,
    title: "Array Methods Mastery",
    description: "Solve 10 problems using only map, filter, reduce, find, some, every. No for loops allowed.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Array methods", "Functional programming"],
    videos: [],
    docs: [{ title: "MDN Array methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }],
    deliverable: "10 solved problems with comments."
  },
  {
    index: 13, phase: 1, week: 3, day: 4,
    title: "DOM Manipulation Todo List",
    description: "Build a todo list using only vanilla JS DOM APIs. No innerHTML — use createElement and appendChild. Add, delete, and complete functionality.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["DOM", "createElement", "Event listeners"],
    videos: [{ title: "DOM Manipulation Crash Course", url: "https://www.youtube.com/watch?v=0ik6X4DJKCc" }],
    docs: [],
    deliverable: "Working todo app."
  },
  {
    index: 14, phase: 1, week: 3, day: 5,
    title: "Event Delegation Refactor",
    description: "Refactor the todo app to use event delegation on a single parent. Add keyboard shortcuts: Enter to add, Delete key to remove selected item.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Event delegation", "Keyboard events", "Performance"],
    videos: [],
    docs: [{ title: "MDN Event delegation", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation" }],
    deliverable: "Refactored todo app."
  },

  // ─── Week 4: Async JavaScript & APIs ──────────────────
  {
    index: 15, phase: 1, week: 4, day: 1,
    title: "Promises from Scratch",
    description: "Wrap setTimeout in a Promise. Chain 3 promises. Handle rejection with .catch().",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Promises", "Async", "Error handling"],
    videos: [{ title: "JavaScript Promises", url: "https://www.youtube.com/watch?v=DHvZLI7Db8E" }],
    docs: [{ title: "MDN Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" }],
    deliverable: "Promise chain demo file."
  },
  {
    index: 16, phase: 1, week: 4, day: 2,
    title: "Async/Await Conversion",
    description: "Rewrite yesterday's promise chains using async/await. Add try/catch. Understand what async/await actually compiles to.",
    estimatedTime: "~60 min", difficulty: "Intermediate",
    concepts: ["async/await", "try/catch", "Error handling"],
    videos: [],
    docs: [{ title: "MDN async/await", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises" }],
    deliverable: "Async version of promise demo."
  },
  {
    index: 17, phase: 1, week: 4, day: 3,
    title: "Fetch API and REST",
    description: "Call JSONPlaceholder. Show a list of posts. Click a post to see its comments. Show loading state and error state visibly.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Fetch", "REST APIs", "Loading states"],
    videos: [{ title: "Fetch API Crash Course", url: "https://www.youtube.com/watch?v=cuEtnrL9-H0" }],
    docs: [],
    deliverable: "Posts app with loading and error states."
  },
  {
    index: 18, phase: 1, week: 4, day: 4,
    title: "Weather App with Open-Meteo API",
    description: "Use the Open-Meteo API (free, no key). Show weather by city search. Handle geolocation. All loading/error states covered.",
    estimatedTime: "~120 min", difficulty: "Intermediate",
    concepts: ["APIs", "Geolocation", "Error states", "UX"],
    videos: [{ title: "Weather App JavaScript", url: "https://www.youtube.com/watch?v=MIYQR-Ybrn4" }],
    docs: [],
    deliverable: "Live weather app on GitHub Pages."
  },
  {
    index: 19, phase: 1, week: 4, day: 5,
    title: "Production Error Handling",
    description: "Add retry logic (3 retries, exponential backoff), a global error display component, and loading skeletons to the weather app.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Retry logic", "Exponential backoff", "Loading skeletons", "UX"],
    videos: [],
    docs: [{ title: "MDN Error handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" }],
    deliverable: "Weather app with robust error handling."
  },

  // ─── Week 5: Developer Workflow ───────────────────────
  {
    index: 20, phase: 1, week: 5, day: 1,
    title: "Git Branching Strategy",
    description: "Create a feature branch, make changes, open a PR on GitHub, review your own diff, merge it. Repeat 3 times.",
    estimatedTime: "~60 min", difficulty: "Beginner",
    concepts: ["Git branching", "Pull requests", "GitHub flow"],
    videos: [],
    docs: [{ title: "GitHub flow guide", url: "https://docs.github.com/en/get-started/quickstart/github-flow" }],
    deliverable: "3 merged PRs."
  },
  {
    index: 21, phase: 1, week: 5, day: 2,
    title: "Code Review Practice",
    description: "Fork a beginner project on GitHub. Write a detailed code review as code-review.md (what is good, what could be improved, one specific suggestion with example code).",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Code review", "Communication", "Code quality"],
    videos: [{ title: "How to do a code review", url: "https://www.youtube.com/watch?v=a9_0UUUNt-Y" }],
    docs: [],
    deliverable: "code-review.md file."
  },
  {
    index: 22, phase: 1, week: 5, day: 3,
    title: "DevTools Mastery & Lighthouse",
    description: "Profile a webpage, find a performance bottleneck, fix it. Run Lighthouse and score above 90 on performance.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Lighthouse", "Performance profiling", "DevTools"],
    videos: [],
    docs: [{ title: "Chrome DevTools guide", url: "https://developer.chrome.com/docs/devtools/" }],
    deliverable: "Lighthouse report + fix summary."
  },
  {
    index: 23, phase: 1, week: 5, day: 4,
    title: "ESLint + Prettier Setup",
    description: "Add both to a project. Configure rules. Run on your weather app and fix all issues. Understand why linting matters on a team.",
    estimatedTime: "~60 min", difficulty: "Beginner",
    concepts: ["ESLint", "Prettier", "Code quality", "Tooling"],
    videos: [],
    docs: [
      { title: "ESLint docs", url: "https://eslint.org/docs/latest/" },
      { title: "Prettier docs", url: "https://prettier.io/docs/en/index.html" }
    ],
    deliverable: "Configured project with 0 lint errors."
  },
  {
    index: 24, phase: 1, week: 5, day: 5,
    title: "Phase 1 Capstone — Developer Portfolio",
    description: "Build a multi-page developer portfolio: home, projects page (loads your GitHub repos via GitHub public API), contact form. Semantic HTML, responsive CSS, proper Git workflow. Deploy to GitHub Pages.",
    estimatedTime: "~150 min", difficulty: "Intermediate",
    concepts: ["GitHub API", "Responsive", "Git", "Deployment"],
    videos: [],
    docs: [],
    deliverable: "Live portfolio URL with real GitHub repos shown."
  },

  // ══════════════════════════════════════════════════════════
  // PHASE 2 — CORE STACK (Weeks 6–14)
  // ══════════════════════════════════════════════════════════

  // ─── Week 6: React Fundamentals ───────────────────────
  {
    index: 25, phase: 2, week: 6, day: 1,
    title: "Vite + React Setup and Components",
    description: "Scaffold with Vite, understand the file structure, build 5 isolated components (Button, Card, Badge, Avatar, Input) that accept props.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["React", "Vite", "Components", "Props"],
    videos: [{ title: "React Crash Course 2024", url: "https://www.youtube.com/watch?v=LDB4uaJ87e0" }],
    docs: [{ title: "React official docs", url: "https://react.dev" }],
    deliverable: "5 working components."
  },
  {
    index: 26, phase: 2, week: 6, day: 2,
    title: "useState — Interactive Quiz App",
    description: "Build an interactive quiz app (5 questions, score tracking, result screen). No external libraries.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["useState", "Conditional rendering", "Component state"],
    videos: [],
    docs: [{ title: "React useState", url: "https://react.dev/reference/react/useState" }],
    deliverable: "Working quiz app."
  },
  {
    index: 27, phase: 2, week: 6, day: 3,
    title: "useEffect — Countdown Timer",
    description: "Add a 60-second countdown timer to the quiz that auto-submits. Understand cleanup functions for intervals.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["useEffect", "Intervals", "Cleanup functions"],
    videos: [],
    docs: [{ title: "React useEffect", url: "https://react.dev/reference/react/useEffect" }],
    deliverable: "Timed quiz with auto-submit."
  },
  {
    index: 28, phase: 2, week: 6, day: 4,
    title: "Lists and Keys — Filterable User List",
    description: "Fetch 20 users from JSONPlaceholder, render in a filterable list. Understand why React keys matter and what happens without them.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Lists", "Keys", "Filtering", "Fetch in React"],
    videos: [{ title: "React Lists and Keys", url: "https://www.youtube.com/watch?v=0sasRxl35_8" }],
    docs: [],
    deliverable: "Filterable user list."
  },
  {
    index: 29, phase: 2, week: 6, day: 5,
    title: "Controlled Forms — Multi-Step Registration",
    description: "Build a 3-step registration form with controlled inputs, validation at each step, and a summary on step 3.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Controlled inputs", "Form validation", "Multi-step UI"],
    videos: [],
    docs: [],
    deliverable: "Working 3-step form."
  },

  // ─── Week 7: React Intermediate ───────────────────────
  {
    index: 30, phase: 2, week: 7, day: 1,
    title: "useContext — Theme Switcher",
    description: "Build a light/dark theme switcher using Context API. No prop drilling.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Context API", "useContext", "Global state"],
    videos: [],
    docs: [{ title: "React Context", url: "https://react.dev/reference/react/createContext" }],
    deliverable: "Themed app with context."
  },
  {
    index: 31, phase: 2, week: 7, day: 2,
    title: "useReducer — Quiz Refactor",
    description: "Refactor the quiz app state to useReducer instead of multiple useState calls. Write a comment explaining when useReducer is better.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["useReducer", "State machines", "Complex state"],
    videos: [],
    docs: [{ title: "React useReducer", url: "https://react.dev/reference/react/useReducer" }],
    deliverable: "Refactored quiz."
  },
  {
    index: 32, phase: 2, week: 7, day: 3,
    title: "Custom Hooks — useFetch",
    description: "Extract the data fetching logic from your user list into a useFetch custom hook. Reuse it in two components.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Custom hooks", "Reusability", "Abstraction"],
    videos: [{ title: "Custom React Hooks", url: "https://www.youtube.com/watch?v=6ThXsUwLWvc" }],
    docs: [],
    deliverable: "useFetch hook used in 2 places."
  },
  {
    index: 33, phase: 2, week: 7, day: 4,
    title: "React Router v6",
    description: "Add routing to your portfolio. Dynamic routes for project detail pages. A proper 404 page. Navigation with NavLink (active state styling).",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["React Router", "Dynamic routes", "Navigation"],
    videos: [],
    docs: [{ title: "React Router v6 docs", url: "https://reactrouter.com/en/main" }],
    deliverable: "Fully routed multi-page app."
  },
  {
    index: 34, phase: 2, week: 7, day: 5,
    title: "React Query — Server State Management",
    description: "Replace all manual fetch+useState+useEffect patterns with React Query. Understand caching, stale time, and background refetching.",
    estimatedTime: "~90 min", difficulty: "Advanced",
    concepts: ["React Query", "Caching", "Server state"],
    videos: [],
    docs: [{ title: "TanStack Query docs", url: "https://tanstack.com/query/latest" }],
    deliverable: "App fully using React Query."
  },

  // ─── Week 8: Node.js & Express ────────────────────────
  {
    index: 35, phase: 2, week: 8, day: 1,
    title: "Node.js CLI Tool",
    description: "Build a CLI tool that reads a JSON file of tasks, filters by priority, and outputs them sorted. No Express yet. Pure Node.js.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Node.js", "File system", "CLI tools"],
    videos: [],
    docs: [{ title: "Node.js official docs", url: "https://nodejs.org/en/docs" }],
    deliverable: "Working CLI tool."
  },
  {
    index: 36, phase: 2, week: 8, day: 2,
    title: "Express Fundamentals — REST API",
    description: "Build an API with 5 routes: GET /health, GET /users, GET /users/:id, POST /users, DELETE /users/:id. In-memory array as data.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Express", "REST", "Route parameters"],
    videos: [{ title: "Express Crash Course", url: "https://www.youtube.com/watch?v=L72fhGm1tfE" }],
    docs: [{ title: "Express docs", url: "https://expressjs.com/" }],
    deliverable: "Running Express API tested with Postman or Thunder Client."
  },
  {
    index: 37, phase: 2, week: 8, day: 3,
    title: "Express Middleware Deep Dive",
    description: "Add request logging middleware (timestamp + method + path), a global error handler (catches all unhandled errors), and express-rate-limit (100 requests/15 min/IP).",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Middleware", "Error handling", "Rate limiting"],
    videos: [],
    docs: [{ title: "express-rate-limit", url: "https://github.com/express-rate-limit/express-rate-limit" }],
    deliverable: "Express app with all 3 middleware layers."
  },
  {
    index: 38, phase: 2, week: 8, day: 4,
    title: "Input Validation with express-validator",
    description: "Add express-validator to all POST routes. Return 400 with clear field-level error messages on invalid input. Never trust client data.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Validation", "Security", "express-validator"],
    videos: [],
    docs: [{ title: "express-validator docs", url: "https://express-validator.github.io/docs/" }],
    deliverable: "Validated API returning proper 400 errors."
  },
  {
    index: 39, phase: 2, week: 8, day: 5,
    title: "CORS and Security Headers",
    description: "Configure CORS to whitelist only your frontend origin. Add helmet.js. Connect your React app to call this API.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["CORS", "Security headers", "helmet.js"],
    videos: [],
    docs: [{ title: "helmet.js docs", url: "https://helmetjs.github.io/" }],
    deliverable: "React frontend successfully calling Express backend."
  },

  // ─── Week 9: Databases ────────────────────────────────
  {
    index: 40, phase: 2, week: 9, day: 1,
    title: "MongoDB + Mongoose Setup",
    description: "Connect to MongoDB Atlas free cluster. Define a User schema. Implement full CRUD.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["MongoDB", "Mongoose", "Atlas", "CRUD"],
    videos: [{ title: "MongoDB Crash Course", url: "https://www.youtube.com/watch?v=-56x56UppqQ" }],
    docs: [{ title: "Mongoose docs", url: "https://mongoosejs.com/docs/" }],
    deliverable: "Working DB + CRUD."
  },
  {
    index: 41, phase: 2, week: 9, day: 2,
    title: "Schema Design — Blog Data Model",
    description: "Design schemas for a blog: User, Post, Comment, Tag. Decide what to embed vs reference. Write it in Mongoose with comments explaining each decision.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Schema design", "Embedding vs referencing", "Data modeling"],
    videos: [],
    docs: [{ title: "MongoDB schema design patterns", url: "https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/" }],
    deliverable: "Schema file with reasoning."
  },
  {
    index: 42, phase: 2, week: 9, day: 3,
    title: "Mongoose Query Mastery",
    description: "Write 10 Mongoose queries: find by field, sort, limit, skip, populate references, and a basic aggregation.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Mongoose queries", "Aggregation", "Populate"],
    videos: [],
    docs: [{ title: "Mongoose queries", url: "https://mongoosejs.com/docs/queries.html" }],
    deliverable: "10 annotated queries."
  },
  {
    index: 43, phase: 2, week: 9, day: 4,
    title: "MongoDB Indexes and Performance",
    description: "Add indexes to your User schema on the email field. Use .explain() to compare query plan with and without index. Understand compound indexes.",
    estimatedTime: "~75 min", difficulty: "Advanced",
    concepts: ["MongoDB indexes", "Query performance", "explain()"],
    videos: [],
    docs: [{ title: "MongoDB indexes", url: "https://www.mongodb.com/docs/manual/indexes/" }],
    deliverable: "Indexed schema + explain output."
  },
  {
    index: 44, phase: 2, week: 9, day: 5,
    title: "Cursor-Based Pagination",
    description: "Implement cursor-based pagination on a posts endpoint. Return a nextCursor in the response. Client uses it to fetch the next page.",
    estimatedTime: "~90 min", difficulty: "Advanced",
    concepts: ["Pagination", "Cursor-based pagination", "API design"],
    videos: [],
    docs: [],
    deliverable: "Paginated API endpoint."
  },

  // ─── Week 10: Authentication ──────────────────────────
  {
    index: 45, phase: 2, week: 10, day: 1,
    title: "Password Hashing with bcrypt",
    description: "Implement bcrypt with 12 salt rounds. Write a test proving plain passwords fail comparison. Never store plain text anywhere.",
    estimatedTime: "~60 min", difficulty: "Intermediate",
    concepts: ["bcrypt", "Password security", "Hashing"],
    videos: [],
    docs: [{ title: "bcrypt npm", url: "https://www.npmjs.com/package/bcrypt" }],
    deliverable: "Auth utility functions."
  },
  {
    index: 46, phase: 2, week: 10, day: 2,
    title: "JWT Authentication Endpoints",
    description: "Build register and login endpoints returning JWT tokens stored in httpOnly cookies.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["JWT", "httpOnly cookies", "Auth flow"],
    videos: [{ title: "JWT Authentication Node.js", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" }],
    docs: [{ title: "jsonwebtoken docs", url: "https://github.com/auth0/node-jsonwebtoken" }],
    deliverable: "Working register + login endpoints."
  },
  {
    index: 47, phase: 2, week: 10, day: 3,
    title: "Protected Routes Middleware",
    description: "Write auth middleware that reads and validates the JWT cookie. Protect 3 API routes. Return 401 if token is missing or expired.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Auth middleware", "Protected routes", "401 errors"],
    videos: [],
    docs: [],
    deliverable: "Middleware + 3 protected routes."
  },
  {
    index: 48, phase: 2, week: 10, day: 4,
    title: "Refresh Token System",
    description: "Implement a refresh token system. Store refresh tokens in DB. Return a new access token when /api/auth/refresh is called with a valid refresh token.",
    estimatedTime: "~90 min", difficulty: "Advanced",
    concepts: ["Refresh tokens", "Token rotation", "Session management"],
    videos: [{ title: "Refresh Tokens JWT Authentication", url: "https://www.youtube.com/watch?v=Ud5xKCYQTjM" }],
    docs: [],
    deliverable: "Refresh token flow working end-to-end."
  },
  {
    index: 49, phase: 2, week: 10, day: 5,
    title: "Full Frontend Auth Flow",
    description: "Build the complete React auth flow: register, login, logout, protected pages, persist auth state on page refresh using /api/auth/me.",
    estimatedTime: "~120 min", difficulty: "Advanced",
    concepts: ["React auth", "AuthContext", "Protected routes", "Persistence"],
    videos: [{ title: "Full Stack Auth React", url: "https://www.youtube.com/watch?v=FcwfjMebjTU" }],
    docs: [],
    deliverable: "Complete auth system frontend + backend."
  },

  // ─── Weeks 11–14: REST, TypeScript, Deployment ────────
  {
    index: 50, phase: 2, week: 11, day: 1,
    title: "REST API Versioning",
    description: "Implement API versioning using URL prefixes (/api/v1/). Set up route structure that supports multiple versions cleanly.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["API versioning", "REST best practices", "Route organization"],
    videos: [], docs: [{ title: "REST API versioning", url: "https://restfulapi.net/versioning/" }],
    deliverable: "Versioned API structure."
  },
  {
    index: 51, phase: 2, week: 11, day: 2,
    title: "Consistent API Response Shape",
    description: "Create a response helper that wraps all API responses in { success, data, error, meta } format. Retrofit all existing endpoints.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["API design", "Response formatting", "Consistency"],
    videos: [], docs: [],
    deliverable: "Consistent API responses across all endpoints."
  },
  {
    index: 52, phase: 2, week: 11, day: 3,
    title: "HTTP Status Codes Deep Dive",
    description: "Audit your API and ensure every endpoint returns the correct HTTP status code (200, 201, 204, 400, 401, 403, 404, 409, 500). Document each decision.",
    estimatedTime: "~60 min", difficulty: "Intermediate",
    concepts: ["HTTP status codes", "REST semantics", "Error responses"],
    videos: [], docs: [{ title: "MDN HTTP status codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" }],
    deliverable: "Status code audit document."
  },
  {
    index: 53, phase: 2, week: 11, day: 4,
    title: "Request/Response Logging Middleware",
    description: "Build a comprehensive logging middleware that logs request method, path, status code, response time, and IP. Format logs for readability.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Logging", "Middleware", "Debugging"],
    videos: [], docs: [],
    deliverable: "Logging middleware with response timing."
  },
  {
    index: 54, phase: 2, week: 11, day: 5,
    title: "API Error Handling Patterns",
    description: "Create a custom AppError class with status codes. Build an async handler wrapper that catches all errors. Implement field-level validation errors.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Error classes", "Async error handling", "Validation errors"],
    videos: [], docs: [],
    deliverable: "Error handling system with custom error classes."
  },
  {
    index: 55, phase: 2, week: 12, day: 1,
    title: "TypeScript — Basic Types and Interfaces",
    description: "Set up TypeScript in a new project. Define types for User, Task, and API responses. Understand the difference between type and interface.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["TypeScript", "Types", "Interfaces", "Type safety"],
    videos: [{ title: "TypeScript for Beginners", url: "https://www.youtube.com/watch?v=BwuLxPH8IDs" }],
    docs: [{ title: "TypeScript handbook", url: "https://www.typescriptlang.org/docs/handbook/" }],
    deliverable: "TypeScript project with typed models."
  },
  {
    index: 56, phase: 2, week: 12, day: 2,
    title: "TypeScript — Typing Express Routes",
    description: "Add TypeScript to an Express server. Type all request handlers, middleware, and response objects. Use generics for route params.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["TypeScript with Express", "Request types", "Generics"],
    videos: [], docs: [{ title: "Express TypeScript guide", url: "https://expressjs.com/en/resources/frameworks.html" }],
    deliverable: "Fully typed Express server."
  },
  {
    index: 57, phase: 2, week: 12, day: 3,
    title: "TypeScript — Typing React Components",
    description: "Add TypeScript to a React app. Type all props, state, context, and event handlers. Understand FC vs function declaration.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["TypeScript with React", "Props types", "Event types"],
    videos: [], docs: [{ title: "React TypeScript cheatsheet", url: "https://react-typescript-cheatsheet.netlify.app/" }],
    deliverable: "Fully typed React components."
  },
  {
    index: 58, phase: 2, week: 12, day: 4,
    title: "TypeScript — Advanced Patterns",
    description: "Practice utility types (Partial, Pick, Omit, Record), discriminated unions, and type guards. Build a type-safe event system.",
    estimatedTime: "~90 min", difficulty: "Advanced",
    concepts: ["Utility types", "Discriminated unions", "Type guards"],
    videos: [], docs: [{ title: "TypeScript utility types", url: "https://www.typescriptlang.org/docs/handbook/utility-types.html" }],
    deliverable: "Advanced TypeScript examples."
  },
  {
    index: 59, phase: 2, week: 12, day: 5,
    title: "TypeScript — Strict Mode Migration",
    description: "Enable strict mode on an existing project. Fix all type errors that appear. Understand why strict mode catches more bugs.",
    estimatedTime: "~75 min", difficulty: "Advanced",
    concepts: ["Strict mode", "Type migration", "noImplicitAny"],
    videos: [], docs: [],
    deliverable: "Project running in strict mode with zero errors."
  },
  {
    index: 60, phase: 2, week: 13, day: 1,
    title: "Swagger/OpenAPI Documentation",
    description: "Add swagger-jsdoc and swagger-ui-express to your API. Document all endpoints with request/response schemas.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Swagger", "OpenAPI", "API documentation"],
    videos: [], docs: [{ title: "Swagger docs", url: "https://swagger.io/docs/" }],
    deliverable: "Interactive API docs at /api-docs."
  },
  {
    index: 61, phase: 2, week: 13, day: 2,
    title: "Environment Variable Management",
    description: "Set up dotenv properly. Create .env.example. Validate all required env vars on startup. Handle missing vars gracefully.",
    estimatedTime: "~60 min", difficulty: "Beginner",
    concepts: ["dotenv", "Environment variables", "Configuration"],
    videos: [], docs: [{ title: "dotenv docs", url: "https://github.com/motdotla/dotenv" }],
    deliverable: "Validated env config with .env.example."
  },
  {
    index: 62, phase: 2, week: 13, day: 3,
    title: "Full Stack Connection — React + Express + MongoDB",
    description: "Connect your React frontend to Express backend to MongoDB. Implement a complete feature: create, read, update, delete through all layers.",
    estimatedTime: "~120 min", difficulty: "Intermediate",
    concepts: ["Full stack", "CRUD", "API integration"],
    videos: [], docs: [],
    deliverable: "Working full-stack CRUD feature."
  },
  {
    index: 63, phase: 2, week: 13, day: 4,
    title: "Proxy Configuration and API Client",
    description: "Set up Vite proxy for development. Build a centralized API client (axios instance or fetch wrapper) with interceptors for auth and error handling.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Vite proxy", "API client", "Interceptors"],
    videos: [], docs: [],
    deliverable: "Centralized API client with error handling."
  },
  {
    index: 64, phase: 2, week: 13, day: 5,
    title: "Full Stack Error Handling",
    description: "Implement end-to-end error handling: server validation errors → API response → client display. Toast notifications for success/error.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Error handling", "Toast notifications", "UX"],
    videos: [], docs: [],
    deliverable: "Complete error handling across the stack."
  },
  {
    index: 65, phase: 2, week: 14, day: 1,
    title: "Deploy Backend to Railway",
    description: "Deploy your Express + MongoDB backend to Railway. Configure environment variables. Verify all endpoints work in production.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Railway", "Deployment", "Environment config"],
    videos: [], docs: [{ title: "Railway docs", url: "https://docs.railway.app/" }],
    deliverable: "Live backend URL."
  },
  {
    index: 66, phase: 2, week: 14, day: 2,
    title: "Deploy Frontend to Vercel",
    description: "Deploy your React frontend to Vercel. Configure environment variables for the production API URL. Set up automatic deployments from GitHub.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Vercel", "CI/CD", "Production deployment"],
    videos: [], docs: [{ title: "Vercel docs", url: "https://vercel.com/docs" }],
    deliverable: "Live frontend URL connected to production backend."
  },
  {
    index: 67, phase: 2, week: 14, day: 3,
    title: "Custom Domain Setup",
    description: "Purchase or use a free domain. Configure DNS to point to your Vercel deployment. Set up HTTPS. Understand A records vs CNAME.",
    estimatedTime: "~60 min", difficulty: "Beginner",
    concepts: ["DNS", "Custom domains", "HTTPS", "SSL"],
    videos: [], docs: [],
    deliverable: "App accessible via custom domain with HTTPS."
  },
  {
    index: 68, phase: 2, week: 14, day: 4,
    title: "Production README and Documentation",
    description: "Write a comprehensive README that could onboard a new teammate: setup, architecture overview, API docs link, deployment process, contributing guidelines.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Documentation", "README", "Developer onboarding"],
    videos: [], docs: [],
    deliverable: "Professional README with all sections."
  },
  {
    index: 69, phase: 2, week: 14, day: 5,
    title: "Phase 2 Capstone — Full Stack Review",
    description: "Review your entire React + Express + MongoDB stack. Fix any bugs, improve error messages, add loading states, and ensure mobile responsiveness. Prepare a 5-minute demo.",
    estimatedTime: "~120 min", difficulty: "Intermediate",
    concepts: ["Code review", "Polish", "Demo preparation"],
    videos: [], docs: [],
    deliverable: "Polished full-stack app ready for demo."
  },

  // ══════════════════════════════════════════════════════════
  // PHASE 3 — PERFORMANCE, STABILITY & SECURITY (Weeks 15–24)
  // ══════════════════════════════════════════════════════════

  // ─── Week 15: Frontend Performance ────────────────────
  {
    index: 70, phase: 3, week: 15, day: 1,
    title: "Lighthouse Performance Optimization",
    description: "Run Lighthouse on your deployed app. Identify the 3 biggest performance issues. Fix them and document each improvement with before/after scores.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Lighthouse", "Core Web Vitals", "Performance audit"],
    videos: [], docs: [{ title: "web.dev performance", url: "https://web.dev/performance/" }],
    deliverable: "Lighthouse report with improvements documented."
  },
  {
    index: 71, phase: 3, week: 15, day: 2,
    title: "Image Optimization — WebP and Lazy Loading",
    description: "Convert all images to WebP format. Implement native lazy loading with loading='lazy'. Add responsive srcset for different screen sizes.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["WebP", "Lazy loading", "srcset", "Image optimization"],
    videos: [], docs: [{ title: "MDN lazy loading", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading" }],
    deliverable: "Optimized images with lazy loading."
  },
  {
    index: 72, phase: 3, week: 15, day: 3,
    title: "React Code Splitting",
    description: "Implement code splitting with React.lazy and Suspense for all route-level components. Measure bundle size before and after.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["React.lazy", "Suspense", "Code splitting", "Bundle size"],
    videos: [], docs: [{ title: "React code splitting", url: "https://react.dev/reference/react/lazy" }],
    deliverable: "Code-split routes with loading fallbacks."
  },
  {
    index: 73, phase: 3, week: 15, day: 4,
    title: "HTTP Cache Headers",
    description: "Configure Cache-Control, ETag, and Last-Modified headers on your Express API. Understand the difference between no-cache and no-store.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Cache-Control", "ETag", "HTTP caching"],
    videos: [], docs: [{ title: "MDN HTTP caching", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" }],
    deliverable: "Properly cached API responses."
  },
  {
    index: 74, phase: 3, week: 15, day: 5,
    title: "Redis for API Response Caching",
    description: "Add Redis to your project. Cache expensive API responses. Implement cache invalidation on data updates. Measure response time improvement.",
    estimatedTime: "~120 min", difficulty: "Advanced",
    concepts: ["Redis", "Server-side caching", "Cache invalidation"],
    videos: [], docs: [{ title: "Redis docs", url: "https://redis.io/docs/" }],
    deliverable: "Redis caching with measurable speedup."
  },

  // ─── Week 16: JavaScript Performance ──────────────────
  {
    index: 75, phase: 3, week: 16, day: 1,
    title: "Debounce — Implement from Scratch",
    description: "Implement debounce from scratch. Then use it on a search input. Compare behavior with and without debounce using network tab.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Debounce", "Performance", "Search optimization"],
    videos: [], docs: [],
    deliverable: "Custom debounce + search demo."
  },
  {
    index: 76, phase: 3, week: 16, day: 2,
    title: "Throttle — Implement from Scratch",
    description: "Implement throttle from scratch. Apply to scroll and resize event handlers. Understand the difference between debounce and throttle.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Throttle", "Scroll performance", "Event optimization"],
    videos: [], docs: [],
    deliverable: "Custom throttle + scroll/resize demos."
  },
  {
    index: 77, phase: 3, week: 16, day: 3,
    title: "React.memo and useMemo",
    description: "Profile your React app to find unnecessary re-renders. Fix them with React.memo and useMemo. Document what changed and why.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["React.memo", "useMemo", "Re-render optimization"],
    videos: [], docs: [{ title: "React memo", url: "https://react.dev/reference/react/memo" }],
    deliverable: "Optimized components with profiler evidence."
  },
  {
    index: 78, phase: 3, week: 16, day: 4,
    title: "useCallback and Referential Equality",
    description: "Understand why callback references cause re-renders. Apply useCallback to event handlers passed to child components. Profile the difference.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["useCallback", "Referential equality", "Performance"],
    videos: [], docs: [{ title: "React useCallback", url: "https://react.dev/reference/react/useCallback" }],
    deliverable: "Optimized callbacks with profiler comparison."
  },
  {
    index: 79, phase: 3, week: 16, day: 5,
    title: "List Virtualization with react-window",
    description: "Render a list of 10,000 items using react-window. Compare memory usage and scroll performance with a non-virtualized list.",
    estimatedTime: "~90 min", difficulty: "Advanced",
    concepts: ["Virtualization", "react-window", "Large list rendering"],
    videos: [], docs: [{ title: "react-window docs", url: "https://react-window.vercel.app/" }],
    deliverable: "Virtualized list with performance comparison."
  },

  // ─── Week 17: Database Performance ────────────────────
  {
    index: 80, phase: 3, week: 17, day: 1,
    title: "N+1 Query Problem",
    description: "Create a scenario demonstrating the N+1 problem. Fix it using populate and lean(). Log query counts before and after.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["N+1 problem", "Populate", "Query optimization"],
    videos: [], docs: [],
    deliverable: "N+1 problem demo and fix."
  },
  {
    index: 81, phase: 3, week: 17, day: 2,
    title: "MongoDB Query Optimization",
    description: "Use explain() to analyze 5 slow queries. Add appropriate indexes. Compare query execution plans before and after.",
    estimatedTime: "~90 min", difficulty: "Advanced",
    concepts: ["explain()", "Query plans", "Index optimization"],
    videos: [], docs: [{ title: "MongoDB performance", url: "https://www.mongodb.com/docs/manual/administration/optimization/" }],
    deliverable: "Query optimization report."
  },
  {
    index: 82, phase: 3, week: 17, day: 3,
    title: "MongoDB Connection Pooling",
    description: "Configure Mongoose connection pool size. Monitor active connections. Understand how pooling improves throughput under load.",
    estimatedTime: "~60 min", difficulty: "Intermediate",
    concepts: ["Connection pooling", "Mongoose config", "Concurrency"],
    videos: [], docs: [],
    deliverable: "Configured connection pool with documentation."
  },
  {
    index: 83, phase: 3, week: 17, day: 4,
    title: "MongoDB Aggregation Pipeline",
    description: "Build 5 aggregation pipelines: group by, sort, project, match, and lookup. Use them to generate dashboard statistics.",
    estimatedTime: "~90 min", difficulty: "Advanced",
    concepts: ["Aggregation pipeline", "MongoDB analytics", "Data processing"],
    videos: [], docs: [{ title: "MongoDB aggregation", url: "https://www.mongodb.com/docs/manual/aggregation/" }],
    deliverable: "5 working aggregation pipelines."
  },
  {
    index: 84, phase: 3, week: 17, day: 5,
    title: "Database Backup and Recovery",
    description: "Set up mongodump/mongorestore locally. Create a backup script. Practice restoring from backup. Document the recovery process.",
    estimatedTime: "~60 min", difficulty: "Intermediate",
    concepts: ["Backup", "Recovery", "Data safety"],
    videos: [], docs: [],
    deliverable: "Backup/restore scripts with documentation."
  },

  // ─── Week 18: Error Handling & Logging ────────────────
  {
    index: 85, phase: 3, week: 18, day: 1,
    title: "React Error Boundaries",
    description: "Implement Error Boundaries in your React app. Create a fallback UI for crashed components. Add a 'Try Again' button that resets the error state.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Error Boundaries", "Fallback UI", "Error recovery"],
    videos: [], docs: [{ title: "React Error Boundaries", url: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary" }],
    deliverable: "Error Boundary components with fallback UI."
  },
  {
    index: 86, phase: 3, week: 18, day: 2,
    title: "Structured Logging with Winston",
    description: "Replace console.log with Winston. Configure log levels, file transports, and JSON formatting. Add request correlation IDs.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Winston", "Structured logging", "Log levels"],
    videos: [], docs: [{ title: "Winston docs", url: "https://github.com/winstonjs/winston" }],
    deliverable: "Winston logging with file output."
  },
  {
    index: 87, phase: 3, week: 18, day: 3,
    title: "Error Tracking with Sentry",
    description: "Set up Sentry for both React and Express. Trigger test errors and verify they appear in the Sentry dashboard with full stack traces.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Sentry", "Error tracking", "Monitoring"],
    videos: [], docs: [{ title: "Sentry docs", url: "https://docs.sentry.io/" }],
    deliverable: "Sentry configured for frontend and backend."
  },
  {
    index: 88, phase: 3, week: 18, day: 4,
    title: "Health Checks and Graceful Shutdown",
    description: "Add a /health endpoint that checks DB connectivity. Implement graceful shutdown on SIGTERM (close DB connections, finish pending requests).",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["Health checks", "Graceful shutdown", "Process signals"],
    videos: [], docs: [],
    deliverable: "Health endpoint + graceful shutdown handler."
  },
  {
    index: 89, phase: 3, week: 18, day: 5,
    title: "Centralized Error Monitoring Dashboard",
    description: "Build a simple admin page that shows the last 50 errors from your logs. Include timestamp, error message, stack trace, and request path.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Error monitoring", "Admin tools", "Debugging"],
    videos: [], docs: [],
    deliverable: "Error monitoring page."
  },

  // ─── Week 19: Security Fundamentals ───────────────────
  {
    index: 90, phase: 3, week: 19, day: 1,
    title: "Environment Variable Security",
    description: "Audit your .env file. Ensure .env is gitignored, .env.example is committed. Validate all required vars on startup with clear error messages.",
    estimatedTime: "~45 min", difficulty: "Beginner",
    concepts: [".env security", "gitignore", "Config validation"],
    videos: [], docs: [],
    deliverable: "Secured environment configuration."
  },
  {
    index: 91, phase: 3, week: 19, day: 2,
    title: "HTTPS Configuration",
    description: "Understand how HTTPS works (TLS handshake, certificates). Verify your deployed app uses HTTPS. Set up HSTS header.",
    estimatedTime: "~60 min", difficulty: "Intermediate",
    concepts: ["HTTPS", "TLS", "HSTS", "SSL certificates"],
    videos: [], docs: [{ title: "MDN HTTPS", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security" }],
    deliverable: "HTTPS documentation and HSTS configuration."
  },
  {
    index: 92, phase: 3, week: 19, day: 3,
    title: "Input Sanitization and XSS Prevention",
    description: "Implement input sanitization on all user inputs. Test for XSS vulnerabilities. Use DOMPurify on the frontend and sanitize-html on the backend.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["XSS", "Input sanitization", "DOMPurify"],
    videos: [], docs: [{ title: "OWASP XSS prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" }],
    deliverable: "XSS-protected inputs."
  },
  {
    index: 93, phase: 3, week: 19, day: 4,
    title: "CSRF Protection",
    description: "Understand CSRF attacks. Implement CSRF tokens using the csurf package or double-submit cookie pattern. Test that attacks are blocked.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["CSRF", "CSRF tokens", "Double-submit cookie"],
    videos: [], docs: [{ title: "OWASP CSRF prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" }],
    deliverable: "CSRF protection implemented."
  },
  {
    index: 94, phase: 3, week: 19, day: 5,
    title: "NoSQL Injection Prevention",
    description: "Understand how NoSQL injection works with MongoDB. Test your endpoints for injection vulnerabilities. Implement query sanitization with express-mongo-sanitize.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["NoSQL injection", "Query sanitization", "MongoDB security"],
    videos: [], docs: [],
    deliverable: "Injection-proof API endpoints."
  },

  // ─── Week 20: Security Advanced ───────────────────────
  {
    index: 95, phase: 3, week: 20, day: 1,
    title: "Security Headers with Helmet.js",
    description: "Configure all helmet.js options: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. Understand what each header protects against.",
    estimatedTime: "~75 min", difficulty: "Intermediate",
    concepts: ["helmet.js", "CSP", "Security headers"],
    videos: [], docs: [{ title: "helmet.js docs", url: "https://helmetjs.github.io/" }],
    deliverable: "Fully configured security headers."
  },
  {
    index: 96, phase: 3, week: 20, day: 2,
    title: "npm Audit and Dependency Management",
    description: "Run npm audit on your project. Fix all vulnerabilities. Set up a process for regular dependency updates.",
    estimatedTime: "~60 min", difficulty: "Beginner",
    concepts: ["npm audit", "Dependency security", "Vulnerability management"],
    videos: [], docs: [],
    deliverable: "Clean npm audit with 0 vulnerabilities."
  },
  {
    index: 97, phase: 3, week: 20, day: 3,
    title: "Per-User Rate Limiting",
    description: "Implement rate limiting per authenticated user (not just per IP). Different limits for different endpoints. Return Retry-After header.",
    estimatedTime: "~90 min", difficulty: "Advanced",
    concepts: ["Rate limiting", "Per-user limits", "Retry-After"],
    videos: [], docs: [],
    deliverable: "Per-user rate limiting system."
  },
  {
    index: 98, phase: 3, week: 20, day: 4,
    title: "Password Security Audit",
    description: "Implement password strength requirements (min length, complexity). Add account lockout after 5 failed attempts. Implement secure password reset flow.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Password policy", "Account lockout", "Password reset"],
    videos: [], docs: [],
    deliverable: "Enhanced password security."
  },
  {
    index: 99, phase: 3, week: 20, day: 5,
    title: "Security Audit Checklist",
    description: "Create a comprehensive security audit checklist. Run it against your app. Document findings and fixes. Score your app's security posture.",
    estimatedTime: "~90 min", difficulty: "Intermediate",
    concepts: ["Security audit", "Checklist", "Compliance"],
    videos: [], docs: [{ title: "OWASP top 10", url: "https://owasp.org/www-project-top-ten/" }],
    deliverable: "Security audit report."
  },

  // ─── Weeks 21–24: Stability & Advanced Performance ────
  ...generateWeekTasks(21, 24, 3, 100, [
    { title: "API Load Testing with Artillery", description: "Install Artillery and write load test scripts for your API. Run tests at 100 concurrent users. Identify bottlenecks from the results.", concepts: ["Load testing", "Artillery", "Performance"], difficulty: "Advanced" },
    { title: "Memory Leak Detection", description: "Use Chrome DevTools memory profiler to find memory leaks in your React app. Fix at least 2 leaks. Document the debugging process.", concepts: ["Memory leaks", "Chrome DevTools", "Debugging"], difficulty: "Advanced" },
    { title: "Service Worker and Offline Support", description: "Add a service worker to your React app. Cache static assets for offline access. Show an offline indicator when the network is unavailable.", concepts: ["Service Worker", "PWA", "Offline support"], difficulty: "Advanced" },
    { title: "Web Workers for Heavy Computation", description: "Move a CPU-intensive operation to a Web Worker. Compare UI responsiveness with and without the worker.", concepts: ["Web Workers", "Threading", "Performance"], difficulty: "Advanced" },
    { title: "Performance Budget Setup", description: "Define a performance budget: max bundle size, max load time, min Lighthouse score. Set up automated checks in your build process.", concepts: ["Performance budget", "Build optimization", "CI"], difficulty: "Intermediate" },
    { title: "React Profiler Deep Dive", description: "Use React DevTools Profiler to record a session. Identify the 5 most expensive renders. Optimize them and measure the improvement.", concepts: ["React Profiler", "Render optimization", "DevTools"], difficulty: "Intermediate" },
    { title: "Database Connection Resilience", description: "Implement automatic reconnection on MongoDB disconnect. Add connection event logging. Test by simulating network issues.", concepts: ["Database resilience", "Reconnection", "Error recovery"], difficulty: "Intermediate" },
    { title: "API Response Compression", description: "Add gzip/brotli compression to your Express server. Measure response size reduction. Understand when compression helps vs hurts.", concepts: ["Compression", "gzip", "Brotli"], difficulty: "Intermediate" },
    { title: "Frontend Bundle Analysis", description: "Use webpack-bundle-analyzer or vite-plugin-visualizer to analyze your bundle. Identify the 3 largest dependencies. Find alternatives or lazy-load them.", concepts: ["Bundle analysis", "Tree shaking", "Dependencies"], difficulty: "Intermediate" },
    { title: "CDN Setup for Static Assets", description: "Configure a CDN (Cloudflare or similar) for your static assets. Set proper cache headers. Measure load time improvement.", concepts: ["CDN", "Static assets", "Cache headers"], difficulty: "Intermediate" },
    { title: "Preloading and Prefetching", description: "Implement resource hints: preload critical CSS/fonts, prefetch likely next pages. Measure impact on perceived load time.", concepts: ["Preload", "Prefetch", "Resource hints"], difficulty: "Intermediate" },
    { title: "Critical CSS Extraction", description: "Extract and inline critical CSS for above-the-fold content. Defer non-critical CSS. Measure First Contentful Paint improvement.", concepts: ["Critical CSS", "FCP", "Render blocking"], difficulty: "Advanced" },
    { title: "Server-Side Caching Strategies", description: "Implement multiple caching strategies: write-through, write-behind, and cache-aside. Document when to use each pattern.", concepts: ["Caching strategies", "Write-through", "Cache-aside"], difficulty: "Advanced" },
    { title: "API Pagination Optimization", description: "Compare offset vs cursor pagination performance on a collection with 100K+ documents. Implement both and benchmark.", concepts: ["Pagination", "Cursor vs offset", "Performance"], difficulty: "Advanced" },
    { title: "Rate Limiting with Redis", description: "Replace in-memory rate limiting with Redis-backed rate limiting. Implement sliding window algorithm. Handle Redis downtime gracefully.", concepts: ["Redis", "Rate limiting", "Sliding window"], difficulty: "Advanced" },
    { title: "Monitoring and Alerting Setup", description: "Set up application monitoring: response time tracking, error rate alerts, and resource usage dashboards. Use free tools.", concepts: ["Monitoring", "Alerting", "Observability"], difficulty: "Intermediate" },
    { title: "Graceful Degradation Patterns", description: "Implement circuit breaker pattern for external API calls. Show cached/stale data when services are down instead of errors.", concepts: ["Circuit breaker", "Graceful degradation", "Resilience"], difficulty: "Advanced" },
    { title: "Performance Testing Report", description: "Run comprehensive performance tests: load test, stress test, soak test. Create a report with findings, bottlenecks, and recommendations.", concepts: ["Performance testing", "Load testing", "Reporting"], difficulty: "Advanced" },
    { title: "Phase 3 Capstone — Security & Performance Audit", description: "Complete audit of your full-stack app: security checklist, performance budget check, Lighthouse score > 90, zero known vulnerabilities.", concepts: ["Security audit", "Performance audit", "Capstone"], difficulty: "Advanced" },
    { title: "Production Readiness Checklist", description: "Create and execute a production readiness checklist: monitoring, logging, error handling, security, backups, documentation.", concepts: ["Production readiness", "Checklist", "DevOps"], difficulty: "Intermediate" }
  ]),

  // ══════════════════════════════════════════════════════════
  // PHASE 4 — REAL PROJECTS (Weeks 25–36)
  // ══════════════════════════════════════════════════════════

  ...generateWeekTasks(25, 36, 4, 120, [
    // Week 25-26: Real-time with WebSockets
    { title: "Socket.io Server Setup", description: "Install and configure socket.io on your Express server. Create a basic connection handler that logs when clients connect and disconnect.", concepts: ["Socket.io", "WebSockets", "Real-time"], difficulty: "Intermediate" },
    { title: "Real-Time Notification System", description: "Build a notification system using socket.io. Server sends notifications to specific users. Client shows them as toast messages in real-time.", concepts: ["Notifications", "Socket rooms", "Real-time UI"], difficulty: "Intermediate" },
    { title: "Live Activity Feed", description: "Build a live activity feed showing real-time updates. When any user completes a task, all connected users see it instantly.", concepts: ["Activity feed", "Broadcasting", "Real-time updates"], difficulty: "Intermediate" },
    { title: "WebSocket Authentication", description: "Secure your socket.io connections with JWT authentication. Only authenticated users can connect. Implement reconnection with token refresh.", concepts: ["Socket auth", "JWT", "Reconnection"], difficulty: "Advanced" },
    { title: "Real-Time Typing Indicator", description: "Build a typing indicator for a chat-like interface. Users see who is currently typing. Handle edge cases like disconnection.", concepts: ["Typing indicator", "Debounce", "UX"], difficulty: "Intermediate" },
    { title: "Chat Room Implementation", description: "Build a multi-room chat system. Users can join rooms, send messages, and see online members. Messages persist in MongoDB.", concepts: ["Chat", "Rooms", "Persistence"], difficulty: "Intermediate" },
    { title: "WebSocket Load Testing", description: "Test your WebSocket server under load. Simulate 100 concurrent connections. Monitor memory usage and message latency.", concepts: ["WebSocket performance", "Load testing", "Monitoring"], difficulty: "Advanced" },
    { title: "Socket.io Scaling with Redis Adapter", description: "Add the Redis adapter to socket.io for multi-server support. Understand pub/sub for WebSocket scaling.", concepts: ["Socket.io adapter", "Redis pub/sub", "Scaling"], difficulty: "Advanced" },
    { title: "Real-Time Dashboard Updates", description: "Make the admin dashboard update in real-time: user progress changes reflect immediately without page refresh.", concepts: ["Real-time dashboard", "Socket events", "Admin UI"], difficulty: "Intermediate" },
    { title: "WebSocket Error Handling", description: "Implement comprehensive error handling for WebSocket connections: reconnection strategy, offline queue, connection status UI.", concepts: ["Error handling", "Reconnection", "Offline support"], difficulty: "Intermediate" },

    // Week 27-28: File Uploads & Email
    { title: "File Upload with Multer", description: "Set up Multer for file uploads. Accept images only (JPEG, PNG, WebP). Limit file size to 5MB. Return the file URL after upload.", concepts: ["Multer", "File upload", "Validation"], difficulty: "Intermediate" },
    { title: "Cloudinary Integration", description: "Upload files to Cloudinary instead of local storage. Implement image resizing and optimization on upload. Serve optimized URLs.", concepts: ["Cloudinary", "Image optimization", "Cloud storage"], difficulty: "Intermediate" },
    { title: "Profile Picture Upload", description: "Add profile picture upload to your app. Crop to square, resize to 200x200, convert to WebP. Show upload progress.", concepts: ["Image processing", "Upload progress", "UX"], difficulty: "Intermediate" },
    { title: "Drag and Drop File Upload UI", description: "Build a drag-and-drop file upload zone with preview. Show upload progress bar. Handle multiple files.", concepts: ["Drag and drop", "File preview", "Upload UX"], difficulty: "Intermediate" },
    { title: "Email Setup with Nodemailer", description: "Configure Nodemailer with SendGrid or Gmail. Send a test email. Create reusable email templates with HTML.", concepts: ["Nodemailer", "Email templates", "SendGrid"], difficulty: "Intermediate" },
    { title: "Welcome Email on Registration", description: "Automatically send a welcome email when a new user registers. Include their name and a link to get started.", concepts: ["Automated email", "User onboarding", "Templates"], difficulty: "Intermediate" },
    { title: "Password Reset Flow", description: "Build complete password reset: request email → send reset link with token → validate token → set new password. Token expires in 1 hour.", concepts: ["Password reset", "Token expiry", "Email flow"], difficulty: "Advanced" },
    { title: "Email Queue with Bull", description: "Set up Bull queue with Redis for email processing. Queue emails instead of sending synchronously. Handle retries on failure.", concepts: ["Bull queue", "Redis", "Background jobs"], difficulty: "Advanced" },
    { title: "Scheduled Email Reminders", description: "Build a scheduled job that sends daily email reminders to users who haven't completed their task. Use Bull's repeat feature.", concepts: ["Scheduled jobs", "Cron", "Email automation"], difficulty: "Advanced" },
    { title: "Email Delivery Monitoring", description: "Track email delivery status (sent, delivered, failed). Build a simple dashboard showing email stats. Handle bounces.", concepts: ["Email monitoring", "Delivery tracking", "Analytics"], difficulty: "Intermediate" },

    // Week 29-30: Permissions & Admin
    { title: "Role-Based Access Control Design", description: "Design a fine-grained permission system beyond admin/student. Define permissions: read, write, manage for each resource. Create a permissions matrix.", concepts: ["RBAC", "Permission design", "Authorization"], difficulty: "Advanced" },
    { title: "Permission Middleware Implementation", description: "Build middleware that checks specific permissions, not just roles. Support permission combinations (AND/OR). Clean error messages.", concepts: ["Permission middleware", "Authorization", "Middleware"], difficulty: "Advanced" },
    { title: "Admin User Management", description: "Build admin pages for user management: view all users, search/filter, view details, change roles. No delete (too dangerous).", concepts: ["Admin panel", "User management", "CRUD"], difficulty: "Intermediate" },
    { title: "Admin Analytics Dashboard", description: "Build an analytics dashboard: total users, active today, average streak, tasks completed per week chart, most common current phase.", concepts: ["Analytics", "Charts", "Dashboard"], difficulty: "Intermediate" },
    { title: "Audit Log System", description: "Log all admin actions: who did what, when, to whom. Store in MongoDB. Build an admin page to view the audit trail.", concepts: ["Audit log", "Compliance", "Admin tools"], difficulty: "Intermediate" },

    // Week 31-33: Testing
    { title: "Jest Setup and First Unit Tests", description: "Set up Jest in your project. Write unit tests for 5 utility functions. Understand describe, it, expect, and test structure.", concepts: ["Jest", "Unit testing", "Test structure"], difficulty: "Intermediate" },
    { title: "Testing Express Routes with Supertest", description: "Write integration tests for your auth routes using Supertest. Test register, login, and protected routes. Mock MongoDB.", concepts: ["Supertest", "Integration testing", "API testing"], difficulty: "Intermediate" },
    { title: "Testing Mongoose Models", description: "Write unit tests for your Mongoose models: validation, pre-save hooks, methods. Use mongodb-memory-server for test isolation.", concepts: ["Model testing", "mongodb-memory-server", "Validation"], difficulty: "Intermediate" },
    { title: "React Component Testing", description: "Set up React Testing Library. Write tests for 5 components: rendering, user interactions, state changes, and async behavior.", concepts: ["React Testing Library", "Component testing", "User events"], difficulty: "Intermediate" },
    { title: "Testing Custom Hooks", description: "Write tests for your custom hooks using renderHook from React Testing Library. Test state changes and side effects.", concepts: ["Hook testing", "renderHook", "Side effects"], difficulty: "Intermediate" },
    { title: "Mocking APIs in Tests", description: "Use MSW (Mock Service Worker) to mock API calls in your React tests. Test loading states, error states, and success states.", concepts: ["MSW", "API mocking", "Test reliability"], difficulty: "Intermediate" },
    { title: "End-to-End Testing with Playwright", description: "Set up Playwright. Write E2E tests for the complete user flow: register → login → complete task → check progress.", concepts: ["Playwright", "E2E testing", "User flows"], difficulty: "Advanced" },
    { title: "Testing Admin Flows with Playwright", description: "Write E2E tests for admin: login → view users → skip user → verify. Test permission boundaries.", concepts: ["Playwright", "Admin testing", "Authorization"], difficulty: "Advanced" },
    { title: "Test Coverage and CI Integration", description: "Set up code coverage reporting with Jest. Aim for 80%+ coverage. Add coverage check to your CI pipeline.", concepts: ["Code coverage", "CI", "Quality gates"], difficulty: "Intermediate" },
    { title: "Visual Regression Testing", description: "Set up visual regression testing with Playwright screenshots. Detect unintended UI changes between commits.", concepts: ["Visual testing", "Screenshot comparison", "Regression"], difficulty: "Advanced" },

    // Week 34-35: Docker & CI/CD
    { title: "Docker — Containerize the Server", description: "Write a Dockerfile for your Express server. Build and run the image. Verify all endpoints work inside the container.", concepts: ["Docker", "Dockerfile", "Containerization"], difficulty: "Intermediate" },
    { title: "Docker — Containerize the Client", description: "Write a Dockerfile for your React client (multi-stage build). Serve with nginx. Keep the image small.", concepts: ["Docker", "Multi-stage build", "nginx"], difficulty: "Intermediate" },
    { title: "Docker Compose for Dev Environment", description: "Create docker-compose.yml that runs server, client, and MongoDB together. One command to start the full stack.", concepts: ["Docker Compose", "Dev environment", "Orchestration"], difficulty: "Intermediate" },
    { title: "Docker Networking and Volumes", description: "Configure Docker networking between services. Add persistent volumes for MongoDB data. Understand bridge networks.", concepts: ["Docker networking", "Volumes", "Persistence"], difficulty: "Intermediate" },
    { title: "GitHub Actions — Run Tests on Push", description: "Set up GitHub Actions CI pipeline. Run linting and tests on every push. Show pass/fail status on PRs.", concepts: ["GitHub Actions", "CI", "Automated testing"], difficulty: "Intermediate" },
    { title: "GitHub Actions — Deploy on Merge", description: "Add deployment step to GitHub Actions. Auto-deploy to production when merging to main. Add environment secrets.", concepts: ["CD", "Auto-deployment", "GitHub secrets"], difficulty: "Intermediate" },
    { title: "Docker Image Optimization", description: "Optimize your Docker images: use Alpine base, multi-stage builds, .dockerignore, layer caching. Compare image sizes.", concepts: ["Docker optimization", "Image size", "Build caching"], difficulty: "Intermediate" },
    { title: "Container Health Checks", description: "Add HEALTHCHECK instruction to Dockerfiles. Configure restart policies. Monitor container health in Docker Compose.", concepts: ["Health checks", "Docker restart", "Monitoring"], difficulty: "Intermediate" },

    // Week 36: Advanced Features
    { title: "Feature Flags Implementation", description: "Build a simple feature flag system. Store flags in DB. Toggle features without deployment. Build an admin UI for flag management.", concepts: ["Feature flags", "Gradual rollout", "Configuration"], difficulty: "Advanced" },
    { title: "API Rate Limiting with User Tiers", description: "Implement tiered rate limits: free users get 100 req/hr, premium get 1000. Show rate limit info in response headers.", concepts: ["Tiered limits", "API tiers", "Rate limiting"], difficulty: "Advanced" },
    { title: "Monitoring with Uptime Checks", description: "Set up uptime monitoring with BetterUptime or UptimeRobot. Configure alerts for downtime. Build a status page.", concepts: ["Uptime monitoring", "Alerting", "Status page"], difficulty: "Intermediate" },
    { title: "Phase 4 Capstone — Full Feature Review", description: "Review all Phase 4 features: real-time, uploads, email, testing, Docker, CI/CD. Fix any integration issues. Run full test suite.", concepts: ["Integration", "Review", "Capstone"], difficulty: "Advanced" }
  ]),

  // ══════════════════════════════════════════════════════════
  // PHASE 5 — PROFESSIONAL PRACTICES (Weeks 37–42)
  // ══════════════════════════════════════════════════════════

  ...generateWeekTasks(37, 42, 5, 204, [
    // Week 37: TypeScript Strict Migration
    { title: "TypeScript Strict Mode — Server Migration Part 1", description: "Enable strict mode on the Express server. Fix all type errors in models and middleware. Add type definitions for all request handlers.", concepts: ["TypeScript strict", "Type migration", "Express types"], difficulty: "Advanced" },
    { title: "TypeScript Strict Mode — Server Migration Part 2", description: "Complete the server migration: type all controllers, routes, and utility functions. Create shared types for API request/response shapes.", concepts: ["TypeScript", "Shared types", "API contracts"], difficulty: "Advanced" },
    { title: "TypeScript Strict Mode — Client Migration Part 1", description: "Enable strict mode on the React client. Type all context providers, hooks, and page components.", concepts: ["TypeScript React", "Context types", "Hook types"], difficulty: "Advanced" },
    { title: "TypeScript Strict Mode — Client Migration Part 2", description: "Complete the client migration: type all form handlers, API calls, and component props. Zero TypeScript errors.", concepts: ["TypeScript", "Form types", "Prop types"], difficulty: "Advanced" },
    { title: "Shared Types Package", description: "Create a shared types package used by both client and server. API contracts, model shapes, and error types in one place.", concepts: ["Monorepo types", "Shared packages", "DRY"], difficulty: "Advanced" },

    // Week 38: System Design
    { title: "System Design — Load Balancers", description: "Understand load balancing algorithms (round-robin, least connections, IP hash). Draw a diagram of your app behind a load balancer. Explain session affinity.", concepts: ["Load balancing", "Scaling", "Architecture"], difficulty: "Intermediate" },
    { title: "System Design — CDN and Edge Caching", description: "Understand how CDNs work. Configure your static assets for CDN delivery. Draw the request flow from user → CDN → origin.", concepts: ["CDN", "Edge caching", "Content delivery"], difficulty: "Intermediate" },
    { title: "System Design — Database Replication", description: "Understand primary-replica architecture. Configure MongoDB replica set (locally with Docker). Test read from replica, write to primary.", concepts: ["Replication", "Read replicas", "High availability"], difficulty: "Advanced" },
    { title: "System Design — Horizontal vs Vertical Scaling", description: "Document the difference with diagrams. Identify which parts of your app scale horizontally vs vertically. Plan for 10x growth.", concepts: ["Horizontal scaling", "Vertical scaling", "Capacity planning"], difficulty: "Intermediate" },
    { title: "System Design — Message Queues", description: "Understand message queues (RabbitMQ, Bull/Redis). Implement a job queue for background tasks. Understand at-least-once vs exactly-once delivery.", concepts: ["Message queues", "Background jobs", "Delivery guarantees"], difficulty: "Advanced" },

    // Week 39: Open Source
    { title: "Finding an Open Source Project", description: "Find 3 open source projects with 'good first issue' labels. Read their CONTRIBUTING.md. Understand their code structure and test setup.", concepts: ["Open source", "Contributing guidelines", "Community"], difficulty: "Intermediate" },
    { title: "Open Source Contribution — Bug Fix", description: "Find a real bug or documentation issue in an open source project. Fork the repo, create a branch, fix the issue, and open a PR.", concepts: ["Pull requests", "Open source workflow", "Code review"], difficulty: "Intermediate" },
    { title: "Open Source Contribution — Code Review", description: "Review 3 open PRs in an open source project. Leave constructive, specific, and kind feedback. Link to your reviews.", concepts: ["Code review", "Open source", "Communication"], difficulty: "Intermediate" },
    { title: "Creating Your Own Open Source Project", description: "Package one of your utilities as a standalone npm package. Add README, LICENSE, CONTRIBUTING.md, and publish to npm.", concepts: ["npm publishing", "Open source", "Package management"], difficulty: "Intermediate" },
    { title: "Open Source Maintenance", description: "Set up issue templates, PR templates, and automated checks on your open source project. Triage any incoming issues.", concepts: ["Project maintenance", "Templates", "Automation"], difficulty: "Intermediate" },

    // Week 40: Technical Writing & Communication
    { title: "Technical Writing — 10-Minute README", description: "Rewrite your project README so a new developer can set up and understand the project in under 10 minutes. Test with a friend.", concepts: ["Technical writing", "README", "Developer onboarding"], difficulty: "Intermediate" },
    { title: "Architecture Decision Records", description: "Write 3 ADRs (Architecture Decision Records) for key decisions in your project: database choice, auth strategy, deployment platform.", concepts: ["ADR", "Architecture decisions", "Documentation"], difficulty: "Intermediate" },
    { title: "API Documentation with Examples", description: "Write comprehensive API documentation with curl examples, request/response samples, and error scenarios for every endpoint.", concepts: ["API docs", "Examples", "Developer experience"], difficulty: "Intermediate" },
    { title: "Technical Blog Post", description: "Write a technical blog post about something you built or learned. Publish on Dev.to or your portfolio. Include code examples.", concepts: ["Technical blogging", "Teaching", "Communication"], difficulty: "Intermediate" },
    { title: "Project Presentation", description: "Prepare a 10-minute technical presentation of your project. Cover: problem, solution, architecture, demo, challenges, and learnings.", concepts: ["Presentations", "Communication", "Demo skills"], difficulty: "Intermediate" },

    // Week 41: GraphQL & Advanced Architecture
    { title: "GraphQL Basics with Apollo Server", description: "Set up Apollo Server. Create a schema for your User and Task types. Implement queries and mutations. Compare with REST.", concepts: ["GraphQL", "Apollo Server", "Schema design"], difficulty: "Advanced" },
    { title: "GraphQL Resolvers and Data Loading", description: "Build resolvers that query MongoDB. Implement DataLoader to solve the N+1 problem in GraphQL. Compare query efficiency.", concepts: ["Resolvers", "DataLoader", "N+1 prevention"], difficulty: "Advanced" },
    { title: "GraphQL Client with Apollo Client", description: "Set up Apollo Client in React. Replace one REST endpoint with a GraphQL query. Implement caching and optimistic updates.", concepts: ["Apollo Client", "GraphQL queries", "Caching"], difficulty: "Advanced" },
    { title: "Microservices — When NOT to Use Them", description: "Document the tradeoffs of microservices vs monolith. Identify which parts of your app (if any) would benefit from extraction. Write a decision document.", concepts: ["Microservices", "Monolith", "Architecture tradeoffs"], difficulty: "Intermediate" },
    { title: "Monorepo Tooling with Turborepo", description: "Set up Turborepo for your monorepo. Configure build and test pipelines. Understand caching and task dependencies.", concepts: ["Turborepo", "Monorepo", "Build optimization"], difficulty: "Advanced" },

    // Week 42: Interview Preparation
    { title: "Data Structures Review", description: "Implement from scratch: linked list, stack, queue, hash map, binary search tree. Write tests for each. Understand Big O complexity.", concepts: ["Data structures", "Algorithms", "Big O"], difficulty: "Advanced" },
    { title: "Common Algorithm Patterns", description: "Solve 10 algorithm problems using patterns: two pointers, sliding window, BFS/DFS, dynamic programming. Document your approach for each.", concepts: ["Algorithm patterns", "Problem solving", "Interview prep"], difficulty: "Advanced" },
    { title: "System Design Interview Practice", description: "Practice designing 3 systems: URL shortener, chat application, notification service. Draw architecture diagrams. Discuss tradeoffs.", concepts: ["System design", "Interview", "Architecture"], difficulty: "Advanced" },
    { title: "Behavioral Interview Framework", description: "Prepare 10 STAR stories covering: teamwork, conflict, failure, leadership, technical challenge. Practice telling each in under 2 minutes.", concepts: ["Behavioral interview", "STAR method", "Communication"], difficulty: "Intermediate" },
    { title: "Phase 5 Capstone — Portfolio & Resume Polish", description: "Final review: update portfolio with all projects, update resume/LinkedIn, ensure all deployed projects work, practice your elevator pitch.", concepts: ["Portfolio", "Resume", "Career readiness"], difficulty: "Intermediate" }
  ])
];

/**
 * Helper to generate tasks for week ranges
 * Takes topic summaries and distributes them across weeks/days
 */
function generateWeekTasks(weekStart, weekEnd, phase, startIndex, taskDefs) {
  const result = [];
  let dayInWeek = 1;
  let currentWeek = weekStart;

  taskDefs.forEach((def, i) => {
    result.push({
      index: startIndex + i,
      phase,
      week: currentWeek,
      day: dayInWeek,
      title: def.title,
      description: def.description,
      estimatedTime: def.estimatedTime || "~90 min",
      difficulty: def.difficulty || "Intermediate",
      concepts: def.concepts || [],
      videos: def.videos || [],
      docs: def.docs || [],
      deliverable: def.deliverable || `Completed ${def.title.toLowerCase()}.`
    });

    dayInWeek++;
    if (dayInWeek > 5) {
      dayInWeek = 1;
      currentWeek++;
    }
  });

  return result;
}

module.exports = tasks;
