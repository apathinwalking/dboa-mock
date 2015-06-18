var knex = require('knex')({client:'pg',connection:"postgresql://postgres:Fast4Tree4@localhost:5432/test_db"});
var bookshelf = require('bookshelf')(knex);

exports.data = require('./libs/data.js');



