# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Collection of academic presentation slides by François Lanusse, built with Reveal.js. Each folder (e.g., `CosmoStat2026`, `COTB2024`) is a self-contained talk. Shared images/media live in `/assets/`.

## Architecture

- Uses a **custom fork** of Reveal.js from `https://github.com/EiffL/reveal.js.git` as git submodules
- Custom theme: `darkenergy` (dark background, orange accent `#FFAA7F`)
- All presentations reference shared assets via absolute paths: `/talks/assets/...`
- Slide content is pure HTML in `index.html` using Reveal.js `<section>` elements (no markdown)
- Nested `<section>` elements create vertical slide stacks
- Math rendering via MathJax/KaTeX plugin (LaTeX `$...$` and `$$...$$` notation)

**Important version difference:** The `template/` directory uses an older Reveal.js (pre-4.x) with paths like `reveal.js/css/reveal.css`. Recent talks (2022+) use Reveal.js 4.x with paths like `reveal.js/dist/reveal.css` and `reveal.js/dist/theme/darkenergy.css`. When creating a new talk, **copy from a recent talk** (not the template) to get the current structure.

## Common Development Commands

```bash
# Start dev server for a talk (port 8000, live reload)
cd [TalkName]/
npm install
npm start

# Create a new talk (copy from a recent one, not template/)
cp -r SomRecentTalk/ NewTalk2026/
cd NewTalk2026/
# Remove old submodule and re-add
rm -rf reveal.js
git submodule add https://github.com/EiffL/reveal.js.git
cd reveal.js && git submodule update --init --recursive && cd ..
npm install
npm start
```

## Slide Authoring Patterns

**CSS classes used in slides:**
- `.slide-title` - Section title with left border
- `.block` / `.block-title` / `.block-content` - Styled content boxes (dark bg, orange title)
- `.alert` - Orange bold text for emphasis
- `.container` / `.col` - Flexbox column layout
- `.inverted` - Inverts colors (white on black)
- `.plain` - Removes default image styling (borders/shadows)

**Common Reveal.js features used:**
- `data-background-iframe="background.html"` - Animated particle backgrounds
- `data-background-image` / `data-background-video` - Media backgrounds
- `class="fragment fade-up"` / `data-fragment-index` - Step-by-step reveals
- `.r-stack` with `.fragment current-visible` - Image/content overlays
- `data-src` for lazy-loaded images
- `<div class="fig-container" data-file="...">` - D3.js interactive figures (via reveald3 plugin)

**Background animation pattern:** `background.html` loads `particles.min.js` with config from `particles.json`, displayed as a slide background iframe. The background image is set via CSS in `background.html`.

## Memories and Procedures

- When creating a new presentation, always copy from a recent talk (2024+) to avoid outdated Reveal.js paths
- The `gulpfile.js` and `package.json` at the talk level are copied from `reveal.js/` submodule, not written from scratch
- Remember this procedure (and what errors you might have encountered) so that you can do it in one shot next time
