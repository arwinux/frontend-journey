# Frontend Mentor - Product Preview Card Solution

![Project Preview](./preview.jpg)

---

## Project Links & Badges

[![Live Demo](https://img.shields.io/badge/Live-Demo-cc3333?style=for-the-badge)](https://01-newbie-product-preview-card.netlify.app/)  
[![Code Repository](https://img.shields.io/badge/Code-Repository-d46b2a?style=for-the-badge)](https://github.com/arwinux/frontend-journey/tree/main/01-newbie/product-preview-card)  
[![Challenge](https://img.shields.io/badge/Challenge-Frontendmentor-c7b000?style=for-the-badge&logoColor=white)](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa)  
[![License: MIT](https://img.shields.io/badge/License-MIT-11bb33?style=for-the-badge)](https://opensource.org/licenses/MIT)  
[![Author: Arvin Jafari](https://img.shields.io/badge/Author-Arvin%20Jafari-3366cc?style=for-the-badge)](https://github.com/arwinux)  
[![Hosted On: Netlify](https://img.shields.io/badge/Hosted-Netlify-9933cc?style=for-the-badge)](https://www.netlify.com)  
[![Stack: HTML · CSS](https://img.shields.io/badge/Stack-HTML%20·%20CSS-cccccc?style=for-the-badge)](#)

---

## Overview

A responsive product preview card built with semantic HTML and modular CSS. The layout adapts from a stacked mobile view to a horizontal desktop layout while displaying product details, pricing, and an add-to-cart action.

### The challenge

Users should be able to:

- View a perfume product card with image, category, title, description, and pricing
- See a stacked mobile layout with the product image above the content
- Switch to a side-by-side layout on desktop screens
- Compare the discounted price against the original strikethrough price
- Hover over the add-to-cart button for visual feedback
- View the card centered on the page across screen sizes

### Links

- Solution URL: [GitHub Repository](https://github.com/arwinux/frontend-journey/tree/main/01-newbie/product-preview-card)
- Live Site URL: [Live Demo](https://01-newbie-product-preview-card.netlify.app/)

## My process

### Built with

- Semantic HTML5
- CSS Custom Properties
- Flexbox
- BEM
- Mobile-first workflow
- Responsive Design
- Local `@font-face` fonts (Montserrat, Fraunces)
- CSS transitions

### Project Structure

```text
product-preview-card/

├── assets/
│   ├── fonts/
│   │   ├── Fraunces.ttf
│   │   ├── Montserrat-Bold.ttf
│   │   └── Montserrat-Medium.ttf
│   └── images/
│       ├── favicon-32x32.png
│       ├── icon-cart.svg
│       ├── image-product-desktop.jpg
│       └── image-product-mobile.jpg
├── design/
│   ├── active-states.jpg
│   ├── desktop-design.jpg
│   ├── desktop-preview.jpg
│   └── mobile-design.jpg
├── src/
│   └── css/
│       ├── main.css
│       ├── reset.css
│       ├── typography.css
│       └── variable.css
├── index.html
├── preview.jpg
├── README.md
└── style-guide.md
```

### Continued development

- Add keyboard focus states for the add-to-cart button
- Improve accessibility with clearer alt text and ARIA labels
- Refactor CSS with shared spacing tokens
- Optimize font loading and asset delivery
- Fine-tune typography and spacing against the design mockups
- Add subtle button press or loading feedback

### Useful resources

- [Using CSS custom properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Reference for managing colors and typography with CSS variables.
- [A Complete Guide to Flexbox (CSS-Tricks)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Visual guide for building the card and centering layout.
- [CSS media queries (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) - Documentation for switching between mobile and desktop layouts.
- [Product preview card component (Frontend Mentor)](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa) - Original challenge brief and design references.
- [Learn Responsive Design (Kevin Powell)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeAjme4sQJTfX8nKFuXgC) - Practical videos on mobile-first responsive workflows.

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/arwinux
- GitHub - https://github.com/arwinux

## Acknowledgments

Thanks to Frontend Mentor for the challenge and design assets. Appreciation also goes to the open-source community for the documentation and learning resources that shaped this build.
