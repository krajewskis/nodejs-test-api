'use strict';

var AbstractRepo = function(fs) {
    this.fs = fs;
    //this.list = this.list.bind(this);
};

AbstractRepo.prototype.list = function(callback) {

    var readFileCallback = function(error, data) {
        if (!error) {
            try {
                data = JSON.parse(data);
            }
            catch (err) {
                error = err;
            }
        }
        return callback(error, data);
    };

    this.fs.readFile(this._filename, 'utf8', readFileCallback);

}

module.exports = AbstractRepo;