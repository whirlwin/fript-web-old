const express = require('express');

class ExpressConfig {

    configure() {
        const app = express();
        app.set('view engine', 'pug');
        app.set('views', 'src/main/views');
        return app;
    }
}

module.exports = ExpressConfig;