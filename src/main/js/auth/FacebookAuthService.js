const passport = require('passport');
const passportFacebook = require('passport-facebook');

class FacebookAuthService {

    initialize({ callbackUrl }) {
        passport.use(new passportFacebook.Strategy({
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: callbackUrl
        }));
    }
}

module.exports = FacebookAuthService;