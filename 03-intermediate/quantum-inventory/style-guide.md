# Quantum Inventory – Style Guide

## Design System Overview

A modern, glassmorphic-inspired UI with a bold accent color, soft backgrounds, and a modular component approach. All design tokens are defined in `src/styles/variables.css`.

---

## 🎨 Color Palette

- **Primary**: `#ff4e08` (Orange)
- **Primary Dark**: `#d84207`
- **Accent**: `#11bcff` (Blue, for badges)
- **Text Light**: `#e6e5c7`
- **Text Dark**: `#2e2c23`
- **Background**: `#233033`
- **Success**: `#7bff00`
- **Glass/Translucent**: Various rgba/hex with alpha for overlays and cards

### Usage

- Use primary for CTAs, highlights, and key UI elements.
- Accent is reserved for category badges and special highlights.
- Glass backgrounds for cards and overlays.

---

## 📝 Typography

- **Font Family**: Inter (400, 500, 600, 700, 800, 900)
- **Font Sizes**: Ranging from 1.4rem (xxs) to 3.6rem (2xl)
- **Font Weights**: Use 700+ for titles, 400–600 for body and labels.
- **Best Practices**: Use semantic tags (`<p>`, `<label>`, `<span>`) and appropriate classes for all text.

---

## 📐 Spacing & Sizing

- **Spacing Scale**: `--spacing-xxs` (0.2rem) to `--spacing-8xl` (4.8rem)
- **Border Radius**: Soft, rounded corners (1.2–1.6rem, round for avatars/logos)
- **Box Shadows**: Subtle, layered for depth (see `--shadow-sm`, `--shadow-md`, `--shadow-lg`)

---

## 🎭 Components

- **Glass Card**: `.glass-card` for all major blocks; uses blur and border.
- **Button**: `.btn`, `.btn-primary`, `.btn-outline`, `.btn-accent` for different actions. Animated gradients and hover effects.
- **Input**: `.input` for all text fields, with focus/active states.
- **Logo**: `.logo`, `.logo-main`, `.logo-card` for branding.
- **Static Badge**: `.static-badge`, `.category-badge`, `.info-badge` for status and metadata.
- **Grid Layouts**: Use `.inventory__product-grid`, `.product__inventory-grid` for responsive product/category display.

---

## 🎯 Responsiveness

- **Breakpoints**: 1280px (xl), 1024px (lg), 768px (md), 448px (sm), 384px (xs)
- **Grids**: Collapse from 3→2→1 columns as screen shrinks.
- **Buttons/Inputs**: Stack vertically on mobile.

---

## 🎯 Best Practices

- Always use CSS variables for new design tokens.
- Keep components modular and reusable.
- Use semantic HTML for accessibility.
- Test all UI on multiple screen sizes.
- Document new patterns here for team consistency.

---

## Example: Adding a New Component

1. Create HTML in `src/components/`.
2. Add styles in `components.css` using variables.
3. Reference in `index.html` or relevant page.
4. Document usage and variants here.

---

## Inspiration

- Glassmorphism, neumorphism, and bold accent-driven UIs.
- Focus on clarity, usability, and a futuristic feel.
