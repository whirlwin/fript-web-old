const AppConfig = require('./config/AppConfig');
const winston = require('winston');

class App {

    constructor() {
        this.appConfig = new AppConfig();
    }

    start() {
        const { app, httpPort } = this.appConfig.configure();

        app.listen(httpPort, () =>
            winston.info(`app started on port: ${httpPort}`));
    }
}

module.exports = App;