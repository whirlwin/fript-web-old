const rp = require('request-promise');
const FriptApiClient = require('../FriptApiClient');

class UserService {

    constructor() {
        this.friptApiClient = new FriptApiClient();
    }

    logIn(facebookToken, profile) {
        return this.friptApiClient.post('/user/login', { facebookToken, profile });
    }

    getUserById(userId) {
        return this.friptApiClient.get('/user?id=' + userId);
    }
}

module.exports = UserService;