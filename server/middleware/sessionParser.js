var Sessions = require('../models/session');
var util = require('../lib/utility');

var isEmpty = function(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

var createSession = function(req, res, next) {
  // console.log('request', req);
  // console.log('response', res.cookie);
  console.log('And cookie is for me ', req.cookies);
  // res.cookie = req.cookies[hash[0].trim()] = hash[1];
  // res.cookie(req.cookies[], req.cookies[1]);
  // if (isEmpty(req.cookies)) {
  //   req.session = {hash: 0};
  //   // res.cookie('hash', 0);
  // } else {
  //   for (var name in req.cookies) {
  //     console.log('name', name);
  //     res.cookie(name, req.cookies[name]);
  //   }
  //   console.log('fred', req);
  // }
  var agent = req.get('User-Agent');
  var hashedAgent = 1;
  if (!req.cookies.shortlyid) {
    Sessions.insertSession([hashedAgent, req.body.username]);
    res.cookie('shortlyid', hashedAgent);
    req.session = {hash: hashedAgent};
  } else {
    // select userid from sessions where hash = req.cookie.shortly

  }

  next();
};

module.exports = createSession;


// how to set cookies
  //use res.cookie function

// look at next so that cookie parser is called first
  // ???