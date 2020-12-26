const myLogger = function (req, res, next) {
  let a = new Date();
  b = a.getDay();
  c = a.getHours();
  if (b != 7 && b != 0 && c >= 9 && c <= 17) next();
};

module.exports = myLogger;
