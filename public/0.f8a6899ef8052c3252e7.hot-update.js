webpackHotUpdate(0,{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(12), RootInstanceProvider = __webpack_require__(13), ReactMount = __webpack_require__(9), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _blogList = __webpack_require__(149);

var _blogList2 = _interopRequireDefault(_blogList);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _oauth = __webpack_require__(152);

var _oauth2 = _interopRequireDefault(_oauth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blog = function (_Component) {
  _inherits(Blog, _Component);

  function Blog(props) {
    _classCallCheck(this, Blog);

    var _this = _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Blog, [{
    key: 'getBlogs',
    value: function getBlogs() {
      fetch('https://api.medium.com/v1/users/' + _oauth2.default.userId + '/publications', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + auth.secret,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        console.log('here is the response: ', res);
      }).catch(function (err) {
        console.error('here is the error: ', err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getBlogs();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'blog' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'p',
              { className: 'blog-header' },
              'Ariel Salem'
            ),
            _react2.default.createElement(
              'p',
              { className: 'blog-description' },
              ' Lover of Tech, Programming, and all things JavaScript '
            )
          ),
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_blogList2.default, null)
        )
      );
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(16); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "blog.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9nLmpzP2IwZTIiXSwibmFtZXMiOlsiQmxvZyIsInByb3BzIiwic3RhdGUiLCJmZXRjaCIsInVzZXJJZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdXRoIiwic2VjcmV0IiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImdldEJsb2dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBQ25CLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7OytCQUVVO0FBQ1RDLGlEQUF5QyxnQkFBTUMsTUFBL0Msb0JBQXNFO0FBQ3BFQyxnQkFBUSxLQUQ0RDtBQUVwRUMsaUJBQVM7QUFDUCx1Q0FBMkJDLEtBQUtDLE1BRHpCO0FBRVAsb0JBQVUsa0JBRkg7QUFHUCwwQkFBZ0Isa0JBSFQ7QUFJUCw0QkFBa0I7QUFKWDtBQUYyRCxPQUF0RSxFQVNDQyxJQVRELENBU00sVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLElBQUlDLElBQUosRUFBVDtBQUFBLE9BVE4sRUFVQ0YsSUFWRCxDQVVNLFVBQUNDLEdBQUQsRUFBUztBQUNiRSxnQkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDSCxHQUF0QztBQUNELE9BWkQsRUFhQ0ksS0FiRCxDQWFPLFVBQUNDLEdBQUQsRUFBUztBQUNkSCxnQkFBUUksS0FBUixDQUFjLHFCQUFkLEVBQXFDRCxHQUFyQztBQUNELE9BZkQ7QUFnQkQ7Ozt3Q0FFbUI7QUFDbEIsV0FBS0UsUUFBTDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLGFBQWI7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxrQkFBYjtBQUFBO0FBQUE7QUFGRixXQURGO0FBS0U7QUFMRixTQURGO0FBUUUsaURBUkY7QUFTRTtBQUFBO0FBQUE7QUFDRTtBQURGO0FBVEYsT0FERjtBQWVEOzs7Ozs7a0JBN0NrQmpCLEkiLCJmaWxlIjoiMC5mOGE2ODk5ZWY4MDUyYzMyNTJlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dMaXN0IGZyb20gJy4vYmxvZ0xpc3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgb2F1dGggZnJvbSAnLi4vLi4vcHVibGljL29hdXRoLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fVxyXG4gIH1cclxuXHJcbiAgZ2V0QmxvZ3MoKSB7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkubWVkaXVtLmNvbS92MS91c2Vycy8ke29hdXRoLnVzZXJJZH0vcHVibGljYXRpb25zYCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aC5zZWNyZXR9YCxcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0FjY2VwdC1DaGFyc2V0JzogJ3V0Zi04J1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2hlcmUgaXMgdGhlIHJlc3BvbnNlOiAnLCByZXMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2hlcmUgaXMgdGhlIGVycm9yOiAnLCBlcnIpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRCbG9ncygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dcIj5cclxuICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2ctaGVhZGVyXCI+QXJpZWwgU2FsZW08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2ctZGVzY3JpcHRpb25cIj4gTG92ZXIgb2YgVGVjaCwgUHJvZ3JhbW1pbmcsIGFuZCBhbGwgdGhpbmdzIEphdmFTY3JpcHQgPC9wPlxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJsb2dMaXN0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYmxvZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=