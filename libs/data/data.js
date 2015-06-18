var _ = require('lodash');
var moment = require('moment');
require('moment-range');
var help = require('./../helpers.js');

exports.getDates = function(start,end,n){
    "use strict";
    var pool = help.getDatesInRange(start,end);
};