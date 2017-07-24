const express = require('express');
const OnboardingController = require('./OnboardingController');

const router = express.Router();
const onboardingController = new OnboardingController();

router.get('/onboarding', onboardingController.renderOnboardingView.bind(onboardingController));

module.exports = router;
