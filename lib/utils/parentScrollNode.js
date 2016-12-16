'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getStyle = function getStyle(node, attr) {
  return node.style[attr] || getComputedStyle(node, null).getPropertyValue(attr);
};

var getOverflowStyle = function getOverflowStyle(node) {
  return getStyle(node, 'overflow') + getStyle(node, 'overflow-y');
};

exports.default = function (node) {
  var parent = node;

  while (parent) {
    if (!parent.offsetParent) break;

    if (/scroll|auto/.test(getOverflowStyle(parent))) break;

    parent = parent.parentNode;
  }

  return parent;
};