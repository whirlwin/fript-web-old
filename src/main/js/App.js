const AppConfig = require('./config/AppConfig');
const Router = require('./Router');
const winston = require('winston');

class App {

    constructor() {
        this.appConfig = new AppConfig();
        this.router = new Router();
    }

    start() {
        const { app, httpPort } = this.appConfig.configure();

        this.router.route(app);

        app.listen(httpPort, () =>
            winston.info(`app started on port: ${httpPort}`));
    }
}

module.exports = App;