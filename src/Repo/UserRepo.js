'use strict';

var UserRepo = function(User) {

    this.user = User;
    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
};

UserRepo.prototype.list = function(callback) {
    this.user.find({}, callback);
}

UserRepo.prototype.get = function(isid, callback) {
    this.user.findOne({isid: isid}, callback);
}

module.exports = UserRepo;