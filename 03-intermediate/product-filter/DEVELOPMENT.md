# 🛠️ DEVELOPMENT.md

A guide for developers working on **Product Filter**. This document covers setup, workflow, architecture, and tips for contributing or learning from the project.

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/product-filter.git
   cd product-filter
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start a local server:**

   - With Node.js:
     ```bash
     npx json-server db.json
     ```
4. **Open `index.html` in your browser.**

---

## 🏗️ Project Architecture

```
product-filter/
├── src/
│   ├── styles/      # CSS (main, reset, typography, variables)
│   ├── scripts/     # JavaScript (app.js)
│   ├── data/        # Product data (db.json)
│   └── assets/      # Fonts & images
├── design/          # UI/UX previews
├── index.html       # Main entry point
```

- **Single-page app**: All logic in `src/scripts/app.js`
- **Data**: Fetched from `src/data/db.json` (via local server or mock API)
- **Styling**: CSS variables for theme, responsive grid, and custom fonts

---

## 🔄 Development Workflow

- **Edit styles** in `src/styles/` (use variables for consistency)
- **Edit logic/UI** in `src/scripts/app.js`
- **Update data** in `src/data/db.json`
- **Preview changes** by refreshing the browser
- **Use browser dev tools** for debugging layout and JS

---

## 🧩 Key Concepts & Patterns

- **Component-based JS**: Classes for Product, ProductServices, ProductViewUi, ProductFilter, App
- **Separation of concerns**: Data, UI, and logic are modular
- **Responsive design**: Grid adapts to all screens
- **Live filtering**: Search and category filter update UI instantly

---

## 🐞 Troubleshooting

- **Products not loading?**
  - Ensure local server is running (CORS issues if opened as file)
  - Check `db.json` path and API endpoint in `app.js`
- **Styles not applied?**
  - Confirm CSS files are linked in `index.html`
  - Check for typos in variable names
- **Font issues?**
  - Verify font files exist in `src/assets/fonts/Inter/`
  - Check `typography.css` for correct paths

---

## 📚 Learning Notes

- **Modern CSS**: Custom properties, grid, flexbox, responsive units
- **JS Classes**: Modular, maintainable code
- **API Simulation**: Using local JSON as a mock API
- **UI/UX**: Minimalist, accessible, and visually appealing

---

## 🤝 Contributing

- Fork, branch, and submit PRs for improvements
- Follow code style and naming conventions
- Document changes in comments or this file

---

## 🙏 Acknowledgments

- Inspired by modern e-commerce UIs
- Thanks to the open-source community
