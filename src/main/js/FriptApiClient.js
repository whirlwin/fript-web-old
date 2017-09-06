const rp = require('request-promise');

class FriptApiClient {

    get(path) {
        const url = this.baseUrl + path;
        return rp({
            method: 'GET',
            uri: url,
            headers: { 'X-Api-Key': process.env.FRIPT_API_KEY },
            json: true
        })
    }

    post(path, body) {
        const url = process.env.FRIPT_API_BASE_URL + path;
        return rp({
            method: 'POST',
            uri: url,
            headers: { 'X-Api-Key': process.env.FRIPT_API_KEY },
            body: body,
            json: true
        });

    }
}

module.exports = FriptApiClient;
