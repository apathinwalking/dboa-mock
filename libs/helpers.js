var _ = require('lodash');
var moment = require('moment');
require('moment-range');

exports.getDatesInRange = function(start,end){
    "use strict";
    var range = moment.range(start,end);
    var pop = [];
    range.by('days',function(m){
        pop.push(m);
    });
    return pop;
};

exports.bindMethods = function(constructor,methods){
    "use strict";
    _.forEach(methods,function(val,key){
        constructor.prototype[key] = val;
    });
};
