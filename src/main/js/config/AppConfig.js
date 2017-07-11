const DotEnvConfig = require('./DotEnvConfig');
const ExpressConfig = require('./ExpressConfig');

class AppConfig {

    constructor() {
        this.expressConfig = new ExpressConfig();
        this.dotEnvConfig = new DotEnvConfig();
    }

    configure() {
        this.dotEnvConfig.configure();
        const app = this.expressConfig.configure();
        return { app: app, httpPort: 3000 };
    }
}

module.exports = AppConfig;