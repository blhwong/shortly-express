var Sessions = require('../models/session');
var util = require('../lib/utility');

var createSession = function(req, res, next) {
  // console.log('request', req);
  console.log('response', res.cookie);
  console.log('And cookie is for me ', req.cookies);
  // res.cookie = req.cookies[hash[0].trim()] = hash[1];
  req.session = {hash: 0};
  next();
};

module.exports = createSession;


// how to set cookies
  //use res.cookie function

// look at next so that cookie parser is called first
  // ???