var Q = require('q');

exports.test = function(tableName){
    "use strict";
    var deferred = Q.defer();
    this.knex.select()
        .from(tableName)
        .then(function(results){
           deferred.resolve(results);
        });
    return deferred.promise;
};

exports.test2 = function(tableName){
    "use strict";
    var deferred = Q.defer();
    var model = this.bookshelf.Model.extend({'tableName':tableName});
    model.fetchAll()
        .then(function(model){
           deferred.resolve(model);
        });
    return deferred.promise;
};