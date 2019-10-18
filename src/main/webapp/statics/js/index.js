;var App =
webpackJsonpApp([8],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(2);

var Finder = __webpack_require__(7);

try {
  var _require = __webpack_require__(8),
      connect = _require.connect,
      state = _require.state;

  React.state = state;
  React.connect = connect;

  if (process.title === 'browser') {
    state.set(window.AppData); // eslint-disable-line
  }
  /**
   * [description]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */


  React.url = function (name) {
    var _state$get = state.get('$config'),
        buildservice = _state$get.buildservice;

    if (!buildservice) return name;
    buildservice = Object.assign({
      pipe: {},
      norm: 'I',
      mode: 'git',
      hash: 'HEAD!'
    }, buildservice);
    var _buildservice = buildservice,
        pipe = _buildservice.pipe,
        host = _buildservice.host;
    var finder = new Finder(buildservice);
    return finder.concatURL(name, pipe, host);
  };
} catch (e) {
  console.warn('[Turbo] "@noflux/react" not found, please run "npm i @noflux/react --save"');
}

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  return Page;
}(React.Component);

React.Page = Page;
/**
* [class helper]
* @param  {[String|Array|Object]} class 名称列表
*
* @api
*
* cls('btn', 'link')                                //=> class='btn link'
* cls('btn', [ 'link', 'btn-disable', 'btn' ])      //=> class='btn link btn-disable'
* cls('btn', {active: this.state.active || false }) //=> class='btn'
* cls('btn', {active: this.state.active || true })  //=> class='btn active'
*
* @example
*
* class Button extends Component {
*  render(){
*    let { text, className } = this.props;
*    return (
*      <a clsasName={ this.cls('btn', className) } >
*        { text }
*      </a>
*    );
*  }
* }
*/

React.cls = function () {
  for (var _len = arguments.length, cls = new Array(_len), _key = 0; _key < _len; _key++) {
    cls[_key] = arguments[_key];
  }

  return cls.map(function (c) {
    switch (/\[object (\w+)\]/.exec({}.toString.call(c))[1]) {
      case 'Array':
        return c;

      case 'String':
        return [c];

      case 'Object':
        return Object.keys(c).filter(function (k) {
          return c[k];
        });

      default:
        break;
    }

    return [];
  }).reduce(function (p, c) {
    return p.concat(c);
  }, []).filter(function (c) {
    return !!c;
  }).reduce(function (p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []).join(' ');
};

module.exports = React;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(18)();
}


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(6);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (false) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Link = _interopRequireDefault(__webpack_require__(5));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _url = _interopRequireDefault(__webpack_require__(41));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var indexNavTimeout;

var IndexNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexNav, _React$Component);

  function IndexNav(props) {
    var _this;

    _classCallCheck(this, IndexNav);

    _this = _possibleConstructorReturn(this, (IndexNav.__proto__ || Object.getPrototypeOf(IndexNav)).call(this, props));

    _this.callBack = function (curTab) {
      if (typeof _this.props.onTabChange !== 'undefined' && typeof _this.props.onTabChange === 'function') {
        _this.props.onTabChange({
          currentTab: curTab
        });
      }
    };

    _this.state = {
      query: 'utm_source=meituanweb',
      title: _this.props.title,
      currentTab: _this.props.currentTab
    };
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    return _this;
  }

  _createClass(IndexNav, [{
    key: "handleMouseEnter",
    value: function handleMouseEnter(targetTab) {
      var _this2 = this;

      var currentTab = this.state.currentTab;

      if (targetTab.tab === currentTab.tab) {
        return;
      }

      if (indexNavTimeout) {
        clearTimeout(indexNavTimeout);
      }

      indexNavTimeout = setTimeout(function () {
        _this2.setState({
          currentTab: targetTab
        });

        _this2.callBack(targetTab);
      }, 100);
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      clearTimeout(indexNavTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          containerClassName = _props.containerClassName,
          title = _props.title,
          tabs = _props.tabs,
          isShowTotal = _props.isShowTotal,
          totalHref = _props.totalHref,
          bgStyle = _props.bgStyle,
          bid = _props.bid;
      var currentTab = this.state.currentTab;
      return _react.default.createElement("div", {
        className: "index-nav-container ".concat(containerClassName),
        style: bgStyle
      }, _react.default.createElement("ul", {
        className: "clearfix "
      }, _react.default.createElement("li", {
        className: "title nav-item mf-shang-hei-regular"
      }, title), tabs.map(function (item) {
        return _react.default.createElement("li", {
          className: item.tab === currentTab.tab ? 'nav-item active' : 'nav-item',
          key: item.tab,
          onMouseEnter: function onMouseEnter() {
            return _this3.handleMouseEnter(item);
          },
          onMouseLeave: _this3.handleMouseLeave
        }, item.text);
      }), isShowTotal && _react.default.createElement("li", {
        className: "total nav-item"
      }, _react.default.createElement(_Link.default, {
        href: totalHref,
        onClick: _url.default,
        bid: bid,
        target: "_blank",
        "data-query": this.state.query
      }, _react.default.createElement("span", null, "\u5168\u90E8"), _react.default.createElement("span", {
        className: "right-arrow iconfont icon-btn_right"
      })))));
    }
  }]);

  return IndexNav;
}(_react.default.Component);

exports.default = IndexNav;
IndexNav.propTypes = {
  title: _propTypes.default.string.isRequired,
  currentTab: _propTypes.default.object,
  tabs: _propTypes.default.arrayOf(_propTypes.default.object),
  isShowTotal: _propTypes.default.bool,
  totalHref: _propTypes.default.string,
  bgStyle: _propTypes.default.object,
  containerClassName: _propTypes.default.string,
  onTabChange: _propTypes.default.func
};
IndexNav.defaultProps = {
  currentTab: {},
  tabs: [{}],
  isShowTotal: true,
  totalHref: 'javascript:void(0);',
  bgStyle: {
    backgroundColor: '#b7f1eb'
  }
};

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Container2 = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Image
 */
