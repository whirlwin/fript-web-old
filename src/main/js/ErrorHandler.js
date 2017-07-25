const winston = require('winston');

function errorHandler(err, req, res, next) {
    winston.error('Got error: ' + JSON.stringify(err));
    res.render('common/error');
}

module.exports = errorHandler;