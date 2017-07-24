const express = require('express');
const LoginController = require('./LoginController');

const router = express.Router();
const loginController = new LoginController();

router.get('/login', loginController.renderLoginView.bind(loginController));
router.get('/login/facebook', LoginController.redirectToFacebookLogin());
router.get('/login/facebook/callback', require('passport').authenticate('facebook', {
    successRedirect: '/onboarding',
    failureRedirect: '/login/facebook/failure'
}));

module.exports = router;
