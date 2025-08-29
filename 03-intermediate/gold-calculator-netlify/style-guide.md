# Style Guide - Gold Calculator

## Overview

This style guide ensures consistent code quality and maintainability for the Gold Calculator project, a Persian/Farsi web application with RTL support and dark/light mode functionality.

## HTML Guidelines

### Document Structure

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ماشین حساب طلا</title>
    <link rel="stylesheet" href="./build/tailwind.css" />
  </head>
</html>
```

### Semantic HTML

- Use semantic elements: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use proper heading hierarchy: `<h1>` through `<h6>`
- Use `<form>` for user input, `<button>` for actions
- Maintain RTL structure with `dir="rtl"` and `lang="fa"`

### Accessibility

```html
<button aria-label="تغییر حالت تاریک/روشن" class="theme-toggle">
  <svg aria-hidden="true"><!-- Icon --></svg>
</button>

<label for="gold-weight" class="form-label">وزن طلا (گرم)</label>
<input id="gold-weight" type="number" class="form-input" />

<div class="help-text" id="weight-help">وزن طلا را به گرم وارد کنید</div>
```

## CSS Guidelines

### Tailwind CSS Usage

- Use Tailwind utility classes as primary styling method
- Combine utilities logically and consistently
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

### Dark Mode Implementation

```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">عنوان</h3>
  <p class="text-gray-600 dark:text-gray-400">متن توضیحات</p>
</div>
```

### Color Palette

- **Gold/Yellow**: `text-yellow-500`, `bg-yellow-500` (gold-related elements)
- **Blue**: `text-blue-500`, `bg-blue-500` (primary actions)
- **Gray**: `text-gray-500`, `bg-gray-500` (neutral elements)
- **Success**: `text-green-500`, **Error**: `text-red-500`
- **Zinc**: `text-zinc-500`, `bg-zinc-500` (dark mode backgrounds)

### Typography

- Use YekanBakh font for Persian text (configured in `tailwind.config.js`)
- Use Tailwind's scale: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`
- Maintain consistent hierarchy and spacing

### Spacing and Layout

```html
<!-- Use consistent spacing -->
<div class="p-4 md:p-6 lg:p-8">
  <div class="space-y-4">
    <h2 class="mb-4">عنوان</h2>
    <p class="mb-2">متن اول</p>
    <p class="mb-2">متن دوم</p>
  </div>
</div>

<!-- Use responsive grid layouts -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Grid items -->
</div>
```

## JavaScript Guidelines

### Code Style

```javascript
// Use ES6+ features
const calculatePrice = (weight, price) => {
  return weight * price;
};

const { goldPrice, weight } = formData;
const [first, second] = array;

// Use camelCase for variables and functions
const goldPricePerGram = 2500000;
const calculateTotalPrice = () => {
  /* ... */
};
const GOLD_PURITY_LEVELS = ["18k", "21k", "24k"];
```

### Function Structure

```javascript
const calculateGoldPrice = (weight, purity, basePrice) => {
  // Input validation
  if (!weight || !purity || !basePrice) {
    throw new Error("تمام پارامترها الزامی هستند");
  }

  // Calculation logic
  const purityMultiplier = getPurityMultiplier(purity);
  const totalPrice = weight * basePrice * purityMultiplier;

  // Return result
  return {
    weight,
    purity,
    basePrice,
    totalPrice,
    formattedPrice: formatCurrency(totalPrice),
  };
};
```

### Error Handling

```javascript
const updatePriceDisplay = (price) => {
  try {
    const formattedPrice = formatCurrency(price);
    document.querySelector(".price-display").textContent = formattedPrice;
  } catch (error) {
    console.error("خطا در نمایش قیمت:", error);
    showErrorMessage("خطا در محاسبه قیمت");
  }
};
```

### Event Handling

