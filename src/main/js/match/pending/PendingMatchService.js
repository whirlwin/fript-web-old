const rp = require('request-promise');

class PendingMatchService {

    getPendingMatches() {
        const url = process.env.FRIPT_API_BASE_URL + '/pending-match';
        return rp({
            uri: url,
            json: true
        });

    }
}

module.exports = PendingMatchService;