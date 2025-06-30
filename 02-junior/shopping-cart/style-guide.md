# 🎨 Shopping Cart Design System

This document outlines the design system and styling guidelines for the Shopping Cart project.

## 🎯 Design Principles

- **Simplicity**: Clean, intuitive shopping experience
- **Consistency**: Uniform design patterns and variables
- **Accessibility**: High contrast, semantic HTML, keyboard navigation
- **Responsiveness**: Fluid layouts for all devices
- **Performance**: Optimized assets and transitions

## 🎨 Color Palette

### Primary Colors

- Primary Accent: `rgb(146,69,223)` (Purple)
- Accent Dark: `rgb(118,32,204)`
- Accent Light: `rgb(242,228,255)`
- Badge: `rgb(162,0,255)`
- Background: `#ffffff`
- Text Primary: `#000000`
- Text Secondary: `#666666`
- Gray Light: `rgba(141,141,141,0.2)`
- Gray Dark: `rgba(141,141,141,0.8)`
- Remove: `#C33B3B`
- Remove Hover: `#9e3232`
- Total: `#9333EA`

## 📝 Typography

### Font Families

- Primary: 'Ubuntu', sans-serif
- Secondary: 'Assistant', sans-serif

### Font Sizes

- xs: `1.3rem`
- sm: `1.5rem`
- md: `1.8rem`
- lg: `1.9rem`
- xl: `2.4rem`
- xxl: `5rem`

### Font Weights

- Medium: 500
- Bold: 700

## 📐 Spacing System

- xs: `1rem`
- sm: `1.5rem`
- md: `2rem`
- lg: `3rem`
- xl: `5rem`
- xxl: `8rem`

## 🎭 Components

### Product Card

- Padding: `var(--space-sm)`
- Border Radius: `var(--border-radius-md)`
- Box Shadow: `var(--box-shadow-card)`
- Hover Effect: Scale up, image zoom

### Cart Modal

- Padding: `var(--space-md)`
- Border Radius: `var(--border-radius-md)`
- Shadow: `var(--box-shadow-card)`
- Overlay: `rgba(0,0,0,0.466)` with blur

### Buttons

- Padding: `var(--space-xs)`
- Border Radius: `var(--border-radius-sm)`
- Transition: `var(--transition-fast)`
- Hover: Color accent change

### Input Fields

- (Not present, but follow button/input conventions if added)

## 💫 Animations

### Transitions

- Default Duration: `200ms`
- Default Timing: `linear`
- Hover Effects: Scale, color, and shadow changes
- Modal: Fade and slide in

## 📱 Responsive Design

### Breakpoints

- Mobile: `max-width: 468px`
- Desktop: default styles

### Layout Adjustments

- Mobile: Single column, full-width elements
- Desktop: Grid layout, optimized spacing

## 🎯 Accessibility

### Color Contrast

- Text: Minimum 4.5:1 ratio
- Interactive Elements: Minimum 3:1 ratio

### Focus States

- Visible focus indicators
- High contrast focus rings
- Keyboard navigation support

## 🛠️ CSS Architecture

### File Structure

- `variables.css`: Custom properties
- `reset.css`: Normalize styles
- `typography.css`: Text styles
- `main.css`: Component styles
- `fontawesome/`: Icon font files

### Naming Conventions

- BEM methodology
- Semantic class names
- Consistent prefixing

## 📚 Best Practices

1. Use CSS custom properties for theming
2. Implement mobile-first approach
3. Maintain consistent spacing and sizing
4. Follow BEM naming convention
5. Optimize transitions for performance
6. Ensure cross-browser compatibility
7. Write maintainable and scalable CSS

---

_Refer to this guide for all design and development decisions to ensure a cohesive user experience._
