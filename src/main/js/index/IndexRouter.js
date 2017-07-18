const express = require('express');
const IndexController = require('./IndexController');
const passport = require('passport');

const router = express.Router();
const indexController = new IndexController();

router.get('/', indexController.renderIndexView);

module.exports = router;
