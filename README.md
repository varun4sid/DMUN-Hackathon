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

### Milestone 1

The site opens with a generic “club” feel rather than a distinctive DMUN identity. The primary hero section shows inconsistent alignment for the “Apply now” CTA and misaligned photos; these break visual rhythm and reduce perceived polish. I’ve attached a screenshot reference titled image.png showing the hero area. Fixes: align the primary CTA consistently, ensure hero images maintain aspect ratio and consistent spacing, and add subtle entrance animation so the navigation doesn’t pop in after the title appears.

Layout, borders and spacing
Multiple pages exhibit inconsistent borders, lack of padding, and uneven spacing between elements. Several card-like elements would benefit from being redesigned into tidy boxes with rounded corners and subtle box shadows to improve hierarchy and scannability. On reload the navigation sometimes appears after the title fully renders — this indicates CSS/JS ordering issues that should be corrected so structural elements render predictably.

About page: image rendering and links
When opening the About page for the first time the hero picture renders late (this is reproducible in Incognito). Hyperlinks currently use underlines which feel dated; switch to color change on hover and remove persistent underlines. Implement smooth scroll animation when links jump to sections rather than an abrupt snap. There’s also a button whose CSS looks inconsistent — revisit its padding, border-radius and hover state. Consider revising the global typeface for improved readability.

Programs page: responsiveness and typography
Sections like Seminars and Community Projects are non-responsive at smaller widths and several images/icons appear misaligned. Maintain a consistent left edge for paragraphs and list items so lines start vertically aligned across the page. Revisit font choices and sizes to establish a consistent typographic scale. Replace the picture icon shown in the screenshot with a properly scaled image or vector to avoid layout shifts.

Advocacy and Research pages: link styles and vertical rhythm
Advocacy repeats the same problems: inconsistent fonts, hyperlink styling, and uneven footer spacing. Add scroll animation to improve perceived polish. Research requires consistent line spacing so paragraphs and bullet points start on the same vertical guideline; tightening the typographic rhythm will make dense content easier to scan.

Integrity page: a good reference for animations
The Integrity page already includes scroll-based animations; use it as a reference and extend the same animation patterns site-wide. Still ensure font consistency, link treatment, and vertical alignment match the rest of the site.

Take Action and Donate pages: CTAs and cards
CTAs such as “Donate now” should be centered and styled with a strong, accessible color and consistent padding. Donation boxes would look better with rounded corners and box shadows; ensure hover and focus states are clear. Use the hover underline example screenshot as a pattern for link interactions elsewhere.

Newsroom, Publications and Volunteer pages
Remove link underlines on hover and instead use color/weight change for hover feedback. Volunteer and partner pages would benefit from the same entrance/scroll animations and consistent card styling to create a unified visual language.

Partner, Donor Relations and Mandate pages
Partner page cards need box shadows and consistent spacing. The “Donor relations” item in the navigation appears redundant — consider consolidating it into a single section to avoid navigation clutter. Mandate page mirrors Research: ensure consistent line spacing and paragraph alignment.

Generic, cross-site issues and recommended fixes
Sitewide alignment inconsistencies, typography irregularities, hyperlink treatment, missing scroll animations and late-loading hero images are recurring problems. The late image rendering suggests either unoptimized lazy-loading implementation or CSS/JS ordering issues; ensure critical hero images are prioritized, use modern image formats, and implement proper responsive srcset. Standardize the global font, sizes and line-height to establish a consistent typographic scale. Replace underlined links with color-change hover states, and apply subtle box shadows and rounded corners to cards to improve hierarchy and affordance.

Quick action list for developers (in implementation order)
Begin by fixing render order so header and hero load predictably. Standardize global typography and spacing variables in a shared CSS file or design tokens. Replace link underlines with hover color changes, then unify card styles (padding, border-radius, shadow). Address responsive breakpoints that currently break sections such as Seminars and Community Projects. Lastly, propagate scroll animations from the Integrity page to other pages and optimize hero images to avoid late rendering on first load.

Image references
Each of your original screenshots is preserved as a visual aid (hero, alignment issues, buttons, program tiles, advocacy, research, integrity, donate, volunteer, partner, donor relations, mandate, publications). Use them while implementing the fixes above to verify before/after improvements.



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
