## 1. Site-Wide Voice Alignment

- [x] 1.1 Replace section titles across `index.md`, `_pages/*.md`, and `404.md` with terminal-path labels such as `./Recent`, `./Funding`, and `./2024`.
- [x] 1.2 Remove decorative emoji from home headings, home section titles, and home presentation text while preserving substantive wording.
- [x] 1.3 Verify no handoff placeholder copy is introduced while adjusting labels and metadata.

## 2. Home Page Alignment

- [x] 2.1 Move the home CTA row immediately after the intro lead and before the longer lab description paragraphs.
- [x] 2.2 Rename the home news section to `./Recent` and convert news date tags to `YYYY.MM` format.
- [x] 2.3 Keep all existing home news links and lab description wording intact except decorative emoji cleanup.

## 3. Research Page Alignment

- [x] 3.1 Fix the research kicker to match the actual number of themes.
- [x] 3.2 Convert research topics into numbered `.row` entries with keys like `01 / exposures`, `02 / sex differences`, and `03 / society`.
- [x] 3.3 Preserve existing research headings and explanatory paragraphs inside the new row layout.

## 4. Publications Page Alignment

- [x] 4.1 Convert publication year section titles to terminal-path labels such as `./2025`.
- [x] 4.2 Number publications within each year using left-column identifiers like `2024.001`, `2024.002`, and `2023.003`.
- [x] 4.3 Remove journal, venue, volume, and page metadata from the main citation column where practical, leaving authors, year, and title.
- [x] 4.4 Move paper links into the right column using journal, venue, DOI/source, or link labels while preserving all existing URLs.
- [x] 4.5 Adjust CSS only if needed to keep numbered publication rows readable on desktop and mobile.

## 5. Validation

- [x] 5.1 Run `git diff --check`.
- [x] 5.2 Run `env -u GEM_HOME -u GEM_PATH rbenv exec bundle exec jekyll build`.
- [x] 5.3 Review rendered home, research, and publications pages locally for terminal labels, CTA placement, publication numbering, venue links, and readable responsive layout.
