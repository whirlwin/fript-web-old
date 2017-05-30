const dotenv = require('dotenv');
const ExpressConfig = require('./ExpressConfig');
const winston = require("winston");

class AppConfig {

    constructor() {
        this.expressConfig = new ExpressConfig();
    }

    configure() {
        dotenv.config();
        const app = this.expressConfig.configure();
        winston.info(`current env: ${process.env.ENV}`);
        return { app: app, httpPort: 3000 };
    }
}

module.exports = AppConfig;