var Image =
/*#__PURE__*/
function (_Container) {
  _inherits(Image, _Container);

  function Image() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(Image, [{
    key: "onShow",
    // eslint-disable-line
    value: function onShow() {
      var _props = this.props,
          src = _props.src,
          url = _props.url,
          process = _props.process,
          params = _props.params; // eslint-disable-line

      if (params) console.warn('Image#params is deprecated, use `process` instead.');
      url = this.formatURI(src, process || params);
      this.setState({
        url: url
      });
    }
    /**
     * format image URI with options
     * @param {*} url
     * @param {*} options
     * @docs https://wiki.sankuai.com/pages/viewpage.action?pageId=372117852
     */

  }, {
    key: "formatURI",
    value: function formatURI(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      options = Object.assign({}, options); // meituan image process service

      url = decodeURIComponent(url);
      url = url.replace('img.meituan.net', 'p0.meituan.net');
      url = url.replace('vfile.meituan.net', 'p0.meituan.net');
      var p = /p([0-3]{1})\.meituan\.net(\/[^@]+)@?(.*)?/;

      if (p.test(url)) {
        var _p$exec = p.exec(url),
            _p$exec2 = _slicedToArray(_p$exec, 4),
            _ = _p$exec2[0],
            n = _p$exec2[1],
            path = _p$exec2[2],
            params = _p$exec2[3]; // eslint-disable-line


        path = path.replace('/w.h/', '/');

        if (process.title === 'browser') {
          if ('devicePixelRatio' in window) {
            var _window = window,
                devicePixelRatio = _window.devicePixelRatio;
            if (options.w) options.w = Math.floor(options.w * devicePixelRatio);
            if (options.h) options.h = Math.floor(options.h * devicePixelRatio);
          }

          if (document.cookie) {
            if (/webp=/.test(document.cookie)) path = path.replace(/\.[jpg|png|gif]$/, 'webp');
          }
        } // user options


        var optionsString = Object.keys(options).map(function (key) {
          return "".concat(options[key]).concat(key);
        }).join('_');

        if (optionsString) {
          params = (params ? "".concat(params, "|") : '') + optionsString;
        } // use 'p0' or 'p1' for image CDN balance


        n = [].reduce.call(path, function (hash, s) {
          return hash + s.charCodeAt(0) | 0; // eslint-disable-line
        }, 0) % 2;
        return "//p".concat(n, ".meituan.net").concat(path).concat(params ? "@".concat(params) : '');
      }

      return url;
    }
  }, {
    key: "handleError",
    value: function handleError() {
      var _this2 = this;

      var _state = this.state,
          url = _state.url,
          hasError = _state.hasError; // eslint-disable-line

      var p = /\/\/p([0-1]{1})\.meituan\.net/;

      if (!hasError && p.test(url)) {
        url = url.replace(p, function (_, n) {
          return "p".concat(+!+n, ".meituan.net");
        });
        return this.setState({
          url: url
        }, function () {
          _this2.state.hasError = true;
        });
      }

      return this.setState({
        hasError: true
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.src !== this.props.src) {
        this.setState({
          hasError: false
        });
      }
    }
    /**
     * render component
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          url = _state2.url,
          hasError = _state2.hasError;

      var _props2 = this.props,
          src = _props2.src,
          lazyload = _props2.lazyload,
          className = _props2.className,
          process = _props2.process,
          params = _props2.params,
          restProps = _objectWithoutProperties(_props2, ["src", "lazyload", "className", "process", "params"]);

      var px1gif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      return _react.default.createElement("img", _extends({
        ref: "container",
        onError: function onError(e) {
          return _this3.handleError(e);
        },
        src: lazyload ? url || px1gif : this.formatURI(src, process || params),
        className: (0, _react.cls)('image', {
          'image-error': hasError
        }, className)
      }, restProps));
    }
  }]);

  return Image;
}(_Container2.default);

var _default = Image;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHotCinema = exports.getComingFilms = exports.getHotFilms = void 0;

var _request = __webpack_require__(14);

var HOT_FILM_URL = '/ptapi/getHotFilms';
var COMING_FILM_URL = '/ptapi/getComingFilms';
var HOT_CINEMA_URL = '/ptapi/getHotCinema';
/**
 * @typedef {{data:{coming:any[],hot:{bingeWatch:number,boxInfo:string,cat:string,civilPubSt:number,desc:string,dir:string,dur:number,effectShowNum:number,followst:number,fra:string,frt:string,ftime:string,globalReleased:{},haspromotionTag:{},headLineShow:{},headLines:any[],headLinesVO:{movieId:number,title:string,type:string,url:string}[],id:number,img:string,isMark:{},late:{},localPubSt:number,mk:number,movieType:number,newsHeadlines:{movieId:number,title:string,type:string,url:string}[],nm:string,pn:number,preSale:number,preShow:{},proScore:number,proScoreNum:number,pubDate:number,pubShowNum:number,recentShowDate:number,recentShowNum:number,rt:string,sc:number,scm:string,showCinemaNum:number,showInfo:string,showNum:number,showTimeInfo:string,showst:number,snum:number,star:string,totalShowNum:number,ver:string,videoId:number,videoName:string,videourl:string,vnum:number,weight:number,wish:number,wishst:number}[],movieIds:{}[],stid:string,stids:{movieId:number,stid:string}[],total:number}}} HotFilmsResponse
 * @typedef {{data:{coming:{bingeWatch:number,boxInfo:string,cat:string,civilPubSt:number,comingTitle:string,desc:string,dir:string,dur:number,effectShowNum:number,followst:number,globalReleased:boolean,haspromotionTag:boolean,headLineShow:boolean,headLinesVO:any[],id:number,img:string,isMark:boolean,late:boolean,localPubSt:number,mk:number,movieType:number,nm:string,pn:number,preShow:boolean,proScore:number,proScoreNum:number,pubDate:number,pubDesc:string,pubShowNum:number,recentShowDate:number,recentShowNum:number,rt:string,sc:number,scm:string,showCinemaNum:number,showInfo:string,showNum:number,showst:number,snum:number,star:string,ver:string,videoId:number,videoName:string,videourl:string,vnum:number,weight:number,wish:number,wishst:number}[],hot:any[],movieIds:number[],stid:string}}} ComingFilmsResponse
 * @typedef {{name:string,id:number}[]} HotCinemaResponse
 */

/**
 * 返回热门电影。
 * <https://wiki.sankuai.com/pages/viewpage.action?pageId=223382039>
 * @export
 * @example ?mock=mock/hot-films.json&demo=demo/hot-films.js
 * @see HOT_FILM_URL
 * @param {{ci?: number,limit?: number }} param
 * @returns {Promise<HotFilmsResponse>} 传入组件后，可得到施加参数后的高阶组件。
 */

var getHotFilms = function getHotFilms(param) {
  return _request.fetchRequest.getJSON(HOT_FILM_URL, param);
};
/**
 * 返回即将上映电影。
 * <https://wiki.sankuai.com/pages/viewpage.action?pageId=223382039>
 * @export
 * @example ?mock=mock/coming-films.json&demo=demo/hot-films.js
 * @see COMING_FILM_URL
 * @param {{ci?: number,limit?: number }} param
 * @returns {Promise<ComingFilmsResponse>} 传入组件后，可得到施加参数后的高阶组件。
 */


exports.getHotFilms = getHotFilms;

var getComingFilms = function getComingFilms(param) {
  return _request.fetchRequest.getJSON(COMING_FILM_URL, param);
};
/**
 * 返回热门影院列表。
 * // TODO 后端实现存在问题，会遍历getBranch接口
 * @export
 * @example ?mock=mock/hot-cinema.json&demo=demo/hot-cinema.js
 * @see HOT_CINEMA_URL
 * @param {{ci?: number,limit?: number }} param
 * @returns {Promise<HotCinemaResponse>}
 */


exports.getComingFilms = getComingFilms;

var getHotCinema = function getHotCinema(param) {
  return _request.fetchRequest.getJSON(HOT_CINEMA_URL, param);
};

exports.getHotCinema = getHotCinema;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScenesList = void 0;

var _request = __webpack_require__(14);

var GET_SCENES_URL = '/ptapi/getScenesList';
/**
 * @typedef {{code:number,data:{bottomInfo:string,mge:{globalId?:string},stid:string,title:string,subTitle:string,from:string,id:string,imgUrl:string,iUrl:string}[],serverInfo:{traceId:string,cost_callService:number,cost_rend:number5,cost_init:number,cost_dealService:number,cost_all:number9,cost_poiService:number,cost_dealMllService:number},tab:{tab:string,text:string,tabEn:string},globalId:string,tabs:{tab:string,text:string,tabEn:string}[],message:string}} ScenesList
 */

/**
 * PC端场景运营区接口
 * quality -> 有格调， cheap -> 狠优惠
 * 参照文档：<https://wiki.sankuai.com/pages/viewpage.action?pageId=1015551771>
 * @export
 * @see GET_SCENES_URL
 * @example ?mock=mock/scenes.json&demo=demo/scenes.js
 * @param {{theme: 'cheap' | 'quality', tab: string, ci: number, limit: number}} param
 * @returns {Promise<ScenesList>}
 */

var getScenesList = function getScenesList(param) {
  return _request.fetchRequest.getJSON(GET_SCENES_URL, param);
};

exports.getScenesList = getScenesList;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Image = _interopRequireDefault(__webpack_require__(12));

var _Link = _interopRequireDefault(__webpack_require__(5));

var _url = _interopRequireDefault(__webpack_require__(41));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaoyanSlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MaoyanSlider, _React$Component);

  function MaoyanSlider(props) {
    var _this2;

    _classCallCheck(this, MaoyanSlider);

    _this2 = _possibleConstructorReturn(this, (MaoyanSlider.__proto__ || Object.getPrototypeOf(MaoyanSlider)).call(this, props));
    _this2.state = {
      query: 'utm_source=meituanweb',
      left: 0,
      paginationOffset: 0,
      maxIndex: 2,
      unit: 1165,
      nowIndex: 0,
      pageSize: 5
    };
    return _this2;
  }

  _createClass(MaoyanSlider, [{
    key: "setMaxIndex",
    value: function setMaxIndex(pageSize, unit) {
      var length = this.props.films.length;
      this.setState({
        maxIndex: Math.ceil(length / pageSize) - 1,
        pageSize: pageSize,
        unit: unit
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var paginationWidth = document.getElementById('maoyan-page').clientWidth;
      this.setState({
        paginationOffset: -paginationWidth / 2
      });
      var windowWith = document.body.clientWidth;

      if (windowWith > 1200) {
        this.setState({
          pageSize: 5
        });
        this.setMaxIndex(5, 1165);
      } else {
        this.setState({
          pageSize: 4
        });
        this.setMaxIndex(4, 932);
      }
    } // 设置当前页码，首页index===0

  }, {
    key: "setNowIndex",
    value: function setNowIndex(index, offset) {
      if (index > this.state.maxIndex) {
        index = this.state.maxIndex;
      } else if (index < 0) {
        index = 0;
      }

      this.setState({
        nowIndex: index
      });
      this.setOffset(index, offset);
    } // 前进或后退按钮

  }, {
    key: "handleNavBtn",
    value: function handleNavBtn(offset) {
      this.setNowIndex(this.state.nowIndex + offset, offset);
    } // 根据页码设置偏移量

  }, {
    key: "setOffset",
    value: function setOffset(index, offset) {
      var left = this.state.left;
      var unit = this.state.unit;
      var films = this.props.films;
      var pageSize = this.state.pageSize;
      var lastPageSize = films.length % pageSize;
      var maxIndex = Math.ceil(films.length / pageSize) - 1;

      if (index === maxIndex) {
        this.setState({
          maxIndex: maxIndex,
          left: (films.length - pageSize) * -233
        });
      } else {
        this.setState({
          maxIndex: maxIndex,
          left: -index * unit
        });
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.resetWidth();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var paginationWidth = document.getElementById('maoyan-page').clientWidth;
      this.setState({
        paginationOffset: -paginationWidth / 2
      });
      var windowWith = document.body.clientWidth;

      if (windowWith > 1200) {
        this.setState({
          pageSize: 5
        });
        this.setMaxIndex(5, 1165);
      } else {
        this.setState({
          pageSize: 4
        });
        this.setMaxIndex(4, 932);
      }

      var setMaxIndex = this.setMaxIndex;
      window.addEventListener('resize', this.resetWidth(setMaxIndex, this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resetWidth);
    }
  }, {
    key: "resetWidth",
    value: function resetWidth(setMaxIndex, _this) {
      return function () {
        var windowWith = document.body.clientWidth;

        if (windowWith > 1200) {
          setMaxIndex.call(_this, 5, 1165);
        } else {
          setMaxIndex.call(_this, 4, 932);
        }
      };
    }
  }, {
    key: "showBtn",
    value: function showBtn(film) {
      switch (film.showst) {
        case 3:
          return _react.default.createElement("span", {
            className: "buy-ticket"
          }, "\u8D2D\u7968");

        case 4:
          return _react.default.createElement("span", {
            className: "buy-ticket"
          }, "\u9884\u552E");

        default:
          return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          films = _props.films,
          total = _props.total,
          bid = _props.bid;

      var _this = this;

      var pageNum = Math.ceil(films.length / this.state.pageSize);
      var arr = [];

      for (var i = 0; i < pageNum; i++) {
        arr.push(i);
      }

      var imgParams = {
        w: 214,
        h: 297,
        e: 1,
        c: 1
      };
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "slider"
      }, _react.default.createElement("div", {
        className: "slider-content clearfix",
        style: {
          left: "".concat(this.state.left, "px"),
          margin: '0 12px'
        }
      }, films && films.map(function (film, index) {
        var mark = null;

        if (film.ver) {
          if (film.ver.match('IMAX 3D')) {
            mark = (0, _react.url)('../img/imax3d.png');
          } else if (film.ver.match('IMAX') || film.ver.match('IMAX 2D')) {
            mark = (0, _react.url)('../img/imax.png');
          } else if (film.ver.match('3D')) {
            mark = (0, _react.url)('../img/3d.png');
          }
        }

        var filmBid = bid;
        var fileLab = null;

        if (film.lx && film.lx.click) {
          filmBid = film.lx.click.bid;
          fileLab = film.lx.click.lab;
        }

        return _react.default.createElement("div", {
          className: "slider-item-film",
          key: index
        }, _react.default.createElement(_Link.default, {
          bid: filmBid,
          lab: fileLab,
          target: "_blank",
          href: "https://maoyan.com/films/".concat(film.id),
          onClick: _url.default,
          "data-query": _this3.state.query
        }, _react.default.createElement(_Image.default, {
          className: "film-img",
          src: film.img,
          process: imgParams,
          lazyload: false
        }), _react.default.createElement("img", {
          src: mark,
          className: "film-mark",
          style: {
            display: mark ? 'inline-block' : 'none'
          }
        }), _react.default.createElement("div", {
          className: "film-info"
        }, _react.default.createElement("p", {
          className: "film-score"
        }, film.sc > 0 ? _react.default.createElement("b", null, "\u89C2\u4F17\u8BC4  ", _react.default.createElement("span", null, film.sc)) : _react.default.createElement("b", null, _react.default.createElement("span", null, film.wish), "  \u4EBA\u60F3\u770B")), _react.default.createElement("p", {
          className: "film-name"
        }, film.nm), _this.showBtn(film))));
      })), _react.default.createElement("div", {
        className: "btn btn-next",
        onClick: this.handleNavBtn.bind(this, 1),
        style: {
          right: 0
        }
      }, _react.default.createElement("i", {
        className: "iconfont icon-btn_right"
      })), _react.default.createElement("div", {
        className: "btn btn-pre",
        onClick: this.handleNavBtn.bind(this, -1),
        style: {
          left: 0
        }
      }, _react.default.createElement("i", {
        className: "iconfont icon-btn_left"
      }))), _react.default.createElement("div", {
        className: "slider-pagination",
        id: "maoyan-page",
        style: {
          marginLeft: "".concat(this.state.paginationOffset, "px")
        }
      }, arr.map(function (item, index) {
        var opacity = 0.2;

        if (index === _this3.state.nowIndex) {
          opacity = 0.9;
        }

        return _react.default.createElement("div", {
          className: "pagination",
          style: {
            opacity: opacity
          },
          key: index
        });
      })));
    }
  }]);

  return MaoyanSlider;
}(_react.default.Component);

exports.default = MaoyanSlider;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 *
 * @param url: 图片地址
 * @param suffix: 图片服务参数
 * @param prefix: url协议头 (http 或 https)
 * @returns {string}
 */
function formatImageUrl(url, suffix, prefix) {
  url = url || '';

  try {
    url = decodeURIComponent(url);
  } catch (e) {
    console.error(e);
    console.error("==================> ".concat(url));
  }

  prefix = prefix ? "".concat(prefix, ":") : '';

  if (suffix) {
    var offset = url.indexOf('@');

    if (offset > 0) {
      suffix = '|' + suffix;
    } else if (/mss\.sankuai\.com/.test(url)) {
      suffix = '';
    } else {
      suffix = '@' + suffix;
    }

    url += suffix;
  }

  return url.replace('/w.h/', '/').replace('http:', prefix || '');
}

var poiMap = {
  defults: 'cate',
  1: 'meishi',
  2: 'xiuxianyule',
  20252: 'yundongjianshen',
  3: 'shenghuo',
  20002: 'shangmenfuwu',
  4: 'wanggou',
  20383: 'shishanggou',
  387: 'bendigouwu',
  20: 'jiudian',
  20178: 'jiehun',
  29: 'sheyingxiezhen',
  20375: 'yanhui',
  78: 'lvyou',
  195: 'zhoubianyou',
  20513: 'dujiachuxing',
  99: 'shop',
  20626: 'dianyingquanbu',
  22: 'jiankangliren',
  20007: 'qinzi',
  20285: 'xuexipeixun',
  20179: 'jiazhuang',
  27: 'aiche',
  20274: 'yiliao',
  20691: 'chongwu',
  20966: 'zhenguo'
};
var showTypeMap = {
  'entertainment': 'xiuxianyule',
  'food': 'meishi',
  'fitness': 'yundongjianshen',
  'easylife': [{
    id: 20691,
    path: 'chongwu'
  }, {
    id: 3,
    path: 'shenghuo'
  }],
  'married': 'jiehun',
  'beauty': 'jiankangliren',
  'children': 'qinzi',
  'education': 'xuexipeixun',
  'domestic': 'jiazhuang',
  'car': 'aiche',
  'medicine': 'yiliao'
};

function poiFilter(ids) {
  if (ids instanceof Array) {
    return ids.map(function (id) {
      return poiMap[id] || poiMap.defults;
    });
  }

  return poiMap[ids] || poiMap.defults;
}

function poiUrl(id) {
  if (id === 99) {
    return 'maoyan.com/cshop';
  }

  return "www.meituan.com/".concat(poiFilter(id));
}

function poiUrlSuper(ids, showType, poiid, key) {
  if (showType) {
    var path = showType && showTypeMap[showType];

    if (path) {
      if (typeof path === 'string') {
        return "//www.meituan.com/".concat(path, "/").concat(poiid, "/");
      } else {
        if (ids && ids.length > 0) {
          var _loop = function _loop(obj) {
            var pathArr = ids.filter(function (id) {
              return id == obj.id;
            });

            if (pathArr.length > 0) {
              return {
                v: "//www.meituan.com/".concat(obj.path, "/").concat(poiid, "/")
              };
            }
          };

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var obj = _step.value;

              var _ret = _loop(obj);

              if (_typeof(_ret) === "object") return _ret.v;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }
    }
  }

  var id = ids && ids[0];

  if (id === 99) {
    return "//maoyan.com/cshop/".concat(poiid, "/");
  }

  if (id === 20966) {
    return "//phoenix.meituan.com/go/mt/".concat(poiid, "/?phx_wake_up_type=mtpc_big_search&phx_wake_up_source=").concat(key || '');
  }

  return "//www.meituan.com/".concat(poiFilter(id), "/").concat(poiid, "/");
}

function setCi(context, id) {
  if (id !== context.cookies.get('ci')) {
    context.cookies.set('ci', id, {
      maxAge: 1000 * 60 * 60 * 24 * 60,
      domain: '.meituan.com',
      httpOnly: false
    });
  }

  var rvct = context.cookies.get('rvct') || '';
  var recentCiList;

  try {
    recentCiList = decodeURIComponent(rvct).split(',').filter(Boolean);
  } catch (error) {
    recentCiList = [];
  }

  var index = recentCiList.indexOf("".concat(id));

  if (index !== -1) {
    // 当前访问的城市在最近访问城市列表中
    recentCiList.splice(index, 1);
  }

  recentCiList.unshift("".concat(id));

  if (recentCiList.length > 11) {
    recentCiList.length = 11;
  }

  context.cookies.set('rvct', encodeURIComponent(recentCiList.join(',')), {
    maxAge: 1000 * 60 * 60 * 24 * 60,
    domain: '.meituan.com',
    httpOnly: false
  });
}

function scoreToText(score) {
  if (!(score && typeof score === 'number')) {
    return '';
  }

  switch (true) {
    case score > 4.5:
      return '很好';

    case score > 4.0:
      return '好';

    case score > 3.5:
      return '不错';

    default:
      return '一般';
  }
}

var ViewGA =
/*#__PURE__*/
function () {
  function ViewGA() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ViewGA);

    this.content = config.content || document.querySelector('html');
    this.windowHeight = config.windowHeight || config.content ? this.content.offsetHeight : window.innerHeight;
    this.top = config.top || config.top === 0 ? 0 : this.content.offsetTop;
    this.delay = 500;
    this.percent = (config.percent || 70) / 100;
    this.viewDots = [];
    this.bid = config.bid;
  }

  _createClass(ViewGA, [{
    key: "addDots",
    value: function addDots(dot) {
      var _this = this;

      if (dot instanceof Array) {
        dot.forEach(function (p) {
          _this.addDots(p);
        });
      } else if (dot && _typeof(dot) === 'object') {
        this.viewDots.push(dot);
      }
    }
  }, {
    key: "check",
    value: function check(top) {
      var _this2 = this;

      top = top === undefined ? this.content.scrollTop : top;
      var bottom = top + this.windowHeight;
      this.viewDots.forEach(function (dot) {
        var h = (dot.bottom - dot.top) * _this2.percent;

        if (!dot.report && dot.bottom - top > h && bottom - dot.top > h) {
          if (window.LXAnalytics) {
            window.LXAnalytics('moduleView', dot.bid || _this2.bid, dot.lab);
            dot.report = true;
          }
        }
      });
      this.removeReported();
    }
  }, {
    key: "clearList",
    value: function clearList() {
      this.viewDots.length = 0;
    }
  }, {
    key: "removeReported",
    value: function removeReported() {
      var _this3 = this;

      clearTimeout(this.removeFlag);
      this.removeFlag = setTimeout(function () {
        _this3.viewDots = _this3.viewDots.filter(function (dot) {
          return !dot.report;
        });
      }, 1000);
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      if (this.content === document.querySelector('html')) {
        window.addEventListener('scroll', function () {
          _this4.check();
        });
      } else {
        this.content.addEventListener('scroll', function () {
          _this4.check();
        });
      }

      this.check();
    }
  }]);

  return ViewGA;
}();

function htmlEscape(str) {
  if (typeof str === 'string') {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  }

  return '';
}

module.exports = {
  formatImageUrl: formatImageUrl,
  poiMap: poiMap,
  poiFilter: poiFilter,
  setCi: setCi,
  scoreToText: scoreToText,
  ViewGA: ViewGA,
  htmlEscape: htmlEscape,
  poiUrl: poiUrl,
  poiUrlSuper: poiUrlSuper
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchRequest = exports.APIRequest = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RETRY_TIMES = 1;

var injectCsrfHeader = function injectCsrfHeader(headers) {
  if (window.AppData.csrf) {
    Object.assign(headers, window.AppData.csrf);
  }

  return headers;
};

var APIRequest = function APIRequest(requestLib) {
  var _this = this;

  _classCallCheck(this, APIRequest);

  this.postJSON = function (url) {
    var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : JSON.stringify(param);
    var retry = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : RETRY_TIMES;
    var headers = injectCsrfHeader({
      'Content-Type': 'application/json'
    });
    return _this._request(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: headers,
      body: body
    }).then(function (response) {
      return response.json();
    }).catch(function (err) {
      if (retry) {
        return _this.postJSON(url, null, body, retry - 1);
      }

      console.error(err);
      return {
        code: -1,
        error: 1
      };
    });
  };

  this.getCORS = function (url, param) {
    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _stringify.default)(param);
    var retry = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : RETRY_TIMES;
    return _this._request(url + (query ? "?".concat(query) : ''), {
      method: 'GET',
      credentials: 'include' // 同域下自动发送cookie

    }).then(function (response) {
      return response.json();
    }).catch(function (err) {
      if (retry) {
        return _this.getCORS(url, null, query, retry - 1);
      }

      throw err;
    });
  };

  this.getCORSWithoutCookie = function (url, param) {
    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _stringify.default)(param);
    var retry = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : RETRY_TIMES;
    return _this._request(url + (query ? "?".concat(query) : ''), {
      method: 'GET'
    }).then(function (response) {
      return response.json();
    }).catch(function (err) {
      if (retry) {
        return _this.getCORSWithoutCookie(url, null, query, retry - 1);
      }

      throw err;
    });
  };

  this.getJSON = function (url, param) {
    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _stringify.default)(param);
    var retry = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : RETRY_TIMES;
    return _this._request(url + (query ? "?".concat(query) : ''), {
      method: 'GET',
      headers: injectCsrfHeader({
        'Cache-Control': 'no-cache',
        // for IE cache issue
        'Pragma': 'no-cache',
        //eslint-disable-line
        'Content-Type': 'application/json'
      }),
      credentials: 'same-origin' // 同域下自动发送cookie

    }).then(function (response) {
      return response.json();
    }).catch(function (err) {
      if (retry) {
        return _this.getJSON(url, null, query, retry - 1);
      }

      throw err;
    });
  };

  this._request = requestLib;
};

exports.APIRequest = APIRequest;
var fetchRequest = new APIRequest(window && window.fetch ? window.fetch.bind(window) : function () {});
exports.fetchRequest = fetchRequest;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RateStars =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RateStars, _React$Component);

  function RateStars(props) {
    var _this;

    _classCallCheck(this, RateStars);

    _this = _possibleConstructorReturn(this, (RateStars.__proto__ || Object.getPrototypeOf(RateStars)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(RateStars, [{
    key: "render",
    value: function render() {
      var _props$score = this.props.score,
          score = _props$score === void 0 ? 5 : _props$score;
      var width = score / 5 * 100 + "%";
      return _react.default.createElement("div", {
        className: "rate-stars"
      }, _react.default.createElement("ul", {
        className: "rate-stars-ul rate-stars-dark"
      }, [0, 1, 2, 3, 4].map(function (i) {
        return _react.default.createElement("li", {
          key: i
        }, _react.default.createElement("i", {
          className: "iconfont icon-star_icon"
        }));
      })), _react.default.createElement("ul", {
        className: "rate-stars-ul rate-stars-light",
        style: {
          width: width
        }
      }, [0, 1, 2, 3, 4].map(function (i) {
        return _react.default.createElement("li", {
          key: i
        }, _react.default.createElement("i", {
          className: "iconfont icon-star_icon"
        }));
      })));
    }
  }]);

  return RateStars;
}(_react.default.Component);

exports.default = RateStars;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMinsuCitys = exports.getMinsu = void 0;

var _request = __webpack_require__(14);

var MINSU = '/ptapi/minsu';
var MINSU_CITY = '/ptapi/minsuCitys';
/**
 * 返回民宿房源。
 * <https://wiki.sankuai.com/pages/viewpage.action?pageId=1329184807>
 * @export
 * @example ?mock=mock/zhenguo-minsu.json
 * @see RECOMMEND_CITY
 * @param {{fetchSize?: number }} param
 */

var getMinsu = function getMinsu(param) {
  return _request.fetchRequest.getJSON(MINSU, param);
};
/**
 * 返回榛果附近城市。
 * <https://wiki.sankuai.com/pages/viewpage.action?pageId=1329184807>
 * @export
 * @example ?mock=mock/zhenguo-city.json
 * @see RECOMMEND_CITY
 * @param {{fetchSize?: number }} param
 */


exports.getMinsu = getMinsu;

var getMinsuCitys = function getMinsuCitys(param) {
  return _request.fetchRequest.getJSON(MINSU_CITY, param);
};

exports.getMinsuCitys = getMinsuCitys;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringify;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// for browser usage
function stringifyPrimitive(v) {
  if (typeof v === 'string') return v;
  if (typeof v === 'number' && isFinite(v)) return "".concat(v);
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  return '';
}

function stringify(obj, sep, eq) {
  sep = sep || '&';
  eq = eq || '=';
  var encode = encodeURIComponent;

  if (obj !== null && _typeof(obj) === 'object') {
    var keys = Object.keys(obj);
    var len = keys.length;
    var flast = len - 1;
    var fields = '';

    for (var i = 0; i < len; ++i) {
      var k = keys[i];
      var v = obj[k];
      var ks = encode(stringifyPrimitive(k)) + eq;

      if (Array.isArray(v)) {
        var vlen = v.length;
        var vlast = vlen - 1;

        for (var j = 0; j < vlen; ++j) {
          fields += ks + encode(stringifyPrimitive(v[j]));
          if (j < vlast) fields += sep;
        }

        if (vlen && i < flast) fields += sep;
      } else {
        fields += ks + encode(stringifyPrimitive(v));
        if (i < flast) fields += sep;
      }
    }

    return fields;
  }

  return '';
}

exports.stringify = stringify;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomNav =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(BottomNav, _React$PureComponent);

  function BottomNav(props) {
    var _this;

    _classCallCheck(this, BottomNav);

    _this = _possibleConstructorReturn(this, (BottomNav.__proto__ || Object.getPrototypeOf(BottomNav)).call(this, props));
    _this.data = {};
    return _this;
  }

  _createClass(BottomNav, [{
    key: "render",
    value: function render() {
      var navData = this.props.navData;
      return _react.default.createElement("nav", {
        className: "botton-nav"
      }, _react.default.createElement("div", {
        className: "title"
      }, "\u7F8E\u56E2\u5BFC\u822A"), _react.default.createElement("dl", {
        className: "b-n-content"
      }, navData.map(function (_ref) {
        var data = _ref.data,
            name = _ref.name;
        return data && data.length ? _react.default.createElement("div", {
          className: "b-n-classification",
          key: name
        }, _react.default.createElement("dt", {
          className: "b-n-subtitle"
        }, name), _react.default.createElement("div", {
          className: "b-n-sublist"
        }, data.map(function (link) {
          return _react.default.createElement("dd", {
            key: link.id,
            className: "b-n-list-item"
          }, _react.default.createElement("a", {
            href: link.url,
            title: link.name,
            target: "_blank"
          }, link.name, link.promotion ? _react.default.createElement("span", {
            className: "nav-promotion"
          }, "HOT") : ''));
        }))) : null;
      })));
    }
  }]);

  return BottomNav;
}(_react.default.PureComponent);

exports.default = BottomNav;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(19);
var ReactPropTypesSecret = __webpack_require__(20);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Banner = _interopRequireDefault(__webpack_require__(206));

var _Scenes = _interopRequireDefault(__webpack_require__(211));

var _ZhenguoCard = _interopRequireDefault(__webpack_require__(214));

var _Recommends = _interopRequireDefault(__webpack_require__(215));

var _ScenesMaoyan = _interopRequireDefault(__webpack_require__(216));

var _BottomNav = _interopRequireDefault(__webpack_require__(17));

var _poi = __webpack_require__(26);

var _maoyan = __webpack_require__(124);

var _zhenguo = __webpack_require__(151);

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (0, _react.connect)(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      recommendList: [],
      hotFilms: null,
      comingFilms: null,
      tabs: [],
      minsuCitys: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var currentCity = this.props.currentCity;
      (0, _poi.getRecommendInfo)().then(function (list) {
        _this2.setState({
          recommendList: list
        });

        lazyImg.start();
      });
      Promise.all([(0, _maoyan.getHotFilms)({
        ci: currentCity.id,
        limit: 10
      }).then(function (json) {
        if ('error' in json && json.error === 1) {
          console.log('获取hot电影失败');
          return {
            data: {
              coming: [],
              hot: [],
              total: 0
            }
          };
        }

        return json;
      }).catch(function (err) {
        console.error(err);
        return {
          data: {
            coming: [],
            hot: [],
            total: 0
          }
        };
      }), (0, _maoyan.getComingFilms)({
        ci: currentCity.id,
        limit: 10
      }).then(function (json) {
        if ('error' in json && json.error === 1) {
          console.log('获取coming电影失败');
          return {
            data: {
              coming: [],
              hot: [],
              total: 0
            }
          };
        }

        return json;
      }).catch(function (err) {
        console.error(err);
        return {
          data: {
            coming: [],
            hot: [],
            total: 0
          }
        };
      })]).then(function (vals) {
        var tabs = [];

        if (vals[0].data && vals[0].data.hot && vals[0].data.hot.length > 0) {
          tabs.push({
            tab: '正在热映',
            text: '正在热映',
            key: 1
          });
        }

        if (vals[1].data && vals[1].data.coming && vals[1].data.coming.length > 0) {
          tabs.push({
            tab: '即将上映',
            text: '即将上映',
            key: 2
          });
        }

        _this2.setState({
          hotFilms: vals[0].data.hot,
          comingFilms: vals[1].data.coming,
          tabs: tabs
        });
      });
      (0, _zhenguo.getMinsuCitys)({
        fetchSize: 10
      }).then(function (json) {
        if (json.status === 0) {
          if (json.cityList && Array.isArray(json.cityList) && json.cityList.length === 0) {
            json.cityList = [{
              cityId: 310100,
              cityName: '上海'
            }, {
              cityId: 110100,
              cityName: '北京'
            }, {
              cityId: 510100,
              cityName: '成都'
            }, {
              cityId: 440100,
              cityName: '广州'
            }, {
              cityId: 330100,
              cityName: '杭州'
            }, {
              cityId: 440300,
              cityName: '深圳'
            }];
          }

          _this2.setState({
            minsuCitys: json.cityList
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var host = _react.state.get('$config.host');

      var _props = this.props,
          _props$currentCity = _props.currentCity,
          currentCity = _props$currentCity === void 0 ? {
        id: 1,
        name: '北京',
        pinyin: 'beijing',
        acronym: 'bj'
      } : _props$currentCity,
          maoyanHot = _props.maoyanHot,
          maoyanComing = _props.maoyanComing,
          qualityList = _props.qualityList,
          cheapList = _props.cheapList,
          categorys = _props.categorys,
          isSpider = _props.isSpider,
          bannerList = _props.bannerList;
      var _state = this.state,
          minsuCitys = _state.minsuCitys,
          recommendList = _state.recommendList,
          hotFilms = _state.hotFilms,
          comingFilms = _state.comingFilms,
          tabs = _state.tabs;
      var hotMaoyan = hotFilms || maoyanHot && maoyanHot.data && maoyanHot.data.hot;
      var comingMaoyan = comingFilms || maoyanComing;
      return _react.default.createElement("div", {
        className: "page index"
      }, _react.default.createElement("div", {
        className: "index-container"
      }, _react.default.createElement(_Banner.default, {
        bannerList: bannerList,
        categorys: categorys,
        currentCity: currentCity,
        films: hotMaoyan
      }), _react.default.createElement(_Scenes.default, {
        qualityList: qualityList,
        cheapList: cheapList,
        currentCity: currentCity,
        isSpider: isSpider,
        cheapBid: "b_frobtpp5",
        qualityBid: "b_0x8l7xmn"
      }), _react.default.createElement(_ScenesMaoyan.default, {
        hot: hotMaoyan,
        coming: comingMaoyan,
        tabs: tabs,
        currentCity: currentCity,
        bid: "b_rbbamvz0"
      }), minsuCitys.length > 0 && _react.default.createElement(_ZhenguoCard.default, {
        cityList: minsuCitys
      }), recommendList.length ? _react.default.createElement(_Recommends.default, {
        recommendList: recommendList,
        host: host,
        bid: "b_ecc0l2di"
      }) : null));
    }
  }]);

  return Index;
}(_react.default.Component)) || _class;

exports.default = Index;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Slider = _interopRequireDefault(__webpack_require__(207));

var _LoginCard = _interopRequireDefault(__webpack_require__(208));

var _CategoryNav = _interopRequireDefault(__webpack_require__(209));

var _Link = _interopRequireDefault(__webpack_require__(5));

var _indexBannerBackUp = __webpack_require__(210);

var _url = _interopRequireDefault(__webpack_require__(41));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RIGHT_NAV = [{
  className: 'waimai-link',
  href: 'http://waimai.meituan.com',
  title: '美团外卖'
}, {
  className: 'maoyan-link',
  href: '//maoyan.com',
  title: '猫眼电影',
  query: 'utm_source=meituanweb'
}, {
  className: 'hotel-link',
  href: '//hotel.meituan.com',
  title: '美团酒店'
}, {
  className: 'homestay-link',
  href: '//phoenix.meituan.com/?phx_wake_up_type=mtpc_category&phx_wake_up_source=nav_bar',
  title: '民宿／公寓'
}, {
  className: 'merchant-link',
  href: 'https://ecom.meituan.com/bizsettle/settle/merchantsSettle?utm_source=mtxz',
  title: '商家入驻'
}, {
  className: 'gongyi-link',
  href: '//gongyi.meituan.com/',
  title: '美团公益'
}];
var RIGHT_BID = 'b_lalhpjhj';
var BANNER_BID = 'b_a4enk0wd';

var Banner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Banner, _React$Component);

  function Banner(props) {
    var _this;

    _classCallCheck(this, Banner);

    _this = _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Banner, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          bannerList = _props.bannerList,
          categorys = _props.categorys,
          currentCity = _props.currentCity,
          films = _props.films; // console.log('bannerList===>', bannerList);

      var bList = [];

      if (bannerList && bannerList.length) {
        bList = bannerList;
      } else {
        bList = _indexBannerBackUp.indexBannerBackUp;
      }

      var album = bList[0] && bList[0].content;
      var banner2 = bList[1];
      var banner3 = bList[2];
      var banner4 = bList[3];
      var banner5 = bList[4];
      return _react.default.createElement("div", {
        className: "banner-container clearfix"
      }, _react.default.createElement("div", {
        className: "left-banner"
      }, _react.default.createElement(_CategoryNav.default, {
        categorys: categorys,
        currentCity: currentCity,
        films: films
      })), _react.default.createElement("div", {
        className: "right-banner"
      }, _react.default.createElement("div", {
        className: "home-header-links"
      }, RIGHT_NAV.map(function (navBtn, index) {
        return _react.default.createElement(_Link.default, _extends({}, navBtn, {
          onClick: _url.default,
          key: index,
          bid: RIGHT_BID,
          "data-query": navBtn.query,
          lab: {
            custom: {
              title: navBtn.title
            }
          },
          target: "_blank"
        }), navBtn.title, navBtn.promotion ? _react.default.createElement("span", {
          className: "nav-promotion"
        }, "\u63A8\u8350") : '');
      })), _react.default.createElement("div", {
        className: "banner-row clearfix"
      }, _react.default.createElement("div", {
        className: "item banner-slider shadow"
      }, _react.default.createElement(_Slider.default, {
        sId: "banner-slider",
        autoplay: "5000",
        paginationColor: "#fff",
        navBtn: true
      }, album.map(function (item, index) {
        return _react.default.createElement(_Link.default, {
          href: item.href,
          key: index,
          bid: BANNER_BID,
          lab: {
            custom: {
              index: "1_".concat(index + 1)
            }
          },
          target: "_blank"
        }, _react.default.createElement("div", {
          className: "slider-img-div",
          style: {
            backgroundImage: "url(".concat(item.url, ")")
          }
        }));
      }))), _react.default.createElement(_Link.default, {
        href: banner2 && banner2.content && banner2.content.href,
        target: "_blank",
        bid: BANNER_BID,
        lab: {
          custom: {
            index: banner2.position || 2
          }
        }
      }, _react.default.createElement("div", {
        className: "item shadow pic-1",
        style: {
          backgroundImage: "url(".concat(banner2.content && banner2.content.url)
        }
      })), _react.default.createElement("div", {
        className: "item banner-logincard"
      }, _react.default.createElement("div", {
        style: {
          float: 'left'
        }
      }, _react.default.createElement(_LoginCard.default, null)))), _react.default.createElement("div", {
        className: "banner-row clearfix"
      }, _react.default.createElement(_Link.default, {
        href: banner3 && banner3.content && banner3.content.href,
        target: "_blank",
        bid: BANNER_BID,
        lab: {
          custom: {
            index: banner3.position || 3
          }
        }
      }, _react.default.createElement("div", {
        className: "item pic-2 shadow",
        style: {
          backgroundImage: "url(".concat(banner3.content && banner3.content.url)
        }
      })), _react.default.createElement(_Link.default, {
        href: banner4 && banner4.content && banner4.content.href,
        target: "_blank",
        bid: BANNER_BID,
        lab: {
          custom: {
            index: banner4.position || 4
          }
        }
      }, _react.default.createElement("div", {
        className: "item pic-3 shadow",
        style: {
          backgroundImage: "url(".concat(banner4.content && banner4.content.url)
        }
      })), _react.default.createElement(_Link.default, {
        href: banner5 && banner5.content && banner5.content.href,
        target: "_blank",
        bid: BANNER_BID,
        lab: {
          custom: {
            index: banner5.position || 5
          }
        }
      }, _react.default.createElement("div", {
        className: "item pic-4 shadow",
        style: {
          backgroundImage: "url(".concat(banner5.content && banner5.content.url)
        }
      })), _react.default.createElement("div", {
        className: "item download-app"
      }, _react.default.createElement("div", {
        className: "qrcode-box"
      }, _react.default.createElement("img", {
        src: (0, _react.url)('./img/download-qr.png'),
        alt: "\u4E0B\u8F7DAPP"
      })), _react.default.createElement("p", {
        className: "app-name"
      }, "\u7F8E\u56E2APP\u624B\u673A\u7248"), _react.default.createElement("p", {
        className: "sl"
      }, _react.default.createElement("span", {
        className: "red"
      }, "1\u5143\u8D77"), _react.default.createElement("span", {
        className: "gary"
      }, "\u5403\u559D\u73A9\u4E50"))))));
    }
  }]);

  return Banner;
}(_react.default.Component);

