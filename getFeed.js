/*jslint node: true */
"use strict";

module.exports = function(mergeWithDefaults, api, ctx) {
    return function getFeed(callback) {
        return ctx.userId;
    };
};
