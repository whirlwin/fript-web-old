const ExpressConfig = require('./ExpressConfig');

class AppConfig {

    constructor() {
        this.expressConfig = new ExpressConfig();
    }

    configure() {
        const app = this.expressConfig.configure();
        return { app: app, httpPort: 3000 };
    }
}

module.exports = AppConfig;