```javascript
// Use event delegation when possible
document.addEventListener("click", (event) => {
  if (event.target.matches(".theme-toggle")) {
    toggleTheme();
  }
});

// Use proper event handling for forms
const form = document.querySelector(".price-form");
form.addEventListener("submit", handleFormSubmit);

// Avoid inline event handlers
// ❌ <button onclick="calculatePrice()">محاسبه</button>
```

### DOM Manipulation

```javascript
// Use efficient selectors
const priceDisplay = document.querySelector(".totalprice");
const goldPriceElement = document.querySelector(".goldprice");

// Batch DOM updates
const updateUI = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach((item) => {
    const element = createElement(item);
    fragment.appendChild(element);
  });

  container.appendChild(fragment);
};
```

## Naming Conventions

### CSS Classes

```css
/* Use BEM methodology for custom classes */
.price-calculator {
}
.price-calculator__input {
}
.price-calculator__button {
}
.price-calculator__button--primary {
}

/* Use descriptive class names */
.gold-container {
}
.dashboard-header {
}
.calculator-section {
}
```

### JavaScript Variables

```javascript
// Good - descriptive names
const goldPricePerGram = 2500000;
const userInputWeight = parseFloat(weightInput.value);
const calculatedTotal = calculateTotalPrice(userInputWeight, goldPricePerGram);
const totalPriceElement = document.querySelector(".totalprice");

// Avoid - unclear names
const price = 2500000;
const weight = parseFloat(weightInput.value);
const total = calc(weight, price);
const el = document.querySelector(".totalprice");
```

### File Names

```
✅ Good:
- main.js
- price-calculator.js
- theme-manager.js
- piechart.js
- utils.js

❌ Avoid:
- calc.js
- tm.js
- chart.js
- u.js
```

## File Organization

### Directory Structure

```
src/
├── js/
│   ├── main.js              # Main application logic
│   ├── piechart.js          # Chart functionality (ApexCharts)
│   └── utils.js            # Utility functions (if needed)
├── css/
│   ├── tailwind.css        # Tailwind directives
│   ├── fonts.css           # Custom Persian fonts
│   └── components.css      # Custom component styles (if needed)
└── assets/
    └── images/             # Project images
```

### Code Organization

```javascript
// 1. Imports
import { formatCurrency } from "./utils.js";

// 2. Constants
const GOLD_PURITY_LEVELS = ["18k", "21k", "24k"];
const DEFAULT_GOLD_PRICE = 2500000;

// 3. Utility functions
const formatNumber = (number) => {
  return new Intl.NumberFormat("fa-IR").format(number);
};

// 4. Main functions
const calculatePrice = (weight, purity) => {
  // Implementation
};

// 5. Event handlers
const handleFormSubmit = (event) => {
  // Implementation
};

// 6. Initialization
const init = () => {
  // Setup code
};

// 7. Export
export { calculatePrice, handleFormSubmit };
```

## Accessibility Standards

### ARIA Labels and Roles

```html
<button aria-label="تغییر حالت تاریک/روشن" class="theme-toggle">
  <svg aria-hidden="true"><!-- Icon --></svg>
</button>

<input
  type="number"
  id="gold-weight"
  aria-describedby="weight-help"
  aria-required="true"
  class="form-input"
/>
<div id="weight-help" class="help-text">وزن طلا را به گرم وارد کنید</div>

<!-- Use proper roles -->
<main role="main">
  <section role="region" aria-label="محاسبه قیمت طلا">
    <!-- Content -->
  </section>
</main>
```

### Focus Management

```css
/* Ensure focus indicators are visible */
.focus-visible:focus {
  @apply outline-none ring-2 ring-blue-500 ring-offset-2;
}

/* Custom focus styles for buttons */
button:focus {
  @apply outline-none ring-2 ring-yellow-500 ring-offset-2;
}
```

### Keyboard Navigation

```javascript
// Ensure all interactive elements are keyboard accessible
const makeAccessible = () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        button.click();
      }
    });
  });
};
```

