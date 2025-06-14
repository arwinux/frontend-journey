# 🎨 Todo List Design System

This document outlines the design system and styling guidelines for the Todo List project.

## 🎯 Design Principles

- **Simplicity**: Clean and intuitive interface
- **Consistency**: Uniform design patterns throughout
- **Accessibility**: High contrast and readable typography
- **Responsiveness**: Fluid layouts across all devices
- **Performance**: Optimized animations and transitions

## 🎨 Color Palette

### Primary Colors

- Primary Gradient: `linear-gradient(135deg, #6e8efb, #a777e3)`
- Background: `#f5f5f5`
- Text Primary: `#333333`
- Text Secondary: `#666666`

### UI Elements

- Todo Item Background: `#ffffff`
- Shadow: `rgba(0, 0, 0, 0.1)`
- Border: `#e0e0e0`
- Success: `#4CAF50`
- Error: `#f44336`

## 📝 Typography

### Font Families

- Primary: 'Roboto Slab', serif
- Secondary: 'Alegreya', serif

### Font Sizes

- Heading: `2rem` (32px)
- Subheading: `1.5rem` (24px)
- Body: `1rem` (16px)
- Small: `0.875rem` (14px)

### Font Weights

- Regular: 400
- Medium: 500
- Bold: 700

## 📐 Spacing System

- Base Unit: `1rem` (16px)
- Small: `0.5rem` (8px)
- Medium: `1rem` (16px)
- Large: `1.5rem` (24px)
- Extra Large: `2rem` (32px)

## 🎭 Components

### Todo Item

- Padding: `1rem`
- Border Radius: `8px`
- Box Shadow: `0 2px 4px rgba(0, 0, 0, 0.1)`
- Hover Effect: Scale transform and shadow increase

### Buttons

- Padding: `0.5rem 1rem`
- Border Radius: `4px`
- Transition: `all 0.3s ease`

### Input Fields

- Padding: `0.75rem`
- Border Radius: `4px`
- Border: `1px solid #e0e0e0`
- Focus State: Border color change and subtle shadow

## 💫 Animations

### Transitions

- Default Duration: `0.3s`
- Default Timing: `ease`
- Hover Effects: Scale and shadow changes
- List Item Animations: Fade and slide

### Keyframes

- Fade In: `opacity 0.3s ease`
- Slide In: `transform 0.3s ease`
- Scale: `transform 0.2s ease`

## 📱 Responsive Design

### Breakpoints

- Mobile: `max-width: 480px`
- Tablet: `max-width: 768px`
- Desktop: `min-width: 769px`

### Layout Adjustments

- Mobile: Single column, full-width elements
- Tablet: Two columns, adjusted spacing
- Desktop: Multi-column, optimized spacing

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

### Naming Conventions

- BEM methodology
- Semantic class names
- Consistent prefixing

## 📚 Best Practices

1. Use CSS custom properties for theming
2. Implement mobile-first approach
3. Maintain consistent spacing
4. Follow BEM naming convention
5. Optimize animations for performance
6. Ensure cross-browser compatibility
7. Write maintainable and scalable CSS
