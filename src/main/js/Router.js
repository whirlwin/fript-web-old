const IndexRouter = require('./index/IndexRouter');
const UserRouter = require('./user/UserRouter');
const LoginRouter = require('./login/LoginRouter');
const FeedbackRouter = require('./feedback/FeedbackRouter');
const OnboardingRouter = require('./onboarding/OnboardingRouter');
const ErrorHandlerMiddleware = require('./ErrorHandlerMiddleware');

class Router {

    route(app) {
        app.use(IndexRouter);
        app.use(UserRouter);
        app.use(LoginRouter);
        app.use(FeedbackRouter);
        app.use(OnboardingRouter);
        app.use(ErrorHandlerMiddleware);
    }
}

module.exports = Router;