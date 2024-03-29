const express = require('express');
const FeedbackController = require('./FeedbackController');
const passport = require('passport');

const router = express.Router();
const feedbackController = new FeedbackController();

router.get('/feedback', feedbackController.renderFeedbackForm.bind(feedbackController));
router.post('/feedback', feedbackController.leaveFeedback.bind(feedbackController));

module.exports = router;
