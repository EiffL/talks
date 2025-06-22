# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a collection of academic presentation slides built with Reveal.js. Each folder represents a different talk/presentation (e.g., `COTB2024`, `CCA2024`, `AAS2021`) containing:

- `index.html` - Main presentation file with slide content
- `reveal.js/` - Git submodule containing the Reveal.js framework (customized fork)
- `package.json` - Dependencies and build scripts
- `gulpfile.js` - Build configuration for development server and asset processing
- Optional: `background.html`, `particles.js`, additional HTML files for interactive elements

## Architecture

**Presentation Structure:**
- Each talk is self-contained in its own directory
- Uses a fork of Reveal.js from `https://github.com/EiffL/reveal.js.git` as git submodules
- Main content lives in `index.html` with embedded HTML slides
- Assets shared across presentations are in `/assets/` directory
- Custom styling uses the "darkenergy" theme

**Build System:**
- Node.js + Gulp for development server and asset processing
- Each presentation has its own `package.json` and can be developed independently
- Development server typically runs on port 8000

## Common Development Commands

### Creating a New Presentation
```bash
# 1. Create new directory and copy template
cp -r template/ NewTalk2024/
cd NewTalk2024/

# 2. Add reveal.js submodule
git submodule add https://github.com/EiffL/reveal.js.git
cd reveal.js
git submodule update --init --recursive

# 3. Copy build files
cp package.json gulpfile.js ../

# 4. Install dependencies and start development
npm install
npm start
```

### Working on Existing Presentations
```bash
cd [TalkName]/
npm install          # Install dependencies
npm start           # Start development server (usually port 8000)
npm run build       # Build for production
```

### Git Submodule Management
```bash
# Update all submodules
git submodule update --init --recursive

# Update specific submodule
cd [TalkName]/reveal.js
git pull origin master
```

## File Structure Patterns

**Standard Talk Directory:**
```
TalkName2024/
├── index.html              # Main presentation
├── background.html          # Optional animated background
├── package.json            # Dependencies & scripts
├── gulpfile.js            # Build configuration  
├── reveal.js/             # Git submodule
├── particles.js           # Optional particle effects
├── particles.json         # Particle configuration
└── models/                # Optional 3D models/data
```

**Key Files to Edit:**
- `index.html` - Primary presentation content and structure
- Custom backgrounds/interactive elements in separate HTML files
- Assets reference `/talks/assets/` for shared images/media

## Development Notes

- Presentations use mathematical notation (MathJax/KaTeX)
- Interactive elements include 3D visualizations, particle effects, embedded demos
- Custom CSS classes: `.slide-title`, `.block`, `.alert`, `.container`, `.col`
- Many presentations include embedded videos, animations, and interactive JavaScript demos
- Development server supports live reload for rapid iteration

## Memories and Procedures

- Remember this procedure (and what errors you might have encountered) so that you can do it in one shot next time