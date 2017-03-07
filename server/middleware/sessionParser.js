var Sessions = require('../models/session');
var util = require('../lib/utility');

var createSession = function(req, res, next) {
  next();
};

module.exports = createSession;
