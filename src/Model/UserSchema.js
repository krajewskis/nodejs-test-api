'use strict';

var UserSchema = function(mongoose) {
    return new mongoose.Schema({
        isid: String,
        email: String
    });
}

module.exports = UserSchema;