exports.default = Banner;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this2;

    _classCallCheck(this, Slider);

    _this2 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
    _this2.state = {
      width: 0,
      left: 0,
      paginationOffset: 0,
      nowIndex: 0,
      maxIndex: _this2.props.children.length - 1
    };
    return _this2;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _props$autoplay = this.props.autoplay,
          autoplay = _props$autoplay === void 0 ? 0 : _props$autoplay;

      var _this = this;

      var width = document.getElementById(this.props.sId).clientWidth;
      var paginationWidth = document.getElementById(this.props.sId + "page").clientWidth;
      this.setState({
        width: width,
        paginationOffset: paginationWidth / 2
      });

      if (!!autoplay) {
        _this.interval = setInterval(function () {
          _this3.setNowIndex(_this.state.nowIndex + 1);
        }, +autoplay);
      }

      window.addEventListener("resize", _this.resetWidth.bind(_this));
    }
  }, {
    key: "resetWidth",
    value: function resetWidth() {
      var width = document.getElementById(this.props.sId).clientWidth;
      var paginationWidth = document.getElementById("".concat(this.props.sId, "page")).clientWidth;
      this.setState({
        width: width,
        paginationOffset: paginationWidth / 2
      });
    } // 设置当前页码，首页index===0

  }, {
    key: "setNowIndex",
    value: function setNowIndex(index) {
      if (index > this.state.maxIndex) {
        index = 0;
      } else if (index < 0) {
        index = this.state.maxIndex;
      }

      this.setState({
        nowIndex: index
      }); // this.setOffset(index);
    } // 前进或后退按钮

  }, {
    key: "handleNavBtn",
    value: function handleNavBtn(offset) {
      // if (!!this.props.autoplay) {
      //     clearInterval(this.interval);
      // }
      this.setNowIndex(this.state.nowIndex + offset);
    } // 根据页码设置偏移量

  }, {
    key: "setOffset",
    value: function setOffset(index) {
      var left = this.state.left;
      var unity = this.state.width;
      this.setState({
        left: -index * unity
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          children = _props.children,
          _props$paginationColo = _props.paginationColor,
          paginationColor = _props$paginationColo === void 0 ? '#fff' : _props$paginationColo,
          _props$navBtn = _props.navBtn,
          navBtn = _props$navBtn === void 0 ? true : _props$navBtn;
      var navBtnDisplay = 'block';

      if (navBtn === false) {
        navBtnDisplay = "none";
      }

      return _react.default.createElement("div", {
        className: "slider",
        id: this.props.sId
      }, _react.default.createElement("div", {
        className: "slider-content clearfix",
        style: {
          width: "".concat(this.state.width * children.length, "px")
        }
      }, children.map(function (item, index) {
        var left = _this4.state.width * -index;
        var style = {
          width: "".concat(_this4.state.width, "px"),
          left: "".concat(left, "px"),
          zIndex: 9,
          opacity: 0,
          transition: 'opacity 0.5s'
        };

        if (_this4.state.nowIndex === index) {
          style = {
            width: "".concat(_this4.state.width, "px"),
            left: "".concat(left, "px"),
            zIndex: 50,
            opacity: 1,
            transition: 'opacity 0.5s'
          };
        }

        return _react.default.createElement("div", {
          className: "slider-item",
          style: style,
          key: index
        }, item);
      })), _react.default.createElement("div", {
        className: "slider-pagination",
        id: "".concat(this.props.sId, "page"),
        style: {
          marginLeft: "-".concat(this.state.paginationOffset, "px")
        }
      }, children.map(function (item, index) {
        var opacity = 0.2;

        if (_this4.state.nowIndex === index) {
          opacity = 0.9;
        }

        return _react.default.createElement("div", {
          className: "pagination",
          onMouseOver: _this4.setNowIndex.bind(_this4, index),
          style: {
            background: paginationColor,
            opacity: opacity
          },
          key: index
        });
      })), _react.default.createElement("div", {
        className: "btn btn-next",
        onClick: this.handleNavBtn.bind(this, 1),
        style: {
          display: navBtnDisplay
        }
      }, _react.default.createElement("i", {
        className: "iconfont icon-btn_right"
      })), _react.default.createElement("div", {
        className: "btn btn-pre",
        onClick: this.handleNavBtn.bind(this, -1),
        style: {
          display: navBtnDisplay
        }
      }, _react.default.createElement("i", {
        className: "iconfont icon-btn_left"
      })));
    }
  }]);

  return Slider;
}(_react.default.Component);

