# Omnia Lab — website redesign handoff

This document is a self-contained brief for an engineer (or Claude Code) to rebuild the existing Omnia Lab site at `https://omnia-lab-uc.github.io/` (repo: `https://github.com/Omnia-Lab-UC/omnia-lab-uc.github.io`) with the new visual design.

**Hard rule: do not invent new copy.** All page content must come from the live site. Lift it verbatim from the URLs listed under "Content sources" below.

The repo is a Jekyll-based GitHub Pages site. Keep that — replace templates and styles, leave the content (Markdown front-matter pages) untouched where possible.

---

## 1 — Design intent

A quiet, terminal-flavored academic site. Mono type, generous space, dark by default. The page should feel like a well-organized lab notebook in a terminal — confident but not theatrical. No emoji in chrome (the existing 🧬 / 🧠📊 in body copy can stay since they're authored content, but do not add new ones).

Reference: `omnia-redesign-reference.html` in this folder shows the home, research, team, publications, positions, resources, and contact pages built in the new style with placeholder copy. Match its layout, spacing, type scale, and chrome — then swap the placeholder copy out for the real content listed below.

---

## 2 — Visual system

### Palette (locked — dark by default)

```css
:root {
  --paper:   oklch(0.18 0.008 250);  /* page bg                      */
  --paper-2: oklch(0.22 0.01 250);   /* secondary surface (path bar) */
  --ink:     oklch(0.94 0.008 90);   /* primary text                 */
  --ink-2:   oklch(0.78 0.01 90);    /* secondary text               */
  --ink-3:   oklch(0.58 0.012 90);   /* tertiary text / metadata     */
  --rule:    oklch(0.32 0.012 250);  /* hairline rules + borders     */
  --accent:  oklch(0.78 0.16 95);    /* default accent (warm yellow) */
}
```

Accent hue is user-tweakable via a small "[ tweaks ]" panel in the bottom-right corner — slider 0–360, persisted in `localStorage` as `omnia-hue`. Other palette tokens stay fixed.

### Typography

- **Mono (UI, navigation, metadata, prompts):** `JetBrains Mono`, 500 weight for chrome, 400 for body mono.
- **Sans (display headings, body prose):** `Inter`, 500 for h1, 400 for paragraphs.
- Load both from Google Fonts: `family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600`.

Type scale:
- `h1.h1-display`: Inter 500, 44px, line-height 1.05, letter-spacing -0.02em.
- Section title (`.section-title`): JetBrains Mono 11px, uppercase, letter-spacing 0.08em, color `--ink-3`.
- Body `<p>`: Inter 400, 14px, line-height 1.65, color `--ink-2`, max-width 700px.
- Lead `.lead`: Inter 400, 14px, line-height 1.65, color `--ink-2`, max-width 680px.
- Mono base body: 13px, line-height 1.55.

`<em>` is restyled to act as an accent: `color: var(--accent); font-style: normal;`. Use it to highlight one phrase per heading, never a full sentence.

### Logo (locked — use exactly as below)

The brand mark is a "bracketed constellation" — terminal brackets framing a hub of 5 nodes around an accent center. SVG (32×32 viewBox, currentColor for ink, var(--accent) for the accent dot):

```html
<svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M 7 4 L 4 4 L 4 28 L 7 28" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="square" />
  <path d="M 25 4 L 28 4 L 28 28 L 25 28" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="square" />
  <line x1="9" y1="9"  x2="16" y2="16" stroke="currentColor" stroke-width="0.85" />
  <line x1="22" y1="8" x2="16" y2="16" stroke="currentColor" stroke-width="0.85" />
  <line x1="9" y1="22" x2="16" y2="16" stroke="currentColor" stroke-width="0.85" />
  <line x1="22" y1="24" x2="16" y2="16" stroke="currentColor" stroke-width="0.85" />
  <line x1="9" y1="9"  x2="22" y2="8"  stroke="currentColor" stroke-width="0.7" opacity="0.4" />
  <line x1="9" y1="22" x2="22" y2="24" stroke="currentColor" stroke-width="0.7" opacity="0.4" />
  <circle cx="9"  cy="9"  r="1.5" fill="currentColor" />
  <circle cx="22" cy="8"  r="1.5" fill="currentColor" />
  <circle cx="9"  cy="22" r="1.5" fill="currentColor" />
  <circle cx="22" cy="24" r="1.5" fill="currentColor" />
  <circle cx="16" cy="16" r="2.1" fill="var(--accent)" />
</svg>
```

The logo is also provided as a standalone file: `brand-mark.svg`.

**Wordmark:** to the right of the mark, render `omnia.lab` in JetBrains Mono 500, 14px, letter-spacing 0.02em, color `--ink`. Mark + wordmark sit in an inline-flex with `gap: 10px`.

**Favicon:** use the same SVG at 14–16px. Replace the existing `public/favicon.ico` with `brand-mark.svg` (and keep an .ico fallback if needed).

---

## 3 — Page chrome (every page gets these)

All pages share three pieces of chrome rendered in this order:

### Site header (`.site-header`)
Border-bottom hairline, padding `14px 32px`, flex row, font-size 12px:
- Left: brand mark + `omnia.lab` wordmark, links to `/`.
- Center: nav links in mono, gap 22px, color `--ink-2`. Active link gets `color: --ink` and a 1px `--accent` underline (`border-bottom`, `padding-bottom: 2px`).
- Right: a small `[v.2.4]` version tag in `--ink-3` 11px (this is decoration — keep it, it's part of the voice).

Nav order: `~/home  ~/research  ~/team  ~/pubs  ~/join  ~/resources  ~/contact`.

### Path bar (`.path-bar`)
Sits under the header. Background `--paper-2`, border-bottom hairline, padding `8px 32px`, font-size 11px, color `--ink-3`. Two-column flex:
- Left: `<span class="accent-dot">●</span> running — puc.cl / iibm / santiago` (the dot is `--accent`).
- Right: `$ cat ./<page>.md` where `<page>` matches the current page slug.

### Site footer (`.site-footer`)
Border-top hairline, padding `14px 32px`, flex row, font-size 11px, color `--ink-3`:
- Left: `omnia.lab — made at PUC Chile · GNU GPL v3.0 · 2026`
- Right: `github · tgonza@uc.cl` with the existing real links.

### Page intro pattern
Every content page starts with this micro-pattern, in order:
1. **Prompt line** (`.prompt`): mono 13px, `--ink-3`, prefixed with `> ` in `--accent`. Examples: `> describe(lab)`, `> cat ./research.md`, `> ls ./team`, `> grep -r ./publications`, `> cat ./open_positions.yml`, `> ls ./code ./data`, `> whoami`.
2. **Kicker** (`.kicker`): a one-line metadata strip — accent dot + short uppercase mono label (e.g. "running — Santiago, Chile", "five themes", "selected works"). 11px, letter-spacing 0.08em, `--ink-3`.
3. **H1** (`.h1-display`): the page's title in Inter 500 44px. Highlight one word with `<em>` (e.g. *Research themes.*, *Join the lab.*).
4. **Lead paragraph** (`.lead`): one or two sentences, real copy from the site.

### Tweaks panel
A persistent `[ tweaks ]` button fixed to the bottom-right corner. Clicking it toggles a 240px panel with a single accent-hue range slider. Implementation in `site.js` — copy verbatim. No other tweaks.

### Layout container
`<main class="site-main">` sets `max-width: 1180px; margin: 0 auto; padding: 48px 40px`. Don't full-bleed content.

---

## 4 — Component patterns

The redesigned site is intentionally small in component count. Three patterns cover almost everything:

### `.row` — definition list (key/value)
Two-column grid `200px 1fr`, hairline divider, 14px vertical padding. Use for: focus-areas list on home, contact details. Key is mono 11px uppercase `--ink-3`, value is either mono `--ink` or `.val.body` (Inter 14px `--ink-2`).

### `ul.bare` — index list
Use for: news items, publications, team members, code/data/teaching resources. Each `<li>` is a 3-column grid: `80px 1fr 120px`, hairline divider, 12px vertical padding.
- col 1 `.y` — date or category tag, mono 11px `--ink-3`.
- col 2 `.t` — main label, Inter 15px `--ink`.
- col 3 `.v` — venue / aside, mono 11px `--ink-3`, right-aligned.

### `.section-title` — section heading inside a page
Mono 11px uppercase `--ink-3`, letter-spacing 0.08em, `36px` top margin. The first one on a page has top margin 0.

CTAs use `.cta` — mono 12px, 1px `--rule` border, `8px 14px` padding. Hover swaps border + text to `--accent`.

Inline links in body copy: underline with `border-bottom: 1px solid var(--accent)` and color `--accent`.

---

## 5 — Files in this handoff

```
handoff/
├── HANDOFF.md                  ← this file
├── omnia-redesign-reference.html  ← the full reference build (open this first)
├── site.css                    ← finished stylesheet, drop in as-is
├── site.js                     ← chrome injector + tweaks panel
├── brand-mark.svg              ← the locked logo as a standalone file
└── pages/                      ← finished HTML for each page (placeholder copy — replace)
    ├── index.html
    ├── research.html
    ├── team.html
    ├── publications.html
    ├── positions.html
    ├── resources.html
    └── contact.html
```

`site.css` and `site.js` are production-ready. The HTML pages in `pages/` show the exact structure to mirror — just swap their bodies for the real content from the live site.

---

## 6 — Content sources (lift verbatim)

For each page, copy the body content from these URLs. **Do not paraphrase or shorten.** Map paragraphs/lists/headings 1:1 to the patterns described in §4.

| Page                | Source URL                                              | Pattern to use                                                                 |
|---------------------|---------------------------------------------------------|--------------------------------------------------------------------------------|
| `index.html`        | https://omnia-lab-uc.github.io/                         | Lead paragraphs as `.lead` + body `<p>`. "News" list → `ul.bare` (date · text · venue link). |
| `research.html`     | https://omnia-lab-uc.github.io/research/                | Three bold list items become three `.section-title` + `<p>` blocks.            |
| `team.html`         | https://omnia-lab-uc.github.io/team/                    | "Principal Investigator", "Researchers & Students", "Alumni", "Collaborators" each become a `.section-title` + content. PI in a `.row`. Use the placeholders from the live site verbatim ("We are currently building our team!", "Coming soon.").   |
| `publications.html` | https://omnia-lab-uc.github.io/publications/            | One `ul.bare` per year. `.y` = year, `.t` = title, `.v` = venue / DOI link.   |
| `positions.html`    | https://omnia-lab-uc.github.io/positions/               | One `.section-title` + `<p>` per opening. Application instructions at bottom. |
| `resources.html`    | https://omnia-lab-uc.github.io/resources/               | Group entries by section (`./code`, `./data`, `./teaching`) using `ul.bare`.  |
| `contact.html`      | (footer of any page; team page for PI)                  | `.row` per field — email, github, orcid, scholar, address.                    |

The home page has these links to real news items — preserve the linked DOIs / domains:
- medRxiv: `https://doi.org/10.1101/2025.06.13.25329592`
- IJFAB:   `https://doi.org/10.3138/ijfab-2025-0004`
- Scientific Reports: `https://doi.org/10.1038/s41598-024-72180-x`
- ANID Fondecyt Iniciación 2026 — link to `/positions/`.

The footer line "Made with 💗 at the Omnia Lab. GNU General Public License v3.0. 2026." can be folded into `.site-footer` left side. The 💗 emoji is part of authored content — keep it.

---

## 7 — Build instructions for the engineer

1. **Open `omnia-redesign-reference.html`** in a browser. This is the visual target. Every page chrome detail (header rules, prompt line, kicker, em-accent treatment, section-title spacing, ul.bare/grid sizing) must match.
2. **Clone the existing repo** and identify whether it's Jekyll-Pages with layouts in `_layouts/` and content in `_pages/` or `*.md`. Replace the layout(s) with the new chrome from `site.js` (or port `site.js`'s logic into a Liquid `_layouts/default.html`). Either:
   - keep `site.js` and have the layout mount empty `<div id="header-slot"></div>` / `<div id="footer-slot"></div>` slots, or
   - port the `buildHeader` / `buildFooter` / `buildTweaks` functions into Liquid templates so the chrome is server-rendered.
3. **Drop `site.css` into the repo** (e.g. `assets/site.css`) and link it from the layout. Remove or quarantine the existing stylesheet.
4. **Add Google Fonts preconnect + stylesheet** to the layout `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
   ```
5. **Replace `public/favicon.ico`** with `brand-mark.svg` (and keep a `.ico` fallback). Add `<link rel="icon" type="image/svg+xml" href="/brand-mark.svg">` to the layout.
6. **For each page**, port the existing Markdown content into the new patterns described in §4 and §6. The reference HTML files in `handoff/pages/` show exactly which pattern goes where — only the *text* changes.
7. **Each page's `<body>` must set `data-page="<slug>"`** so `site.js` can mark the active nav link and render the correct `$ cat ./<slug>.md` in the path bar. Slugs: `home`, `research`, `team`, `publications`, `positions`, `resources`, `contact`.
8. **Verify** by running `bundle exec jekyll serve` (or whatever the existing build command is). Check:
   - dark by default, accent slider works and persists across reloads
   - active nav link is correctly highlighted on each page
   - h1 has exactly one `<em>` accent
   - all links from the source content are preserved
   - mobile (≤640px) — header may need stacking; the reference doesn't optimize for narrow viewports yet, treat that as a follow-up.
9. **Do not ship until** the placeholder copy in `pages/*.html` has been fully replaced by real content from §6's URLs.

---

## 8 — Out of scope for this pass

- No animations on the logo or anywhere else (explicit user choice).
- No dark/light toggle — dark only. Light surfaces shown in some logo previews are not part of the production site.
- No new copy. Anywhere the live site is silent (e.g. publications before 2024), leave it silent.
- No icons beyond the brand mark and the `●` accent dot.

End.
