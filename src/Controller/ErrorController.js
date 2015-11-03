'use strict';

var ErrorController = function() {
}

ErrorController.prototype.checkError = function(error, res, data) {
    if (error) {
        console.error(error, data);
        res.send('ErrorController.checkError.fail', 500);
        return true;
    }
    return false;
}

module.exports = ErrorController;