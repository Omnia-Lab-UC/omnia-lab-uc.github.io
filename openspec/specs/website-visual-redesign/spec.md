## Requirements

### Requirement: Shared redesigned chrome
The site SHALL render the redesigned shared chrome on every public page, including the site header, navigation, path bar, footer, brand mark, and dark visual system described in `handoff/HANDOFF.md`.

#### Scenario: Public page loads redesigned chrome
- **WHEN** a visitor opens any public site page
- **THEN** the page displays the `omnia.lab` wordmark, bracketed constellation brand mark, terminal-style navigation, path bar, and footer using the dark handoff palette

#### Scenario: Active navigation follows current page
- **WHEN** a visitor opens a page such as `/research/`
- **THEN** the matching navigation item is visually marked active and links use Jekyll pretty URLs rather than static `.html` paths

### Requirement: Content-preserving page redesign
The site SHALL restyle existing authored pages using the handoff component patterns without rewriting, shortening, or inventing body content.

#### Scenario: Existing content remains intact
- **WHEN** a redesigned existing page is rendered
- **THEN** its authored body text and existing links are preserved verbatim while the surrounding markup follows the new prompt, kicker, heading, row, section-title, and bare-list patterns where applicable

#### Scenario: Handoff placeholder copy is excluded
- **WHEN** implementation uses files from `handoff/pages/` as structural references
- **THEN** placeholder page copy from those files is not shipped in place of the current site content

### Requirement: Contact page
The site SHALL add a `/contact/` page that matches the redesign and uses confirmed contact information only.

#### Scenario: Contact page is available
- **WHEN** a visitor opens `/contact/`
- **THEN** the page renders with the same redesigned chrome and component styling as the rest of the site

#### Scenario: Placeholder contact fields are omitted
- **WHEN** the contact page is rendered
- **THEN** it includes confirmed details such as email, GitHub, PI or affiliation context, and the accepted institutional address, and it excludes placeholder ORCID or Scholar links unless real values are provided

### Requirement: Accent hue tweak panel
The site SHALL provide a bottom-right `[ tweaks ]` control that lets visitors adjust the accent hue and persists the selected hue in `localStorage` under `omnia-hue`.

#### Scenario: Accent hue persists
- **WHEN** a visitor changes the accent hue with the tweaks slider and reloads the page
- **THEN** the selected accent hue is restored from `localStorage`

#### Scenario: Default accent works without stored preference
- **WHEN** no `omnia-hue` value exists
- **THEN** the site uses the default warm yellow accent from the handoff palette

### Requirement: Build and responsive validation
The redesigned site SHALL remain buildable with the existing Jekyll commands and usable on desktop and narrow mobile widths.

#### Scenario: Jekyll build succeeds
- **WHEN** `bundle exec jekyll build` is run
- **THEN** the site builds successfully without Liquid or layout errors

#### Scenario: Narrow viewport remains usable
- **WHEN** a redesigned page is viewed at a viewport width of 640px or less
- **THEN** header, navigation, content grids, and footer remain readable without incoherent overlap

### Requirement: Redesign voice alignment
The site SHALL align page content presentation with the terminal-flavored redesign voice while preserving substantive page content, links, and routes.

#### Scenario: Decorative emoji cleanup
- **WHEN** a public page is rendered
- **THEN** headings, section titles, and home presentation text do not use decorative emoji that conflicts with the terminal visual system

#### Scenario: Terminal section labels
- **WHEN** a page renders a section title
- **THEN** the section title uses terminal-path style formatting such as `./Recent`, `./Funding`, or `./2024`

### Requirement: Home page reference alignment
The home page SHALL follow the handoff reference ordering more closely while preserving the lab description, news items, and links.

#### Scenario: Home CTAs appear after intro
- **WHEN** the home page is rendered
- **THEN** the primary CTA row appears immediately after the intro lead and before the longer body paragraphs

#### Scenario: Home news uses compact date tags
- **WHEN** home news items are rendered
- **THEN** their date tags use `YYYY.MM` format and the news section label uses terminal-path styling

### Requirement: Research theme rows
The research page SHALL render research topics as numbered terminal-style entries while preserving the existing research topic text.

#### Scenario: Research topics are numbered rows
- **WHEN** the research page is rendered
- **THEN** each research topic is displayed as a numbered row such as `01 / exposures`, `02 / sex differences`, or `03 / society`

#### Scenario: Research wording remains intact
- **WHEN** research topics are converted to the row layout
- **THEN** the existing research headings and explanatory paragraphs remain substantively unchanged

### Requirement: Publication index formatting
The publications page SHALL render publication entries as indexed year lists with publication numbering and linked venue metadata in the right column.

#### Scenario: Publications are numbered within each year
- **WHEN** publications are rendered within a year section
- **THEN** each entry shows a left-column identifier combining the year and per-year number, such as `2024.001`

#### Scenario: Venue link is separated from main citation
- **WHEN** a publication has a paper or venue link
- **THEN** the main citation column contains authors, year, and title, and the right column contains the linked journal, venue, DOI/source label, or paper link

#### Scenario: Publication links are preserved
- **WHEN** publication metadata is moved into the right column
- **THEN** existing DOI, source, or external paper URLs remain available as links