exports.default = Slider;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _jsCookie = _interopRequireDefault(__webpack_require__(61));

var _user = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginCard, _React$Component);

  function LoginCard(props) {
    var _this;

    _classCallCheck(this, LoginCard);

    _this = _possibleConstructorReturn(this, (LoginCard.__proto__ || Object.getPrototypeOf(LoginCard)).call(this, props));
    _this.defaultAvatarUrl = (0, _react.url)('/img/avatar.jpg');
    _this.state = {
      localHref: '',
      avatarUrl: _this.defaultAvatarUrl,
      nickName: '你好',
      loginState: 0 // 0:未登录，1：已登录

    };
    return _this;
  }

  _createClass(LoginCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        localHref: window.location.href
      }); // 已登录

      var avatarUrl = _jsCookie.default.get('uav');

      var growthLevel = _jsCookie.default.get('ulv');

      var nickName = _jsCookie.default.get('unc');

      if (avatarUrl && growthLevel && nickName) {
        var userInfo = {
          avatarUrl: avatarUrl,
          growthLevel: growthLevel,
          nickName: nickName,
          loginState: 1
        };
        this.setState(userInfo);
      } else {
        (0, _user.getLoginedUserInfo)().then(function (json) {
          var empty = true;

          for (var item in json) {
            if (!!json[item]) {
              empty = false;
              break;
            }
          }

          if (empty === true || 'error' in json || json.error === 1) {
            return;
          }

          var userInfo = _objectWithoutProperties(json, []);

          userInfo.loginState = 1;

          _this2.setState(userInfo);
        }).catch(function (e) {
          console.log(e);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var defaultDisplay = this.state.loginState === 0 ? 'block' : 'none';
      var loginedDisplay = this.state.loginState === 1 ? 'block' : 'none';
      var headImg = this.state.avatarUrl ? this.state.avatarUrl : (0, _react.url)('/img/head-img.png');
      return _react.default.createElement("div", {
        className: "login-container"
      }, _react.default.createElement("div", {
        className: "default",
        style: {
          display: defaultDisplay
        }
      }, _react.default.createElement("div", {
        className: "head-img-row"
      }, _react.default.createElement("img", {
        src: headImg,
        alt: ""
      })), _react.default.createElement("p", {
        className: "user-name"
      }, "Hi\uFF01\u4F60\u597D"), _react.default.createElement("a", {
        className: "btn-login",
        href: "https://passport.meituan.com/account/unitivesignup?service=www&continue=".concat(encodeURIComponent('https://www.meituan.com/account/settoken?continue=' + encodeURIComponent(this.state.localHref)))
      }, "\u6CE8\u518C"), _react.default.createElement("a", {
        className: "btn-login",
        href: "https://passport.meituan.com/account/unitivelogin?service=www&continue=".concat(encodeURIComponent('https://www.meituan.com/account/settoken?continue=' + encodeURIComponent(this.state.localHref)))
      }, "\u7ACB\u5373\u767B\u5F55")), _react.default.createElement("div", {
        className: "default",
        style: {
          display: loginedDisplay
        }
      }, _react.default.createElement("div", {
        className: "setting"
      }, _react.default.createElement("a", {
        href: "https://www.meituan.com/account/settings",
        target: "_blank"
      }, _react.default.createElement("div", {
        className: "icon"
      }, _react.default.createElement("i", {
        className: "iconfont icon-setting_iconx"
      })))), _react.default.createElement("div", {
        className: "head-img-row"
      }, _react.default.createElement("a", {
        href: "https://www.meituan.com/account/userinfo/",
        target: "_blank"
      }, _react.default.createElement("img", {
        src: headImg,
        alt: ""
      }))), _react.default.createElement("div", {
        className: "nickname-row"
      }, _react.default.createElement("a", {
        href: "https://www.meituan.com/account/userinfo/",
        target: "_blank"
      }, _react.default.createElement("p", {
        className: "user-name"
      }, this.state.nickName)), _react.default.createElement("a", {
        href: "https://www.meituan.com/account/userinfo/",
        target: "_blank"
      }, _react.default.createElement("i", {
        className: " iconfont iconfont_level icon-lable_level_".concat(this.state.growthLevel)
      }))), _react.default.createElement("div", {
        className: "fn-row clearfix"
      }, _react.default.createElement("div", {
        className: "fn-item"
      }, _react.default.createElement("a", {
        href: "https://www.meituan.com/orders/ ",
        target: "_blank"
      }, _react.default.createElement("div", {
        className: "icon"
      }, _react.default.createElement("i", {
        className: "iconfont icon-order_iconx"
      })), _react.default.createElement("p", {
        className: "fn-name"
      }, "\u6211\u7684\u8BA2\u5355"))), _react.default.createElement("div", {
        className: "fn-item"
      }, _react.default.createElement("a", {
        href: "https://www.meituan.com/collections/",
        target: "_blank"
      }, _react.default.createElement("div", {
        className: "icon"
      }, _react.default.createElement("i", {
        className: "iconfont icon-collection_iconx"
      })), _react.default.createElement("p", {
        className: "fn-name"
      }, "\u6211\u7684\u6536\u85CF"))), _react.default.createElement("div", {
        className: "fn-item"
      }, _react.default.createElement("a", {
        href: "https://www.meituan.com/vouchers/",
        target: "_blank"
      }, _react.default.createElement("div", {
        className: "icon"
      }, _react.default.createElement("i", {
        className: "iconfont icon-ticket_iconx"
      })), _react.default.createElement("p", {
        className: "fn-name"
      }, "\u62B5\u7528\u5238")))), _react.default.createElement("div", {
        className: "fn-row clearfix"
      }, _react.default.createElement("div", {
        className: "fn-item"
      }, _react.default.createElement("a", {
        href: "https://www.meituan.com/account/userinfo",
        target: "_blank"
      }, _react.default.createElement("div", {
        className: "icon"
      }, _react.default.createElement("i", {
        className: "iconfont icon-money_iconx"
      })), _react.default.createElement("p", {
        className: "fn-name"
      }, "\u4F59\u989D"))), _react.default.createElement("div", {
        className: "fn-item"
      }, _react.default.createElement("a", {
        href: "https://www.meituan.com/account/userinfo/",
        target: "_blank"
      }, _react.default.createElement("div", {
        className: "icon"
      }, _react.default.createElement("i", {
        className: "iconfont icon-more_iconx"
      })), _react.default.createElement("p", {
        className: "fn-name"
      }, "\u66F4\u591A"))))));
    }
  }]);

  return LoginCard;
}(_react.default.Component);

exports.default = LoginCard;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Link = _interopRequireDefault(__webpack_require__(5));

var _url = _interopRequireDefault(__webpack_require__(41));

var _maoyan = __webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LEFT_NAV = 'b_atx2p7dc';
var navLenterTimeOut;
var navLeaveTimeOut;
var contentLeaveTimeOut;
var iconCategoryMap = {
  1: 'hc-icon-foodNew',
  20: 'hc-icon-hotelNew',
  99: 'hc-icon-maoyanNew',
  2: 'hc-icon-ktvNew',
  195: 'hc-icon-travelNew',
  10000020: 'hc-icon-zhenguoNew',
  22: 'hc-icon-beautyNew',
  20178: 'hc-icon-marriedNew',
  67: 'hc-icon-childNew',
  39: 'hc-icon-sportNew',
  20179: 'hc-icon-decorateNew',
  20285: 'hc-icon-educationNew',
  20274: 'hc-icon-medicalNew',
  234: 'hc-icon-barNew',
  10000007: 'hc-icon-waimaiNew',
  10000009: 'hc-icon-planeNew',
  10000040: 'hc-icon-lifeNew'
};

function getIcon(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    console.error('参数arr必须为数组');
  }

  for (var i = 0; i < arr.length; i++) {
    if (iconCategoryMap[arr[i].id]) {
      return iconCategoryMap[arr[i].id];
    }
  }

  return 'hc-icon-default';
}

var CategoryNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CategoryNav, _React$Component);

  function CategoryNav(props) {
    var _this;

    _classCallCheck(this, CategoryNav);

    _this = _possibleConstructorReturn(this, (CategoryNav.__proto__ || Object.getPrototypeOf(CategoryNav)).call(this, props));
    _this.state = {
      query: 'utm_source=meituanweb',
      currentNavIndex: '',
      isShowDetail: false,
      maoyanRightPcHomeCategoryList: []
    };
    _this.leftHandleMouseEnter = _this.leftHandleMouseEnter.bind(_this);
    _this.leftHandleMouseLeave = _this.leftHandleMouseLeave.bind(_this);
    _this.rightHandleMouseEnter = _this.rightHandleMouseEnter.bind(_this);
    _this.rightHandleMouseLeave = _this.rightHandleMouseLeave.bind(_this);
    return _this;
  }

  _createClass(CategoryNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // maoyandianying 需要单独请求category
      (0, _maoyan.getHotCinema)().then(function (json) {
        if ('error' in json && json.error === 1) {
          return;
        }

        var maoyanRightPcHomeCategoryList = _this2.state.maoyanRightPcHomeCategoryList;

        if (json && json.length) {
          json.forEach(function (item) {
            item.name = item.name;
            item.url = "maoyan.com/cshop/".concat(item.id, "/");
            maoyanRightPcHomeCategoryList.push(item);
          });
          var cinemaTitle = {
            id: '',
            name: '热门影院',
            url: 'maoyan.com/cinemas'
          };
          maoyanRightPcHomeCategoryList.unshift(cinemaTitle);
        }

        _this2.setState({
          maoyanRightPcHomeCategoryList: maoyanRightPcHomeCategoryList
        });
      });
    }
  }, {
    key: "leftHandleMouseEnter",
    value: function leftHandleMouseEnter(index) {
      var _this3 = this;

      this.clearNavTimeout();
      navLenterTimeOut = setTimeout(function () {
        _this3.setState({
          currentNavIndex: index,
          isShowDetail: true
        });
      }, 100);
    }
  }, {
    key: "leftHandleMouseLeave",
    value: function leftHandleMouseLeave() {
      var _this4 = this;

      this.clearNavTimeout();
      navLeaveTimeOut = setTimeout(function () {
        _this4.setState({
          isShowDetail: false
        });
      }, 100);
    }
  }, {
    key: "rightHandleMouseEnter",
    value: function rightHandleMouseEnter() {
      this.clearNavTimeout();
    }
  }, {
    key: "rightHandleMouseLeave",
    value: function rightHandleMouseLeave() {
      var _this5 = this;

      this.clearNavTimeout();
      contentLeaveTimeOut = setTimeout(function () {
        _this5.setState({
          isShowDetail: false
        });
      }, 100);
    }
  }, {
    key: "clearNavTimeout",
    value: function clearNavTimeout() {
      if (navLeaveTimeOut) {
        clearTimeout(navLeaveTimeOut);
      }

      if (navLenterTimeOut) {
        clearTimeout(navLenterTimeOut);
      }

      if (contentLeaveTimeOut) {
        clearTimeout(contentLeaveTimeOut);
      }
    }
  }, {
    key: "dealHref",
    value: function dealHref(str) {
      var href = '';

      if (!(str && str.length && typeof str === 'string')) {
        return href;
      }

      var host = _react.state.get('$config.host.www');

      var currentCity = this.props.currentCity;

      if (host === 'web.fe.st.meituan.com') {
        href = str.replace('{city}.meituan.com', host).replace('{cityQP}', currentCity.pinyin);
      } else {
        href = str.replace('{city}', currentCity.acronym).replace('{cityQP}', currentCity.pinyin);
      }

      return "https://".concat(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _props = this.props,
          categorys = _props.categorys,
          films = _props.films;
      var _state = this.state,
          currentNavIndex = _state.currentNavIndex,
          isShowDetail = _state.isShowDetail,
          maoyanRightPcHomeCategoryList = _state.maoyanRightPcHomeCategoryList;
      var filmsCateList = [];

      if (films && films.length) {
        filmsCateList = films.map(function (item) {
          return {
            name: item.nm,
            url: "maoyan.com/films/".concat(item.id)
          };
        });
        var maoyanTitle = {
          id: 99,
          name: '热映电影',
          url: 'maoyan.com'
        };
        filmsCateList.unshift(maoyanTitle);
      }

      return _react.default.createElement("div", {
        className: "category-nav-container"
      }, _react.default.createElement("div", {
        className: "category-nav-title-wrapper"
      }, _react.default.createElement("span", {
        className: "category-nav-title"
      }, "\u5168\u90E8\u5206\u7C7B"), _react.default.createElement("span", {
        className: "title-icon"
      })), _react.default.createElement("div", {
        className: "category-nav-content-wrapper",
        onMouseLeave: function onMouseLeave(e) {
          return _this6.leftHandleMouseLeave(e);
        }
      }, _react.default.createElement("ul", null, categorys.map(function (cates, fi) {
        if (cates && cates.leftPcHomeCategoryList && cates.leftPcHomeCategoryList.length > 0) {
          return _react.default.createElement("li", {
            className: "nav-li",
            key: fi,
            onMouseEnter: function onMouseEnter() {
              return _this6.leftHandleMouseEnter(fi);
            }
          }, _react.default.createElement("i", {
            className: "iconfontNew ".concat(getIcon(cates.leftPcHomeCategoryList))
          }), _react.default.createElement("span", {
            className: "nav-text-wrapper"
          }, cates.leftPcHomeCategoryList.map(function (leftItem, si) {
            return _react.default.createElement("span", {
              key: si
            }, _react.default.createElement(_Link.default, {
              className: "nav-text",
              href: _this6.dealHref(leftItem.url),
              target: "_blank",
              bid: LEFT_NAV,
              lab: {
                custom: {
                  cat_id: leftItem.id,
                  index: "".concat(fi + 1, "_").concat(si + 1),
                  title: leftItem.name
                }
              }
            }, leftItem.name, leftItem.name === '酒店' ? _react.default.createElement("span", {
              className: "nav-promotion"
            }, "HOT") : ''), si < cates.leftPcHomeCategoryList.length - 1 ? ' / ' : null);
          })), _react.default.createElement("i", {
            className: "nav-right-arrow"
          }));
        }

        return null;
      }))), _react.default.createElement("div", {
        className: isShowDetail ? 'category-nav-detail-wrapper active' : 'category-nav-detail-wrapper',
        onMouseEnter: this.rightHandleMouseEnter,
        onMouseLeave: this.rightHandleMouseLeave
      }, categorys.map(function (cates, fi) {
        if (cates) {
          var rightData = cates.leftPcHomeCategoryList[0].id === 99 ? [filmsCateList, maoyanRightPcHomeCategoryList] : cates.rightPcHomeCategoryList;
          return _react.default.createElement("div", {
            className: currentNavIndex === fi ? 'category-nav-detail active' : 'category-nav-detail',
            key: fi
          }, rightData.map(function (rightItem, si) {
            if (rightItem && rightItem.length > 0) {
              return _react.default.createElement("div", {
                className: "detail-area",
                key: si
              }, _react.default.createElement("div", {
                className: "detail-title-wrapper clearfix"
              }, _react.default.createElement("h2", null, _react.default.createElement(_Link.default, {
                className: "detail-title",
                href: _this6.dealHref(rightItem[0].url),
                onClick: _url.default,
                target: "_blank",
                "data-query": _this6.state.query,
                bid: LEFT_NAV,
                lab: {
                  custom: {
                    cat_id: rightItem[0].id,
                    index: "".concat(fi + 1, "_").concat(si + 1, "_0"),
                    title: rightItem[0].name
                  }
                }
              }, rightItem[0].name)), _react.default.createElement(_Link.default, {
                className: "detail-more",
                href: _this6.dealHref(rightItem[0].url),
                onClick: _url.default,
                target: "_blank",
                "data-query": _this6.state.query,
                bid: LEFT_NAV,
                lab: {
                  custom: {
                    cat_id: rightItem[0].id,
                    index: "".concat(fi + 1, "_").concat(si + 1, "_more"),
                    title: rightItem[0].name
                  }
                }
              }, "\u66F4\u591A", _react.default.createElement("i", {
                className: "detail-right-arrow"
              }))), _react.default.createElement("div", {
                className: "detail-content"
              }, rightItem.map(function (item, ti) {
                if (ti > 0) {
                  return _react.default.createElement(_Link.default, {
                    className: "detail-text",
                    href: _this6.dealHref(item.url),
                    onClick: _url.default,
                    target: "_blank",
                    "data-query": _this6.state.query,
                    key: ti,
                    bid: LEFT_NAV,
                    lab: {
                      custom: {
                        cat_id: item.id,
                        index: "".concat(fi + 1, "_").concat(si + 1, "_").concat(ti),
                        title: item.name
                      }
                    }
                  }, item.name);
                }

                return null;
              })));
            }

            return null;
          }));
        }

        return null;
      })));
    }
  }]);

  return CategoryNav;
}(_react.default.Component);

