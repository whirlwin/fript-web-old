const passport = require('passport');
const passportFacebook = require('passport-facebook');
const UserService = require('../UserService');

let instance;

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
        this.userService.logIn(accessToken).then(profile => {
            console.log(profile);
        });
    }

    static getInstance() {
        if (instance === null) {
            instance = new FacebookAuthService();
        }
        return instance;
    }
}

module.exports = FacebookAuthService;