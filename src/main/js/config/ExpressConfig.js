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
        app.use(cookieParser());
        return app;
    }

    configureSession(app) {
        app.use(expressSession({
            secret: this.getSessionSecret(),
            resave: false,
            saveUninitialized: false
        }));
    }

    getSessionSecret() {
        return crypto.randomBytes(64).toString('hex');
    }
}

module.exports = ExpressConfig;