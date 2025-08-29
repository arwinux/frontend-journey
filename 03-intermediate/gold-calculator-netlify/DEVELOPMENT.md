# Development Guide - Gold Calculator

## Project Overview

The Gold Calculator is a Persian/Farsi web application for calculating gold prices and generating invoices. It features a modern, responsive design with dark/light mode support and real-time price calculations.

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Tailwind CSS with custom Persian fonts
- **Build Tool**: PostCSS with Autoprefixer and CSSNano
- **Charts**: ApexCharts for data visualization
- **Development**: Node.js with npm

## Project Structure

```
gold-calculator/
├── public/
│   ├── index.html          # Main HTML file
│   └── build/              # Compiled CSS output
├── src/
│   ├── css/
│   │   ├── tailwind.css    # Tailwind directives
│   │   └── fonts.css       # Custom Persian fonts
│   ├── js/
│   │   ├── main.js         # Main application logic
│   │   └── piechart.js     # Chart functionality
│   └── assets/
│       └── images/         # Project images
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── .gitignore             # Git ignore rules
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gold-calculator
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

This will start the PostCSS watcher that compiles Tailwind CSS to `public/build/tailwind.css`.

### Build for Production

```bash
npm run prod
```

This command will:

- Set NODE_ENV to production
- Compile and minify CSS using CSSNano
- Output optimized CSS to `public/build/tailwind.css`

## Development Workflow

### CSS Development

1. **Tailwind CSS**: All styling is done using Tailwind utility classes
2. **Custom Styles**: Add custom styles in `src/css/tailwind.css`
3. **Fonts**: Persian fonts are configured in `src/css/fonts.css`
4. **Dark Mode**: The app supports dark mode using Tailwind's `dark:` prefix

### JavaScript Development

1. **Main Logic**: Core application logic is in `src/js/main.js`
2. **Charts**: Chart functionality is separated in `src/js/piechart.js`
3. **ApexCharts**: Used for data visualization

### HTML Structure

- **RTL Support**: The app is designed for Persian (RTL) layout
- **Responsive Design**: Uses Tailwind's responsive prefixes
- **Accessibility**: Includes proper ARIA labels and semantic HTML

## Configuration Files

### Tailwind Config (`tailwind.config.js`)

- **Dark Mode**: Configured for selector-based dark mode
- **Content Paths**: Scans HTML and JS files for classes
- **Custom Fonts**: Persian font family configuration
- **Plugins**: Includes forms plugin and prettier integration

### PostCSS Config (`postcss.config.js`)

- **Tailwind**: Processes Tailwind directives
- **Autoprefixer**: Adds vendor prefixes
- **CSSNano**: Minifies CSS in production

## Key Features

### 1. Price Calculation

- Real-time gold price calculations
- Multiple currency support
- Tax and commission calculations

### 2. Dark/Light Mode

- Toggle between dark and light themes
- Persistent theme preference
- Smooth transitions

### 3. Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Flexible grid layouts

### 4. Persian Language Support

- RTL layout
- Custom Persian fonts (YekanBakh)
- Persian date display

## Development Guidelines

### Code Style

1. **JavaScript**:

   - Use ES6+ features
   - Follow camelCase naming
   - Add comments for complex logic
   - Use meaningful variable names

2. **CSS**:

   - Use Tailwind utility classes
   - Minimize custom CSS
   - Follow BEM methodology for custom classes
   - Use semantic color names

3. **HTML**:
   - Use semantic HTML5 elements
   - Include proper ARIA labels
   - Maintain RTL structure
   - Add alt text for images

### File Organization

- Keep related functionality together
- Separate concerns (UI, logic, data)
- Use descriptive file names
- Maintain consistent folder structure

### Performance Considerations

- Minimize DOM queries
- Use event delegation
- Optimize images
- Minimize CSS bundle size
- Use efficient selectors

## Testing

### Manual Testing Checklist

- [ ] Price calculations accuracy
- [ ] Dark/light mode toggle
- [ ] Responsive design on all breakpoints
- [ ] RTL layout correctness
- [ ] Chart functionality
- [ ] Form validation
- [ ] Accessibility features

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Production Build

1. Run production build:

```bash
npm run prod
```

2. Deploy the `public/` folder to your web server

3. Ensure the server serves static files correctly

### Environment Variables

- `NODE_ENV`: Set to 'production' for optimized builds

## Troubleshooting

### Common Issues

1. **CSS not updating**: Check if PostCSS watcher is running
2. **Fonts not loading**: Verify font files are in the correct location
3. **Dark mode not working**: Check Tailwind configuration
4. **Charts not rendering**: Verify ApexCharts is loaded

### Debug Mode

Enable debug mode by adding `console.log` statements or using browser dev tools.

## Contributing

1. Follow the established code style
2. Test changes thoroughly
3. Update documentation as needed
4. Use descriptive commit messages
5. Create feature branches for new development

## License

MIT License - see LICENSE file for details

## Support

For questions or issues, please refer to the project documentation or create an issue in the repository.
