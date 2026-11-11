# IdeaHQ — Electric Brand Refresh (Design Review)

**Status:** Proposed design on `design/ideahq-electric-palette`; not merged or deployed.

## Approved colour direction
- Electric Yellow: `#FDEE00`
- Deep Cobalt: `#0F0A87`
- Hot Pink: `#FC0C94`
- Ivory: `#FFFDF5`
- Ink: `#11144A`

Button backgrounds use darker `#C70070` (hover `#A80060`) with white text for WCAG AA normal-text contrast; signature Hot Pink remains an accent and shadow.

## Implementation scope
- Added `site/idea-brand.css` as an opt-in style layer.
- Linked it only from `site/index.html` and `site/notes/index.html`.
- Preserved original copy, navigation, URLs, OG metadata, privacy links, forms, fields, methods, actions, honeypot and consent wording.
- Did not modify `site/styles.css`, `site/home.css`, `site/app.js`, `site/trust.js`, `site/verified-stays.css`, the property variant HTML, `site/_headers`, or `netlify.toml`.
- No third-party scripts, fonts, cookies or trackers introduced.
- Existing `noindex,nofollow` privacy/search policy retained.

## Rationale
Treat IdeaHQ itself as a challenger venture studio, but do **not** let a branding exercise change the treatment/control experience of research experiments. Scope the visual redesign to the corporate homepage and founder notes, not research landing pages collecting consented data.

## Audit and release gates (not yet verified)
1. Confirm production Netlify project is `jazzy-medovik-ff2a54` and source is `XyLyX/ihq001`; historically deployed by manual Drop, not linked to Git continuous deployment.
2. Preview the design at desktop, tablet, and mobile widths; check the hero orbit, menus, readable type, footer, and notes form.
3. Ensure no change to form definitions or analytics. Confirm existing Netlify form names and private submission handling.
4. Independently check keyboard focus, reduced motion, and WCAG 2.2 AA contrast.
5. Review privacy and `noindex` decisions separately from the branding work.
6. Check copy and legal assertions; there should be no suggestion that Verified Stays is operational.
7. Prepare an explicit site-only Netlify release and reversible rollback plan.
8. Obtain approval before merging into `main` or deploying.

## Warning
`ideahq.io` live HTML could not be independently fetched in the audit environment. The observed repository deployment notes state the Netlify project previously received a **manual** site-only ZIP. A GitHub PR will not by itself update production. Verify current source/deploy parity before any future manual or linked deployment.

## Exploration listing rule (standard)
- The **newest exploration always appears first** in IdeaHQ's “Currently in exploration” section.
- Display positions are consecutive, newest-first: `01`, `02`, `03`, and so on. In the current branch XyLyX Studios is `01` and Verified Stays is `02`.
- The display number is **not** the experiment identifier. Keep permanent experiment references such as `VS-001-T`, research form names, URLs, attribution values and historical analytics unchanged when the order changes.
- When adding another exploration, insert it above the previous newest entry and renumber all display positions; do not re-sort by sector or perceived success.

## Reusable three-panel exploration standard
Every venture has one **exploration row with exactly three boxes**, left-to-right on wide screens:
1. **The question:** display rank, stable experiment ID, venture name, sharply framed hypothesis and a venture CTA.
2. **The exploration:** grounded existing output, proposed test, honest status, and relevant internal/external research links. Never imply an experimental instrument or results exist unless verified.
3. **The thinking behind the building:** a venture-specific IdeaHQ founder note, directly linking to a stable anchor in `site/notes/index.html`.

Keep new explorations **newest first**, numbered 01, 02, etc. Renumber *only presentation rank*; preserve experiment IDs, test variants, form names and research data. New ventures should also receive a small, clearly scoped exploration framework page (e.g. `site/xylyx-studios/`) and a venture-specific notes article. A dedicated research form should be introduced only once collection purpose, consent, minimisation and verification are designed.

### Visual identity per venture
Use scoped CSS custom properties per `exploration-row--<venture>`, so site-wide IdeaHQ identity does not flatten venture identities:
- XyLyX Studios (from actual `XyLyX/xylyxstudios/style.css`): background `#0A0C14`, cyan `#64E8FA`, violet `#AE8AFF`.
- Verified Stays (from existing IdeaHQ research UI): navy `#0F172A`, blue `#2563EB`, pale neutral `#F7F9FC`.
- Future ventures: inspect their actual brand assets first; if absent, make an explicitly proposed best-fit palette rather than claiming an existing identity.

Three columns on desktop, two-column plus full-width notes on tablets, stacked on mobile. Preserve readability, focus visibility, reduced-motion preferences and accessible button contrast.

### No-release safeguard
Current work is on `design/ideahq-electric-palette` (draft PR #1). No production merge, push to `main` or Netlify deployment is authorised. Confirm forms and original research pages survive unchanged before the one approved release.
