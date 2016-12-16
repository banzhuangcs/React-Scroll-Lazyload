"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (handler, delay, mustDelay) {
  var timer = void 0,
      startTime = void 0;

  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var currTime = Date.now();
    clearTimeout(timer);

    if (!startTime) startTime = currTime;

    // 当前执行时间超过了上一次执行时间，就执行handler
    if (mustDelay && currTime - startTime >= mustDelay) {
      startTime = currTime;
      handler.apply(this, args);
    }

    timer = setTimeout(function () {
      handler.apply(_this, args);
    }, delay);
  };
};