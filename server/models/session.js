var db = require('../db');
var util = require('../lib/utility');

// Write you session database model methods here

var insertSession = function(sessionParams) {
  var queryString = 'INSERT INTO sessions (hash, user_id)\
                      VALUES (?, SELECT id from USERS WHERE username = ?)';
  return db.queryAsync(queryString, sessionParams);
};

module.exports = {
  insertSession: insertSession
};
