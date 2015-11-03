'use strict';

//#1
function IndexController() {
    this.index = this.index.bind(this);
}

IndexController.prototype.setApp = function(app) {
    console.log();
}

IndexController.prototype.index = function(req, res) {
    res.end('IndexController.index');
}

module.exports = IndexController;