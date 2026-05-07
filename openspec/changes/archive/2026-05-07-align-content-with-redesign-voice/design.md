## Context

The redesigned site now uses the dark terminal-like visual system, but some page content still carries older presentation conventions: emoji in prominent places, prose-like date labels, section titles without terminal path markers, CTAs placed after content, research themes rendered as simple prose blocks, and publication rows that mix title and venue metadata in the main column.

This change is a content-presentation alignment pass. It should keep the main copy, links, and routes intact while reshaping labels, ordering, and metadata placement to better match the handoff reference.

## Goals / Non-Goals

**Goals:**

- Bring page-level content presentation closer to `handoff/pages/*.html` while using real site content.
- Remove decorative emoji from headings, section labels, and home prose presentation where it conflicts with the redesign voice.
- Use terminal-path section titles consistently, such as `./Recent`, `./Funding`, and `./2024`.
- Move home CTAs immediately after the page intro.
- Present research themes as numbered terminal-style entries.
- Present publications as year sections with per-year numbering (`001`, `002`, etc.) and venue links in the right column.

**Non-Goals:**

- Do not invent new substantive copy.
- Do not change routes, publication URLs, contact details, or research meaning.
- Do not replace the current visual system or undo the recent typography increase.
- Do not add new dependencies or runtime behavior.

## Decisions

1. **Treat labels and metadata as presentation, not body copy.**
   Section titles, date tags, CTA labels, publication counters, and right-column venue labels may be normalized to match the redesign voice. Main paragraphs, research descriptions, application instructions, and publication titles remain intact.

2. **Use `./Title Case` section labels across the site.**
   This keeps the terminal path metaphor consistent while preserving readability. Year labels become `./2025`, `./2024`, etc. Existing plain labels like `Funding` become `./Funding`.

3. **Use per-year publication numbering in the left column.**
   The publication left column should show the year and entry number together, for example `2024.001` and `2024.002`. This satisfies the requested “after the year, number publications” format while keeping the existing `ul.bare` three-column structure.

4. **Move publication venue/link to the right column.**
   The main column should contain authors, publication year, and title. The right column should contain a linked journal, venue, DOI label, or source name. This makes publication rows scan like the handoff index lists.

5. **Use rows for research themes.**
   Research themes should use `.row` with keys such as `01 / exposures`, `02 / sex differences`, and `03 / society`. The value column preserves the existing theme heading and paragraphs, giving the page a stronger reference-build rhythm.

## Risks / Trade-offs

- **Risk: Removing emoji could be seen as content editing** → Limit removal to decorative emoji and preserve substantive wording.
- **Risk: Publication venue extraction could accidentally alter citation meaning** → Keep titles and authors intact, preserve links, and use journal/source names only in the venue column.
- **Risk: Longer venue names may crowd the right column** → Use short, recognizable venue labels where needed and rely on responsive stacking on narrow screens.
- **Risk: Terminal labels could reduce clarity** → Use readable labels after `./`, such as `./Open Positions`, not opaque abbreviations.
