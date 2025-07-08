# 🖌️ Style Guide

A comprehensive guide to the design system for **Product Filter**. This document outlines the visual language, CSS variables, and UI patterns to ensure a consistent, beautiful, and accessible user experience.

---

## 🎨 Color Palette

| Name                  | Variable                    | Value             | Usage                  |
| --------------------- | --------------------------- | ----------------- | ---------------------- |
| Primary Blue          | `--color-primary-blue`      | #2563eb           | Buttons, highlights    |
| Header Gradient Start | `--header-Background-Color` | #9333ea → #3b82f6 | Header background      |
| Border                | `--color-border`            | #d8b4fe           | Card borders, outlines |
| White                 | `--color-white`             | #fff              | Backgrounds, text      |
| Icon                  | `--color-icon`              | #b697d8           | Icons                  |
| Hover Border          | `--color-hover-border`      | #8b3aeb           | Hover states           |
| Hover Shadow          | `--color-hover-shadow`      | #8a3aeb59         | Card hover shadow      |
| Gradient Start        | `--color-gradient-start`    | #facc15           | Tag badge, accent      |
| Gradient End          | `--color-gradient-end`      | #f97316           | Tag badge, accent      |
| Shadow Dark           | `--color-shadow-dark`       | rgba(0,0,0,0.48)  | Header text shadow     |
| Shadow Medium         | `--color-shadow-medium`     | rgba(0,0,0,0.23)  | Card shadow            |
| Shadow Light          | `--color-shadow-light`      | rgba(0,0,0,0.2)   | Subtle shadow          |

---

## 🔤 Typography

| Font Family | Variable             | Weight | Usage             |
| ----------- | -------------------- | ------ | ----------------- |
| Inter 400   | `--font-primary-400` | 400    | Body, input       |
| Inter 500   | `--font-primary-500` | 500    | Emphasis, buttons |
| Inter 600   | `--font-primary-600` | 600    | Filter badges     |
| Inter 700   | `--font-primary-700` | 700    | Headings, price   |
| Inter 800   | `--font-primary-800` | 800    | Price, highlights |

- **Base font size:** 2rem (20px)
- **Heading 1:** 6rem (60px)
- **Price:** 2.4rem (24px)
- **Tag:** 1.4rem (14px)

---

## 📏 Spacing & Sizing

| Name                | Variable                    | Value         | Usage                |
| ------------------- | --------------------------- | ------------- | -------------------- |
| Header Radius       | `--radius-header`           | 3rem          | Header corners       |
| Search Radius       | `--radius-search`           | 5rem          | Search bar           |
| Product Radius      | `--radius-product`          | 1rem          | Product cards        |
| Tag Radius          | `--radius-tag`              | 2rem          | Tag badges           |
| Link Radius         | `--radius-link`             | 6rem          | Links, buttons       |
| Thin Border         | `--border-width-thin`       | 0.2rem        | Card, product border |
| Thick Border        | `--border-width-thick`      | 0.4rem        | Search bar, header   |
| Filter Badge Pad    | `--padding-filter-badge`    | 1.6rem 3.2rem | Filter badges        |
| Tag Badge Pad       | `--padding-tag-badge`       | 0.5rem 1rem   | Tag badges           |
| Product Image Pad   | `--padding-product-image`   | 2rem          | Product images       |
| Product Details Pad | `--padding-product-details` | 2rem          | Product details      |

---

## 🧩 UI Components

### Product Card

- Rounded corners, shadow, hover border and shadow
- Image, title, price, tag badge

### Search Bar

- Rounded, border, icon on left
- Responsive width

### Filter Badges

- Outlined, rounded, hover and active states
- Gradient background for active

### Tag Badge

- Blue background, white text, pill shape

---

## 🖼️ Iconography

- [FontAwesome 6](https://fontawesome.com/) for all icons
- Example: Magnifying glass for search

---

## 📱 Responsive Breakpoints

- **Grid:** `grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));`
- **Header, search, and grid** scale for mobile, tablet, desktop
- **Max width:** 150rem for main containers

---

## ♿ Accessibility

- Sufficient color contrast
- Large clickable areas for badges and products
- Semantic HTML structure

---

## 🔗 References

- All variables defined in `src/styles/variables.css`
- Typography in `src/styles/typography.css`
- UI patterns in `src/styles/main.css` and `src/styles/reset.css`
