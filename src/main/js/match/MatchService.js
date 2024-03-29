const FriptApiClient = require('../FriptApiClient');

class MatchService {

    constructor() {
        this.friptApiClient = new FriptApiClient();
    }

    getMatches() {
        return this.friptApiClient.get('/pending-match');
    }

}

module.exports = MatchService;