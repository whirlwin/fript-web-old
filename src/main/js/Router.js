const IndexController = require('./index/IndexController');
const MatchingController = require('./match/MatchController');
const OnboardingController = require('./onboarding/OnboardingController');

class Router {

    constructor() {
        this.indexController = new IndexController();
        this.matchingController = new MatchingController();
        this.onboardingController = new OnboardingController();
    }

    route(app) {
        app.get('/', this.indexController.renderIndexView);
        app.get('/matching', this.matchingController.renderMatchView);
        app.get('/onboarding', this.onboardingController.renderOnboardingView);
    }

    getLoginCallbackUrl() {
        return '/login/callback';
    }
}

module.exports = Router;