# 🎨 Design System - Transactions Panel

A comprehensive guide to the design system, components, and styling patterns used in the Transactions Panel project.

## 📋 Table of Contents

- [Color Palette](#color-palette)
- [Typography](#typography)
- [Spacing System](#spacing-system)
- [Component Library](#component-library)
- [Layout Patterns](#layout-patterns)
- [Animation Guidelines](#animation-guidelines)
- [Responsive Design](#responsive-design)

---

## 🎨 Color Palette

### Primary Colors

```css
--primary-color: #2563eb      /* Main brand color */
--primary-light: #3b82f6      /* Lighter variant */
--primary-dark: #1d4ed8       /* Darker variant */
```

### Secondary Colors

```css
--secondary-color: #64748b    /* Supporting color */
--secondary-light: #94a3b8    /* Light variant */
--accent-color: #f59e0b       /* Accent/highlight color */
--accent-light: #fbbf24       /* Light accent */
```

### Semantic Colors

```css
--success-color: #10b981      /* Success states */
--success-light: #34d399      /* Light success */
--error-color: #ef4444        /* Error states */
--error-light: #f87171        /* Light error */
--warning-color: #f59e0b      /* Warning states */
--warning-light: #fbbf24      /* Light warning */
```

### Neutral Colors

```css
--neutral-50: #f8fafc         /* Lightest background */
--neutral-100: #f1f5f9        /* Light background */
--neutral-200: #e2e8f0        /* Border color */
--neutral-300: #cbd5e1        /* Disabled text */
--neutral-400: #94a3b8        /* Placeholder text */
--neutral-500: #64748b        /* Secondary text */
--neutral-600: #475569        /* Primary text */
--neutral-700: #334155        /* Strong text */
--neutral-800: #1e293b        /* Headings */
--neutral-900: #0f172a        /* Darkest text */
--white: #ffffff              /* Pure white */
```

### Extended Palette

```css
--indigo-600: #6366f1         /* Extended primary */
--indigo-700: #4f46e5         /* Darker indigo */
--red-600: #dc2626            /* Extended error */
--yellow-600: #d97706         /* Extended warning */
--green-600: #059669          /* Extended success */
--sky-600: #0284c7            /* Extended accent */
```

### RGB Variants

```css
--black-rgb-8: rgba(0, 0, 0, 0.08)      /* Subtle shadows */
--black-rgb-15: rgba(0, 0, 0, 0.15)     /* Medium shadows */
--black-rgb-3: rgba(0, 0, 0, 0.03)      /* Very subtle */
--white-rgb-3: rgba(255, 255, 255, 0.3) /* White overlay */
--indigo-600-rgb-3: rgba(99, 102, 241, 0.3)  /* Primary overlay */
--indigo-600-rgb-5: rgba(99, 102, 241, 0.5)  /* Medium primary */
--indigo-600-rgb-4: rgba(99, 102, 241, 0.4)  /* Light primary */
--yellow-400-rgb-3: rgba(245, 158, 11, 0.3)  /* Warning overlay */
--green-500-rgb-3: rgba(16, 185, 129, 0.3)   /* Success overlay */
--red-500-rgb-3: rgba(239, 68, 68, 0.3)      /* Error overlay */
--green-500-rgb-1: rgba(16, 185, 129, 0.1)   /* Light success */
--green-500-rgb-2: rgba(16, 185, 129, 0.2)   /* Medium success */
--red-500-rgb-1: rgba(239, 68, 68, 0.1)      /* Light error */
--red-500-rgb-2: rgba(239, 68, 68, 0.2)      /* Medium error */
--black-rgb-2: rgba(0, 0, 0, 0.2)            /* Medium black */
--black-rgb-1: rgba(0, 0, 0, 0.1)            /* Light black */
--transparent-blue-57: #00ccff57              /* Special blue */
--dark-gray-800: #2c2c2c                      /* Dark gray */
--dark-gray-700: #4d4d4d                      /* Medium dark gray */
```

---

## 📝 Typography

### Font Family

- **Primary Font**: Vazirmatn (Persian/Farsi optimized)
- **Fallback**: System fonts

### Font Weights

```css
font-weight: 100; /* Thin */
font-weight: 200; /* Extra Light */
font-weight: 300; /* Light */
font-weight: 400; /* Regular */
font-weight: 500; /* Medium */
font-weight: 600; /* Semi Bold */
font-weight: 700; /* Bold */
font-weight: 800; /* Extra Bold */
font-weight: 900; /* Black */
```

### Font Sizes

```css
/* Base font size: 62.5% (10px) */
font-size: 1.4rem; /* 14px - Small text */
font-size: 1.5rem; /* 15px - Body text */
font-size: 1.6rem; /* 16px - Default text */
font-size: 1.8rem; /* 18px - Large text */
font-size: 2.5rem; /* 25px - Subtitle */
font-size: 3.2rem; /* 32px - Large numbers */
font-size: 4rem; /* 40px - Main title */
```

### Text Colors

```css
/* Primary text colors */
color: var(--neutral-800); /* Main text */
color: var(--neutral-700); /* Secondary text */
color: var(--neutral-600); /* Muted text */
color: var(--neutral-500); /* Placeholder */

/* Semantic text colors */
color: var(--success-color); /* Success text */
color: var(--error-color); /* Error text */
color: var(--warning-color); /* Warning text */
color: var(--primary-color); /* Link text */
```

---

## 📏 Spacing System

### Base Unit

- **Base**: 1rem = 10px (62.5% font-size)

### Spacing Scale

```css
/* Padding & Margins */
padding: 0.5rem; /* 5px */
padding: 0.8rem; /* 8px */
padding: 1rem; /* 10px */
padding: 1.2rem; /* 12px */
padding: 1.4rem; /* 14px */
padding: 1.6rem; /* 16px */
padding: 2rem; /* 20px */
padding: 2.5rem; /* 25px */
padding: 3rem; /* 30px */
padding: 3.2rem; /* 32px */
padding: 4rem; /* 40px */
```

### Component Spacing

```css
/* Button padding */
.btn {
  padding: 1.4rem 3.2rem; /* 14px vertical, 32px horizontal */
}

/* Static board padding */
.static-board {
  padding: 2.5rem; /* 25px all sides */
}

/* Table cell padding */
.table-header-item {
  padding: 2rem; /* 20px all sides */
}

/* Search input padding */
.input {
  padding: 1.6rem 2rem; /* 16px vertical, 20px horizontal */
}
```

---

## 🧩 Component Library

### Buttons

#### Primary Button

```css
.btn {
  padding: 1.4rem 3.2rem;
  border-radius: 1.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  background: linear-gradient(
    135deg,
    var(--indigo-600) 0%,
    var(--indigo-700) 100%
  );
  color: var(--white);
  border: 0.2rem solid var(--indigo-600-rgb-5);
  box-shadow: 0 4px 15px var(--indigo-600-rgb-3);
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-0.8rem);
  box-shadow: 0 8px 25px var(--indigo-600-rgb-4);
}
```

#### Button States

- **Default**: Gradient background with shadow
- **Hover**: Lift effect with enhanced shadow
- **Active**: Slight scale down
- **Disabled**: Reduced opacity

### Static Boards

#### Base Static Board

```css
.static-board {
  padding: 2.5rem;
  border-radius: 1.6rem;
  background: linear-gradient(135deg, var(--white) 0%, var(--neutral-50) 100%);
  box-shadow: 0 4px 20px var(--black-rgb-8);
  transition: all 0.3s ease;
}

.static-board:hover {
  transform: translateY(-0.8rem);
  box-shadow: 0 12px 30px var(--black-rgb-15);
}
```

#### Color Variants

```css
/* Blur/Indigo */
.static-board.blur-bg-color::before {
  background: linear-gradient(
    135deg,
    var(--indigo-600) 0%,
    var(--indigo-700) 100%
  );
}

/* Green */
.static-board.green-bg-color::before {
  background: linear-gradient(
    135deg,
    var(--success-color) 0%,
    var(--green-600) 100%
  );
}

/* Red */
.static-board.red-bg-color::before {
  background: linear-gradient(
    135deg,
    var(--error-color) 0%,
    var(--red-600) 100%
  );
}

/* Yellow */
.static-board.yello-bg-color::before {
  background: linear-gradient(
    135deg,
    var(--warning-color) 0%,
    var(--yellow-600) 100%
  );
}
```

### Badges

#### Base Badge

```css
.badge {
  padding: 0.8rem 1.6rem;
  border-radius: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  border: 0.3rem solid var(--black-rgb-2);
  position: relative;
  overflow: hidden;
}
```

#### Badge Variants

```css
/* Transaction type badges */
.type-deposit {
  background: var(--green-500-rgb-1);
  color: var(--success-color);
  border-color: var(--green-500-rgb-2);
}

.type-withdrawal {
  background: var(--red-500-rgb-1);
  color: var(--error-color);
  border-color: var(--red-500-rgb-2);
}

.type-id {
  background: linear-gradient(
    135deg,
    var(--indigo-600) 0%,
    var(--indigo-700) 100%
  );
  color: var(--white);
  letter-spacing: 0.1rem;
}
```

### Input Fields

#### Search Input

```css
.input {
  width: 100%;
  max-width: 50rem;
  font-size: 1.6rem;
  padding: 1.6rem 2rem;
  border: 2px solid var(--neutral-200);
  border-radius: 12px;
  background: var(--white);
  color: var(--neutral-700);
  outline: none;
  transition: border-color 0.3s ease;
}

.input:focus {
  border-color: var(--primary-color);
}
```

---

## 📐 Layout Patterns

### Container System

```css
.container-xl {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

### Grid System

```css
/* Static boards grid */
.transactions-panel__static {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  padding: 3rem;
}
```

### Flexbox Patterns

```css
/* Header layout */
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Table layout */
.transactions-panel__grid-table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

## ✨ Animation Guidelines

### Transition Durations

```css
/* Fast transitions */
transition: all 0.2s linear; /* 200ms */

/* Standard transitions */
transition: all 0.3s ease; /* 300ms */

/* Slow transitions */
transition: left 0.5s ease; /* 500ms */
```

### Hover Effects

```css
/* Button hover */
.btn:hover {
  transform: translateY(-0.8rem);
}

/* Static board hover */
.static-board:hover {
  transform: translateY(-0.8rem);
  box-shadow: 0 12px 30px var(--black-rgb-15);
}

/* Table row hover */
.transactions-panel__grid-table-item:hover {
  background-color: var(--neutral-100);
  transform: translateX(-0.5rem);
}
```

### Loading Animations

```css
/* Shimmer effect */
@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile */
@media screen and (max-width: 768px) {
  .header__title {
    font-size: 2.5rem;
  }
}

/* Tablet */
@media screen and (max-width: 992px) {
  .table-header-item {
    display: none;
  }

  .transactions-panel__grid-table-item {
    display: block;
    padding: 1rem 1.5rem;
  }
}
```

### Mobile Adaptations

- **Table Layout**: Converts to card layout on mobile
- **Typography**: Reduced font sizes for mobile
- **Spacing**: Adjusted padding and margins
- **Navigation**: Simplified for touch interaction

### RTL Support

```css
/* RTL specific styles */
html {
  direction: rtl;
}

/* RTL text alignment */
.table-header-item {
  text-align: right;
}

/* RTL flexbox */
.table-body-item {
  flex-direction: row-reverse;
}
```

---

## 🎯 Usage Guidelines

### Color Usage

- **Primary**: Use for main actions and branding
- **Success**: Use for positive states and confirmations
- **Error**: Use for errors and destructive actions
- **Warning**: Use for cautionary states
- **Neutral**: Use for text, borders, and backgrounds

### Typography Hierarchy

1. **Main Title**: 4rem, Bold
2. **Subtitle**: 1.8rem, Medium
3. **Body Text**: 1.6rem, Regular
4. **Small Text**: 1.4rem, Regular
5. **Numbers**: 3.2rem, Bold

### Component Spacing

- **Small components**: 1rem spacing
- **Medium components**: 2rem spacing
- **Large components**: 3rem spacing
- **Sections**: 4rem spacing

### Animation Principles

- **Fast**: 200ms for micro-interactions
- **Standard**: 300ms for hover effects
- **Slow**: 500ms for complex animations
- **Easing**: Use `ease` for natural movement

---

## 📚 Resources

- [Vazirmatn Font](https://github.com/rastikerdar/vazirmatn)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