exports.default = CategoryNav;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this.state = {
      viewport: null
      /**
       * updateViewport
       * @param {*} dom
       */

    }, _temp));
  }

  _createClass(Container, [{
    key: "updateViewport",
    value: function updateViewport(dom) {
      var rect = dom.getBoundingClientRect();
      var inViewport = rect.top >= 0 - rect.height && rect.left >= 0 - rect.width && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth);
      var viewport = this.state.viewport;

      if (viewport !== inViewport) {
        if (inViewport === true) {
          this.onShow({
            target: this,
            viewport: viewport
          });
        }

        if (inViewport === false) {
          this.onHide({
            target: this,
            viewport: viewport
          });
        }

        this.setState({
          viewport: inViewport
        });
      }
    }
    /**
     * find element's scroll container
     * @param {*} dom
     * @param {*} dir
     */

  }, {
    key: "findContainer",
    value: function findContainer(dom, dir) {
      var NODE_TYPE = {
        DOCUMENT: 9
      };
      var container = window;

      while (dom && dom.nodeType !== NODE_TYPE.DOCUMENT) {
        var style = window.getComputedStyle(dom);

        if (style["overflow".concat(dir.toUpperCase())] === 'scroll') {
          container = dom;
          break;
        }

        dom = dom.parentNode;
      }

      return container;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var dom = this.refs.container;
      this.containerX = this.findContainer(dom, 'x');
      this.containerY = this.findContainer(dom, 'y');

      this.handler = function () {
        return _this2.updateViewport(dom);
      };

      this.containerX.addEventListener('scroll', this.handler, false);

      if (this.containerX !== this.containerY) {
        this.containerY.addEventListener('scroll', this.handler, false);
      }

      this.updateViewport(dom);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props, state) {
      var viewport = this.state.viewport;
      return viewport !== state.viewport;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.containerX.removeEventListener('scroll', this.handler);
      this.containerY.removeEventListener('scroll', this.handler);
    }
  }, {
    key: "onShow",
    value: function onShow() {
      var onShow = this.props.onShow;
      if (typeof onShow === 'function') onShow.apply(void 0, arguments);
      return this;
    }
  }, {
    key: "onHide",
    value: function onHide() {
      var onHide = this.props.onHide;
      if (typeof onHide === 'function') onHide.apply(void 0, arguments);
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      var viewport = this.state.viewport;

      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["children"]);

      return _react.default.createElement("div", _extends({
        ref: "container",
        className: (0, _react.cls)({
          'container-hide': !viewport
        })
      }, props), children);
    }
  }]);

  return Container;
}(_react.default.Component);

exports.default = Container;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexBannerBackUp = void 0;
var indexBannerBackUp = [{
  position: 1,
  content: [{
    url: 'https://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
    href: 'https://hotel.meituan.com/',
    txt: '住酒店——品质出游 特价酒店'
  }, {
    url: 'https://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
    href: '/meishi/',
    txt: '吃美食——精品推荐 优惠多多'
  }, {
    url: 'https://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
    href: 'http://waimai.meituan.com/',
    txt: '点外卖——品质商家 准时必达'
  }, {
    url: 'https://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
    href: 'https://maoyan.com/',
    txt: '看电影——热门影讯 提前选座'
  }, {
    url: 'https://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg',
    href: 'https://pc.meituan.com/?activity_code=19_00038033',
    txt: '餐饮商家福利'
  }]
}, {
  position: 2,
  content: {
    url: 'https://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg',
    href: '/xiuxianyule/',
    txt: '休闲娱乐'
  }
}, {
  position: 3,
  content: {
    url: 'https://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png',
    href: '//hotel.meituan.com',
    txt: '酒店'
  }
}, {
  position: 4,
  content: {
    url: 'https://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg',
    href: '/jiaoyupeixun/?utm_source=MTPCmain-4',
    txt: '教育培训'
  }
}, {
  position: 5,
  content: {
    url: 'https://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg',
    href: 'http://emis.meishi.meituan.com/merchantsSettled',
    txt: '我是商家'
  }
}];
exports.indexBannerBackUp = indexBannerBackUp;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _ScenesCheap = _interopRequireDefault(__webpack_require__(212));

var _ScenesQuality = _interopRequireDefault(__webpack_require__(213));

var _scenes = __webpack_require__(125);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scenes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scenes, _React$Component);

  function Scenes(props) {
    var _this;

    _classCallCheck(this, Scenes);

    _this = _possibleConstructorReturn(this, (Scenes.__proto__ || Object.getPrototypeOf(Scenes)).call(this, props));
    _this.state = {
      cheapList: _this.props.cheapList,
      qualityList: _this.props.qualityList
    };
    return _this;
  }

  _createClass(Scenes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          currentCity = _props.currentCity,
          isSpider = _props.isSpider;

      if (!isSpider) {
        var fetchCheapParams = {
          theme: 'cheap',
          tab: 'all',
          ci: currentCity.id,
          limit: 20
        };
        var fetchQualityParams = {
          theme: 'quality',
          tab: 'all',
          ci: currentCity.id,
          limit: 12
        };
        (0, _scenes.getScenesList)(fetchQualityParams).then(function (json) {
          if (json) {
            _this2.setState({
              qualityList: json
            });
          }
        }).catch(function (error) {
          console.error(error);
        });
        (0, _scenes.getScenesList)(fetchCheapParams).then(function (json) {
          if (json) {
            _this2.setState({
              cheapList: json
            });
          }
        }).catch(function (error) {
          console.error(error);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          currentCity = _props2.currentCity,
          cheapBid = _props2.cheapBid,
          qualityBid = _props2.qualityBid;
      var _state = this.state,
          cheapList = _state.cheapList,
          qualityList = _state.qualityList;
      return _react.default.createElement("div", {
        className: "scenes-container"
      }, qualityList && _react.default.createElement(_ScenesQuality.default, {
        bid: qualityBid,
        qualityList: qualityList,
        currentCity: currentCity
      }), cheapList && _react.default.createElement(_ScenesCheap.default, {
        bid: cheapBid,
        cheapList: cheapList,
        currentCity: currentCity
      }));
    }
  }]);

  return Scenes;
}(_react.default.Component);

exports.default = Scenes;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Image = _interopRequireDefault(__webpack_require__(12));

var _IndexNav = _interopRequireDefault(__webpack_require__(107));

var _Link = _interopRequireDefault(__webpack_require__(5));

var _scenes = __webpack_require__(125);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScenesCheap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScenesCheap, _React$Component);

  function ScenesCheap(props) {
    var _this;

    _classCallCheck(this, ScenesCheap);

    _this = _possibleConstructorReturn(this, (ScenesCheap.__proto__ || Object.getPrototypeOf(ScenesCheap)).call(this, props));
    var tab = _this.props.cheapList.tab.tab || 'all';
    var cheapData = _this.props.cheapList;
    _this.state = {
      cheapData: cheapData
    };
    _this.cache = {};
    _this.cache[tab] = cheapData;
    _this.handleTabChange = _this.handleTabChange.bind(_this);
    return _this;
  }

  _createClass(ScenesCheap, [{
    key: "handleTabChange",
    value: function handleTabChange(e) {
      var _this2 = this;

      var tab = e.currentTab.tab; // console.log('handleTabChange==>this.cache', this.cache);

      var data = this.cache[tab];
      var currentCity = this.props.currentCity;

      if (data) {
        this.setState({
          cheapData: data
        });
      } else {
        var fetchParams = {
          theme: 'cheap',
          tab: tab,
          ci: currentCity.id,
          limit: 20
        };
        (0, _scenes.getScenesList)(fetchParams).then(function (json) {
          if (json) {
            _this2.setState({
              cheapData: json
            });

            _this2.cache[tab] = json;
          }
        }).catch(function (error) {
          console.error(error);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cheapStyle;

      var bid = this.props.bid;
      var cheapStyle = (_cheapStyle = {
        backgroundColor: '#BEA474',
        backgroundImage: '-webkit-linear-gradient(left,  #FF714A 2%, #FC4242 97%)'
      }, _defineProperty(_cheapStyle, "backgroundImage", '-o-linear-gradient(right,  #FF714A 2%, #FC4242 97%)'), _defineProperty(_cheapStyle, "backgroundImage", '-moz-linear-gradient(right,  #FF714A 2%, #FC4242 97%)'), _defineProperty(_cheapStyle, "backgroundImage", 'linear-gradient(to right,  #FF714A 2%, #FC4242 97%)'), _cheapStyle);
      var imgParams = {
        w: 213,
        h: 120,
        e: 1,
        c: 1
      };
      var cheapData = this.state.cheapData;
      return _react.default.createElement("div", {
        className: "offer-container"
      }, _react.default.createElement(_IndexNav.default, {
        title: "\u72E0\u4F18\u60E0",
        currentTab: cheapData.tab,
        tabs: cheapData.tabs,
        onTabChange: this.handleTabChange,
        bgStyle: cheapStyle,
        isShowTotal: false
      }), _react.default.createElement("div", {
        className: "cheap-area clearfix"
      }, cheapData.data.map(function (data) {
        return _react.default.createElement(_Link.default, {
          className: "cheap-card",
          key: data.id,
          to: data.iUrl,
          bid: bid,
          target: "_blank"
        }, _react.default.createElement("div", {
          className: "cheap-img"
        }, _react.default.createElement(_Image.default, {
          src: data.imgUrl,
          process: imgParams,
          lazyload: true
        })), _react.default.createElement("div", {
          className: "poi-info"
        }, _react.default.createElement("div", {
          className: data['from'] === 'DEAL_LVYOU' ? 'lvyou-title' : 'title',
          title: data.title
        }, data.title), data['from'] !== 'DEAL_LVYOU' && _react.default.createElement("div", {
          className: "sub-title",
          title: data.subTitle
        }, data.subTitle), _react.default.createElement("div", {
          className: "tags-wrapper clearfix"
        }, data.tags && data.tags.length > 0 && data.tags.map(function (tag, index) {
          return _react.default.createElement("div", {
            className: "tag",
            key: index
          }, tag.tag);
        })), _react.default.createElement("div", {
          className: "price-info"
        }, data.currentPrice && _react.default.createElement("span", {
          className: "current-price-wrapper"
        }, !data.isSold && _react.default.createElement("span", {
          className: "price-symbol numfont"
        }, "\xA5"), _react.default.createElement("span", {
          className: "current-price numfont"
        }, data.currentPrice)), data.oldPrice && _react.default.createElement("span", {
          className: "old-price"
        }, data.oldPrice), data.bottomInfo && _react.default.createElement("span", {
          className: "sold"
        }, data.bottomInfo)), data.discount && _react.default.createElement("div", {
          className: "extra-discount"
        })));
      })));
    }
  }]);

  return ScenesCheap;
}(_react.default.Component);

exports.default = ScenesCheap;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Image = _interopRequireDefault(__webpack_require__(12));

var _IndexNav = _interopRequireDefault(__webpack_require__(107));

var _Link = _interopRequireDefault(__webpack_require__(5));

var _scenes = __webpack_require__(125);

var _url = _interopRequireDefault(__webpack_require__(41));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScenesQuality =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScenesQuality, _React$Component);

  function ScenesQuality(props) {
    var _this;

    _classCallCheck(this, ScenesQuality);

    _this = _possibleConstructorReturn(this, (ScenesQuality.__proto__ || Object.getPrototypeOf(ScenesQuality)).call(this, props));
    _this.cache = {};
    var tab = _this.props.qualityList.tab.tab || 'all';
    var qualityData = _this.props.qualityList;
    _this.state = {
      query: 'utm_source=meituanweb',
      qualityData: qualityData
    };
    _this.cache[tab] = qualityData;
    _this.handleTabChange = _this.handleTabChange.bind(_this);
    return _this;
  }

  _createClass(ScenesQuality, [{
    key: "handleTabChange",
    value: function handleTabChange(e) {
      var _this2 = this;

      var tab = e.currentTab.tab;
      var currentCity = this.props.currentCity;
      var data = this.cache[tab];

      if (data) {
        this.setState({
          qualityData: data
        });
      } else {
        var fetchParams = {
          theme: 'quality',
          tab: tab,
          ci: currentCity.id,
          limit: 10
        };
        (0, _scenes.getScenesList)(fetchParams).then(function (json) {
          if (json) {
            _this2.setState({
              qualityData: json
            });

            _this2.cache[tab] = json;
          }
        }).catch(function (error) {
          console.error(error);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _qualityStyle,
          _this3 = this;

      var bid = this.props.bid;
      var qualityStyle = (_qualityStyle = {
        backgroundColor: '#BEA474',
        backgroundImage: '-webkit-linear-gradient(left, #C2B08E 3%, #BEA474 100%)'
      }, _defineProperty(_qualityStyle, "backgroundImage", '-o-linear-gradient(right, #C2B08E 3%, #BEA474 100%)'), _defineProperty(_qualityStyle, "backgroundImage", '-moz-linear-gradient(right, #C2B08E 3%, #BEA474 100%)'), _defineProperty(_qualityStyle, "backgroundImage", 'linear-gradient(to right, #C2B08E 3%, #BEA474 100%)'), _qualityStyle);
      var imgParams = {
        w: 368,
        h: 208,
        e: 1,
        c: 1
      };
      var qualityData = this.state.qualityData;
      return _react.default.createElement("div", {
        className: "quality-container"
      }, _react.default.createElement(_IndexNav.default, {
        title: '有格调',
        currentTab: qualityData.tab,
        tabs: qualityData.tabs,
        onTabChange: this.handleTabChange,
        bgStyle: qualityStyle,
        isShowTotal: false
      }), _react.default.createElement("div", {
        className: "quality-area clearfix"
      }, qualityData.data.map(function (data) {
        return _react.default.createElement(_Link.default, {
          className: "quality-card",
          key: data.id,
          to: data.iUrl,
          onClick: _url.default,
          bid: bid,
          "data-query": _this3.state.query,
          target: "_blank"
        }, _react.default.createElement("div", {
          className: "quality-img"
        }, _react.default.createElement(_Image.default, {
          src: data.imgUrl,
          process: imgParams,
          lazyload: true
        })), _react.default.createElement("div", {
          className: "poi-info"
        }, _react.default.createElement("div", {
          className: "title",
          title: data.title
        }, data.title), // 因css模块静态分析是以【from空格】进行正则匹配，不要将data['from']改为data.from
        data['from'] !== 'POI_HOTEL' && _react.default.createElement("div", {
          className: "sub-title",
          title: data.subTitle
        }, data.subTitle), data['from'] === 'POI_HOTEL' && _react.default.createElement("div", {
          className: "tags-wrapper clearfix"
        }, data.tags && data.tags.length > 0 && data.tags.map(function (tag, index) {
          return _react.default.createElement("div", {
            className: "tag",
            key: index
          }, tag.tag);
        })), _react.default.createElement("div", {
          className: "price-info"
        }, data.currentPrice && _react.default.createElement("span", {
          className: "current-price-wrapper",
          onClick: function onClick() {
            return _this3.handleClick(data.iUrl);
          }
        }, _react.default.createElement("span", {
          className: "price-symbol numfont"
        }, "\xA5"), _react.default.createElement("span", {
          className: "current-price numfont"
        }, data.currentPrice, data.priceType && _react.default.createElement("span", {
          className: "current-price-type"
        }, "/", data.priceType))), data.oldPrice && _react.default.createElement("span", {
          className: "old-price"
        }, data.oldPrice), data.bottomInfo && _react.default.createElement("span", {
          className: "sold bottom-right-info"
        }, data.bottomInfo))));
      })));
    }
  }]);

  return ScenesQuality;
}(_react.default.Component);

exports.default = ScenesQuality;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _IndexNav = _interopRequireDefault(__webpack_require__(107));

var _zhenguo = __webpack_require__(151);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_IMG = 'https://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png';
var HOT_CITY = [{
  cityId: 310100,
  cityName: '上海'
}, {
  cityId: 110100,
  cityName: '北京'
}, {
  cityId: 510100,
  cityName: '成都'
}, {
  cityId: 440100,
  cityName: '广州'
}, {
  cityId: 330100,
  cityName: '杭州'
}, {
  cityId: 440300,
  cityName: '深圳'
}];

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    var _this$props$cityList = _this.props.cityList,
        cityList = _this$props$cityList === void 0 ? [] : _this$props$cityList;

    if (cityList.length === 0) {
      cityList = HOT_CITY;
    }

    var tabs = cityList.map(function (city, index) {
      return {
        tab: city.cityId,
        text: city.cityName,
        key: index
      };
    });
    _this.state = {
      tabs: tabs,
      currentCity: tabs[0].tab,
      currentTab: tabs[0],
      productMap: new Map(),
      productDOMArr: []
    };
    _this.defaultAvatars = ['https://p0.meituan.net/mmc/89bec9d64cde38d441cf976f751c482e3788.png', 'https://p1.meituan.net/mmc/8fd17014c791cdf393bed473dab116ff3643.png', 'https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png', 'https://p1.meituan.net/mmc/e663563d638f3f2c56274e28ac949a143761.png', 'https://p1.meituan.net/mmc/9eb02e99626203347ba0237ac7699f924241.png'];
    return _this;
  }

  _createClass(Index, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$cityList = nextProps.cityList,
          cityList = _nextProps$cityList === void 0 ? [] : _nextProps$cityList;

      if (cityList.length > 0) {
        var tabs = cityList.map(function (city, index) {
          return {
            tab: city.cityId,
            text: city.cityName,
            key: index
          };
        });
        this.setState({
          tabs: tabs,
          currentCity: tabs[0].tab,
          currentTab: tabs[0]
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var cityId = this.state.currentCity;
      (0, _zhenguo.getMinsu)({
        cityId: cityId
      }).then(function (json) {
        if (json.status === 0) {
          _this2.setMinsu(cityId, json.productList);
        }
      });
    }
  }, {
    key: "setAvatar",
    value: function setAvatar(avatarUrl, index) {
      if (avatarUrl) {
        return avatarUrl;
      }

      return this.defaultAvatars[index % 5];
    }
  }, {
    key: "handleTabChange",
    value: function handleTabChange(cur) {
      var _this3 = this;

      var cityId = cur.currentTab.tab;

      if (this.state.productMap.has(cityId)) {
        this.setState({
          currentCity: cityId
        }, function () {
          _this3.renderProducts(cityId);
        });
      } else {
        (0, _zhenguo.getMinsu)({
          cityId: cityId
        }).then(function (json) {
          if (json.status === 0) {
            _this3.setMinsu(cityId, json.productList);
          }
        });
      }
    }
  }, {
    key: "setMinsu",
    value: function setMinsu(cityId, productList) {
      var _this4 = this;

      var productMap = this.state.productMap;

      if (!productMap.has(cityId)) {
        productMap.set(cityId, productList);
      }

      this.setState({
        productMap: productMap,
        currentCity: cityId
      }, function () {
        _this4.renderProducts(cityId);
      });
    }
  }, {
    key: "renderProducts",
    value: function renderProducts(currentCity) {
      var _state = this.state,
          productMap = _state.productMap,
          productDOMArr = _state.productDOMArr;

      if (productMap.size > productDOMArr.length) {
        var productList = productMap.get(currentCity);
        productDOMArr.push({
          cityId: currentCity,
          list: productList.slice(0, 6)
        });
      }

      this.setState({
        productDOMArr: productDOMArr
      });
    }
  }, {
    key: "productImgErr",
    value: function productImgErr(e) {
      e.target.src = DEFAULT_IMG;
    }
  }, {
    key: "render",
    value: function render() {
      var _offerStyle,
          _this5 = this;

      var _state2 = this.state,
          tabs = _state2.tabs,
          currentTab = _state2.currentTab,
          productDOMArr = _state2.productDOMArr,
          currentCity = _state2.currentCity;
      var color1 = '#F3B64A';
      var color2 = '#F2C545';
      var offerStyle = (_offerStyle = {
        background: color1,
        backgroundImage: "-webkit-linear-gradient(left,  ".concat(color1, " 2%, ").concat(color2, " 97%)")
      }, _defineProperty(_offerStyle, "backgroundImage", "-o-linear-gradient(right,  ".concat(color1, " 2%, ").concat(color2, " 97%)")), _defineProperty(_offerStyle, "backgroundImage", "-moz-linear-gradient(right,  ".concat(color1, " 2%, ").concat(color2, " 97%)")), _defineProperty(_offerStyle, "backgroundImage", "linear-gradient(to right,  ".concat(color1, " 2%, ").concat(color2, " 97%)")), _offerStyle);
      return _react.default.createElement("div", {
        className: "zhenguo-container"
      }, _react.default.createElement(_IndexNav.default, {
        title: '推荐民宿',
        currentTab: currentTab,
        tabs: tabs,
        onTabChange: this.handleTabChange.bind(this),
        bgStyle: offerStyle,
        totalHref: "https://phoenix.meituan.com?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend"
      }), _react.default.createElement("div", {
        className: "minsu-ls-view clearfix"
      }, productDOMArr.map(function (item, key) {
        return _react.default.createElement("div", {
          className: "products",
          style: {
            display: currentCity === item.cityId ? 'flex' : 'none'
          },
          key: key
        }, item.list.map(function (product, index) {
          return _react.default.createElement("div", {
            className: "minsu-item",
            key: index
          }, _react.default.createElement("a", {
            href: "https://phoenix.meituan.com/housing/".concat(product.productId, "/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend"),
            target: "_blank"
          }, _react.default.createElement("div", {
            className: "product-card-header"
          }, _react.default.createElement("img", {
            src: "".concat(product.coverImage, "@740w_416h_1e_1c"),
            onError: _this5.productImgErr,
            className: "product-img"
          }), _react.default.createElement("img", {
            src: _this5.setAvatar("".concat(product.hostAvatarUrl, "@200w_200h_1e_1c"), index),
            alt: "",
            className: "head-img"
          })), _react.default.createElement("div", {
            className: "product-info"
          }, _react.default.createElement("p", {
            className: "product-title"
          }, product.title), _react.default.createElement("p", {
            className: "sub-title"
          }, product.layoutRoom > 0 ? _react.default.createElement("span", null, "\u6574\u5957", product.layoutRoom, "\u5C45\u5BA4\xB7") : null, product.maxGuestNumber > 0 ? _react.default.createElement("span", null, "\u53EF\u4F4F", product.maxGuestNumber, "\u4EBA | ") : null, _react.default.createElement("span", null, product.locationArea)), _react.default.createElement("p", {
            className: "price-number numfont price"
          }, _react.default.createElement("span", {
            className: "price-icon"
          }, "\uFFE5"), product.price))));
        }));
      })));
    }
  }]);

  return Index;
}(_react.default.Component);

exports.default = Index;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _IndexNav = _interopRequireDefault(__webpack_require__(107));

var _index = _interopRequireDefault(__webpack_require__(24));

var _Link = _interopRequireDefault(__webpack_require__(5));

var _util = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color1 = '#58AEDD';
var color2 = '#42BFCD';
var recommendStyle = {
  background: color1,
  WebkitBackgroundImage: "-webkit-linear-gradient(left,  ".concat(color1, " 2%, ").concat(color2, " 97%)"),
  MozBackgroundImage: "-moz-linear-gradient(right,  ".concat(color1, " 2%, ").concat(color2, " 97%)"),
  backgroundImage: "linear-gradient(to right,  ".concat(color1, " 2%, ").concat(color2, " 97%)")
};

var Recommends =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Recommends, _React$Component);

  function Recommends() {
    _classCallCheck(this, Recommends);

    return _possibleConstructorReturn(this, (Recommends.__proto__ || Object.getPrototypeOf(Recommends)).apply(this, arguments));
  }

  _createClass(Recommends, [{
    key: "render",
    value: function render() {
      var tab = {
        tab: 0,
        text: '为你甄选最适合的'
      };
      var _props = this.props,
          _props$recommendList = _props.recommendList,
          recommendList = _props$recommendList === void 0 ? [] : _props$recommendList,
          bid = _props.bid;

      function renderItem(item) {
        var url = "//".concat((0, _util.poiUrl)(item.firstCate[0]), "/").concat(item.itemId, "/");
        return _react.default.createElement(_Link.default, {
          className: "link recommend-item",
          bid: bid,
          to: url,
          key: item.itemId,
          target: "_blank"
        }, _react.default.createElement("div", {
          className: "card-container"
        }, _react.default.createElement(_index.default, {
          recommendInfo: item,
          heightFixed: true,
          imageProcess: {
            w: 214,
            h: 120,
            e: 1,
            c: 1
          }
        })));
      }

      return _react.default.createElement("div", {
        className: "recommend-container"
      }, _react.default.createElement(_IndexNav.default, {
        title: '猜你喜欢',
        currentTab: tab,
        tabs: [tab],
        isShowTotal: false,
        bgStyle: recommendStyle
      }), _react.default.createElement("div", {
        className: "recommend-list"
      }, recommendList.map(renderItem)));
    }
  }]);

  return Recommends;
}(_react.default.Component);

