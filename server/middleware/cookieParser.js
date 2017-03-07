var createSession = require('./sessionParser');

var parseCookies = function(req, res, next) {
  console.log('C is for Cookie: ', req.headers.cookie);
  var cookieString = req.headers.cookie;
  if (cookieString) {
    var cookieArray = cookieString.split(';');
    cookieArray.forEach(function(cookie) {
      var hash = cookie.split('=');
      req.cookies[hash[0].trim()] = hash[1];
    });
  }
  createSession(req, res, next);
};

module.exports = parseCookies;