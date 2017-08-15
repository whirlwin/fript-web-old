class OnboardingController {

    redirectToOnboardingStep(req, res) {
        if (!req.user) {

        }
        res.send(200);
    }

    renderOnboardingView(req, res) {
        res.render('onboarding/onboarding');
    }
}

module.exports = OnboardingController;