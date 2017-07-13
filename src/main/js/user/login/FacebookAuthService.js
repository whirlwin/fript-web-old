const featureToggles = require('../../settings/feature-toggles');
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const UserService = require('../UserService');
const winston = require('winston');

class FacebookAuthService {

    constructor() {
        this.userService = new UserService();
    }

    initialize() {
        passport.use(new passportFacebook.Strategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "/login/facebook/callback"
        }, this.handleLogin.bind(this)));
    }

    static authenticate() {
        return passport.authenticate('facebook');
    }

    handleLogin(accessToken, refreshToken, profile, done) {
        if (featureToggles.debugLogging.enabled) {
            winston.info(`handleLogin callback invoked: AT: ${accessToken} RT: ${refreshToken} profile: ${profile}`);
        }
        this.userService.logIn(accessToken).then(profile => {
            console.log(profile);
        });
    }
}

module.exports = FacebookAuthService;