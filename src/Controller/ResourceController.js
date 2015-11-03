'use strict';

var ResourceController = function(ErrorController, ResourceService, ResourceRepo) {

    this.errorController = ErrorController;
    this.service = ResourceService;
    this.repo = ResourceRepo;

    this.listUsingRepo = this.listUsingRepo.bind(this);
    this.listUsingService = this.listUsingService.bind(this);
    this.listUsingServiceRepoRelated = this.listUsingServiceRepoRelated.bind(this);
}

ResourceController.prototype.listUsingRepo = function(req, res) {
    var _this = this;
    var listCallback = function(error, data) {
        if (_this.errorController.checkError(error, res, data)) {
            return false;
        }
        _this.__sendRespose(res, data);
    }

    this.repo.list(listCallback);
};

ResourceController.prototype.listUsingService = function(req, res) {
    var _this = this;
    var listCallback = function(error, data) {
        if (_this.errorController.checkError(error, res, data)) {
            return false;
        }
        _this.__sendRespose(res, data);
    }

    this.service.list(listCallback);
}

ResourceController.prototype.listUsingServiceRepoRelated = function(req, res) {
    var _this = this;
    var listCallback = function(error, data) {
        if (_this.errorController.checkError(error, res, data)) {
            return false;
        }

        _this.__sendRespose(res, data);
    }

    this.service.listRelated(listCallback);
}

ResourceController.prototype.__sendRespose = function(res, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
}

module.exports = ResourceController;