'use strict';

var User = function(mongoose, UserSchema) {
    return mongoose.model('User', UserSchema);
}

module.exports = User;