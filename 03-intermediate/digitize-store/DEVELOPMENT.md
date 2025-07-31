# Development Guide - Digitize Store

## 🚀 Project Overview

Digitize Store is a modern e-commerce website built with HTML, Tailwind CSS, and Alpine.js. The project features a responsive design with Persian (Farsi) language support and RTL layout.

## 📁 Project Structure

```
digitize-store/
├── public/                 # Static files served to browser
│   ├── build/             # Compiled CSS files
│   ├── index.html         # Home page
│   ├── cart.html          # Shopping cart page
│   └── singleproduct.html # Product detail page
├── src/                   # Source files
│   ├── assets/           # Images, fonts, and other assets
│   │   ├── images/       # Product and UI images
│   │   └── fonts/        # Custom fonts
│   ├── css/              # CSS source files
│   │   ├── tailwind.css  # Tailwind CSS imports
│   │   └── fonts.css     # Custom font definitions
│   └── js/               # JavaScript files
├── node_modules/         # Dependencies
├── package.json          # Project configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── .gitignore           # Git ignore rules
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with RTL support
- **Tailwind CSS**: Utility-first CSS framework
- **Alpine.js**: Lightweight JavaScript framework for interactivity
- **PostCSS**: CSS processing and optimization
- **Live Server**: Development server with hot reload

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arwinux/digitize-store.git
   cd digitize-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```bash
   npm run serve
   ```

## 📝 Available Scripts

| Script          | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Watch and compile Tailwind CSS for development |
| `npm run prod`  | Build optimized CSS for production             |
| `npm run serve` | Start live server for development              |

## 🎨 Development Workflow

### CSS Development

1. **Edit Tailwind classes** directly in HTML files
2. **Custom styles** can be added to `src/css/tailwind.css`
3. **Font definitions** are in `src/css/fonts.css`
4. **Compiled CSS** is automatically generated in `public/build/tailwind.css`

### JavaScript Development

- **Alpine.js** is used for interactive components
- **CDN version** is loaded from unpkg.com
- **Component logic** is written inline with `x-data` directives

### Asset Management

- **Images** are stored in `src/assets/images/`
- **Organized by feature** (Cart, Home, Single Product, etc.)
- **Optimized formats** (PNG, JPG) for web use

## 🔧 Configuration Files

### Tailwind CSS (`tailwind.config.js`)

```javascript
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan"], // Custom Persian font
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Form styling
  ],
};
```

### PostCSS (`postcss.config.js`)

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
```

## 📱 Responsive Design

The project uses a mobile-first approach with the following breakpoints:

- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)
- **2XL**: `2xl:` (1536px+)

## 🌐 Internationalization

- **Language**: Persian (Farsi)
- **Direction**: RTL (Right-to-Left)
- **Font**: IranYekan for proper Persian text rendering
- **Numbers**: Persian numerals used throughout

## 🎯 Key Features

### Home Page (`index.html`)

- Product grid with filtering
- Category sidebar
- Search functionality
- Bottom navigation for mobile

### Cart Page (`cart.html`)

- Shopping cart items
- Quantity controls
- Price calculations
- Discount code input

### Product Detail (`singleproduct.html`)

- Product gallery
- Color selection
- Add to cart functionality
- Product specifications

## 🔍 Code Quality

### HTML Standards

- Semantic HTML5 elements
- Proper accessibility attributes
- Valid HTML structure
- RTL support with `dir="rtl"`

### CSS Guidelines

- Utility-first approach with Tailwind
- Custom CSS only when necessary
- Responsive design patterns
- Consistent spacing and colors

### JavaScript Best Practices

- Alpine.js for component state
- Minimal vanilla JavaScript
- Event-driven interactions
- Progressive enhancement

## 🚀 Deployment

### Production Build

1. **Build optimized CSS**

   ```bash
   npm run prod
   ```

2. **Deploy `public/` directory** to your web server

### Recommended Hosting

- **Static hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: For global performance
- **HTTPS**: Required for modern web features

## 🐛 Troubleshooting

### Common Issues

1. **CSS not updating**

   - Check if `npm run dev` is running
   - Clear browser cache
   - Verify file paths in `tailwind.config.js`

2. **Fonts not loading**

   - Check `src/css/fonts.css` configuration
   - Verify font files exist in `src/assets/fonts/`

3. **Alpine.js not working**
   - Ensure CDN script is loaded
   - Check browser console for errors
   - Verify `x-data` syntax

### Development Tips

- Use browser dev tools for responsive testing
- Test on multiple devices and browsers
- Validate HTML structure regularly
- Monitor CSS bundle size in production

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Alpine.js Documentation](https://alpinejs.dev/)
- [PostCSS Documentation](https://postcss.org/)
- [RTL Web Design Guide](https://rtlstyling.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Author**: Arvin Jafary  
**Repository**: https://github.com/arwinux/digitize-store
