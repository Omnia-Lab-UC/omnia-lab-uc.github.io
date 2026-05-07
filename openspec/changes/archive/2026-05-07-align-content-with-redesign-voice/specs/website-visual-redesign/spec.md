## ADDED Requirements

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
