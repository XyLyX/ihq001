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
