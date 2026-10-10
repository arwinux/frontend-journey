# Transactions Panel

![Project Preview](./preview.png)

---

## Project Links & Badges

[![Live Demo](https://img.shields.io/badge/Live-Demo-cc3333?style=for-the-badge)](#)  
[![Code Repository](https://img.shields.io/badge/Code-Repository-d46b2a?style=for-the-badge)](https://github.com/arwinux/frontend-journey/tree/main/03-intermediate/transactions-panel-modern)  
[![Challenge](https://img.shields.io/badge/Challenge-Fronthooks-c7b000?style=for-the-badge&logoColor=white)](#)  
[![License: MIT](https://img.shields.io/badge/License-MIT-11bb33?style=for-the-badge)](https://opensource.org/licenses/MIT)  
[![Author: Arvin Jafari](https://img.shields.io/badge/Author-Arvin%20Jafari-3366cc?style=for-the-badge)](https://github.com/arwinux)  
[![Hosted On: Github](https://img.shields.io/badge/Hosted-Github-9933cc?style=for-the-badge)](#)  
[![Stack: HTML · CSS](https://img.shields.io/badge/Stack-HTML%20·%20CSS%20·%20JS-cccccc?style=for-the-badge)](#)

---

## Overview

Transactions Panel is a responsive RTL financial dashboard built with vanilla JavaScript and Vite. It loads banking transactions from a local JSON server and presents them in a Persian-language table with live statistics. Users can search transactions by tracking number and sort them by amount or date.

## Features

- Load transactions from a local API with a loading state
- Stats board with total, deposit, and withdrawal counts
- Total and deposit amounts formatted in Persian digits
- Deposit and withdrawal percentage meters
- Search transactions by tracking number
- Sort by amount or date in both directions
- RTL Persian interface with the self-hosted Vazirmatn font

### Links

- **Solution URL:** [GitHub Repository](https://github.com/arwinux/frontend-journey/tree/main/03-intermediate/transactions-panel-modern)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the JSON server on port 3000:

   ```bash
   npm run server
   ```

3. Start the Vite dev server:

   ```bash
   npm run dev
   ```

## My process

### Built with

- Semantic HTML5
- CSS Custom Properties
- Flexbox
- CSS Grid
- ES6 JavaScript modules
- Vite
- axios
- json-server
- Font Awesome icons
- Self-hosted Vazirmatn font
- Responsive design

### Project Structure

```
transactions-panel-modern/
├── index.html
├── package.json
├── data/
│   └── db.json
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── assets/
    │   └── fonts/vazirmatn/
    ├── css/
    │   ├── main.css
    │   ├── reset.css
    │   ├── variable.css
    │   ├── typography.css
    │   └── layout.css
    └── js/
        ├── main.js
        ├── Model/
        │   └── Transaction.js
        ├── Service/
        │   ├── ApiService.js
        │   ├── TransactionsService.js
        │   └── TransactionStats.js
        └── Ui/
            ├── StatsBoard.js
            ├── TransactionTable.js
            └── TransactionUi.js
```

### Continued development

- Show an error state when the API is unreachable
- Cache loaded data in `localStorage` to avoid refetching
- Add pagination for large datasets
- Add CSV export of transactions
- Add filters by transaction type
- Improve keyboard navigation and ARIA labels

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) — HTML, CSS, and JavaScript reference.
- [web.dev](https://web.dev/) — Performance and accessibility guidance.
- [Vite](https://vite.dev/) — Build tool and development server.
- [json-server](https://github.com/typicode/json-server) — Local REST API for the transaction data.
- [axios](https://axios-http.com/) — HTTP client used for API requests.

## Author

- GitHub - https://github.com/arwinux

## Acknowledgments

Built as part of the [frontend-journey](https://github.com/arwinux/frontend-journey) learning repository.
