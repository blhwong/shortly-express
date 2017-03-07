// var Sessions = require('../models/session');
var createSession = require('./sessionParser');

var parseCookies = function(req, res, next) {
  console.log('C is for Cookie: ', req.headers.cookie);
  var cookieString = req.headers.cookie;
  // console.log('req cookie', req.head)
  if (cookieString) {
    var cookieArray = cookieString.split(';');
    // console.log('A single: ', cookieArray);
    cookieArray.forEach(function(cookie) {
      var hash = cookie.split('=');
      // console.log('hash', hash);
      req.cookies[hash[0].trim()] = hash[1];
      // IDEA:
      // save user id and hash? into sessions database
      // Sessions.insertSession([hash[1], hash[0]]);
    });
    createSession(req, res, next);
    // console.log('hans test', req.cookies);
  }
  // if there are no cookies call next
  // else call sessionParser
  // next('');
  // if (req.cookies) {
  //   createSession(req, res, next);
  // } else {
  //   next();
  // }
  next();
};

module.exports = parseCookies;

// do we need to add it to the session db at this point??? our initial thought was no.

// var shasum = crypto.createHash('sha1');
// shasum.update(userParams[1]);
// userParams[1] = shasum.digest('hex');