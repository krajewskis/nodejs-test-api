'use strict';

var di = require('di');
var injectorConfig = require('../../../src/injector');
var injector = new di.Injector([injectorConfig]);
var assert = require('assert');

injector.invoke(function(ResourceRepo) {

    describe('ResourceRepoTest', function() {
        before(function() {

        });

        it('list', function(done) {
                ResourceRepo.list(function(err, data) {
                    assert.equal(data.length > 0, true);
                    assert.equal(err, null);
                    done();
                });
            }
        );

        it('listUndefinedFileName', function(done) {
                ResourceRepo._filename = undefined;
                assert.throws(ResourceRepo.list(function(err, data) {
                    done();
                }), Error);
            }
        );

        it('listBadFileName', function(done) {
                ResourceRepo._filename = '';
                assert.throws(ResourceRepo.list(function(err, data) {
                    done();
                }), Error);
            }
        );

        it('listBrokenSource', function(done) {
                ResourceRepo._filename = 'resource-broken.json';
                assert.throws(ResourceRepo.list(function(err, data) {
                    done();
                }), Error);
            }
        );
    });
});