const rp = require('request-promise');

let instance;

class MatchingService {

    getMatches() {
        const getMatchesUrl = process.env.API_BASE_URL + '/match';
        return rp({
            uri: getMatchesUrl,
            json: true
        });
    }

    static getInstance() {
        if (instance == null) {
            instance = new MatchingService();
        }
        return instance;
    }
}

module.exports = MatchingService;