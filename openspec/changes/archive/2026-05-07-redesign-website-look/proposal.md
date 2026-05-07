## Why

The Omnia Lab site needs a refreshed visual system that better reflects the lab's identity while preserving the current Jekyll/GitHub Pages publishing model. The redesign handoff already defines a complete target look, making this a focused implementation pass rather than an open-ended redesign.

## What Changes

- Replace the current Lanyon/sidebar presentation with the terminal-flavored dark visual system from `handoff/HANDOFF.md`.
- Add shared site chrome: header, navigation, path bar, footer, brand mark, and accent hue tweaks panel.
- Restyle existing pages using the handoff component patterns while preserving authored page content verbatim.
- Add a `/contact/` page as part of the redesigned site using confirmed contact information.
- Use Jekyll pretty URLs such as `/research/` and `/contact/`, not the static `.html` links from the handoff reference.
- Replace or supplement the existing favicon with the supplied bracketed constellation brand mark.
- Keep the redesign dark-only, with no new animations, no light mode, and no added body copy.

## Capabilities

### New Capabilities

- `website-visual-redesign`: Defines the visual redesign contract for the Jekyll site, including shared chrome, content-preserving page layouts, contact page creation, assets, and validation expectations.

### Modified Capabilities

- None.

## Impact

- Affects Jekyll layouts, includes, head metadata, stylesheets, JavaScript, static assets, and page Markdown/HTML structure.
- Adds a new contact page route.
- Preserves the repository's Ruby/Jekyll dependency model and GitHub Pages deployment path.
- Does not introduce application APIs, backend services, content model changes, or new third-party runtime dependencies beyond the specified Google Fonts.
