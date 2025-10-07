# Frontend Mentor - Social Links Profile Solution

![Social Links Profile](./preview.jpg)

## Project Links & Badges

<div style="text-align:left;">

[![Live Demo](https://img.shields.io/badge/Live-Demo-cc3333?style=for-the-badge)](https://01-newbie-social-links-profile.netlify.app/)  
[![Code Repository](https://img.shields.io/badge/Code-Repository-d46b2a?style=for-the-badge)](https://github.com/arwinux/frontend-journey/tree/main/01-newbie/social-links-profile)  
[![Challenge](https://img.shields.io/badge/Challenge-Frontendmentor-c7b000?style=for-the-badge&logoColor=white)](https://www.frontendmentor.io/solutions/social-links-profile-solution-s8_wDg1zTY)  
[![License: MIT](https://img.shields.io/badge/License-MIT-11bb33?style=for-the-badge)](https://opensource.org/licenses/MIT)  
[![Author: Arvin Jafary](https://img.shields.io/badge/Author-Arvin%20Jafary-3366cc?style=for-the-badge)](https://github.com/arwinux)  
[![Hosted On: Netlify](https://img.shields.io/badge/Hosted-Netlify-9933cc?style=for-the-badge)](https://www.netlify.com)  
[![Stack: HTML · CSS](https://img.shields.io/badge/Stack-HTML%20·%20CSS-cccccc?style=for-the-badge)](#)

</div>

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-gQ7lSd6VhG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Social Links Profile Solution](#frontend-mentor---social-links-profile-solution)
  - [Project Links \& Badges](#project-links--badges)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Project Structure](#project-structure)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the social links profile card component in a centered, responsive layout
- See hover states for interactive elements with smooth transitions
- Experience a clean, accessible design that works across devices
- Interact with the profile card to see enhanced hover effects on social links
- Navigate through social links with keyboard accessibility

### Links

- Solution URL: [GitHub Repository](https://github.com/arwinux/frontend-journey/tree/main/01-newbie/social-links-profile)
- Live Site URL: [Live Demo](https://01-newbie-social-links-profile.netlify.app/)

## My process

### Built with

- **Semantic HTML5 markup** - Used proper semantic elements like `<main>`, `<article>`, and `<img>`
- **CSS custom properties** - Implemented CSS variables for consistent theming
- **BEM methodology** - Block Element Modifier methodology for scalable CSS
- **Flexbox** - Used for centering and layout structure
- **Mobile-first workflow** - Designed with responsive principles in mind
- **Modern CSS architecture** - Organized stylesheets with imports and modular structure
- **Custom fonts** - Integrated Inter font family with proper font-face declarations
- **CSS transitions** - Smooth hover effects and interactive states

### Project Structure

```
social-links-profile/
├── design/                    # Design reference files
│   ├── active-states.jpg
│   ├── desktop-design.jpg
│   └── mobile-design.jpg
├── src/                       # Source code
│   ├── assets/                # All project assets
│   │   ├── fonts/
│   │   │   ├── static/
│   │   │   │   ├── Inter-Bold.ttf
│   │   │   │   ├── Inter-Regular.ttf
│   │   │   │   └── Inter-SemiBold.ttf
│   │   │   ├── Inter-VariableFont_slnt,wght.ttf
│   │   │   ├── OFL.txt
│   │   │   └── README.txt
│   │   └── images/            # Images and icons
│   │       ├── avatar-jessica.jpeg
│   │       └── favicon-32x32.png
│   └── styles/                # CSS architecture
│       ├── main.css           # Main component styles
│       ├── reset.css          # CSS reset
│       ├── typography.css     # Text styling presets
│       └── variables.css      # Design tokens & fonts
├── .gitignore
├── index.html                 # Main HTML file
├── preview.jpg                # Project preview
├── README.md
├── DEVELOPMENT.md             # Development notes
└── style-guide.md             # Design system guide
```

### What I learned

This project reinforced several important concepts:

**CSS Architecture**: I implemented a modular CSS structure separating concerns into different files:

- `reset.css` for normalizing browser defaults
- `variables.css` for design tokens and font declarations
- `typography.css` for text styling presets
- `main.css` for component-specific styles

The project also includes design reference files in the `design/` folder and follows Frontend Mentor's recommended structure with organized assets and clear separation of concerns.

**CSS Custom Properties**: Used CSS variables for maintainable design tokens:

```css
:root {
  --white: #ffffff;
  --color-green: #c5f82a;
  --color-grey-700: #333333;
  --color-grey-800: #1f1f1f;
  --color-grey-900: #141414;
}
```

**Typography System**: Created a comprehensive font system with multiple weights:

```css
.profile-card__name {
  font-size: 2.4rem;
  font-family: inter-semibold;
}

.profile-card__location {
  color: var(--color-green);
  font-family: inter-bold;
}
```

**Interactive States**: Implemented smooth hover effects with CSS transitions:

```css
.profile-card__link:hover {
  background-color: var(--color-green);
  color: var(--color-grey-800);
  font-family: inter-bold;
  transition: all 300ms linear;
}
```

**Flexbox Centering**: Implemented perfect centering using modern CSS:

```css
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2.4rem;
}
```

**BEM Methodology**: Applied consistent naming convention for scalable CSS:

```css
.profile-card {
} /* Block */
.profile-card__detail {
} /* Element */
.profile-card__link:hover {
} /* Modifier */
```

**Responsive Design**: Created a mobile-first approach with proper spacing and layout:

```css
.profile-card {
  max-width: 37rem;
  width: 100%;
  background-color: var(--color-grey-800);
  border-radius: 1rem;
  padding: 4rem;
  gap: 2rem;
}
```

### Continued development

Areas I want to focus on in future projects:

- **CSS Grid** - Explore more complex layouts using CSS Grid
- **Advanced animations** - Add subtle micro-interactions and keyframe animations
- **Accessibility improvements** - Implement better focus states and ARIA labels
- **Performance optimization** - Optimize font loading and implement critical CSS
- **CSS Container queries** - Use for more responsive component-based design
- **Dark mode support** - Implement theme switching functionality
- **JavaScript integration** - Add dynamic content loading and interactive features

### Useful resources

- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Helped me understand CSS variables implementation
- [Flexbox Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Excellent resource for flexbox layouts
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) - Great documentation for implementing smooth hover effects
- [Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/) - Inspiration for the reset.css approach
- [BEM Methodology](https://getbem.com/) - Comprehensive guide for CSS naming conventions
- [Inter Font Family](https://fonts.google.com/specimen/Inter) - Typography system documentation

## Author

- Frontend Mentor - [@arwinux](https://www.frontendmentor.io/profile/arwinux)
- GitHub - [@arwinux](https://github.com/arwinux)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and to the community for feedback and inspiration. The structured approach to CSS architecture was influenced by modern CSS methodologies and best practices from the web development community. The interactive hover effects were inspired by modern UI design principles and accessibility guidelines. Special thanks to the Inter font team for providing such a versatile and readable typeface that works beautifully across different screen sizes and contexts.
