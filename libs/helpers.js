var moment = require('moment');
require('moment-range');

exports.getDatesInRange = function(start,end){
    var range = moment.range(start,end);
    var pop = [];
    range.by('days',function(m){
        pop.push(m);
    });
    return pop;
};
