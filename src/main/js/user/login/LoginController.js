const FacebookAuthService = require('./FacebookAuthService');

class LoginController {

    constructor() {
        this.facebookAuthService = new FacebookAuthService();
    }

    renderLoginView(req, res) {
        res.render('user/login/view');
    }

    signUp(req, res) {

    }

    static redirectToFacebookLogin() {
        return FacebookAuthService.authenticate();
    }
}

module.exports = LoginController;