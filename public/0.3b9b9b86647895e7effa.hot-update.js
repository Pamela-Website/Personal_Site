webpackHotUpdate(0,{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(15), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(9), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentProjects = function (_Component) {
  _inherits(CurrentProjects, _Component);

  function CurrentProjects() {
    _classCallCheck(this, CurrentProjects);

    return _possibleConstructorReturn(this, (CurrentProjects.__proto__ || Object.getPrototypeOf(CurrentProjects)).apply(this, arguments));
  }

  _createClass(CurrentProjects, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "portfolio", className: "project-info" },
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-md-3 offset-md-1 col-sm-11 project-body" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "https://organico-plantr.herokuapp.com" },
                _react2.default.createElement("img", { className: "project-picture", src: "../../public/img/Plantr.jpg" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "div",
                { className: "project-info" },
                _react2.default.createElement(
                  "p",
                  { className: "project-name" },
                  "PLANTR"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "project-description" },
                  _react2.default.createElement(
                    "p",
                    null,
                    "Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs."
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "project-role" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "ROLE: "
                    ),
                    _react2.default.createElement(
                      "i",
                      null,
                      "Scrum Master"
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-3 col-sm-11 project-body" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "https://stackets-orion.herokuapp.com" },
                _react2.default.createElement("img", { className: "project-picture", src: "../../public/img/Stackets.jpg" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "div",
                { className: "project-info" },
                _react2.default.createElement(
                  "p",
                  { className: "project-name" },
                  "STACKETS"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "project-description" },
                  _react2.default.createElement(
                    "p",
                    null,
                    "Stackets is a personalized programming assistant that allows users to work through, solve, and store helpful tips and tricks for becoming a computer programming."
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "project-role" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "ROLE: "
                    ),
                    _react2.default.createElement(
                      "i",
                      null,
                      "Product Owner"
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-3 col-sm-11 project-body" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "a",
                { target: "_blank", href: "https://organico-plantr.herokuapp.com" },
                _react2.default.createElement("img", { className: "project-picture", src: "../../public/img/Thymer.jpg" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "div",
                { className: "project-info" },
                _react2.default.createElement(
                  "p",
                  { className: "project-name" },
                  "THYMER"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "project-description" },
                  _react2.default.createElement(
                    "p",
                    null,
                    "Thymer is the personal Sous Chef you never knew you needed. From automated timers that keep you on track, to vocalized recipes, this app makes cooking fun and easy. "
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "project-role" },
                    _react2.default.createElement(
                      "b",
                      null,
                      "ROLE: "
                    ),
                    _react2.default.createElement(
                      "i",
                      null,
                      "Software Engineer"
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CurrentProjects;
}(_react.Component);

// ALTERNATIVE LOOK
/*      <div>
        <div className="row project-body-right">
          <div className="col-md-4 col-sm-12">
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/Plantr.png" />
            </a>
          </div>
          <div className="col-md-8 col-sm-12">
            <br />
            <div id="portfolio" className="project-info">
              <p className="project-name">PLANTR</p>
              <div className="project-description">
                <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
                <div className="project-role">
                  <b>ROLE: </b>
                  <i>Scrum Master</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row project-body-left">
          <div className="col-md-7 col-sm-12">
            <br />
            <p className="project-name">STACKETS</p>
            <div className="project-description">
              <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
              <div className="project-role">
                <b>ROLE: </b>
                <i>Product Owner</i>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-md-1 offset-sm-0 col-sm-12">
            <a href="https://stackets-orion.herokuapp.com">
              <img className="project-picture-right" src="../../public/img/Stackets.png" />
            </a>
          </div>
        </div>
        <div className="row project-body-right">
          <div className="col-md-4 col-sm-12">
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/thymer.jpg" />
            </a>
          </div>
          <div className="col-md-8 col-sm-12">
            <br />
            <p className="project-name">THYMER</p>
            <div className="project-description">
              <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs. </p>
              <div className="project-role">
                <b>ROLE: </b>
                <i>Software Engineer</i>
              </div>
            </div>
          </div>
        </div>
      </div>
*/


exports.default = CurrentProjects;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "currentProjects.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXJyZW50UHJvamVjdHMuanM/YjlmNyJdLCJuYW1lcyI6WyJDdXJyZW50UHJvamVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7OzZCQUVWO0FBQ1AsYUFDQztBQUFBO0FBQUEsVUFBSyxJQUFHLFdBQVIsRUFBb0IsV0FBVSxjQUE5QjtBQUNDO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsNkNBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFFBQU8sUUFBVixFQUFvQixNQUFLLHVDQUF6QjtBQUNDLHVEQUFLLFdBQVUsaUJBQWYsRUFBaUMsS0FBSSw2QkFBckM7QUFERDtBQURGLGFBREY7QUFNRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQ0MsdURBREQ7QUFFQztBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFHLFdBQVUsY0FBYjtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUZGO0FBRkY7QUFGRDtBQU5GLFdBREY7QUFxQkU7QUFBQTtBQUFBLGNBQUssV0FBVSxpQ0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFBcUI7QUFBQTtBQUFBLGtCQUFHLFFBQU8sUUFBVixFQUFtQixNQUFLLHNDQUF4QjtBQUNsQix1REFBSyxXQUFVLGlCQUFmLEVBQWlDLEtBQUksK0JBQXJDO0FBRGtCO0FBQXJCLGFBREY7QUFLRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQ0MsdURBREQ7QUFFQztBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0E7QUFBQTtBQUFBLG9CQUFHLFdBQVUsY0FBYjtBQUFBO0FBQUEsaUJBREE7QUFFQTtBQUFBO0FBQUEsb0JBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUZGO0FBRkE7QUFGRDtBQUxGLFdBckJGO0FBd0NFO0FBQUE7QUFBQSxjQUFLLFdBQVUsaUNBQWY7QUFDSTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQXFCO0FBQUE7QUFBQSxrQkFBRyxRQUFPLFFBQVYsRUFBbUIsTUFBSyx1Q0FBeEI7QUFDbEIsdURBQUssV0FBVSxpQkFBZixFQUFpQyxLQUFJLDZCQUFyQztBQURrQjtBQUFyQixhQURKO0FBSUk7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNDLHVEQUREO0FBRUM7QUFBQTtBQUFBLGtCQUFLLFdBQVUsY0FBZjtBQUNBO0FBQUE7QUFBQSxvQkFBRyxXQUFVLGNBQWI7QUFBQTtBQUFBLGlCQURBO0FBRUE7QUFBQTtBQUFBLG9CQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBRUU7QUFBQTtBQUFBLHNCQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFGRjtBQUZBO0FBRkQ7QUFKSjtBQXhDRjtBQURELE9BREQ7QUErREQ7Ozs7OztBQUdIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBdEVxQkEsZSIsImZpbGUiOiIwLjNiOWI5Yjg2NjQ3ODk1ZTdlZmZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudFByb2plY3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvXCIgY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBvZmZzZXQtbWQtMSBjb2wtc20tMTEgcHJvamVjdC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vb3JnYW5pY28tcGxhbnRyLmhlcm9rdWFwcC5jb21cIj5cclxuICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1waWN0dXJlXCIgc3JjPVwiLi4vLi4vcHVibGljL2ltZy9QbGFudHIuanBnXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LW5hbWVcIj5QTEFOVFI8L3A+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgPHA+UGxhbnRyIGlzIGFuIG9ubGluZSBnYXJkZW5pbmcgYW5kIG91dGRvb3IgZGVjb3Igc2VydmljZSB3aGVyZSB5b3UgY2FuIGNyZWF0ZSBhbmQgcGxhbiB5b3VyIHNlYXNvbmFsIGdhcmRlbnMgYmFzZWQgb24gcmVnaW9uYWwgdmFyaWF0aW9ucyBhbmQgcGVyc29uYWwgbmVlZHMuPC9wPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtcm9sZVwiPlxyXG4gICAgICAgICAgICAgICAgIDxiPlJPTEU6IDwvYj5cclxuICAgICAgICAgICAgICAgICA8aT5TY3J1bSBNYXN0ZXI8L2k+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLXNtLTExIHByb2plY3QtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9zdGFja2V0cy1vcmlvbi5oZXJva3VhcHAuY29tXCI+XHJcbiAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2plY3QtcGljdHVyZVwiIHNyYz1cIi4uLy4uL3B1YmxpYy9pbWcvU3RhY2tldHMuanBnXCIgLz5cclxuICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW5mb1wiPlxyXG4gICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2plY3QtbmFtZVwiPlNUQUNLRVRTPC9wPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgPHA+U3RhY2tldHMgaXMgYSBwZXJzb25hbGl6ZWQgcHJvZ3JhbW1pbmcgYXNzaXN0YW50IHRoYXQgYWxsb3dzIHVzZXJzIHRvIHdvcmsgdGhyb3VnaCwgc29sdmUsIGFuZCBzdG9yZSBoZWxwZnVsIHRpcHMgYW5kIHRyaWNrcyBmb3IgYmVjb21pbmcgYSBjb21wdXRlciBwcm9ncmFtbWluZy48L3A+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtcm9sZVwiPlxyXG4gICAgICAgICAgICAgICA8Yj5ST0xFOiA8L2I+XHJcbiAgICAgICAgICAgICAgIDxpPlByb2R1Y3QgT3duZXI8L2k+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS0xMSBwcm9qZWN0LWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9vcmdhbmljby1wbGFudHIuaGVyb2t1YXBwLmNvbVwiPlxyXG4gICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2plY3QtcGljdHVyZVwiIHNyYz1cIi4uLy4uL3B1YmxpYy9pbWcvVGh5bWVyLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICA8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LW5hbWVcIj5USFlNRVI8L3A+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgPHA+VGh5bWVyIGlzIHRoZSBwZXJzb25hbCBTb3VzIENoZWYgeW91IG5ldmVyIGtuZXcgeW91IG5lZWRlZC4gRnJvbSBhdXRvbWF0ZWQgdGltZXJzIHRoYXQga2VlcCB5b3Ugb24gdHJhY2ssIHRvIHZvY2FsaXplZCByZWNpcGVzLCB0aGlzIGFwcCBtYWtlcyBjb29raW5nIGZ1biBhbmQgZWFzeS4gPC9wPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtcm9sZVwiPlxyXG4gICAgICAgICAgICAgICAgIDxiPlJPTEU6IDwvYj5cclxuICAgICAgICAgICAgICAgICA8aT5Tb2Z0d2FyZSBFbmdpbmVlcjwvaT5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQUxURVJOQVRJVkUgTE9PS1xyXG4vKiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHJvamVjdC1ib2R5LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9vcmdhbmljby1wbGFudHIuaGVyb2t1YXBwLmNvbVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1waWN0dXJlXCIgc3JjPVwiLi4vLi4vcHVibGljL2ltZy9QbGFudHIucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzTmFtZT1cInByb2plY3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2plY3QtbmFtZVwiPlBMQU5UUjwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxwPlBsYW50ciBpcyBhbiBvbmxpbmUgZ2FyZGVuaW5nIGFuZCBvdXRkb29yIGRlY29yIHNlcnZpY2Ugd2hlcmUgeW91IGNhbiBjcmVhdGUgYW5kIHBsYW4geW91ciBzZWFzb25hbCBnYXJkZW5zIGJhc2VkIG9uIHJlZ2lvbmFsIHZhcmlhdGlvbnMgYW5kIHBlcnNvbmFsIG5lZWRzLjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1yb2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPlJPTEU6IDwvYj5cclxuICAgICAgICAgICAgICAgICAgPGk+U2NydW0gTWFzdGVyPC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHJvamVjdC1ib2R5LWxlZnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTcgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LW5hbWVcIj5TVEFDS0VUUzwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHA+UGxhbnRyIGlzIGFuIG9ubGluZSBnYXJkZW5pbmcgYW5kIG91dGRvb3IgZGVjb3Igc2VydmljZSB3aGVyZSB5b3UgY2FuIGNyZWF0ZSBhbmQgcGxhbiB5b3VyIHNlYXNvbmFsIGdhcmRlbnMgYmFzZWQgb24gcmVnaW9uYWwgdmFyaWF0aW9ucyBhbmQgcGVyc29uYWwgbmVlZHMuPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1yb2xlXCI+XHJcbiAgICAgICAgICAgICAgICA8Yj5ST0xFOiA8L2I+XHJcbiAgICAgICAgICAgICAgICA8aT5Qcm9kdWN0IE93bmVyPC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBvZmZzZXQtbWQtMSBvZmZzZXQtc20tMCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc3RhY2tldHMtb3Jpb24uaGVyb2t1YXBwLmNvbVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1waWN0dXJlLXJpZ2h0XCIgc3JjPVwiLi4vLi4vcHVibGljL2ltZy9TdGFja2V0cy5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwcm9qZWN0LWJvZHktcmlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL29yZ2FuaWNvLXBsYW50ci5oZXJva3VhcHAuY29tXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9qZWN0LXBpY3R1cmVcIiBzcmM9XCIuLi8uLi9wdWJsaWMvaW1nL3RoeW1lci5qcGdcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LW5hbWVcIj5USFlNRVI8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxwPlBsYW50ciBpcyBhbiBvbmxpbmUgZ2FyZGVuaW5nIGFuZCBvdXRkb29yIGRlY29yIHNlcnZpY2Ugd2hlcmUgeW91IGNhbiBjcmVhdGUgYW5kIHBsYW4geW91ciBzZWFzb25hbCBnYXJkZW5zIGJhc2VkIG9uIHJlZ2lvbmFsIHZhcmlhdGlvbnMgYW5kIHBlcnNvbmFsIG5lZWRzLiA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXJvbGVcIj5cclxuICAgICAgICAgICAgICAgIDxiPlJPTEU6IDwvYj5cclxuICAgICAgICAgICAgICAgIDxpPlNvZnR3YXJlIEVuZ2luZWVyPC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuKi9cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY3VycmVudFByb2plY3RzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==