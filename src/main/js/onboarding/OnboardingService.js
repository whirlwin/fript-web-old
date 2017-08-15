const rp = require('request-promise');

class OnboardingService {

    getOnboardingByUserId(userId) {
        const url = `${process.env.API_BASE_URL}/user/login?facebookToken=${accessToken}`;
        return rp({
            uri: url,
            json: true
        });
    }

}

module.exports = OnboardingService;