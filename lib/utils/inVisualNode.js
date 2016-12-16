"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, parentScrollNode) {
  var scrollTop = window.pageYOffset;
  var nodeTop = node.getBoundingClientRect().top + scrollTop;
  var parentClientRect = parentScrollNode.getBoundingClientRect();
  var parentTop = parentClientRect.top + scrollTop;

  var actualTop = nodeTop - parentTop - scrollTop;

  return actualTop < parentClientRect.height;
};