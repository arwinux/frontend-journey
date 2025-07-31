# Style Guide - Digitize Store

## 🎨 Design System

### Brand Identity

**Primary Colors**

- **Orange**: `#f97316` (orange-500) - Primary brand color
- **Slate**: `#1e293b` (slate-800) - Text and dark elements
- **Gray**: `#f1f5f9` (gray-100) - Background color

**Secondary Colors**

- **Orange Light**: `#fed7aa` (orange-200) - Hover states
- **Orange Dark**: `#ea580c` (orange-600) - Active states
- **Gray Light**: `#e2e8f0` (gray-200) - Borders and dividers
- **Gray Medium**: `#94a3b8` (gray-400) - Secondary text

### Typography

**Font Family**

```css
font-family: "iranyekan", sans-serif;
```

**Font Sizes**

- **Large**: `text-lg` (18px) - Headings and important text
- **Base**: `text-base` (16px) - Body text
- **Small**: `text-sm` (14px) - Secondary text
- **Extra Small**: `text-xs` (12px) - Captions and labels

**Font Weights**

- **Bold**: `font-bold` (700) - Headings and emphasis
- **Medium**: `font-medium` (500) - Important text
- **Normal**: `font-normal` (400) - Body text
- **Light**: `font-light` (300) - Secondary text

### Spacing System

**Padding & Margins**

- **Extra Small**: `p-1`, `m-1` (4px)
- **Small**: `p-2`, `m-2` (8px)
- **Medium**: `p-3`, `m-3` (12px)
- **Large**: `p-4`, `m-4` (16px)
- **Extra Large**: `p-5`, `m-5` (20px)
- **2XL**: `p-6`, `m-6` (24px)
- **3XL**: `p-8`, `m-8` (32px)

**Gaps**

- **Small**: `gap-1` (4px)
- **Medium**: `gap-2` (8px)
- **Large**: `gap-4` (16px)
- **Extra Large**: `gap-6` (24px)
- **2XL**: `gap-8` (32px)

## 🏗️ Component Patterns

### Buttons

**Primary Button**

```html
<button
  class="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
>
  دکمه اصلی
</button>
```

**Secondary Button**

```html
<button
  class="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50 transition-colors"
>
  دکمه ثانویه
</button>
```

**Small Button**

```html
<button class="bg-orange-500 text-white px-2 py-1 rounded text-sm">
  دکمه کوچک
</button>
```

### Cards

**Product Card**

```html
<div class="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4">
  <div class="bg-slate-400 p-4 rounded-lg">
    <img
      src="product-image.png"
      alt="Product"
      class="w-full h-auto rounded-lg"
    />
  </div>
  <div class="flex justify-between items-center">
    <span class="text-sm text-gray-400">برند</span>
    <!-- Color selector -->
  </div>
  <p class="text-sm text-slate-900">نام محصول</p>
  <p class="text-sm font-medium text-orange-700">قیمت</p>
  <button class="text-sm text-orange-500 border-t border-gray-300 pt-2">
    مشاهده و سفارش
  </button>
</div>
```

**Cart Item Card**

```html
<div
  class="bg-white rounded-lg p-3 flex items-stretch shadow-lg justify-between"
>
  <div class="w-16 md:w-24 h-auto">
    <img src="product.png" alt="" class="w-full h-auto" />
  </div>
  <div class="flex flex-col justify-between text-xs md:text-xl flex-1">
    <span class="font-bold text-slate-800">نام محصول</span>
    <span class="text-orange-600 font-medium">قیمت</span>
  </div>
  <div class="flex flex-col justify-between items-end">
    <!-- Quantity controls -->
  </div>
</div>
```

### Navigation

**Desktop Navigation**

```html
<nav class="bg-white hidden md:block p-4 shadow-lg sticky z-10 top-0">
  <div
    class="container mx-auto max-w-screen-2xl flex justify-between items-center"
  >
    <!-- Logo and menu items -->
  </div>
</nav>
```

**Mobile App Bar**

```html
<div class="flex md:hidden items-center justify-between mt-10 px-4 mb-6">
  <div
    class="bg-white size-9 text-slate-800 shadow-lg flex justify-center items-center rounded"
  >
    <!-- Icon -->
  </div>
  <div class="text-lg font-bold text-slate-800">عنوان صفحه</div>
  <div
    class="bg-white size-9 text-slate-800 shadow-lg flex justify-center items-center rounded"
  >
    <!-- Icon -->
  </div>
</div>
```

**Bottom Navigation (Mobile)**

```html
<div
  class="md:hidden shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)] bg-white border border-t-2 fixed bottom-0 left-0 right-0 w-full rounded-tr-md rounded-tl-md px-2"
>
  <nav class="w-full">
    <ul class="flex w-full gap-x-2 justify-between items-center">
      <!-- Navigation items -->
    </ul>
  </nav>
</div>
```

### Forms

**Search Input**

```html
<div class="bg-stone-100 p-1 rounded-md flex items-center">
  <span class="ml-3 mr-1">
    <!-- Search icon -->
  </span>
  <input
    type="text"
    placeholder="نام محصول، برند، یا رنگ..."
    class="bg-transparent focus:outline-none border-none w-full p-2 text-slate-800"
  />
</div>
```

**Discount Code Input**

```html
<div
  class="flex items-stretch justify-between rounded-xl overflow-hidden bg-gray-200"
>
  <input
    type="text"
    dir="ltr"
    class="border-0 w-full max-w-[150px] bg-transparent p-2 text-gray-700 outline-none focus:outline-none"
    placeholder="AS-DSE"
  />
  <button class="border-0 bg-orange-500 px-4 text-white outline-none">
    تایید
  </button>
</div>
```

### Icons

**Icon Sizes**

