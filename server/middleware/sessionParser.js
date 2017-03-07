var Sessions = require('../models/session');
var util = require('../lib/utility');

var createSession = function(req, res, next) {
  console.log(req);
  console.log('And cookie is for me ', req.cookies);
  req.session = {hash: 0};
  next();
};

module.exports = createSession;
