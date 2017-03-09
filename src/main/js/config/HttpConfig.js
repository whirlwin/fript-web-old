class HttpConfig {

    getHttpPort() {
        return process.env.PORT || 4000;
    }
}

module.exports = HttpConfig;