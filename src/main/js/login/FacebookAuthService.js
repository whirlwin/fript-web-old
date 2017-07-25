const featureToggles = require('../settings/feature-toggles');
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const UserService = require('../user/UserService');
const winston = require('winston');

class FacebookAuthService {

    constructor() {
        this.userService = new UserService();
    }

    initialize(app) {
        app.use(passport.initialize());
        app.use(passport.session());

        passport.use(new passportFacebook.Strategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "/login/facebook/callback"
        }, this.handleLogin.bind(this)));

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });

    }

    static authenticate() {
        return passport.authenticate('facebook');
    }

    handleLogin(accessToken, refreshToken, profile, done) {
        if (featureToggles.debugLogging.enabled) {
            winston.info(`handleLogin callback invoked:
                AT: ${accessToken}
                RT: ${refreshToken}
                Profile ID: ${profile.id}`
            );
        }

        this.userService.logIn(accessToken).then(profile => {
            done(null, profile);
        }).catch(err => {
            winston.error("Failed to log in user with error: " + JSON.stringify(err));
            done(err);
        });
    }
}

module.exports = FacebookAuthService;