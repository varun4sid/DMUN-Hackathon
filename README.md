# DMUN - Hackathon Submission

### Local Setup
1. Clone the repository
```bash
git clone https://github.com/varun4sid/DMUN-Hackathon.git
```

2. Install dependencies
```bash
cd DMUN-Hackathon
npm install
```

3. Run dev server
```bash
npm run dev
```

4. Load the page at
```bash
http://localhost:5173/
```

### Milestone 2 - Footer Enhancement
- The footer is now a responsive three-column layout:
  - **Left:** Brand/logo, DMUN Foundation name, in unified block with social icons directly beneath branding.
  - **Center:** Quick Links, stacked and left-aligned, with a heading for discoverability.
  - **Right:** Contact info under a "Contact Us" header, left-aligned for clarity.
- The design is clean, visually balanced, and fully responsive for desktop and mobile views.

### Milestone 3 - Overall Layout enhancement
- A new `/organisation` page shows all users and their roles in a table.
- **Role-based dynamic actions:**
  - **Lead:**
    - Can assign or remove the "Co-Lead" (one at a time).
    - Can send alerts to any user/co-lead (except self).
    - Cannot demote self from lead.
  - **Co-Lead:**
    - Can send alerts to users (but never lead or self).
    - Cannot change/modify roles.
  - **User:**
    - Can view the user directory only.
- The currently logged-in user is denoted with “(you)” in the table.
- All actions use instant UI feedback, and roles/alerts update dynamically without page reloads.

### 3. Nav Enhancements & Context
- The navbar now always displays the active user's name (or 'Guest' if not logged in).
- The header includes a button which is "Login" (if logged out) or "Organisation" (if logged in) for easy access.
- User authentication & roles stored in React Context; login validates against a users database and accepts only valid credentials.

### How To Use:
- Login at `/login` (only `@dmun.org` addresses permitted for admins; see future Milestone 3b for add-user features).
- Organisation management/control via `/organisation`.
- Footer and header features are always visible across all pages.
