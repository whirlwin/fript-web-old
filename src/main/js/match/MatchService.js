const rp = require('request-promise');

let instance;

class MatchService {

    getMatches() {

        const url = process.env.API_BASE_URL + '/pending-match';
        return rp({
            uri: url,
            json: true
        });
    }

    static getInstance() {
        if (instance == null) {
            instance = new MatchService();
        }
        return instance;
    }
}

module.exports = MatchService;