exports.default = Recommends;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _MaoyanSlider = _interopRequireDefault(__webpack_require__(126));

var _IndexNav = _interopRequireDefault(__webpack_require__(107));

var _maoyan = __webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    var _this$props = _this.props,
        _this$props$tabs = _this$props.tabs,
        tabs = _this$props$tabs === void 0 ? [] : _this$props$tabs,
        hot = _this$props.hot,
        coming = _this$props.coming,
        total = _this$props.total,
        total2 = _this$props.total2;
    var currentTabKey = 1;

    if (tabs.length > 0) {
      currentTabKey = tabs[0].key;
    }

    _this.state = {
      tabs: tabs,
      hot: hot,
      coming: coming,
      total: total,
      total2: total2,
      currentTabKey: currentTabKey
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      switch (nextProps.tabs.length) {
        case 1:
          if (nextProps.tabs[0].key === 1) {
            this.setState({
              coming: [],
              hot: nextProps.hot,
              tabs: nextProps.tabs,
              currentTabKey: nextProps.tabs[0].key
            });
          } else {
            this.setState({
              hot: [],
              coming: nextProps.coming,
              tabs: nextProps.tabs,
              currentTabKey: nextProps.tabs[0].key
            });
          }

          break;

        case 2:
          this.setState({
            hot: nextProps.hot,
            coming: nextProps.coming,
            tabs: nextProps.tabs,
            currentTabKey: nextProps.tabs[0].key
          });
          break;

        default:
          this.setState({
            hot: [],
            coming: [],
            tabs: [],
            currentTabKey: 1
          });
          break;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleTabChange",
    value: function handleTabChange(curTab) {
      var currentTab = curTab.currentTab;
      this.setState({
        currentTabKey: currentTab.key
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _offerStyle;

      var _state = this.state,
          hot = _state.hot,
          coming = _state.coming,
          total = _state.total,
          total2 = _state.total2,
          tabs = _state.tabs,
          currentTabKey = _state.currentTabKey;
      var bid = this.props.bid;
      var color1 = '#FA3C68';
      var color2 = '#FE464D';
      var offerStyle = (_offerStyle = {
        background: color1,
        backgroundImage: "-webkit-linear-gradient(left,  ".concat(color1, " 2%, ").concat(color2, " 97%)")
      }, _defineProperty(_offerStyle, "backgroundImage", "-o-linear-gradient(right,  ".concat(color1, " 2%, ").concat(color2, " 97%)")), _defineProperty(_offerStyle, "backgroundImage", "-moz-linear-gradient(right,  ".concat(color1, " 2%, ").concat(color2, " 97%)")), _defineProperty(_offerStyle, "backgroundImage", "linear-gradient(to right,  ".concat(color1, " 2%, ").concat(color2, " 97%)")), _offerStyle);

      if (!tabs || tabs.length === 0) {
        return null;
      }

      return _react.default.createElement("div", {
        className: "maoyan-container"
      }, _react.default.createElement(_IndexNav.default, {
        title: '猫眼电影',
        currentTab: tabs[0],
        tabs: tabs,
        onTabChange: this.handleTabChange.bind(this),
        bgStyle: offerStyle,
        totalHref: "https://maoyan.com/",
        bid: bid
      }), _react.default.createElement("div", {
        className: "scenes-body"
      }, _react.default.createElement("div", {
        className: "hot-container",
        style: {
          display: currentTabKey === 1 ? 'block' : 'none'
        }
      }, _react.default.createElement(_MaoyanSlider.default, {
        films: hot,
        total: total,
        bid: bid
      })), _react.default.createElement("div", {
        className: "coming-container",
        style: {
          display: currentTabKey === 2 ? 'block' : 'none'
        }
      }, _react.default.createElement(_MaoyanSlider.default, {
        films: coming,
        total: total2,
        bid: bid
      }))));
    }
  }]);

  return Index;
}(_react.default.Component);

exports.default = Index;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Image = _interopRequireDefault(__webpack_require__(12));

var _RateStars = _interopRequireDefault(__webpack_require__(15));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecommendCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RecommendCard, _React$Component);

  function RecommendCard() {
    _classCallCheck(this, RecommendCard);

    return _possibleConstructorReturn(this, (RecommendCard.__proto__ || Object.getPrototypeOf(RecommendCard)).apply(this, arguments));
  }

  _createClass(RecommendCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          recommendInfo = _props.recommendInfo,
          heightFixed = _props.heightFixed,
          imageProcess = _props.imageProcess;

      function align(classStr) {
        classStr = classStr || '';

        if (heightFixed === true) {
          return classStr + ' aligned';
        }

        return classStr;
      }

      function renderPrice() {
        var scoreHtml = '';

        if (recommendInfo && recommendInfo.lowPrice) {
          scoreHtml = _react.default.createElement("span", null, _react.default.createElement("span", {
            className: "yuan"
          }, "\uFFE5"), _react.default.createElement("span", {
            className: "price-number numfont"
          }, recommendInfo.lowPrice), _react.default.createElement("span", {
            className: "price-desc"
          }, "\u8D77"));
        } else if (recommendInfo && recommendInfo.avgPrice) {
          scoreHtml = _react.default.createElement("span", null, _react.default.createElement("span", {
            className: "yuan"
          }, "\uFFE5"), _react.default.createElement("span", {
            className: "price-number numfont"
          }, recommendInfo.avgPrice));
        } else {
          return null;
        }

        return _react.default.createElement("div", {
          className: "price-box"
        }, scoreHtml);
      }

      return _react.default.createElement("div", {
        className: "recommend-card-wrapper"
      }, _react.default.createElement("div", {
        className: "img-box"
      }, _react.default.createElement(_Image.default, {
        src: recommendInfo.imgUrl,
        process: imageProcess
      })), _react.default.createElement("div", {
        className: "info-box"
      }, _react.default.createElement("div", {
        className: align('title'),
        title: heightFixed ? recommendInfo.title : ''
      }, recommendInfo.title), _react.default.createElement("div", {
        className: align('score-line')
      }, _react.default.createElement("div", {
        className: "score"
      }, " ", _react.default.createElement(_RateStars.default, {
        score: recommendInfo.score
      })), recommendInfo.commentNum ? _react.default.createElement("div", {
        className: "comment-number"
      }, recommendInfo.commentNum, "\u4E2A\u8BC4\u4EF7") : null), _react.default.createElement("div", {
        className: align('desc-line')
      }, recommendInfo.areaName ? _react.default.createElement("div", {
        className: "desc"
      }, recommendInfo.areaName) : null), _react.default.createElement("div", {
        className: align('bottom-line')
      }, renderPrice())));
    }
  }]);

  return RecommendCard;
}(_react.default.Component);

