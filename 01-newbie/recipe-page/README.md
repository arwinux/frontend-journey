# Frontend Mentor - Recipe Page Solution

![Recipe page preview](./preview.jpg)

## Overview

### The challenge

Users should be able to:

- View the recipe page component in a centered, responsive layout
- See clear typography and spacing inspired by the design mockups
- Experience a clean, accessible page with mobile and desktop support
- Interact with the recipe card and navigation elements with smooth hover states

### Links

- Solution URL: [GitHub Repository](https://github.com/arwinux/frontend-journey/tree/main/01-newbie/recipe-page)
- Live Site URL: [Live Demo](https://01-newbie-recipe-page.netlify.app/)

## My process

### Built with

- **Semantic HTML5 markup** - Used clean structure with appropriate sectioning elements
- **CSS custom properties** - Implemented variables for consistent theming
- **Responsive layout** - Built mobile-first and scaled up for larger screens
- **Flexbox** - Used for centering, layout, and spacing control
- **Modern CSS architecture** - Split styles into base, typography, and component files
- **Local font files** - Integrated custom fonts from the included assets
- **CSS transitions** - Added smooth hover and focus interactions

### Project Structure

```
recipe-page/
├── design/                    # Design reference files
│   ├── desktop-design.jpg
│   └── mobile-design.jpg
├── assets/                    # Project assets and global styles
│   ├── fonts/
│   │   ├── outfit/
│   │   └── young-serif/
│   ├── images/                # Images and icons used in the page
│   └── styles/
│       ├── main.css           # Main recipe page styles
│       ├── reset.css          # CSS reset and normalization
│       ├── typography.css     # Text styles and presets
│       └── variables.css      # CSS variables and font declarations
├── .gitignore
├── index.html                 # Main HTML file
├── preview.jpg                # Project preview image
├── README.md                  # Project documentation
├── README-template.md        # Starter README template
└── style-guide.md             # Color palette and typography guide
```

### What I learned

This project reinforced important frontend development concepts:

**CSS Architecture**: I split the styles into specific concerns:

- `reset.css` for browser defaults
- `variables.css` for theme values and fonts
- `typography.css` for reusable text styling
- `main.css` for layout and component rules

**Responsive layout**: Built the page with a mobile-first workflow and used media queries to adapt the design for wider screens.

**Interactive styling**: Added hover states and transitions to improve the UI feel while keeping the page lightweight.

**Asset organization**: Kept fonts, images, and styles in separate folders for clearer structure and easier maintenance.

### Continued development

Areas I want to focus on in future projects:

- **CSS Grid** - Explore more complex responsive layouts
- **Advanced animations** - Add subtle motion and transitions
- **Accessibility improvements** - Improve focus states and semantic markup
- **Performance optimization** - Optimize assets and font loading
- **Dark mode support** - Add a theme toggle for night mode

### Useful resources

- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Helped with theming and variables
- [Flexbox Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Useful reference for layout patterns
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) - Reference for hover and animation timing
- [Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/) - Inspiration for reset and base styles

## Author

- Frontend Mentor - [@arwinux](https://www.frontendmentor.io/profile/arwinux)
- GitHub - [@arwinux](https://github.com/arwinux)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and to the community for inspiration. The project layout and style structure were influenced by modern frontend best practices and the goal of building a clean, responsive recipe page.
