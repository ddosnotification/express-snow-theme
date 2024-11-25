const path = require('path');
const express = require('express');

class SnowTheme {
    constructor(options = {}) {
        this.config = {
            snowflakes: options.snowflakes || ['❄', '❅', '❆'],
            density: options.density || 50,
            interval: options.interval || 200,
            minSize: options.minSize || 0.8,
            maxSize: options.maxSize || 1.5,
            minDuration: options.minDuration || 5,
            maxDuration: options.maxDuration || 15,
            wind: options.wind || 20,
            zIndex: options.zIndex || 999999
        };
    }

    middleware() {
        return express.static(path.join(__dirname, 'public'));
    }

    inject() {
        return (req, res, next) => {
            const _send = res.send;
            res.send = function(body) {
                if (typeof body === 'string' && body.includes('</body>')) {
                    const configScript = `<script>
                        window.SnowThemeConfig = ${JSON.stringify(this.config)};
                    </script>`;
                    const script = '<script src="/snow-theme/snow.js"></script>';
                    body = body.replace('</body>', configScript + script + '</body>');
                }
                _send.call(this, body);
            };
            next();
        };
    }
}

module.exports = (options) => new SnowTheme(options);