exports.default = RecommendCard;
RecommendCard.propTypes = {
  heightFixed: _propTypes.default.bool
};
RecommendCard.defaultProps = {
  heightFixed: false,
  recommendInfo: null
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBranch = exports.getNearPoiList = exports.getPreferList = exports.getRecommendInfo = exports.getDeals = void 0;

var _request = __webpack_require__(14);

var GET_DEALS_URL = '/ptapi/poi/getdeals';
var GET_RECOMMENDS_URL = '/ptapi/recommends';
var GET_PREFER_LIST_URL = '/ptapi/poi/recommend-list';
var GET_NEAR_LIST_URL = '/ptapi/poi/near-poi-list';
var GET_BRANCH_URL = '/ptapi/shops/getbranch';
/**
 * @typedef {{userId?:number,nickName?:string,growthValue?:number,growthLevel?:number,avatarUrl?:string}} UserInfo
 * @typedef {{id?:number,name?:string,pinyin?:string,acronym?:string}} CityInfo
 * @typedef {{userId:number,cityId:number,lat:number,lng:number,uuid:string,poiId?:number}} RecommendRequest
 * @typedef {{itemId?:number,title?:string,imgUrl?:string,score?:string,consumeNum?:number,areaName?:string,lowPrice?:string,saleNum?:number,commentNum?:number,detailUrl?:string,firstCate:Array<number>,avgPrice?:number}} RecommendInfo
 * @typedef {{id?:number,name?:string,url?:string,pinyin?:string}} PcHomeCategory
 * @typedef {{leftPcHomeCategoryList:Array<PcHomeCategory>,rightPcHomeCategoryList:Array<Array<PcHomeCategory>>}} HomeCategoryResponse
 * @typedef {{pcHomeCategory:PcHomeCategory,subPcHomeCategory:Array<PcHomeCategory>}} GeneralCategory
 * @typedef {{pcHomeCategory:PcHomeCategory,generalCategoryList:Array<GeneralCategory>}} PoiListCategory
 * @typedef {{id:number,title?:string,py?:string}} Crumbs
 * @typedef {{id:number,name?:string,score?:number,avgPrice?:number,address?:string,phone?:string,openTime?:string,headIcon?:string,wifi?:number,park?:string,lng?:number,lat?:number,brandId?:number,jumpUrl?:string,crumbs:Array<Crumbs>,cityId:number,cityName?:string,lowestPrice?:number,sold?:number,firstCate:Array<number>,subCate:Array<number>,thridCate:Array<number>,brandName?:string,cityPy?:string,commentCnt?:number}} PoiInfo
 * @typedef {{id:number,url?:string,imgDesc?:string,typeId?:number,typeName?:string}} PoiAlbum
 * @typedef {{id:number,limit?:number,offset?:number,online:number}} getDealsReq
 * @typedef {{id:number,headIcon?:string,title?:string,sold?:number,deadline?:number,price?:number,value?:number,type?:number,shortTips?:string,longTips?:string}} DealDetail
 * @typedef {{brandId:number,cityId?:number,offset?:number,limit?:number,locationId?:number}} BrandListRequest
 * @typedef {{count:number,tag:string}} CommentTag
 * @typedef {{id:number,url:string}} PicUrl
 * @typedef {{userName?:string,userUrl?:string,avgPrice?:number,comment?:string,merchantComment?:string,picUrls:Array<PicUrl>,commentTime?:number,replyCnt?:number,zanCnt?:number,readCnt?:number,hilignt?:string,userLevel?:number,userId:number,uType?:number,star?:number,quality?:boolean,alreadyZzz?:boolean,reviewId?:number,menu?:string,did?:number,dealEndtime?:number,anonymous?:boolean,poiId?:number}} Comment
 * @typedef {{tags:Array<CommentTag>,comments:Array<Comment>,total?:number}} MerchantComment
 * @typedef {{id:number,tag?:string,offset?:number,pageSize?:number,mode?:number,starRange?:string,userId?:number,sortType?:number}} CommentSearch
 * @typedef {{lng:number,lat:number,cityId:number,offset:number,limit:number,filter:{}}} NearPOIReq
 * @typedef {{id:number,name?:string}} BusinessAreaModel
 * @typedef {{id:number,name?:string,businessAreas:Array<BusinessAreaModel>}} DistrictModel
 * @typedef {{total:number,infos:Array<PoiInfo>,branchName?:string}} BranchModel
 * @typedef {{reviewId:number,offset:number,limit:number}} ReplyReq
 * @typedef {{replyId?:number,reviewId?:number,userId?:number,userName?:string,reply?:string,followUserId?:number,followUserName?:string,followId?:number,addTime?:number,modTime?:number,userImgUrl?:string,followUserImgUrl?:string}} Reply
 * @typedef {{userId:number,reply:string,reviewId:number,ip:string,followId?:number,uuid?:string,version?:string,userAgent?:string}} AddReplyReq
 * @typedef {{reviewid:number,replyId:number,userid:number,ip:string}} DeleteReplyReq
*/

/**
 * 商家促销优惠（团购），已排除过期的deal。
 * limit默认为3
 * @export
 * @see GET_DEALS_URL
 * @example ?mock=mock/deals.json&demo=demo/deals.js
 * @param {{id: number, limit?: number}} param
 * @returns {Promise<Array<DealDetail>>} 传入组件后，可得到施加参数后的高阶组件。
 */

var getDeals = function getDeals(param) {
  return _request.fetchRequest.getJSON(GET_DEALS_URL, param);
};
/**
 * 首页用
 * 默认显示15条
 * @export
 * @see GET_RECOMMENDS_URL
 * @example ?mock=mock/recommends.json&demo=demo/recommends.js
 * @param {{limit?: number, poiid?: string}} param
 * @returns {Promise<Array<RecommendInfo>>}
 */


exports.getDeals = getDeals;

var getRecommendInfo = function getRecommendInfo(param) {
  return _request.fetchRequest.getJSON(GET_RECOMMENDS_URL, param);
};
/**
 * 详情页用
 * 默认最多显示5条
 * @export
 * @see GET_PREFER_LIST_URL
 * @example ?mock=mock/prefer-list.json&demo=demo/prefer-list.js
 * @param {{limit?:number,userId:number,cityId:number,lat:number,lng:number,poiId?:number}} param
 * @returns {Promise<Array<RecommendInfo>>}
 */


exports.getRecommendInfo = getRecommendInfo;

var getPreferList = function getPreferList(param) {
  return _request.fetchRequest.getJSON(GET_PREFER_LIST_URL, param);
};
/**
 * limit 固定为10， offset为0
 * @export
 * @see GET_NEAR_LIST_URL
 * @example ?mock=mock/near-poi-list.json&demo=demo/near-poi-list.js
 * @param {{lng:number,lat:number,cityId:number}} param
 * @returns {Promise<Array<PoiInfo>>}
 */


exports.getPreferList = getPreferList;

var getNearPoiList = function getNearPoiList(param) {
  return _request.fetchRequest.getJSON(GET_NEAR_LIST_URL, param);
};
/**
 * 得到分店信息
 * @export
 * @see GET_BRANCH_URL
 * @example ?mock=mock/branch.json&demo=demo/branch.js
 * @param {BrandListRequest} param
 * @returns {Promise<BranchModel>}
 */


exports.getNearPoiList = getNearPoiList;

var getBranch = function getBranch(param) {
  return _request.fetchRequest.getJSON(GET_BRANCH_URL, param);
};

exports.getBranch = getBranch;

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* unused harmony export Store */
/*
 * @license
 * @noflux/state v0.7.0
 * (c) 2017-2017 Malash <i@malash.me>
 * Released under the MIT License.
 */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var SYMBOL_NOFLUX = '__noflux';

/*
 * JSON Pointer style escape
 * http://tools.ietf.org/html/rfc6901
 */
var escapePath = function escapePath(path) {
  return path.replace(/~/g, '~1').replace(/\./g, '~0');
};
var unescapePath = function unescapePath(path) {
  return path.replace(/~0/g, '.').replace(/~1/g, '~');
};

var parsePath = function parsePath(path) {
  if (Array.isArray(path)) {
    return path;
  }
  if (typeof path === 'string') {
    if (!path.length) {
      return [];
    }
    // path with dot, e.g. 'a~1b.c' => ['a.b', 'c']
    if (path.indexOf('~') !== -1) {
      return path.split('.').map(unescapePath);
    }
    return path.split('.');
  }
  throw Error('State.prototype.cursor only accept string or array, ' + (typeof path === 'undefined' ? 'undefined' : _typeof(path)) + ' is forbidden');
};

var stringifyPath = function stringifyPath(path) {
  if (typeof path === 'string') {
    return path;
  }
  if (Array.isArray(path)) {
    // path with dot, e.g. ['a.b', 'c'] => 'a~1b.c'
    return path.map(escapePath).join('.');
  }
  throw Error('State.prototype.cursor only accept string or array, ' + (typeof path === 'undefined' ? 'undefined' : _typeof(path)) + ' is forbidden');
};

var isNullOrUndefined = function isNullOrUndefined(obj) {
  return obj === undefined || obj === null;
};

var getByPath = function getByPath(obj, path) {
  var pointer = obj;
  for (var i = 0; i < path.length; i += 1) {
    var next = path[i];
    // only null and undefined has no properties
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/No_properties
    if (isNullOrUndefined(pointer)) {
      return undefined;
    }
    pointer = pointer[next];
  }
  return pointer;
};

var isObject = function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
};
var isNumeric = function isNumeric(num) {
  return !isNaN(num) && num !== '';
};

var shallowClone = function shallowClone(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (Array.isArray(obj)) {
    return [].concat(toConsumableArray(obj));
  } else if (isObject(obj)) {
    return _extends({}, obj);
  }
  if (isNumeric(path)) {
    return [];
  } else {
    return {};
  }
};

var HEAD = 'HEAD';
var setByPath = function setByPath(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var value = arguments[2];

  if (!path.length) {
    return value;
  }

  var root = {};
  root[HEAD] = obj;
  var parentPointer = root;
  var lastNext = HEAD;
  var pointer = obj;
  for (var i = 0; i < path.length; i += 1) {
    var next = path[i];
    parentPointer[lastNext] = shallowClone(pointer, next);
    parentPointer = parentPointer[lastNext];
    lastNext = next;
    if (isNullOrUndefined(pointer)) {
      // always skip traversing null or undefined
      pointer = null;
    } else {
      pointer = pointer[next];
    }
  }
  parentPointer[lastNext] = value;
  return root[HEAD];
};

// null or undefined will cause an error
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
var arrayFromAllowNullOrUndefined = function arrayFromAllowNullOrUndefined(arrayLike) {
  return isNullOrUndefined(arrayLike) ? [] : [].concat(toConsumableArray(arrayLike));
};

var count = 1;
var getNextId = function getNextId() {
  count += 1;
  return count;
};

var removeFirstFromArray = function removeFirstFromArray(array, value) {
  var pos = array.indexOf(value);
  if (pos !== -1) {
    // about 1.5x faster than the two-arg version of Array#splice() as nodejs said
    // https://github.com/nodejs/node/blob/v6.x/lib/events.js#L470-L475
    for (var i = pos, k = i + 1, n = array.length; k < n; i += 1, k += 1) {
      array[i] = array[k];
    }
    array.pop();
  }
};

var Store = function () {
  function Store() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        data = _ref.data,
        _ref$maxSnapshots = _ref.maxSnapshots,
        maxSnapshots = _ref$maxSnapshots === undefined ? Infinity : _ref$maxSnapshots;

    classCallCheck(this, Store);

    this.__data = data;
    this.__maxSnapshots = maxSnapshots;
    this.__snapshots = [];
    this.__snapshotIndex = -1;
  }

  createClass(Store, [{
    key: 'read',
    value: function read(path) {
      return getByPath(this.__data, path);
    }
  }, {
    key: 'write',
    value: function write(path, value) {
      this.__data = setByPath(this.__data, path, value);
    }
  }, {
    key: 'snapshot',
    value: function snapshot() {
      this.__snapshotIndex += 1;
      this.__snapshots[this.__snapshotIndex] = this.__data;
      // override redid snapshots
      this.__snapshots.length = this.__snapshotIndex + 1;
      if (this.__snapshots.length > this.maxSnapshots) {
        this.__snapshots.shift();
        this.__snapshotIndex -= 1;
      }
    }
  }, {
    key: 'canUndo',
    value: function canUndo() {
      return this.__snapshotIndex > 0;
    }
  }, {
    key: 'undo',
    value: function undo() {
      if (!this.canUndo()) {
        throw new RangeError('no more snapshot available');
      }
      this.__snapshotIndex -= 1;
      this.__data = this.__snapshots[this.__snapshotIndex];
    }
  }, {
    key: 'canRedo',
    value: function canRedo() {
      return this.__snapshotIndex + 1 < this.__snapshots.length;
    }
  }, {
    key: 'redo',
    value: function redo() {
      if (!this.canRedo()) {
        throw new RangeError('no more snapshot available');
      }
      this.__snapshotIndex += 1;
      this.__data = this.__snapshots[this.__snapshotIndex];
    }
  }]);
  return Store;
}();

// reduce property get times will accelerate 10%~15%
var SYMBOL_NOFLUX_ID = SYMBOL_NOFLUX + '_id';

var getListenerId = function getListenerId(listener) {
  var autoGenerate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // unique id for each listener
  if (autoGenerate && listener[SYMBOL_NOFLUX_ID] === undefined) {
    Object.defineProperty(listener, SYMBOL_NOFLUX_ID, {
      enumerable: false,
      writable: true,
      configurable: true,
      value: getNextId()
    });
  }
  return listener[SYMBOL_NOFLUX_ID];
};

/*
 * for performance hit, every node maintain ownListeners and subtreeListeners
 * ownListeners[listenerId] = listener on current path
 * subtreeListeners[listenerId] = merge(
 *   ownListeners[listenerId],
 *   children.every.subtreeListeners[listenerId],
 * )
 */
var ListenerTreeNode = function ListenerTreeNode() {
  classCallCheck(this, ListenerTreeNode);
  this.children = {};
  this.subtreeListeners = [];
  this.ownListeners = [];
};

var ListenerTree = function () {
  function ListenerTree() {
    classCallCheck(this, ListenerTree);
    this.__tree = new ListenerTreeNode();
  }

  createClass(ListenerTree, [{
    key: '__traverse',
    value: function __traverse(_ref) {
      var path = _ref.path,
          _ref$createEmptyPath = _ref.createEmptyPath,
          createEmptyPath = _ref$createEmptyPath === undefined ? false : _ref$createEmptyPath,
          callbackBeforeRecursion = _ref.callbackBeforeRecursion,
          callbackAfterRecursion = _ref.callbackAfterRecursion,
          callbackAtBottom = _ref.callbackAtBottom;

      var pointer = this.__tree;
      // save call stack for backtracking
      var stack = [];
      stack.push(pointer);
      for (var index = 0; index <= path.length; index += 1) {
        var isAtBottom = index === path.length || !createEmptyPath && pointer.children[path[index]] === undefined;
        if (isAtBottom && callbackAtBottom) {
          callbackAtBottom(pointer, index);
          break;
        }
        if (callbackBeforeRecursion) {
          callbackBeforeRecursion(pointer);
        }
        var child = path[index];
        if (pointer.children[child] === undefined) {
          pointer.children[child] = new ListenerTreeNode();
        }
        pointer = pointer.children[child];
        stack.push(pointer);
      }
      if (callbackAfterRecursion) {
        while (stack.length) {
          pointer = stack.pop();
          callbackAfterRecursion(pointer);
        }
      }
    }
  }, {
    key: 'addListener',
    value: function addListener(path, listener) {
      var _this = this;

      if (typeof listener !== 'function') {
        throw new TypeError('"listener" argument must be a function');
      }
      // init listener id
      getListenerId(listener, true);
      this.__traverse({
        path: path,
        createEmptyPath: true,
        callbackAfterRecursion: function callbackAfterRecursion(node) {
          return node.subtreeListeners.push(listener);
        },
        callbackAtBottom: function callbackAtBottom(node) {
          return node.ownListeners.push(listener);
        }
      });
      return function () {
        _this.removeListener(path, listener);
      };
    }
  }, {
    key: 'removeListener',
    value: function removeListener(path, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('"listener" argument must be a function');
      }
      this.__traverse({
        path: path,
        callbackAfterRecursion: function callbackAfterRecursion(node) {
          return removeFirstFromArray(node.subtreeListeners, listener);
        },
        callbackAtBottom: function callbackAtBottom(node) {
          return removeFirstFromArray(node.ownListeners, listener);
        }
      });
    }

    // path [a, b, ..., n] will emit
    // merge(ownListener[root], ownListener[a], ownListener[b], ..., subtreeListener[n])

  }, {
    key: 'emit',
    value: function emit(path, data) {
      var listeners = [];
      this.__traverse({
        path: path,
        callbackAtBottom: function callbackAtBottom(node, index) {
          // if emit an empty path, there is no subtree
          if (index === path.length) {
            listeners.push.apply(listeners, toConsumableArray(node.subtreeListeners));
          }
        },
        callbackAfterRecursion: function callbackAfterRecursion(node) {
          if (node.ownListeners.length) {
            listeners.push.apply(listeners, toConsumableArray(node.ownListeners));
          }
        }
      });
      var called = {};
      for (var index = 0; index < listeners.length; index += 1) {
        var listener = listeners[index];
        var listenerId = getListenerId(listener);
        // same listener will call once
        if (!called[listenerId]) {
          called[listenerId] = true;
          listener(data);
        }
      }
    }
  }, {
    key: 'on',
    value: function on(path, listener) {
      return this.addListener(path, listener);
    }
  }, {
    key: 'off',
    value: function off(path, listener) {
      this.removeListener(path, listener);
    }
  }]);
  return ListenerTree;
}();

var generateEmitterName = function generateEmitterName(message) {
  if (message === 'get') {
    return 'get';
  }
  // compatible legacy event
  if (message === 'set' || message === 'change') {
    return 'set';
  }
  throw new Error('event not allowed');
};

var State = function () {
  function State() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$store = _ref.store,
        store = _ref$store === undefined ? new Store() : _ref$store,
        _ref$cursor = _ref.cursor,
        cursor = _ref$cursor === undefined ? [] : _ref$cursor,
        _ref$emitters = _ref.emitters,
        emitters = _ref$emitters === undefined ? {
      get: new ListenerTree(),
      set: new ListenerTree()
    } : _ref$emitters;

    classCallCheck(this, State);

    this.__store = store;
    this.__cursor = cursor;
    this.__emitters = emitters;
  }

  // basic operators


  createClass(State, [{
    key: 'cursor',
    value: function cursor() {
      var subPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var __store = this.__store,
          __cursor = this.__cursor,
          __emitters = this.__emitters;

      subPath = parsePath(subPath);
      return new State({
        store: __store,
        cursor: __cursor.concat(subPath),
        emitters: __emitters
      });
    }
  }, {
    key: 'get',
    value: function get$$1() {
      var subPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var length = arguments.length;

      if (length !== 0) {
        return this.cursor(subPath).get();
      }
      var value = this.__store.read(this.__cursor);
      this.__emitters.get.emit(this.__cursor, {
        path: stringifyPath(this.__cursor),
        value: value
      });
      return value;
    }
  }, {
    key: 'set',
    value: function set$$1(subPath, value) {
      var length = arguments.length;

      if (length < 1) {
        throw new TypeError('value argument must be set');
      }
      if (length === 1) {
        var _ref2 = [undefined, subPath];
        subPath = _ref2[0];
        value = _ref2[1];
      }
      if (subPath !== undefined) {
        return this.cursor(subPath).set(value);
      }
      this.__store.write(this.__cursor, value);
      this.__emitters.set.emit(this.__cursor, {
        path: stringifyPath(this.__cursor),
        value: value
      });
    }
  }, {
    key: 'update',
    value: function update(subPath, callback) {
      var length = arguments.length;

      if (length < 1) {
        throw new TypeError('callback argument must be set');
      }
      if (length === 1) {
        var _ref3 = [undefined, subPath];
        subPath = _ref3[0];
        callback = _ref3[1];
      }
      if (typeof callback !== 'function') {
        throw new TypeError('callback argument must be a function');
      }
      var s = subPath === undefined ? this : this.cursor(subPath);
      s.set(callback(s.get()));
    }
  }, {
    key: 'on',
    value: function on(message, callback) {
      var emitterName = generateEmitterName(message);
      return this.__emitters[emitterName].on(this.__cursor, callback);
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(message, callback) {
      return this.on(message, callback);
    }
  }, {
    key: 'off',
    value: function off(message, callback) {
      var emitterName = generateEmitterName(message);
      this.__emitters[emitterName].off(this.__cursor, callback);
    }
  }, {
    key: 'removeEventListener',
    value: function removeEventListener(message, callback) {
      this.off(message, callback);
    }

    // snapshot support

  }, {
    key: 'snapshot',
    value: function snapshot() {
      this.__store.snapshot();
    }
  }, {
    key: 'canUndo',
    value: function canUndo() {
      return this.__store.canUndo();
    }
  }, {
    key: 'undo',
    value: function undo() {
      this.__store.undo();
      // snapshot always emit root event
      this.__emitters.set.emit([], {
        path: stringifyPath([]),
        value: this.__store.read([])
      });
    }
  }, {
    key: 'canRedo',
    value: function canRedo() {
      return this.__store.canRedo();
    }
  }, {
    key: 'redo',
    value: function redo() {
      this.__store.redo();
      // snapshot always emit root event
      this.__emitters.set.emit([], {
        path: stringifyPath([]),
        value: this.__store.read([])
      });
    }

    // immutable Array operators

  }, {
    key: '__arrayOperator',
    value: function __arrayOperator(operator, values) {
      var array = arrayFromAllowNullOrUndefined(this.get());
      Array.prototype[operator].apply(array, values);
      this.set(array);
    }
  }, {
    key: 'push',
    value: function push() {
      for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      this.__arrayOperator('push', values);
    }
  }, {
    key: 'pop',
    value: function pop() {
      this.__arrayOperator('pop');
    }
  }, {
    key: 'unshift',
    value: function unshift() {
      for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
      }

      this.__arrayOperator('unshift', values);
    }
  }, {
    key: 'shift',
    value: function shift() {
      this.__arrayOperator('shift');
    }
  }, {
    key: 'fill',
    value: function fill(value) {
      this.__arrayOperator('fill', [value]);
    }
  }, {
    key: 'reverse',
    value: function reverse() {
      this.__arrayOperator('reverse');
    }
  }, {
    key: 'splice',
    value: function splice() {
      for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }

      this.__arrayOperator('splice', values);
    }
  }]);
  return State;
}();




