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
          'Authorization': 'Bearer ' + _oauth2.default.secret,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9nLmpzP2IwZTIiXSwibmFtZXMiOlsiQmxvZyIsInByb3BzIiwic3RhdGUiLCJmZXRjaCIsInVzZXJJZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJzZWNyZXQiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiZ2V0QmxvZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7K0JBRVU7QUFDVEMsaURBQXlDLGdCQUFNQyxNQUEvQyxvQkFBc0U7QUFDcEVDLGdCQUFRLEtBRDREO0FBRXBFQyxpQkFBUztBQUNQLHVDQUEyQixnQkFBTUMsTUFEMUI7QUFFUCxvQkFBVSxrQkFGSDtBQUdQLDBCQUFnQixrQkFIVDtBQUlQLDRCQUFrQjtBQUpYO0FBRjJELE9BQXRFLEVBU0NDLElBVEQsQ0FTTSxVQUFDQyxHQUFEO0FBQUEsZUFBU0EsSUFBSUMsSUFBSixFQUFUO0FBQUEsT0FUTixFQVVDRixJQVZELENBVU0sVUFBQ0MsR0FBRCxFQUFTO0FBQ2JFLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NILEdBQXRDO0FBQ0QsT0FaRCxFQWFDSSxLQWJELENBYU8sVUFBQ0MsR0FBRCxFQUFTO0FBQ2RILGdCQUFRSSxLQUFSLENBQWMscUJBQWQsRUFBcUNELEdBQXJDO0FBQ0QsT0FmRDtBQWdCRDs7O3dDQUVtQjtBQUNsQixXQUFLRSxRQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLFdBQVUsYUFBYjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLGtCQUFiO0FBQUE7QUFBQTtBQUZGLFdBREY7QUFLRTtBQUxGLFNBREY7QUFRRSxpREFSRjtBQVNFO0FBQUE7QUFBQTtBQUNFO0FBREY7QUFURixPQURGO0FBZUQ7Ozs7OztrQkE3Q2tCaEIsSSIsImZpbGUiOiIwLjBlYjQzZGI3MGFiYzI1MDZlNmFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZ0xpc3QgZnJvbSAnLi9ibG9nTGlzdCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBvYXV0aCBmcm9tICcuLi8uLi9wdWJsaWMvb2F1dGguanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9XHJcbiAgfVxyXG5cclxuICBnZXRCbG9ncygpIHtcclxuICAgIGZldGNoKGBodHRwczovL2FwaS5tZWRpdW0uY29tL3YxL3VzZXJzLyR7b2F1dGgudXNlcklkfS9wdWJsaWNhdGlvbnNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtvYXV0aC5zZWNyZXR9YCxcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0FjY2VwdC1DaGFyc2V0JzogJ3V0Zi04J1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2hlcmUgaXMgdGhlIHJlc3BvbnNlOiAnLCByZXMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2hlcmUgaXMgdGhlIGVycm9yOiAnLCBlcnIpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRCbG9ncygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dcIj5cclxuICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2ctaGVhZGVyXCI+QXJpZWwgU2FsZW08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2ctZGVzY3JpcHRpb25cIj4gTG92ZXIgb2YgVGVjaCwgUHJvZ3JhbW1pbmcsIGFuZCBhbGwgdGhpbmdzIEphdmFTY3JpcHQgPC9wPlxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJsb2dMaXN0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYmxvZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=