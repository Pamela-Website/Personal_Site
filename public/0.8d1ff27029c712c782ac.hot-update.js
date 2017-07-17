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
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9nLmpzP2IwZTIiXSwibmFtZXMiOlsiQmxvZyIsInByb3BzIiwic3RhdGUiLCJmZXRjaCIsInVzZXJJZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiZ2V0QmxvZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7K0JBRVU7QUFDVEMsaURBQXlDLGdCQUFNQyxNQUEvQyxvQkFBc0U7QUFDcEVDLGdCQUFRLEtBRDREO0FBRXBFQyxpQkFBUztBQUNQLG9CQUFVLGtCQURIO0FBRVAsMEJBQWdCO0FBRlQ7QUFGMkQsT0FBdEUsRUFPQ0MsSUFQRCxDQU9NLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxJQUFJQyxJQUFKLEVBQVQ7QUFBQSxPQVBOLEVBUUNGLElBUkQsQ0FRTSxVQUFDQyxHQUFELEVBQVM7QUFDYkUsZ0JBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0gsR0FBdEM7QUFDRCxPQVZELEVBV0NJLEtBWEQsQ0FXTyxVQUFDQyxHQUFELEVBQVM7QUFDZEgsZ0JBQVFJLEtBQVIsQ0FBYyxxQkFBZCxFQUFxQ0QsR0FBckM7QUFDRCxPQWJEO0FBY0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0UsUUFBTDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLGFBQWI7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxrQkFBYjtBQUFBO0FBQUE7QUFGRixXQURGO0FBS0U7QUFMRixTQURGO0FBUUUsaURBUkY7QUFTRTtBQUFBO0FBQUE7QUFDRTtBQURGO0FBVEYsT0FERjtBQWVEOzs7Ozs7a0JBM0NrQmYsSSIsImZpbGUiOiIwLjhkMWZmMjcwMjljNzEyYzc4MmFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZ0xpc3QgZnJvbSAnLi9ibG9nTGlzdCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBvYXV0aCBmcm9tICcuLi8uLi9wdWJsaWMvb2F1dGguanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9XHJcbiAgfVxyXG5cclxuICBnZXRCbG9ncygpIHtcclxuICAgIGZldGNoKGBodHRwczovL2FwaS5tZWRpdW0uY29tL3YxL3VzZXJzLyR7b2F1dGgudXNlcklkfS9wdWJsaWNhdGlvbnNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdoZXJlIGlzIHRoZSByZXNwb25zZTogJywgcmVzKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdoZXJlIGlzIHRoZSBlcnJvcjogJywgZXJyKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZ2V0QmxvZ3MoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nXCI+XHJcbiAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9nLWhlYWRlclwiPkFyaWVsIFNhbGVtPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9nLWRlc2NyaXB0aW9uXCI+IExvdmVyIG9mIFRlY2gsIFByb2dyYW1taW5nLCBhbmQgYWxsIHRoaW5ncyBKYXZhU2NyaXB0IDwvcD5cclxuICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCbG9nTGlzdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jsb2cuanMiXSwic291cmNlUm9vdCI6IiJ9