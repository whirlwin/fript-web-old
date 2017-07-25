const express = require('express');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

class ExpressConfig {

    configure() {
        const app = express();
        app.set('view engine', 'pug');
        app.set('views', 'src/main/views');
        this.configureSession(app);
        app.use(this.configureSession());
        app.use(cookieParser());
        app.use(express.static('src/main/public'));
        return app;
    }

    configureSession() {
        return expressSession({
            secret: this.getSessionSecret(),
            resave: false,
            saveUninitialized: false
        });
    }

    getSessionSecret() {
        return crypto.randomBytes(64).toString('hex');
    }
}

module.exports = ExpressConfig;