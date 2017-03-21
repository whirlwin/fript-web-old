const MatchingController = require('./matching/MatchingController');

class Router {

    constructor() {
        this.matchingController = new MatchingController();
    }

    route(app) {
        app.get('/matching', this.matchingController.index);
    }
}

module.exports = Router;