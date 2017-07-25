const IndexRouter = require('./index/IndexRouter');
const UserRouter = require('./user/UserRouter');
const LoginRouter = require('./login/LoginRouter');
const OnboardingRouter = require('./onboarding/OnboardingRouter');

class Router {

    route(app) {
        app.use(IndexRouter);
        app.use(UserRouter);
        app.use(LoginRouter);
        app.use(OnboardingRouter);
    }
}

module.exports = Router;