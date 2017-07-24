const featureToggles = require('../settings/feature-toggles');
const winston = require('winston');

class IndexController {

    renderIndexView(req, res) {
        if (featureToggles.debugLogging.enabled) {
            winston.info('Current user is: ' + JSON.stringify(req.user));
        }
        res.render('index/index', { user: req.user });
    }
}

module.exports = IndexController;