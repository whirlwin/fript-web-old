class LoginController {

    renderLoginView(req, res) {
        res.render('user/login/view');
    }
}

module.exports = LoginController;