var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here

var addUser = function(userParams) { 
  console.log('addUser model');

  // TO DO HASH PASSWORD BEFORE STORING
  var queryString = 'INSERT INTO users (username, password)\
                      VALUES (?, ?)';
  return db.queryAsync(queryString, [userParams.username, userParams.password]);
};

module.exports = {
  addUser: addUser
};
