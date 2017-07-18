const express = require('express');
const UserController = require('./UserController');
const passport = require('passport');

const router = express.Router();
const userController = new UserController();

//router.get('/user/sign-up', UserController.signUp.bind(userController));
router.get('/user/sign-up', passport.authenticate('facebook', {
    state: {foo: "bar"}
}));

module.exports = router;
