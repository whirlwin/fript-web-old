const rp = require('request-promise');

let instance;

class UserService {

    createUser(accessToken, refreshToken, profile) {
        const url = `${process.env.API_BASE_URL}/user`;
        return rp({
            uri: url,
            json: true
        });
    }

    logIn(accessToken, refreshToken, profile) {
        const url = `${process.env.API_BASE_URL}/user/login?facebookToken=${accessToken}`;
        return rp({
            uri: url,
            json: true
        });
    }

    static getInstance() {
        if (instance == null) {
            instance = new UserService();
        }
        return instance;
    }
}

module.exports = UserService;