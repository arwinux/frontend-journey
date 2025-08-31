# Captcha Generator

<img src="./design/readme.gif">

## Project Links & Badges

<div style="text-align:left;">

[![Live Demo](https://img.shields.io/badge/Live-Demo-cc3333?style=for-the-badge)](https://02-junior-captcha-generator.netlify.app/)  
[![Code Repository](https://img.shields.io/badge/Code-Repository-d46b2a?style=for-the-badge)](https://github.com/arwinux/frontend-journey/tree/main/02-junior/captcha-generator)  
[![Challenge](https://img.shields.io/badge/Challenge-Persoanl-c7b000?style=for-the-badge&logoColor=white)](#)  
[![License: MIT](https://img.shields.io/badge/License-MIT-11bb33?style=for-the-badge)](https://opensource.org/licenses/MIT)  
[![Author: Arvin Jafary](https://img.shields.io/badge/Author-Arvin%20Jafary-3366cc?style=for-the-badge)](https://github.com/arwinux)  
[![Hosted On: Netlify](https://img.shields.io/badge/Hosted-Netlify-9933cc?style=for-the-badge)](https://www.netlify.com)  
[![Stack: HTML · CSS](https://img.shields.io/badge/Stack-HTML%20·%20CSS-cccccc?style=for-the-badge)](#)

</div>

A sleek, interactive CAPTCHA generator built using **JavaScript, HTML, and CSS**, enhanced with **Bootstrap** for responsive design. This project dynamically generates captchas with random backgrounds and lets users verify their input with real-time feedback!

## 🎯 Features

- **Dynamic CAPTCHA Generation** - Generates a new CAPTCHA on every reload.
- **Random Background Images** - Adds visual variety to each CAPTCHA.
- **Instant Validation** - Checks user input against the CAPTCHA and provides instant feedback.
- **Responsive Design** - Optimized for different screen sizes using Bootstrap.
- **Simple & Lightweight** - No external dependencies beyond Bootstrap.

## 📂 Project Structure

```
captcha-generator-js/
│-- assets/
│   │-- fonts/  (Custom fonts for the CAPTCHA text)
│   │-- images/ (Background images for the CAPTCHA box)
│-- css/
│   │-- main.css (Core styles)
│   │-- settings.css (Font and global styles)
│-- js/
│   │-- main.js (CAPTCHA logic and interactivity)
│-- index.html (Main UI)
│-- README.md (You're reading this now! 🎉)
```

## 🛠️ Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/arwinux/captcha-generator-js.git
   ```
2. Open `index.html` in your browser.
3. Enjoy generating and verifying CAPTCHAs! 🔥

## 📝 How It Works

1. A random 5-character CAPTCHA string is generated.
2. A random background image is assigned to the CAPTCHA.
3. Clicking the **refresh** button regenerates a new CAPTCHA.
4. Users enter the CAPTCHA in the input field and click the **check** button.
5. **Success or error feedback** is displayed instantly.

## 🛠️ Technologies Used

- **JavaScript (ES6)** for logic
- **HTML5 & CSS3** for structure and styling
- **Bootstrap 5** for responsive design

## 🤝 Contributing

Feel free to **fork** this repository, **submit issues**, and **send pull requests**! 🚀

## 📜 License

This project is open-source and available under the **MIT License**.
