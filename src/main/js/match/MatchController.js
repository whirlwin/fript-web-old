const MatchService = require('./MatchService');

class MatchController {

    renderMatchView(req, res) {
        MatchService.getInstance().getMatches().then(matches => {
            res.render('matching/view', { matches: matches });
        });
    }
}

module.exports = MatchController;