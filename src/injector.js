'use strict';

module.exports = {

    'util': ['value', require('util')],
    'extend': ['value', require('extend')],
    'express': ['value', require('express')],
    'fs': ['value', require('fs')],
    'async': ['value', require('async')],

    'mongoose': ['factory', require('./mongoose')],
    'app': ['factory', require('./app')],

    'AbstractController': ['type', require('./Controller/AbstractController')],
    'ErrorController': ['type', require('./Controller/ErrorController')],

    'IndexController': ['type', require('./Controller/IndexController')],

    'ResourceController': ['type', require('./Controller/ResourceController')],
    'ResourceService': ['type', require('./Service/ResourceService')],
    'ResourceRepo': ['type', require('./Repo/ResourceRepo')],
    'ResourceRelatedRepo': ['type', require('./Repo/ResourceRelatedRepo')],

    'AbstractRepo': ['type', require('./Repo/AbstractRepo')],

    'UserController': ['type', require('./Controller/UserController')],
    'UserRepo': ['type', require('./Repo/UserRepo')],
    'UserSchema': ['type', require('./Model/UserSchema')],
    'User': ['factory', require('./Model/User')],

};