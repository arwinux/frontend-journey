# Quantum Inventory – Development Notes & Challenges

## Project Overview

Quantum Inventory is a modern, responsive inventory management web app. It leverages a modular HTML/CSS/JS architecture, a custom design system, and a focus on usability and maintainability.

---

## Architecture

- **HTML**: Semantic, componentized via includes (see `src/components/`).
- **CSS**: Modular, layered (reset, variables, layout, components, utilities, media queries).
- **JS**: (See `src/scripts/`) Handles UI logic, DOM manipulation, and dynamic updates.
- **Design System**: Centralized in `src/styles/variables.css` and `components.css`.

### File Structure

- `index.html`: Main entry point, references all major UI blocks.
- `src/components/`: Reusable HTML snippets (buttons, inputs, logo, etc.).
- `src/styles/`: Layered CSS (see Style Guide).
- `src/scripts/`: App logic and interactivity.

---

## Development Notes

- **Responsiveness**: Achieved via CSS Grid/Flex and `media-queries.css`.
- **Glassmorphism**: Used for cards and overlays for a modern, soft UI.
- **Font System**: Inter font family, multiple weights, loaded via `@font-face`.
- **Variables**: All colors, spacing, radii, and font sizes are CSS variables for easy theming.
- **Componentization**: HTML and CSS are split into logical, reusable blocks.
- **Accessibility**: Semantic tags, clear focus states, and color contrast considered.

---

## Challenges & Solutions

- **CSS Layering**: Ensuring correct cascade/order of imports to avoid style leaks.
- **Font Loading**: Custom font weights required careful `@font-face` setup.
- **Glassmorphism**: Balancing blur and transparency for performance and readability.
- **Responsiveness**: Designing grids that collapse gracefully at all breakpoints.
- **Button States**: Creating interactive, animated button effects with only CSS.
- **Scalability**: Keeping components generic for future features (e.g., more product fields).

---

## Tips for Future Devs

- Always use variables for new colors, spacing, or font sizes.
- Add new components in `src/components/` and style in `components.css`.
- Test on multiple screen sizes (see `media-queries.css`).
- Keep JS logic modular and avoid direct DOM manipulation where possible.
- Document any new UI patterns in the style guide.

---

## TODO / Ideas

- Add dark mode toggle
- Implement persistent storage (localStorage or backend)
- Add user authentication
- Expand product/category metadata
- Improve accessibility (ARIA labels, keyboard navigation)
