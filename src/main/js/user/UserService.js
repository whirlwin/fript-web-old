const rp = require('request-promise');

let instance;

class UserService {

    logIn() {
        const url = process.env.API_BASE_URL + '/user/login';
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