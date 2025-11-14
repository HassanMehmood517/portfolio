# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimalist, performance-focused personal portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. This is a static site emphasizing restraint, purposeful design, and web standards.

## Architecture

**Single-page application with vanilla web technologies:**

- `index.html`: Semantic HTML5 structure with four main sections (Hero, Work, About, Contact)
- `style.css`: Custom CSS using CSS Grid, CSS Custom Properties, and transform/opacity animations
- `script.js`: Minimal JavaScript for smooth scroll navigation and intersection observer animations

**Design principles:**
- Dark monochromatic palette (deep black `#0A0A0A` with grey tones and blue accent `#3B82F6`)
- System font stack for performance (no web fonts)
- Generous whitespace and typography-driven hierarchy
- Subtle hover states using only CSS transforms
- Accessibility-first with keyboard navigation, ARIA labels, and reduced motion support

**CSS architecture:**
- CSS Custom Properties defined in `:root` (style.css:11-23)
- Mobile-first responsive design with breakpoints at 968px and 640px (style.css:378-461)
- Animations use only `transform` and `opacity` for GPU acceleration
- Custom easing function: `cubic-bezier(0.23, 1, 0.32, 1)` for smooth interactions

**JavaScript patterns:**
- Intersection Observer API for scroll-triggered animations (script.js:43-65)
- RequestAnimationFrame for throttled scroll events (script.js:27-37)
- Respects `prefers-reduced-motion` media query (script.js:71-78)
- Navigation highlighting based on scroll position (script.js:10-25)

## Local Development

**Running the site:**
```bash
# Python simple server
python3 -m http.server 8000

# PHP server
php -S localhost:8000
```

Then visit `http://localhost:8000`

**No build process required** - this is a static site. Simply open `index.html` in a browser or use a local server.

## Key Implementation Details

**Color customization:**
All colors are defined as CSS custom properties in `style.css:11-17`. To change the color scheme, modify these variables:
- `--color-bg`: Main background
- `--color-bg-elevated`: Alternate section background
- `--color-text`: Primary text color
- `--color-text-light`: Secondary text color
- `--color-accent`: Accent color for links and focus states
- `--color-border`: Border color

**Scroll animations:**
Projects fade in on scroll using Intersection Observer with staggered delays (script.js:59-65). Each project has:
- Initial state: `opacity: 0` and `translateY(30px)`
- Staggered transitions with `index * 0.1s` delay
- Observed with threshold `0.1` and bottom root margin `-100px`

**Navigation active states:**
Scroll position determines active navigation link (script.js:10-25). Links get `.active` class when corresponding section is in viewport (with 100px offset from top).

**Performance optimizations:**
- Throttled scroll handlers using `requestAnimationFrame` (script.js:27-37)
- Intersection Observer unobserves elements after animation (script.js:53)
- CSS animations disabled for users with `prefers-reduced-motion` (style.css:467-479, script.js:71-78)
- System fonts only, no external font loading
- Minimal DOM manipulation

## Content Structure

**Sections:**
1. Hero (index.html:12-30): Navigation + title + subtitle with fade-in animations
2. Work (index.html:33-103): Four project cards with metadata, descriptions, and tags
3. About (index.html:106-143): Personal narrative in two-column grid with sticky details sidebar
4. Contact (index.html:146-165): Email and phone contact links
5. Footer (index.html:168-172): Copyright notice

**Responsive behavior:**
- Desktop (>968px): Two-column About section with sticky sidebar
- Tablet (≤968px): Single column About section, reduced spacing
- Mobile (≤640px): Compact navigation, smaller typography, stacked project metadata
