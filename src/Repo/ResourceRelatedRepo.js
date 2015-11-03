'use strict';


var ResourceRelatedRepo = function(extend, AbstractRepo) {
    this._filename = 'resource-related.json';
    extend(this, AbstractRepo);
};

//var ResourceRelatedRepo = function(fs) {
//    this.fs = fs;
//    this.__filename = 'resource-related.json';
//
//    this.list = this.list.bind(this);
//};
//
//ResourceRelatedRepo.prototype.list = function(callback) {
//    var readFileCallback = function(error, data) {
//        if (!error) {
//            try {
//                data = JSON.parse(data);
//            }
//            catch (err) {
//                error = err;
//            }
//        }
//        callback(error, data);
//    };
//    this.fs.readFile(this.__filename, 'utf8', readFileCallback);
//}

module.exports = ResourceRelatedRepo;