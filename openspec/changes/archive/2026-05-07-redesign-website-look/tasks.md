## 1. Shared Assets and Layout

- [x] 1.1 Add the supplied brand mark SVG to the active public assets and wire SVG favicon metadata while preserving an `.ico` fallback if needed.
- [x] 1.2 Replace active stylesheet loading with the redesigned stylesheet based on `handoff/site.css`, including the `letter-spacing` fix and minimal responsive rules.
- [x] 1.3 Update the document head to load JetBrains Mono and Inter from Google Fonts and remove unused Lanyon-era font/style dependencies from the active layout.
- [x] 1.4 Rebuild shared page chrome in Jekyll layouts/includes: header, pretty-URL navigation, active nav state, path bar, footer, and site main container.
- [x] 1.5 Add the `[ tweaks ]` accent hue slider behavior, persisting `omnia-hue` in `localStorage` while keeping the default accent usable without JavaScript.

## 2. Page Redesign

- [x] 2.1 Restyle the home page using the prompt, kicker, `h1.h1-display`, lead, CTA, row, and bare-list patterns while preserving existing home copy and news links.
- [x] 2.2 Restyle the research page by mapping existing research-line text into section-title and paragraph blocks without changing the text.
- [x] 2.3 Restyle the team page using section-title and row patterns while preserving PI, team-building, alumni, and collaborator copy.
- [x] 2.4 Restyle the publications page into year-grouped bare lists while preserving publication titles, authors, venues, and links.
- [x] 2.5 Restyle the positions page using section-title and paragraph patterns while preserving application instructions and funding links.
- [x] 2.6 Restyle the resources page using section-title and bare-list or row patterns while preserving lab manual, software, data, and computing content.
- [x] 2.7 Add a `/contact/` page with redesigned chrome and confirmed contact details only: email, GitHub, PI or affiliation context, and accepted institutional address.

## 3. Cleanup and Validation

- [x] 3.1 Ensure no placeholder copy from `handoff/pages/*.html` ships in redesigned pages.
- [x] 3.2 Ensure navigation links use Jekyll pretty URLs and the path bar displays the correct page slug.
- [x] 3.3 Run `bundle exec jekyll build` and fix any Liquid, Markdown, CSS, or asset-path errors.
- [x] 3.4 Run the site locally and verify desktop pages for dark palette, typography, active navigation, footer links, and accent slider persistence.
- [x] 3.5 Verify pages at 640px width or below for readable header, navigation, content grids, and footer without incoherent overlap.
