# Development Guide - Blog Preview Card

This document provides development information, setup instructions, and technical details for the Blog Preview Card project.

## Project Overview

A responsive blog preview card component built with HTML and CSS, featuring hover effects and modern design principles.

## Project Structure

```
blog-preview-card/
├── assets/
│   ├── fonts/
│   │   ├── static/
│   │   │   ├── Figtree-ExtraBold.ttf
│   │   │   └── Figtree-Medium.ttf
│   │   └── Figtree-VariableFont_wght.ttf
│   └── images/
│       ├── favicon-32x32.png
│       ├── illustration-article.svg
│       └── image-avatar.webp
├── design/
│   ├── active-states.jpg
│   ├── desktop-design.jpg
│   └── mobile-design.jpg
├── src/
│   └── css/
│       ├── main.css
│       ├── reset.css
│       ├── typography.css
│       └── variable.css
├── index.html
├── README.md
├── style-guide.md
└── DEVELOPMENT.md
```

## CSS Architecture

### File Organization

The CSS is organized into modular files for better maintainability:

- **`reset.css`**: CSS reset and base styles
- **`variable.css`**: CSS custom properties and design tokens
- **`typography.css`**: Font definitions and text presets
- **`main.css`**: Component styles and layout

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-white: hsl(0, 0%, 100%);
  --color-yellow: #f4d04e;
  --color-gray-950: #111111;
  --color-gray-500: #6b6b6b;

  /* Typography */
  --font-medium: "Figtree-Medium";
  --font-extrabold: "Figtree-ExtraBold";

  /* Spacing */
  --spacing-50: 0.4rem;
  --spacing-100: 0.8rem;
  --spacing-150: 1.2rem;
  --spacing-300: 2.4rem;
}
```

### Typography System

Four text presets for consistent typography:

```css
.text-preset-1 {
  /* Main heading - 24px, ExtraBold */
}
.text-preset-2 {
  /* Body text - 16px, Medium */
}
.text-preset-3 {
  /* Small text - 14px, Medium */
}
.text-preset-3-bold {
  /* Small bold text - 14px, ExtraBold */
}
```

## Component Structure

### HTML Semantics

```html
<main>
  <article class="blog-card">
    <div class="blog-card__image">
      <img src="..." alt="article image" />
    </div>

    <div class="blog-card__content">
      <div class="blog-card__badge">
        <span class="badge text-preset-3-bold">Learning</span>
      </div>

      <div class="blog-card__date">
        <span class="text-preset-2">Published 21 Dec 2023</span>
      </div>

      <div class="blog-card__title">
        <h1 class="text-preset-1">HTML & CSS foundations</h1>
      </div>

      <div class="blog-card__description">
        <p class="text-preset-2 description">...</p>
      </div>

      <div class="blog-card__author">
        <div class="blog-card__author-avatar">
          <img src="..." alt="author Avatar" />
        </div>
        <div class="blog-card__author-name">
          <span class="text-preset-3-bold">Greg Hooper</span>
        </div>
      </div>
    </div>
  </article>
</main>
```

### CSS BEM Methodology

The project uses BEM (Block Element Modifier) naming convention:

- **Block**: `.blog-card`
- **Element**: `.blog-card__image`, `.blog-card__content`, `.blog-card__author`
- **Modifier**: `.text-preset-1`, `.text-preset-2`, etc.

## Interactive Features

### Hover Effects

```css
.blog-card {
  box-shadow: 0.8rem 0.8rem 0rem black;
  transition: all 400ms linear;
}

.blog-card:hover {
  box-shadow: 1.5rem 1.5rem 0rem black;
}

.blog-card:hover .text-preset-1 {
  color: var(--color-yellow);
}
```

### Transition Properties

- **Duration**: 400ms
- **Timing Function**: linear
- **Properties**: all (shadow and color changes)

## Responsive Design

### Breakpoints

- **Mobile**: 375px (design reference)
- **Desktop**: 1440px (design reference)
- **Actual**: Responsive from 320px to large screens

### Layout Approach

- **Flexbox**: Used for centering and layout
- **Mobile-first**: Base styles for mobile, enhanced for larger screens
- **Fluid typography**: Rem units for scalable text

## Font Implementation

### Local Font Files

```css
@font-face {
  font-family: "Figtree-Medium";
  src: url("../../assets/fonts/static/Figtree-Medium.ttf");
}

@font-face {
  font-family: "Figtree-ExtraBold";
  src: url("../../assets/fonts/static/Figtree-ExtraBold.ttf");
}
```

### Font Loading Strategy

- Local font files for better performance
- Fallback to system fonts if loading fails
- Variable font file available for additional weights

## Performance Considerations

### Optimizations

- **Local fonts**: Reduced external dependencies
- **CSS organization**: Modular files for better caching
- **Image optimization**: Pre-optimized assets
- **Minimal dependencies**: Pure HTML/CSS solution

### Best Practices

- Semantic HTML for accessibility
- CSS custom properties for maintainability
- BEM methodology for scalable CSS
- Mobile-first responsive design

## Browser Support

### Tested Browsers

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### CSS Features Used

- CSS Custom Properties (CSS Variables)
- Flexbox
- CSS Transitions
- Rem units
- Border-radius
- Box-shadow

## Development Workflow

### Setup

1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required (pure HTML/CSS)

### File Editing

- **HTML**: Edit `index.html` for structure changes
- **CSS**: Modify files in `src/css/` for styling changes
- **Assets**: Replace files in `assets/` for content updates

### Testing

- Test hover effects on desktop
- Verify responsive behavior across screen sizes
- Check accessibility with keyboard navigation
- Validate HTML and CSS

## Future Enhancements

### Potential Improvements

- Add CSS Grid for more complex layouts
- Implement CSS animations for micro-interactions
- Add dark mode support
- Enhance accessibility with ARIA labels
- Add loading states for images
- Implement CSS-in-JS for larger projects

### Scalability Considerations

- Component-based architecture ready for frameworks
- Design system foundation established
- Modular CSS structure for easy maintenance
- Consistent naming conventions for team development

## Troubleshooting

### Common Issues

1. **Fonts not loading**: Check file paths in `typography.css`
2. **Hover effects not working**: Ensure CSS transitions are enabled
3. **Layout breaking**: Verify flexbox support in browser
4. **Images not displaying**: Check asset file paths

### Debug Tools

- Browser Developer Tools for CSS inspection
- CSS Validator for syntax errors
- HTML Validator for markup issues
- Lighthouse for performance and accessibility

## Contributing

### Code Style

- Use BEM methodology for CSS classes
- Follow semantic HTML principles
- Maintain consistent spacing and formatting
- Add comments for complex CSS rules

### File Naming

- Use kebab-case for file names
- Descriptive names for CSS classes
- Consistent folder structure

---

_This development guide is maintained as part of the Blog Preview Card project documentation._
