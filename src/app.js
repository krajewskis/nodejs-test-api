'use strict';

module.exports = function(express, IndexController, ResourceController, UserController) {

    var app = express();

    IndexController.setApp(IndexController);

    app.get('/', IndexController.index);

    app.get('/listUsingRepo', ResourceController.listUsingRepo);
    app.get('/listUsingService', ResourceController.listUsingService);
    app.get('/listUsingServiceRepoRelated', ResourceController.listUsingServiceRepoRelated);

    app.get('/users', UserController.list);
    app.get('/users/:isid', UserController.get);

    //app.get('/', IndexController.index.bind(IndexController));

    //app.get('/', function (req, res) {
    //    IndexController.index(req, res)
    //});

    return app;
};