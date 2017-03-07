var parseCookies = function(req, res, next) {
  console.log('C is for Cookie: ', req.headers.cookie);
  var cookieString = req.headers.cookie;
  if (cookieString) {
    var cookieArray = cookieString.split(';');
    // console.log('A single: ', cookieArray);
    cookieArray.forEach(function(cookie) {
      var hash = cookie.split('=');
      // console.log('hash', hash);
      req.cookies[hash[0].trim()] = hash[1];
    });
  }
  next();
};

module.exports = parseCookies;



// var shasum = crypto.createHash('sha1');
// shasum.update(userParams[1]);
// userParams[1] = shasum.digest('hex');