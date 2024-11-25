<div align="center">

# ❄️ express-snow-theme

![npm version](https://img.shields.io/npm/v/express-snow-theme)
![downloads](https://img.shields.io/npm/dm/express-snow-theme)
![GitHub stars](https://img.shields.io/github/stars/ddosnotification/express-snow-theme)
![License](https://img.shields.io/npm/l/express-snow-theme)

Beautiful snowfall effect middleware for Express.js websites
</div>

## 🚀 Installation
```bash
npm install express-snow-theme
```

## 🌨️ Basic Usage
```javascript
const express = require('express');
const snowTheme = require('express-snow-theme')();
const app = express();

app.use('/', snowTheme.middleware());
app.use('/', snowTheme.inject());

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Winter Page</h1>
            </body>
        </html>
    `);
});

app.listen(3000);
```

## ⚙️ Custom Configuration
```javascript
const snowTheme = require('express-snow-theme')({
    snowflakes: ['❄', '❅', '❆'],    // Custom characters
    density: 100,                    // More snowflakes
    interval: 200,                   // Creation interval (ms)
    minSize: 0.8,                   // Min snowflake size
    maxSize: 2,                     // Larger flakes
    minDuration: 8,                 // Slower falling
    maxDuration: 15,                // Max fall duration
    wind: 50,                       // Stronger wind effect
    zIndex: 999999                  // Stack order
});
```

## 🎨 Preset Examples

### Light Snow
```javascript
const snowTheme = require('express-snow-theme')({
    density: 30,
    minDuration: 8,
    wind: 10
});
```

### Blizzard
```javascript
const snowTheme = require('express-snow-theme')({
    density: 150,
    interval: 100,
    wind: 50,
    maxSize: 2
});
```

### Gentle Snow
```javascript
const snowTheme = require('express-snow-theme')({
    density: 40,
    minDuration: 10,
    maxSize: 1.2,
    wind: 5
});
```

## 🎄 Features
- Zero dependencies
- Automatically injects snow effect into HTML responses
- Fully configurable appearance and behavior
- Responsive design
- Performance optimized with automatic cleanup
- Mobile-friendly

## 🔧 Browser Support
- Chrome
- Firefox
- Safari
- Edge
- Opera

## 📝 License
MIT © ddosnotification

## 🤝 Contributing
1. Fork
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

<div align="center">
Made with ❄️ for winter web magic
</div>