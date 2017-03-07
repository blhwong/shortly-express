var db = require('../db');
var utils = require('../lib/utility');
var crypto = require('crypto');

// Write you user database model methods here

var insertId = function(userParams) { 
  console.log('addUser model');
  var shasum = crypto.createHash('sha1');
  shasum.update(userParams[1]);
  userParams[1] = shasum.digest('hex');
  var queryString = 'INSERT INTO users (username, password)\
                      VALUES (?, ?)';
  return db.queryAsync(queryString, userParams);
};

var findUser = function(userParams) {
  var queryString = 'SELECT * FROM users\
                      WHERE username = ? AND password = ?';
  return db.queryAsync(queryString, userParams);
};

module.exports = {
  insertId: insertId,
  findUser: findUser
};
