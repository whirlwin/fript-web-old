class HttpConfig {

    getHttpPort() {
        return process.env.PORT || 4000;
    }

    getAppBaseUrl() {
        return `${process.env.APP_HOST}:${this.getHttpPort()}`
    }
}

module.exports = HttpConfig;