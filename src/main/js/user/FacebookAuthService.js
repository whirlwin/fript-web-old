const passport = require('passport');
const passportFacebook = require('passport-facebook');
const UserService = require('./UserService');

class FacebookAuthService {

    constructor() {
        this.userService = new UserService();
    }

    initialize({ loginCallbackUrl }) {
        passport.use(new passportFacebook.Strategy({
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: loginCallbackUrl
        }, this.handleLogin));
    }

    handleLogin(accessToken, refreshToken, profile, cb) {
        this.userService.logIn(accessToken).then(profile => {
            console.log(profile);
        });
    }
}

module.exports = FacebookAuthService;