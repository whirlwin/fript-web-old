const MatchingService = require('./MatchingService');

class MatchingController {

    index(req, res) {
        MatchingService.getInstance().getMatches().then(matches => {
            res.render('matching/view', { matches: matches });
        });
    }
}

module.exports = MatchingController;