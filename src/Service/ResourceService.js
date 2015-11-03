'use strict';

var ResourceService = function(async, ResourceRepo, ResourceRelatedRepo) {

    this.async = async;
    this.repo = ResourceRepo;
    this.repoRelated = ResourceRelatedRepo;

    this.list = this.list.bind(this);
    this.listRelated = this.listRelated.bind(this);
}

ResourceService.prototype.list = function(callback) {
    var listCallback = function(error, data) {
        if (!error) {
            //do something with data
            data.forEach(function(item) {
                item.newFiled = new Date();
            });
        }
        return callback(error, data);
    }
    this.repo.list(listCallback);
};

ResourceService.prototype.listRelated = function(callback) {

    var _this = this;
    var _data;
    var _dataRelated;

    this.async.waterfall([
        function callOne(callTwo) {
            _this.repo.list(callTwo);
        },
        function callTwo(data, callThree) {
            _data = data;
            _this.repoRelated.list(callThree);
        },
        function callThree(data, lastCall) {
            _dataRelated = data;
            lastCall();
        },
        function lastCall() {
            for (var i = 0; i < _data.length; i++) {
                for (var j = 0; j < _dataRelated.length; j++) {
                    if (_data[i].id == _dataRelated[j].idResource) {
                        if (_data[i].child == undefined) {
                            _data[i].child = [];
                        }
                        _data[i].child.push(_dataRelated[j]);
                    }
                }
            }

            callback(null, _data);
        },
    ], function(err, result) {
        callback(err, []);
    });
}

module.exports = ResourceService;