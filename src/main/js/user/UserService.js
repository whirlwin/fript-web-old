const rp = require('request-promise');

let instance;

class UserService {

    logIn(accessToken, refreshToken, profile) {
        const url = `${process.env.API_BASE_URL}/user/login?facebookToken=${accessToken}`;
        return rp({
            uri: url,
            json: true
        });
    }

    getUserById(userId) {
        const url = `${process.env.API_BASE_URL}/user?id=${userId}`;
        return rp({
            uri: url,
            json: true
        });
    }
}

module.exports = UserService;