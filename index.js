'use strict';

var di = require('di');
var injectorConfig = require('./src/injector');
var injector = new di.Injector([injectorConfig]);

injector.invoke(function webServer(app) {

    app.listen(3000, function startWebServer() {
        console.log('Server started on port 3000');
    });
});