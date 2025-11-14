# Hassan Mehmood - Portfolio

A minimalist, performance-focused portfolio website built with semantic HTML, vanilla CSS, and minimal JavaScript.

## Design Philosophy

This portfolio embraces restraint and purposeful design:

- **Whitespace as a design element**: Generous spacing lets content breathe
- **Dark monochromatic palette**: Deep black with grey tones and blue accent (#3B82F6)
- **Typography-driven**: System fonts for performance, carefully crafted hierarchy
- **Purposeful interactions**: Subtle hover states and scroll animations
- **No templates**: Custom-crafted from scratch

## Technical Highlights

- **Semantic HTML5**: Proper structure with ARIA labels for accessibility
- **Pure CSS**: No frameworks, only transforms and opacity for animations
- **Performance-first**: System fonts, minimal JavaScript, optimized rendering
- **Responsive design**: Intentionally designed for all breakpoints
- **Accessibility**: Keyboard navigation, reduced motion support, proper contrast

## Structure

```
portfolio/
├── index.html      # Semantic HTML structure
├── style.css       # Sophisticated CSS with micro-interactions
├── script.js       # Minimal JavaScript for enhancements
└── README.md       # This file
```

## Sections

1. **Hero**: Clean introduction with animated text
2. **Work**: Four selected projects with thoughtful descriptions
3. **About**: Personal narrative with key details
4. **Contact**: Simple, friction-free connection options

## Features

- Smooth scroll navigation with active state tracking
- Intersection Observer for performant scroll animations
- Hover interactions using only CSS transforms
- Fully responsive without feeling "mobile-adapted"
- Accessibility features (keyboard nav, reduced motion support)
- Fast loading with zero dependencies

## Performance

- No external fonts (system font stack)
- No frameworks or libraries (except vanilla JS)
- Minimal DOM manipulation
- CSS animations use only transform and opacity
- Lazy loading for scroll animations

## Browser Support

Modern browsers supporting:
- CSS Grid
- CSS Custom Properties
- Intersection Observer API
- CSS Animations

## Customization

Color palette is defined in CSS custom properties in `style.css`:

```css
--color-bg: #0A0A0A;
--color-bg-elevated: #111111;
--color-text: #EDEDED;
--color-text-light: #999999;
--color-accent: #3B82F6;
--color-border: #222222;
```

## Local Development

Simply open `index.html` in a modern browser. For a local server:

```bash
python3 -m http.server 8000
# or
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Philosophy

Every pixel serves a purpose. Restraint creates impact. This portfolio prioritizes craftsmanship over features, subtlety over flash, and meaningful content over decoration.

Inspired by Apple's product pages, Stripe's documentation, and high-end design agencies where simplicity is sophisticated.

---

Built with attention to detail and respect for web standards.
