const featureToggles = require('../settings/feature-toggles');
const UserService = require('./UserService')
const FacebookAuthService = require('../login/FacebookAuthService');
const winston = require('winston');

class UserController {

    constructor() {
        this.userService = new UserService();
    }

    renderSignUp(req, res) {
        res.render('./user/sign-up');
    }

    signUp(req, res) {
        if (featureToggles.debugLogging.enabled) {
            winston.info('Signing up user');
        }

        return FacebookAuthService.authenticate();
    }
}

module.exports = UserController;