/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modifyUrl;

function modifyUrl(e) {
  if (e.currentTarget.dataset.query && e.currentTarget.href.indexOf('maoyan.com') >= 0) {
    var target = e.currentTarget.target || '_self';
    e.preventDefault();

    if (target === '_blank') {
      window.open("".concat(e.currentTarget.href, "?").concat(e.currentTarget.dataset.query), '_blank');
    } else {
      window.location.href = "".concat(e.currentTarget.href, "?").concat(e.currentTarget.dataset.query);
    }
  }
}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setExtUserInfo = exports.setCoreUserInfo = exports.getFullUserInfo = exports.getLoginedUserInfo = void 0;

var _request = __webpack_require__(14);

var LOGINED_USER_INFO_URL = '/ptapi/getLoginedUserInfo';
var FULL_USER_INFO_URL = '/ptapi/settings/userinfo';
var SET_USERINFO_URL = '/ptapi/settings/setinfo';
var SET_EXT_USERINFO_URL = '/ptapi/settings/setexinfo';
/**
 * @typedef {{userId?:number,nickName?:string,growthValue?:number,growthLevel?:number,avatarUrl?:string}} UserInfo
 * @typedef {{error:{code:number,message:string,type:string}}} LoginError
 * @typedef {{id:string,username:string,isOpen:any,isCancel:any,isBan:any,isLock:any,isAppUser:any,isNickSignuped:any,isBindedBankCard:any,isFrozen:any,isVirtual:any,mobile:string,isBindedMobile:any,value:any,pointValue:any,growthValue:any,growthLevel:any,dpUserId2:any,hasPassword:any,needSetPassword:any,avatarType:any,avatarUrl:string,email:any,regTime:any,regIp:any,city:any,loginTimes:any,lastTime:any,cityId:any,gender:any,identity:any,marriage:any,birthday:string,interest:any,hasPayHash:any,hasSafeQuestion:any,passwordLevel:number,safetyLevel:number,nullValue:any}} FullUserInfo
 * /

/**
 * 获取登录的用户信息
 * @export
 * @see LOGINED_USER_INFO_URL
 * @example ?mock=mock/user-info.json&demo=demo/user-info.js
 * @returns {Promise<UserInfo>}
 */

var getLoginedUserInfo = function getLoginedUserInfo() {
  return _request.fetchRequest.getJSON(LOGINED_USER_INFO_URL, {
    timestamp: +new Date()
  });
};
/**
 * 获取用户完整信息
 * @export
 * @see FULL_USER_INFO_URL
 * @example ?mock=mock/full-user-info.json&demo=demo/full-user-info.js
 * @returns {Promise<FullUserInfo>}
 */


exports.getLoginedUserInfo = getLoginedUserInfo;

var getFullUserInfo = function getFullUserInfo() {
  return _request.fetchRequest.getJSON(FULL_USER_INFO_URL);
};
/**
 * 设置登录的用户信息
 * @export
 * @see SET_USERINFO_URL
 */


exports.getFullUserInfo = getFullUserInfo;

var setCoreUserInfo = function setCoreUserInfo(params) {
  return _request.fetchRequest.postJSON(SET_USERINFO_URL, params).then(function (res) {
    if (!res.user && !res.error) {
      return {
        error: res
      };
    }

    return res;
  });
};
/**
 * 设置登录的用户额外信息
 * @export
 * @see SET_USERINFO_API
 */


exports.setCoreUserInfo = setCoreUserInfo;

var setExtUserInfo = function setExtUserInfo(params) {
  return _request.fetchRequest.postJSON(SET_EXT_USERINFO_URL, params).then(function (res) {
    if (!res.exinfo && !res.error) {
      return {
        error: res
      };
    }

    return res;
  });
};

exports.setExtUserInfo = setExtUserInfo;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$endWithSlash = _props.endWithSlash,
          endWithSlash = _props$endWithSlash === void 0 ? true : _props$endWithSlash,
          name = _props.name,
          to = _props.to,
          text = _props.text,
          className = _props.className,
          bid = _props.bid,
          lab = _props.lab,
          children = _props.children,
          others = _objectWithoutProperties(_props, ["endWithSlash", "name", "to", "text", "className", "bid", "lab", "children"]); // eslint-disable-line


      if (typeof to === 'string' && endWithSlash) {
        var page = to.split('/').slice(-1)[0].split('?')[0] || '/';

        if (!~page.indexOf('/') && !~page.indexOf('.')) {
          to = to.replace(page, "".concat(page, "/"));
        }
      }

      return _react.default.createElement("a", _extends({
        href: to,
        name: name,
        "data-bid": bid,
        "data-lab": JSON.stringify(lab),
        className: (0, _react.cls)('link', className)
      }, others), text || children);
    }
  }]);

  return Link;
}(_react.default.Component);

var _default = Link;
exports.default = _default;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['@mtfe/bs-finder'] = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function getError(method, message) {
  return method + '::' + message;
}

function isString(o) {
  return typeof o === 'string';
}

/**
 * build service finder
 *
 * @param  {Object} conf
 * @constructor
 */
function Finder(conf) {
  if (!this) return new Finder(conf);
  this.setName(conf.name);
  this.setNorm(conf.norm);
  this.setHash(conf.hash);
}

Finder.prototype = {
  /**
   * static define
   */
  NORMS: ['i', 'ii'],

  /**
   * @constructor
   */
  constructor: Finder,

  /**
   * set name
   *
   * @param  {String} name
   */
  setName: function setName(name) {
    if (name && isString(name)) {
      this.name = name;
      return name;
    }
    throw new Error(getError('setName', 'invalid entry name'));
  },

  /**
   * set norm
   *
   * @param  {String} norm
   */
  setNorm: function setNorm(norm) {
    if (norm && isString(norm)) {
      norm = norm.toLowerCase();
      if (this.NORMS.indexOf(norm) >= 0) {
        this.norm = norm;
        return norm;
      }
    }
    throw new Error(getError('setNorm', 'invalid URL norm'));
  },

  /**
   * set hash
   *
   * @param  {String} hash
   */
  setHash: function setHash(hash) {
    // use HEAD
    if (!hash) this.hash = '';
    // use custom hash
    this.hash = hash;
  },

  /**
   * get hash
   *
   * @param  {String=} file
   * @return {String} hash
   */
  getHash: function getHash(file) {
    if (_typeof(this.hash) === 'object') {
      if (file && isString(file)) {
        return this.hash[file];
      }
    }
    return this.hash || (this.norm === 'ii' ? 'file' : '');
  },

  /**
   * get part in I norm
   *
   * @param  {String} file - file name
   * @return {String} part
   */
  getPartI: function getPartI(file) {
    var hash = this.getHash(file);
    if (hash) hash = '@' + hash;
    return this.name + ':' + file + hash;
  },

  /**
   * get resource url(s)
   *
   * @param  {String[=]} file
   * @param  {String||Object=} pipe - { verb, form }
   * @param  {String=} host
   * @return {String} url
   */
  concatURL: function concatURL(file, pipe, host) {
    var _this = this;

    // arrayify & trim files
    var files = file && (Array.isArray(file) ? file : [file]) || [];
    if (files.length === 0) return '';
    files = files.map(function (e) {
      return e.replace(/^\.*\/*/, '');
    });
    var fhash = files.join('').length % 2;

    // remove schema
    if (host) host = host.replace(/^https?:/, '');
    // use default host
    else host = '//s' + fhash + '.meituan.net/bs/';

    // force absolute
    if (host[0] !== '/') host = '//' + host;
    // add path tail char
    if (!/\/$/.test(host)) host = host + '/';

    // config pipe
    if (!pipe) pipe = '';else if ((typeof pipe === 'undefined' ? 'undefined' : _typeof(pipe)) === 'object') {
      pipe = (pipe.verb || '') + (pipe.form ? '-' + pipe.form : '');
    }

    // concat II norm url
    if (this.norm === 'ii') {
      if (files.length > 1) {
        throw new Error(getError('concatURL', 'only 1 file accepted in II'));
      }
      return host + this.name + '/' + this.getHash(files[0]) + (pipe ? ':' + pipe : '') + '/' + files[0];
    }

    // concat I norm url
    var parts = files.map(function (e) {
      return _this.getPartI(e);
    });
    return host + pipe + '?f=' + parts.join(';');
  }
};

/**
 * test if url is absolute
 *
 * @param  {String} url
 * @return {Boolean}
 */
Finder.isAbsolute = function (url) {
  if (!url || !isString(url)) return false;
  return (/^(([a-z0-9]+:)|(\/\/)|#)/i.test(url)
  );
};

var finder = Finder;

var index = finder;

return index;

})));


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connect", function() { return Connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noflux_state__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return __WEBPACK_IMPORTED_MODULE_0__noflux_state__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/*
 * @license
 * @noflux/react v0.8.1
 * (c) 2017-2018 Malash <i@malash.me>
 * Released under the MIT License.
 */




var state = new __WEBPACK_IMPORTED_MODULE_0__noflux_state__["a" /* State */]();

var noticed = false;
state.load = function load(initState) {
  if (!noticed) {
    noticed = true;
    // eslint-disable-next-line no-console
    console.warn('Warning: state.load(data) is deprecated, use state.set(data) or state.set(\'\', data).');
  }
  this.set('', initState);
};

var checkPureDeprecated = function checkPureDeprecated() {
  try {
    // eslint-disable-next-line global-require, import/no-unresolved
    var React = __webpack_require__(2);
    return Boolean(React.PureComponent);
  } catch (e) {
    throw new ReferenceError('React not installed');
  }
};

var noticed$1 = false;
var pure = function pure(component) {
  if (!noticed$1) {
    noticed$1 = true;
    var pureDeprecated = checkPureDeprecated();
    if (pureDeprecated) {
      // eslint-disable-next-line no-console
      console.warn('Warning: @pure is deprecated, use React.PureComponent instead. https://facebook.github.io/react/docs/pure-render-mixin.html');
    }
  }
  return __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(component);
};

var __DEV__ = "production" !== 'production';

/* global performance */
var timer = typeof performance !== 'undefined' && performance && performance.now ? performance : Date;

var isReactComponent = function isReactComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function');
};

var isReactComponentInstance = function isReactComponentInstance(instance) {
  return Boolean(instance && Object.getPrototypeOf(instance) && typeof Object.getPrototypeOf(instance).render === 'function');
};

var getComponentName = function getComponentName(Component) {
  var constructor = Component.prototype && Component.prototype.constructor;
  return Component.displayName || constructor && constructor.displayName || Component.name || constructor && constructor.name || 'NONAME';
};

var override = function override(Class, methodName, callback) {
  Class.prototype[methodName] = callback(Class.prototype[methodName]);
};

// detect if the component is rendering from the client or the server
// copy from fbjs/lib/ExecutionEnvironment https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js#L14-L18
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var SYMBOL_NOFLUX = '__noflux';

var connectComponent = function connectComponent(Component) {
  if (Component[SYMBOL_NOFLUX]) {
    throw new SyntaxError('You should not use @connect for component ' + getComponentName(Component) + ' more than once.');
  }
  Component[SYMBOL_NOFLUX] = {};

  // skip event listening for server-side rendering
  if (!canUseDOM) {
    return Component;
  }

  override(Component, 'render', function (originRender) {
    return function render() {
      var _this = this;

      if (!originRender) {
        throw new Error('No render method found on the returned component instance of ' + getComponentName(Component) + ', you may have forgotten to define render.');
      }

      var __noflux = this[SYMBOL_NOFLUX];
      if (!__noflux) {
        // init
        this[SYMBOL_NOFLUX] = {
          getPaths: {},
          onChangeDisposers: [],
          mounted: false,
          isForcingUpdate: false
        };
        __noflux = this[SYMBOL_NOFLUX];

        var cursorChange = function cursorChange() {
          // skip change emitted after unmounting component
          // TODO: test this guard
          if (!__noflux.mounted) return;

          // skip duplicate forceUpdate calling
          if (__noflux.isForcingUpdate) return;
          __noflux.isForcingUpdate = true;

          var startTime = timer.now();
          _this.forceUpdate(function () {
            __noflux.isForcingUpdate = false;

            var endTime = timer.now();
            var cost = endTime - startTime;
            if (__DEV__) {
              // eslint-disable-next-line no-console
              console.log('[noflux] ' + getComponentName(Component) + ' rendering time ' + cost.toFixed(3) + ' ms');
            }
          });
        };
        __noflux.onGetDisposer = state.on('get', function (_ref) {
          var path = _ref.path;

          if (__noflux.isRendering && !__noflux.getPaths[path]) {
            __noflux.getPaths[path] = true;
            // register cursor change handler
            __noflux.onChangeDisposers.push(state.cursor(path).on('change', cursorChange));
          }
        });
      }

      __noflux.isRendering = true;
      var vdom = originRender.call(this);
      __noflux.isRendering = false;
      return vdom;
    };
  });

  override(Component, 'componentDidMount', function (originComponentDidMount) {
    return function componentDidMount() {
      // set component mounted flag
      this.__noflux.mounted = true;

      // call origin componentDidMount
      if (originComponentDidMount) {
        originComponentDidMount.call(this);
      }
    };
  });

  override(Component, 'componentWillUnmount', function (originComponentWillUnmount) {
    return function componentWillUnmount() {
      var __noflux = this[SYMBOL_NOFLUX];
      // dispose cursor change listeners
      __noflux.onChangeDisposers.forEach(function (disposer) {
        return disposer();
      });

      // dispose get listener
      __noflux.onGetDisposer();

      // reset component mounted flag
      __noflux.mounted = false;

      // call origin componentWillUnmount
      if (originComponentWillUnmount) {
        originComponentWillUnmount.call(this);
      }
    };
  });

  return Component;
};

var connect = function connect(target, prop, descriptor) {
  if (!target) {
    throw new TypeError('@connect() is invalid, do you mean @connect ?');
  }
  if (isReactComponentInstance(target) && prop && descriptor) {
    throw new SyntaxError('@connect should not be used for component method.');
  }
  if (!isReactComponent(target)) {
    throw new TypeError('@connect should be used for React component');
  }
  return connectComponent(target);
};

var noticed$2 = false;
var Connect = function Connect() {
  if (!noticed$2) {
    noticed$2 = true;
    // eslint-disable-next-line no-console
    console.warn('Warning: @Connect is deprecated, use @connect instead.');
  }
  return connect.apply(undefined, arguments);
};




/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Félix Girault <felix.girault@gmail.com>
 * @license MIT
 */


var warning = __webpack_require__(10);
var shallowEqual = __webpack_require__(11);



/**
 * Tells if a component should update given it's next props
 * and state.
 *
 * @param object nextProps Next props.
 * @param object nextState Next state.
 */
function shouldComponentUpdate(nextProps, nextState) {
  return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
}

/**
 * Returns a text description of the component that can be
 * used to identify it in error messages.
 *
 * @see https://github.com/facebook/react/blob/v15.4.0-rc.3/src/renderers/shared/stack/reconciler/ReactCompositeComponent.js#L1143
 * @param {function} component The component.
 * @return {string} The name of the component.
 */
function getComponentName(component) {
  var constructor = component.prototype && component.prototype.constructor;

  return (
    component.displayName
    || (constructor && constructor.displayName)
    || component.name
    || (constructor && constructor.name)
    || 'a component'
  );
}

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function pureRenderDecorator(component) {
  if (component.prototype.shouldComponentUpdate !== undefined) {
    // We're not using the condition mecanism of warning()
    // here to avoid useless calls to getComponentName().
    warning(
      false,
      'Cannot decorate `%s` with @pureRenderDecorator, '
      + 'because it already implements `shouldComponentUpdate().',
      getComponentName(component)
    )
  }

  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return component;
}



module.exports = pureRenderDecorator;


/***/ })

},[205]);
