## Why

The redesigned site is visually strong, but some carried-over content presentation still feels out of step with the terminal-flavored handoff. This change aligns page labels, home structure, research layout, and publication metadata with the redesign voice while preserving substantive content and links.

## What Changes

- Remove decorative emoji from headings, section labels, and home body presentation where they conflict with the new visual system.
- Move home CTAs directly below the intro, matching the handoff reference structure.
- Rename section titles across pages to terminal-path style labels such as `./Recent`, `./Funding`, and `./Principal Investigator`.
- Format home news dates as `YYYY.MM`.
- Redesign the research page to use numbered terminal-like theme rows while preserving the existing research text.
- Redesign the publications page so each year section uses numbered entries (`001`, `002`, etc.) after the year, moves journal or venue information to the right column, and keeps paper links available from the venue column.
- Preserve pretty Jekyll URLs, existing publication links, and the site-wide typography/visual system.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `website-visual-redesign`: Add requirements for content-presentation alignment with the redesign voice, including terminal section labels, home CTA placement, research theme rows, publication numbering, venue-link placement, and decorative emoji cleanup.

## Impact

- Affects Markdown/HTML structure in `index.md` and `_pages/*.md`, especially research and publications.
- May require small CSS adjustments for publication numbering and venue columns.
- Does not change backend behavior, dependencies, routing, core page content, or publication URLs.
