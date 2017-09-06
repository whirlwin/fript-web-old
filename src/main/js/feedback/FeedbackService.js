const FriptApiClient = require('../FriptApiClient');

class FeedbackService {

    constructor() {
        this.friptApiClient = new FriptApiClient();
    }

    leaveFeedback(feedback) {
        this.friptApiClient.post('/feedback')
    }

}

module.exports = FeedbackService;
