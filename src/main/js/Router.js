const IndexRouter = require('./index/IndexRouter');
const UserRouter = require('./user/UserRouter');
const LoginRouter = require('./user/login/LoginRouter');

class Router {

    route(app) {
        app.use(IndexRouter);
        app.use(UserRouter);
        app.use(LoginRouter);
    }

    getLoginCallbackUrl() {
        return '/login/callback';
    }
}

module.exports = Router;