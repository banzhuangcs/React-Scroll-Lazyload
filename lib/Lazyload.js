'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _eventListeners = require('./utils/eventListeners');

var _throttle = require('./utils/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _parentScrollNode = require('./parentScrollNode');

var _parentScrollNode2 = _interopRequireDefault(_parentScrollNode);

var _inVisualNode = require('./inVisualNode');

var _inVisualNode2 = _interopRequireDefault(_inVisualNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lazyload = function (_Component) {
  _inherits(Lazyload, _Component);

  function Lazyload(props) {
    _classCallCheck(this, Lazyload);

    var _this = _possibleConstructorReturn(this, (Lazyload.__proto__ || Object.getPrototypeOf(Lazyload)).call(this, props));

    _this.state = { visible: 'pending' };
    _this.style = {
      opacity: 0,
      transition: 'opacity .35s linear'
    };

    _this.lazyloadHandler = (0, _throttle2.default)(function () {
      if ((0, _inVisualNode2.default)(_this.node, _this.parentScrollNode)) {
        _this.setState({ visible: 'loading' });
        _this.removeListener();
      }
    }, 300, 300);
    return _this;
  }

  _createClass(Lazyload, [{
    key: 'addListener',
    value: function addListener() {
      (0, _eventListeners.add)(this.scrollNode, 'scroll', this.lazyloadHandler);
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      (0, _eventListeners.remove)(this.scrollNode, 'scroll', this.lazyloadHandler);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextState.visible === 'loading';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          nodeName = _props.nodeName,
          width = _props.width,
          height = _props.height,
          children = _props.children;

      var isLoadingState = this.state.visible === 'loading';
      var style = Object.assign({}, this.style, { width: width, height: height }, { opacity: isLoadingState ? 1 : 0 });

      return _react2.default.createElement(nodeName, {
        style: style
      }, isLoadingState && _react.Children.only(children));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = (0, _reactDom.findDOMNode)(this);
      this.parentScrollNode = (0, _parentScrollNode2.default)(this.node);

      this.lazyloadHandler();
      this.addListener();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListener();
    }
  }]);

  return Lazyload;
}(_react.Component);

exports.default = Lazyload;
;

Lazyload.PropTypes = {
  nodeName: _react.PropTypes.string,
  height: _react.PropTypes.number.isRequired,
  width: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.node.isRequired
};

Lazyload.defaultProps = {
  nodeName: 'div'
};