- **Small**: `size-4` (16px)
- **Medium**: `size-5` (20px)
- **Large**: `size-6` (24px)
- **Extra Large**: `size-7` (28px)

**Icon Colors**

- **Primary**: `text-orange-500`
- **Secondary**: `text-slate-800`
- **Muted**: `text-gray-400`
- **White**: `text-white`

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
/* Default: 320px+ */

/* Tablet */
@media (min-width: 768px) {
  /* md: classes */
}

/* Desktop */
@media (min-width: 1024px) {
  /* lg: classes */
}

/* Large Desktop */
@media (min-width: 1280px) {
  /* xl: classes */
}

/* 2XL */
@media (min-width: 1536px) {
  /* 2xl: classes */
}
```

### Responsive Patterns

**Hidden/Visible Elements**

```html
<!-- Hidden on mobile, visible on desktop -->
<div class="hidden md:block">Desktop Only</div>

<!-- Visible on mobile, hidden on desktop -->
<div class="md:hidden">Mobile Only</div>
```

**Responsive Text Sizes**

```html
<p class="text-xs md:text-base lg:text-lg">Responsive Text</p>
```

**Responsive Spacing**

```html
<div class="p-2 md:p-4 lg:p-6">Responsive Padding</div>
```

**Responsive Grid**

```html
<div class="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
  <!-- Grid items -->
</div>
```

## 🌐 RTL (Right-to-Left) Support

### Direction Declaration

```html
<html lang="fa" dir="rtl"></html>
```

### Text Alignment

- **Right**: `text-right` (default for RTL)
- **Left**: `text-left` (for specific cases)
- **Center**: `text-center`

### Margins and Padding

- **Right Margin**: `mr-4` (margin-right in RTL)
- **Left Margin**: `ml-4` (margin-left in RTL)
- **Right Padding**: `pr-4` (padding-right in RTL)
- **Left Padding**: `pl-4` (padding-left in RTL)

### Flexbox Direction

```html
<!-- Row with RTL order -->
<div class="flex flex-row-reverse">
  <!-- Items will be ordered right-to-left -->
</div>
```

## 🎯 Interactive States

### Hover States

```html
<button class="bg-orange-500 hover:bg-orange-600 transition-colors">
  Hover Effect
</button>
```

### Focus States

```html
<input
  class="focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
/>
```

### Active States

```html
<button class="bg-orange-500 active:bg-orange-700">Active State</button>
```

### Disabled States

```html
<button class="bg-gray-300 text-gray-500 cursor-not-allowed" disabled>
  Disabled Button
</button>
```

## 📐 Layout Patterns

### Container

```html
<div class="container mx-auto max-w-screen-2xl">
  <!-- Content -->
</div>
```

### Grid Layout

```html
<div class="grid grid-cols-12 gap-8">
  <div class="col-span-4 lg:col-span-3 xl:col-span-2">
    <!-- Sidebar -->
  </div>
  <div class="col-span-8 lg:col-span-9 xl:col-span-10">
    <!-- Main content -->
  </div>
</div>
```

### Flexbox Layout

```html
<div class="flex items-center justify-between">
  <!-- Flex items -->
</div>
```

### Sticky Positioning

```html
<div class="sticky top-28">
  <!-- Sticky element -->
</div>
```

## 🎨 Animation & Transitions

### Transitions

```html
<!-- Color transition -->
<div class="transition-colors duration-200">
  <!-- Content -->
</div>

<!-- Transform transition -->
<div class="transition-transform duration-300">
  <!-- Content -->
</div>
```

### Alpine.js Animations

```html
<!-- Show/hide with transition -->
<div
  x-show="isVisible"
  x-transition:enter="transition ease-out duration-300"
  x-transition:enter-start="opacity-0 transform scale-95"
  x-transition:enter-end="opacity-100 transform scale-100"
>
  <!-- Content -->
</div>
```

## 🔧 Utility Classes

### Common Combinations

**Card with Shadow**

```html
<div class="bg-white shadow-lg rounded-lg p-4"></div>
```

**Button with Icon**

```html
<button
  class="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md"
>
  <svg class="size-5" <!-- icon --></svg>
  <span>Button Text</span>
</button>
```

**Input with Icon**

```html
<div class="relative">
  <input class="pl-10 pr-4 py-2 border border-gray-300 rounded-md" />
  <svg
    class="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400"
  >
    <!-- icon -->
  </svg>
</div>
```

## 📋 Code Standards

### HTML Structure

- Use semantic HTML5 elements
- Include proper accessibility attributes
- Maintain consistent indentation (2 spaces)
- Use descriptive class names

### CSS Classes

- Use Tailwind utility classes primarily
- Group related classes logically
- Use responsive prefixes consistently
- Avoid custom CSS unless necessary

### JavaScript (Alpine.js)

- Use descriptive variable names
- Keep component logic simple
- Use proper event handling
- Maintain consistent naming conventions

## 🎨 Color Palette Reference

### Primary Colors

- `orange-500`: #f97316 (Primary brand)
- `orange-600`: #ea580c (Hover states)
- `orange-700`: #c2410c (Active states)
- `orange-200`: #fed7aa (Light backgrounds)

### Neutral Colors

- `slate-800`: #1e293b (Primary text)
- `slate-700`: #334155 (Secondary text)
- `gray-100`: #f1f5f9 (Background)
- `gray-200`: #e2e8f0 (Borders)
- `gray-400`: #94a3b8 (Muted text)

### Status Colors

- `green-500`: #22c55e (Success)
- `red-500`: #ef4444 (Error)
- `yellow-500`: #eab308 (Warning)
- `blue-500`: #3b82f6 (Info)

---

**Note**: This style guide should be updated as the design system evolves. All team members should follow these guidelines to maintain consistency across the project.
