"use strict";
exports.__esModule = true;
exports.getName =
  exports.introduce =
  exports.fetchData =
  exports.format =
  exports.addStrings =
    void 0;
function add(a, b) {
  return a + b;
}
exports["default"] = add;
var addStrings = function (str1, str2) {
  return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
var format = function (title, param) {
  return "".concat(title, " ").concat(param);
};
exports.format = format;
var fetchData = function (url) {
  return Promise.resolve("Data fetched from ".concat(url));
};
exports.fetchData = fetchData;
var introduce = function (salutation) {
  var names = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    names[_i - 1] = arguments[_i];
  }
  return "".concat(salutation, " ").concat(names.join(" "));
};
exports.introduce = introduce;
var getName = function (first, last) {
  return "".concat(first ?? "first", " ").concat(last ?? "last");
};
exports.getName = getName;