## Performance Guidelines

### CSS Performance

- Use Tailwind's purge feature to remove unused CSS
- Minimize custom CSS
- Use efficient selectors
- Optimize for critical rendering path

### JavaScript Performance

```javascript
// Use event delegation
document.addEventListener("click", (event) => {
  if (event.target.matches(".price-button")) {
    calculatePrice();
  }
});

// Debounce expensive operations
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const debouncedCalculate = debounce(calculatePrice, 300);

// Use efficient DOM queries
const elements = {
  totalPrice: document.querySelector(".totalprice"),
  goldPrice: document.querySelector(".goldprice"),
  form: document.querySelector(".price-form"),
};
```

### Image Optimization

- Use appropriate image formats (WebP, SVG for icons)
- Optimize image sizes
- Use lazy loading for non-critical images
- Provide alt text for all images

## RTL Support

### Layout Considerations

```css
/* Use logical properties for RTL support */
.element {
    margin-inline-start: 1rem;
    padding-inline-end: 1rem;
    border-inline-start: 2px solid;
}

/* Or use Tailwind's logical utilities */
<div class="ms-4 pe-4 border-s-2 border-gray-300">
    <!-- Content -->
</div>
```

### Text Direction

```html
<!-- Use appropriate text direction classes -->
<div class="text-right">متن فارسی</div>
<div class="text-left" dir="ltr">English text</div>
```

### Number Formatting

```javascript
// Use Persian number formatting
const formatPersianNumber = (number) => {
  return new Intl.NumberFormat("fa-IR").format(number);
};

// Use Persian currency formatting
const formatPersianCurrency = (amount) => {
  return new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "IRR",
  }).format(amount);
};

// Format large numbers with Persian separators
const formatLargeNumber = (number) => {
  return new Intl.NumberFormat("fa-IR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};
```

## Chart Guidelines (ApexCharts)

### Chart Configuration

```javascript
// Use consistent chart styling
const chartOptions = {
  chart: {
    type: "pie",
    fontFamily: "yekanback",
    direction: "rtl",
  },
  colors: ["#f59e0b", "#3b82f6", "#10b981", "#ef4444"],
  labels: ["طلا", "کارمزد", "مالیات", "سایر"],
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 300,
        },
      },
    },
  ],
};
```

### Dark Mode Support

```javascript
const getChartTheme = () => {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const chartOptions = {
  theme: {
    mode: getChartTheme(),
  },
  colors:
    getChartTheme() === "dark"
      ? ["#fbbf24", "#60a5fa", "#34d399", "#f87171"]
      : ["#f59e0b", "#3b82f6", "#10b981", "#ef4444"],
};
```

## Testing Guidelines

### Manual Testing Checklist

- Price calculations accuracy
- Dark/light mode toggle functionality
- Responsive design on all breakpoints (sm, md, lg, xl, 2xl)
- RTL layout correctness
- Chart functionality and responsiveness
- Form validation and error handling
- Accessibility features (keyboard navigation, screen readers)
- Persian number formatting
- Cross-browser compatibility

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Best Practices Summary

1. **Consistency**: Follow established patterns throughout the codebase
2. **Readability**: Write code that's easy to understand and maintain
3. **Performance**: Optimize for speed and efficiency
4. **Accessibility**: Ensure the app is usable by everyone
5. **RTL Support**: Maintain proper Persian language support
6. **Testing**: Test thoroughly across different devices and browsers
7. **Documentation**: Keep documentation up to date
8. **Version Control**: Use meaningful commit messages and proper branching

### Code Review Checklist

- Follows naming conventions
- Includes proper error handling
- Maintains accessibility standards
- Supports RTL layout
- Includes dark mode support
- Uses efficient DOM manipulation
- Follows performance guidelines
- Includes appropriate comments

Remember: Create a maintainable, accessible, and performant application that provides an excellent user experience for Persian-speaking users while maintaining high code quality standards.
