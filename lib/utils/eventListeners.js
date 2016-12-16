'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function bind(standard, ie) {
  return function (node, eventName, handler) {
    if (node[standard]) node[standard][(eventName, handler, 'false')];else if (node[ie]) node[ie][('on' + eventName, handler)];
  };
}

var add = exports.add = bind('addEventListener', 'attachEvent');
var remove = exports.remove = bind('removeEventListener', 'detachEvent');