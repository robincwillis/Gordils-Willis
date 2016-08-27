/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Gordils-Willis/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _main = __webpack_require__(1);

	var _main2 = _interopRequireDefault(_main);

	var _imagesloaded = __webpack_require__(42);

	var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

	__webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.time('imagesLoaded');

	function showAbout() {
		document.getElementById('about').className = "visible";
	}

	function hideAbout() {
		document.getElementById('about').className = "";
	}

	function scrollTo(element, to, duration) {
		if (duration <= 0) return;
		var difference = to - element.scrollTop;
		var perTick = difference / duration * 10;

		setTimeout(function () {
			element.scrollTop = element.scrollTop + perTick;
			if (element.scrollTop === to) return;
			scrollTo(element, to, duration - 10);
		}, 10);
	}

	function scrollToWorks() {
		var works = document.getElementById("work-images");
		var worksTop = works.getBoundingClientRect().top;
		scrollTo(document.body, worksTop, 250);
	}

	function scrollToTop() {}

	function setNavigationStyle() {
		var navItems = document.querySelectorAll('ul.navigation li');
		var offset = window.pageYOffset;
		var windowHeight = window.window.innerHeight;

		navItems.forEach(function (item) {
			var itemTop = item.firstElementChild.getBoundingClientRect().top;
			if (offset > windowHeight - itemTop) {
				item.className = !item.className.includes(' invert') ? item.className.concat(' invert') : item.className;
			} else {
				item.className = item.className.replace(' invert', '');
			}
		});
	}

	// function setSplashHeight () {
	// 	$el.css({
	// 			height: $(window).height()
	// 		});
	// }

	//show info
	//hide info
	//click selected work
	//click info


	function bindEvents() {
		console.log('bind events called');
		//Logo
		console.log(document.getElementById('nav-logo'));
		document.getElementById('nav-logo').addEventListener('click', function (event) {
			console.log('clicked logo');
			scrollTo(document.body, 0, 250);
		});

		//About
		document.getElementById('nav-about').addEventListener('click', function (event) {
			console.log(document.getElementById('about').className);

			if (document.getElementById('about').className === "visible") {
				hideAbout();
			} else {
				showAbout();
			}
		});
		//Select Works
		document.getElementById('nav-works').addEventListener('click', function (event) {
			console.log('clicked works');
			scrollToWorks();
		});
		//Contact
		document.getElementById('nav-contact').addEventListener('click', function (event) {});

		window.addEventListener('scroll', function () {
			setNavigationStyle();
			//setSplashHeight($('.splash'));
			//windowHeight = $(window).height();
		});

		// doument.addEventListener("onclick", function(event){

		// });
	}

	//Load App
	document.addEventListener("DOMContentLoaded", function () {
		var div = document.createElement('div');
		div.innerHTML = (0, _main2.default)({ username: "teeeeest" });
		document.body.appendChild(div);
		bindEvents();
	});

	(0, _imagesloaded2.default)('body', function () {
		console.log('images loaded');
		console.timeEnd('imagesLoaded');
		// images have loaded
		var loader = document.getElementById('pageLoader');
		loader.className = "complete-start";

		setTimeout(function () {
			loader.className = "complete-end";
		}, 500);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return ((stack1 = container.invokePartial(__webpack_require__(21),depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
	    + "\n <div id=\"page\">\n    <div id=\"content\">\n"
	    + ((stack1 = container.invokePartial(__webpack_require__(22),depth0,{"name":"splash","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
	    + ((stack1 = container.invokePartial(__webpack_require__(25),depth0,{"name":"work","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
	    + ((stack1 = container.invokePartial(__webpack_require__(37),depth0,{"name":"services","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
	    + ((stack1 = container.invokePartial(__webpack_require__(38),depth0,{"name":"about","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
	    + ((stack1 = container.invokePartial(__webpack_require__(39),depth0,{"name":"contact","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
	    + "    </div>\n</div>\n\n"
	    + ((stack1 = container.invokePartial(__webpack_require__(40),depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
	    + ((stack1 = container.invokePartial(__webpack_require__(41),depth0,{"name":"../components/loader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
	},"usePartial":true,"useData":true});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(3)['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	// istanbul ignore next

	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj['default'] = obj;return newObj;
	  }
	}

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(18);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(19);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(20);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	// istanbul ignore next

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(7);

	var _decorators = __webpack_require__(15);

	var _logger = __webpack_require__(17);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function isFunction(value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	// istanbul ignore next

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _helpersBlockHelperMissing = __webpack_require__(8);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(9);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(10);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(11);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(12);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(13);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(14);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && (typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;
	// istanbul ignore next

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _decoratorsInline = __webpack_require__(16);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function ret(context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	// istanbul ignore next

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	// istanbul ignore next

	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj['default'] = obj;return newObj;
	  }
	}

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + (typeof templateSpec === 'undefined' ? 'undefined' : _typeof(templateSpec)));
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(){return "";};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return "<div href=\"#intro\" class=\"top-splash\">\n\n\n	<ul class=\"navigation\">\n		<li id=\"nav-logo\" class=\"top left\">\n			"
	    + ((stack1 = __default(__webpack_require__(23)).call(depth0 != null ? depth0 : {},__webpack_require__(24),{"name":"svg","hash":{},"data":data})) != null ? stack1 : "")
	    + "\n		</li>\n		<li id=\"nav-contact\" class=\"top right\"><span>Contact</span></li>\n		<li id=\"nav-about\" class=\"bottom right\"><span>About</span></li>\n		<li id=\"nav-works\" class=\"bottom left\"><span>Selected Works</span></li>\n	</ul>\n	<div id=\"about\">\n	<div class=\"display-table\">\n		<div class=\"table-cell\">\n			<div class=\"container\">\n				<h2>\n				"
	    + container.escapeExpression(container.lambda((depth0 != null ? depth0.username : depth0), depth0))
	    + "\n				We are a uius quidem, quoniam Stoicus fuit, sententia Matthew Gordils and\u2028Robin Willis videtur esse inanitas ista verborum. Vero in iis aetatibus, quae iam confirmatae sunt. Nam ista vestra.</h2>\n			</div>\n		</div>\n	</div>\n	</div>\n</div>";
	},"useData":true});

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (path) {
	  return path;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<svg viewBox=\"262 354 675 82\"><path d=\"M900.696165,418.3054 C902.505287,419.969941 904.696253,421.256345 907.269062,422.160906 C909.840018,423.067321 912.464728,423.519602 915.143193,423.519602 C917.026459,423.519602 918.618709,423.10254 919.921796,422.270269 C921.224883,421.436145 921.879207,420.368467 921.879207,419.06538 C921.879207,417.762293 921.24342,416.694614 919.975551,415.86049 C918.709536,415.028219 917.133969,414.26824 915.252556,413.578697 C913.369289,412.891008 911.322905,412.166247 909.115257,411.406268 C906.905755,410.646288 904.85937,409.669436 902.977957,408.473858 C901.092837,407.280134 899.51727,405.776857 898.253108,403.967735 C896.983386,402.156759 896.351306,399.837894 896.351306,397.014848 C896.351306,394.479111 896.911096,392.199172 898.034383,390.171324 C899.15767,388.14533 900.657239,386.423327 902.544213,385.010877 C904.425626,383.598427 906.57952,382.512212 909.005894,381.752232 C911.432268,380.992253 913.947615,380.612263 916.555643,380.612263 C918.292474,380.612263 920.031159,380.756844 921.769844,381.046007 C923.50853,381.337024 925.152681,381.73555 926.711566,382.241585 C928.268597,382.74762 929.714412,383.3278 931.058279,383.978417 C932.396584,384.630887 933.501335,385.283357 934.370678,385.933974 L927.744026,396.145506 C926.368648,395.131581 924.811617,394.280775 923.072932,393.593086 C921.334246,392.905397 919.52327,392.560626 917.641857,392.560626 C915.6863,392.560626 914.003223,392.923933 912.590773,393.646841 C911.178323,394.371602 910.472098,395.422598 910.472098,396.796122 C910.472098,397.954628 911.106032,398.879579 912.373901,399.567268 C913.639916,400.25681 915.215483,400.924109 917.09875,401.57658 C918.980163,402.227196 921.026547,402.933421 923.236049,403.693401 C925.443697,404.455234 927.488228,405.487694 929.375202,406.790781 C931.254761,408.093869 932.832182,409.723191 934.100051,411.678748 C935.364212,413.632452 936,416.131117 936,419.174743 C936,421.708626 935.417967,423.971882 934.261315,425.962658 C933.102809,427.955288 931.56246,429.655047 929.645829,431.069351 C927.72549,432.479947 925.497452,433.566162 922.965422,434.327995 C920.429685,435.087975 917.786439,435.467965 915.03383,435.467965 C911.341441,435.467965 907.665734,434.871103 904.010418,433.675525 C900.351394,432.479947 896.96485,430.72458 893.852641,428.405715 L900.696165,418.3054 Z M871.04213,434.38175 L885.162922,434.38175 L885.162922,381.698478 L871.04213,381.698478 L871.04213,434.38175 Z M868.8697,363.015954 C868.8697,360.48207 869.772408,358.343006 871.585237,356.606174 C873.394359,354.867489 875.566789,354 878.10438,354 C880.638263,354 882.810693,354.867489 884.619815,356.606174 C886.430791,358.343006 887.335352,360.48207 887.335352,363.015954 C887.335352,365.549837 886.430791,367.685195 884.619815,369.42388 C882.810693,371.160711 880.638263,372.030054 878.10438,372.030054 C875.566789,372.030054 873.394359,371.160711 871.585237,369.42388 C869.772408,367.685195 868.8697,365.549837 868.8697,363.015954 L868.8697,363.015954 Z M843.212046,434.38175 L857.332838,434.38175 L857.332838,357.258644 L843.212046,357.258644 L843.212046,434.38175 Z M815.52469,434.38175 L829.645482,434.38175 L829.645482,357.258644 L815.52469,357.258644 L815.52469,434.38175 Z M787.694606,434.38175 L801.815398,434.38175 L801.815398,381.698478 L787.694606,381.698478 L787.694606,434.38175 Z M785.522176,363.015954 C785.522176,360.48207 786.426737,358.343006 788.237713,356.606174 C790.046835,354.867489 792.221118,354 794.756855,354 C797.290739,354 799.463168,354.867489 801.272291,356.606174 C803.083267,358.343006 803.987828,360.48207 803.987828,363.015954 C803.987828,365.549837 803.083267,367.685195 801.272291,369.42388 C799.463168,371.160711 797.290739,372.030054 794.756855,372.030054 C792.221118,372.030054 790.046835,371.160711 788.237713,369.42388 C786.426737,367.685195 785.522176,365.549837 785.522176,363.015954 L785.522176,363.015954 Z M675.249129,358.343006 L690.020538,358.343006 L705.772507,405.81393 L722.499473,358.343006 L732.820368,358.343006 L749.547334,405.81393 L765.297449,358.343006 L780.072566,358.343006 L754.870899,434.38175 L744.550005,434.38175 L727.606166,386.260209 L710.767983,434.38175 L700.450795,434.38175 L675.249129,358.343006 Z M572.596268,418.3054 C574.40539,419.969941 576.596356,421.256345 579.169165,422.160906 C581.740121,423.067321 584.364831,423.519602 587.043296,423.519602 C588.926562,423.519602 590.518812,423.10254 591.8219,422.270269 C593.124987,421.436145 593.779311,420.368467 593.779311,419.06538 C593.779311,417.762293 593.143523,416.694614 591.877508,415.86049 C590.609639,415.028219 589.034072,414.26824 587.152659,413.578697 C585.269392,412.891008 583.224861,412.166247 581.01536,411.406268 C578.805858,410.646288 576.759474,409.669436 574.879914,408.473858 C572.99294,407.280134 571.417373,405.776857 570.153212,403.967735 C568.883489,402.156759 568.251409,399.837894 568.251409,397.014848 C568.251409,394.479111 568.811199,392.199172 569.936339,390.171324 C571.057773,388.14533 572.559196,386.423327 574.444316,385.010877 C576.325729,383.598427 578.479623,382.512212 580.90785,381.752232 C583.332371,380.992253 585.849572,380.612263 588.455746,380.612263 C590.192577,380.612263 591.931262,380.756844 593.669948,381.046007 C595.408633,381.337024 597.052784,381.73555 598.611669,382.241585 C600.1687,382.74762 601.614515,383.3278 602.958382,383.978417 C604.296687,384.630887 605.401438,385.283357 606.270781,385.933974 L599.644129,396.145506 C598.268751,395.131581 596.71172,394.280775 594.973035,393.593086 C593.23435,392.905397 591.423374,392.560626 589.541961,392.560626 C587.586403,392.560626 585.903326,392.923933 584.490876,393.646841 C583.078426,394.371602 582.374055,395.422598 582.374055,396.796122 C582.374055,397.954628 583.006136,398.879579 584.274004,399.567268 C585.541873,400.25681 587.115587,400.924109 588.998853,401.57658 C590.880266,402.227196 592.92665,402.933421 595.136152,403.693401 C597.3438,404.455234 599.388331,405.487694 601.275305,406.790781 C603.154864,408.093869 604.732286,409.723191 606.000154,411.678748 C607.264315,413.632452 607.900103,416.131117 607.900103,419.174743 C607.900103,421.708626 607.319924,423.971882 606.163272,425.962658 C605.004766,427.955288 603.462563,429.655047 601.545932,431.069351 C599.625593,432.479947 597.397555,433.566162 594.865525,434.327995 C592.329788,435.087975 589.686542,435.467965 586.933933,435.467965 C583.241544,435.467965 579.565837,434.871103 575.910521,433.675525 C572.25335,432.479947 568.864953,430.72458 565.752744,428.405715 L572.596268,418.3054 Z M542.615998,434.38175 L556.73679,434.38175 L556.73679,357.258644 L542.615998,357.258644 L542.615998,434.38175 Z M514.787767,434.38175 L528.90856,434.38175 L528.90856,381.698478 L514.787767,381.698478 L514.787767,434.38175 Z M512.615338,363.015954 C512.615338,360.48207 513.518045,358.343006 515.330875,356.606174 C517.138143,354.867489 519.312427,354 521.848164,354 C524.382047,354 526.554477,354.867489 528.365452,356.606174 C530.174575,358.343006 531.08099,360.48207 531.08099,363.015954 C531.08099,365.549837 530.174575,367.685195 528.365452,369.42388 C526.554477,371.160711 524.382047,372.030054 521.848164,372.030054 C519.312427,372.030054 517.138143,371.160711 515.330875,369.42388 C513.518045,367.685195 512.615338,365.549837 512.615338,363.015954 L512.615338,363.015954 Z M487.111533,400.16413 C485.662011,398.208572 483.815816,396.634858 481.572949,395.439281 C479.326375,394.245556 476.825857,393.646841 474.076955,393.646841 C471.974963,393.646841 470.091696,394.045367 468.427155,394.842418 C466.760761,395.63947 465.350164,396.707149 464.191659,398.045455 C463.033153,399.387468 462.126738,400.924109 461.476122,402.662794 C460.823651,404.40148 460.49927,406.212455 460.49927,408.093869 C460.49927,410.195861 460.840334,412.112493 461.529876,413.851178 C462.217565,415.588009 463.196271,417.09314 464.462286,418.359155 C465.730154,419.627023 467.214895,420.622411 468.916508,421.347172 C470.618121,422.07008 472.445779,422.433387 474.40319,422.433387 C477.079801,422.433387 479.522858,421.834671 481.736067,420.640947 C483.941862,419.445369 485.736155,417.871655 487.111533,415.914244 L487.111533,400.16413 Z M487.65464,434.38175 L487.65464,430.1444 C485.482211,432.027667 483.163346,433.386362 480.703607,434.218632 C478.240161,435.049049 475.667351,435.467965 472.988887,435.467965 C469.077772,435.467965 465.3687,434.669059 461.856112,433.078663 C458.341669,431.484559 455.427796,429.31213 453.112638,426.55952 C451.008792,424.170219 449.364641,421.400927 448.169063,418.251645 C446.975339,415.10051 446.376624,411.71582 446.376624,408.093869 C446.376624,404.184607 447.045776,400.564509 448.385936,397.23172 C449.724241,393.900785 451.572289,391.003594 453.928226,388.540148 C456.278602,386.080409 459.014529,384.141534 462.126738,382.730938 C465.240801,381.318488 468.608809,380.612263 472.228907,380.612263 C478.023288,380.612263 482.983546,382.241585 487.111533,385.50023 L487.111533,357.256791 L501.232325,357.256791 L501.232325,434.38175 L487.65464,434.38175 Z M441.381148,394.189948 C440.873259,394.045367 440.148498,393.919321 439.208718,393.809958 C438.265231,393.702449 437.288379,393.646841 436.274455,393.646841 C434.754496,393.646841 433.306827,393.900785 431.929596,394.40682 C430.554218,394.914709 429.304886,395.548643 428.183452,396.308623 C427.060165,397.068603 426.101849,397.882337 425.304798,398.75168 C424.507746,399.621022 423.894201,400.455146 423.458603,401.250344 L423.458603,434.38175 L409.335957,434.38175 L409.335957,381.698478 L422.915496,381.698478 L422.915496,387.020189 C424.507746,385.064632 426.644957,383.509454 429.323422,382.350948 C432.00374,381.192443 434.971368,380.612263 438.230013,380.612263 C439.243937,380.612263 440.094743,380.649335 440.784286,380.721626 C441.470121,380.793917 442.211564,380.901426 443.01047,381.046007 L441.381148,394.189948 Z M357.568368,408.093869 C357.568368,410.049426 357.909432,411.89562 358.600828,413.632452 C359.286663,415.371137 360.23015,416.891096 361.423874,418.196037 C362.619452,419.500978 364.06712,420.531584 365.768733,421.291564 C367.470346,422.051544 369.370296,422.433387 371.470434,422.433387 C373.498283,422.433387 375.381549,422.051544 377.120234,421.291564 C378.858919,420.531584 380.325124,419.500978 381.518848,418.196037 C382.714426,416.891096 383.654206,415.371137 384.345602,413.632452 C385.031437,411.89562 385.376208,410.049426 385.376208,408.093869 C385.376208,406.140165 385.031437,404.275434 384.345602,402.499677 C383.654206,400.727627 382.714426,399.187278 381.518848,397.882337 C380.325124,396.57925 378.858919,395.548643 377.120234,394.78681 C375.381549,394.026831 373.498283,393.646841 371.470434,393.646841 C369.370296,393.646841 367.470346,394.026831 365.768733,394.78681 C364.06712,395.548643 362.619452,396.57925 361.423874,397.882337 C360.23015,399.187278 359.286663,400.727627 358.600828,402.499677 C357.909432,404.275434 357.568368,406.140165 357.568368,408.093869 L357.568368,408.093869 Z M343.445721,408.093869 C343.445721,404.329189 344.151946,400.760992 345.564396,397.394838 C346.974993,394.026831 348.93055,391.112957 351.431069,388.649511 C353.92788,386.189772 356.897361,384.234215 360.337659,382.784693 C363.776104,381.337024 367.488882,380.612263 371.470434,380.612263 C375.45384,380.612263 379.164765,381.337024 382.605063,382.784693 C386.045361,384.234215 389.014843,386.189772 391.513507,388.649511 C394.010319,391.112957 395.965876,394.026831 397.378326,397.394838 C398.790776,400.760992 399.495147,404.329189 399.495147,408.093869 C399.495147,411.932693 398.790776,415.499036 397.378326,418.794753 C395.965876,422.088616 394.010319,424.985806 391.513507,427.482618 C389.014843,429.981282 386.045361,431.93684 382.605063,433.34929 C379.164765,434.76174 375.45384,435.467965 371.470434,435.467965 C367.488882,435.467965 363.776104,434.76174 360.337659,433.34929 C356.897361,431.93684 353.92788,429.981282 351.431069,427.482618 C348.93055,424.985806 346.974993,422.088616 345.564396,418.794753 C344.151946,415.499036 343.445721,411.932693 343.445721,408.093869 L343.445721,408.093869 Z M301.97493,370.293222 C298.352978,370.293222 295.003506,370.982765 291.926516,372.356289 C288.847671,373.73352 286.169206,375.598251 283.887414,377.950481 C281.607475,380.304564 279.833571,383.05532 278.565703,386.206455 C277.299688,389.355736 276.665754,392.74228 276.665754,396.362378 C276.665754,400.054767 277.333053,403.496918 278.675066,406.681419 C280.013371,409.869626 281.842883,412.620381 284.159894,414.937393 C286.476906,417.256257 289.209125,419.083916 292.362114,420.424075 C295.511395,421.762381 298.933157,422.433387 302.6274,422.433387 C306.102917,422.433387 309.252198,421.89028 312.075244,420.804065 C314.900144,419.71785 317.398809,418.3054 319.571239,416.566715 L319.571239,400.16413 L300.019372,400.16413 L300.019372,387.129552 L334.235139,387.129552 L334.235139,420.911574 C330.830059,425.256433 326.416616,428.770876 320.983689,431.449341 C315.550761,434.127806 309.324489,435.467965 302.301165,435.467965 C296.362202,435.467965 290.929274,434.452187 286.006089,432.426193 C281.082904,430.398344 276.8437,427.629053 273.297746,424.116464 C269.748085,420.603875 266.978794,416.457352 264.988018,411.678748 C262.995388,406.900144 262,401.793452 262,396.362378 C262,390.931304 262.978705,385.826465 264.934263,381.046007 C266.887967,376.26555 269.620186,372.122734 273.134629,368.608292 C276.647218,365.097556 280.864178,362.328265 285.789217,360.298563 C290.712402,358.272569 296.14533,357.256791 302.084292,357.256791 C307.732239,357.256791 312.909368,358.235496 317.617535,360.1892 C322.323848,362.144758 326.416616,364.789857 329.892133,368.120793 L320.440581,378.113598 C318.121717,375.796587 315.40618,373.915174 312.292117,372.465652 C309.179907,371.01613 305.739609,370.293222 301.97493,370.293222 L301.97493,370.293222 Z M640.577374,423.497358 C635.081424,423.497358 631.594786,419.165474 631.594786,414.831737 C631.594786,410.394197 634.026721,407.541493 637.619015,404.9001 L639.20385,403.737888 L651.988191,417.263672 C648.39775,421.067277 645.12057,423.497358 640.577374,423.497358 L640.577374,423.497358 Z M642.16221,369.394222 C646.601603,369.394222 649.769421,372.563893 649.769421,376.580664 C649.769421,379.327712 648.501552,381.969105 645.014914,384.506695 L641.315111,387.253744 L639.309506,385.034974 C637.407703,383.131317 634.871966,380.067302 634.871966,376.897631 C634.871966,371.826157 638.675572,369.394222 642.16221,369.394222 L642.16221,369.394222 Z M681.851684,403.654475 L677.523507,390.599508 L660.97078,407.85846 L649.663765,395.917512 L652.516469,393.804398 C657.908618,389.789481 663.085747,384.29353 663.085747,376.686319 C663.085747,365.484961 654.206961,357.772094 642.267866,357.772094 C632.123064,357.772094 621.55564,364.745371 621.55564,377.320254 C621.55564,384.082219 626.206345,389.789481 629.798639,393.593086 L630.960851,394.862808 L630.432573,395.177922 C622.614051,400.988986 617.646379,406.377427 617.646379,415.676983 C617.646379,425.716128 625.678066,435.755274 640.366063,435.755274 C648.39775,435.755274 654.840895,431.949815 660.442501,426.244407 L668.157221,434.38175 L686.331856,434.38175 L669.423236,416.629737 L681.851684,403.654475 Z\" fill-rule=\"evenodd\"></path></svg>"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div id=\"work-images\" class=\"section\">\n	<div class=\"container\">\n		<div class=\"inline-grid\">\n			<div class=\"col-12\">\n				<img src=\"" + __webpack_require__(26) + "\">\n			</div>\n			<div class=\"col-6\">\n				<img src=\"" + __webpack_require__(27) + "\">\n			</div>\n			<div class=\"col-6\">\n				<img src=\"" + __webpack_require__(28) + "\">\n			</div>\n			<div class=\"col-6\">\n				<img src=\"" + __webpack_require__(29) + "\">\n			</div>\n			<div class=\"col-6\">\n				<img src=\"" + __webpack_require__(30) + "\">\n			</div>\n			<div class=\"col-12\">\n				<img src=\"" + __webpack_require__(31) + "\">\n			</div>\n			<div class=\"col-6\">\n				<img src=\"" + __webpack_require__(32) + "\">\n			</div>\n			<div class=\"col-6\">\n				<img src=\"" + __webpack_require__(33) + "\">\n			</div>\n			<div class=\"col-12\">\n				<img src=\"" + __webpack_require__(34) + "\">\n			</div>\n			<div class=\"col-12\">\n				<img src=\"" + __webpack_require__(35) + "\">\n			</div>\n			<div class=\"col-12\">\n				<img src=\"" + __webpack_require__(36) + "\">\n			</div>\n		</div>\n	</div>\n</div>";
	},"useData":true});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/honor-tilt.jpg";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/wip-6.png";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/foragers.gif";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/wip-am.png";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/rv.png";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/vb.gif";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/dropsplash.gif";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/ds-logo.gif";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/ikb-lg.gif";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/wip-13.png";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/full.gif";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div id=\"services\" class=\"section\">\n	<div class=\"container\">\n		<div class=\"inline-grid\">\n			<div class=\"col-3 title-col\">\n				<h3 class=\"section-title\">Services</h3>\n			</div>\n			<div class=\"col-9\">\n				<div class=\"right-content-wrap\">\n					<ul class=\"inline-grid no-break\">\n						<li class=\"col-12\">Web Design</li>\n						<li class=\"col-12\">Development</li>\n						<li class=\"col-12\">Visual Identity</li>\n						<li class=\"col-12\">User Experience</li>\n						<li class=\"col-12\">Ecommerce</li>\n						<li class=\"col-12\">Interface Design</li>\n						<li class=\"col-12\">Digital Design</li>\n					</ul>\n				</div><!--end .right-content-wrap-->\n			</div>\n		</div>\n	</div>\n</div>";
	},"useData":true});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div id=\"about\" class=\"section grey\">\n	<div class=\"container\">\n		<hr class=\"push-bottom\">\n		<div class=\"inline-grid\">\n			<div class=\"col-3 title-col\">\n				<h3 class=\"section-title\">About</h3>\n				<h3 class=\"section-title\">Information</h3>\n			</div>\n			<div class=\"col-9\">\n				<div class=\"right-content-wrap\">\n					<div class=\"inner-section bio\">\n						<p class=\"lgg bblue\">Hyperlink is made up of designer, <a href=\"#\">Matthew Gordils</a>, and developer, <a href=\"#\">Steve fuentes</a>. We work closely with our clients to find this and that. Sapiens autem semper beatus est et est aliquando in dolore; Quid sequatur, quid repugnet, vident. Haec quo modo conveniant, non sane intellego.</p>\n						<p>Steve and Matt have been working together for 2013 and have developed a streamlined system to integrate design and development seamlessly, making flat designs become immersive experiences.</p>\n					</div>\n					<div class=\"inner-section bio\">\n						<p>Matthew Gordils, <i>Designer</i></p>\n						<p>After completing a BFA in Graphic and Interactive Design at Tyler School of Art he moved to New York to work with NoFavorite, a web design studio in SoHo. He has worked with fashion brands such as Lulu Frost, Honor, Franziska Fox, and artists like Manolo Valdés and the Bruce High Quality Foundation.</p>\n						<p><a href=\"mailto:matt@hyperlinknyc.com\">matt@hyperlinknyc.com</a></p>\n					</div>\n					<div class=\"inner-section bio\">\n						<p>Robin Willis, <i>Developer</i></p>\n						<p>Robin Willis is a full stack developer who has been working with clients to build beautiful interactive sites that are easy and fun to maintain. After attending SVA for illustration Steve went to build experiences at a small web design studio. He has worked with numerous fashion clients to help their businesses grow and be on the cutting edge of the web.</p>\n						<p><a href=\"mailto:matt@hyperlinknyc.com\">steve@hyperlinknyc.com</a></p>\n					</div>\n				</div>\n				<!--end .right-content-wrap-->\n\n			</div>\n		</div>\n	</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div id=\"contact\" class=\"section\">\n	<div class=\"container\">\n		<hr class=\"push-bottom\">\n		<div class=\"inline-grid\">\n			<div class=\"col-3 title-col\">\n				<h3 class=\"section-title\">Contact</h3>\n			</div>\n			<div class=\"col-9\">\n				<div class=\"right-content-wrap\">\n					<p>\n						Project Inquiries<br>\n						<a href=\"#\">info@hyperlinknyc.com</a>\n					</p>\n					<p>\n						Design Inquiries<br>\n						<a href=\"#\">matt@hyperlinknyc.com</a>\n					</p>\n					<p>\n						Development Inquiries<br>\n						<a href=\"#\">steve@hyperlinknyc.com</a>\n					</p>\n				</div><!--end .right-content-wrap-->\n			</div>\n		</div>\n	</div>\n</div>";
	},"useData":true});

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(){return "";};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return "<div id=\"pageLoader\">\n	<div class=\"display-table\">\n		<div class=\"table-cell\">\n			<div class=\"loader\">\n				"
	    + ((stack1 = __default(__webpack_require__(23)).call(depth0 != null ? depth0 : {},__webpack_require__(24),{"name":"svg","hash":{},"data":data})) != null ? stack1 : "")
	    + "\n			</div>\n		</div>\n	</div>\n</div>";
	},"useData":true});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * imagesLoaded v4.1.0
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */

	(function (window, factory) {
	  'use strict';
	  // universal module definition

	  /*global define: false, module: false, require: false */

	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(43)], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter) {
	      return factory(window, EvEmitter);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory(window, require('ev-emitter'));
	  } else {
	    // browser global
	    window.imagesLoaded = factory(window, window.EvEmitter);
	  }
	})(window,

	// --------------------------  factory -------------------------- //

	function factory(window, EvEmitter) {

	  'use strict';

	  var $ = window.jQuery;
	  var console = window.console;

	  // -------------------------- helpers -------------------------- //

	  // extend objects
	  function extend(a, b) {
	    for (var prop in b) {
	      a[prop] = b[prop];
	    }
	    return a;
	  }

	  // turn element or nodeList into an array
	  function makeArray(obj) {
	    var ary = [];
	    if (Array.isArray(obj)) {
	      // use object if already an array
	      ary = obj;
	    } else if (typeof obj.length == 'number') {
	      // convert nodeList to array
	      for (var i = 0; i < obj.length; i++) {
	        ary.push(obj[i]);
	      }
	    } else {
	      // array of single index
	      ary.push(obj);
	    }
	    return ary;
	  }

	  // -------------------------- imagesLoaded -------------------------- //

	  /**
	   * @param {Array, Element, NodeList, String} elem
	   * @param {Object or Function} options - if function, use as callback
	   * @param {Function} onAlways - callback function
	   */
	  function ImagesLoaded(elem, options, onAlways) {
	    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	    if (!(this instanceof ImagesLoaded)) {
	      return new ImagesLoaded(elem, options, onAlways);
	    }
	    // use elem as selector string
	    if (typeof elem == 'string') {
	      elem = document.querySelectorAll(elem);
	    }

	    this.elements = makeArray(elem);
	    this.options = extend({}, this.options);

	    if (typeof options == 'function') {
	      onAlways = options;
	    } else {
	      extend(this.options, options);
	    }

	    if (onAlways) {
	      this.on('always', onAlways);
	    }

	    this.getImages();

	    if ($) {
	      // add jQuery Deferred object
	      this.jqDeferred = new $.Deferred();
	    }

	    // HACK check async to allow time to bind listeners
	    setTimeout(function () {
	      this.check();
	    }.bind(this));
	  }

	  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);

	  ImagesLoaded.prototype.options = {};

	  ImagesLoaded.prototype.getImages = function () {
	    this.images = [];

	    // filter & find items if we have an item selector
	    this.elements.forEach(this.addElementImages, this);
	  };

	  /**
	   * @param {Node} element
	   */
	  ImagesLoaded.prototype.addElementImages = function (elem) {
	    // filter siblings
	    if (elem.nodeName == 'IMG') {
	      this.addImage(elem);
	    }
	    // get background image on element
	    if (this.options.background === true) {
	      this.addElementBackgroundImages(elem);
	    }

	    // find children
	    // no non-element nodes, #143
	    var nodeType = elem.nodeType;
	    if (!nodeType || !elementNodeTypes[nodeType]) {
	      return;
	    }
	    var childImgs = elem.querySelectorAll('img');
	    // concat childElems to filterFound array
	    for (var i = 0; i < childImgs.length; i++) {
	      var img = childImgs[i];
	      this.addImage(img);
	    }

	    // get child background images
	    if (typeof this.options.background == 'string') {
	      var children = elem.querySelectorAll(this.options.background);
	      for (i = 0; i < children.length; i++) {
	        var child = children[i];
	        this.addElementBackgroundImages(child);
	      }
	    }
	  };

	  var elementNodeTypes = {
	    1: true,
	    9: true,
	    11: true
	  };

	  ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
	    var style = getComputedStyle(elem);
	    if (!style) {
	      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	      return;
	    }
	    // get url inside url("...")
	    var reURL = /url\((['"])?(.*?)\1\)/gi;
	    var matches = reURL.exec(style.backgroundImage);
	    while (matches !== null) {
	      var url = matches && matches[2];
	      if (url) {
	        this.addBackground(url, elem);
	      }
	      matches = reURL.exec(style.backgroundImage);
	    }
	  };

	  /**
	   * @param {Image} img
	   */
	  ImagesLoaded.prototype.addImage = function (img) {
	    var loadingImage = new LoadingImage(img);
	    this.images.push(loadingImage);
	  };

	  ImagesLoaded.prototype.addBackground = function (url, elem) {
	    var background = new Background(url, elem);
	    this.images.push(background);
	  };

	  ImagesLoaded.prototype.check = function () {
	    var _this = this;
	    this.progressedCount = 0;
	    this.hasAnyBroken = false;
	    // complete if no images
	    if (!this.images.length) {
	      this.complete();
	      return;
	    }

	    function onProgress(image, elem, message) {
	      // HACK - Chrome triggers event before object properties have changed. #83
	      setTimeout(function () {
	        _this.progress(image, elem, message);
	      });
	    }

	    this.images.forEach(function (loadingImage) {
	      loadingImage.once('progress', onProgress);
	      loadingImage.check();
	    });
	  };

	  ImagesLoaded.prototype.progress = function (image, elem, message) {
	    this.progressedCount++;
	    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	    // progress event
	    this.emitEvent('progress', [this, image, elem]);
	    if (this.jqDeferred && this.jqDeferred.notify) {
	      this.jqDeferred.notify(this, image);
	    }
	    // check if completed
	    if (this.progressedCount == this.images.length) {
	      this.complete();
	    }

	    if (this.options.debug && console) {
	      console.log('progress: ' + message, image, elem);
	    }
	  };

	  ImagesLoaded.prototype.complete = function () {
	    var eventName = this.hasAnyBroken ? 'fail' : 'done';
	    this.isComplete = true;
	    this.emitEvent(eventName, [this]);
	    this.emitEvent('always', [this]);
	    if (this.jqDeferred) {
	      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	      this.jqDeferred[jqMethod](this);
	    }
	  };

	  // --------------------------  -------------------------- //

	  function LoadingImage(img) {
	    this.img = img;
	  }

	  LoadingImage.prototype = Object.create(EvEmitter.prototype);

	  LoadingImage.prototype.check = function () {
	    // If complete is true and browser supports natural sizes,
	    // try to check for image status manually.
	    var isComplete = this.getIsImageComplete();
	    if (isComplete) {
	      // report based on naturalWidth
	      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
	      return;
	    }

	    // If none of the checks above matched, simulate loading on detached element.
	    this.proxyImage = new Image();
	    this.proxyImage.addEventListener('load', this);
	    this.proxyImage.addEventListener('error', this);
	    // bind to image as well for Firefox. #191
	    this.img.addEventListener('load', this);
	    this.img.addEventListener('error', this);
	    this.proxyImage.src = this.img.src;
	  };

	  LoadingImage.prototype.getIsImageComplete = function () {
	    return this.img.complete && this.img.naturalWidth !== undefined;
	  };

	  LoadingImage.prototype.confirm = function (isLoaded, message) {
	    this.isLoaded = isLoaded;
	    this.emitEvent('progress', [this, this.img, message]);
	  };

	  // ----- events ----- //

	  // trigger specified handler for event type
	  LoadingImage.prototype.handleEvent = function (event) {
	    var method = 'on' + event.type;
	    if (this[method]) {
	      this[method](event);
	    }
	  };

	  LoadingImage.prototype.onload = function () {
	    this.confirm(true, 'onload');
	    this.unbindEvents();
	  };

	  LoadingImage.prototype.onerror = function () {
	    this.confirm(false, 'onerror');
	    this.unbindEvents();
	  };

	  LoadingImage.prototype.unbindEvents = function () {
	    this.proxyImage.removeEventListener('load', this);
	    this.proxyImage.removeEventListener('error', this);
	    this.img.removeEventListener('load', this);
	    this.img.removeEventListener('error', this);
	  };

	  // -------------------------- Background -------------------------- //

	  function Background(url, element) {
	    this.url = url;
	    this.element = element;
	    this.img = new Image();
	  }

	  // inherit LoadingImage prototype
	  Background.prototype = Object.create(LoadingImage.prototype);

	  Background.prototype.check = function () {
	    this.img.addEventListener('load', this);
	    this.img.addEventListener('error', this);
	    this.img.src = this.url;
	    // check if image is already complete
	    var isComplete = this.getIsImageComplete();
	    if (isComplete) {
	      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
	      this.unbindEvents();
	    }
	  };

	  Background.prototype.unbindEvents = function () {
	    this.img.removeEventListener('load', this);
	    this.img.removeEventListener('error', this);
	  };

	  Background.prototype.confirm = function (isLoaded, message) {
	    this.isLoaded = isLoaded;
	    this.emitEvent('progress', [this, this.element, message]);
	  };

	  // -------------------------- jQuery -------------------------- //

	  ImagesLoaded.makeJQueryPlugin = function (jQuery) {
	    jQuery = jQuery || window.jQuery;
	    if (!jQuery) {
	      return;
	    }
	    // set local variable
	    $ = jQuery;
	    // $().imagesLoaded()
	    $.fn.imagesLoaded = function (options, callback) {
	      var instance = new ImagesLoaded(this, options, callback);
	      return instance.jqDeferred.promise($(this));
	    };
	  };
	  // try making plugin
	  ImagesLoaded.makeJQueryPlugin();

	  // --------------------------  -------------------------- //

	  return ImagesLoaded;
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */

	/* jshint unused: true, undef: true, strict: true */

	(function (global, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if (true) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	})(typeof window != 'undefined' ? window : undefined, function () {

	  "use strict";

	  function EvEmitter() {}

	  var proto = EvEmitter.prototype;

	  proto.on = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // set events hash
	    var events = this._events = this._events || {};
	    // set listeners array
	    var listeners = events[eventName] = events[eventName] || [];
	    // only add once
	    if (listeners.indexOf(listener) == -1) {
	      listeners.push(listener);
	    }

	    return this;
	  };

	  proto.once = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // add event
	    this.on(eventName, listener);
	    // set once flag
	    // set onceEvents hash
	    var onceEvents = this._onceEvents = this._onceEvents || {};
	    // set onceListeners object
	    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
	    // set flag
	    onceListeners[listener] = true;

	    return this;
	  };

	  proto.off = function (eventName, listener) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    var index = listeners.indexOf(listener);
	    if (index != -1) {
	      listeners.splice(index, 1);
	    }

	    return this;
	  };

	  proto.emitEvent = function (eventName, args) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    var i = 0;
	    var listener = listeners[i];
	    args = args || [];
	    // once stuff
	    var onceListeners = this._onceEvents && this._onceEvents[eventName];

	    while (listener) {
	      var isOnce = onceListeners && onceListeners[listener];
	      if (isOnce) {
	        // remove listener
	        // remove before trigger to prevent recursion
	        this.off(eventName, listener);
	        // unset once flag
	        delete onceListeners[listener];
	      }
	      // trigger listener
	      listener.apply(this, args);
	      // get next listener
	      i += isOnce ? 0 : 1;
	      listener = listeners[i];
	    }

	    return this;
	  };

	  return EvEmitter;
	});

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);