'use strict';


var ResourceRepo = function(extend, AbstractRepo) {
    this._filename = 'resource.json';
    extend(this, AbstractRepo);
};


//var ResourceRepo = function(fs) {
//    this.fs = fs;
//    this._filename = 'resource.json';
//
//    this.list = this.list.bind(this);
//};
//
//ResourceRepo.prototype.list = function(callback) {
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
//
//    this.fs.readFile(this._filename, 'utf8', readFileCallback);
//}


module.exports = ResourceRepo;