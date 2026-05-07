## Context

The current site is a small Jekyll/GitHub Pages repository using Lanyon-era layouts, sidebar navigation, and stylesheets under `public/css/`. The redesign handoff in `handoff/HANDOFF.md` provides a complete visual target: dark terminal-like chrome, fixed palette, JetBrains Mono and Inter typography, a supplied SVG brand mark, shared header/path/footer patterns, simple page components, and a hue tweak panel.

The main constraint is content preservation. Existing authored page content in `index.md` and `_pages/*.md` must remain semantically unchanged, while markup can be reshaped to match the new visual components. The redesign also introduces a contact page, using confirmed contact details rather than placeholder fields.

## Goals / Non-Goals

**Goals:**

- Preserve the Jekyll architecture and GitHub Pages publishing model.
- Implement the handoff visual system across all public pages.
- Centralize shared chrome in Jekyll layouts/includes and shared assets.
- Keep page URLs as pretty Jekyll routes such as `/research/`, `/publications/`, and `/contact/`.
- Add a contact page using available email, GitHub, PI/affiliation, and accepted address information.
- Verify the build and key browser behavior after implementation.

**Non-Goals:**

- Do not rewrite, summarize, or invent body content.
- Do not add animations, a light mode, extra icons, backend functionality, or non-Jekyll tooling.
- Do not change publication links, research descriptions, team copy, positions copy, or resources copy except for structural markup needed by the redesign.
- Do not optimize beyond the handoff's stated mobile follow-up unless minor responsive fixes are necessary to prevent broken layout.

## Decisions

1. **Render shared chrome with Jekyll templates, not copied static HTML.**
   The handoff's `site.js` is useful as behavior reference, but server-rendered header, path bar, footer, and active navigation are more robust for a Jekyll site. This avoids `.html` link drift and keeps navigation compatible with `relative_url`.
   Alternative considered: copy `site.js` chrome injection directly. Rejected because it uses static reference-page paths and delays core navigation rendering until JavaScript runs.

2. **Use handoff CSS as the baseline stylesheet with repo-specific corrections.**
   The implementation should port `handoff/site.css`, fix the `letterSpacing` typo to `letter-spacing`, and add any minimal responsive rules needed for existing content. Existing Lanyon/Poole CSS should be removed from the active layout or quarantined so old selectors do not fight the redesign.
   Alternative considered: layer the new CSS on top of existing Lanyon styles. Rejected because the old sidebar and container rules are likely to create unintended interactions.

3. **Keep authored content in Jekyll pages, but allow layout-oriented HTML.**
   Existing Markdown pages can be converted to Markdown plus small HTML component wrappers where needed (`.row`, `.bare`, `.section-title`, `.lead`). The text itself must remain verbatim.
   Alternative considered: replace pages with static HTML from `handoff/pages/`. Rejected because those files contain placeholder copy and static links.

4. **Preserve pretty URLs and adapt nav labels.**
   Navigation labels follow the handoff voice (`~/home`, `~/research`, `~/team`, `~/pubs`, `~/join`, `~/resources`, `~/contact`), but links must target Jekyll routes (`/`, `/research/`, etc.).
   Alternative considered: use `*.html` links to match the reference exactly. Rejected because this site's permalink model is already configured for pretty URLs.

5. **Scope contact content to confirmed information.**
   The new `/contact/` page should include email, GitHub, PI/lab affiliation, and the accepted institutional address. Placeholder ORCID or Scholar rows from the reference must not ship unless real URLs are supplied.
   Alternative considered: copy every reference contact row. Rejected because it would violate the no-invented-content rule.

## Risks / Trade-offs

- **Risk: Structural markup accidentally changes content meaning** → Compare rendered text and links against the current pages before shipping.
- **Risk: Existing CSS conflicts with the new visual system** → Stop loading old Poole/Lanyon styles from the active layout.
- **Risk: JavaScript-only hue panel fails** → Keep the default accent usable without JavaScript; the slider is progressive enhancement.
- **Risk: Mobile layout is under-specified by the handoff** → Add minimal responsive stacking for header/nav/list grids so pages remain usable, while avoiding broader redesign.
- **Risk: Favicon replacement behaves inconsistently across browsers** → Link the SVG favicon and keep the existing `.ico` fallback if needed.
