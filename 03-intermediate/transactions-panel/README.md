# 💰 Transactions Panel

![Image Preview](./design/preveiw.png)

## Project Links & Badges

<div style="text-align:left;">

[![Live Demo](https://img.shields.io/badge/Live-Demo-cc3333?style=for-the-badge)](https://03-intermediate-transactions-panel.netlify.app/)  
[![Code Repository](https://img.shields.io/badge/Code-Repository-d46b2a?style=for-the-badge)](https://github.com/arwinux/frontend-journey/tree/main/03-intermediate/transactions-panel)  
[![Challenge](https://img.shields.io/badge/Challenge-Fronthooks-c7b000?style=for-the-badge&logoColor=white)](https://fronthooks.ir)  
[![License: MIT](https://img.shields.io/badge/License-MIT-11bb33?style=for-the-badge)](https://opensource.org/licenses/MIT)  
[![Author: Arvin Jafary](https://img.shields.io/badge/Author-Arvin%20Jafary-3366cc?style=for-the-badge)](https://github.com/arwinux)  
[![Hosted On: Netlify](https://img.shields.io/badge/Hosted-Netlify-9933cc?style=for-the-badge)](https://www.netlify.com)  
[![Stack: HTML · CSS](https://img.shields.io/badge/Stack-HTML%20·%20CSS%20·%20JS-cccccc?style=for-the-badge)](#)

</div>

A modern, responsive web application for managing and monitoring financial transactions with real-time statistics and advanced filtering capabilities.

## ✨ Features

- **📊 Real-time Statistics Dashboard**

  - Total transactions count
  - Deposit transactions count
  - Withdrawal transactions count
  - Total amount calculation

- **🔍 Advanced Search & Filtering**

  - Search by tracking number, amount, or date
  - Sort transactions by amount (ascending/descending)
  - Sort transactions by date (ascending/descending)

- **📱 Responsive Design**

  - Mobile-first approach
  - Adaptive layout for all screen sizes
  - Touch-friendly interface

- **🎨 Modern UI/UX**

  - Persian/Farsi language support
  - RTL (Right-to-Left) layout
  - Beautiful gradient backgrounds
  - Smooth animations and transitions
  - Custom Vazirmatn font family

- **⚡ Performance Optimized**
  - Efficient data handling
  - Smooth interactions
  - Optimized rendering

## 🛠️ Technologies Used

- **Frontend**

  - HTML5
  - CSS3 (Custom Properties, Flexbox, Grid)
  - Vanilla JavaScript (ES6+)
  - Axios for HTTP requests

- **Styling**

  - Custom CSS with CSS Variables
  - Responsive design patterns
  - Modern CSS features (Grid, Flexbox)
  - Custom font integration (Vazirmatn)

- **Data Management**
  - JSON Server for mock API
  - Local JSON database
  - RESTful API consumption

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arwinux/transactions-panel.git
   cd transactions-panel
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the JSON Server**

   ```bash
   npx json-server --watch src/data/db.json --port 3000
   ```

4. **Open the application**
   - Open `index.html` in your browser
   - Or serve it using a local server:
     ```bash
     npx serve .
     ```

## 📖 Usage

1. **Load Transactions**

   - Click the "بارگذاری تراکنش ها" (Load Transactions) button
   - The dashboard will display all transaction data

2. **View Statistics**

   - Total transactions count
   - Deposit transactions (green)
   - Withdrawal transactions (red)
   - Total amount (yellow)

3. **Search Transactions**

   - Use the search box to find transactions by:
     - Tracking number
     - Amount
     - Date

4. **Sort Transactions**
   - Click on "مبلغ" (Amount) to sort by price
   - Click on "تاریخ تراکنش" (Transaction Date) to sort by date
   - Toggle between ascending and descending order

## 📁 Project Structure

```
💰 Transactions-Panel/
│
├── 📁 src/                      # Source code organization
│   ├── 📁 styles/               # CSS architecture
│   │   ├── 📄 main.css          # Primary stylesheet
│   │   ├── 📄 components.css   # Component styles
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
│        └── 📁 fonts/           # Custom fonts
│
├── 📁 design/                   # UI/UX design previews
│   └── 🖼️ preview.png          # Product Grid preview
│
├── 📄 index.html                # Main entry point
├── 📄 README.md                 # Project documentation
├── 📄 style-guide.md            # Design system specifications
├── 📄 .gitignore                # Version control exclusions
└── 📄 DEVELOPMENT.md            # Learning notes & challenges
```

## 🎯 Key Components

### Classes Overview

- **`Product`**: Data model for transactions
- **`ProductServices`**: API communication layer
- **`FilterProduct`**: Sorting and filtering logic
- **`SearchProduct`**: Search functionality
- **`ProdcutStatics`**: Statistics calculations
- **`Ui`**: User interface management
- **`App`**: Main application controller

### Styling System

- **CSS Variables**: Centralized design tokens
- **Component-based**: Modular CSS architecture
- **Responsive**: Mobile-first approach
- **RTL Support**: Persian language optimization

## 🌟 Features in Detail

### Statistics Dashboard

- Real-time calculation of transaction metrics
- Color-coded indicators for different transaction types
- Hover effects and smooth animations

### Search Functionality

- Real-time search as you type
- Search across multiple fields
- Instant results display

### Sorting System

- Toggle between ascending and descending order
- Visual indicators for sort direction
- Smooth icon rotation animations

### Responsive Design

- Adaptive grid layouts
- Mobile-optimized table view
- Touch-friendly interactions

## 🔧 Customization

### Adding New Transaction Types

1. Update the `db.json` file with new transaction data
2. Modify the `setTransactionsTypeStyle()` method in `Ui` class
3. Add corresponding CSS classes in `components.css`

### Styling Modifications

- Edit `variables.css` for color scheme changes
- Modify `components.css` for component styling
- Update `typography.css` for font changes

### API Configuration

- Update the base URL in `ProductServices.setupApiClient()`
- Modify API endpoints as needed
- Add new filtering parameters

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Arvin Jafary**

- GitHub: [@arwinux](https://github.com/arwinux)
- LinkedIn: [@arwinux](https://linkedin.com/in/arwinux)

## 🙏 Acknowledgments

- [Vazirmatn Font](https://github.com/rastikerdar/vazirmatn) - Beautiful Persian font
- [Font Awesome](https://fontawesome.com/) - Icon library
- [JSON Server](https://github.com/typicode/json-server) - Mock API server

---

⭐ If you found this project helpful, please give it a star!
