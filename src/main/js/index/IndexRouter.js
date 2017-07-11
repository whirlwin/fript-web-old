const express = require('express');
const IndexController = require('./IndexController');

const router = express.Router();
const indexController = new IndexController();

router.get('/', indexController.renderIndexView);

module.exports = router;
