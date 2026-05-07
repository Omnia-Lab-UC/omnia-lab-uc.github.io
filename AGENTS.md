# Repository Guidelines

## Project Structure & Module Organization

This repository is a Jekyll site for the Omnia Lab website, based on the Lanyon theme. Top-level Markdown files such as `index.md` and `404.md` define primary pages. Additional site pages live in `_pages/`, shared templates in `_layouts/`, and reusable HTML fragments in `_includes/`. Static assets are under `public/`, with CSS in `public/css/`, JavaScript in `public/js/`, and images in `public/img/`. The `handoff/` directory contains redesign reference files.

## Build, Test, and Development Commands

Use Bundler so Jekyll and plugins match `Gemfile.lock`.

```bash
bundle install
bundle exec jekyll serve
bundle exec jekyll build
```

`bundle install` installs Ruby dependencies. `bundle exec jekyll serve` runs the site locally, usually at `http://127.0.0.1:4000`. `bundle exec jekyll build` generates the static site into `_site/` and is the main pre-commit validation command.

## Coding Style & Naming Conventions

Prefer simple Markdown with YAML front matter for content pages. Keep front matter keys consistent with existing pages in `_pages/`. Use two-space indentation in YAML and HTML where nesting is needed. Place reusable page chrome in `_includes/` instead of duplicating markup. Use lowercase, hyphenated filenames for new pages and assets, for example `research-projects.md`.

## Testing Guidelines

There is no dedicated automated test suite. Validate changes with `bundle exec jekyll build` and fix any Liquid, Markdown, or configuration warnings. For visual or navigation changes, also run `bundle exec jekyll serve` and review affected pages in a browser. Check internal links, image paths, and generated URLs.

## Commit & Pull Request Guidelines

Recent commits use concise, imperative, lowercase summaries, such as `update masthead layout and styling` or `add logo support to sidebar and header`. Follow that style and keep each commit focused on one logical change.

Pull requests should include a short description of the user-facing change, the validation command run, and screenshots for layout or styling updates. Link related issues when available. For content updates, mention the pages changed; for theme or layout updates, list the affected templates or asset files.

## Agent-Specific Instructions

When working through shell commands in this repository, prefix commands with `rtk` as requested by the local Codex instruction file. Do not edit generated output directories such as `_site/`; change source Markdown, layouts, includes, or assets instead.
