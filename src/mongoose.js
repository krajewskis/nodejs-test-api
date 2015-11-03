'use strict';

var mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost/test');
    return mongoose;
};