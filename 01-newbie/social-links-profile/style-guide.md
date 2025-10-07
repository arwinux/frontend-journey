# Design System - Social Links Profile

## Overview
This document outlines the design system specifications for the Social Links Profile project. It serves as a comprehensive guide for maintaining design consistency and implementing the visual identity across the application.

## Design Tokens

### Colors
Our color palette is designed for accessibility and visual hierarchy:

```css
:root {
  /* Primary Colors */
  --white: #ffffff;                    /* Pure white for text and backgrounds */
  --color-green: #c5f82a;             /* Accent green for highlights and hover states */
  
  /* Neutral Grays */
  --color-grey-700: #333333;          /* Medium gray for card backgrounds */
  --color-grey-800: #1f1f1f;          /* Dark gray for main card background */
  --color-grey-900: #141414;          /* Darkest gray for body background */
}
```

**Color Usage Guidelines:**
- `--white`: Primary text color, ensures maximum readability
- `--color-green`: Accent color for location text and hover states
- `--color-grey-700`: Link button backgrounds
- `--color-grey-800`: Main profile card background
- `--color-grey-900`: Body background for contrast

**Accessibility Notes:**
- All color combinations meet WCAG AA contrast requirements
- Green accent color provides sufficient contrast against dark backgrounds
- High contrast ratios ensure readability across different devices

### Typography

#### Font Family
**Primary Font:** Inter
- **Source:** [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Weights Used:** 400 (Regular), 600 (SemiBold), 700 (Bold)

#### Font Implementation
```css
@font-face {
  font-family: "inter-regular";
  font-weight: 400;
  src: url("../assets/fonts/static/Inter-Regular.ttf");
}

@font-face {
  font-family: "inter-semibold";
  font-weight: 600;
  src: url("../assets/fonts/static/Inter-SemiBold.ttf");
}

@font-face {
  font-family: "inter-bold";
  font-weight: 700;
  src: url("../assets/fonts/static/Inter-Bold.ttf");
}
```

#### Typography Scale
| Element | Font Size | Font Weight | Line Height | Usage |
|---------|-----------|-------------|-------------|-------|
| Profile Name | 2.4rem | SemiBold (600) | Default | Primary heading |
| Location | 1.4rem | Bold (700) | Default | Secondary text |
| Bio Quote | 1.4rem | Regular (400) | Default | Body text |
| Link Buttons | 1.4rem | SemiBold (600) | Default | Interactive elements |

### Spacing System
Consistent spacing creates visual rhythm and improves readability:

```css
/* Spacing Scale */
--spacing-xs: 0.8rem;    /* Small gaps */
--spacing-sm: 1.2rem;    /* Medium gaps */
--spacing-md: 1.5rem;    /* Standard gaps */
--spacing-lg: 2.4rem;    /* Large gaps */
--spacing-xl: 4rem;      /* Extra large gaps */
```

**Spacing Usage:**
- Profile card padding: `4rem` (--spacing-xl)
- Element gaps: `2.4rem` (--spacing-lg)
- Link button spacing: `1.5rem` (--spacing-md)
- Name-location gap: `1rem` (--spacing-sm)

### Border Radius
Consistent border radius creates a cohesive, modern look:

```css
/* Border Radius Scale */
--radius-sm: 0.8rem;     /* Link buttons */
--radius-md: 1rem;       /* Main card */
--radius-full: 100%;     /* Profile image (circular) */
```

### Shadows & Elevation
Subtle shadows provide depth and focus:

```css
/* Shadow System */
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.1);  /* Card elevation */
--shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.15); /* Hover state */
```

## Component Specifications

### Profile Card
**Dimensions:**
- Max-width: `37rem`
- Padding: `4rem`
- Border radius: `1rem`
- Background: `var(--color-grey-800)`

**Layout:**
- Flexbox column layout
- Centered alignment
- Responsive design with proper mobile handling

### Profile Image
**Specifications:**
- Size: `9rem × 9rem`
- Border radius: `100%` (circular)
- Aspect ratio: 1:1
- Format: JPEG (optimized for web)

### Link Buttons
**Dimensions:**
- Width: `100%` of container
- Height: `4.2rem`
- Border radius: `0.8rem`
- Font size: `1.4rem`

**States:**
- **Default:** `var(--color-grey-700)` background, white text
- **Hover:** `var(--color-green)` background, dark text
- **Transition:** `300ms linear` for smooth state changes

## Layout Guidelines

### Breakpoints
```css
/* Mobile First Approach */
/* Base styles: 320px and up */

/* Tablet and up */
@media (min-width: 768px) {
  /* Tablet-specific adjustments */
}

/* Desktop and up */
@media (min-width: 1440px) {
  /* Desktop-specific adjustments */
}
```

### Container Strategy
- **Main container:** Full viewport height with flexbox centering
- **Card container:** Max-width constraint with responsive padding
- **Content area:** Flexible width with consistent internal spacing

## Interaction Design

### Hover States
All interactive elements include hover states for better user experience:

```css
.profile-card__link:hover {
  background-color: var(--color-green);
  color: var(--color-grey-800);
  font-family: inter-bold;
  transition: all 300ms linear;
}
```

### Focus States
Ensure keyboard navigation accessibility:
- Visible focus indicators
- High contrast focus rings
- Logical tab order

### Transitions
Smooth transitions enhance user experience:
- Duration: `300ms`
- Timing: `linear`
- Properties: `all` for comprehensive state changes

## Accessibility Standards

### WCAG Compliance
- **Color Contrast:** All text meets AA standards (4.5:1 ratio minimum)
- **Keyboard Navigation:** Full keyboard accessibility
- **Screen Readers:** Semantic HTML structure
- **Focus Management:** Clear focus indicators

### Semantic HTML
```html
<main>
  <article class="profile-card">
    <div class="profile-card__detail">
      <img class="profile-card__image" alt="profile" />
      <div class="profile-card__name-location">
        <p class="profile-card__name">Jessica Randall</p>
        <p class="profile-card__location">London, United Kingdom</p>
      </div>
      <p class="profile-card__bio">"Front-end developer and avid reader."</p>
    </div>
    <div class="profile-card__links">
      <!-- Link buttons -->
    </div>
  </article>
</main>
```

## Performance Considerations

### Font Loading
- Use `font-display: swap` for better performance
- Preload critical fonts
- Fallback fonts for improved loading experience

### Image Optimization
- Profile image: WebP format with JPEG fallback
- Proper alt text for accessibility
- Optimized file sizes

### CSS Organization
- Modular CSS architecture
- Minimal specificity conflicts
- Efficient selector patterns

## Browser Support

### Modern Browsers
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Fallbacks
- CSS Grid fallbacks for older browsers
- Font fallback stack: Inter, system-ui, sans-serif
- Progressive enhancement approach

## Maintenance Guidelines

### Code Organization
1. **Variables first:** Define all design tokens in `variables.css`
2. **Reset styles:** Normalize browser defaults in `reset.css`
3. **Typography:** Centralize text styles in `typography.css`
4. **Components:** Keep component styles in `main.css`

### Naming Conventions
- **BEM Methodology:** Block__Element--Modifier
- **CSS Variables:** Use descriptive names with purpose
- **File Organization:** Separate concerns into logical modules

### Documentation
- Comment complex CSS logic
- Document design decisions
- Maintain this style guide as the project evolves

---

*This design system serves as the single source of truth for all design decisions in the Social Links Profile project. Update this document when making changes to ensure consistency across the application.*