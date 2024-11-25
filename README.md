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

app.use(snowTheme.middleware());
app.use(snowTheme.inject());
```

## ⚙️ Custom Configuration
```javascript
const snowTheme = require('express-snow-theme')({
    snowflakes: ['❄', '❅', '❆'],    // Custom characters
    density: 100,                    // More snowflakes
    wind: 50,                        // Stronger wind effect
    maxSize: 2,                      // Larger flakes
    minDuration: 8                   // Slower falling
});
```

## 🎯 Route-Specific Usage
```javascript
// Snow only on winter routes
app.use('/winter', snowTheme.middleware());
app.use('/winter', snowTheme.inject());

app.get('/', (req, res) => {
    res.sendFile('regular.html');    // No snow
});

app.get('/winter', (req, res) => {
    res.sendFile('winter.html');     // With snow
});
```

## ⚡ Configuration Options
```javascript
{
    snowflakes: ['❄', '❅', '❆'],  // Snowflake characters
    density: 50,                   // Max snowflakes
    interval: 200,                 // Creation interval (ms)
    minSize: 0.8,                 // Min size
    maxSize: 1.5,                 // Max size
    minDuration: 5,               // Min fall time (s)
    maxDuration: 15,              // Max fall time (s)
    wind: 20,                     // Wind strength
    zIndex: 999999               // Stack order
}
```

## 🎨 Preset Examples

### Light Snow
```javascript
{
    density: 30,
    minDuration: 8,
    wind: 10
}
```

### Blizzard
```javascript
{
    density: 150,
    interval: 100,
    wind: 50,
    maxSize: 2
}
```

### Gentle Snow
```javascript
{
    density: 40,
    minDuration: 10,
    maxSize: 1.2,
    wind: 5
}
```

## 🎄 Features
- Zero dependencies
- Route-specific application
- Fully configurable
- Responsive design
- Performance optimized
- Auto cleanup
- Mobile-friendly

## 🔧 Browser Support
- Chrome
- Firefox
- Safari
- Edge
- Opera

## 📝 License
MIT © ddosnotification

## ❄️ Show Your Support
Give a ⭐️ if this project helped you!

## 🤝 Contributing
1. Fork
2. Feature branch (`git checkout -b feature/amazing`)
3. Commit (`git commit -m 'Add amazing'`)
4. Push (`git push origin feature/amazing`)
5. Pull Request

<div align="center">
Made with ❄️ for winter web magic