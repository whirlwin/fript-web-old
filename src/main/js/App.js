const AppConfig = require('./config/AppConfig');
const FacebookAuthService = require('./user/login/FacebookAuthService');
const Router = require('./Router');
const winston = require('winston');

class App {

    constructor() {
        this.appConfig = new AppConfig();
        this.facebookAuthService = new FacebookAuthService();
        this.router = new Router();
    }

    start() {
        const { app, httpPort } = this.appConfig.configure();

        this.facebookAuthService.initialize(app);

        this.router.route(app);

        app.listen(httpPort, () =>
            winston.info(`app started on port: ${httpPort}`));
    }
}

module.exports = App;