var help = require('./libs/helpers.js');

function DboaMock(conn_str){
    "use strict";
    var self = this;
    self.knex = require('knex')({client:'pg',connection:conn_str});
    self.bookshelf = require('bookshelf')(self.knex);
}

help.bindMethods(DboaMock,require('./libs/db/db.js'));

DboaMock.prototype.data = require('./libs/data/data.js');

module.exports = function(conn_str){
    "use strict";
    return new DboaMock(conn_str);
};

