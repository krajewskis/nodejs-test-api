'use strict';

var UserController = function(extend, AbstractController, ErrorController, UserRepo) {

    extend(this, AbstractController);

    this.errorController = ErrorController;
    this.repo = UserRepo;

    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
}

UserController.prototype.list = function(req, res) {
    var _this = this;

    var listCallback = function(error, data) {
        if (_this.errorController.checkError(error, res, data)) {
            return false;
        }

        _this.__sendRespose(res, data);
    }

    this.repo.list(listCallback);
};

UserController.prototype.get = function(req, res) {
    var _this = this;

    var callback = function(error, data) {
        if (_this.errorController.checkError(error, res, data)) {
            return false;
        }

        _this.__sendRespose(res, data);
    }
    this.repo.get(req.params.isid, callback);
};

module.exports = UserController;