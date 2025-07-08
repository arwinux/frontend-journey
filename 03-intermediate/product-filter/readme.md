# 🛍️ Product Filter

<div align="center">

![Image Preview](./design/preview.png) 

_Where shopping meets simplicity in a symphony of design_ ✨

[![Made with Love](https://img.shields.io/badge/Made%20with-✨-ff69b4.svg)](https://github.com/arwinux) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
</div>

## 🎯 Welcome to Product Filter

Step into a world where online shopping becomes an art form. Product Filter is a clean, modern web app for browsing and filtering products by category or search, with a beautiful responsive design and smooth user experience.

## ✨ Features

### 🌟 Core Features

- **Elegant Interface**: Browse a clean, modern product grid with smooth transitions
- **Live Search**: Instantly filter products by name as you type
- **Category Filtering**: Filter products by Watches, Shirts, Gowns, or Jewelry
- **Responsive Design**: Enjoy the app on any device, from mobile to desktop

### 🎨 Visual Elements

- **Modern Design**: Minimalist, user-focused interface
- **Smooth Animations**: Subtle transitions and hover effects
- **Vivid Accents**: Purple highlights and interactive elements
- **Custom Typography**: Carefully selected fonts for readability
- **Responsive Layout**: Flexible grid system adapts to all screens

### 🧩 Project Structure

```
🛍️ Product Filter/
│
├── 📁 src/                      # Source code organization
│   ├── 📁 styles/               # CSS architecture
│   │   ├── 📄 main.css          # Primary stylesheet
│   │   ├── 📄 reset.css         # CSS normalization
│   │   ├── 📄 typography.css    # Text styling presets
│   │   └── 📄 variables.css     # Design tokens & fonts
│   │
│   ├── 📁 scripts/              # JavaScript modules
│   │   └── 📄 app.js            # Main application logic
│   │
│   ├── 📁 data/                 # Product data (JSON)
│   │   └── 📄 db.json           # Product list
│   │
│   └── 📁 assets/               # All project assets
│        ├── 📁 fonts/           # Custom fonts
│        └── 📁 images/          # Product images
│
├── 📁 design/                   # UI/UX design previews
│   ├── 🖼️ preview1.png          # Product Grid preview
│   └── 🖼️ preview2.png          # Filter UI preview
│
├── 📄 index.html                # Main entry point
├── 📄 README.md                 # Project documentation
├── 📄 style-guide.md            # Design system specifications
├── 📄 .gitignore                # Version control exclusions
└── 📄 DEVELOPMENT.md            # Learning notes & challenges
```

## 🚀 Quick Start

### Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/product-filter.git
```

2. Navigate to the project directory:

```bash
cd product-filter
```

3. Install dependencies (including axios and json-server):

```bash
npm install
npm i json-server
npm i axios
```

4. Open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server

# Using Node.js
npx serve
```

## 🧪 Mock API with json-server

This project uses [json-server](https://github.com/typicode/json-server) to provide a mock REST API for product data.

1. **Start the mock API server:**

   ```bash
   npx json-server --watch src/data/db.json --port 3001
   ```

   This will start a local API at `http://localhost:3001/products`.

2. **Ensure your app’s JavaScript (axios requests) points to this API endpoint.**

## 💫 Features in Detail

### Product Filtering

- **Live Search**: Filter products by typing keywords in the search bar
- **Category Filter**: Instantly show only Watches, Shirts, Gowns, or Jewelry
- **All Products**: View the complete product list with one click

### Visual Effects

- **Smooth Transitions**: Enjoy seamless UI changes
- **Hover Effects**: Interactive elements respond to your actions
- **Vivid Accents**: Purple highlights for key actions
- **Responsive Design**: Optimized for all screen sizes

## 🛠️ Technical Stack

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with custom properties
- **JavaScript**: Clean, modular code
- **Axios**: For HTTP requests and API communication
- **FontAwesome**: Iconography for clarity
- **Responsive Design**: Mobile-first approach

## 🤝 Contributing

We welcome all contributors to help make Product Filter better! Whether you're fixing bugs, adding features, or improving documentation, your contributions are valuable.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Creator

- **Arvin Jafary** - [@Arwinux](https://github.com/arwinux)
  - _Frontend Developer & UI/UX Enthusiast_

## 🙏 Acknowledgments

- Inspired by modern e-commerce experiences
- Built with clean code principles
- Special thanks to the open-source community
- Gratitude to all contributors

---

<div align="center">

_Made with ✨ by [Arvin Jafary](https://github.com/arwinux)_

_May your shopping be as smooth as this filter_ 🛍️

</div>
