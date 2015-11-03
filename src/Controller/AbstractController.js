'use strict';

var AbstractController = function() {
    this.__sendRespose = this.__sendRespose.bind(this);
}

AbstractController.prototype.__sendRespose = function(res, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
}

module.exports = AbstractController;