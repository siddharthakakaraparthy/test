(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['apxor-rtm'] = factory());
}(this, (function () { 'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /* eslint-disable no-unused-vars */
  /* eslint-disable no-useless-escape */
  /* eslint-disable no-empty */
  /* eslint-disable no-unsafe-finally */
  /* eslint-disable no-func-assign */
  /*! shepherd.js 4.0.0-beta.1 */

  function _typeof$1(obj) {
    if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
      _typeof$1 = function _typeof$1(obj) {
        return _typeof(obj);
      };
    } else {
      _typeof$1 = function _typeof$1(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
      };
    }
    return _typeof$1(obj);
  }
  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign || function (target) {
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
    return _extends.apply(this, arguments);
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      if (i % 2) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i]));
      }
    }
    return target;
  }
  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
  }
  function _getPrototypeOf$1(o) {
    _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$1(o);
  }
  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf$1(o, p);
  }
  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn$1(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized$1(self);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
   * Checks if `value` is classified as an `HTMLElement`.
   * @param {*} value The param to check if it is an HTMLElement
   */
  function isElement(value) {
    return value instanceof HTMLElement;
  }
  /**
   * Checks if `value` is classified as a `Function` object.
   * @param {*} value The param to check if it is a function
   */

  function isFunction(value) {
    return typeof value === "function";
  }
  /**
   * Checks if `value` is classified as a `Number` object.
   * @param {*} value The param to check if it is a number
   */

  function isNumber(value) {
    return typeof value === "number";
  }
  /**
   * Checks if `value` is classified as a `String` object.
   * @param {*} value The param to check if it is a string
   */

  function isString(value) {
    return typeof value === "string";
  }
  /**
   * Checks if `value` is undefined.
   * @param {*} value The param to check if it is undefined
   */

  function isUndefined(value) {
    return value === undefined;
  }

  /**!
   * tippy.js v5.0.0-alpha.2
   * (c) 2017-2019 atomiks
   * MIT License
   */
  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
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
    return _extends$1.apply(this, arguments);
  }
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  var ua = isBrowser ? navigator.userAgent : "";
  var isIE = /MSIE |Trident\//.test(ua);
  var isUCBrowser = /UCBrowser\//.test(ua);
  var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform);
  var defaultProps = {
    allowHTML: true,
    animateFill: false,
    animation: "fade",
    appendTo: function appendTo() {
      return document.body;
    },
    aria: "describedby",
    arrow: true,
    boundary: "scrollParent",
    content: "",
    delay: 0,
    distance: 10,
    duration: [325, 275],
    flip: true,
    flipBehavior: "flip",
    flipOnUpdate: false,
    hideOnClick: true,
    ignoreAttributes: false,
    inertia: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    lazy: true,
    maxWidth: 350,
    multiple: false,
    offset: 0,
    onCreate: function onCreate() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    placement: "top",
    popperOptions: {},
    role: "tooltip",
    showOnCreate: false,
    sticky: false,
    theme: "",
    touch: true,
    trigger: "mouseenter focus",
    triggerTarget: null,
    updateDuration: 0,
    wait: null,
    zIndex: 9999
  };
  var POPPER_INSTANCE_DEPENDENCIES = ["arrow", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"];
  var PASSIVE = {
    passive: true
  };
  var PREVENT_OVERFLOW_PADDING = 5;
  var ROUND_ARROW_INNER_HTML = '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>';
  var IOS_CLASS = "tippy-iOS";
  var POPPER_CLASS = "tippy-popper";
  var TOOLTIP_CLASS = "tippy-tooltip";
  var CONTENT_CLASS = "tippy-content";
  var BACKDROP_CLASS = "tippy-backdrop";
  var ARROW_CLASS = "tippy-arrow";
  var SVG_ARROW_CLASS = "tippy-svg-arrow";
  var POPPER_SELECTOR = "." + POPPER_CLASS;
  var TOOLTIP_SELECTOR = "." + TOOLTIP_CLASS;
  var CONTENT_SELECTOR = "." + CONTENT_CLASS;
  var BACKDROP_SELECTOR = "." + BACKDROP_CLASS;
  var ARROW_SELECTOR = "." + ARROW_CLASS;
  var SVG_ARROW_SELECTOR = "." + SVG_ARROW_CLASS;
  var currentInput = {
    isTouch: false
  };
  var lastMouseMoveTime = 0;
  /**
   * When a `touchstart` event is fired, it's assumed the user is using touch
   * input. We'll bind a `mousemove` event listener to listen for mouse input in
   * the future. This way, the `isTouch` property is fully dynamic and will handle
   * hybrid devices that use a mix of touch + mouse input.
   */

  function onDocumentTouchStart() {
    if (currentInput.isTouch) {
      return;
    }
    currentInput.isTouch = true;
    if (isIOS) {
      document.body.classList.add(IOS_CLASS);
    }
    if (window.performance) {
      document.addEventListener("mousemove", onDocumentMouseMove);
    }
  }
  /**
   * When two `mousemove` event are fired consecutively within 20ms, it's assumed
   * the user is using mouse input again. `mousemove` can fire on touch devices as
   * well, but very rarely that quickly.
   */

  function onDocumentMouseMove() {
    var now = performance.now();
    if (now - lastMouseMoveTime < 20) {
      currentInput.isTouch = false;
      document.removeEventListener("mousemove", onDocumentMouseMove);
      if (!isIOS) {
        document.body.classList.remove(IOS_CLASS);
      }
    }
    lastMouseMoveTime = now;
  }
  /**
   * When an element is in focus and has a tippy, leaving the tab/window and
   * returning causes it to show again. For mouse users this is unexpected, but
   * for keyboard use it makes sense.
   * TODO: find a better technique to solve this problem
   */

  function onWindowBlur() {
    var _document = document,
      activeElement = _document.activeElement;
    var instance = activeElement._tippy;
    if (activeElement && activeElement.blur && instance && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
  /**
   * Adds the needed global event listeners
   */

  function bindGlobalEventListeners() {
    document.addEventListener("touchstart", onDocumentTouchStart, _extends$1({}, PASSIVE, {
      capture: true
    }));
    window.addEventListener("blur", onWindowBlur);
  }
  var keys = Object.keys(defaultProps);
  /**
   * Returns an object of optional props from data-tippy-* attributes
   */

  function getDataAttributeProps(reference) {
    var props = keys.reduce(function (acc, key) {
      var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
      if (!valueAsString) {
        return acc;
      }
      if (key === "content") {
        acc[key] = valueAsString;
      } else {
        try {
          acc[key] = JSON.parse(valueAsString);
        } catch (e) {
          acc[key] = valueAsString;
        }
      }
      return acc;
    }, {});
    return props;
  }

  /**
   * Determines if the value is a reference element
   */

  function isReferenceElement(value) {
    return !!(value && value._tippy && !value.classList.contains(POPPER_CLASS));
  }
  /**
   * Safe .hasOwnProperty check, for prototype-less objects
   */

  function hasOwnProperty(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  /**
   * Returns an array of elements based on the value
   */

  function getArrayOfElements(value) {
    if (isRealElement(value)) {
      return [value];
    }
    if (value instanceof NodeList) {
      return arrayFrom(value);
    }
    if (Array.isArray(value)) {
      return value;
    }
    try {
      return arrayFrom(document.querySelectorAll(value));
    } catch (e) {
      return [];
    }
  }
  /**
   * Returns a value at a given index depending on if it's an array or number
   */

  function getValue(value, index, defaultValue) {
    if (Array.isArray(value)) {
      var v = value[index];
      return v == null ? defaultValue : 0;
    }
    value = 0;
    return value;
  }
  /**
   * Prevents errors from being thrown while accessing nested modifier objects
   * in `popperOptions`
   */

  function getModifier(obj, key) {
    return obj && obj.modifiers && obj.modifiers[key];
  }
  /**
   * Determines if the value is a real element
   */

  function isRealElement(value) {
    return value instanceof Element;
  }
  /**
   * Firefox extensions don't allow setting .innerHTML directly, this will trick
   * it
   */

  function innerHTML() {
    return "innerHTML";
  }
  /**
   * Evaluates a function if one, or returns the value
   */

  function invokeWithArgsOrReturn(value, args) {
    return typeof value === "function" ? value.apply(null, args) : value;
  }
  /**
   * Sets a popperInstance `flip` modifier's enabled state
   */

  function setFlipModifierEnabled(modifiers, value) {
    modifiers.filter(function (m) {
      return m.name === "flip";
    })[0].enabled = value;
  }
  function setEscapeWithReference(modifiers, value) {
    modifiers.filter(function (m) {
      return m.name === "preventOverflow";
    })[0].escapeWithReference = value;
  }

  /**
   * Returns a new `div` element
   */

  function div() {
    return document.createElement("div");
  }
  /**
   * Applies a transition duration to a list of elements
   */

  function setTransitionDuration(els, value) {
    els.forEach(function (el) {
      if (el) {
        el.style.transitionDuration = value + "ms";
      }
    });
  }
  /**
   * Sets the visibility state to elements so they can begin to transition
   */

  function setVisibilityState(els, state) {
    els.forEach(function (el) {
      if (el) {
        el.setAttribute("data-state", state);
      }
    });
  }
  /**
   * Evaluates the props object by merging data attributes and disabling
   * conflicting props where necessary
   */

  function evaluateProps(reference, props) {
    var out = _extends$1({}, props, {
      content: invokeWithArgsOrReturn(props.content, [reference])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference));
    if (out.animateFill) {
      out.arrow = false;
    }
    if (out.arrow || isUCBrowser) {
      out.animateFill = false;
    }
    return out;
  }
  /**
   * Debounce utility. To avoid bloating bundle size, we're only passing 1
   * argument here, a more generic function would pass all arguments. Only
   * `onMouseMove` uses this which takes the event object for now.
   */

  function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) {
      return fn;
    }
    var timeout;
    return function (arg) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn(arg);
      }, ms);
    };
  }
  /**
   * Preserves the original function invocation when another function replaces it
   */

  function preserveInvocation(originalFn, currentFn, args) {
    if (originalFn && originalFn !== currentFn) {
      originalFn.apply(null, args);
    }
  }
  /**
   * Ponyfill for Array.from - converts iterable values to an array
   */

  function arrayFrom(value) {
    return [].slice.call(value);
  }
  /**
   * Works like Element.prototype.closest, but uses a callback instead
   */

  function closestCallback(element, callback) {
    while (element) {
      if (callback(element)) {
        return element;
      }
      element = element.parentElement;
    }
    return null;
  }
  /**
   * Determines if an array or string includes a value
   */

  function includes(a, b) {
    return a.indexOf(b) > -1;
  }

  /**
   * Sets the innerHTML of an element
   */

  function setInnerHTML(element, html) {
    element[innerHTML()] = isRealElement(html) ? html[innerHTML()] : html;
  }
  /**
   * Sets the content of a tooltip
   */

  function setContent(contentEl, props) {
    if (isRealElement(props.content)) {
      setInnerHTML(contentEl, "");
      contentEl.appendChild(props.content);
    } else if (typeof props.content !== "function") {
      var key = props.allowHTML ? "innerHTML" : "textContent";
      contentEl[key] = props.content;
    }
  }
  /**
   * Returns the child elements of a popper element
   */

  function getChildren(popper) {
    return {
      tooltip: popper.querySelector(TOOLTIP_SELECTOR),
      backdrop: popper.querySelector(BACKDROP_SELECTOR),
      content: popper.querySelector(CONTENT_SELECTOR),
      arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(SVG_ARROW_SELECTOR)
    };
  }
  /**
   * Adds `data-inertia` attribute
   */

  function addInertia(tooltip) {
    tooltip.setAttribute("data-inertia", "");
  }
  /**
   * Removes `data-inertia` attribute
   */

  function removeInertia(tooltip) {
    tooltip.removeAttribute("data-inertia");
  }
  /**
   * Creates an arrow element and returns it
   */

  function createArrowElement(arrow) {
    var arrowElement = div();
    if (arrow === true) {
      arrowElement.className = ARROW_CLASS;
    } else {
      arrowElement.className = SVG_ARROW_CLASS;
      if (isRealElement(arrow)) {
        arrowElement.appendChild(arrow);
      } else {
        setInnerHTML(arrowElement, arrow === "round" ? ROUND_ARROW_INNER_HTML : arrow);
      }
    }
    return arrowElement;
  }
  /**
   * Creates a backdrop element and returns it
   */

  function createBackdropElement(isVisible) {
    var backdrop = div();
    backdrop.className = BACKDROP_CLASS;
    backdrop.setAttribute("data-state", isVisible ? "visible" : "hidden");
    return backdrop;
  }
  /**
   * Adds interactive-related attributes
   */

  function addInteractive(tooltip) {
    tooltip.setAttribute("data-interactive", "");
  }
  /**
   * Removes interactive-related attributes
   */

  function removeInteractive(tooltip) {
    tooltip.removeAttribute("data-interactive");
  }
  /**
   * Add/remove transitionend listener from tooltip
   */

  function updateTransitionEndListener(tooltip, action, listener) {
    var eventName = isUCBrowser && document.body.style.webkitTransition !== undefined ? "webkitTransitionEnd" : "transitionend";
    tooltip[action + "EventListener"](eventName, listener);
  }
  /**
   * Returns the popper's placement, ignoring shifting (top-start, etc)
   */

  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  /**
   * Triggers reflow
   */

  function reflow(popper) {
    void popper.offsetHeight;
  }
  /**
   * Adds/removes theme from tooltip's classList
   */

  function updateTheme(tooltip, action, theme) {
    theme.split(" ").forEach(function (name) {
      if (name) {
        tooltip.classList[action](name + "-theme");
      }
    });
  }
  /**
   * Constructs the popper element and returns it
   */

  function createPopperElement(id, props) {
    var popper = div();
    popper.className = POPPER_CLASS;
    popper.style.position = "absolute";
    popper.style.top = "0";
    popper.style.left = "0";
    var tooltip = div();
    tooltip.className = TOOLTIP_CLASS;
    tooltip.id = "tippy-" + id;
    tooltip.setAttribute("data-state", "hidden");
    tooltip.setAttribute("tabindex", "-1");
    updateTheme(tooltip, "add", props.theme);
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute("data-state", "hidden");
    if (props.interactive) {
      addInteractive(tooltip);
    }
    if (props.arrow) {
      tooltip.setAttribute("data-arrow", "");
      tooltip.appendChild(createArrowElement(props.arrow));
    }
    if (props.animateFill) {
      tooltip.appendChild(createBackdropElement(false));
      tooltip.setAttribute("data-animatefill", "");
    }
    if (props.inertia) {
      addInertia(tooltip);
    }
    setContent(content, props);
    tooltip.appendChild(content);
    popper.appendChild(tooltip);
    updatePopperElement(popper, props, props, false);
    return popper;
  }
  /**
   * Updates the popper element based on the new props
   */

  function updatePopperElement(popper, prevProps, nextProps, isVisible) {
    var _getChildren = getChildren(popper),
      tooltip = _getChildren.tooltip,
      content = _getChildren.content,
      backdrop = _getChildren.backdrop,
      arrow = _getChildren.arrow;
    popper.style.zIndex = "" + nextProps.zIndex;
    tooltip.setAttribute("data-animation", nextProps.animation);
    tooltip.style.maxWidth = nextProps.maxWidth + (typeof nextProps.maxWidth === "number" ? "px" : "");
    if (nextProps.role) {
      tooltip.setAttribute("role", nextProps.role);
    } else {
      tooltip.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content) {
      setContent(content, nextProps);
    } // animateFill

    if (!prevProps.animateFill && nextProps.animateFill) {
      tooltip.appendChild(createBackdropElement(isVisible));
      tooltip.setAttribute("data-animatefill", "");
    } else if (prevProps.animateFill && !nextProps.animateFill) {
      tooltip.removeChild(backdrop);
      tooltip.removeAttribute("data-animatefill");
    } // arrow

    if (!prevProps.arrow && nextProps.arrow) {
      // false to true
      tooltip.appendChild(createArrowElement(nextProps.arrow));
      tooltip.setAttribute("data-arrow", "");
    } else if (prevProps.arrow && !nextProps.arrow) {
      // true to false
      tooltip.removeChild(arrow);
      tooltip.removeAttribute("data-arrow");
    } else if (prevProps.arrow !== nextProps.arrow) {
      // true to 'round' or vice-versa
      tooltip.removeChild(arrow);
      tooltip.appendChild(createArrowElement(nextProps.arrow));
    } // interactive

    if (!prevProps.interactive && nextProps.interactive) {
      addInteractive(tooltip);
    } else if (prevProps.interactive && !nextProps.interactive) {
      removeInteractive(tooltip);
    } // inertia

    if (!prevProps.inertia && nextProps.inertia) {
      addInertia(tooltip);
    } else if (prevProps.inertia && !nextProps.inertia) {
      removeInertia(tooltip);
    } // theme

    if (prevProps.theme !== nextProps.theme) {
      updateTheme(tooltip, "remove", prevProps.theme);
      updateTheme(tooltip, "add", nextProps.theme);
    }
  }
  /**
   * Determines if the mouse cursor is outside of the popper's interactive border
   * region
   */

  function isCursorOutsideInteractiveBorder(popperPlacement, popperRect, event, props) {
    if (!popperPlacement) {
      return true;
    }
    var x = event.clientX,
      y = event.clientY;
    var interactiveBorder = props.interactiveBorder,
      distance = props.distance;
    var exceedsTop = popperRect.top - y > (popperPlacement === "top" ? interactiveBorder + distance : interactiveBorder);
    var exceedsBottom = y - popperRect.bottom > (popperPlacement === "bottom" ? interactiveBorder + distance : interactiveBorder);
    var exceedsLeft = popperRect.left - x > (popperPlacement === "left" ? interactiveBorder + distance : interactiveBorder);
    var exceedsRight = x - popperRect.right > (popperPlacement === "right" ? interactiveBorder + distance : interactiveBorder);
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  }

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.15.0
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser$1 = typeof window !== "undefined" && typeof document !== "undefined";
  var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
  var timeoutDuration = 0;
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }
  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }
  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }
  var supportsMicroTasks = isBrowser$1 && window.Promise;

  /**
   * Create a debounced version of a method, that's asynchronously deferred
   * but called in the minimum time possible.
   *
   * @method
   * @memberof Popper.Utils
   * @argument {Function} fn
   * @returns {Function}
   */
  var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction$1(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === "HTML") {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }
    switch (element.nodeName) {
      case "HTML":
      case "BODY":
        return element.ownerDocument.body;
      case "#document":
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }
    return getScrollParent(getParentNode(element));
  }
  var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE$1(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }
    var noOffsetParent = isIE$1(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }
    var nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
      return getOffsetParent(offsetParent);
    }
    return offsetParent;
  }
  function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === "BODY") {
      return false;
    }
    return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }
    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }
      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "top";
    var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
    var nodeName = element.nodeName;
    if (nodeName === "BODY" || nodeName === "HTML") {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }
    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, "top");
    var scrollLeft = getScroll(element, "left");
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === "x" ? "Left" : "Top";
    var sideB = sideA === "Left" ? "Right" : "Bottom";
    return parseFloat(styles["border" + sideA + "Width"], 10) + parseFloat(styles["border" + sideB + "Width"], 10);
  }
  function getSize(axis, body, html, computedStyle) {
    return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE$1(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
  }
  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE$1(10) && getComputedStyle(html);
    return {
      height: getSize("Height", body, html, computedStyle),
      width: getSize("Width", body, html, computedStyle)
    };
  }
  var classCallCheck = function classCallCheck(instance, Constructor) {
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
  var defineProperty = function defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  };
  var _extends$2 = Object.assign || function (target) {
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

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends$2({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE$1(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, "top");
        var scrollLeft = getScroll(element, "left");
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}
    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, "x");
      vertScrollbar -= getBordersSize(styles, "y");
      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }
    return getClientRect(result);
  }
  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isIE10 = isIE$1(10);
    var isHTML = parent.nodeName === "HTML";
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);
      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
      offsets = includeScroll(offsets, parent);
    }
    return offsets;
  }
  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };
    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === "BODY" || nodeName === "HTML") {
      return false;
    }
    if (getStyleComputedProperty(element, "position") === "fixed") {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE$1()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, "transform") === "none") {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = {
      top: 0,
      left: 0
    };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement === "viewport") {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === "scrollParent") {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === "BODY") {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === "window") {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }
      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;
        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === "number";
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
    return boundaries;
  }
  function getArea(_ref) {
    var width = _ref.width,
      height = _ref.height;
    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    if (placement.indexOf("auto") === -1) {
      return placement;
    }
    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };
    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends$2({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
        height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split("-")[1];
    return computedPlacement + (variation ? "-" + variation : "");
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split("-")[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ["right", "left"].indexOf(placement) !== -1;
    var mainSide = isHoriz ? "top" : "left";
    var secondarySide = isHoriz ? "left" : "top";
    var measurement = isHoriz ? "height" : "width";
    var secondaryMeasurement = !isHoriz ? "height" : "width";
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }
    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, "name", ends));
    modifiersToRun.forEach(function (modifier) {
      if (modifier["function"]) {
        // eslint-disable-line dot-notation
        console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      }
      var fn = modifier["function"] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction$1(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);
        data = fn(data, modifier);
      }
    });
    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }
    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
        enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, "ms", "Webkit", "Moz", "O"];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? "" + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== "undefined") {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, "applyStyle")) {
      this.popper.removeAttribute("x-placement");
      this.popper.style.position = "";
      this.popper.style.top = "";
      this.popper.style.left = "";
      this.popper.style.right = "";
      this.popper.style.bottom = "";
      this.popper.style.willChange = "";
      this.popper.style[getSupportedPropertyName("transform")] = "";
    }
    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }
  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === "BODY";
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, {
      passive: true
    });
    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener("resize", state.updateBound, {
      passive: true
    });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener("resize", state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener("scroll", state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = "";
      // add unit if the value is numeric and is one of the following
      if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = "px";
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }
    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute("x-placement", placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, {
      position: options.positionFixed ? "fixed" : "absolute"
    });
    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
    var round = Math.round,
      floor = Math.floor;
    var noRound = function noRound(v) {
      return v;
    };
    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);
    var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf("-") !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;
    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }
  var isFirefox = isBrowser$1 && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
      y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === "applyStyle";
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };
    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
    var sideA = x === "bottom" ? "top" : "bottom";
    var sideB = y === "right" ? "left" : "right";

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName("transform");

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
      top = void 0;
    if (sideA === "bottom") {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === "HTML") {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === "right") {
      if (offsetParent.nodeName === "HTML") {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = "transform";
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === "bottom" ? -1 : 1;
      var invertLeft = sideB === "right" ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ", " + sideB;
    }

    // Attributes
    var attributes = {
      "x-placement": data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends$2({}, attributes, data.attributes);
    data.styles = _extends$2({}, styles, data.styles);
    data.arrowStyles = _extends$2({}, data.offsets.arrow, data.arrowStyles);
    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });
    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });
    if (!isRequired) {
      var _requesting = "`" + requestingName + "`";
      var requested = "`" + requestedName + "`";
      console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
      return data;
    }
    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === "string") {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn("WARNING: `arrow.element` must be child of its popper element!");
        return data;
      }
    }
    var placement = data.placement.split("-")[0];
    var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
    var isVertical = ["left", "right"].indexOf(placement) !== -1;
    var len = isVertical ? "height" : "width";
    var sideCapitalized = isVertical ? "Top" : "Left";
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? "left" : "top";
    var opSide = isVertical ? "bottom" : "right";
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css["margin" + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === "end") {
      return "start";
    } else if (variation === "start") {
      return "end";
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }
  var BEHAVIORS = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise"
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, "inner")) {
      return data;
    }
    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
    var placement = data.placement.split("-")[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split("-")[1] || "";
    var flipOrder = [];
    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }
    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }
      placement = data.placement.split("-")[0];
      placementOpposite = getOppositePlacement(placement);
      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
      var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;

      // flip the variation if required
      var isVertical = ["top", "bottom"].indexOf(placement) !== -1;

      // flips variation if reference element overflows boundaries
      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);

      // flips variation if popper content overflows boundaries
      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
      var flippedVariation = flippedVariationByRef || flippedVariationByContent;
      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;
        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }
        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }
        data.placement = placement + (variation ? "-" + variation : "");

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends$2({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
        data = runModifiers(data.instance.modifiers, data, "flip");
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
    var placement = data.placement.split("-")[0];
    var floor = Math.floor;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var side = isVertical ? "right" : "bottom";
    var opSide = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }
    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }
    if (unit.indexOf("%") === 0) {
      var element = void 0;
      switch (unit) {
        case "%p":
          element = popperOffsets;
          break;
        case "%":
        case "%r":
        default:
          element = referenceOffsets;
      }
      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === "vh" || unit === "vw") {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === "vh") {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));
    if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
      console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? "height" : "width";
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
    var basePlacement = placement.split("-")[0];
    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }
    if (basePlacement === "left") {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === "right") {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === "top") {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === "bottom") {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }
    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName("transform");
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
    popperStyles.top = "";
    popperStyles.left = "";
    popperStyles[transformProp] = "";
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === "right" ? "left" : "top";
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };
    order.forEach(function (placement) {
      var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
      popper = _extends$2({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split("-")[0];
    var shiftvariation = placement.split("-")[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
      var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
      var side = isVertical ? "left" : "top";
      var measurement = isVertical ? "width" : "height";
      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };
      data.offsets.popper = _extends$2({}, popper, shiftOffsets[shiftvariation]);
    }
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
      return data;
    }
    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === "preventOverflow";
    }).boundaries;
    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }
      data.hide = true;
      data.attributes["x-out-of-boundaries"] = "";
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }
      data.hide = false;
      data.attributes["x-out-of-boundaries"] = false;
    }
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split("-")[0];
    var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
    var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
    var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
    popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },
    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },
    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ["left", "right", "top", "bottom"],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: "scrollParent"
    },
    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },
    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: "[x-arrow]"
    },
    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: "flip",
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: "viewport",
      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,
      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false
    },
    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },
    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },
    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: "bottom",
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: "right"
    },
    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: "bottom",
    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,
    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,
    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,
    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},
    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},
    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);
      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce$1(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends$2({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends$2({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends$2({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends$2({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction$1(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();
      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }
      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs

    createClass(Popper, [{
      key: "update",
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: "destroy",
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */

      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */
    }]);

    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */

  Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  /**!
   * tippy.js v5.0.0-alpha.2
   * (c) 2017-2019 atomiks
   * MIT License
   */

  var version = "5.0.0-alpha.2";
  var idCounter = 1; // Workaround for IE11's lack of new MouseEvent constructor

  var mouseMoveListeners = [];
  /**
   * Creates and returns a Tippy object. We're using a closure pattern instead of
   * a class so that the exposed object API is clean without private members
   * prefixed with `_`.
   */

  function createTippy(reference, collectionProps) {
    var props = evaluateProps(reference, collectionProps); // If the reference shouldn't have multiple tippys, return null early

    if (!props.multiple && reference._tippy) {
      return null;
    }
    /* ======================= 🔒 Private members 🔒 ======================= */

    var lastTriggerEventType;
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isBeingDestroyed = false;
    var hasMountCallbackRun = false;
    var didHideDueToDocumentMouseDown = false;
    var normalizedPlacement;
    var currentMountCallback;
    var currentTransitionEndListener;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    /* ======================= 🔑 Public members 🔑 ======================= */

    var id = idCounter++;
    var popper = createPopperElement(id, props);
    var popperChildren = getChildren(popper);
    var popperInstance = null; // These two elements are static

    var tooltip = popperChildren.tooltip,
      content = popperChildren.content;
    var state = {
      // The current real placement (`data-placement` attribute)
      currentPlacement: props.placement,
      // Does the instance have a pending timeout for show()?
      isScheduledToShow: false,
      // Is the instance currently enabled?
      isEnabled: true,
      // Is the tippy currently showing and not transitioning out?
      isVisible: false,
      // Has the instance been destroyed?
      isDestroyed: false,
      // Is the tippy currently mounted to the DOM?
      isMounted: false,
      // Has the tippy finished transitioning in?
      isShown: false
    };
    var instance = {
      // properties
      id: id,
      reference: reference,
      popper: popper,
      popperChildren: popperChildren,
      popperInstance: popperInstance,
      props: props,
      state: state,
      // methods
      clearDelayTimeouts: clearDelayTimeouts,
      setProps: setProps,
      setContent: setContent,
      show: show,
      hide: hide,
      enable: enable,
      disable: disable,
      destroy: destroy
    };
    /* ==================== Initial instance mutations =================== */

    reference._tippy = instance;
    popper._tippy = instance;
    addTriggersToEventListenersTarget();
    if (!props.lazy) {
      createPopperInstance();
    }
    if (props.showOnCreate) {
      scheduleShow();
    } // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding

    popper.addEventListener("mouseenter", function () {
      if (instance.props.interactive && instance.state.isVisible && lastTriggerEventType === "mouseenter") {
        instance.clearDelayTimeouts();
      }
    });
    popper.addEventListener("mouseleave", function () {
      if (instance.props.interactive && lastTriggerEventType === "mouseenter") {
        document.addEventListener("mousemove", debouncedOnMouseMove);
      }
    });
    props.onCreate(instance);
    return instance;
    /* ======================= 🔒 Private methods 🔒 ======================= */

    function getIsVerticalPlacement() {
      return includes(["top", "bottom"], getBasePlacement(instance.state.currentPlacement));
    }
    function getIsOppositePlacement() {
      return includes(["bottom", "right"], getBasePlacement(instance.state.currentPlacement));
    }
    function getNormalizedTouchSettings() {
      var touch = instance.props.touch;
      return Array.isArray(touch) ? touch : [touch, 0];
    }
    function getIsCustomTouchBehavior() {
      return getNormalizedTouchSettings()[0] === "hold";
    }
    function getTransitionableElements() {
      return [tooltip, content, instance.popperChildren.backdrop];
    }
    function getEventListenersTarget() {
      return instance.props.triggerTarget || reference;
    }
    function cleanupInteractiveMouseListeners() {
      document.body.removeEventListener("mouseleave", scheduleHide);
      document.removeEventListener("mousemove", debouncedOnMouseMove);
      mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
        return listener !== debouncedOnMouseMove;
      });
    }
    function onDocumentMouseDown(event) {
      // Clicked on interactive popper
      if (instance.props.interactive && popper.contains(event.target)) {
        return;
      } // Clicked on the event listeners target

      if (getEventListenersTarget().contains(event.target)) {
        if (currentInput.isTouch) {
          return;
        }
        if (instance.state.isVisible && includes(instance.props.trigger, "click")) {
          return;
        }
      }
      if (instance.props.hideOnClick === true) {
        instance.clearDelayTimeouts();
        instance.hide(); // `mousedown` event is fired right before `focus`. This lets a tippy with
        // `focus` trigger know that it should not show

        didHideDueToDocumentMouseDown = true;
        setTimeout(function () {
          didHideDueToDocumentMouseDown = false;
        }); // The listener gets added in `scheduleShow()`, but this may be hiding it
        // before it shows, and hide()'s early bail-out behavior can prevent it
        // from being cleaned up

        if (!instance.state.isMounted) {
          removeDocumentMouseDownListener();
        }
      }
    }
    function addDocumentMouseDownListener() {
      document.addEventListener("mousedown", onDocumentMouseDown, true);
    }
    function removeDocumentMouseDownListener() {
      document.removeEventListener("mousedown", onDocumentMouseDown, true);
    }
    function makeSticky() {
      setTransitionDuration([popper], isIE ? 0 : instance.props.updateDuration);
      function updatePosition() {
        instance.popperInstance.scheduleUpdate();
        if (instance.state.isMounted) {
          requestAnimationFrame(updatePosition);
        } else {
          setTransitionDuration([popper], 0);
        }
      }
      updatePosition();
    }
    function onTransitionedOut(duration, callback) {
      onTransitionEnd(duration, function () {
        if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
          callback();
        }
      });
    }
    function onTransitionedIn(duration, callback) {
      onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
      /**
       * Listener added as the `transitionend` handler
       */
      function listener(event) {
        if (event.target === tooltip) {
          updateTransitionEndListener(tooltip, "remove", listener);
          callback();
        }
      } // Make callback synchronous if duration is 0
      // `transitionend` won't fire otherwise

      if (duration === 0) {
        return callback();
      }
      updateTransitionEndListener(tooltip, "remove", currentTransitionEndListener);
      updateTransitionEndListener(tooltip, "add", listener);
      currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }
      getEventListenersTarget().addEventListener(eventType, handler, options);
      listeners.push({
        eventType: eventType,
        handler: handler,
        options: options
      });
    }
    function addTriggersToEventListenersTarget() {
      if (getIsCustomTouchBehavior()) {
        on("touchstart", onTrigger, PASSIVE);
        on("touchend", onMouseLeave, PASSIVE);
      } // `click` for keyboard. Mouse uses `mousedown` (onDocumentMouseDown)

      if (!includes(instance.props.trigger, "click")) {
        on("click", function () {
          if (!currentInput.isTouch && instance.props.hideOnClick === true) {
            instance.hide();
          }
        });
      }
      instance.props.trigger.trim().split(" ").forEach(function (eventType) {
        if (eventType === "manual") {
          return;
        }
        on(eventType, onTrigger);
        switch (eventType) {
          case "mouseenter":
            on("mouseleave", onMouseLeave);
            break;
          case "focus":
            on(isIE ? "focusout" : "blur", onBlur);
            break;
        }
      });
    }
    function removeTriggersFromEventListenersTarget() {
      listeners.forEach(function (_ref) {
        var eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
        getEventListenersTarget().removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }
    function onTrigger(event) {
      if (didHideDueToDocumentMouseDown || !instance.state.isEnabled || isEventListenerStopped(event)) {
        return;
      }
      if (!instance.state.isVisible) {
        lastTriggerEventType = event.type;
        if (event instanceof MouseEvent) {
          // If scrolling, `mouseenter` events can be fired if the cursor lands
          // over a new target, but `mousemove` events don't get fired. This
          // causes interactive tooltips to get stuck open until the cursor is
          // moved
          mouseMoveListeners.forEach(function (listener) {
            return listener(event);
          });
        }
      } // Toggle show/hide when clicking click-triggered tooltips

      if (event.type === "click" && instance.props.hideOnClick !== false && instance.state.isVisible) {
        scheduleHide(event);
      } else {
        var _getNormalizedTouchSe = getNormalizedTouchSettings(),
          value = _getNormalizedTouchSe[0],
          duration = _getNormalizedTouchSe[1];
        if (currentInput.isTouch && value === "hold" && duration) {
          // We can hijack the show timeout here, it will be cleared by
          // `scheduleHide()` when necessary
          showTimeout = setTimeout(function () {
            scheduleShow(event);
          }, duration);
        } else {
          scheduleShow(event);
        }
      }
    }
    function onMouseMove(event) {
      var isCursorOverReferenceOrPopper = closestCallback(event.target, function (el) {
        return el === reference || el === popper;
      });
      if (isCursorOverReferenceOrPopper) {
        return;
      }
      if (isCursorOutsideInteractiveBorder(getBasePlacement(instance.state.currentPlacement), popper.getBoundingClientRect(), event, instance.props)) {
        cleanupInteractiveMouseListeners();
        scheduleHide(event);
      }
    }
    function onMouseLeave(event) {
      if (isEventListenerStopped(event)) {
        return;
      }
      if (instance.props.interactive) {
        document.body.addEventListener("mouseleave", scheduleHide);
        document.addEventListener("mousemove", debouncedOnMouseMove);
        mouseMoveListeners.push(debouncedOnMouseMove);
        return;
      }
      scheduleHide(event);
    }
    function onBlur(event) {
      if (event.target !== getEventListenersTarget()) {
        return;
      } // If focus was moved to within the popper

      if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
        return;
      }
      scheduleHide(event);
    }
    function isEventListenerStopped(event) {
      var supportsTouch = ("ontouchstart" in window);
      var isTouchEvent = includes(event.type, "touch");
      var isCustomTouch = getIsCustomTouchBehavior();
      return supportsTouch && currentInput.isTouch && isCustomTouch && !isTouchEvent || currentInput.isTouch && !isCustomTouch && isTouchEvent;
    }
    function createPopperInstance() {
      var _instance$props = instance.props,
        popperOptions = _instance$props.popperOptions,
        placement = _instance$props.placement;
      var arrow = instance.popperChildren.arrow;
      var preventOverflowModifier = getModifier(popperOptions, "preventOverflow"); // Due to the virtual offsets normalization when using `followCursor`, we
      // need to use the opposite placement

      var shift = instance.state.currentPlacement.split("-")[1];
      normalizedPlacement = instance.props.followCursor && shift ? placement.replace(shift, shift === "start" ? "end" : "start") : placement;
      function applyMutations(data) {
        instance.state.currentPlacement = data.placement;
        if (instance.props.flip && !instance.props.flipOnUpdate) {
          if (data.flipped) {
            instance.popperInstance.options.placement = data.placement;
          }
          setFlipModifierEnabled(instance.popperInstance.modifiers, false);
        }
        if (instance.props.escapeWithReference) {
          setEscapeWithReference(instance.popperInstance.modifiers, true);
        }
        tooltip.setAttribute("data-placement", instance.state.currentPlacement);
        if (data.attributes["x-out-of-boundaries"] !== false) {
          tooltip.setAttribute("data-out-of-boundaries", "");
        } else {
          tooltip.removeAttribute("data-out-of-boundaries");
        } // Apply the `distance` prop

        var basePlacement = getBasePlacement(instance.state.currentPlacement);
        var tooltipStyles = tooltip.style;
        tooltipStyles.top = "0";
        tooltipStyles.left = "0";
        tooltipStyles[getIsVerticalPlacement() ? "top" : "left"] = (getIsOppositePlacement() ? 1 : -1) * instance.props.distance + "px";
        var padding = preventOverflowModifier && preventOverflowModifier.padding !== undefined ? preventOverflowModifier.padding : PREVENT_OVERFLOW_PADDING;
        var isPaddingNumber = typeof padding === "number";
        var computedPadding = _extends$1({
          top: isPaddingNumber ? padding : padding.top,
          bottom: isPaddingNumber ? padding : padding.bottom,
          left: isPaddingNumber ? padding : padding.left,
          right: isPaddingNumber ? padding : padding.right
        }, !isPaddingNumber && padding);
        computedPadding[basePlacement] = isPaddingNumber ? padding + instance.props.distance : (padding[basePlacement] || 0) + instance.props.distance;
        instance.popperInstance.modifiers.filter(function (m) {
          return m.name === "preventOverflow";
        })[0].padding = computedPadding;
      }
      var config = _extends$1({
        eventsEnabled: false,
        placement: normalizedPlacement
      }, popperOptions, {
        modifiers: _extends$1({}, popperOptions ? popperOptions.modifiers : {}, {
          preventOverflow: _extends$1({
            boundariesElement: instance.props.boundary,
            padding: PREVENT_OVERFLOW_PADDING
          }, preventOverflowModifier),
          arrow: _extends$1({
            element: arrow,
            enabled: !!arrow
          }, getModifier(popperOptions, "arrow")),
          flip: _extends$1({
            enabled: instance.props.flip,
            // The tooltip is offset by 10px from the popper in CSS,
            // we need to account for its distance
            padding: instance.props.distance + PREVENT_OVERFLOW_PADDING,
            behavior: instance.props.flipBehavior
          }, getModifier(popperOptions, "flip")),
          offset: _extends$1({
            offset: instance.props.offset
          }, getModifier(popperOptions, "offset"))
        }),
        onCreate: function onCreate(data) {
          applyMutations(data);
          preserveInvocation(popperOptions && popperOptions.onCreate, config.onCreate, [data]);
          runMountCallback();
        },
        onUpdate: function onUpdate(data) {
          applyMutations(data);
          preserveInvocation(popperOptions && popperOptions.onUpdate, config.onUpdate, [data]);
          runMountCallback();
        }
      });
      instance.popperInstance = new Popper(reference, popper, config);
    }
    function runMountCallback() {
      if (!hasMountCallbackRun && currentMountCallback) {
        hasMountCallbackRun = true;
        reflow(popper);
        currentMountCallback();
      }
    }
    function mount() {
      // The mounting callback (`currentMountCallback`) is only run due to a
      // popperInstance update/create
      hasMountCallbackRun = false;
      var appendTo = instance.props.appendTo;
      var parentNode = appendTo === "parent" ? reference.parentNode : invokeWithArgsOrReturn(appendTo, [reference]); // The popper element needs to exist on the DOM before its position can be
      // updated as Popper.js needs to read its dimensions

      if (!parentNode.contains(popper)) {
        parentNode.appendChild(popper);
      }
      if (instance.popperInstance) {
        setFlipModifierEnabled(instance.popperInstance.modifiers, instance.props.flip);
        instance.popperInstance.enableEventListeners(); // Mounting callback invoked in `onUpdate`

        instance.popperInstance.scheduleUpdate();
      } else {
        // Mounting callback invoked in `onCreate`
        createPopperInstance();
        instance.popperInstance.enableEventListeners();
      }
    }
    function scheduleShow(event) {
      instance.clearDelayTimeouts();
      instance.state.isScheduledToShow = true;
      if (!instance.popperInstance) {
        createPopperInstance();
      }
      if (event) {
        instance.props.onTrigger(instance, event);
      }
      if (instance.props.wait) {
        return instance.props.wait(instance, event);
      }
      addDocumentMouseDownListener();
      var delay = getValue(instance.props.delay, 0, defaultProps.delay);
      if (delay) {
        showTimeout = setTimeout(function () {
          instance.show();
        }, delay);
      } else {
        instance.show();
      }
    }
    function scheduleHide(event) {
      instance.clearDelayTimeouts();
      instance.props.onUntrigger(instance, event);
      if (!instance.state.isVisible) {
        removeDocumentMouseDownListener();
        return;
      }
      instance.state.isScheduledToShow = false;
      var delay = getValue(instance.props.delay, 1, defaultProps.delay);
      if (delay) {
        hideTimeout = setTimeout(function () {
          if (instance.state.isVisible) {
            instance.hide();
          }
        }, delay);
      } else {
        // Fixes a `transitionend` problem when it fires 1 frame too
        // late sometimes, we don't want hide() to be called.
        scheduleHideAnimationFrame = requestAnimationFrame(function () {
          instance.hide();
        });
      }
    }
    /* ======================= 🔑 Public methods 🔑 ======================= */

    function enable() {
      instance.state.isEnabled = true;
    }
    function disable() {
      instance.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
      if (instance.state.isDestroyed) {
        return;
      }
      removeTriggersFromEventListenersTarget();
      var prevProps = instance.props;
      var nextProps = evaluateProps(reference, _extends$1({}, instance.props, partialProps, {
        ignoreAttributes: true
      }));
      nextProps.ignoreAttributes = hasOwnProperty(partialProps, "ignoreAttributes") ? partialProps.ignoreAttributes || false : prevProps.ignoreAttributes;
      instance.props = nextProps;
      addTriggersToEventListenersTarget();
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
      updatePopperElement(popper, prevProps, nextProps, instance.state.isVisible);
      instance.popperChildren = getChildren(popper);
      if (instance.popperInstance) {
        if (POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
          return hasOwnProperty(partialProps, prop) && partialProps[prop] !== prevProps[prop];
        })) {
          instance.popperInstance.destroy();
          createPopperInstance();
          if (instance.state.isVisible) {
            instance.popperInstance.enableEventListeners();
          }
        } else {
          instance.popperInstance.update();
        }
      }
    }
    function setContent(content) {
      instance.setProps({
        content: content
      });
    }
    function show(duration, shouldPreventPopperTransition) {
      if (duration === void 0) {
        duration = getValue(instance.props.duration, 0, defaultProps.duration[1]);
      }
      if (shouldPreventPopperTransition === void 0) {
        shouldPreventPopperTransition = true;
      }
      var isAlreadyVisible = instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
      if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
        return;
      } // Normalize `disabled` behavior across browsers.
      // Firefox allows events on disabled elements, but Chrome doesn't.
      // Using a wrapper element (i.e. <span>) is recommended.

      if (getEventListenersTarget().hasAttribute("disabled")) {
        return;
      }
      if (instance.props.onShow(instance) === false) {
        return;
      }
      addDocumentMouseDownListener();
      popper.style.visibility = "visible";
      instance.state.isVisible = true; // Prevent a transition of the popper from its previous position and of the
      // elements at a different placement.

      var transitionableElements = getTransitionableElements();
      setTransitionDuration(shouldPreventPopperTransition ? transitionableElements.concat(popper) : transitionableElements, 0);
      currentMountCallback = function currentMountCallback() {
        if (!instance.state.isVisible) {
          return;
        } // Double update will apply correct mutations

        instance.popperInstance.update();
        instance.props.onMount(instance);
        instance.state.isMounted = true; // The content should fade in after the backdrop has mostly filled the
        // tooltip element. `clip-path` is the other alternative but is not well-
        // supported and is buggy on some devices.

        content.style.transitionDelay = instance.popperChildren.backdrop ? Math.round(duration / 12) + "ms" : "";
        if (instance.props.sticky) {
          makeSticky();
        }
        setTransitionDuration([popper], instance.props.updateDuration);
        setTransitionDuration(transitionableElements, duration);
        setVisibilityState(transitionableElements, "visible");
        onTransitionedIn(duration, function () {
          if (instance.props.aria) {
            getEventListenersTarget().setAttribute("aria-" + instance.props.aria, tooltip.id);
          }
          instance.props.onShown(instance);
          instance.state.isShown = true;
        });
      };
      mount();
    }
    function hide(duration) {
      if (duration === void 0) {
        duration = getValue(instance.props.duration, 1, defaultProps.duration[1]);
      }
      var isAlreadyHidden = !instance.state.isVisible && !isBeingDestroyed;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled && !isBeingDestroyed;
      if (isAlreadyHidden || isDestroyed || isDisabled) {
        return;
      }
      if (instance.props.onHide(instance) === false && !isBeingDestroyed) {
        return;
      }
      removeDocumentMouseDownListener();
      popper.style.visibility = "hidden";
      instance.state.isVisible = false;
      instance.state.isShown = false;
      var transitionableElements = getTransitionableElements();
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, "hidden");
      onTransitionedOut(duration, function () {
        if (instance.props.aria) {
          getEventListenersTarget().removeAttribute("aria-" + instance.props.aria);
        }
        instance.popperInstance.disableEventListeners();
        instance.popperInstance.options.placement = normalizedPlacement;
        popper.parentNode.removeChild(popper);
        instance.props.onHidden(instance);
        instance.state.isMounted = false;
      });
    }
    function destroy() {
      if (instance.state.isDestroyed) {
        return;
      }
      isBeingDestroyed = true;
      instance.hide(0);
      removeTriggersFromEventListenersTarget();
      delete reference._tippy;
      if (instance.popperInstance) {
        instance.popperInstance.destroy();
      }
      isBeingDestroyed = false;
      instance.state.isDestroyed = true;
    }
  }

  /**
   * Exported module
   */
  function tippy(targets, optionalProps) {
    bindGlobalEventListeners();
    var props = _extends$1({}, defaultProps, optionalProps);
    var elements = getArrayOfElements(targets);
    var instances = elements.reduce(function (acc, reference) {
      var instance = reference && createTippy(reference, props);
      if (instance) {
        acc.push(instance);
      }
      return acc;
    }, []);
    return isRealElement(targets) ? instances[0] : instances;
  }
  tippy.version = version;
  tippy.defaultProps = defaultProps;
  tippy.currentInput = currentInput;
  /**
   * Mutates the defaultProps object by setting the props specified
   */

  tippy.setDefaultProps = function (partialProps) {
    Object.keys(partialProps).forEach(function (key) {
      // @ts-ignore
      defaultProps[key] = partialProps[key];
    });
  };
  /**
   * Hides all visible poppers on the document
   */

  tippy.hideAll = function (_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;
    arrayFrom(document.querySelectorAll(POPPER_SELECTOR)).forEach(function (popper) {
      var instance = popper._tippy;
      if (instance) {
        var isExcluded = false;
        if (excludedReferenceOrInstance) {
          isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : popper === excludedReferenceOrInstance.popper;
        }
        if (!isExcluded) {
          instance.hide(duration);
        }
      }
    });
  };
  /**
   * Auto-init tooltips for elements with a `data-tippy="..."` attribute
   */

  function autoInit() {
    arrayFrom(document.querySelectorAll("[data-tippy]")).forEach(function (el) {
      var content = el.getAttribute("data-tippy");
      if (content) {
        tippy(el, {
          content: content
        });
      }
    });
  }
  if (isBrowser) {
    setTimeout(autoInit);
  }

  /**!
   * tippy.js v5.0.0-alpha.2
   * (c) 2017-2019 atomiks
   * MIT License
   */

  var css = ".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100% - 8px);transition-timing-function:cubic-bezier(.165,.84,.44,1)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;line-height:1.4;background-color:#333;overflow:hidden;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top] .tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-8px}.tippy-tooltip[data-placement^=bottom] .tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-8px}.tippy-tooltip[data-placement^=left] .tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-8px}.tippy-tooltip[data-placement^=right] .tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-8px}.tippy-tooltip[data-arrow]{overflow:visible}.tippy-tooltip[data-animatefill]{background-color:transparent!important}.tippy-tooltip[data-interactive]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow{border-color:transparent;border-style:solid;position:absolute}.tippy-arrow[data-state=hidden]{opacity:0}.tippy-content{padding:.3125rem .5625rem}";

  /**
   * Injects a string of CSS styles to a style node in <head>
   */

  function injectCSS(css) {
    if (isBrowser) {
      var style = document.createElement("style");
      style.textContent = css;
      style.setAttribute("data-tippy-stylesheet", "");
      var head = document.head;
      var firstStyleOrLinkTag = head.querySelector("style,link");
      if (firstStyleOrLinkTag) {
        head.insertBefore(style, firstStyleOrLinkTag);
      } else {
        head.appendChild(style);
      }
    }
  }
  injectCSS(css);
  var missingTippy = "Using the attachment feature of Shepherd requires the Tippy.js library";
  var addShepherdClass = _createClassModifier("shepherd");
  var addHasTitleClass = _createClassModifier("shepherd-has-title");
  var centeredStylePopperModifier = {
    computeStyle: {
      enabled: true,
      fn: function fn(data) {
        data.styles = _extends({}, data.styles, {
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        });
        return data;
      }
    },
    addShepherdClass: addShepherdClass
  }; // Used to compose settings for tippyOptions.popperOptions (https://atomiks.github.io/tippyjs/#popper-options-option)

  var defaultPopperOptions = {
    positionFixed: true,
    modifiers: {
      addShepherdClass: addShepherdClass
    }
  };
  /**
   * TODO rewrite the way items are being added to use more performant documentFragment code
   * @param html
   * @return {HTMLElement} The element created from the passed HTML string
   */

  function createFromHTML(html) {
    var el = document.createElement("div");
    el.innerHTML = html;
    return el.children[0];
  }
  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing.
   * @param {Function} func The function to invoke
   * @param {Number} wait The time to wait in ms
   * @param {Boolean} immediate If true, the function will be invoked immediately
   * @return {Function}
   */

  function debounce$2(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }
  /**
   * Creates a slice of `arr` with n elements dropped from the beginning.
   * @param {Array} arr
   * @param {Number} n
   * @return {*}
   */

  function drop(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (Array.isArray(arr)) {
      return arr.slice(n);
    }
    return [];
  }
  /**
   * Determines options for the tooltip and initializes
   * `this.tooltip` as a Tippy.js instance.
   */

  function setupTooltip() {
    if (isUndefined(tippy)) {
      throw new Error(missingTippy);
    }
    if (this.tooltip) {
      this.tooltip.destroy();
    }
    var attachToOpts = this.parseAttachTo();
    this.tooltip = _makeTippyInstance.call(this, attachToOpts);
    this.target = attachToOpts.element || document.body;
    this.el.classList.add("shepherd-element");
  }
  /**
   * Checks if options.attachTo.element is a string, and if so, tries to find the element
   * @returns {({} & {element, on}) | ({})}
   * `element` is a qualified HTML Element
   * `on` is a string position value
   */

  function parseAttachTo() {
    var options = this.options.attachTo || {};
    var returnOpts = _extends({}, options);
    if (isString(options.element)) {
      // Can't override the element in user opts reference because we can't
      // guarantee that the element will exist in the future.
      try {
        returnOpts.element = document.querySelector(options.element);
      } catch (e) {
        // TODO
      }
      if (!returnOpts.element) {
        console.error("The element for this Shepherd step was not found ".concat(options.element));
      }
    }
    return returnOpts;
  }
  /**
   * Create a popper modifier for adding the passed className to the popper
   * @param {string} className The class to add to the popper
   * @return {{fn(*): *, enabled: boolean}|*}
   * @private
   */

  function _createClassModifier(className) {
    return {
      enabled: true,
      fn: function fn(data) {
        data.instance.popper.classList.add(className);
        return data;
      }
    };
  }
  /**
   * Generates a `Tippy` instance from a set of base `attachTo` options
   *
   * @return {tippy} The final tippy instance
   * @private
   */

  function _makeTippyInstance(attachToOptions) {
    if (!attachToOptions.element) {
      return _makeCenteredTippy.call(this);
    }
    var tippyOptions = _makeAttachedTippyOptions.call(this, attachToOptions);
    return tippy(attachToOptions.element, tippyOptions);
  }
  /**
   * Generates the hash of options that will be passed to `Tippy` instances
   * target an element in the DOM.
   *
   * @param {Object} attachToOptions The local `attachTo` options
   * @return {Object} The final tippy options  object
   * @private
   */

  function _makeAttachedTippyOptions(attachToOptions) {
    var resultingTippyOptions = {
      content: this.el,
      flipOnUpdate: true,
      placement: attachToOptions.on || "right"
    };
    _extends(resultingTippyOptions, this.options.tippyOptions);
    if (this.options.title) {
      _extends(defaultPopperOptions.modifiers, {
        addHasTitleClass: addHasTitleClass
      });
    }
    if (this.options.tippyOptions && this.options.tippyOptions.popperOptions) {
      _extends(defaultPopperOptions, this.options.tippyOptions.popperOptions);
    }
    resultingTippyOptions.popperOptions = defaultPopperOptions;
    return resultingTippyOptions;
  }
  /**
   * Generates a `Tippy` instance for a tooltip that doesn't have a
   * target element in the DOM -- and thus is positioned in the center
   * of the view
   *
   * @return {tippy} The final tippy instance
   * @private
   */

  function _makeCenteredTippy() {
    var tippyOptions = _objectSpread2({
      content: this.el,
      placement: "top"
    }, this.options.tippyOptions);
    tippyOptions.arrow = false;
    tippyOptions.popperOptions = tippyOptions.popperOptions || {};
    if (this.options.title) {
      _extends(defaultPopperOptions.modifiers, {
        addHasTitleClass: addHasTitleClass
      });
    }
    var finalPopperOptions = _extends({}, defaultPopperOptions, tippyOptions.popperOptions, {
      modifiers: _extends(centeredStylePopperModifier, tippyOptions.popperOptions.modifiers)
    });
    tippyOptions.popperOptions = finalPopperOptions;
    return tippy(document.body, tippyOptions);
  }
  var Evented = /*#__PURE__*/
  function () {
    function Evented() {
      _classCallCheck$1(this, Evented);
    }
    _createClass$1(Evented, [{
      key: "on",
      value: function on(event, handler, ctx) {
        var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
        if (isUndefined(this.bindings)) {
          this.bindings = {};
        }
        if (isUndefined(this.bindings[event])) {
          this.bindings[event] = [];
        }
        this.bindings[event].push({
          handler: handler,
          ctx: ctx,
          once: once
        });
      }
    }, {
      key: "once",
      value: function once(event, handler, ctx) {
        this.on(event, handler, ctx, true);
      }
    }, {
      key: "off",
      value: function off(event, handler) {
        var _this = this;
        if (isUndefined(this.bindings) || isUndefined(this.bindings[event])) {
          return false;
        }
        if (isUndefined(handler)) {
          delete this.bindings[event];
        } else {
          this.bindings[event].forEach(function (binding, index) {
            if (binding.handler === handler) {
              _this.bindings[event].splice(index, 1);
            }
          });
        }
      }
    }, {
      key: "trigger",
      value: function trigger(event) {
        var _this2 = this;
        if (!isUndefined(this.bindings) && this.bindings[event]) {
          var args = drop(Array.prototype.slice.call(arguments));
          this.bindings[event].forEach(function (binding, index) {
            var ctx = binding.ctx,
              handler = binding.handler,
              once = binding.once;
            var context = ctx || _this2;
            handler.apply(context, args);
            if (once) {
              _this2.bindings[event].splice(index, 1);
            }
          });
        }
      }
    }]);
    return Evented;
  }();

  /**
   * Sets up the handler to determine if we should advance the tour
   * @param selector
   * @return {Function}
   * @private
   */

  function _setupAdvanceOnHandler(selector) {
    var _this = this;
    return function (event) {
      if (_this.isOpen()) {
        var targetIsEl = _this.el && event.target === _this.el;
        var targetIsSelector = !isUndefined(selector) && event.target.matches(selector);
        if (targetIsSelector || targetIsEl) {
          _this.tour.next();
        }
      }
    };
  }
  /**
   * Bind the event handler for advanceOn
   */

  function bindAdvance() {
    // An empty selector matches the step element
    var _ref = this.options.advanceOn || {},
      event = _ref.event,
      selector = _ref.selector;
    if (event) {
      var handler = _setupAdvanceOnHandler.call(this, selector); // TODO: this should also bind/unbind on show/hide

      var el;
      try {
        el = document.querySelector(selector);
      } catch (e) {
        // TODO
      }
      if (!isUndefined(selector) && !el) {
        return console.error("No element was found for the selector supplied to advanceOn: ".concat(selector));
      } else if (el) {
        el.addEventListener(event, handler);
        this.on("destroy", function () {
          return el.removeEventListener(event, handler);
        });
      } else {
        document.body.addEventListener(event, handler, true);
        this.on("destroy", function () {
          return document.body.removeEventListener(event, handler, true);
        });
      }
    } else {
      return console.error("advanceOn was defined, but no event name was passed.");
    }
  }
  /**
   * Bind events to the buttons for next, back, etc
   * @param {Object} cfg An object containing the config options for the button
   * @param {HTMLElement} el The element for the button
   */

  function bindButtonEvents(cfg, el) {
    var _this2 = this;
    cfg.events = cfg.events || {};
    if (!isUndefined(cfg.action)) {
      // Including both a click event and an action is not supported
      cfg.events.click = cfg.action;
    }
    if (cfg.events) {
      Object.entries(cfg.events).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          event = _ref3[0],
          handler = _ref3[1];
        if (isString(handler)) {
          var page = handler;
          handler = function handler() {
            return _this2.tour.show(page);
          };
        }
        el.dataset.buttonEvent = true;
        el.addEventListener(event, handler); // Cleanup event listeners on destroy

        _this2.on("destroy", function () {
          el.removeAttribute("data-button-event");
          el.removeEventListener(event, handler);
        });
      });
    }
  }
  /**
   * Add a click listener to the cancel link that cancels the tour
   * @param {HTMLElement} link The cancel link element
   */

  function bindCancelLink(link) {
    var _this3 = this;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      _this3.cancel();
    });
  }
  /**
   * Take an array of strings and look up methods by name, then bind them to `this`
   * @param {String[]} methods The names of methods to bind
   */

  function bindMethods(methods) {
    var _this4 = this;
    methods.map(function (method) {
      _this4[method] = _this4[method].bind(_this4);
    });
  }
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }
  var smoothscroll = createCommonjsModule(function (module, exports) {
    /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
    (function () {
      // polyfill
      function polyfill() {
        // aliases
        var w = window;
        var d = document;

        // return if scroll behavior is supported and polyfill is not forced
        if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
          return;
        }

        // globals
        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;

        // object gathering original scroll methods
        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element.prototype.scroll || scrollElement,
          scrollIntoView: Element.prototype.scrollIntoView
        };

        // define timing method
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

        /**
         * indicates if a the current browser is made by Microsoft
         * @method isMicrosoftBrowser
         * @param {String} userAgent
         * @returns {Boolean}
         */
        function isMicrosoftBrowser(userAgent) {
          var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
          return new RegExp(userAgentPatterns.join("|")).test(userAgent);
        }

        /*
         * IE has rounding bug rounding down clientHeight and clientWidth and
         * rounding up scrollHeight and scrollWidth causing false positives
         * on hasScrollableSpace
         */
        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

        /**
         * changes scroll position inside an element
         * @method scrollElement
         * @param {Number} x
         * @param {Number} y
         * @returns {undefined}
         */
        function scrollElement(x, y) {
          this.scrollLeft = x;
          this.scrollTop = y;
        }

        /**
         * returns result of applying ease math function to a number
         * @method ease
         * @param {Number} k
         * @returns {Number}
         */
        function ease(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }

        /**
         * indicates if a smooth behavior should be applied
         * @method shouldBailOut
         * @param {Number|Object} firstArg
         * @returns {Boolean}
         */
        function shouldBailOut(firstArg) {
          if (firstArg === null || _typeof(firstArg) !== "object" || firstArg.behavior === undefined || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
            // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
          }
          if (_typeof(firstArg) === "object" && firstArg.behavior === "smooth") {
            // first argument is an object and behavior is smooth
            return false;
          }

          // throw error when behavior is not supported
          throw new TypeError("behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior.");
        }

        /**
         * indicates if an element has scrollable space in the provided axis
         * @method hasScrollableSpace
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */
        function hasScrollableSpace(el, axis) {
          if (axis === "Y") {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
          }
          if (axis === "X") {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
          }
        }

        /**
         * indicates if an element has a scrollable overflow property in the axis
         * @method canOverflow
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */
        function canOverflow(el, axis) {
          var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
          return overflowValue === "auto" || overflowValue === "scroll";
        }

        /**
         * indicates if an element can be scrolled in either axis
         * @method isScrollable
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */
        function isScrollable(el) {
          var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
          var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
          return isScrollableY || isScrollableX;
        }

        /**
         * finds scrollable parent of an element
         * @method findScrollableParent
         * @param {Node} el
         * @returns {Node} el
         */
        function findScrollableParent(el) {
          while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
          }
          return el;
        }

        /**
         * self invoked function that, given a context, steps through scrolling
         * @method step
         * @param {Object} context
         * @returns {undefined}
         */
        function step(context) {
          var time = now();
          var value;
          var currentX;
          var currentY;
          var elapsed = (time - context.startTime) / SCROLL_TIME;

          // avoid elapsed times higher than one
          elapsed = elapsed > 1 ? 1 : elapsed;

          // apply easing to elapsed time
          value = ease(elapsed);
          currentX = context.startX + (context.x - context.startX) * value;
          currentY = context.startY + (context.y - context.startY) * value;
          context.method.call(context.scrollable, currentX, currentY);

          // scroll more if we have not reached our destination
          if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
          }
        }

        /**
         * scrolls window or element with a smooth behavior
         * @method smoothScroll
         * @param {Object|Node} el
         * @param {Number} x
         * @param {Number} y
         * @returns {undefined}
         */
        function smoothScroll(el, x, y) {
          var scrollable;
          var startX;
          var startY;
          var method;
          var startTime = now();

          // define scroll context
          if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
          } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
          }

          // scroll looping over a frame
          step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y
          });
        }

        // ORIGINAL METHODS OVERRIDES
        // w.scroll and w.scrollTo
        w.scroll = w.scrollTo = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          }

          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== "object" ? arguments[0] : w.scrollX || w.pageXOffset,
            // use top prop, second argument if present or fallback to scrollY
            arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
            return;
          }

          // LET THE SMOOTHNESS BEGIN!
          smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
        };

        // w.scrollBy
        w.scrollBy = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          }

          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== "object" ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
            return;
          }

          // LET THE SMOOTHNESS BEGIN!
          smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        };

        // Element.prototype.scroll and Element.prototype.scrollTo
        Element.prototype.scroll = Element.prototype.scrollTo = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          }

          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            // if one number is passed, throw error to match Firefox implementation
            if (typeof arguments[0] === "number" && arguments[1] === undefined) {
              throw new SyntaxError("Value could not be converted");
            }
            original.elementScroll.call(this,
            // use left prop, first number argument or fallback to scrollLeft
            arguments[0].left !== undefined ? ~~arguments[0].left : _typeof(arguments[0]) !== "object" ? ~~arguments[0] : this.scrollLeft,
            // use top prop, second argument or fallback to scrollTop
            arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
            return;
          }
          var left = arguments[0].left;
          var top = arguments[0].top;

          // LET THE SMOOTHNESS BEGIN!
          smoothScroll.call(this, this, typeof left === "undefined" ? this.scrollLeft : ~~left, typeof top === "undefined" ? this.scrollTop : ~~top);
        };

        // Element.prototype.scrollBy
        Element.prototype.scrollBy = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          }

          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
            return;
          }
          this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          });
        };

        // Element.prototype.scrollIntoView
        Element.prototype.scrollIntoView = function () {
          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
            return;
          }

          // LET THE SMOOTHNESS BEGIN!
          var scrollableParent = findScrollableParent(this);
          var parentRects = scrollableParent.getBoundingClientRect();
          var clientRects = this.getBoundingClientRect();
          if (scrollableParent !== d.body) {
            // reveal element inside parent
            smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);

            // reveal parent in viewport unless is fixed
            if (w.getComputedStyle(scrollableParent).position !== "fixed") {
              w.scrollBy({
                left: parentRects.left,
                top: parentRects.top,
                behavior: "smooth"
              });
            }
          } else {
            // reveal element in viewport
            w.scrollBy({
              left: clientRects.left,
              top: clientRects.top,
              behavior: "smooth"
            });
          }
        };
      }
      {
        // commonjs
        module.exports = {
          polyfill: polyfill
        };
      }
    })();
  });
  var smoothscroll_1 = smoothscroll.polyfill;
  smoothscroll.polyfill();
  /**
   * Creates incremented ID for each newly created step
   *
   * @private
   * @return {Number} The unique id for the step
   */

  var uniqueId = function () {
    var id = 0;
    return function () {
      return ++id;
    };
  }();
  /**
   * A class representing steps to be added to a tour.
   * @extends {Evented}
   */

  var Step = /*#__PURE__*/
  function (_Evented) {
    _inherits$1(Step, _Evented);

    /**
     * Create a step
     * @param {Tour} tour The tour for the step
     * @param {Object} options The options for the step
     * @param {Object} options.attachTo What element the step should be attached to on the page.
     * It should be an object with the properties `element` and `on`, where `element` is an element selector string
     * or a DOM element and `on` is the optional direction to place the Tippy tooltip.
     *
     * ```js
     * const new Step(tour, {
     *   attachTo: { element: '.some .selector-path', on: 'left' },
     *   ...moreOptions
     * })'
     * ```
     *
     * If you don’t specify an attachTo the element will appear in the middle of the screen.
     * If you omit the `on` portion of `attachTo`, the element will still be highlighted, but the tooltip will appear
     * in the middle of the screen, without an arrow pointing to the target.
     * @param {HTMLElement|string} options.attachTo.element
     * @param {string} options.attachTo.on
     * @param {Object} options.advanceOn An action on the page which should advance shepherd to the next step.
     * It should be an object with a string `selector` and an `event` name
     * ```js
     * const new Step(tour, {
     *   advanceOn: { selector: '.some .selector-path', event: 'click' },
     *   ...moreOptions
     * })'
     * ```
     * `event` doesn’t have to be an event inside the tour, it can be any event fired on any element on the page.
     * You can also always manually advance the Tour by calling `myTour.next()`.
     * @param {function} options.beforeShowPromise A function that returns a promise.
     * When the promise resolves, the rest of the `show` code for the step will execute.
     * @param {Object[]} options.buttons An array of buttons to add to the step. These will be rendered in a
     * footer below the main body text.
     * @param {function} options.buttons.button.action A function executed when the button is clicked on
     * @param {string} options.buttons.button.classes Extra classes to apply to the `<a>`
     * @param {Object} options.buttons.button.events A hash of events to bind onto the button, for example
     * `{'mouseover': function(){}}`. Adding a `click` event to events when you already have an `action` specified is not supported.
     * You can use events to skip steps or navigate to specific steps, with something like:
     * ```js
     * events: {
     *   click: function() {
     *     return Shepherd.activeTour.show('some_step_name');
     *   }
     * }
     * ```
     * @param {string} options.buttons.button.text The HTML text of the button
     * @param {string} options.classes A string of extra classes to add to the step's content element.
     * @param {string} options.highlightClass An extra class to apply to the `attachTo` element when it is
     * highlighted (that is, when its step is active). You can then target that selector in your CSS.
     * @param {Object} options.tippyOptions Extra [options to pass to tippy.js]{@link https://atomiks.github.io/tippyjs/#all-options}
     * @param {boolean|Object} options.scrollTo Should the element be scrolled to when this step is shown? If true, uses the default `scrollIntoView`,
     * if an object, passes that object as the params to `scrollIntoView` i.e. `{behavior: 'smooth', block: 'center'}`
     * @param {function} options.scrollToHandler A function that lets you override the default scrollTo behavior and
     * define a custom action to do the scrolling, and possibly other logic.
     * @param {boolean} options.showCancelLink Should a cancel “✕” be shown in the header of the step?
     * @param {function} options.showOn A function that, when it returns `true`, will show the step.
     * If it returns false, the step will be skipped.
     * @param {string} options.text The text in the body of the step. It can be one of four types:
     * ```
     * - HTML string
     * - Array of HTML strings
     * - `HTMLElement` object
     * - `Function` to be executed when the step is built. It must return one of the three options above.
     * ```
     * @param {string} options.title The step's title. It becomes an `h3` at the top of the step.
     * @param {Object} options.when You can define `show`, `hide`, etc events inside `when`. For example:
     * ```js
     * when: {
     *   show: function() {
     *     window.scrollTo(0, 0);
     *   }
     * }
     * ```
     * @param {Number} options.modalOverlayOpeningPadding An amount of padding to add around the modal overlay opening
     * @return {Step} The newly created Step instance
     */
    function Step(tour, options) {
      var _this;
      _classCallCheck$1(this, Step);
      _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Step).call(this, tour, options));
      _this.tour = tour;
      bindMethods.call(_assertThisInitialized$1(_this), ["_show", "cancel", "complete", "destroy", "hide", "isOpen", "scrollTo", "setupElements", "show"]);
      _this.setOptions(options);
      _this.bindAdvance = bindAdvance.bind(_assertThisInitialized$1(_this));
      _this.bindButtonEvents = bindButtonEvents.bind(_assertThisInitialized$1(_this));
      _this.bindCancelLink = bindCancelLink.bind(_assertThisInitialized$1(_this));
      _this.setupTooltip = setupTooltip.bind(_assertThisInitialized$1(_this));
      _this.parseAttachTo = parseAttachTo.bind(_assertThisInitialized$1(_this));
      return _possibleConstructorReturn$1(_this, _assertThisInitialized$1(_this));
    }
    /**
     * Adds buttons to the step as passed into options
     *
     * @private
     * @param {HTMLElement} content The element for the step, to append the footer with buttons to
     */

    _createClass$1(Step, [{
      key: "_addButtons",
      value: function _addButtons(content) {
        var _this2 = this;
        if (Array.isArray(this.options.buttons) && this.options.buttons.length) {
          var footer = document.createElement("footer");
          footer.classList.add("shepherd-footer");
          this.options.buttons.map(function (cfg) {
            var button = createFromHTML('<button class="shepherd-button '.concat(cfg.classes || "", '" tabindex="0">').concat(cfg.text, "</button>"));
            footer.appendChild(button);
            _this2.bindButtonEvents(cfg, button);
          });
          content.appendChild(footer);
        }
      }
      /**
       * Adds the "x" button to cancel the tour
       * @param {HTMLElement} element The step element
       * @param {HTMLElement} header The header element for the step
       * @private
       */
    }, {
      key: "_addCancelLink",
      value: function _addCancelLink(element, header) {
        if (this.options.showCancelLink) {
          var link = createFromHTML('<a href class="shepherd-cancel-link"></a>');
          header.appendChild(link);
          element.classList.add("shepherd-has-cancel-link");
          this.bindCancelLink(link);
        }
      }
      /**
       * Adds text passed in as options
       *
       * @private
       * @param {HTMLElement} content The content to append the text to
       * @param {string} descriptionId The id to set on the shepherd-text element
       * for the parent element to use for aria-describedby
       */
    }, {
      key: "_addContent",
      value: function _addContent(content, descriptionId) {
        var text = createFromHTML('<div class="shepherd-text"\n       id="'.concat(descriptionId, '"\n       ></div>'));
        var paragraphs = this.options.text;
        if (isFunction(paragraphs)) {
          paragraphs = paragraphs.call(this, text);
        }
        if (paragraphs instanceof HTMLElement) {
          text.appendChild(paragraphs);
        } else {
          if (isString(paragraphs)) {
            paragraphs = [paragraphs];
          }
          paragraphs.map(function (paragraph) {
            text.innerHTML += "<p>".concat(paragraph, "</p>");
          });
        }
        content.appendChild(text);
      }
      /**
       * Setup keydown events to allow closing the modal with ESC
       *
       * Borrowed from this great post! https://bitsofco.de/accessible-modal-dialog/
       *
       * @param {HTMLElement} element The element for the tooltip
       * @private
       */
    }, {
      key: "_addKeyDownHandler",
      value: function _addKeyDownHandler(element) {
        var _this3 = this;
        var KEY_TAB = 9;
        var KEY_ESC = 27;
        var LEFT_ARROW = 37;
        var RIGHT_ARROW = 39; // Get all elements that are focusable

        var focusableElements = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
        var _focusableElements = _slicedToArray(focusableElements, 1),
          firstFocusableElement = _focusableElements[0];
        var lastFocusableElement = focusableElements[focusableElements.length - 1];
        element.addEventListener("keydown", function (e) {
          switch (e.keyCode) {
            case KEY_TAB:
              if (focusableElements.length === 1) {
                e.preventDefault();
                break;
              } // Backward tab

              if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                  e.preventDefault();
                  lastFocusableElement.focus();
                }
              } else {
                if (document.activeElement === lastFocusableElement) {
                  e.preventDefault();
                  firstFocusableElement.focus();
                }
              }
              break;
            case KEY_ESC:
              _this3.cancel();
              break;
            case LEFT_ARROW:
              _this3.tour.back();
              break;
            case RIGHT_ARROW:
              _this3.tour.next();
              break;
          }
        });
      }
      /**
       * Creates Shepherd element for step based on options
       *
       * @private
       * @return {HTMLElement} The DOM element for the step tooltip
       */
    }, {
      key: "_createTooltipContent",
      value: function _createTooltipContent() {
        var content = document.createElement("div");
        var classes = this.options.classes || "";
        var descriptionId = "".concat(this.id, "-description");
        var labelId = "".concat(this.id, "-label");
        var element = createFromHTML('<div class="'.concat(classes, '"\n       data-shepherd-step-id="').concat(this.id, '"\n       role="dialog"\n       tabindex="0">'));
        var header = document.createElement("header");
        if (this.options.title) {
          var title = document.createElement("h3");
          title.classList.add("shepherd-title");
          title.innerHTML = "".concat(this.options.title);
          title.id = labelId;
          element.setAttribute("aria-labeledby", labelId);
          header.appendChild(title);
        }
        content.classList.add("shepherd-content");
        header.classList.add("shepherd-header");
        element.appendChild(content);
        content.appendChild(header);
        if (!isUndefined(this.options.text)) {
          this._addContent(content, descriptionId);
          element.setAttribute("aria-describedby", descriptionId);
        }
        this._addButtons(content);
        this._addCancelLink(element, header);
        return element;
      }
      /**
       * Returns the tour for the step
       * @return {Tour} The tour instance
       */
    }, {
      key: "getTour",
      value: function getTour() {
        return this.tour;
      }
      /**
       * Cancel the tour
       * Triggers the `cancel` event
       */
    }, {
      key: "cancel",
      value: function cancel() {
        this.tour.cancel();
        this.trigger("cancel");
      }
      /**
       * Complete the tour
       * Triggers the `complete` event
       */
    }, {
      key: "complete",
      value: function complete() {
        this.tour.complete();
        this.trigger("complete");
      }
      /**
       * Remove the step, delete the step's element, and destroy the tippy instance for the step
       * Triggers `destroy` event
       */
    }, {
      key: "destroy",
      value: function destroy() {
        try {
          if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
          }
          if (isElement(this.el) && this.el.parentNode) {
            this.el.parentNode.removeChild(this.el);
            this.el = null;
          }
          if (this.target) {
            this._updateStepTargetOnHide();
          }
          this.trigger("destroy");
        } catch (e) {}
      }
      /**
       * Hide the step and destroy the tippy instance
       */
    }, {
      key: "hide",
      value: function hide() {
        this.tour.modal.hide();
        this.trigger("before-hide");
        document.body.removeAttribute("data-shepherd-step");
        if (this.target) {
          this._updateStepTargetOnHide();
        }
        if (this.tooltip) {
          this.tooltip.hide();
        }
        this.trigger("hide");
      }
      /**
       * Check if the step is open and visible
       * @return {boolean} True if the step is open and visible
       */
    }, {
      key: "isOpen",
      value: function isOpen() {
        return Boolean(this.tooltip && this.tooltip.state && this.tooltip.state.isVisible);
      }
      /**
       * Create the element and set up the tippy instance
       */
    }, {
      key: "setupElements",
      value: function setupElements() {
        if (!isUndefined(this.el)) {
          this.destroy();
        }
        this.el = this._createTooltipContent();
        this._addKeyDownHandler(this.el);
        if (this.options.advanceOn) {
          this.bindAdvance();
        }
        this.setupTooltip();
      }
      /**
       * If a custom scrollToHandler is defined, call that, otherwise do the generic
       * scrollIntoView call.
       *
       * @param {boolean|Object} scrollToOptions If true, uses the default `scrollIntoView`,
       * if an object, passes that object as the params to `scrollIntoView` i.e. `{ behavior: 'smooth', block: 'center' }`
       */
    }, {
      key: "scrollTo",
      value: function scrollTo(scrollToOptions) {
        var _this$parseAttachTo = this.parseAttachTo(),
          element = _this$parseAttachTo.element;
        if (isFunction(this.options.scrollToHandler)) {
          this.options.scrollToHandler(element);
        } else if (isElement(element)) {
          element.scrollIntoView(scrollToOptions);
        }
      }
      /**
       * Sets the options for the step, maps `when` to events, sets up buttons
       * @param {Object} options The options for the step
       */
    }, {
      key: "setOptions",
      value: function setOptions() {
        var _this4 = this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.options = options;
        var when = this.options.when;
        this.destroy();
        this.id = this.options.id || "step-".concat(uniqueId());
        if (when) {
          Object.entries(when).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              event = _ref2[0],
              handler = _ref2[1];
            _this4.on(event, handler, _this4);
          });
        }
      }
      /**
       * Wraps `_show` and ensures `beforeShowPromise` resolves before calling show
       * @return {*|Promise}
       */
    }, {
      key: "show",
      value: function show() {
        var _this5 = this;
        if (isFunction(this.options.beforeShowPromise)) {
          var beforeShowPromise = this.options.beforeShowPromise();
          if (!isUndefined(beforeShowPromise)) {
            return beforeShowPromise.then(function () {
              return _this5._show();
            });
          }
        }
        this._show();
      }
      /**
       * Triggers `before-show`, generates the tooltip DOM content,
       * sets up a tippy instance for the tooltip, then triggers `show`.
       * @private
       */
    }, {
      key: "_show",
      value: function _show() {
        var _this6 = this;
        this.tour.beforeShowStep(this);
        this.trigger("before-show");
        if (!this.el) {
          this.setupElements();
        }
        this.target.classList.add("shepherd-enabled", "shepherd-target");
        document.body.setAttribute("data-shepherd-step", this.id);
        if (this.options.scrollTo) {
          setTimeout(function () {
            _this6.scrollTo(_this6.options.scrollTo);
          });
        }
        this.tooltip.show();
        this.trigger("show");
        this.el.focus();
      }
      /**
       * When a step is hidden, remove the highlightClass and 'shepherd-enabled'
       * and 'shepherd-target' classes
       * @private
       */
    }, {
      key: "_updateStepTargetOnHide",
      value: function _updateStepTargetOnHide() {
        if (this.options.highlightClass) {
          this.target.classList.remove(this.options.highlightClass);
        }
        this.target.classList.remove("shepherd-enabled", "shepherd-target");
      }
    }]);
    return Step;
  }(Evented);
  var svgNS = "http://www.w3.org/2000/svg";
  var elementIds = {
    modalOverlay: "shepherdModalOverlayContainer",
    modalOverlayMask: "shepherdModalMask",
    modalOverlayMaskRect: "shepherdModalMaskRect",
    modalOverlayMaskOpening: "shepherdModalMaskOpening"
  };
  var classNames = {
    isVisible: "shepherd-modal-is-visible",
    modalTarget: "shepherd-modal-target"
  };
  /**
   * <svg id="shepherdModalOverlayContainer" xmlns="http://www.w3.org/2000/svg">
   */

  function _createModalContainer() {
    var element = document.createElementNS(svgNS, "svg");
    element.setAttributeNS(null, "id", elementIds.modalOverlay);
    return element;
  }
  /**
   * <mask id="shepherdModalMask" x="0" y="0" width="100%" height="100%">
   */

  function _createMaskContainer() {
    var element = document.createElementNS(svgNS, "mask");
    _setAttributes(element, {
      height: "100%",
      id: elementIds.modalOverlayMask,
      width: "100%",
      x: "0",
      y: "0"
    });
    return element;
  }
  /**
   *  <rect id="modalOverlayMaskRect" x="0" y="0" width="100%" height="100%" fill="#FFFFFF"/>
   */

  function _createMaskRect() {
    var element = document.createElementNS(svgNS, "rect");
    _setAttributes(element, {
      fill: "#FFFFFF",
      height: "100%",
      id: elementIds.modalOverlayMaskRect,
      width: "100%",
      x: "0",
      y: "0"
    });
    return element;
  }
  /**
   * <rect id="shepherdModalMaskOpening" fill="#000000"/>
   */

  function _createMaskOpening() {
    var element = document.createElementNS(svgNS, "rect");
    _setAttributes(element, {
      fill: "#000000",
      id: elementIds.modalOverlayMaskOpening
    });
    return element;
  }
  /**
   * <rect x="0" y="0" width="100%" height="100%" mask="url(#shepherdModalMask)"/>
   */

  function _createMaskConsumer() {
    var element = document.createElementNS(svgNS, "rect");
    _setAttributes(element, {
      height: "100%",
      width: "100%",
      x: "0",
      y: "0"
    });
    element.setAttribute("mask", "url(#".concat(elementIds.modalOverlayMask, ")"));
    return element;
  }
  /**
     * Generates an SVG with the following structure:
     * ```html
     *  <svg id="shepherdModalOverlayContainer" xmlns="http://www.w3.org/2000/svg">
     <defs>
     <mask id="shepherdModalMask" x="0" y="0" width="100%" height="100%" >
     <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF"/>
     <!-- This element will "punch a hole" through the mask by preventing it from rendering within the perimeter -->
     <rect id="shepherdModalMaskOpening"/>
     </mask>
     </defs>
     <rect x="0" y="0" width="100%" height="100%" mask="url(#shepherdModalMask)"/>
     </svg>
     * ```
     */

  function createModalOverlay() {
    var containerElement = _createModalContainer();
    var defsElement = document.createElementNS(svgNS, "defs");
    var maskContainer = _createMaskContainer();
    var maskRect = _createMaskRect();
    var maskOpening = _createMaskOpening();
    var maskConsumer = _createMaskConsumer();
    maskContainer.appendChild(maskRect);
    maskContainer.appendChild(maskOpening);
    defsElement.appendChild(maskContainer);
    containerElement.appendChild(defsElement);
    containerElement.appendChild(maskConsumer);
    return containerElement;
  }
  /**
   * Uses the bounds of the element we want the opening overtop of to set the dimensions of the opening and position it
   * @param {HTMLElement} targetElement The element the opening will expose
   * @param {SVGElement} openingElement The svg mask for the opening
   * @param {Number} modalOverlayOpeningPadding An amount of padding to add around the modal overlay opening
   */

  function positionModalOpening(targetElement, openingElement) {
    var modalOverlayOpeningPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (targetElement.getBoundingClientRect && openingElement instanceof SVGElement) {
      var _targetElement$getBou = targetElement.getBoundingClientRect(),
        x = _targetElement$getBou.x,
        y = _targetElement$getBou.y,
        width = _targetElement$getBou.width,
        height = _targetElement$getBou.height,
        left = _targetElement$getBou.left,
        top = _targetElement$getBou.top; // getBoundingClientRect is not consistent. Some browsers use x and y, while others use left and top

      _setAttributes(openingElement, {
        x: (x || left) - modalOverlayOpeningPadding,
        y: (y || top) - modalOverlayOpeningPadding,
        width: width + modalOverlayOpeningPadding * 2,
        height: height + modalOverlayOpeningPadding * 2
      });
    }
  }
  function closeModalOpening(openingElement) {
    if (openingElement && openingElement instanceof SVGElement) {
      _setAttributes(openingElement, {
        height: "0",
        x: "0",
        y: "0",
        width: "0"
      });
    }
  }
  function getModalMaskOpening(modalElement) {
    return modalElement.querySelector("#".concat(elementIds.modalOverlayMaskOpening));
  }
  function preventModalBodyTouch(event) {
    event.preventDefault();
  }
  function preventModalOverlayTouch(event) {
    event.stopPropagation();
  }
  /**
   * Remove any leftover modal target classes and add the modal target class to the currentElement
   * @param {HTMLElement} currentElement The element for the current step
   */

  function toggleShepherdModalClass(currentElement) {
    var shepherdModal = document.querySelector("".concat(classNames.modalTarget));
    if (shepherdModal) {
      shepherdModal.classList.remove(classNames.modalTarget);
    }
    currentElement.classList.add(classNames.modalTarget);
  }
  /**
   * Set multiple attributes on an element, via a hash
   * @param {HTMLElement|SVGElement} el The element to set the attributes on
   * @param {Object} attrs A hash of key value pairs for attributes to set
   * @private
   */

  function _setAttributes(el, attrs) {
    Object.keys(attrs).forEach(function (key) {
      el.setAttribute(key, attrs[key]);
    });
  }

  /**
   * Get the element from an option object
   *
   * @method getElementFromObject
   * @param Object attachTo
   * @returns {Element}
   * @private
   */

  function getElementFromObject(attachTo) {
    var op = attachTo.element;
    if (op instanceof HTMLElement) {
      return op;
    }
    if (op instanceof SVGElement) {
      return op;
    }
    try {
      return document.querySelector(op);
    } catch (e) {}
    return null;
  }
  /**
   * Return the element for a step
   *
   * @method getElementForStep
   * @param step step the step to get an element for
   * @returns {Element} the element for this step
   * @private
   */

  function getElementForStep(step) {
    var attachTo = step.options.attachTo;
    if (!attachTo) {
      return null;
    }
    var type = _typeof$1(attachTo);
    var element;
    if (type === "string") {
      element = getElementFromString(attachTo);
    } else if (type === "object") {
      element = getElementFromObject(attachTo);
    } else {
      /* istanbul ignore next: cannot test undefined attachTo, but it does work! */
      element = null;
    }
    return element;
  }
  /**
   * Get the element from an option string
   *
   * @method getElementFromString
   * @param element the string in the step configuration
   * @returns {Element} the element from the string
   * @private
   */

  function getElementFromString(element) {
    var _element$split = element.split(" "),
      _element$split2 = _slicedToArray(_element$split, 1),
      selector = _element$split2[0];
    return document.querySelector(selector);
  }
  function addStepEventListeners() {
    if (typeof this._onScreenChange === "function") {
      window.removeEventListener("resize", this._onScreenChange, false);
      window.removeEventListener("scroll", this._onScreenChange, true);
    }
    window.addEventListener("resize", this._onScreenChange, false);
    window.addEventListener("scroll", this._onScreenChange, true);
    var overlay = document.querySelector("#".concat(elementIds.modalOverlay)); // Prevents window from moving on touch.

    window.addEventListener("touchmove", preventModalBodyTouch, {
      passive: false
    }); // Allows content to move on touch.

    if (overlay) {
      overlay.addEventListener("touchmove", preventModalOverlayTouch, false);
    }
  }
  var Modal = /*#__PURE__*/
  function () {
    function Modal(options) {
      _classCallCheck$1(this, Modal);
      this.createModalOverlay();
      this.options = options;
      return this;
    }
    /**
     * Removes svg mask from modal overlay and removes classes for modal being visible
     */

    _createClass$1(Modal, [{
      key: "cleanup",
      value: function cleanup() {
        try {
          var element = this._modalOverlayElem;
          if (element && element instanceof SVGElement) {
            element.parentNode.removeChild(element);
          }
          this._modalOverlayElem = null;
          document.body.classList.remove(classNames.isVisible);
        } catch (e) {}
      }
      /**
       * Create the modal overlay, if it does not already exist
       */
    }, {
      key: "createModalOverlay",
      value: function createModalOverlay$1() {
        if (!this._modalOverlayElem) {
          var existingModal = document.getElementById("shepherdModalOverlayContainer");
          this._modalOverlayElem = existingModal || createModalOverlay();
          this._modalOverlayOpening = getModalMaskOpening(this._modalOverlayElem); // don't show yet -- each step will control that

          this.hide(); // Only add to the DOM if this is a new modal, not reusing another one

          if (!existingModal) {
            document.body.appendChild(this._modalOverlayElem);
          }
        }
      }
      /**
       * Hide the modal overlay
       */
    }, {
      key: "hide",
      value: function hide() {
        document.body.classList.remove(classNames.isVisible);
        if (this._modalOverlayElem) {
          this._modalOverlayElem.style.display = "none";
        }
      }
      /**
       * If modal is enabled, setup the svg mask opening and modal overlay for the step
       * @param step
       */
    }, {
      key: "setupForStep",
      value: function setupForStep(step) {
        if (this.options.useModalOverlay) {
          this._styleForStep(step);
          this.show();
        } else {
          this.hide();
        }
      }
      /**
       * Show the modal overlay
       */
    }, {
      key: "show",
      value: function show() {
        document.body.classList.add(classNames.isVisible);
        if (this._modalOverlayElem) {
          this._modalOverlayElem.style.display = "block";
        }
      }
      /**
       * Style the modal for the step
       * @param {Step} step The step to style the opening for
       * @private
       */
    }, {
      key: "_styleForStep",
      value: function _styleForStep(step) {
        var modalOverlayOpening = this._modalOverlayOpening;
        var targetElement = getElementForStep(step);
        var modalOverlayOpeningPadding = step.options.modalOverlayOpeningPadding;
        if (targetElement) {
          positionModalOpening(targetElement, modalOverlayOpening, modalOverlayOpeningPadding);
          this._onScreenChange = debounce$2(positionModalOpening.bind(this, targetElement, modalOverlayOpening, modalOverlayOpeningPadding), 0);
          addStepEventListeners.call(this);
        } else {
          closeModalOpening(this._modalOverlayOpening);
        }
      }
    }]);
    return Modal;
  }();

  // Older browsers don't support event options, feature detect it.

  // Adopted and modified solution from Bohdan Didukh (2017)
  // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

  var hasPassiveEvents = false;
  if (typeof window !== "undefined") {
    var passiveTestOptions = {
      get passive() {
        hasPassiveEvents = true;
        return undefined;
      }
    };
    window.addEventListener("testPassive", null, passiveTestOptions);
    window.removeEventListener("testPassive", null, passiveTestOptions);
  }
  var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);
  var locks = [];
  var documentListenerAdded = false;
  var initialClientY = -1;
  var previousBodyOverflowSetting;
  var previousBodyPaddingRight;

  // returns true if `el` should be allowed to receive touchmove events
  var allowTouchMove = function allowTouchMove(el) {
    return locks.some(function (lock) {
      if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
        return true;
      }
      return false;
    });
  };
  var preventDefault = function preventDefault(rawEvent) {
    var e = rawEvent || window.event;

    // For the case whereby consumers adds a touchmove event listener to document.
    // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
    // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
    // the touchmove event on document will break.
    if (allowTouchMove(e.target)) {
      return true;
    }

    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom)
    if (e.touches.length > 1) return true;
    if (e.preventDefault) e.preventDefault();
    return false;
  };
  var setOverflowHidden = function setOverflowHidden(options) {
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    setTimeout(function () {
      // If previousBodyPaddingRight is already set, don't set it again.
      if (previousBodyPaddingRight === undefined) {
        var reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
        var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (reserveScrollBarGap && scrollBarGap > 0) {
          previousBodyPaddingRight = document.body.style.paddingRight;
          document.body.style.paddingRight = "".concat(scrollBarGap, "px");
        }
      }

      // If previousBodyOverflowSetting is already set, don't set it again.
      if (previousBodyOverflowSetting === undefined) {
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = "hidden";
      }
    });
  };
  var restoreOverflowSetting = function restoreOverflowSetting() {
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    setTimeout(function () {
      if (previousBodyPaddingRight !== undefined) {
        document.body.style.paddingRight = previousBodyPaddingRight;

        // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
        // can be set again.
        previousBodyPaddingRight = undefined;
      }
      if (previousBodyOverflowSetting !== undefined) {
        document.body.style.overflow = previousBodyOverflowSetting;

        // Restore previousBodyOverflowSetting to undefined
        // so setOverflowHidden knows it can be set again.
        previousBodyOverflowSetting = undefined;
      }
    });
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
  var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
    return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
  };
  var handleScroll = function handleScroll(event, targetElement) {
    var clientY = event.targetTouches[0].clientY - initialClientY;
    if (allowTouchMove(event.target)) {
      return false;
    }
    if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
      // element is at the top of its scroll
      return preventDefault(event);
    }
    if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
      // element is at the top of its scroll
      return preventDefault(event);
    }
    event.stopPropagation();
    return true;
  };
  var disableBodyScroll = function disableBodyScroll(targetElement, options) {
    if (isIosDevice) {
      // targetElement must be provided, and disableBodyScroll must not have been
      // called on this targetElement before.
      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
        return;
      }
      if (targetElement && !locks.some(function (lock) {
        return lock.targetElement === targetElement;
      })) {
        var lock = {
          targetElement: targetElement,
          options: options || {}
        };
        locks = [].concat(_toConsumableArray(locks), [lock]);
        targetElement.ontouchstart = function (event) {
          if (event.targetTouches.length === 1) {
            // detect single touch
            initialClientY = event.targetTouches[0].clientY;
          }
        };
        targetElement.ontouchmove = function (event) {
          if (event.targetTouches.length === 1) {
            // detect single touch
            handleScroll(event, targetElement);
          }
        };
        if (!documentListenerAdded) {
          document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? {
            passive: false
          } : undefined);
          documentListenerAdded = true;
        }
      }
    } else {
      setOverflowHidden(options);
      var _lock = {
        targetElement: targetElement,
        options: options || {}
      };
      locks = [].concat(_toConsumableArray(locks), [_lock]);
    }
  };
  var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
    if (isIosDevice) {
      // Clear all locks ontouchstart/ontouchmove handlers, and the references
      locks.forEach(function (lock) {
        lock.targetElement.ontouchstart = null;
        lock.targetElement.ontouchmove = null;
      });
      if (documentListenerAdded) {
        document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? {
          passive: false
        } : undefined);
        documentListenerAdded = false;
      }
      locks = [];

      // Reset initial clientY
      initialClientY = -1;
    } else {
      restoreOverflowSetting();
      locks = [];
    }
  };
  var defaults = {
    trigger: "manual",
    arrow: true,
    animation: "fade",
    duration: 420,
    flip: true,
    animateFill: false,
    // https://atomiks.github.io/tippyjs/#animate-fill-option
    interactive: true,
    // https://atomiks.github.io/tippyjs/#interactive-option
    hideOnClick: "toggle",
    // https://atomiks.github.io/tippyjs/#hide-on-click-option
    multiple: true // https://atomiks.github.io/tippyjs/#multiple-option
  };

  /**
   * Cleanup the steps and set pointerEvents back to 'auto'
   * @param tour The tour object
   */

  function cleanupSteps(tour) {
    if (tour) {
      var steps = tour.steps;
      steps.forEach(function (step) {
        if (step.options && step.options.canClickTarget === false && step.options.attachTo) {
          var stepElement = getElementForStep(step);
          if (stepElement instanceof HTMLElement) {
            stepElement.style.pointerEvents = "auto";
          }
        }
      });
    }
  }
  /**
   * Remove resize and scroll event listeners
   */

  function cleanupStepEventListeners() {
    if (typeof this._onScreenChange === "function") {
      window.removeEventListener("resize", this._onScreenChange, false);
      window.removeEventListener("scroll", this._onScreenChange, false);
      this._onScreenChange = null;
    }
    window.removeEventListener("touchmove", preventModalBodyTouch, {
      passive: false
    });
  }

  /**
   * Creates incremented ID for each newly created tour
   *
   * @private
   * @return {Number} The unique id for the tour
   */

  var uniqueId$1 = function () {
    var id = 0;
    return function () {
      return ++id;
    };
  }();
  var Shepherd = new Evented();
  /**
   * Class representing the site tour
   * @extends {Evented}
   */

  var Tour = /*#__PURE__*/
  function (_Evented) {
    _inherits$1(Tour, _Evented);

    /**
     * @param {Object} options The options for the tour
     * @param {Object} options.defaultStepOptions Default options for Steps ({@link Step#constructor}), created through `addStep`
     * @param {boolean} options.disableScroll When set to true, will keep the user from scrolling with the scrollbar,
     * mousewheel, arrow keys, etc. You may want to use this to ensure you are driving the scroll position with the tour.
     * @param {Step[]} options.steps An array of Step instances to initialize the tour with
     * @param {string} options.tourName An optional "name" for the tour. This will be appended to the the tour's
     * dynamically generated `id` property -- which is also set on the `body` element as the `data-shepherd-active-tour` attribute
     * whenever the tour becomes active.
     * @param {boolean} options.useModalOverlay Whether or not steps should be placed above a darkened
     * modal overlay. If true, the overlay will create an opening around the target element so that it
     * can remain interactive
     * @returns {Tour}
     */
    function Tour() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck$1(this, Tour);
      _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Tour).call(this, options));
      bindMethods.call(_assertThisInitialized$1(_this), ["back", "cancel", "complete", "hide", "next"]);
      _this.options = options;
      _this.steps = _this.options.steps || []; // Pass these events onto the global Shepherd object

      var events = ["active", "cancel", "complete", "inactive", "show", "start"];
      events.map(function (event) {
        (function (e) {
          _this.on(e, function (opts) {
            opts = opts || {};
            opts.tour = _assertThisInitialized$1(_this);
            Shepherd.trigger(e, opts);
          });
        })(event);
      });
      _this.modal = new Modal(options);
      _this._setTooltipDefaults();
      _this._setTourID();
      return _possibleConstructorReturn$1(_this, _assertThisInitialized$1(_this));
    }
    /**
     * Adds a new step to the tour
     * @param {Object|Number|Step|String} arg1
     * When arg2 is defined, arg1 can either be a string or number, to use for the `id` for the step
     * When arg2 is undefined, arg1 is either an object containing step options or a Step instance
     * @param {Object|Step} arg2 An object containing step options or a Step instance
     * @return {Step} The newly added step
     */

    _createClass$1(Tour, [{
      key: "addStep",
      value: function addStep(arg1, arg2) {
        var name, step; // If we just have one argument, we can assume it is an object of step options, with an id

        if (isUndefined(arg2)) {
          step = arg1;
        } else {
          name = arg1;
          step = arg2;
        }
        if (!(step instanceof Step)) {
          step = this.setupStep(step, name);
        } else {
          step.tour = this;
        }
        this.steps.push(step);
        return step;
      }
      /**
       * Go to the previous step in the tour
       */
    }, {
      key: "back",
      value: function back() {
        var index = this.steps.indexOf(this.currentStep);
        this.show(index - 1, false);
      }
      /**
       * Calls done() triggering the 'cancel' event
       * If `confirmCancel` is true, will show a window.confirm before cancelling
       */
    }, {
      key: "cancel",
      value: function cancel() {
        if (this.options.confirmCancel) {
          var cancelMessage = this.options.confirmCancelMessage || "Are you sure you want to stop the tour?";
          var stopTour = window.confirm(cancelMessage);
          if (stopTour) {
            this.done("cancel");
          }
        } else {
          this.done("cancel");
        }
      }
      /**
       * Calls done() triggering the `complete` event
       */
    }, {
      key: "complete",
      value: function complete() {
        this.done("complete");
      }
      /**
       * Called whenever the tour is cancelled or completed, basically anytime we exit the tour
       * @param {String} event The event name to trigger
       */
    }, {
      key: "done",
      value: function done(event) {
        if (Array.isArray(this.steps)) {
          this.steps.forEach(function (step) {
            return step.destroy();
          });
        }
        cleanupStepEventListeners.call(this);
        cleanupSteps(this.tourObject);
        this.trigger(event);
        Shepherd.activeTour = null;
        this._removeBodyAttrs();
        this.trigger("inactive", {
          tour: this
        });
        if (this.options.disableScroll) {
          clearAllBodyScrollLocks();
        }
        this.modal.cleanup();
      }
      /**
       * Gets the step from a given id
       * @param {Number|String} id The id of the step to retrieve
       * @return {Step} The step corresponding to the `id`
       */
    }, {
      key: "getById",
      value: function getById(id) {
        return this.steps.find(function (step) {
          return step.id === id;
        });
      }
      /**
       * Gets the current step
       * @returns {Step|null}
       */
    }, {
      key: "getCurrentStep",
      value: function getCurrentStep() {
        return this.currentStep;
      }
      /**
       * Hide the current step
       */
    }, {
      key: "hide",
      value: function hide() {
        var currentStep = this.getCurrentStep();
        if (currentStep) {
          return currentStep.hide();
        }
      }
      /**
       * Check if the tour is active
       * @return {boolean}
       */
    }, {
      key: "isActive",
      value: function isActive() {
        return Shepherd.activeTour === this;
      }
      /**
       * Go to the next step in the tour
       * If we are at the end, call `complete`
       */
    }, {
      key: "next",
      value: function next() {
        var index = this.steps.indexOf(this.currentStep);
        if (index === this.steps.length - 1) {
          this.complete();
        } else {
          this.show(index + 1, true);
        }
      }
      /**
       * Removes the step from the tour
       * @param {String} name The id for the step to remove
       */
    }, {
      key: "removeStep",
      value: function removeStep(name) {
        var _this2 = this;
        var current = this.getCurrentStep(); // Find the step, destroy it and remove it from this.steps

        this.steps.some(function (step, i) {
          if (step.id === name) {
            if (step.isOpen()) {
              step.hide();
            }
            step.destroy();
            _this2.steps.splice(i, 1);
            return true;
          }
        });
        if (current && current.id === name) {
          this.currentStep = undefined; // If we have steps left, show the first one, otherwise just cancel the tour

          this.steps.length ? this.show(0) : this.cancel();
        }
      }
      /**
       * Setup a new step object
       * @param {Object} stepOptions The object describing the options for the step
       * @param {String|Number} name The string or number to use as the `id` for the step
       * @return {Step} The step instance
       */
    }, {
      key: "setupStep",
      value: function setupStep(stepOptions, name) {
        if (isString(name) || isNumber(name)) {
          stepOptions.id = name.toString();
        }
        stepOptions = _extends({}, this.options.defaultStepOptions, stepOptions);
        return new Step(this, stepOptions);
      }
    }, {
      key: "beforeShowStep",
      value: function beforeShowStep(step) {
        this.modal.setupForStep(step);
        this._styleTargetElementForStep(step);
      }
      /**
       * Show a specific step in the tour
       * @param {Number|String} key The key to look up the step by
       * @param {Boolean} forward True if we are going forward, false if backward
       */
    }, {
      key: "show",
      value: function show() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var step = isString(key) ? this.getById(key) : this.steps[key];
        if (step) {
          this._updateStateBeforeShow();
          var shouldSkipStep = isFunction(step.options.showOn) && !step.options.showOn(); // If `showOn` returns false, we want to skip the step, otherwise, show the step like normal

          if (shouldSkipStep) {
            this._skipStep(step, forward);
          } else {
            this.trigger("show", {
              step: step,
              previous: this.currentStep
            });
            this.currentStep = step;
            step.show();
          }
        }
      }
      /**
       * Start the tour
       */
    }, {
      key: "start",
      value: function start() {
        this.trigger("start");
        if (this.options.disableScroll) {
          disableBodyScroll();
        }
        this.currentStep = null;
        this._setupActiveTour();
        this.next();
      }
      /**
       * Make this tour "active"
       * @private
       */
    }, {
      key: "_setupActiveTour",
      value: function _setupActiveTour() {
        this.modal.createModalOverlay();
        this._addBodyAttrs();
        this.trigger("active", {
          tour: this
        });
        Shepherd.activeTour = this;
      }
      /**
       * Modulates the styles of the passed step's target element, based on the step's options and
       * the tour's `modal` option, to visually emphasize the element
       *
       * @param step The step object that attaches to the element
       * @private
       */
    }, {
      key: "_styleTargetElementForStep",
      value: function _styleTargetElementForStep(step) {
        var targetElement = getElementForStep(step);
        if (!targetElement) {
          return;
        }
        toggleShepherdModalClass(targetElement);
        if (step.options.highlightClass) {
          targetElement.classList.add(step.options.highlightClass);
        }
        if (step.options.canClickTarget === false) {
          targetElement.style.pointerEvents = "none";
        }
      }
      /**
       * Called when `showOn` evaluates to false, to skip the step
       * @param {Step} step The step to skip
       * @param {Boolean} forward True if we are going forward, false if backward
       * @private
       */
    }, {
      key: "_skipStep",
      value: function _skipStep(step, forward) {
        var index = this.steps.indexOf(step);
        var nextIndex = forward ? index + 1 : index - 1;
        this.show(nextIndex, forward);
      }
      /**
       * Set the tippy defaults
       * @private
       */
    }, {
      key: "_setTooltipDefaults",
      value: function _setTooltipDefaults() {
        tippy.setDefaultProps(defaults);
      }
      /**
       * Before showing, hide the current step and if the tour is not
       * already active, call `this._setupActiveTour`.
       * @private
       */
    }, {
      key: "_updateStateBeforeShow",
      value: function _updateStateBeforeShow() {
        if (this.currentStep) {
          this.currentStep.hide();
        }
        if (!this.isActive()) {
          this._setupActiveTour();
        }
      }
      /**
       * Sets this.id to `${tourName}--${uuid}`
       * @private
       */
    }, {
      key: "_setTourID",
      value: function _setTourID() {
        var tourName = this.options.tourName || "tour";
        var uuid = uniqueId$1();
        this.id = "".concat(tourName, "--").concat(uuid);
      }
      /**
       * Adds the data-shepherd-active-tour attribute and the 'shepherd-active'
       * class to the body.
       * @private
       */
    }, {
      key: "_addBodyAttrs",
      value: function _addBodyAttrs() {
        document.body.setAttribute("data-shepherd-active-tour", this.id);
        document.body.classList.add("shepherd-active");
      }
      /**
       * Removes the data-shepherd-active-tour attribute and the 'shepherd-active'
       * class from the body.
       * @private
       */
    }, {
      key: "_removeBodyAttrs",
      value: function _removeBodyAttrs() {
        document.body.removeAttribute("data-shepherd-active-tour");
        document.body.classList.remove("shepherd-active");
      }
    }]);
    return Tour;
  }(Evented);
  _extends(Shepherd, {
    Tour: Tour,
    Step: Step,
    Evented: Evented
  });

  var CENTER = "center";
  var CLOSE_BUTTON_STYLE = {
    NORMAL: "normal",
    FILL: "filled"
  };
  var INAPP_POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    TOP_CENTER: "top-center",
    BOTTOM_CENTER: "bottom-center",
    CENTER: "center"
  };
  var DIRECTION = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical"
  };
  var EVENT_PREFIX = {
    INAPP: "InApp_",
    INLINE: "InLine_",
    SURVEY: "Survey_"
  };
  var COLORS = {
    BLACK: "#000000",
    WHITE: "#ffffff"
  };
  var BUTTON_CONTAINER_POSITION = {
    TOP: "top",
    CENTER: "center",
    BOTTOM: "bottom",
    SURVEY_BOTTOM: "survey_button"
  };
  var VIDEOS_MODES = {
    PLAYER: "mini",
    PIP: "PIP"
  };
  var SCROLL_BEHAVIOUR = {
    SMOOTH: "smooth"
  };
  var CAROUSEL_TYPE = {
    NUMBER: "number",
    CAROUSEL: "carousel"
  };
  var EMBED_CARD_TYPE = {
    cell: "div",
    img: "img",
    text: "div",
    button: "button"
  };

  /* eslint-disable no-unused-vars */

  var isUndefined$1 = function isUndefined(term) {
    return typeof term === "undefined";
  };

  /**
   *
   * @param term
   * @returns {boolean}
   */
  var isNull = function isNull(term) {
    return term === null;
  };

  /**
   *
   * @param term
   * @returns {boolean}
   */
  var isDefined = function isDefined(term) {
    return typeof term !== "undefined" && !isNull(term);
  };
  var isElementInViewport = function isElementInViewport(el) {
    var elementOffsetHight = el.offsetHeight;
    var elementOffsetWidth = el.offsetWidth;
    var boundingRect = el.getBoundingClientRect();

    //This is to check whether the element is in viewport or not, considering cases when targeting element is in a horizontal scroll container
    if (boundingRect.left >= -elementOffsetWidth && boundingRect.top >= -elementOffsetHight && parseInt(boundingRect.right) <= (window.innerWidth === document.documentElement.clientWidth ? window.innerWidth : document.documentElement.clientWidth + elementOffsetWidth) && parseInt(boundingRect.bottom) <= (window.innerHeight === document.documentElement.clientHeight ? window.innerHeight : document.documentElement.clientHeight + elementOffsetHight)) {
      return true;
    } else {
      return false;
    }
  };

  //Gets a multipler for the font-size. This is calculated from the initial-scale of the viewport meta tag.
  var getFontMultiplier = function getFontMultiplier() {
    var viewportMetaTag = document.querySelector("meta[name='viewport']");
    if (viewportMetaTag) {
      var _viewportMetaTag$getA, _viewportMetaTag$getA2;
      var content = (_viewportMetaTag$getA = (_viewportMetaTag$getA2 = viewportMetaTag.getAttribute("content")) === null || _viewportMetaTag$getA2 === void 0 ? void 0 : _viewportMetaTag$getA2.split(",")) !== null && _viewportMetaTag$getA !== void 0 ? _viewportMetaTag$getA : [];
      var initial_scale = 1;
      content.forEach(function (currentValue, index, arr) {
        if (currentValue.trimStart().indexOf("initial-scale") === 0) {
          initial_scale = parseFloat(currentValue.split("=")[1]);
        }
      });
      if (initial_scale) {
        return 1 / initial_scale;
      }
    }
    return 1;
  };
  function deepGet(obj, props, defaultValue) {
    if (obj === undefined || obj === null) {
      return defaultValue;
    }
    if (props.length === 0) {
      return obj;
    }
    var foundSoFar = obj[props[0]];
    var remainingProps = props.slice(1);
    return deepGet(foundSoFar, remainingProps, defaultValue);
  }

  /**
   * @function _setFontFaceAtRule
   * @description generates a font face at rule for custom fonts
   * @param {object} fontconfig
   * @returns
   */
  var _setFontFaceAtRule = function _setFontFaceAtRule(font) {
    if (!font.source || font.source === "url") {
      return [font.family, ""];
    }
    var src;
    var font_family = font.family;
    if (font.source === "res") {
      src = "file:///android_res/".concat(font_family);
    } else if (font.source === "assets") {
      src = "file:///android_asset/".concat(font_family);
    } else if (font.source === "path") {
      src = font.family;
    }
    font_family = font.family.split("/").pop().replace(/[^A-Za-z0-9]/g, "");
    var fallbackFont = "sans-serif";
    var font_face = "\n  @font-face {\n    font-family: ".concat(font_family, ";\n    src: url(").concat(src, ");\n  }");
    return ["".concat(font_family, ", ").concat(fallbackFont), font_face];
  };

  /**
   * @function getStylisedText
   * @description Applies the styles to the text be it title or description.
   * Texts and the corresponding Styles are specified in the segments.
   * @param {string} rawText - Text on which styles should be applied
   * @param {Array} segments - Marks the indexes of the text with the list of styles
   * @param {object} quote - Send this if blockquote must be applied to the entire text
   * @returns
   */
  var getStylisedText = function getStylisedText() {
    var rawText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var segments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var quote = arguments.length > 2 ? arguments[2] : undefined;
    var link_config = arguments.length > 3 ? arguments[3] : undefined;
    var stylisedTextElement = document.createElement("span");
    if (segments.length == 0) {
      stylisedTextElement.innerText = addLinksToText(rawText, link_config);
    } else {
      segments.forEach(function (segment) {
        var start = parseInt(segment.start);
        var end = parseInt(segment.end);
        var segmentText = rawText.substring(start, end);
        var styling = "";
        if (segment.color) {
          styling = "".concat(styling, "color:").concat(segment.color, ";");
        }
        if (segment.font_family) {
          styling = "".concat(styling, "font-family:").concat(segment.font_family, ";");
        }
        if (segment.size) {
          styling = "".concat(styling, "font-size:").concat(segment.size, "px;");
        }
        if (segment.style === "italic") {
          styling = "".concat(styling, "font-style:").concat(segment.style, ";");
        }
        if (segment.style === "bold") {
          styling = "".concat(styling, "font-weight:").concat(segment.style, ";");
        }
        if (segment.style === "normal") {
          styling = "".concat(styling, "font-weight:").concat(segment.style, ";");
        }
        if (segment.underline == true) {
          styling = "".concat(styling, "text-decoration:underline;");
        }
        if (segment.strike_through == true) {
          styling = "".concat(styling, "text-decoration:line-through;");
        }
        if (segment.script == "super") {
          styling = "".concat(styling, "vertical-align:super;");
        }
        if (segment.script == "sub") {
          styling = "".concat(styling, "vertical-align:sub;");
        }
        if (segment.bg_color) {
          styling = "".concat(styling, "background-color:").concat(segment.bg_color, ";");
        }
        var segmentTextElement = document.createElement("span");
        segmentTextElement.style = styling;
        segmentTextElement.innerHTML = addLinksToText(segmentText, link_config);
        //`<span style='${styling}'>${segmentText}</span>`;
        stylisedTextElement.appendChild(segmentTextElement);
        //stylisedTextElement = `${stylisedTextElement} ${segmentTextElement}`;
      });
    }

    if (quote !== undefined) {
      var quoteText = document.createElement("blockquote");
      var styling = "";
      if (quote.color) {
        styling = "border-left-color:".concat(quote.color, ";");
      }
      if (quote.width) {
        styling = "".concat(styling, "border-left-width:").concat(quote.width, "px;");
      }
      if (quote.gap) {
        styling = "".concat(styling, "padding:").concat(quote.gap, "px;");
      }
      quoteText.appendChild(stylisedTextElement);
      quoteText.style = styling;
      return quoteText;
    }
    return stylisedTextElement;
  };

  /**
   * @function addLinksToText
   * @description Creates the anchor tag for the text if it is part of the link configuration.
   * @param {string} text
   * @param {Array} link_config
   * @returns
   */
  var addLinksToText = function addLinksToText(text) {
    var link_config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var anchroElement = text;
    link_config.forEach(function (link) {
      if (link.text === text) {
        anchroElement = "<a style=\"text-decoration: none;\" target=\"_blank\" href=\"".concat(link.url, "\">").concat(text, "</a>");
      }
    });
    return anchroElement;
  };

  /**
   * @function makeid
   * @description Generates a random id of the given length.
   * @param {number} length
   * @returns
   */
  var makeid = function makeid(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  /**
   * @function getHeightWidthFromResolution
   * @description Calculates the height and width of the element.
   * For portrait screens - width is set to scale*width-of-screen and height is auto adjusted based on resolution.
   * For landscape screens - height is set to scale*height-of-screen and width is auto adjusted based on resolution.
   * @param {JSON} config
   * @param {number} scale
   * @returns {JSON}  width  - Width adjusted to the sclae.
   *                  height - Height adjusted to the scale.
   */
  var getHeightWidthFromResolution = function getHeightWidthFromResolution(config) {
    var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
    var calculateFromHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var calculatedHeight = 0,
      calculatedWidth = 0;
    try {
      var _config$width = config.width,
        width = _config$width === void 0 ? 360 : _config$width,
        _config$height = config.height,
        height = _config$height === void 0 ? 360 : _config$height;
      var heightMultiplier = height / width;
      var w = window.innerWidth;
      var h = window.innerHeight;
      if (calculateFromHeight) {
        calculatedHeight = h * scale;
        calculatedWidth = calculatedHeight / heightMultiplier;
        if (calculatedWidth > 0.7 * w) {
          calculatedWidth = 0.7 * w;
          calculatedHeight = calculatedWidth * heightMultiplier;
        }
      } else {
        calculatedWidth = w * scale;
        calculatedHeight = calculatedWidth * heightMultiplier;
        if (calculatedHeight > 0.7 * h) {
          calculatedHeight = 0.7 * h;
          calculatedWidth = calculatedHeight / heightMultiplier;
        }
      }
    } catch (e) {
      console.log("Error \n ".concat(e, " \n occured while calculating the height and width"));
    }
    return {
      height: calculatedHeight,
      width: calculatedWidth
    };
  };

  /**
   * @function generateButtonsBlock
   * @description Generates the buttons.
   * @param {string} id
   * @param {string} name
   * @param {string} eventPrefix
   * @param {JSON} buttons_config
   * @param {string} button_position
   * @param {string} button_direction
   * @param {object} actionHandler
   *                 actionHandler.next         - callback for next action
   *                 actionHandler.cancel       - callback for cancel action
   *                 actionHandler.complete     - callback for complete action
   *                 actionHandler._isCancelled - To be set when cancel action is performed
   *                 actionHandler.action       - Indicates what type of action is performed
   *
   * @returns {HTMLElement} buttons container
   */

  var generateButtonsBlock = function generateButtonsBlock(id, name) {
    var stepper = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var eventPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : EVENT_PREFIX.INAPP;
    var buttons_config = arguments.length > 4 ? arguments[4] : undefined;
    var button_direction = arguments.length > 5 ? arguments[5] : undefined;
    var position = arguments.length > 6 ? arguments[6] : undefined;
    var actionHandler = arguments.length > 7 ? arguments[7] : undefined;
    var isWalkthrough = arguments.length > 8 ? arguments[8] : undefined;
    var uis = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : {};
    var index = arguments.length > 10 ? arguments[10] : undefined;
    var fontMultiplier = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 1;
    var buttons = document.createElement("div");
    buttons.className = "".concat(position, "-buttons-container");
    buttons.style.zIndex = 99999999;
    var _generateButtonsFromC = generateButtonsFromConfig(buttons_config, actionHandler, id, name, eventPrefix, position, isWalkthrough, uis, index),
      buttons_array = _generateButtonsFromC.buttons_array,
      buttons_css = _generateButtonsFromC.buttons_css;
    buttons_css.fontMultiplier = fontMultiplier;
    var buttonsStyle = document.createElement("style");
    buttonsStyle.innerHTML = getButtonsCSSFromConfig(stepper, buttons_css, button_direction, position);
    buttons.appendChild(buttonsStyle);
    buttons_array.forEach(function (button_data) {
      var classes = button_data.classes,
        type = button_data.type,
        sub_type = button_data.sub_type,
        text = button_data.text,
        action = button_data.action;
      var buttonDiv = document.createElement("div");
      buttonDiv.className = "button-div " + classes;
      if (type === "stepper") {
        var carousel = document.createElement("div");
        carousel.className = type + "-" + sub_type;
        carousel.innerHTML = setCarousel(sub_type, stepper);
        buttonDiv.appendChild(carousel);
      } else {
        var newButton = document.createElement("button");
        newButton.className = classes;
        newButton.innerHTML = text;
        buttonDiv.appendChild(newButton);
        buttonDiv.onclick = function () {
          return action();
        };
      }
      buttons.appendChild(buttonDiv);
    });
    return buttons;
  };
  var getAnimationValue = function getAnimationValue(percent) {
    if (percent === 50) {
      return 10;
    } else {
      return 16;
    }
  };
  var translateDir = function translateDir(position, percent) {
    var pos = position.toLowerCase();
    switch (pos) {
      case "top":
      case "top-start":
      case "top-end":
        return "translateY(".concat(getAnimationValue(percent) - 26, "px)");
      case "right":
      case "right-start":
      case "right-end":
        return "translateX(".concat(getAnimationValue(percent), "px)");
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return "translateY(".concat(getAnimationValue(percent), "px)");
      case "left":
      case "left-start":
      case "left-end":
        return "translateX(".concat(getAnimationValue(percent) - 26, "px)");
    }
  };
  var getButtonsCSSFromConfig = function getButtonsCSSFromConfig() {
    var stepper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var buttons_css = arguments.length > 1 ? arguments[1] : undefined;
    var button_direction = arguments.length > 2 ? arguments[2] : undefined;
    var position = arguments.length > 3 ? arguments[3] : undefined;
    var buttons = "";
    var prev = 0;
    var totalSlots = 0;
    if (position === BUTTON_CONTAINER_POSITION.TOP) {
      totalSlots = 3;
    } else if (position === BUTTON_CONTAINER_POSITION.BOTTOM) {
      totalSlots = 5;
    } else if (position === BUTTON_CONTAINER_POSITION.SURVEY_BOTTOM) {
      totalSlots = 3;
    } else {
      totalSlots = 1;
    }
    var numbered = {};
    var numberedfont = {};
    if (stepper.enable_numbered) {
      var _numbered;
      numbered = stepper.numbered;
      numberedfont = (_numbered = numbered) === null || _numbered === void 0 ? void 0 : _numbered.font;
    }
    var justifyContent = "space-between";
    var fontMultiplier = buttons_css.fontMultiplier;
    buttons_css.forEach(function (button_css, index) {
      var _ref;
      var slot = button_css.slot,
        type = button_css.type,
        sub_type = button_css.sub_type,
        bg_color = button_css.bg_color,
        text_color = button_css.text_color,
        size = button_css.size,
        style = button_css.style,
        weight = button_css.weight,
        font_family = button_css.font_family,
        enable_border = button_css.enable_border,
        _button_css$border = button_css.border,
        stroke_width = _button_css$border.width,
        stroke_color = _button_css$border.color,
        radius = _button_css$border.radius,
        button_border_style = _button_css$border.style,
        enable_margin = button_css.enable_margin,
        _button_css$margin = button_css.margin,
        margin_bottom = _button_css$margin.bottom,
        margin_left = _button_css$margin.left,
        margin_right = _button_css$margin.right,
        margin_top = _button_css$margin.top,
        enable_padding = button_css.enable_padding,
        _button_css$padding = button_css.padding,
        padding_bottom = _button_css$padding.bottom,
        padding_left = _button_css$padding.left,
        padding_right = _button_css$padding.right,
        padding_top = _button_css$padding.top,
        _button_css$text_marg = button_css.text_margin,
        text_margin_bottom = _button_css$text_marg.bottom,
        text_margin_left = _button_css$text_marg.left,
        text_margin_right = _button_css$text_marg.right,
        text_margin_top = _button_css$text_marg.top,
        _button_css$text_padd = button_css.text_padding,
        text_padding_bottom = _button_css$text_padd.bottom,
        text_padding_left = _button_css$text_padd.left,
        text_padding_right = _button_css$text_padd.right,
        text_padding_top = _button_css$text_padd.top,
        enable_gradient = button_css.enable_gradient,
        _button_css$gradient = button_css.gradient,
        gradient = _button_css$gradient === void 0 ? {} : _button_css$gradient,
        _button_css$custom_fo = button_css.custom_font,
        custom_font = _button_css$custom_fo === void 0 ? "" : _button_css$custom_fo;
      var gradient_direction, gradient_c1, gradient_c2;
      if (enable_gradient) {
        gradient_direction = gradient.direction || "to right";
        gradient_c1 = gradient.colors[0] || COLORS.BLACK;
        gradient_c2 = gradient.colors[1] || COLORS.WHITE;
      }
      var marginLeft = false;
      var marginRight = false;
      if ((_ref = button_direction !== "vertical") !== null && _ref !== void 0 ? _ref : position !== BUTTON_CONTAINER_POSITION.BOTTOM) {
        var _buttons_css;
        var next = ((_buttons_css = buttons_css[index + 1]) === null || _buttons_css === void 0 ? void 0 : _buttons_css.slot) || totalSlots + 1;
        if (buttons_css.length === 2 && (slot === 2 && next === 3 || slot === 4 && prev === 3 || slot === 3 && (prev === 2 || next === 4))) {
          // If there are only two buttons with one center button(slot 3) then align both the buttons to center.
          // It means buttons 2-3 or 3-4 will always align to the center
          justifyContent = "center";
        } else {
          if (slot - prev > 1) {
            marginLeft = true;
          }
          if (next - slot > 1) {
            marginRight = true;
          }
          if (slot === 3) {
            if (buttons_css.length != 2 || prev !== 1) {
              marginLeft = true;
            } else {
              marginLeft = false;
            }
            if (buttons_css.length != 2 || next !== 5) {
              marginRight = true;
            } else {
              marginRight = true;
            }
          }
        }
        prev = slot;
      }
      if (position === BUTTON_CONTAINER_POSITION.CENTER) {
        marginLeft = true;
        marginRight = true;
      }
      var borderStyles = "";
      if (enable_border) {
        borderStyles = "border:".concat(stroke_width, "px ").concat(button_border_style, " ").concat(stroke_color, ";border-radius: ").concat(radius, "px;");
      }
      var marginStyles = "";
      if (enable_margin) {
        marginStyles = "margin:".concat(margin_top, "px ").concat(margin_right, "px ").concat(margin_bottom, "px ").concat(margin_left, "px;");
      }
      var paddingStyles = "";
      if (enable_padding) {
        paddingStyles = "padding:".concat(padding_top, "px ").concat(padding_right, "px ").concat(padding_bottom, "px ").concat(padding_left, "px;");
      }
      var gradientStyles = "";
      if (enable_gradient) {
        gradientStyles = "background-image:linear-gradient(".concat(gradient_direction, ", ").concat(gradient_c1, ", ").concat(gradient_c2, ");");
      }
      buttons += type !== "stepper" ? "\n        ".concat(custom_font, "\n    div .button-div.").concat(position, "-button-").concat(slot, "{\n      width:auto;\n      height:auto;\n      cursor: pointer;\n      background-color: ").concat(bg_color === "#" ? "transparent" : bg_color, ";\n      ").concat(borderStyles, "\n      ").concat(marginStyles, "\n      ").concat(paddingStyles, "\n      ").concat(marginLeft ? "margin-left:auto;" : "", "\n      ").concat(marginRight ? "margin-right:auto;" : "margin-right:12px;", "\n      ").concat(gradientStyles, "\n    }\n    .").concat(position, "-button-").concat(slot, "{\n      cursor: pointer;\n      color: ").concat(text_color, ";\n      background-color: transparent;\n      font-size: ").concat(size * fontMultiplier, "px;\n      border:none;\n      font-family: ").concat(font_family, ";\n      font-weight: ").concat(weight, ";\n      font-style: ").concat(style, ";\n      margin: ").concat(text_margin_top * fontMultiplier, "px ").concat(text_margin_right * fontMultiplier, "px ").concat(text_margin_bottom * fontMultiplier, "px ").concat(text_margin_left * fontMultiplier, "px;\n      padding: ").concat(text_padding_top * fontMultiplier, "px ").concat(text_padding_right * fontMultiplier, "px ").concat(text_padding_bottom * fontMultiplier, "px ").concat(text_padding_left * fontMultiplier, "px;\n    }\n    ") : "\n        ".concat(custom_font, "\n    div .button-div.").concat(position, "-button-").concat(slot, "{\n      width:auto;\n      height:auto;\n      cursor: pointer;\n      background-color: transparent;\n      ").concat(marginLeft ? "margin-left:auto;" : "", "\n      ").concat(marginRight ? "margin-right:auto;" : "margin-right:12px;", "\n      ").concat(gradientStyles, "\n    }\n    ").concat(sub_type === CAROUSEL_TYPE.NUMBER ? "div .stepper-".concat(sub_type, "{\n          font-family:").concat(numberedfont.family, ";\n          font-size: ").concat(numberedfont.size * fontMultiplier, "px;\n          font-style:").concat(numberedfont.style, ";\n          font-width:").concat(numberedfont.width, ";\n          color:").concat(numbered.color, ";\n        }") : "", "\n\n    ").concat(sub_type === CAROUSEL_TYPE.CAROUSAL ? "div .stepper-".concat(sub_type, "{\n        font-size:\"20px\";\n      }") : "", "\n    ");
    });
    return "\n  div .".concat(position, "-buttons-container  {\n    width:100%;\n    display: flex;\n    flex-direction:").concat(button_direction === DIRECTION.VERTICAL && position === BUTTON_CONTAINER_POSITION.BOTTOM ? "column" : "row", ";\n    justify-content:").concat(justifyContent, ";\n    align-items:center;\n    flex-wrap:wrap;\n  }\n  ").concat(buttons, "\n  ");
  };
  var generateButtonsFromConfig = function generateButtonsFromConfig() {
    var buttons_config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var ActionHandler = arguments.length > 1 ? arguments[1] : undefined;
    var uuid = arguments.length > 2 ? arguments[2] : undefined;
    var name = arguments.length > 3 ? arguments[3] : undefined;
    var configType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Inline_";
    var position = arguments.length > 5 ? arguments[5] : undefined;
    var isWalkthrough = arguments.length > 6 ? arguments[6] : undefined;
    var uis = arguments.length > 7 ? arguments[7] : undefined;
    var ind = arguments.length > 8 ? arguments[8] : undefined;
    var buttons_array = [];
    var buttons_css = [];
    buttons_config.sort(function (a, b) {
      return a.slot - b.slot;
    });
    buttons_config.forEach(function (button_config) {
      var _button_config$action;
      // let _action = "end";
      // let url = "";
      // let isExternal = "";
      // let redirectWithin = "";
      // let callbackFunction = () => {};

      // if (button_config.enable_action) {
      //   const action = button_config.action;
      //   _action = action.type;
      //   url = action.url;
      //   isExternal = action.is_external;
      //   redirectWithin = action.is_within ?? false;
      //   callbackFunction = action.callback ?? (() => {});
      // }

      var action_config = (_button_config$action = button_config === null || button_config === void 0 ? void 0 : button_config.action) !== null && _button_config$action !== void 0 ? _button_config$action : {};
      var _action = action_config === null || action_config === void 0 ? void 0 : action_config.action;
      var vMap = {};
      if (button_config.enable_text) {
        var _button_config$text$s, _button_config$text;
        vMap = (_button_config$text$s = (_button_config$text = button_config.text) === null || _button_config$text === void 0 || (_button_config$text = _button_config$text.script) === null || _button_config$text === void 0 ? void 0 : _button_config$text.vmap) !== null && _button_config$text$s !== void 0 ? _button_config$text$s : {};
      }
      var slot = button_config.slot,
        type = button_config.type,
        sub_type = button_config.sub_type,
        enable_border = button_config.enable_border,
        border = button_config.border,
        color = button_config.color,
        enable_margin = button_config.enable_margin,
        margin = button_config.margin,
        enable_padding = button_config.enable_padding,
        padding = button_config.padding,
        _button_config$text2 = button_config.text,
        text = _button_config$text2.text,
        text_color = _button_config$text2.color,
        _button_config$text2$ = _button_config$text2.font,
        size = _button_config$text2$.size,
        style = _button_config$text2$.style,
        fontfamily = _button_config$text2$.family,
        weight = _button_config$text2$.weight,
        text_margin = _button_config$text2.margin,
        text_padding = _button_config$text2.padding,
        _button_config$gradie = button_config.gradient,
        gradient = _button_config$gradie === void 0 ? {} : _button_config$gradie,
        enable_gradient = button_config.enable_gradient;
      var action;
      try {
        switch (_action) {
          case "done":
          case "dismiss":
            action = function action() {
              ActionHandler.complete(false, "dismiss");
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
            };
            break;
          case "next":
            action = function action() {
              ActionHandler.complete(false, "next");
              if (isWalkthrough && ind + 1 < uis.length) {
                ActionHandler.next(uuid, ind + 1);
              }
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
            };
            break;
          case "prev":
            action = function action() {
              ActionHandler.complete(false, "prev");
              if (isWalkthrough && ind - 1 >= 0) {
                ActionHandler.prev(uuid, ind - 1);
              }
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
            };
            break;
          case "redirect":
            action = function action() {
              var _window$Apxor;
              if (((_window$Apxor = window.Apxor) === null || _window$Apxor === void 0 ? void 0 : _window$Apxor.platform) === "ios") {
                window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
                ActionHandler.complete(false, "redirect");
                window.Apxor.redirectTo(JSON.stringify(action_config));
              } else {
                ActionHandler.complete(true, "redirect");
                window.Apxor.redirectTo("IN_APP", uuid, name, text, JSON.stringify(action_config));
              }
              // if (redirectWithin || isExternal) {
              //   window.open(url, redirectWithin ? "_self" : "_blank");
              // } else {
              //   rtmInstance.logClientEvent("REDIRECT", { url });
              // }
            };

            break;
          case "cancel":
            action = function action() {
              ActionHandler.cancel(true, "cancel");
              ActionHandler._isCancelled = true;
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
              window.Apxor.logActionEvent("walk_through_cancelled", uuid, name);
            };
            break;
          case "submit":
            action = function action() {
              ActionHandler.complete(false, "submit");
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
            };
            break;
          case "skip":
            action = function action() {
              ActionHandler.complete(false, "skip");
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
            };
            break;
          default:
            action = function action() {
              ActionHandler.cancel(false, "cancel");
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
            };
        }
      } catch (e) {
        console.error("Error setting actions on the buttons:" + e);
      }
      var custom_font = _setFontFaceAtRule(button_config.text.font);
      var font_family = custom_font[0];
      buttons_css.push({
        slot: slot,
        type: type,
        sub_type: sub_type,
        enable_border: enable_border,
        border: border,
        bg_color: color,
        text_color: text_color,
        size: size,
        style: style,
        weight: weight,
        font_family: font_family,
        text_margin: text_margin,
        text_padding: text_padding,
        enable_margin: enable_margin,
        margin: margin,
        enable_padding: enable_padding,
        padding: padding,
        enable_gradient: enable_gradient,
        gradient: gradient,
        custom_font: custom_font[1]
      });
      buttons_array.push({
        type: "".concat(type ? type : "button"),
        sub_type: "".concat(sub_type ? sub_type : ""),
        classes: "".concat(position, "-button-").concat(slot),
        text: text,
        action: action
      });
    });
    return {
      buttons_array: buttons_array,
      buttons_css: buttons_css
    };
  };
  var setCarousel = function setCarousel(sub_type) {
    var stepper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (sub_type === CAROUSEL_TYPE.NUMBER && stepper.enable_numbered) {
      var numbered = stepper.numbered;
      if (stepper.index <= stepper.length) {
        if (numbered.style === "number") {
          return "".concat(stepper.index, "/").concat(stepper.length);
        } else if (numbered.style === "number_of") {
          return "".concat(stepper.index, " of ").concat(stepper.length);
        } else if (numbered.style === "step_number") {
          return "Step ".concat(stepper.index, "/").concat(stepper.length);
        } else {
          return "Step ".concat(stepper.index, " of ").concat(stepper.length);
        }
      }
    }
    if (sub_type === CAROUSEL_TYPE.CAROUSEL && stepper.enable_pagination) {
      var carousel = stepper.carousel;
      if (stepper.index <= stepper.length) return createCarousel(stepper, carousel);
    }
    return "";
  };
  function createCarousel() {
    var stepper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var carousel = arguments.length > 1 ? arguments[1] : undefined;
    var carouselContainer = document.createElement("div");
    carouselContainer.setAttribute("class", "carousel-container");
    var carouselContainerStyle = document.createElement("style");
    var narrow_width = parseInt(carousel.active_radius) * 2;
    carouselContainerStyle.innerHTML = ".carousel-container{\n    display:flex;\n    flex-direction:row;\n    padding-left:8px;\n    gap:".concat(carousel.spacebetween, ";\n    align-items:center;\n  }\n  .carousel-indicator-inactive{\n  height: ").concat(carousel.inactive_radius, ";\n  width: ").concat(carousel.inactive_radius, ";\n  background-color: ").concat(carousel.inactive_color, ";\n  border-radius: 50%;\n  display: inline-block;\n  }\n  .carousel-indicator-active-default{\n    height: ").concat(carousel.inactive_radius, ";\n    width: ").concat(carousel.inactive_radius, ";\n    background-color: ").concat(carousel.active_color, ";\n    border-radius: 50%;\n    display: inline-block;\n  }\n  .carousel-indicator-active-narrow\n  {\n    height: ").concat(carousel.inactive_radius, ";\n    width: ").concat(narrow_width, "px;\n    border-radius:").concat(carousel.inactive_radius, ";\n    background-color: ").concat(carousel.active_color, ";\n    display: inline-block;\n  }\n  .carousel-indicator-active-circle\n  {\n    height: ").concat(carousel.active_radius, ";\n    width: ").concat(carousel.active_radius, ";\n    background-color: ").concat(carousel.active_color, ";\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  ");
    carouselContainer.appendChild(carouselContainerStyle);
    for (var stepCount = 0; stepCount <= stepper.length; stepCount++) {
      var carouselIndictor = document.createElement("div");
      stepCount === stepper.index ? carouselIndictor.setAttribute("class", "carousel-indicator-active-".concat(carousel.style)) : carouselIndictor.setAttribute("class", "carousel-indicator-inactive");
      carouselContainer.appendChild(carouselIndictor);
    }
    return carouselContainer.outerHTML.toString();
  }

  /**
   * @function getCloseWithCircleSVG
   * @description Returns the SVG element of the close button with a circle background.
   * @param {number} width
   * @param {number} height
   * @param {string} fillColor
   * @param {string} strokeColor
   * @returns {HTMLElement}
   */
  var getCloseWithCircleSVG = function getCloseWithCircleSVG() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 24;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
    var fillColor = arguments.length > 2 ? arguments[2] : undefined;
    var strokeColor = arguments.length > 3 ? arguments[3] : undefined;
    var closeSVG = "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"".concat(width, "\" height=\"").concat(height, "\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" fill=\"").concat(fillColor, "\"></path>\n  <path d=\"M13.0594 12.0001L15.3594 9.70011C15.6494 9.41011 15.6494 8.93011 15.3594 8.64011C15.0694 8.35011 14.5894 8.35011 14.2994 8.64011L11.9994 10.9401L9.69937 8.64011C9.40937 8.35011 8.92937 8.35011 8.63938 8.64011C8.34938 8.93011 8.34938 9.41011 8.63938 9.70011L10.9394 12.0001L8.63938 14.3001C8.34938 14.5901 8.34938 15.0701 8.63938 15.3601C8.78938 15.5101 8.97937 15.5801 9.16937 15.5801C9.35937 15.5801 9.54937 15.5101 9.69937 15.3601L11.9994 13.0601L14.2994 15.3601C14.4494 15.5101 14.6394 15.5801 14.8294 15.5801C15.0194 15.5801 15.2094 15.5101 15.3594 15.3601C15.6494 15.0701 15.6494 14.5901 15.3594 14.3001L13.0594 12.0001Z\" fill=\"").concat(strokeColor, "\"></path>\n  </svg>");
    return closeSVG;
  };

  /**
   * @function getCloseWithRectangleSVG
   * @description Returns the SVG element of the close button with a rectangular background.
   * @param {number} width
   * @param {number} height
   * @param {string} fillColor
   * @param {string} strokeColor
   * @returns {HTMLElement}
   */
  var getCloseWithRectangleSVG = function getCloseWithRectangleSVG() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 24;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
    var fillColor = arguments.length > 2 ? arguments[2] : undefined;
    var strokeColor = arguments.length > 3 ? arguments[3] : undefined;
    var closeSVG = "\n  <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" style=\"background-color:".concat(fillColor, ";color:").concat(strokeColor, ";\" width=\"").concat(width, "\" height=\"").concat(height, "\">\n    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n  </svg>\n  ");
    return closeSVG;
  };

  /**
   * @function getCloseSVG
   * @description Returns the SVG element of the close button.
   * @param {number} width
   * @param {number} height
   * @param {string} color
   * @returns {HTMLElement}
   */
  var getCloseSVG = function getCloseSVG() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 24;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
    var color = arguments.length > 2 ? arguments[2] : undefined;
    var closeSVG = "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(width, "\" height=\"").concat(height, "\" fill=").concat(color, " class=\"bi bi-x\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n  </svg>");
    return closeSVG;
  };

  /**
   * @function          getNumberOrDefault
   * @description       Returns the given input as Number. If its not a number returns the default value
   * @param   {any}     input
   * @param   {number}  def
   * @returns {number}
   */
  var getNumberOrDefault = function getNumberOrDefault(input, def) {
    var result = Number(input);
    if (result || result === 0) {
      return result;
    }
    return def;
  };

  /**
   * @function            getStringOrDefault
   * @description         Returns the given string. If its empty returns the default string
   * @param   {any}       input
   * @param   {string}    def
   * @returns {string}
   */
  var getStringOrDefault = function getStringOrDefault() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var def = arguments.length > 1 ? arguments[1] : undefined;
    var result = String(input);
    if (result) {
      return result;
    }
    return def;
  };

  /**
   * @function            getColorOrDefault
   * @description         Returns the given color. If its empty returns the default color
   * @param   {string}    input
   * @param   {string}    def
   * @returns {string}
   */
  var getColorOrDefault = function getColorOrDefault(input, def) {
    var result = String(input);
    if (result) {
      return result;
    }
    return def;
  };

  /**
   * @function            getArrayOrDefault
   * @description         Returns the given Array. If its empty or not an array returns the default array
   * @param   {any}    input
   * @param   {Array}    def
   * @returns {Array}
   */
  var getArrayOrDefault = function getArrayOrDefault(input, def) {
    if (input && Array.isArray(input)) {
      return input;
    }
    return def;
  };
  var isEmptyObject = function isEmptyObject(obj) {
    if (_typeof(obj) !== "object") {
      return true;
    }
    return Object.keys(obj).length === 0;
  };

  /**
   * @function getPIPSVG
   * @description Returns the SVG element of the PIP button.
   * @param {number} width
   * @param {number} height
   * @param {string} color
   * @returns {HTMLElement}
   */
  var getPIPSVG = function getPIPSVG() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 24;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
    var color = arguments.length > 2 ? arguments[2] : undefined;
    var pipSVG = "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(width, "\" height=\"").concat(height, "\" fill=").concat(color, " class=\"bi bi-pip\" viewBox=\"0 0 16 16\">\n    <path d=\"M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z\"/>\n    <path d=\"M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z\"/>\n  </svg>");
    return pipSVG;
  };
  var getSlotNumberByPosition = function getSlotNumberByPosition(position) {
    if (position === "left") return 1;else if (position === "center") return 3;else return 5;
  };

  /**
   * @function getElementFromSelector
   * @description Finds the element in DOM for a given selector. Selector can be an ID, or any css selector. It can also be an XPath.
   * @param {string} selector
   * @returns {HTMLElement} Returns the HTML element that matches the given selector
   */
  var getElementFromSelector = function getElementFromSelector(selector) {
    var iframe_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    // Given selector can be an ID.
    var element = document.getElementById(selector);
    if (!element) {
      try {
        element = document.querySelector(selector);
      } catch (e) {
        //If there is an exception, it means it is not a valid selector.
        console.error("Error finding element in DOM:" + e);
      }
    }
    // If no element is found till now, it means it is neither an ID nor a valid css selector. It could be an XPath.
    if (!element) {
      element = getElementByXPath(selector);
    }

    // If no element is found, it means the selector is not an ID. It could be a css selector
    if (!element && iframe_id.length > 0) {
      var _document$getElementB;
      element = (_document$getElementB = document.getElementById(iframe_id)) === null || _document$getElementB === void 0 || (_document$getElementB = _document$getElementB.contentWindow) === null || _document$getElementB === void 0 || (_document$getElementB = _document$getElementB.document) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.querySelector(selector);
    }
    return element;
  };
  var getElementByXPath = function getElementByXPath(path) {
    var index = path.indexOf("svg");
    if (index !== -1) {
      path = path.substring(0, index) + "svg:svg";
    }
    try {
      return document.evaluate(path, document, function (prefix) {
        if (prefix === "svg") {
          return "http://www.w3.org/2000/svg";
        } else {
          return null;
        }
      }, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } catch (e) {
      console.error("Error finding element in DOM:" + e);
    }
    return null;
  };
  function isElementCovered(element) {
    var rect = element.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    var elementAtPoint = document.elementFromPoint(x, y);
    var initialElementFound = element;

    // Check if the element at the point is a child of the element in question
    while (elementAtPoint) {
      if (elementAtPoint === element) {
        return false;
      }
      elementAtPoint = elementAtPoint.parentElement;
    }
    if (!elementAtPoint) {
      var initialElementAtPoint = document.elementFromPoint(x, y);
      while (initialElementFound) {
        if (initialElementFound === initialElementAtPoint) {
          return false;
        }
        initialElementFound = initialElementFound.parentElement;
      }
    }
    return true;
  }
  var generateButtons = function generateButtons() {
    var buttons_config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var ActionHandler = arguments.length > 1 ? arguments[1] : undefined;
    var uuid = arguments.length > 2 ? arguments[2] : undefined;
    var name = arguments.length > 3 ? arguments[3] : undefined;
    var configType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Inline_";
    var buttons_array = [];
    var buttons_css = [];
    buttons_config.forEach(function (button_config, index) {
      var _button_config$action2, _button_config$action3, _button_config$action4, _button_config$action5, _button_config$action6, _button_config$action7, _button_config$action8, _button_config$action9, _button_config$action10, _button_config$action11, _button_config$action12, _button_config$action13;
      var _action = (_button_config$action2 = button_config === null || button_config === void 0 || (_button_config$action3 = button_config.action_config) === null || _button_config$action3 === void 0 ? void 0 : _button_config$action3.action) !== null && _button_config$action2 !== void 0 ? _button_config$action2 : "end";
      var vMap = (_button_config$action4 = button_config === null || button_config === void 0 || (_button_config$action5 = button_config.action_config) === null || _button_config$action5 === void 0 ? void 0 : _button_config$action5.vmap) !== null && _button_config$action4 !== void 0 ? _button_config$action4 : {};
      var url = (_button_config$action6 = button_config === null || button_config === void 0 || (_button_config$action7 = button_config.action_config) === null || _button_config$action7 === void 0 ? void 0 : _button_config$action7.url) !== null && _button_config$action6 !== void 0 ? _button_config$action6 : "";
      var isExternal = (_button_config$action8 = button_config === null || button_config === void 0 || (_button_config$action9 = button_config.action_config) === null || _button_config$action9 === void 0 ? void 0 : _button_config$action9.is_external) !== null && _button_config$action8 !== void 0 ? _button_config$action8 : true;
      var redirectWithin = (_button_config$action10 = button_config === null || button_config === void 0 || (_button_config$action11 = button_config.action_config) === null || _button_config$action11 === void 0 ? void 0 : _button_config$action11.is_within) !== null && _button_config$action10 !== void 0 ? _button_config$action10 : false;
      var callbackFunction = (_button_config$action12 = button_config === null || button_config === void 0 || (_button_config$action13 = button_config.action_config) === null || _button_config$action13 === void 0 ? void 0 : _button_config$action13.callback_func) !== null && _button_config$action12 !== void 0 ? _button_config$action12 : "";
      var action_config_str = JSON.stringify(button_config === null || button_config === void 0 ? void 0 : button_config.action_config);
      _action = _action.toLowerCase();
      var borders = button_config.borders,
        color = button_config.color,
        _button_config$text_c = button_config.text_config,
        text = _button_config$text_c.text,
        text_color = _button_config$text_c.color,
        size = _button_config$text_c.size,
        style = _button_config$text_c.style,
        font_family = _button_config$text_c.font_family,
        _button_config$gradie2 = button_config.gradient_config,
        gradient_config = _button_config$gradie2 === void 0 ? {} : _button_config$gradie2;
      var action;
      try {
        switch (_action) {
          case "done":
          case "dismiss":
            action = function action() {
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
              ActionHandler.complete();
            };
            break;
          case "next":
            action = function action() {
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
              ActionHandler.next();
            };
            break;
          case "prev":
            action = function action() {
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
              ActionHandler.prev();
            };
            break;
          case "redirect":
            action = function action() {
              window.Apxor.redirectTo(uuid, name, text, action_config_str);
              ActionHandler.complete(_action);
            };
            break;
          case "cancel":
            action = function action() {
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
              ActionHandler.cancel(_action);
              window.Apxor.logActionEvent("walk_through_cancelled", uuid, name);
            };
            break;
          default:
            action = function action() {
              ActionHandler.cancel();
              window.Apxor.logActionEvent(configType + text + "_Clicked", uuid, name);
            };
        }
      } catch (e) {
        console.error("Error setting actions on the buttons:" + e);
      }
      buttons_css.push({
        borders: borders,
        bg_color: color,
        text_color: text_color,
        size: size,
        style: style,
        font_family: font_family,
        gradient_config: gradient_config
      });
      buttons_array.push({
        classes: index === 0 ? "button-o" : "button-t",
        text: text,
        action: action
      });
    });
    return {
      buttons_array: buttons_array,
      buttons_css: buttons_css
    };
  };
  var getButtonPosition = function getButtonPosition(position) {
    switch (position) {
      case "center":
        return "center";
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      case "ends":
        return "space-between";
      default:
        return "flex-end";
    }
  };
  var getButtonsCSS = function getButtonsCSS(buttons_css) {
    var button_position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "right";
    var button_direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DIRECTION.HORIZONTAL;
    var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var buttons = "";
    if (buttons_css.length > 0) {
      var _buttons_css$ = buttons_css[0],
        bg_color = _buttons_css$.bg_color,
        text_color = _buttons_css$.text_color,
        size = _buttons_css$.size,
        style = _buttons_css$.style,
        font_family = _buttons_css$.font_family,
        _buttons_css$$borders = _buttons_css$.borders,
        stroke_color = _buttons_css$$borders.stroke_color,
        radius = _buttons_css$$borders.radius,
        enable_gradient = _buttons_css$.enable_gradient,
        _buttons_css$$gradien = _buttons_css$.gradient,
        gradient = _buttons_css$$gradien === void 0 ? {} : _buttons_css$$gradien;
      var gradient_direction, gradient_c1, gradient_c2;
      if (enable_gradient) {
        gradient_direction = gradient.gradient_direction || "to right";
        gradient_c1 = gradient.gradient_c1 || COLORS.BLACK;
        gradient_c2 = gradient.gradient_c2 || COLORS.WHITE;
      }
      buttons = "\n    ".concat(prefix, " footer .shepherd-button.button-o {\n      cursor: pointer;\n      background-color: ").concat(bg_color === "#" ? "transparent" : bg_color, ";\n      color: ").concat(text_color, ";font-size: ").concat(size, "px;font-family: ").concat(font_family, ";\n      font-weight: ").concat(font_family !== "bold" ? "normal" : font_family, ";\n      font-style: ").concat(style === "italic" ? "italic" : "unset", ";\n      border: 0px solid ").concat(stroke_color, ";border-radius: ").concat(radius, "px;\n      ").concat(enable_gradient ? "background-image:linear-gradient(".concat(gradient_direction, ", ").concat(gradient_c1, ", ").concat(gradient_c2, ");") : "", "\n      margin-right:").concat(bg_color === "#" ? 0 : "12px", "\n    }\n    ");
    }
    if (buttons_css.length > 1) {
      var _buttons_css$2 = buttons_css[1],
        _bg_color = _buttons_css$2.bg_color,
        _text_color = _buttons_css$2.text_color,
        _size = _buttons_css$2.size,
        _font_family = _buttons_css$2.font_family,
        _buttons_css$2$border = _buttons_css$2.borders,
        _stroke_color = _buttons_css$2$border.stroke_color,
        _radius = _buttons_css$2$border.radius,
        _buttons_css$2$gradie = _buttons_css$2.gradient_config,
        gradient_config = _buttons_css$2$gradie === void 0 ? {} : _buttons_css$2$gradie;
      var _gradient_direction, _gradient_c, _gradient_c2;
      var _enable_gradient = gradient_config.enable_gradient || false;
      if (_enable_gradient) {
        _gradient_direction = gradient_config.gradient_direction || "to right";
        _gradient_c = (gradient_config === null || gradient_config === void 0 ? void 0 : gradient_config.colors[0]) || COLORS.BLACK;
        _gradient_c2 = (gradient_config === null || gradient_config === void 0 ? void 0 : gradient_config.colors[1]) || COLORS.WHITE;
      }
      buttons += "\n    ".concat(prefix, " footer .shepherd-button.button-t {\n      cursor: pointer;\n      background-color: ").concat(_bg_color === "#" ? "transparent" : _bg_color, ";\n      color: ").concat(_text_color, ";font-size: ").concat(_size, "px;font-family: ").concat(_font_family, ";\n      font-weight: ").concat(_font_family !== "bold" ? "normal" : _font_family, ";\n      font-style: ").concat(_font_family === "italic" ? "italic" : "unset", ";\n      ").concat(_enable_gradient ? "background-image:linear-gradient(".concat(_gradient_direction, ", ").concat(_gradient_c, ", ").concat(_gradient_c2, ");") : "", "\n      border: 0px solid ").concat(_stroke_color, ";border-radius: ").concat(_radius, "px;\n    }\n    ");
    }
    return "\n  ".concat(prefix, " footer .shepherd-button {\n    display: inline-block;\n    *display: inline;\n    vertical-align: middle;\n    *vertical-align: auto;\n    *zoom: 1;\n    border: 0;border-radius: 3px;cursor: pointer;display: inline;font-family: inherit;\n    font-size: .8em;letter-spacing: .01em;line-height: 18px;margin-right: 12px;\n    padding: 8px 16px;text-transform: none;transition: all .5s ease\n  }\n  ").concat(buttons, "\n  ").concat(prefix, " footer .shepherd-button:last-child {\n  }\n\n  ").concat(prefix, " footer {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    display: flex;\n    flex-direction:").concat(button_direction === DIRECTION.HORIZONTAL ? "row" : "column", ";\n\n    align-items:center;\n    justify-content: ").concat(button_direction === DIRECTION.HORIZONTAL ? getButtonPosition(button_position) : "space-evenly", ";\n    padding: 0 .8em .8em;\n  }\n  ");
  };

  /**
   * @function createTextElement
   * @description Creates a text element for the given text config. It could either be a title or a description.
   * @param {object} config
   * @param {string} currentId
   * @param {string} type - Title or Description type
   * @returns
   */
  var createTextElement = function createTextElement(_ref2, currentId) {
    var _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? "#000" : _ref2$color,
      _ref2$font_family = _ref2.font_family,
      font_family = _ref2$font_family === void 0 ? "cursive" : _ref2$font_family,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 14 : _ref2$size,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? "bold" : _ref2$style,
      text = _ref2.text,
      segments = _ref2.segments,
      quote = _ref2.quote,
      _ref2$link_config = _ref2.link_config,
      link_config = _ref2$link_config === void 0 ? [] : _ref2$link_config;
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "desc";
    var fontMultiplier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    size = size * fontMultiplier;
    var element = document.createElement("span");
    element.setAttribute("id", currentId + "-" + type);
    element.className = "apx-class-".concat(currentId, "-").concat(type);
    var styleTag = document.createElement("style");
    styleTag.innerHTML = "\n    .apx-class-".concat(currentId, "-").concat(type, " {\n      z-index:99999;\n      color:").concat(color, " !important;\n      font-family:").concat(font_family, " !important;\n      font-size:").concat(size, "px !important;\n      font-weight:").concat(style, " !important;\n      font-style:").concat(style === "normal" || style === "italic" ? style + " !important" : "unset", ";\n      max-width:400px;\n    }\n  ");
    element.appendChild(styleTag);
    // If there are any styles to the text through inline edits, apply them.
    element.appendChild(getStylisedText(text, segments, quote, link_config));
    return element;
  };

  /* eslint-disable no-unused-vars */
  var ApxorWalkthroughTour;
  var buttonAction = null;
  var onClickCallback = function onClickCallback(configId, configName) {
    var isHitTheTarget = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var dismiss_target_touch = arguments.length > 3 ? arguments[3] : undefined;
    if (dismiss_target_touch) {
      try {
        if (isHitTheTarget) {
          window.Apxor.logActionEvent("InlineTargetViewClicked", configId, configName);
        }
        // console.log('InlineTargetViewClicked');
        ApxorWalkthroughTour.complete();
      } catch (e) {
        console.error(e);
      }
    }
  };
  function addTourStep(uiConfig, terminationConfig, messageConfig, rtmInstance) {
    var _text_config$segments;
    var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var _uiConfig$animation = uiConfig.animation,
      animation = _uiConfig$animation === void 0 ? {} : _uiConfig$animation,
      _uiConfig$bg_color = uiConfig.bg_color,
      bg_color = _uiConfig$bg_color === void 0 ? "black" : _uiConfig$bg_color,
      _uiConfig$border = uiConfig.border,
      border = _uiConfig$border === void 0 ? {} : _uiConfig$border,
      _uiConfig$buttons_con = uiConfig.buttons_config,
      buttons_config = _uiConfig$buttons_con === void 0 ? [] : _uiConfig$buttons_con,
      _uiConfig$button_posi = uiConfig.button_position,
      button_position = _uiConfig$button_posi === void 0 ? "right" : _uiConfig$button_posi,
      _uiConfig$button_dire = uiConfig.button_direction,
      button_direction = _uiConfig$button_dire === void 0 ? DIRECTION.HORIZONTAL : _uiConfig$button_dire,
      _uiConfig$corners = uiConfig.corners,
      corners = _uiConfig$corners === void 0 ? {} : _uiConfig$corners,
      _uiConfig$shadow = uiConfig.shadow,
      shadow = _uiConfig$shadow === void 0 ? "0 8px 16px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)" : _uiConfig$shadow,
      _uiConfig$opacity = uiConfig.opacity,
      opacity = _uiConfig$opacity === void 0 ? 1 : _uiConfig$opacity,
      _uiConfig$dismiss_out = uiConfig.dismiss_outside_touch,
      dismiss_outside_touch = _uiConfig$dismiss_out === void 0 ? false : _uiConfig$dismiss_out,
      _uiConfig$dismiss_tar = uiConfig.dismiss_target_touch,
      dismiss_target_touch = _uiConfig$dismiss_tar === void 0 ? true : _uiConfig$dismiss_tar,
      _uiConfig$escapeWithR = uiConfig.escapeWithReference,
      escapeWithReference = _uiConfig$escapeWithR === void 0 ? false : _uiConfig$escapeWithR,
      _uiConfig$position = uiConfig.position,
      position = _uiConfig$position === void 0 ? "TOP" : _uiConfig$position,
      _uiConfig$text_config = uiConfig.text_config,
      text_config = _uiConfig$text_config === void 0 ? {} : _uiConfig$text_config,
      _uiConfig$title_confi = uiConfig.title_config,
      title_config = _uiConfig$title_confi === void 0 ? {} : _uiConfig$title_confi,
      view_id = uiConfig.view_id,
      _uiConfig$search_type = uiConfig.search_type,
      _uiConfig$show_shadow = uiConfig.show_shadow,
      show_shadow = _uiConfig$show_shadow === void 0 ? false : _uiConfig$show_shadow,
      _uiConfig$dim_backgro = uiConfig.dim_background_color,
      dim_background_color = _uiConfig$dim_backgro === void 0 ? "#0a0a0a" : _uiConfig$dim_backgro,
      _uiConfig$dim_backgro2 = uiConfig.dim_background_opacity,
      dim_background_opacity = _uiConfig$dim_backgro2 === void 0 ? 0.5 : _uiConfig$dim_backgro2,
      _uiConfig$show_close_ = uiConfig.show_close_icon,
      show_close_icon = _uiConfig$show_close_ === void 0 ? false : _uiConfig$show_close_,
      _uiConfig$set_font_to = uiConfig.set_font_to_scale,
      set_font_to_scale = _uiConfig$set_font_to === void 0 ? false : _uiConfig$set_font_to,
      _uiConfig$is_preview = uiConfig.is_preview,
      is_preview = _uiConfig$is_preview === void 0 ? false : _uiConfig$is_preview;
    var dismissOnScroll;
    var configId = messageConfig.configId,
      configName = messageConfig.configName;
    var fontMultiplier = set_font_to_scale ? getFontMultiplier() : 1;
    fontMultiplier = fontMultiplier > 1 ? fontMultiplier : 1;
    var buttons_array = [];
    var buttons_css = [];
    var text_alignment = (text_config === null || text_config === void 0 ? void 0 : text_config.alignment) || "left";
    var title_alignment = (title_config === null || title_config === void 0 ? void 0 : title_config.alignment) || "left";

    // let primary_button_bg_color = "#3288e6",
    //   secondary_button_bg_color = "#f1f2f3",
    //   primary_button_font_color = "rgba(0, 0, 0, .75)",
    //   secondary_button_font_color = "rgba(0, 0, 0, .75)";

    buttons_config.forEach(function (button_config, index) {
      var _button_config$action, _button_config$action2, _button_config$action3, _button_config$action4;
      var button_classes, button_text, action;
      // color = ""
      button_text = deepGet(button_config, ["text_config", "text"], null);
      var _action = (_button_config$action = button_config === null || button_config === void 0 || (_button_config$action2 = button_config.action_config) === null || _button_config$action2 === void 0 ? void 0 : _button_config$action2.action) !== null && _button_config$action !== void 0 ? _button_config$action : "end";
      var action_config = (button_config === null || button_config === void 0 ? void 0 : button_config.action_config) || {};
      var action_config_str = JSON.stringify(action_config);
      var url = (_button_config$action3 = button_config === null || button_config === void 0 || (_button_config$action4 = button_config.action_config) === null || _button_config$action4 === void 0 ? void 0 : _button_config$action4.url) !== null && _button_config$action3 !== void 0 ? _button_config$action3 : "";
      switch (_action) {
        case "done":
        case "dismiss":
          action = function action() {
            window.Apxor.logActionEvent("inline_".concat(button_text, "_Clicked"), configId, configName);
            ApxorWalkthroughTour.complete();
          };
          break;
        case "next":
          action = function action() {
            window.Apxor.logActionEvent("inline_".concat(button_text, "_Clicked"), configId, configName);
            ApxorWalkthroughTour.complete();
          };
          break;
        case "prev":
          action = function action() {
            window.Apxor.logActionEvent("inline_".concat(button_text, "_Clicked"), configId, configName);
            ApxorWalkthroughTour.complete();
          };
          break;
        case "redirect":
          action = function action() {
            buttonAction = "redirect";
            ApxorWalkthroughTour.complete();
            window.Apxor.redirectTo(configId, configName, button_text, action_config_str);
          };
          break;
        case "cancel":
          action = function action() {
            buttonAction = "cancel";
            window.Apxor.logActionEvent("inline_".concat(button_text, "_Clicked"), configId, configName);
            ApxorWalkthroughTour.complete();
            window.Apxor.logActionEvent("walk_through_cancelled", configId, configName);
          };
          break;
        default:
          action = function action() {
            window.Apxor.logActionEvent("inline_" + text + "_Clicked", configId, configName);
            ApxorWalkthroughTour.cancel();
          };
      }
      button_classes = "shepherd-button ";
      // button_classes += button_config.id === "okButton" ? "-secondary" : "";

      // if (["end", "dismiss"].includes(_action)) {
      //   primary_button_font_color = deepGet(
      //     button_config,
      //     ["text_config", "color"],
      //     "#ccc"
      //   );
      //   primary_button_bg_color = button_config.color;
      // } else {
      //   secondary_button_font_color = deepGet(
      //     button_config,
      //     ["text_config", "color"],
      //     "#ccc"
      //   );
      //   secondary_button_bg_color = button_config.color;
      // }
      buttons_array.push({
        classes: button_classes + (index === 0 ? "button-o" : "button-t"),
        text: button_text,
        action: action
      });
      var borders = button_config.borders,
        color = button_config.color,
        _button_config$text_c = button_config.text_config,
        text = _button_config$text_c.text,
        text_color = _button_config$text_c.color,
        size = _button_config$text_c.size,
        style = _button_config$text_c.style,
        font_family = _button_config$text_c.font_family,
        _button_config$gradie = button_config.gradient_config,
        gradient_config = _button_config$gradie === void 0 ? {} : _button_config$gradie;
      buttons_css.push({
        borders: borders,
        bg_color: color,
        text_color: text_color,
        size: size,
        style: style,
        font_family: font_family,
        gradient_config: gradient_config
      });
    });

    // let showingCloseIcon = show_close_icon
    //   ? !(buttons_config.length >= 1)
    //   : false;

    var textContentCSS = {
      color: text_config.color,
      fontSize: Math.ceil(text_config.size * fontMultiplier),
      fontFamily: text_config.font_family,
      fontStyle: text_config.style
    };
    if (text_config.margin_config && Object.keys(text_config.margin_config).length > 0) {
      var margin = text_config.margin_config;
      textContentCSS.margin = "".concat(margin.top, "px ").concat(margin.right, "px ").concat(margin.bottom, "px ").concat(margin.left, "px");
    }
    var style = text_config.style;
    if (style === "bold") {
      textContentCSS.fontWeight = style;
    }
    var titleContentCSS = {
      color: title_config === null || title_config === void 0 ? void 0 : title_config.color,
      fontSize: Math.ceil((title_config === null || title_config === void 0 ? void 0 : title_config.size) * fontMultiplier),
      fontFamily: title_config === null || title_config === void 0 ? void 0 : title_config.font_family,
      fontStyle: title_config === null || title_config === void 0 ? void 0 : title_config.style
    };
    if (title_config !== null && title_config !== void 0 && title_config.margin_config && Object.keys(title_config === null || title_config === void 0 ? void 0 : title_config.margin_config).length > 0) {
      var _margin = title_config === null || title_config === void 0 ? void 0 : title_config.margin_config;
      titleContentCSS.margin = "".concat(_margin.top, "px ").concat(_margin.right, "px ").concat(_margin.bottom, "px ").concat(_margin.left, "px");
    }
    style = title_config === null || title_config === void 0 ? void 0 : title_config.style;
    if (style === "bold") {
      textContentCSS.fontWeight = style;
    }
    var tooltipCSS = {
      "border-radius": corners["enabled"] ? corners["width"] : 0,
      background: bg_color,
      "border-color": border["color"],
      "border-width": border["width"]
    };
    var button = getElementFromSelector(view_id);
    if (!button) {
      var _window;
      (_window = window) === null || _window === void 0 || (_window = _window.Apxor) === null || _window === void 0 || _window.updateFlag(false);
    }
    function getAnimationValue(percent) {
      if (percent === 50) {
        return 0;
      } else {
        return -4;
      }
    }
    function translateDir(position, percent) {
      var pos = position.toLowerCase();
      switch (pos) {
        case "top":
          return "translateY(".concat(getAnimationValue(percent), "px)");
        case "right":
          return "translateX(".concat(getAnimationValue(percent), "px)");
        case "bottom":
          return "translateY(".concat(-getAnimationValue(percent), "px)");
        case "left":
          return "translateX(".concat(-getAnimationValue(percent), "px)");
      }
    }
    function getPropertyFrom(position) {
      var pos = position.toUpperCase();
      switch (pos) {
        case "TOP":
          return "top: -8px !important";
        case "LEFT":
          return "left: 0px !important";
        case "RIGHT":
          return "left: -0px !important";
        case "BOTTOM":
          return "top: 0px !important";
      }
    }
    function applyCSS() {
      // let dummySpan = document.createElement("span");
      // dummySpan.setAttribute("id", "apxor-style-" + configId + "-step-" + index);
      // // Fix for HeadDigital issue
      // // This has to done for cases where the parent element that
      // // we add this span applies the display flex and justify content space between
      // // will moving the target element left or right. So, we have to make our span
      // // display -> none
      // dummySpan.style.display = "none";
      var styleElement = document.createElement("style");
      styleElement.setAttribute("id", "apxor-style-" + configId + "-step-" + index);
      styleElement.innerHTML = "\n    #shepherdModalOverlayContainer {\n      -ms-filter: \"progid:dximagetransform.microsoft.gradient.alpha(Opacity=50)\";\n      filter: alpha(opacity=50);height: 100vh;left: 0;opacity: ".concat(dim_background_opacity !== null && dim_background_opacity !== void 0 ? dim_background_opacity : 0.5, ";position: fixed;\n      top: 0;transition: all .3s ease-out;width: 100vw;z-index: 9997;fill: ").concat(dim_background_color !== null && dim_background_color !== void 0 ? dim_background_color : "transparent", "\n    }\n    #shepherdModalOverlayContainer #shepherdModalMask, #shepherdModalOverlayContainer #shepherdModalMaskRect {\n      height: 100vh;width: 100vw\n    }\n    .shepherd-modal.shepherd-enabled {\n      position: relative;z-index: 9998\n    }\n    .shepherd-active.shepherd-modal-is-visible :not(.shepherd-target) {\n      pointer-events: none\n    }\n    .shepherd-active.shepherd-modal-is-visible .shepherd-button, .shepherd-active.shepherd-modal-is-visible .shepherd-button *, .shepherd-active.shepherd-modal-is-visible .shepherd-cancel-link, .shepherd-active.shepherd-modal-is-visible .shepherd-cancel-link *, .shepherd-active.shepherd-modal-is-visible .shepherd-element, .shepherd-active.shepherd-modal-is-visible .shepherd-element *, .shepherd-active.shepherd-modal-is-visible .shepherd-target, .shepherd-active.shepherd-modal-is-visible .shepherd-target * {\n      pointer-events: auto\n    }\n    .tippy-popper.shepherd {\n      z-index: 999999\n    }\n    .tippy-popper.shepherd[x-placement^=top] {\n      margin-top: 0px\n    }\n    .tippy-popper.shepherd[x-placement^=bottom] {\n      margin-top: 8px\n    }\n    .tippy-popper.shepherd[x-placement^=left] {\n      margin-right: 0px\n    }\n    .tippy-popper.shepherd[x-placement^=right] {\n      margin-left: 0px\n    }\n    .tippy-popper.shepherd .tippy-tooltip .tippy-content {\n      max-height: 100%;padding-top:0px;padding-bottom:0px;text-align: left;max-width: calc(").concat(Math.ceil(fontMultiplier * 400), "px); overflow-wrap: break-word;\n    }\n    .shepherd-element, .shepherd-element *, .shepherd-element:after, .shepherd-element :after, .shepherd-element:before, .shepherd-element :before {\n      box-sizing: border-box\n    }\n    .shepherd-element {\n      outline: none;\n    }\n    .shepherd-element .shepherd-content header {\n      border-top-left-radius: 5px;border-top-right-radius: 5px;\n      line-height: 2em;").concat(show_close_icon ? "padding: .75em;" : "", "\n      background: ").concat(bg_color, ";\n      box-shadow: none;\n    }\n    .shepherd-element .shepherd-content header:after {\n      clear: both;content: \"\";display: table\n    }\n    .shepherd-element .shepherd-content header .shepherd-cancel-link, .shepherd-element .shepherd-content header .shepherd-title {\n      margin: 0;padding: 0;position: relative;vertical-align: middle\n    }\n\n    .shepherd-element .shepherd-content header .shepherd-cancel-link {\n      color: hsla(0, 0%, 70.2%, .75);font-size: 2em;margin-left: auto;\n      text-decoration: none;transition: color .5s ease\n    }\n    .shepherd-element .shepherd-content header .shepherd-cancel-link:before {\n      mix-blend-mode: screen;content: \"\xD7\"\n    }\n    .shepherd-element .shepherd-content header .shepherd-cancel-link:hover {\n      mix-blend-mode: difference;\n    }\n    .shepherd-element .shepherd-content .shepherd-text {\n      text-align:").concat(text_alignment, ";\n      line-height: 1em;\n      padding:14px\n    }\n    .shepherd-element .shepherd-content .shepherd-text a,\n    .shepherd-element .shepherd-content .shepherd-text a:active,\n    .shepherd-element .shepherd-content .shepherd-text a:visited {\n      border-bottom: 1px dotted rgba(0, 0, 0, .75);color: ").concat(textContentCSS["color"], ";\n      opacity: 0.75;text-decoration: none\n    }\n    .shepherd-element .shepherd-content .shepherd-text a:active:hover, \n    .shepherd-element .shepherd-content .shepherd-text a:hover,\n    .shepherd-element .shepherd-content .shepherd-text a:visited:hover {\n      border-bottom-style: solid\n    }\n    .shepherd-element .shepherd-content .shepherd-text p {\n      margin-top: 0\n    }\n    .shepherd-element .shepherd-content .shepherd-text p:last-child {\n      margin-bottom: 0\n    }\n    .shepherd-content > .shepherd-text p {\n      font-size:  ").concat(textContentCSS["fontSize"], "px;font-family: ").concat(textContentCSS["fontFamily"], "; \n      font-weight: ").concat(textContentCSS["fontStyle"] !== "bold" ? "normal" : textContentCSS["fontStyle"], ";\n      font-style: ").concat(textContentCSS["fontStyle"] === "italic" ? "italic" : "unset", ";\n      color: ").concat(textContentCSS["color"], ";line-height:\n      ").concat(textContentCSS["fontSize"], "px;letter-spacing:0.01em;\n    }\n\n    @-webkit-keyframes cycle {\n      0% { transform: ").concat(translateDir(position, 0), "; }\n      50% { transform: ").concat(translateDir(position, 50), "; }\n      100% { transform: ").concat(translateDir(position, 100), "; }\n    }\n    @keyframes cycle {\n      0% { transform: ").concat(translateDir(position, 0), "; }\n      50% { transform: ").concat(translateDir(position, 50), "; }\n      100% { transform: ").concat(translateDir(position, 100), "; }\n    }\n    .tippy-tooltip.apxor-").concat(configId, "-step-").concat(index, "-theme {\n       animation :").concat(animation["enabled"] ? animation["type"] + " " + animation["duration"] + "ms" : "none", ";\n      animation-timing-function: ease-in-out;animation-iteration-count: infinite;\n      box-shadow: ").concat(show_shadow ? shadow : "none", ";color: ").concat(textContentCSS["color"], ";\n      opacity: ").concat(opacity, ";border-radius: ").concat(tooltipCSS["border-radius"] + "px", ";\n      background-color: ").concat(tooltipCSS["background"], ";").concat(getPropertyFrom(position), ";\n    }\n    .apxor-").concat(configId, "-step-").concat(index, "-theme  .tippy-roundarrow {\n      fill: ").concat(tooltipCSS["background"], ";\n    }\n    .tippy-tooltip[data-placement^='top'] .tippy-arrow {\n      border-top-color: ").concat(tooltipCSS["background"], ";\n    }\n    .tippy-tooltip[data-placement^='bottom'] .tippy-arrow {\n      border-bottom-color: ").concat(tooltipCSS["background"], ";\n    }\n    .tippy-tooltip[data-placement^='left'] .tippy-arrow {\n      border-left-color: ").concat(tooltipCSS["background"], ";\n    }\n    .tippy-tooltip[data-placement^='right'] .tippy-arrow {\n      border-right-color: ").concat(tooltipCSS["background"], ";\n    }\n    .shepherd-element .shepherd-content footer .shepherd-button {\n      display: inline-block;\n      vertical-align: middle;\n      border: 0;border-radius: 3px;cursor: pointer;font-family: inherit;\n      font-size: .8em;letter-spacing: .01em;line-height: 18px;margin-right: 12px;\n      padding: 8px 16px;text-transform: none;transition: all .5s ease\n    }\n    .shepherd-element .shepherd-content footer {\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px;\n      display: flex;\n      flex-direction:").concat(button_direction === DIRECTION.HORIZONTAL ? "row" : "column", ";\n  \n      align-items:center;\n      justify-content: ").concat(button_direction === DIRECTION.HORIZONTAL ? getButtonPosition(button_position) : "space-evenly", ";\n      padding: 0 .8em .8em;\n      background: ").concat(bg_color, ";\n    }\n      ");
      if (Object.keys(title_config).length > 0) {
        //display: flex;
        //padding: .7em;
        styleElement.innerHTML += "\n    .shepherd-element .shepherd-content header .shepherd-title {\n      text-align:".concat(title_alignment, ";\n      color: ").concat(titleContentCSS["color"], ";display: block;flex: 1 0 auto;\n      font-size:  ").concat(titleContentCSS["fontSize"], "px;font-family: ").concat(titleContentCSS["fontFamily"], ";\n      font-weight: ").concat(titleContentCSS["fontStyle"] !== "bold" ? "normal" : titleContentCSS["fontStyle"], ";font-style: ").concat(titleContentCSS["fontStyle"] === "italic" ? "italic" : "unset", ";\n      line-height: ").concat(titleContentCSS["fontSize"], "px;letter-spacing:0.01em;padding: 14px;padding-bottom: 0px;max-width: calc(").concat(Math.ceil(fontMultiplier * 400), "px);\n    }\n    .shepherd-element .shepherd-content .shepherd-text {\n      padding-top:4px;\n    }\n    ");
      }
      if (buttons_css.length > 0) {
        var _buttons_css$ = buttons_css[0],
          _bg_color = _buttons_css$.bg_color,
          text_color = _buttons_css$.text_color,
          size = _buttons_css$.size,
          _style = _buttons_css$.style,
          font_family = _buttons_css$.font_family,
          _buttons_css$$borders = _buttons_css$.borders,
          stroke_color = _buttons_css$$borders.stroke_color,
          radius = _buttons_css$$borders.radius,
          _buttons_css$$gradien = _buttons_css$.gradient_config,
          gradient_config = _buttons_css$$gradien === void 0 ? {} : _buttons_css$$gradien;
        var gradient_direction, gradient_c1, gradient_c2;
        var enable_gradient = gradient_config.enable_gradient || false;
        if (enable_gradient) {
          gradient_direction = gradient_config.gradient_direction || "to right";
          gradient_c1 = (gradient_config === null || gradient_config === void 0 ? void 0 : gradient_config.colors[0]) || COLORS.BLACK;
          gradient_c2 = (gradient_config === null || gradient_config === void 0 ? void 0 : gradient_config.colors[1]) || COLORS.WHITE;
        }
        styleElement.innerHTML += "\n    .shepherd-element .shepherd-content footer .shepherd-button.button-o {\n      cursor: pointer;\n      background-color: ".concat(_bg_color === "#" ? "transparent" : _bg_color, ";\n      color: ").concat(text_color, ";font-size: ").concat(size, "px;font-family: ").concat(font_family, ";\n      font-weight: ").concat(_style !== "bold" ? "normal" : _style, ";\n      font-style: ").concat(_style === "italic" ? "italic" : "unset", ";\n      border: 0px solid ").concat(stroke_color, ";border-radius: ").concat(radius, "px;\n      ").concat(enable_gradient ? "background-image:linear-gradient(".concat(gradient_direction, ", ").concat(gradient_c1, ", ").concat(gradient_c2, ");") : "", "\n      margin-right:").concat(_bg_color === "#" ? 0 : "12px", ";\n    }\n    ");
      }
      if (buttons_css.length > 1) {
        var _buttons_css$2 = buttons_css[1],
          _bg_color2 = _buttons_css$2.bg_color,
          _text_color = _buttons_css$2.text_color,
          _size = _buttons_css$2.size,
          _style2 = _buttons_css$2.style,
          _font_family = _buttons_css$2.font_family,
          _buttons_css$2$border = _buttons_css$2.borders,
          _stroke_color = _buttons_css$2$border.stroke_color,
          _radius = _buttons_css$2$border.radius,
          _buttons_css$2$gradie = _buttons_css$2.gradient_config,
          _gradient_config = _buttons_css$2$gradie === void 0 ? {} : _buttons_css$2$gradie;
        var _gradient_direction, _gradient_c, _gradient_c2;
        var _enable_gradient = _gradient_config.enable_gradient || false;
        if (_enable_gradient) {
          _gradient_direction = _gradient_config.gradient_direction || "to right";
          _gradient_c = (_gradient_config === null || _gradient_config === void 0 ? void 0 : _gradient_config.colors[0]) || COLORS.BLACK;
          _gradient_c2 = (_gradient_config === null || _gradient_config === void 0 ? void 0 : _gradient_config.colors[1]) || COLORS.WHITE;
        }
        styleElement.innerHTML += "\n    .shepherd-element .shepherd-content footer .shepherd-button.button-t {\n      cursor: pointer;\n      background-color: ".concat(_bg_color2 === "#" ? "transparent" : _bg_color2, ";\n      color: ").concat(_text_color, ";font-size: ").concat(_size, "px;font-family: ").concat(_font_family, ";\n      font-weight: ").concat(_style2 !== "bold" ? "normal" : _style2, ";\n      font-style: ").concat(_style2 === "italic" ? "italic" : "unset", ";\n      ").concat(_enable_gradient ? "background-image:linear-gradient(".concat(_gradient_direction, ", ").concat(_gradient_c, ", ").concat(_gradient_c2, ");") : "", "\n      border: 0px solid ").concat(_stroke_color, ";border-radius: ").concat(_radius, "px;\n    }\n    ");
      }

      // dummySpan.appendChild(styleElement);
      // button.parentNode.insertBefore(dummySpan, button);
      document.head.appendChild(styleElement);

      // .shepherd-element .shepherd-content footer .shepherd-button:hover {
      //     background: ${primary_button_bg_color}77;
      // }

      // .shepherd-element .shepherd-content footer .shepherd-button.shepherd-button-secondary {
      //     background: ${secondary_button_bg_color};
      //     color: ${secondary_button_font_color};
      // }

      // .shepherd-element .shepherd-content footer .shepherd-button.shepherd-button-secondary:hover {
      //     background: ${secondary_button_bg_color}88;
      // }

      // .shepherd-element .shepherd-content footer .shepherd-button:last-child {
      //     margin-right: 0
      // }
      return styleElement;
    }
    var styleSpan = applyCSS();
    var targetElement = getElementFromSelector(view_id); //document.getElementById(view_id);
    var styleDiv = document.getElementById("apxor-".concat(configId, "-step-").concat(index));
    var clickListener = function clickListener(e) {
      onClickCallback(configId, configName, false, dismiss_target_touch);
    };
    var onHidden = function onHidden() {
      var _document$getElementB, _document$getElementB2, _styleDiv$parentNode, _window2;
      try {
        var _ApxorWalkthroughTour;
        (_ApxorWalkthroughTour = ApxorWalkthroughTour) === null || _ApxorWalkthroughTour === void 0 || _ApxorWalkthroughTour.complete();
      } catch (e) {
        console.error(e);
      }
      if (dismiss_outside_touch === true) {
        document.body.removeEventListener("touchmove", dismissOnScroll);
      }
      // Detach the observer
      targetDeletionObserver.disconnect();
      viewPortObservor.disconnect();
      (_document$getElementB = document.getElementById("shepherdModalOverlayContainer")) === null || _document$getElementB === void 0 || _document$getElementB.remove();
      (_document$getElementB2 = document.getElementById("apxor-style-" + configId + "-step-" + index)) === null || _document$getElementB2 === void 0 || _document$getElementB2.remove();
      var tippy_styles = document.querySelector("style[data-tippy-stylesheet]");
      if (tippy_styles) {
        tippy_styles.remove();
      }
      styleDiv === null || styleDiv === void 0 || (_styleDiv$parentNode = styleDiv.parentNode) === null || _styleDiv$parentNode === void 0 || _styleDiv$parentNode.removeChild(styleDiv);
      (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.Apxor) === null || _window2 === void 0 || _window2.updateFlag(false);
      if (!(buttonAction !== null && (buttonAction === "redirect" || buttonAction === "cancel"))) {
        window.Apxor.logActionEvent("inline_dismissed", configId, configName);
      }
      rtmInstance.isShowingAction = false;
      rtmInstance.currentAction = null;
      targetElement.removeEventListener("click", clickListener);
    };
    var scrolledToView = false;
    if (isElementInViewport(targetElement)) {
      if (isElementCovered(targetElement)) {
        var _window3, _window3$updateFlag;
        console.info("The tooltip is not visible because another element is overlapping the target element.");
        (_window3 = window) === null || _window3 === void 0 || (_window3 = _window3.Apxor) === null || _window3 === void 0 || (_window3$updateFlag = _window3.updateFlag) === null || _window3$updateFlag === void 0 || _window3$updateFlag.call(_window3, false);
        return;
      }
    }

    // Add MutationObserver to the target element
    var targetDeletionObserver = new MutationObserver(function () {
      if (!document.body.contains(targetElement)) {
        // Indicates that element is removed from DOM
        document.getElementById("shepherdModalOverlayContainer").remove();
        var nodes = document.getElementsByClassName("apxor-".concat(configId, "-step-").concat(index, "-theme"));
        if (nodes.length > 0 && nodes[0] && nodes[0].parentNode) {
          nodes[0].parentNode.remove();
        }
        onHidden();
      }
    });
    var viewPortObservor = new IntersectionObserver(function () {
      var elementInViewPort = isElementInViewport(targetElement);
      if (!elementInViewPort && scrolledToView) {
        // Indicates that element is removed from DOM
        document.getElementById("shepherdModalOverlayContainer").remove();
        var nodes = document.getElementsByClassName("apxor-".concat(configId, "-step-").concat(index, "-theme"));
        if (nodes.length > 0 && nodes[0] && nodes[0].parentNode) {
          nodes[0].parentNode.remove();
        }
        onHidden();
      }
      if (elementInViewPort) {
        scrolledToView = true;
        if (isElementCovered(targetElement)) {
          var _window4, _window4$updateFlag;
          console.info("The tooltip is not visible because another element is overlapping the target element.");
          (_window4 = window) === null || _window4 === void 0 || (_window4 = _window4.Apxor) === null || _window4 === void 0 || (_window4$updateFlag = _window4.updateFlag) === null || _window4$updateFlag === void 0 || _window4$updateFlag.call(_window4, false);
          return;
        }
      }
    });
    if (dismiss_outside_touch === true) {
      dismissOnScroll = function dismissOnScroll() {
        var _document$getElementB3;
        (_document$getElementB3 = document.getElementById("shepherdModalOverlayContainer")) === null || _document$getElementB3 === void 0 || _document$getElementB3.remove();
        var nodes = document.getElementsByClassName("apxor-".concat(configId, "-step-").concat(index, "-theme"));
        if (nodes.length > 0 && nodes[0] && nodes[0].parentNode) {
          nodes[0].parentNode.remove();
        }
        onHidden();
      };
      document.body.addEventListener("touchmove", dismissOnScroll);
    }
    var textContent;
    if ((text_config === null || text_config === void 0 || (_text_config$segments = text_config.segments) === null || _text_config$segments === void 0 ? void 0 : _text_config$segments.length) > 0) {
      textContent = getStylisedText(text_config === null || text_config === void 0 ? void 0 : text_config.text, text_config === null || text_config === void 0 ? void 0 : text_config.segments, text_config === null || text_config === void 0 ? void 0 : text_config.quote, text_config === null || text_config === void 0 ? void 0 : text_config.link_config);
    } else {
      textContent = [text_config && text_config.text ? text_config.text : "Tap here"];
    }
    var titleContent = getStylisedText(title_config === null || title_config === void 0 ? void 0 : title_config.text, title_config === null || title_config === void 0 ? void 0 : title_config.segments, title_config === null || title_config === void 0 ? void 0 : title_config.quote, title_config === null || title_config === void 0 ? void 0 : title_config.link_config);
    ApxorWalkthroughTour.addStep("apxor-step-" + index, {
      title: titleContent === "" ? null : titleContent.outerHTML,
      text: textContent,
      classes: "apxor-".concat(configId, "-step-").concat(index, "-theme"),
      attachTo: {
        element: button,
        on: position.toLowerCase()
      },
      showCancelLink: show_close_icon,
      buttons: buttons_array,
      tippyOptions: {
        allowHTML: true,
        arrow: true,
        flipOnUpdate: true,
        interactive: true,
        maxWidth: "100%",
        hideOnClick: dismiss_outside_touch,
        escapeWithReference: escapeWithReference,
        theme: "apxor-".concat(configId, "-step-").concat(index),
        onShow: function onShow() {
          var _window5, _window5$updateFlag;
          (_window5 = window) === null || _window5 === void 0 || (_window5 = _window5.Apxor) === null || _window5 === void 0 || (_window5$updateFlag = _window5.updateFlag) === null || _window5$updateFlag === void 0 || _window5$updateFlag.call(_window5, true);
          window.Apxor.logActionEvent("inline_shown", configId, configName);
          if (is_preview) setTimeout(function () {
            var _window6, _window6$logInternalE;
            (_window6 = window) === null || _window6 === void 0 || (_window6 = _window6.Apxor) === null || _window6 === void 0 || (_window6$logInternalE = _window6.logInternalEvent) === null || _window6$logInternalE === void 0 || _window6$logInternalE.call(_window6, "capt");
          }, 500);
          window.Apxor.updateCount(configId);
          rtmInstance.isShowingAction = true;
          targetElement.addEventListener("click", clickListener);

          // Attach the observer upon show
          targetDeletionObserver.observe(document.body, {
            childList: true,
            subtree: true
          });
          viewPortObservor.observe(targetElement);
        },
        onHidden: onHidden
      }
    });
  }
  var showTooltip = function showTooltip(uiConfig, walkthroughConfigs, terminationConfig, messageConfig, rtmInstance) {
    var isWalkthrough = Array.isArray(walkthroughConfigs) && walkthroughConfigs.length > 0;
    var delay = uiConfig.delay,
      dim_background = uiConfig.dim_background,
      view_id = uiConfig.view_id,
      _uiConfig$find_interv = uiConfig.find_interval,
      find_interval = _uiConfig$find_interv === void 0 ? 0 : _uiConfig$find_interv,
      _uiConfig$max_find_in = uiConfig.max_find_interval,
      max_find_interval = _uiConfig$max_find_in === void 0 ? 10000 : _uiConfig$max_find_in,
      _uiConfig$scrollToVie = uiConfig.scrollToView,
      scrollToView = _uiConfig$scrollToVie === void 0 ? true : _uiConfig$scrollToVie;
    var scrollTo = false;
    // when dim-dim_background is true and scrollToView is false and element is not in viewport then a black mask is applied to the webview and scrolling behaviour doesn't work, to resolve it the below case is written.
    if (dim_background && !isElementInViewport(getElementFromSelector(view_id))) {
      scrollTo = {
        behavior: "smooth",
        block: "center"
      };
    }
    if (scrollToView) {
      scrollTo = {
        behavior: "smooth",
        block: "center"
      };
    }
    ApxorWalkthroughTour = new Shepherd.Tour({
      defaultStepOptions: {
        scrollTo: scrollTo
      },
      useModalOverlay: isWalkthrough || dim_background
    });
    var getViewElement = function getViewElement() {
      var element = getElementFromSelector(view_id);
      return element;
    };
    var checkViewPortAndAddStep = function checkViewPortAndAddStep(element) {
      try {
        var rect = element.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
          console.warn("Width and height are 0 for: ", view_id, ". Can't show");
          return;
        }
      } catch (e) {
        console.error(e);
      }
      if (isWalkthrough) {
        walkthroughConfigs.forEach(function (config, index) {
          var ui = config.ui;
          addTourStep(ui, terminationConfig, messageConfig, rtmInstance, index);
        });
      } else {
        addTourStep(uiConfig, terminationConfig, messageConfig, rtmInstance);
      }
      if (rtmInstance.isShowingAction) {
        console.error("An action already being shown");
        return;
      }
      try {
        ApxorWalkthroughTour.start();
        rtmInstance.isShowingAction = true;
      } catch (e) {
        console.error(e);
      }
    };

    // Continuously recheck for the HTML element after a configured find_interval.
    // For now we are checking for 10sec. Later we can take this from the configuration.
    var recheckViewElementAndAddStep = function recheckViewElementAndAddStep(view_id) {
      var recheckStartedAt = new Date();
      //For every find_interval
      var elementRecheckIntervalId = setInterval(function () {
        var element = getViewElement();
        //If the element is found, stop checking and create a step
        if (element) {
          clearInterval(elementRecheckIntervalId);
          checkViewPortAndAddStep(element);
        } else {
          var currentTime = new Date();
          // If the element is not found even after 10sec, stop checking
          if (currentTime - recheckStartedAt > max_find_interval) {
            clearInterval(elementRecheckIntervalId);
            console.warn("Element with id:".concat(view_id, " not found."));
          }
        }
      }, find_interval);
    };
    setTimeout(function () {
      var element = getViewElement();
      if (!element) {
        console.warn("Element with id:".concat(view_id, " not found."));
        if (find_interval) {
          console.warn("Rechecking");
          recheckViewElementAndAddStep(view_id);
        }
      } else {
        checkViewPortAndAddStep(element);
      }
    }, delay);
    if (terminationConfig["auto_dismiss"] === true) {
      setTimeout(function () {
        ApxorWalkthroughTour.complete();
      }, delay + terminationConfig["duration"]);
    }
    var dismiss_callback = function dismiss_callback() {
      window.Apxor.logActionEvent("inline_dismissed", messageConfig.configId, messageConfig.configName);
      ApxorWalkthroughTour.complete();
    };
    return dismiss_callback;
  };

  var DEFAULT_PADDING = 5;
  var fontMultiplier = 1;
  var currentId = makeid(10);
  function getDocumentOffsetPosition(el) {
    var rect = el.getBoundingClientRect();

    // Add window scroll position to get the offset position
    // relative to the document but not viewport.
    var left = rect.left + window.scrollX;
    var top = rect.top + window.scrollY;
    var right = rect.right + window.scrollX;
    var bottom = rect.bottom + window.scrollY;

    // polyfill missing 'x' and 'y' rect properties not returned
    // from getBoundingClientRect() by older browsers
    var x = isDefined(rect.x) ? rect.x + window.scrollX : left;
    var y = isDefined(rect.y) ? rect.y + window.scrollY : top;

    // width and height are the same
    var width = rect.width;
    var height = rect.height;
    return {
      left: left,
      top: top,
      right: right,
      bottom: bottom,
      x: x,
      y: y,
      width: width,
      height: height
    };
  }
  function createTitleDescriptionButtons(text_config) {
    var title_config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var buttons_config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var button_position = arguments.length > 3 ? arguments[3] : undefined;
    var button_direction = arguments.length > 4 ? arguments[4] : undefined;
    var uuid = arguments.length > 5 ? arguments[5] : undefined;
    var name = arguments.length > 6 ? arguments[6] : undefined;
    var on_dismiss = arguments.length > 7 ? arguments[7] : undefined;
    var element = null;
    if (!title_config && text_config) {
      element = createTextElement(text_config, currentId, "title", fontMultiplier);
      /*element = document.createElement("div");
      element.style.textAlign = text_config?.alignment || "center";
      element.appendChild(createTextElement(text_config, currentId));*/
    } else if (title_config && text_config) {
      element = document.createElement("div");
      element.style.display = "inline-flex";
      element.style.flexDirection = "column";
      element.style.visibility = "hidden";
      element.style.textAlign = (text_config === null || text_config === void 0 ? void 0 : text_config.alignment) || "center";
      element.style.lineHeight = "26px";
      element.style.letterSpacing = "0.01em";
      element.appendChild(createTextElement(title_config, currentId, "title", fontMultiplier));
      element.appendChild(createTextElement(text_config, currentId, "desc", fontMultiplier));
    }
    if (buttons_config && buttons_config.length > 0) {
      var buttons = document.createElement("footer");
      buttons.className = "shepherd-footer";
      buttons.style.zIndex = 99999;
      buttons.style.margin = "8px";
      buttons.style.padding = "0";
      var hideCallback = function hideCallback(action) {
        if (on_dismiss) on_dismiss(action);
      };
      var _generateButtons = generateButtons(buttons_config, {
          prev: hideCallback,
          next: hideCallback,
          complete: hideCallback,
          cancel: hideCallback
        }, uuid, name),
        buttons_array = _generateButtons.buttons_array,
        buttons_css = _generateButtons.buttons_css;
      var buttonsStyle = document.createElement("style");
      buttonsStyle.innerHTML = getButtonsCSS(buttons_css, button_position, button_direction);
      buttons.appendChild(buttonsStyle);
      buttons_array.forEach(function (button_data) {
        var classes = button_data.classes,
          text = button_data.text,
          action = button_data.action;
        var newButton = document.createElement("button");
        newButton.className = "shepherd-button " + classes;
        newButton.innerHTML = text;
        newButton.onclick = function () {
          return action();
        };
        buttons.appendChild(newButton);
      });
      var template = document.createElement("div");
      template.style.display = "inline-flex";
      template.style.flexDirection = "column";
      template.style.visibility = "hidden";
      template.appendChild(element);
      template.appendChild(buttons);
      element = template;
    }
    element.style.position = "absolute";
    document.body.appendChild(element);
    return element;
  }
  function addRippleStyles(type, width, height) {
    return "\n<style>\n.ripple-animator {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  height: ".concat(height, "px !important;\n  width: ").concat(width, "px !important;\n  border-radius: ").concat(type === "circle" ? "100%" : "0", ";\n}\n.ripple-animator span {\n  position: relative;\n  font-size: 72px;\n  top: 5px;left: -5px;\n}\n\n.ripple-animator:before,\n.ripple-animator:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0; \n  right: 0; \n  bottom: 0; \n  left: 0;\n  opacity:1;\n  z-index:10;\n  border: 0px solid white;\n  border-radius: ").concat(type === "circle" ? "100%" : "0%", ";\n  z-index: 99999;\n}\n\n.ripple-animator:before {\n  animation: ripple 1s infinite ease-out;\n}\n\n@keyframes ripple{\n  0% { \n    border: 0px solid white;\n    transform: scale(0.8); \n  }\n  100% { \n    border: 20px solid white;\n    transform: scale(1.5); \n    opacity:0; \n  }\n}\n</style>");
  }
  function createInnerCircle(width, height, left, top, type, has_ripple) {
    var newWidth = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    var newHeight = newWidth;
    var newLeft = left - (newWidth - width) / 2;
    var newTop = top - (newWidth - height) / 2;
    if (type != "circle") {
      newWidth = width;
      newHeight = height;
      newLeft = left;
      newTop = top;
    }
    var element = document.createElement("div");
    element.setAttribute("id", currentId + "-ripple-div");
    if (has_ripple) {
      element.innerHTML = addRippleStyles(type, newWidth, newHeight);
    }
    element.style.position = "absolute";
    element.style.width = "".concat(newWidth, "px");
    element.style.height = "".concat(newHeight, "px");
    element.style.left = "".concat(newLeft, "px");
    element.style.top = "".concat(newTop, "px");
    element.classList.add("ripple-animator");
    // element.style.backgroundColor = "#fff";
    element.style.borderRadius = "".concat(type === "circle" ? "50%" : "0");
    // element.style.boxShadow = "rgb(255 255 255) 0px 0px 20px 15px";
    element.style.visibility = "hidden";
    document.body.appendChild(element);
    return element;
  }
  function getSVG(maskChild, svgChild) {
    return "\n  <svg\n    height=\"".concat(document.scrollingElement.scrollHeight, "\" \n    width=\"").concat(document.scrollingElement.scrollWidth, "\"\n    class=\"apx-fade-in\">\n    <defs>\n      <mask\n        id=\"apx-mask\"\n        x=\"0\"\n        y=\"0\"\n        height=\"").concat(document.scrollingElement.scrollHeight, "\" \n        width=\"").concat(document.scrollingElement.scrollWidth, "\">\n        ").concat(maskChild, "\n      </mask>\n    </defs>\n    ").concat(svgChild, "\n  </svg>\n  ");
  }
  function getCircleSVG(data) {
    var bg_color = data.bg_color,
      opacity = data.opacity,
      innerRadius = data.innerRadius,
      innerCenterX = data.innerCenterX,
      innerCenterY = data.innerCenterY,
      outerRadius = data.outerRadius,
      outerCircleCenterX = data.outerCircleCenterX,
      outerCircleCenterY = data.outerCircleCenterY;
    var maskChild = "\n  <rect\n    x=\"".concat(outerCircleCenterX - outerRadius, "\"\n    y=\"").concat(outerCircleCenterY - outerRadius < 0 ? 0 : outerCircleCenterY - outerRadius, "\"\n    height=\"").concat(outerRadius * 2, "\"\n    width=\"").concat(outerRadius * 2, "\"\n    fill=\"#fff\" />\n  <circle\n    cx=\"").concat(innerCenterX, "\"\n    cy=\"").concat(innerCenterY, "\"\n    r=\"").concat(innerRadius, "\" />\n  ");
    var svgChild = "\n  <circle\n    cx=\"".concat(outerCircleCenterX, "\" \n    cy=\"").concat(outerCircleCenterY, "\" \n    r=\"").concat(outerRadius, "\" \n    fill=\"").concat(bg_color, "\" \n    fill-opacity=\"").concat(opacity, "\"\n    mask=\"url(#apx-mask)\" />\n  ");
    return getSVG(maskChild, svgChild);
  }
  function getRectangleSVG(data) {
    var bg_color = data.bg_color,
      opacity = data.opacity,
      targetElementLeft = data.targetElementLeft,
      targetElementTop = data.targetElementTop,
      targetElementWidth = data.targetElementWidth,
      targetElementHeight = data.targetElementHeight;
    var maskChild = "\n  <rect\n    x=\"0\" y=\"0\"\n    height=\"".concat(document.scrollingElement.scrollHeight, "\" \n    width=\"").concat(document.scrollingElement.scrollWidth, "\" \n    fill=\"#fff\" />\n  <rect\n    x=\"").concat(targetElementLeft, "\" \n    y=\"").concat(targetElementTop, "\" \n    width=\"").concat(targetElementWidth, "\" \n    height=\"").concat(targetElementHeight, "\" />\n  ");
    var svgChild = "\n  <rect\n    x=\"0\" y=\"0\"\n    height=\"".concat(document.scrollingElement.scrollHeight, "\" \n    width=\"").concat(document.scrollingElement.scrollWidth, "\" \n    mask=\"url(#apx-mask)\"\n    fill=\"").concat(bg_color, "\" \n    fill-opacity=\"").concat(opacity, "\" />\n  ");
    return getSVG(maskChild, svgChild);
  }
  function createSVGDiv(data) {
    var opacity = data.opacity,
      type = data.type;
    var svgElement = document.createElement("div");
    svgElement.setAttribute("id", currentId + "-svg");
    svgElement.style.position = "absolute";
    svgElement.style.left = 0;
    svgElement.style.top = 0;
    svgElement.style.zIndex = 99998;
    svgElement.style.width = "100%";
    svgElement.style.height = "99%";
    var svg = "";
    if (type === "circle") {
      svg = getCircleSVG(data);
    } else {
      svg = getRectangleSVG(data);
    }
    svgElement.innerHTML = "\n  <style>\n    @keyframes apx-anim {\n      from {\n        opacity: 0;\n      }\n\n      to {\n        opacity: ".concat(opacity, ";\n      }\n    }\n    .apx-fade-in {\n      animation: apx-anim 0.4s linear;\n    }\n  </style>\n  ").concat(svg);
    document.body.appendChild(svgElement);
    return svgElement;
  }
  function showCoachmark(ui_config, campaignConfig, termination_config, on_shown, on_dismissed) {
    var bg_color = ui_config.bg_color,
      _ui_config$buttons_co = ui_config.buttons_config,
      buttons_config = _ui_config$buttons_co === void 0 ? [] : _ui_config$buttons_co,
      button_position = ui_config.button_position,
      _ui_config$button_dir = ui_config.button_direction,
      button_direction = _ui_config$button_dir === void 0 ? DIRECTION.HORIZONTAL : _ui_config$button_dir,
      _ui_config$coach_mark = ui_config.coach_mark_details,
      _ui_config$coach_mark2 = _ui_config$coach_mark.has_ripple,
      has_ripple = _ui_config$coach_mark2 === void 0 ? false : _ui_config$coach_mark2,
      _ui_config$coach_mark3 = _ui_config$coach_mark.type,
      type = _ui_config$coach_mark3 === void 0 ? "circle" : _ui_config$coach_mark3,
      delay = ui_config.delay,
      _ui_config$dismiss_ou = ui_config.dismiss_outside_touch,
      dismiss_outside_touch = _ui_config$dismiss_ou === void 0 ? false : _ui_config$dismiss_ou,
      _ui_config$opacity = ui_config.opacity,
      opacity = _ui_config$opacity === void 0 ? 0.8 : _ui_config$opacity,
      _ui_config$position = ui_config.position,
      position = _ui_config$position === void 0 ? "TOP" : _ui_config$position,
      text_config = ui_config.text_config,
      _ui_config$title_conf = ui_config.title_config,
      title_config = _ui_config$title_conf === void 0 ? null : _ui_config$title_conf,
      view_id = ui_config.view_id,
      _ui_config$iframe_id = ui_config.iframe_id,
      iframe_id = _ui_config$iframe_id === void 0 ? "" : _ui_config$iframe_id,
      _ui_config$scroll_to_ = ui_config.scroll_to_view,
      scroll_to_view = _ui_config$scroll_to_ === void 0 ? false : _ui_config$scroll_to_;
    var configId = campaignConfig.configId,
      configName = campaignConfig.configName;

    // TODO: There are different possible ways to identify the element.
    var element = getElementFromSelector(view_id, iframe_id);
    if (!element) {
      console.warn("Element not found with id or path: ", view_id);
      return;
    }
    if (isElementCovered(element)) {
      var _window, _window$updateFlag;
      console.info("The tooltip is not visible because another element is overlapping the target element.");
      (_window = window) === null || _window === void 0 || (_window = _window.Apxor) === null || _window === void 0 || (_window$updateFlag = _window.updateFlag) === null || _window$updateFlag === void 0 || _window$updateFlag.call(_window, false);
      return;
    }
    currentId = makeid(10);
    if (!scroll_to_view && !isElementInViewport(element)) {
      console.warn("Element ", view_id, " not in viewport. Can't show");
      return;
    }
    var scrolledToView = false;
    // Add MutationObserver to the target element
    var targetDeletionObserver = new MutationObserver(function () {
      if (!document.body.contains(element)) {
        will_dismiss();
      }
    });
    var viewPortObservor = new IntersectionObserver(function () {
      var elementInViewPort = isElementInViewport(element);
      if (!elementInViewPort && scrolledToView) {
        will_dismiss();
      }
      if (elementInViewPort) {
        scrolledToView = true;
      }
    });
    var rect = getDocumentOffsetPosition(element);
    var _rect$left = rect.left,
      targetElementLeft = _rect$left === void 0 ? 0 : _rect$left,
      _rect$top = rect.top,
      targetElementTop = _rect$top === void 0 ? 0 : _rect$top,
      _rect$width = rect.width,
      targetElementWidth = _rect$width === void 0 ? 0 : _rect$width,
      _rect$height = rect.height,
      targetElementHeight = _rect$height === void 0 ? 0 : _rect$height;
    var isFirstHalf = rect.left < window.innerWidth / 2;
    if (targetElementHeight === 0 || targetElementWidth === 0) {
      console.warn("Can't show on an invisible element: ", view_id);
      return;
    }
    var will_dismiss = function will_dismiss(action) {
      // Detach the observer
      targetDeletionObserver.disconnect();
      viewPortObservor.disconnect();
      svgElement.parentNode.removeChild(svgElement);
      textElement.parentNode.removeChild(textElement);
      transparentCircle.parentNode.removeChild(transparentCircle);
      if (on_dismissed) on_dismissed(action);
      if (autoDismissCallback) clearTimeout(autoDismissCallback);
    };
    var textElement = createTitleDescriptionButtons(text_config, title_config, buttons_config, button_position, button_direction, configId, configName, will_dismiss);
    var textElemOffsetWidth = textElement.offsetWidth;
    var textElemOffsetHeight = textElement.offsetHeight;
    // let marginLeft = 0;
    // let marginRight = 0;
    // if (text_config && text_config.margin_config) {
    //   marginLeft = Number(text_config.margin_config.left) || 0;
    //   marginRight = Number(text_config.margin_config.right) || 0;
    // }

    var transparentCircle = createInnerCircle(targetElementWidth, targetElementHeight, targetElementLeft, targetElementTop, type, has_ripple);
    var innerCenterX = targetElementLeft + targetElementWidth / 2;
    var innerCenterY = targetElementTop + targetElementHeight / 2;
    var innerRadius = Math.sqrt(Math.pow(targetElementWidth, 2) + Math.pow(targetElementHeight, 2)) / 2;
    var outerRadius = innerRadius + Math.max(textElemOffsetWidth, targetElementWidth) / 2 + 2 * DEFAULT_PADDING;

    // Calculate the text element and outer center Y positions
    var textElementOffsetTop = -1;
    var textElementOffsetLeft = -1;
    var left = -1;
    var outerCircleCenterY = -1;
    var innerCircleTop = innerCenterY - innerRadius;
    var innerCircleBottom = innerCenterY + innerRadius;
    switch (position) {
      case "TOP":
        left = innerCenterX - textElemOffsetWidth / 2;
        textElementOffsetLeft = left < 0 ? DEFAULT_PADDING : left;
        if (type === "circle") {
          textElementOffsetTop = innerCenterY - innerRadius - textElemOffsetHeight - 25;
        } else {
          textElementOffsetTop = targetElementTop - textElemOffsetHeight - 25;
        }
        outerCircleCenterY = innerCircleBottom - Math.abs(innerCircleBottom - textElementOffsetTop) / 2;
        break;
      case "BOTTOM":
      case "RIGHT":
      case "LEFT":
        left = innerCenterX - textElemOffsetWidth / 2;
        textElementOffsetLeft = left < 0 ? DEFAULT_PADDING : left;
        if (type === "circle") {
          textElementOffsetTop = innerCenterY + innerRadius + 25;
        } else {
          textElementOffsetTop = targetElementTop + targetElementHeight + 25;
        }
        outerCircleCenterY = innerCircleTop + (textElementOffsetTop + textElemOffsetHeight - innerCircleTop) / 2;
        break;
    }
    if (textElementOffsetLeft === -1 || textElementOffsetTop === -1 || outerCircleCenterY === -1) {
      console.warn("Failed to identify the right place for text");
      return;
    }

    // Position Text element
    if (!isFirstHalf && textElementOffsetLeft + textElemOffsetWidth > window.innerWidth) {
      // textElementOffsetLeft =
      //   window.innerWidth - textElemOffsetWidth - marginLeft - marginRight - 10;
      textElementOffsetLeft = window.innerWidth - textElemOffsetWidth - 10;
    }
    textElement.style.left = "".concat(textElementOffsetLeft, "px");
    textElement.style.top = "".concat(textElementOffsetTop, "px");

    // Calculate outer circle center X position
    left = Math.min(targetElementLeft, textElementOffsetLeft);
    var right = Math.max(targetElementLeft + targetElementWidth, textElementOffsetLeft + textElemOffsetWidth);
    var outerCircleCenterX = (left + right) / 2;
    outerCircleCenterX = Math.min(outerCircleCenterX, document.scrollingElement.scrollWidth);
    if (outerCircleCenterX < 0) {
      outerCircleCenterX = 0;
    }
    outerCircleCenterY = Math.min(outerCircleCenterY, document.scrollingElement.scrollHeight);
    if (outerCircleCenterY < 0) {
      outerCircleCenterY = 0;
    }
    var svgElement = createSVGDiv({
      bg_color: bg_color,
      opacity: opacity,
      innerRadius: innerRadius,
      innerCenterX: innerCenterX,
      innerCenterY: innerCenterY,
      outerRadius: outerRadius,
      outerCircleCenterX: outerCircleCenterX,
      outerCircleCenterY: outerCircleCenterY,
      targetElementLeft: targetElementLeft,
      targetElementTop: targetElementTop,
      targetElementWidth: targetElementWidth,
      targetElementHeight: targetElementHeight,
      type: type
    });
    svgElement.style.visibility = "hidden";
    transparentCircle.style.visibility = "hidden";
    textElement.style.visibility = "hidden";
    var autoDismissCallback = null;
    var dismissCallback = function dismissCallback(e) {
      var isUserHitTarget = false;
      var autoDismiss = false;
      if (e === undefined) {
        autoDismiss = true;
      }
      var rect = element.getBoundingClientRect();
      if (e !== undefined && e.clientX >= rect.left && e.clientX <= rect.left + rect.width && e.clientY >= rect.top && e.clientY <= rect.top + rect.height) {
        isUserHitTarget = true;
      }
      if (dismiss_outside_touch || isUserHitTarget || autoDismiss) {
        // FIXME: Uncomment it, whenever you are confident!!
        if (isUserHitTarget && element.click) {
          element.click();
        }
        will_dismiss();
      }
    };
    if (termination_config && termination_config.auto_dismiss === true) {
      autoDismissCallback = setTimeout(function () {
        return dismissCallback();
      }, delay + termination_config.duration);
    }
    svgElement.style.visibility = "visible";
    transparentCircle.style.visibility = "visible";
    textElement.style.visibility = "visible";
    if (textElement.childElementCount > 0) {
      textElement.children[0].style.visibility = "visible";
    }
    if (dismiss_outside_touch) {
      svgElement.addEventListener("click", dismissCallback);
    }
    transparentCircle.addEventListener("click", dismissCallback);
    if (scroll_to_view) {
      if (position === "TOP") {
        window.scrollTo({
          top: outerCircleCenterY - outerRadius,
          behavior: "smooth"
        });
      } else if (position === "BOTTOM") {
        window.scrollTo({
          top: Math.min(document.scrollingElement.scrollHeight, outerCircleCenterY + outerRadius),
          behavior: "smooth"
        });
      }
    }

    // Attach the observer upon show
    targetDeletionObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
    viewPortObservor.observe(element);
    if (on_shown) on_shown();
    return dismissCallback;
  }
  function showCoachmarkWithDelay(rtmInstance, ui_config, messageconfig, termination_config, on_shown, on_dismissed, on_after_delay) {
    if (rtmInstance.currentAction !== null && rtmInstance.currentAction !== undefined) {
      console.error("An action is already being shown. Try after it gets dismissed");
      return;
    }
    if (ui_config && ui_config.delay <= 0) {
      var callback = showCoachmark(ui_config, termination_config, on_shown, on_dismissed);
      on_after_delay(callback);
      return;
    }
    setTimeout(function () {
      if (rtmInstance.currentAction !== null && rtmInstance.currentAction !== undefined) {
        console.error("An action is already being shown. Try after it gets dismissed");
        return;
      }
      var callback = showCoachmark(ui_config, messageconfig, termination_config, on_shown, on_dismissed);
      on_after_delay(callback);
    }, ui_config.delay);
  }

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements$1 = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow$1(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  function isElement$1(node) {
    var OwnElement = getWindow$1(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow$1(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    var OwnElement = getWindow$1(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];
        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules

  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: ['computeStyles']
  };

  function getBasePlacement$1(placement) {
    return placement.split('-')[0];
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function (item) {
        return item.brand + "/" + item.version;
      }).join(' ');
    }
    return navigator.userAgent;
  }

  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  function getBoundingClientRect$1(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement$1(element) ? getWindow$1(element) : window,
      visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x: x,
      y: y
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect$1(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...

        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false

    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow$1(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement$1(element) ? element.ownerDocument :
    // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode$1(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot ||
      // step into the shadow DOM of the parent of a slotted node
      element.parentNode || (
      // DOM Element detected
      isShadowRoot(element) ? element.host : null) ||
      // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback
    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) ||
    // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }
    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block

  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);
      if (elementCss.position === 'fixed') {
        return null;
      }
    }
    var currentNode = getParentNode$1(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.

  function getOffsetParent$1(element) {
    var window = getWindow$1(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }
    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow$1(_ref) {
    var _state$modifiersData$;
    var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement$1(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent$1(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }
  function effect$1(_ref2) {
    var state = _ref2.state,
      options = _ref2.options;
    var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) {
      return;
    } // CSS selector

    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules

  var arrow$2 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow$1,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x,
      y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent$1(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';
      if (offsetParent === getWindow$1(popper)) {
        offsetParent = getDocumentElement(popper);
        if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x,
      y: y
    }, getWindow$1(popper)) : {
      x: x,
      y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state,
      options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement$1(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
      isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules

  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };
  function effect$2(_ref) {
    var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
    var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow$1(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }
    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }
      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules

  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect$2,
    data: {}
  };

  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement$1(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  var hash$1 = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash$1[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow$1(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect$1(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element, strategy) {
    var win = getWindow$1(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent$1(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent$1(getParentNode$1(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent$1(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow$1(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList :
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode$1(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect$1(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`

  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode$1(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent$1(element) : element;
    if (!isElement$1(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

    return clippingParents.filter(function (clippingParent) {
      return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents

  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement$1(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect$1(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  function computeAutoPlacement$1(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements$1 : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement$1(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement$1(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement$1(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip$1(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement$1(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement$1(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement$1(placement) === auto ? computeAutoPlacement$1(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];
      var _basePlacement = getBasePlacement$1(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement$1(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement$1(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);
          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules

  var flip$2 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip$1,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }
  function hide$1(_ref) {
    var state = _ref.state,
      name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules

  var hide$2 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide$1
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement$1(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
      })) : offset,
      skidding = _ref[0],
      distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset$1(_ref2) {
    var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
    var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements$1.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules

  var offset$2 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset$1
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
      name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules

  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow$1(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement$1(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent$1(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === 'x' ? top : left;
      var _altSide = mainAxis === 'x' ? bottom : right;
      var _offset = popperOffsets[altAxis];
      var _len = altAxis === 'y' ? 'height' : 'width';
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules

  var preventOverflow$2 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow$1,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow$1(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.

  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect$1(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' ||
      // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect$1(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce$3(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }
      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers

          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent$1(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;
            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce$3(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference, popper)) {
        return instance;
      }
      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref) {
          var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;
          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });
            var noopFn = function noopFn() {};
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$2, flip$2, preventOverflow$2, arrow$2, hide$2];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  /**!
  * tippy.js v6.3.7
  * (c) 2017-2021 atomiks
  * MIT License
  */
  var BOX_CLASS = "tippy-box";
  var CONTENT_CLASS$1 = "tippy-content";
  var BACKDROP_CLASS$1 = "tippy-backdrop";
  var ARROW_CLASS$1 = "tippy-arrow";
  var SVG_ARROW_CLASS$1 = "tippy-svg-arrow";
  var TOUCH_OPTIONS = {
    passive: true,
    capture: true
  };
  var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
  };
  function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
      var v = value[index];
      return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }
    return value;
  }
  function isType(value, type) {
    var str = {}.toString.call(value);
    return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
  }
  function invokeWithArgsOrReturn$1(value, args) {
    return typeof value === 'function' ? value.apply(void 0, args) : value;
  }
  function debounce$4(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) {
      return fn;
    }
    var timeout;
    return function (arg) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn(arg);
      }, ms);
    };
  }
  function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
  }
  function normalizeToArray(value) {
    return [].concat(value);
  }
  function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  function unique(arr) {
    return arr.filter(function (item, index) {
      return arr.indexOf(item) === index;
    });
  }
  function getBasePlacement$2(placement) {
    return placement.split('-')[0];
  }
  function arrayFrom$1(value) {
    return [].slice.call(value);
  }
  function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function (acc, key) {
      if (obj[key] !== undefined) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  }
  function div$1() {
    return document.createElement('div');
  }
  function isElement$2(value) {
    return ['Element', 'Fragment'].some(function (type) {
      return isType(value, type);
    });
  }
  function isNodeList(value) {
    return isType(value, 'NodeList');
  }
  function isMouseEvent(value) {
    return isType(value, 'MouseEvent');
  }
  function isReferenceElement$1(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
  }
  function getArrayOfElements$1(value) {
    if (isElement$2(value)) {
      return [value];
    }
    if (isNodeList(value)) {
      return arrayFrom$1(value);
    }
    if (Array.isArray(value)) {
      return value;
    }
    return arrayFrom$1(document.querySelectorAll(value));
  }
  function setTransitionDuration$1(els, value) {
    els.forEach(function (el) {
      if (el) {
        el.style.transitionDuration = value + "ms";
      }
    });
  }
  function setVisibilityState$1(els, state) {
    els.forEach(function (el) {
      if (el) {
        el.setAttribute('data-state', state);
      }
    });
  }
  function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body

    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
  }
  function isCursorOutsideInteractiveBorder$1(popperTreeData, event) {
    var clientX = event.clientX,
      clientY = event.clientY;
    return popperTreeData.every(function (_ref) {
      var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
      var interactiveBorder = props.interactiveBorder;
      var basePlacement = getBasePlacement$2(popperState.placement);
      var offsetData = popperState.modifiersData.offset;
      if (!offsetData) {
        return true;
      }
      var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
      var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
      var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
      var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
      var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
      var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
      var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
      var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
      return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
  }
  function updateTransitionEndListener$1(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...

    ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
      box[method](event, listener);
    });
  }
  /**
   * Compared to xxx.contains, this function works for dom structures with shadow
   * dom
   */

  function actualContains(parent, child) {
    var target = child;
    while (target) {
      var _target$getRootNode;
      if (parent.contains(target)) {
        return true;
      }
      target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
  }
  var currentInput$1 = {
    isTouch: false
  };
  var lastMouseMoveTime$1 = 0;
  /**
   * When a `touchstart` event is fired, it's assumed the user is using touch
   * input. We'll bind a `mousemove` event listener to listen for mouse input in
   * the future. This way, the `isTouch` property is fully dynamic and will handle
   * hybrid devices that use a mix of touch + mouse input.
   */

  function onDocumentTouchStart$1() {
    if (currentInput$1.isTouch) {
      return;
    }
    currentInput$1.isTouch = true;
    if (window.performance) {
      document.addEventListener('mousemove', onDocumentMouseMove$1);
    }
  }
  /**
   * When two `mousemove` event are fired consecutively within 20ms, it's assumed
   * the user is using mouse input again. `mousemove` can fire on touch devices as
   * well, but very rarely that quickly.
   */

  function onDocumentMouseMove$1() {
    var now = performance.now();
    if (now - lastMouseMoveTime$1 < 20) {
      currentInput$1.isTouch = false;
      document.removeEventListener('mousemove', onDocumentMouseMove$1);
    }
    lastMouseMoveTime$1 = now;
  }
  /**
   * When an element is in focus and has a tippy, leaving the tab/window and
   * returning causes it to show again. For mouse users this is unexpected, but
   * for keyboard use it makes sense.
   * TODO: find a better technique to solve this problem
   */

  function onWindowBlur$1() {
    var activeElement = document.activeElement;
    if (isReferenceElement$1(activeElement)) {
      var instance = activeElement._tippy;
      if (activeElement.blur && !instance.state.isVisible) {
        activeElement.blur();
      }
    }
  }
  function bindGlobalEventListeners$1() {
    document.addEventListener('touchstart', onDocumentTouchStart$1, TOUCH_OPTIONS);
    window.addEventListener('blur', onWindowBlur$1);
  }
  var isBrowser$2 = typeof window !== 'undefined' && typeof document !== 'undefined';
  var isIE11$1 = isBrowser$2 ?
  // @ts-ignore
  !!window.msCrypto : false;
  var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
  };
  var renderProps = {
    allowHTML: false,
    animation: 'fade',
    arrow: true,
    content: '',
    inertia: false,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999
  };
  var defaultProps$1 = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
      content: 'auto',
      expanded: 'auto'
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: '',
    offset: [0, 10],
    onAfterUpdate: function onAfterUpdate() {},
    onBeforeUpdate: function onBeforeUpdate() {},
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    onClickOutside: function onClickOutside() {},
    placement: 'top',
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: 'mouseenter focus',
    triggerTarget: null
  }, pluginProps, renderProps);
  var defaultKeys = Object.keys(defaultProps$1);
  var setDefaultProps = function setDefaultProps(partialProps) {
    var keys = Object.keys(partialProps);
    keys.forEach(function (key) {
      defaultProps$1[key] = partialProps[key];
    });
  };
  function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps = plugins.reduce(function (acc, plugin) {
      var name = plugin.name,
        defaultValue = plugin.defaultValue;
      if (name) {
        var _name;
        acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps$1[name]) != null ? _name : defaultValue;
      }
      return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps);
  }
  function getDataAttributeProps$1(reference, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps$1, {
      plugins: plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function (acc, key) {
      var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();
      if (!valueAsString) {
        return acc;
      }
      if (key === 'content') {
        acc[key] = valueAsString;
      } else {
        try {
          acc[key] = JSON.parse(valueAsString);
        } catch (e) {
          acc[key] = valueAsString;
        }
      }
      return acc;
    }, {});
    return props;
  }
  function evaluateProps$1(reference, props) {
    var out = Object.assign({}, props, {
      content: invokeWithArgsOrReturn$1(props.content, [reference])
    }, props.ignoreAttributes ? {} : getDataAttributeProps$1(reference, props.plugins));
    out.aria = Object.assign({}, defaultProps$1.aria, out.aria);
    out.aria = {
      expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
      content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
    };
    return out;
  }
  var innerHTML$1 = function innerHTML() {
    return 'innerHTML';
  };
  function dangerouslySetInnerHTML(element, html) {
    element[innerHTML$1()] = html;
  }
  function createArrowElement$1(value) {
    var arrow = div$1();
    if (value === true) {
      arrow.className = ARROW_CLASS$1;
    } else {
      arrow.className = SVG_ARROW_CLASS$1;
      if (isElement$2(value)) {
        arrow.appendChild(value);
      } else {
        dangerouslySetInnerHTML(arrow, value);
      }
    }
    return arrow;
  }
  function setContent$1(content, props) {
    if (isElement$2(props.content)) {
      dangerouslySetInnerHTML(content, '');
      content.appendChild(props.content);
    } else if (typeof props.content !== 'function') {
      if (props.allowHTML) {
        dangerouslySetInnerHTML(content, props.content);
      } else {
        content.textContent = props.content;
      }
    }
  }
  function getChildren$1(popper) {
    var box = popper.firstElementChild;
    var boxChildren = arrayFrom$1(box.children);
    return {
      box: box,
      content: boxChildren.find(function (node) {
        return node.classList.contains(CONTENT_CLASS$1);
      }),
      arrow: boxChildren.find(function (node) {
        return node.classList.contains(ARROW_CLASS$1) || node.classList.contains(SVG_ARROW_CLASS$1);
      }),
      backdrop: boxChildren.find(function (node) {
        return node.classList.contains(BACKDROP_CLASS$1);
      })
    };
  }
  function render(instance) {
    var popper = div$1();
    var box = div$1();
    box.className = BOX_CLASS;
    box.setAttribute('data-state', 'hidden');
    box.setAttribute('tabindex', '-1');
    var content = div$1();
    content.className = CONTENT_CLASS$1;
    content.setAttribute('data-state', 'hidden');
    setContent$1(content, instance.props);
    popper.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);
    function onUpdate(prevProps, nextProps) {
      var _getChildren = getChildren$1(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;
      if (nextProps.theme) {
        box.setAttribute('data-theme', nextProps.theme);
      } else {
        box.removeAttribute('data-theme');
      }
      if (typeof nextProps.animation === 'string') {
        box.setAttribute('data-animation', nextProps.animation);
      } else {
        box.removeAttribute('data-animation');
      }
      if (nextProps.inertia) {
        box.setAttribute('data-inertia', '');
      } else {
        box.removeAttribute('data-inertia');
      }
      box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;
      if (nextProps.role) {
        box.setAttribute('role', nextProps.role);
      } else {
        box.removeAttribute('role');
      }
      if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
        setContent$1(content, instance.props);
      }
      if (nextProps.arrow) {
        if (!arrow) {
          box.appendChild(createArrowElement$1(nextProps.arrow));
        } else if (prevProps.arrow !== nextProps.arrow) {
          box.removeChild(arrow);
          box.appendChild(createArrowElement$1(nextProps.arrow));
        }
      } else if (arrow) {
        box.removeChild(arrow);
      }
    }
    return {
      popper: popper,
      onUpdate: onUpdate
    };
  } // Runtime check to identify if the render function is the default one; this
  // way we can apply default CSS transitions logic and it can be tree-shaken away

  render.$$tippy = true;
  var idCounter$1 = 1;
  var mouseMoveListeners$1 = []; // Used by `hideAll()`

  var mountedInstances = [];
  function createTippy$1(reference, passedProps) {
    var props = evaluateProps$1(reference, Object.assign({}, defaultProps$1, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================

    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce$4(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================

    var id = idCounter$1++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
      // Is the instance currently enabled?
      isEnabled: true,
      // Is the tippy currently showing and not transitioning out?
      isVisible: false,
      // Has the instance been destroyed?
      isDestroyed: false,
      // Is the tippy currently mounted to the DOM?
      isMounted: false,
      // Has the tippy finished transitioning in?
      isShown: false
    };
    var instance = {
      // properties
      id: id,
      reference: reference,
      popper: div$1(),
      popperInstance: popperInstance,
      props: props,
      state: state,
      plugins: plugins,
      // methods
      clearDelayTimeouts: clearDelayTimeouts,
      setProps: setProps,
      setContent: setContent,
      show: show,
      hide: hide,
      hideWithInteractivity: hideWithInteractivity,
      enable: enable,
      disable: disable,
      unmount: unmount,
      destroy: destroy
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser

    /* istanbul ignore if */

    if (!props.render) {
      return instance;
    } // ===========================================================================
    // Initial mutations
    // ===========================================================================

    var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;
    popper.setAttribute('data-tippy-root', '');
    popper.id = "tippy-" + instance.id;
    instance.popper = popper;
    reference._tippy = instance;
    popper._tippy = instance;
    var pluginsHooks = plugins.map(function (plugin) {
      return plugin.fn(instance);
    });
    var hasAriaExpanded = reference.hasAttribute('aria-expanded');
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook('onCreate', [instance]);
    if (props.showOnCreate) {
      scheduleShow();
    } // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding

    popper.addEventListener('mouseenter', function () {
      if (instance.props.interactive && instance.state.isVisible) {
        instance.clearDelayTimeouts();
      }
    });
    popper.addEventListener('mouseleave', function () {
      if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
        getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      }
    });
    return instance; // ===========================================================================
    // 🔒 Private methods
    // ===========================================================================

    function getNormalizedTouchSettings() {
      var touch = instance.props.touch;
      return Array.isArray(touch) ? touch : [touch, 0];
    }
    function getIsCustomTouchBehavior() {
      return getNormalizedTouchSettings()[0] === 'hold';
    }
    function getIsDefaultRenderFn() {
      var _instance$props$rende;

      // @ts-ignore
      return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
      return currentTarget || reference;
    }
    function getDocument() {
      var parent = getCurrentTarget().parentNode;
      return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
      return getChildren$1(popper);
    }
    function getDelay(isShow) {
      // For touch or keyboard input, force `0` delay for UX reasons
      // Also if the instance is mounted but not visible (transitioning out),
      // ignore delay
      if (instance.state.isMounted && !instance.state.isVisible || currentInput$1.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
        return 0;
      }
      return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps$1.delay);
    }
    function handleStyles(fromHide) {
      if (fromHide === void 0) {
        fromHide = false;
      }
      popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
      popper.style.zIndex = "" + instance.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
      if (shouldInvokePropsHook === void 0) {
        shouldInvokePropsHook = true;
      }
      pluginsHooks.forEach(function (pluginHooks) {
        if (pluginHooks[hook]) {
          pluginHooks[hook].apply(pluginHooks, args);
        }
      });
      if (shouldInvokePropsHook) {
        var _instance$props;
        (_instance$props = instance.props)[hook].apply(_instance$props, args);
      }
    }
    function handleAriaContentAttribute() {
      var aria = instance.props.aria;
      if (!aria.content) {
        return;
      }
      var attr = "aria-" + aria.content;
      var id = popper.id;
      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        var currentValue = node.getAttribute(attr);
        if (instance.state.isVisible) {
          node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
        } else {
          var nextValue = currentValue && currentValue.replace(id, '').trim();
          if (nextValue) {
            node.setAttribute(attr, nextValue);
          } else {
            node.removeAttribute(attr);
          }
        }
      });
    }
    function handleAriaExpandedAttribute() {
      if (hasAriaExpanded || !instance.props.aria.expanded) {
        return;
      }
      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        if (instance.props.interactive) {
          node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
        } else {
          node.removeAttribute('aria-expanded');
        }
      });
    }
    function cleanupInteractiveMouseListeners() {
      getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
      mouseMoveListeners$1 = mouseMoveListeners$1.filter(function (listener) {
        return listener !== debouncedOnMouseMove;
      });
    }
    function onDocumentPress(event) {
      // Moved finger to scroll instead of an intentional tap outside
      if (currentInput$1.isTouch) {
        if (didTouchMove || event.type === 'mousedown') {
          return;
        }
      }
      var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper

      if (instance.props.interactive && actualContains(popper, actualTarget)) {
        return;
      } // Clicked on the event listeners target

      if (normalizeToArray(instance.props.triggerTarget || reference).some(function (el) {
        return actualContains(el, actualTarget);
      })) {
        if (currentInput$1.isTouch) {
          return;
        }
        if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
          return;
        }
      } else {
        invokeHook('onClickOutside', [instance, event]);
      }
      if (instance.props.hideOnClick === true) {
        instance.clearDelayTimeouts();
        instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
        // currentTarget. This lets a tippy with `focus` trigger know that it
        // should not show

        didHideDueToDocumentMouseDown = true;
        setTimeout(function () {
          didHideDueToDocumentMouseDown = false;
        }); // The listener gets added in `scheduleShow()`, but this may be hiding it
        // before it shows, and hide()'s early bail-out behavior can prevent it
        // from being cleaned up

        if (!instance.state.isMounted) {
          removeDocumentPress();
        }
      }
    }
    function onTouchMove() {
      didTouchMove = true;
    }
    function onTouchStart() {
      didTouchMove = false;
    }
    function addDocumentPress() {
      var doc = getDocument();
      doc.addEventListener('mousedown', onDocumentPress, true);
      doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
      doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
      doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
      var doc = getDocument();
      doc.removeEventListener('mousedown', onDocumentPress, true);
      doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
      doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
      doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
      onTransitionEnd(duration, function () {
        if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
          callback();
        }
      });
    }
    function onTransitionedIn(duration, callback) {
      onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
      var box = getDefaultTemplateChildren().box;
      function listener(event) {
        if (event.target === box) {
          updateTransitionEndListener$1(box, 'remove', listener);
          callback();
        }
      } // Make callback synchronous if duration is 0
      // `transitionend` won't fire otherwise

      if (duration === 0) {
        return callback();
      }
      updateTransitionEndListener$1(box, 'remove', currentTransitionEndListener);
      updateTransitionEndListener$1(box, 'add', listener);
      currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }
      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        node.addEventListener(eventType, handler, options);
        listeners.push({
          node: node,
          eventType: eventType,
          handler: handler,
          options: options
        });
      });
    }
    function addListeners() {
      if (getIsCustomTouchBehavior()) {
        on('touchstart', onTrigger, {
          passive: true
        });
        on('touchend', onMouseLeave, {
          passive: true
        });
      }
      splitBySpaces(instance.props.trigger).forEach(function (eventType) {
        if (eventType === 'manual') {
          return;
        }
        on(eventType, onTrigger);
        switch (eventType) {
          case 'mouseenter':
            on('mouseleave', onMouseLeave);
            break;
          case 'focus':
            on(isIE11$1 ? 'focusout' : 'blur', onBlurOrFocusOut);
            break;
          case 'focusin':
            on('focusout', onBlurOrFocusOut);
            break;
        }
      });
    }
    function removeListeners() {
      listeners.forEach(function (_ref) {
        var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
        node.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }
    function onTrigger(event) {
      var _lastTriggerEvent;
      var shouldScheduleClickHide = false;
      if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
        return;
      }
      var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
      lastTriggerEvent = event;
      currentTarget = event.currentTarget;
      handleAriaExpandedAttribute();
      if (!instance.state.isVisible && isMouseEvent(event)) {
        // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved
        mouseMoveListeners$1.forEach(function (listener) {
          return listener(event);
        });
      } // Toggle show/hide when clicking click-triggered tooltips

      if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
        shouldScheduleClickHide = true;
      } else {
        scheduleShow(event);
      }
      if (event.type === 'click') {
        isVisibleFromClick = !shouldScheduleClickHide;
      }
      if (shouldScheduleClickHide && !wasFocused) {
        scheduleHide(event);
      }
    }
    function onMouseMove(event) {
      var target = event.target;
      var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
      if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
        return;
      }
      var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
        var _instance$popperInsta;
        var instance = popper._tippy;
        var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
        if (state) {
          return {
            popperRect: popper.getBoundingClientRect(),
            popperState: state,
            props: props
          };
        }
        return null;
      }).filter(Boolean);
      if (isCursorOutsideInteractiveBorder$1(popperTreeData, event)) {
        cleanupInteractiveMouseListeners();
        scheduleHide(event);
      }
    }
    function onMouseLeave(event) {
      var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;
      if (shouldBail) {
        return;
      }
      if (instance.props.interactive) {
        instance.hideWithInteractivity(event);
        return;
      }
      scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
      if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
        return;
      } // If focus was moved to within the popper

      if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
        return;
      }
      scheduleHide(event);
    }
    function isEventListenerStopped(event) {
      return currentInput$1.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
    }
    function createPopperInstance() {
      destroyPopperInstance();
      var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
      var arrow = getIsDefaultRenderFn() ? getChildren$1(popper).arrow : null;
      var computedReference = getReferenceClientRect ? {
        getBoundingClientRect: getReferenceClientRect,
        contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
      } : reference;
      var tippyModifier = {
        name: '$$tippy',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: function fn(_ref2) {
          var state = _ref2.state;
          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;
            ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
              if (attr === 'placement') {
                box.setAttribute('data-placement', state.placement);
              } else {
                if (state.attributes.popper["data-popper-" + attr]) {
                  box.setAttribute("data-" + attr, '');
                } else {
                  box.removeAttribute("data-" + attr);
                }
              }
            });
            state.attributes.popper = {};
          }
        }
      };
      var modifiers = [{
        name: 'offset',
        options: {
          offset: offset
        }
      }, {
        name: 'preventOverflow',
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: 'flip',
        options: {
          padding: 5
        }
      }, {
        name: 'computeStyles',
        options: {
          adaptive: !moveTransition
        }
      }, tippyModifier];
      if (getIsDefaultRenderFn() && arrow) {
        modifiers.push({
          name: 'arrow',
          options: {
            element: arrow,
            padding: 3
          }
        });
      }
      modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
      instance.popperInstance = createPopper(computedReference, popper, Object.assign({}, popperOptions, {
        placement: placement,
        onFirstUpdate: onFirstUpdate,
        modifiers: modifiers
      }));
    }
    function destroyPopperInstance() {
      if (instance.popperInstance) {
        instance.popperInstance.destroy();
        instance.popperInstance = null;
      }
    }
    function mount() {
      var appendTo = instance.props.appendTo;
      var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
      // it's directly after the reference element so the elements inside the
      // tippy can be tabbed to
      // If there are clipping issues, the user can specify a different appendTo
      // and ensure focus management is handled correctly manually

      var node = getCurrentTarget();
      if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
        parentNode = node.parentNode;
      } else {
        parentNode = invokeWithArgsOrReturn$1(appendTo, [node]);
      } // The popper element needs to exist on the DOM before its position can be
      // updated as Popper needs to read its dimensions

      if (!parentNode.contains(popper)) {
        parentNode.appendChild(popper);
      }
      instance.state.isMounted = true;
      createPopperInstance();
    }
    function getNestedPopperTree() {
      return arrayFrom$1(popper.querySelectorAll('[data-tippy-root]'));
    }
    function scheduleShow(event) {
      instance.clearDelayTimeouts();
      if (event) {
        invokeHook('onTrigger', [instance, event]);
      }
      addDocumentPress();
      var delay = getDelay(true);
      var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];
      if (currentInput$1.isTouch && touchValue === 'hold' && touchDelay) {
        delay = touchDelay;
      }
      if (delay) {
        showTimeout = setTimeout(function () {
          instance.show();
        }, delay);
      } else {
        instance.show();
      }
    }
    function scheduleHide(event) {
      instance.clearDelayTimeouts();
      invokeHook('onUntrigger', [instance, event]);
      if (!instance.state.isVisible) {
        removeDocumentPress();
        return;
      } // For interactive tippies, scheduleHide is added to a document.body handler
      // from onMouseLeave so must intercept scheduled hides from mousemove/leave
      // events when trigger contains mouseenter and click, and the tip is
      // currently shown as a result of a click.

      if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
        return;
      }
      var delay = getDelay(false);
      if (delay) {
        hideTimeout = setTimeout(function () {
          if (instance.state.isVisible) {
            instance.hide();
          }
        }, delay);
      } else {
        // Fixes a `transitionend` problem when it fires 1 frame too
        // late sometimes, we don't want hide() to be called.
        scheduleHideAnimationFrame = requestAnimationFrame(function () {
          instance.hide();
        });
      }
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================

    function enable() {
      instance.state.isEnabled = true;
    }
    function disable() {
      // Disabling the instance should also hide it
      // https://github.com/atomiks/tippy.js-react/issues/106
      instance.hide();
      instance.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
      if (instance.state.isDestroyed) {
        return;
      }
      invokeHook('onBeforeUpdate', [instance, partialProps]);
      removeListeners();
      var prevProps = instance.props;
      var nextProps = evaluateProps$1(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
        ignoreAttributes: true
      }));
      instance.props = nextProps;
      addListeners();
      if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
        cleanupInteractiveMouseListeners();
        debouncedOnMouseMove = debounce$4(onMouseMove, nextProps.interactiveDebounce);
      } // Ensure stale aria-expanded attributes are removed

      if (prevProps.triggerTarget && !nextProps.triggerTarget) {
        normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
          node.removeAttribute('aria-expanded');
        });
      } else if (nextProps.triggerTarget) {
        reference.removeAttribute('aria-expanded');
      }
      handleAriaExpandedAttribute();
      handleStyles();
      if (onUpdate) {
        onUpdate(prevProps, nextProps);
      }
      if (instance.popperInstance) {
        createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
        // and the nested ones get re-rendered first.
        // https://github.com/atomiks/tippyjs-react/issues/177
        // TODO: find a cleaner / more efficient solution(!)

        getNestedPopperTree().forEach(function (nestedPopper) {
          // React (and other UI libs likely) requires a rAF wrapper as it flushes
          // its work in one
          requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
        });
      }
      invokeHook('onAfterUpdate', [instance, partialProps]);
    }
    function setContent(content) {
      instance.setProps({
        content: content
      });
    }
    function show() {

      var isAlreadyVisible = instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var isTouchAndTouchDisabled = currentInput$1.isTouch && !instance.props.touch;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps$1.duration);
      if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
        return;
      } // Normalize `disabled` behavior across browsers.
      // Firefox allows events on disabled elements, but Chrome doesn't.
      // Using a wrapper element (i.e. <span>) is recommended.

      if (getCurrentTarget().hasAttribute('disabled')) {
        return;
      }
      invokeHook('onShow', [instance], false);
      if (instance.props.onShow(instance) === false) {
        return;
      }
      instance.state.isVisible = true;
      if (getIsDefaultRenderFn()) {
        popper.style.visibility = 'visible';
      }
      handleStyles();
      addDocumentPress();
      if (!instance.state.isMounted) {
        popper.style.transition = 'none';
      } // If flipping to the opposite side after hiding at least once, the
      // animation will use the wrong placement without resetting the duration

      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;
        setTransitionDuration$1([box, content], 0);
      }
      onFirstUpdate = function onFirstUpdate() {
        var _instance$popperInsta2;
        if (!instance.state.isVisible || ignoreOnFirstUpdate) {
          return;
        }
        ignoreOnFirstUpdate = true; // reflow

        void popper.offsetHeight;
        popper.style.transition = instance.props.moveTransition;
        if (getIsDefaultRenderFn() && instance.props.animation) {
          var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;
          setTransitionDuration$1([_box, _content], duration);
          setVisibilityState$1([_box, _content], 'visible');
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
        // popper has been positioned for the first time

        (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
        invokeHook('onMount', [instance]);
        if (instance.props.animation && getIsDefaultRenderFn()) {
          onTransitionedIn(duration, function () {
            instance.state.isShown = true;
            invokeHook('onShown', [instance]);
          });
        }
      };
      mount();
    }
    function hide() {

      var isAlreadyHidden = !instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps$1.duration);
      if (isAlreadyHidden || isDestroyed || isDisabled) {
        return;
      }
      invokeHook('onHide', [instance], false);
      if (instance.props.onHide(instance) === false) {
        return;
      }
      instance.state.isVisible = false;
      instance.state.isShown = false;
      ignoreOnFirstUpdate = false;
      isVisibleFromClick = false;
      if (getIsDefaultRenderFn()) {
        popper.style.visibility = 'hidden';
      }
      cleanupInteractiveMouseListeners();
      removeDocumentPress();
      handleStyles(true);
      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;
        if (instance.props.animation) {
          setTransitionDuration$1([box, content], duration);
          setVisibilityState$1([box, content], 'hidden');
        }
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      if (instance.props.animation) {
        if (getIsDefaultRenderFn()) {
          onTransitionedOut(duration, instance.unmount);
        }
      } else {
        instance.unmount();
      }
    }
    function hideWithInteractivity(event) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners$1, debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
    function unmount() {
      if (instance.state.isVisible) {
        instance.hide();
      }
      if (!instance.state.isMounted) {
        return;
      }
      destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
      // tree by default. This seems mainly for interactive tippies, but we should
      // find a workaround if possible

      getNestedPopperTree().forEach(function (nestedPopper) {
        nestedPopper._tippy.unmount();
      });
      if (popper.parentNode) {
        popper.parentNode.removeChild(popper);
      }
      mountedInstances = mountedInstances.filter(function (i) {
        return i !== instance;
      });
      instance.state.isMounted = false;
      invokeHook('onHidden', [instance]);
    }
    function destroy() {
      if (instance.state.isDestroyed) {
        return;
      }
      instance.clearDelayTimeouts();
      instance.unmount();
      removeListeners();
      delete reference._tippy;
      instance.state.isDestroyed = true;
      invokeHook('onDestroy', [instance]);
    }
  }
  function tippy$1(targets, optionalProps) {
    if (optionalProps === void 0) {
      optionalProps = {};
    }
    var plugins = defaultProps$1.plugins.concat(optionalProps.plugins || []);
    bindGlobalEventListeners$1();
    var passedProps = Object.assign({}, optionalProps, {
      plugins: plugins
    });
    var elements = getArrayOfElements$1(targets);
    var instances = elements.reduce(function (acc, reference) {
      var instance = reference && createTippy$1(reference, passedProps);
      if (instance) {
        acc.push(instance);
      }
      return acc;
    }, []);
    return isElement$2(targets) ? instances[0] : instances;
  }
  tippy$1.defaultProps = defaultProps$1;
  tippy$1.setDefaultProps = setDefaultProps;
  tippy$1.currentInput = currentInput$1;

  // every time the popper is destroyed (i.e. a new target), removing the styles
  // and causing transitions to break for singletons when the console is open, but
  // most notably for non-transform styles being used, `gpuAcceleration: false`.

  var applyStylesModifier = Object.assign({}, applyStyles$1, {
    effect: function effect(_ref) {
      var state = _ref.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: '0',
          top: '0',
          margin: '0'
        },
        arrow: {
          position: 'absolute'
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;
      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      } // intentionally return no cleanup function
      // return () => { ... }
    }
  });
  tippy$1.setDefaultProps({
    render: render
  });

  var TemplateContent = /*#__PURE__*/_createClass(function TemplateContent(_config, configId, name) {
    var _this = this,
      _config$termination;
    _classCallCheck(this, TemplateContent);
    _defineProperty(this, "createTemplateContent", function () {
      var element = _this.createContent(_this.layout);
      //document.body.appendChild(element);
      var styleElement = document.createElement("style");
      styleElement.innerHTML = _this.styleContent;
      document.head.appendChild(styleElement);
      try {
        eval(_this.script);
      } catch (e) {
        console.log("found error while executing script: ".concat(e));
      }
      return element;
    });
    _defineProperty(this, "createContent", function (config) {
      var _window$Apxor;
      var element;
      switch (config.type) {
        case "cell":
        case "img":
        case "text":
        case "button":
          element = document.createElement(EMBED_CARD_TYPE[config.type]);
          break;
        case "video":
          element = document.createElement("video");
          element.controlsList = "noplaybackrate nodownload nofullscreen";
          element.controls = true;
          element.disablePictureInPicture = true;
          element.autoplay = true;
          if (((_window$Apxor = window.Apxor) === null || _window$Apxor === void 0 ? void 0 : _window$Apxor.platform) === "ios") {
            element.playsInline = true;
          }
          if (config.source) {
            var sourceElement = document.createElement("source");
            for (var prop in config.source) {
              sourceElement[prop] = config.source[prop];
            }
            element.appendChild(sourceElement);
          }
          if (config.track) {
            var trackElement = document.createElement("track");
            for (var _prop in config.track) {
              trackElement[_prop] = config.track[_prop];
            }
            element.appendChild(trackElement);
          }
          break;
        case "svg":
          element = document.createElement("span");
          break;
        default:
          element = document.createElement(config.type);
      }
      if (config.properties) {
        for (var _prop2 in config.properties) {
          element[_prop2] = config.properties[_prop2];
        }
      }
      if (config.action) {
        var _config$action;
        var type = (_config$action = config.action) === null || _config$action === void 0 ? void 0 : _config$action.action;
        switch (type) {
          case "redirect":
            element.onclick = function () {
              window.Apxor.redirect(JSON.stringify(config.action));
            };
            break;
        }
      }
      if (config.absolute_position_children && config.absolute_position_children.length > 0) {
        element.style.position = "relative";
        config.absolute_position_children.forEach(function (childConfig) {
          var childElement = _this.createContent(childConfig);
          childElement.style.position = "absolute";
          for (var _prop3 in childConfig.offset) {
            childElement.style[_prop3] = childConfig.offset[_prop3];
          }
          element.appendChild(childElement);
        });
      }

      // Process children
      if (config.children && config.children.length > 0) {
        element.style.display = "flex";
        if (config.direction) {
          element.style.flexDirection = config.direction;
        }
        config.children.forEach(function (childConfig) {
          var childElement = _this.createContent(childConfig);
          element.appendChild(childElement);
        });
      }
      return element;
    });
    this.configId = configId;
    this.name = name;
    this.layout = _config.layout;
    this.styleContent = _config.styleSheet;
    this.termination = (_config$termination = _config.termination) !== null && _config$termination !== void 0 ? _config$termination : [];
    this.script = _config.script;
  });

  var svgNS$1 = "http://www.w3.org/2000/svg";
  var elementIds$1 = {
    modalOverlay: "tippyModalOverlayContainer",
    modalOverlayMask: "tippyModalMask",
    modalOverlayMaskRect: "tippyModalMaskRect",
    modalOverlayMaskOpening: "tippyModalMaskOpening"
  };
  var createMask = function createMask(targetElement, elementHighlighterConfig) {
    var _window, _screen;
    var containerElement = _createModalContainer$1();
    var defsElement = document.createElementNS(svgNS$1, "defs");
    var maskContainer = _createMaskContainer$1();
    var maskRect = _createMaskRect$1();
    var maskOpening = _createMaskOpening$1(elementHighlighterConfig);
    var maskOpeningBorderStyles = _createMaskOpeningBorder(elementHighlighterConfig);
    var maskConsumer = _createMaskConsumer$1();
    positionModalOpening$1(targetElement, maskOpening, maskOpeningBorderStyles, elementHighlighterConfig);
    window.addEventListener("scroll", function () {
      positionModalOpening$1(targetElement, maskOpening, maskOpeningBorderStyles, elementHighlighterConfig);
      //setAttributes(maskOpening, { "scroll-behavior": "smooth" });
    });

    if (((_window = window) === null || _window === void 0 || (_window = _window.ApxorWebView) === null || _window === void 0 ? void 0 : _window.getLayoutType()) === "web-inline") {
      window.addEventListener("updateMaskOpeningPositionOnScroll", function () {
        positionModalOpening$1(targetElement, maskOpening, maskOpeningBorderStyles, elementHighlighterConfig);
        //setAttributes(maskOpening, { "scroll-behavior": "smooth" });
      });
    }

    (_screen = screen) === null || _screen === void 0 || (_screen = _screen.orientation) === null || _screen === void 0 || _screen.addEventListener("change", function () {
      positionModalOpening$1(targetElement, maskOpening, maskOpeningBorderStyles, elementHighlighterConfig);
    });
    maskContainer.appendChild(maskRect);
    maskContainer.appendChild(maskOpening);
    defsElement.appendChild(maskContainer);
    containerElement.appendChild(defsElement);
    containerElement.appendChild(maskOpeningBorderStyles);
    containerElement.appendChild(maskConsumer);
    return containerElement;
  };

  /**
   * Set multiple attributes on an element, via a hash
   * @param {HTMLElement|SVGElement} el The element to set the attributes on
   * @param {Object} attrs A hash of key value pairs for attributes to set
   * @public
   */

  function setAttributes$1(el, attrs) {
    Object.keys(attrs).forEach(function (key) {
      el.setAttribute(key, attrs[key]);
    });
  }
  function _createModalContainer$1() {
    var element = document.createElementNS(svgNS$1, "svg");
    element.setAttributeNS(null, "id", elementIds$1.modalOverlay);
    return element;
  }
  /**
   * <mask id="shepherdModalMask" x="0" y="0" width="100%" height="100%">
   */

  function _createMaskContainer$1() {
    var element = document.createElementNS(svgNS$1, "mask");
    setAttributes$1(element, {
      height: "100%",
      id: elementIds$1.modalOverlayMask,
      width: "100%",
      x: "0",
      y: "0"
    });
    return element;
  }
  /**
   *  <rect id="modalOverlayMaskRect" x="0" y="0" width="100%" height="100%" fill="#FFFFFF"/>
   */

  function _createMaskRect$1() {
    var element = document.createElementNS(svgNS$1, "rect");
    setAttributes$1(element, {
      fill: "#FFFFFF",
      height: "100%",
      id: elementIds$1.modalOverlayMaskRect,
      width: "100%",
      x: "0",
      y: "0"
    });
    return element;
  }
  /**
   * <rect id="shepherdModalMaskOpening" fill="#000000"/>
   */

  function _createMaskOpening$1(elementHighlighterConfig) {
    var element;
    if (elementHighlighterConfig.shape === "rectangle") {
      element = document.createElementNS(svgNS$1, "rect");
      setAttributes$1(element, {
        fill: "#000000",
        id: elementIds$1.modalOverlayMaskOpening,
        rx: elementHighlighterConfig.cornerRadius,
        ry: elementHighlighterConfig.cornerRadius
      });
    } else if (elementHighlighterConfig.shape === "circle") {
      element = document.createElementNS(svgNS$1, "circle");
      setAttributes$1(element, {
        fill: "#000000",
        id: elementIds$1.modalOverlayMaskOpening
      });
    }
    return element;
  }
  /**
   * <rect x="0" y="0" width="100%" height="100%" mask="url(#shepherdModalMask)"/>
   */

  function _createMaskOpeningBorder(elementHighlighterConfig) {
    var element;
    if (elementHighlighterConfig.shape === "rectangle") {
      element = document.createElementNS(svgNS$1, "rect");
      setAttributes$1(element, {
        fill: "none",
        //id: elementIds.modalOverlayMaskOpening,
        stroke: elementHighlighterConfig.border.color,
        "stroke-width": "".concat(elementHighlighterConfig.border.width),
        "stroke-opacity": elementHighlighterConfig.border.opacity,
        rx: elementHighlighterConfig.cornerRadius,
        ry: elementHighlighterConfig.cornerRadius
      });
    } else if (elementHighlighterConfig.shape === "circle") {
      element = document.createElementNS(svgNS$1, "circle");
      setAttributes$1(element, {
        fill: "none",
        //id: elementIds.modalOverlayMaskOpening,
        stroke: elementHighlighterConfig.border.color,
        "stroke-width": "".concat(elementHighlighterConfig.border.width),
        "stroke-opacity": elementHighlighterConfig.border.opacity
      });
    }
    return element;
  }
  function _createMaskConsumer$1() {
    var element = document.createElementNS(svgNS$1, "rect");
    setAttributes$1(element, {
      height: "100%",
      width: "100%",
      x: "0",
      y: "0"
    });
    element.setAttribute("mask", "url(#".concat(elementIds$1.modalOverlayMask, ")"));
    return element;
  }
  function positionModalOpening$1(targetElement, openingElement, maskOpeningBorderStyles, elementHighlighterConfig) {
    var modalOverlayOpeningPadding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    if (targetElement.getBoundingClientRect && openingElement instanceof SVGElement && maskOpeningBorderStyles instanceof SVGElement) {
      if (elementHighlighterConfig.shape === "rectangle") {
        var _targetElement$getBou = targetElement.getBoundingClientRect(),
          x = _targetElement$getBou.x,
          y = _targetElement$getBou.y,
          width = _targetElement$getBou.width,
          height = _targetElement$getBou.height,
          left = _targetElement$getBou.left,
          top = _targetElement$getBou.top; // getBoundingClientRect is not consistent. Some browsers use x and y, while others use left and top

        setAttributes$1(openingElement, {
          x: (x || left) - modalOverlayOpeningPadding - elementHighlighterConfig.offset.left,
          y: (y || top) - modalOverlayOpeningPadding - elementHighlighterConfig.offset.top,
          width: width + modalOverlayOpeningPadding + elementHighlighterConfig.offset.left + elementHighlighterConfig.offset.right,
          height: height + modalOverlayOpeningPadding + elementHighlighterConfig.offset.top + elementHighlighterConfig.offset.bottom
        });
        setAttributes$1(maskOpeningBorderStyles, {
          x: (x || left) - modalOverlayOpeningPadding - elementHighlighterConfig.offset.left,
          y: (y || top) - modalOverlayOpeningPadding - elementHighlighterConfig.offset.top,
          width: width + modalOverlayOpeningPadding + elementHighlighterConfig.offset.left + elementHighlighterConfig.offset.right,
          height: height + modalOverlayOpeningPadding + elementHighlighterConfig.offset.top + elementHighlighterConfig.offset.bottom
        });
      } else if (elementHighlighterConfig.shape === "circle") {
        var _targetElement$getBou2 = targetElement.getBoundingClientRect(),
          _x = _targetElement$getBou2.x,
          _y = _targetElement$getBou2.y,
          _width = _targetElement$getBou2.width,
          _height = _targetElement$getBou2.height,
          _left = _targetElement$getBou2.left,
          _top = _targetElement$getBou2.top;
        setAttributes$1(openingElement, {
          cx: (_x || _left) + _width / 2,
          cy: (_y || _top) + _height / 2,
          r: Math.max(_width, _height) / 2 + elementHighlighterConfig.offsetRadius
        });
        setAttributes$1(maskOpeningBorderStyles, {
          cx: (_x || _left) + _width / 2,
          cy: (_y || _top) + _height / 2,
          r: Math.max(_width, _height) / 2 + elementHighlighterConfig.offsetRadius
        });
      }
    }
  }

  /**
   * @constructor DimBackground
   * @example
   * Example of a DimBackground model is
   *
   * dimbackground: {
   *  opacity : 0.5,
   *  color : "#FFF"
   * }
   */
  var DimBackground = /*#__PURE__*/function () {
    function DimBackground() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, DimBackground);
      this.opacity = getNumberOrDefault(data.opacity, 0.5);
      this.color = getColorOrDefault(data.color, "#FFF");
    }
    _createClass(DimBackground, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return DimBackground;
  }();

  /**
   * @constructor Offset
   * @example
   * Example of a Offset model is
   *
   * offset: {
   *    skid : 10,
   *    distance : 10,
   * }
   */
  var Offset = /*#__PURE__*/_createClass(function Offset() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Offset);
    this.skid = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.skid, 0);
    this.distance = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.distance, 0);
  });

  /**
   * @constructor Position
   * @example
   * Example of a Position model is
   *
   * position: {
   *  position : "top-left",
   *  offset: {
   *    skid : 10,
   *    distance : 10,
   *    top: 0,
   *    bottom : 0,
   *    left: 0,
   *    right : 0
   *  }
   * }
   */
  var Position = /*#__PURE__*/_createClass(function Position() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Position);
    this.position = getStringOrDefault(data === null || data === void 0 ? void 0 : data.position, "top-left").toLowerCase();
    this.enable_offset = data.enable_offset;
    this.offset = new Offset(data.offset);
  });

  /**
   * @constructor DismissActions
   * @example
   * Example of a DismissActions model is
   *
   * dismiss_actions: {
   *  outside_touch : true,
   *  target_touch : false,
   * }
   */
  var DismissActions = /*#__PURE__*/_createClass(function DismissActions() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, DismissActions);
    this.outside_touch = Boolean(data.outside_touch);
    this.target_touch = Boolean(data.target_touch);
  });

  /**
   * @constructor Target
   * @example
   * Example of a Target model is
   *
   * retry: {
   *  interval : 0,
   *  max_retries : 0
   * }
   */
  var Target = /*#__PURE__*/_createClass(function Target() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Target);
    this.interval = getNumberOrDefault(data.interval, 2000);
    this.max_retries = getNumberOrDefault(data.max_retries, 5);
  });

  /**
   * @constructor Target
   * @example
   * Example of a Target model is
   *
   * target: {
   *  id : "menuOverlay",
   *  frame_id : "",
   *  enable_retry : false,
   *  retry_interval : 0,
   *  max_retries : 0
   * }
   */
  var Target$1 = /*#__PURE__*/_createClass(function Target$1() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Target$1);
    this.id = getStringOrDefault(data.id, "");
    this.frame_id = getStringOrDefault(data.frame_id, "");
    this.enable_retry = Boolean(data.enable_retry);
    this.retry = new Target(data.retry);
  });

  /**
   * @constructor Border
   * @example
   * Example of a border model is
   *
   * border: {
   *  radius : 50,
   *  color : "#FFFFFF",
   *  width : 2,
   *  style : "dotted"
   * }
   */
  var Border = /*#__PURE__*/function () {
    function Border() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Border);
      this.radius = getNumberOrDefault(data.radius, 0);
      this.color = getColorOrDefault(data.color, "#FFFFFF");
      this.width = getNumberOrDefault(data.width, 0);
      this.style = getStringOrDefault(data.style, "solid");
    }
    _createClass(Border, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return Border;
  }();

  /**
   * @constructor Arrow
   * @example
   * Example of a Arrow model is
   *
   * arrow: {
   *  type : "progress-bar",
   *  color : "#FFFFFF",
   *  enable_border : true,
   *  border: {
   *   radius : 50,
   *   color : "#FFFFFF",
   *   width : 2,
   *   style : "dotted"
   *  }
   * }
   */
  var Arrow = /*#__PURE__*/function () {
    function Arrow() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var arrowDefaultColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#FFFFFF";
      _classCallCheck(this, Arrow);
      this.arrowPosition = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.arrowPosition, 0);
      this.type = getStringOrDefault(data.type, "normal");
      this.color = getColorOrDefault(data.color, arrowDefaultColor);
      this.enable_border = data.enable_border;
      this.border = new Border(data.border);
    }
    _createClass(Arrow, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return Arrow;
  }();

  var EleHighlighterOffset = /*#__PURE__*/_createClass(function EleHighlighterOffset() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, EleHighlighterOffset);
    this.top = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.top, 0);
    this.bottom = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.bottom, 0);
    this.left = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.left, 0);
    this.right = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.right, 0);
  });

  /**
   * @constructor ElementHighlighter
   * @example 
   * Example of a ElementHighlighter model is
   * 
   * highlighter: {
      corner_radius: 0,
      offset_radius: 0,
      shape: "rectangle",
      border: {
        color: "#00FF00",
        width: 4,
        opacity: 1,
      },
      offset: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    },
  }
  */
  var ElementHighlighter = /*#__PURE__*/_createClass(function ElementHighlighter() {
    var _data$border;
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ElementHighlighter);
    this.shape = getStringOrDefault(data.shape, "rectangle");
    this.border = new Border(data.border);
    this.border.opacity = getStringOrDefault((_data$border = data.border) === null || _data$border === void 0 ? void 0 : _data$border.opacity, "1");
    this.cornerRadius = getStringOrDefault(data.corner_radius, "0");
    this.offsetRadius = getNumberOrDefault(data.offset_radius, 0);
    this.offset = new EleHighlighterOffset(data.offset);
  });

  /**
   * @constructor Animation
   * @example
   * Example of a Animation model is
   *
   * animation: {
   *  type : "cycle",
   *  duration : 10,
   *  anim_function : "ease-in-out",
   *  iteration_count : 2,
   * }
   */
  var Animation = /*#__PURE__*/function () {
    function Animation() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Animation);
      this.type = getStringOrDefault(data.type, "cycle");
      this.duration = getNumberOrDefault(data.duration, 0);
      this.anim_function = getStringOrDefault(data.anim_function, "ease-in-out");
      this.iteration_count = getNumberOrDefault(data.iteration_count, "infinite");
    }
    _createClass(Animation, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return Animation;
  }();

  var NewInLineTooltip = /*#__PURE__*/function () {
    function NewInLineTooltip(config, uis, walkthroughConfigs, terminationConfig, messageConfig, rtmInstance, showCallback, hideCallback, stepperCallBack) {
      var _config$set_font_to_s;
      var isWalkthrough = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
      var index = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
      _classCallCheck(this, NewInLineTooltip);
      this.uiConfig = config;
      this.uis = uis;
      this.isWalkthrough = isWalkthrough;
      this.index = index;
      this.walkthroughConfigs = walkthroughConfigs;
      this.messageConfig = messageConfig;
      this.rtmInstance = rtmInstance;
      this.currentId = makeid(10);

      // Read name and id of the config
      this.configId = messageConfig.configId;
      this.name = messageConfig.configName;
      this.cssPostFix = "-".concat(this.configId, "-").concat(this.name).replaceAll(" ", "").replace(/[^\w\s]/gi, "");
      this.showCallback = showCallback;
      this.closeCallback = hideCallback;
      this.stepperCallBack = stepperCallBack;
      this.targetDeletionObserver = null;
      this.viewPortObservor = null;
      this.tooltipShown = false;
      this.terminationConfig = terminationConfig;
      this.terminationTimeoutId = null;
      /*****************************Configs********************************/
      this.delay = config.delay;
      this.scrollToView = config.scrollToView || true;
      this.background_color = config.bg_color || COLORS.WHITE;
      this.width = config.width || 50; // Scale of the screen
      //this.height = config.height || 50; // Mostly auto. But for scrollable templates, should be the pixels.
      this.append_to = config.append_to || "parent"; // Can be set to 'body' 'parent'
      this.follow_cursor = config.followCursor || false; // Can be set to 'horizontal' 'vertical' 'initial'
      this.interactive_border = config.interactive_border || 10; // Determines the invisible border around the tippy that will prevent it from hiding if the cursorleft it

      this.target = new Target$1(config.target);
      this.elementHighlighter = new ElementHighlighter(config.highlighter);
      this.position = new Position(config.position);
      this.enable_dismiss_actions = config.enable_dismiss_actions;
      if (this.enable_dismiss_actions) this.dismiss_actions = new DismissActions(config.dismiss_actions);
      this.enable_dimbackground = config.enable_dimbackground;
      if (this.enable_dimbackground) this.dimbackground = new DimBackground(config.dimbackground);
      this.enable_arrow = config.enable_arrow;
      if (this.enable_arrow) this.arrow = new Arrow(config.arrow, this.background_color);
      this.enable_animation = config.enable_animation;
      if (this.enable_animation) this.animation = new Animation(config.animation);
      this.templateContent = new TemplateContent(config, this.configId, this.name);
      this.set_font_to_scale = (_config$set_font_to_s = config.set_font_to_scale) !== null && _config$set_font_to_s !== void 0 ? _config$set_font_to_s : false;
      this.fontMultiplier = this.set_font_to_scale ? getFontMultiplier() : 1;
      this.fontMultiplier = this.fontMultiplier > 1 ? this.fontMultiplier : 1;
      this.targetElement = null;
      // svg mask is preventing the click event from being registered. Hence placing an invisible overlay on top of the SVG mask area where target element is present and attaching the click event listener to this overlay.
      this.targetOverlayElement = null;
      this.inLineContainer = null;
      this.textContainer = null;
      this.tooltip = null;
      this.dimBackgroundElement = null;
      this.updateSkid = null;
      this.initial_data_placement = this.position.position;
      this.recent_placement = this.position.position;
      this.layout_type = config.layout_type;
      if (this.layout_type === "web-inline") {
        var _config$dimensions, _config$dimensions2, _config$dimensions3, _config$dimensions4;
        this.targetElementTop = config === null || config === void 0 || (_config$dimensions = config.dimensions) === null || _config$dimensions === void 0 ? void 0 : _config$dimensions.top;
        // this.right = config.dimensions.right;
        // this.bottom = config.dimensions.bottom;
        this.targetElementLeft = config === null || config === void 0 || (_config$dimensions2 = config.dimensions) === null || _config$dimensions2 === void 0 ? void 0 : _config$dimensions2.left;
        this.targetElementHeight = config === null || config === void 0 || (_config$dimensions3 = config.dimensions) === null || _config$dimensions3 === void 0 ? void 0 : _config$dimensions3.height;
        this.targetElementWidth = config === null || config === void 0 || (_config$dimensions4 = config.dimensions) === null || _config$dimensions4 === void 0 ? void 0 : _config$dimensions4.width;
      }
    }
    _createClass(NewInLineTooltip, [{
      key: "createNewTooltip",
      value: function createNewTooltip() {
        var _this = this;
        try {
          // Check if a tooltip can be created.
          var canCreate = this._canCreateTooltip();
          //If a tooltip can be created
          if (canCreate) {
            // Called when the target element comes into the viewport to show the tooltip
            var targetReachedCallback = function targetReachedCallback() {
              //Set the tooltip dimensions.
              //this._setInLineDimensions();
              //Set the InLine styles
              _this._setInlineStyles();
              //Set the offset to properly align arrow w.r.t view element
              //this._offsetAdjustment();
              //Set the content
              _this._setInLineContent();
              // Set the obervors.
              _this._setObservors();
              // Create a tippy instance
              _this._createTippyInstance();
            };

            // Called when the valid target is found to show the tooltip
            var targetValidCallback = function targetValidCallback() {
              //Once the target is found then scroll into it.
              // this._scrollIntoTargetIfNeeded(targetReachedCallback);
              if (_this.layout_type === "web-inline") {
                targetReachedCallback();
              } else {
                _this._scrollIntoTargetIfNeeded(targetReachedCallback);
              }
            };

            // Set the target for InLine tooltip
            this._setTheTarget(targetValidCallback);
          }
        } catch (e) {
          this._resetRTMAction();
        }
      }
    }, {
      key: "updateElementPositionOnScroll",
      value: function updateElementPositionOnScroll(top, left, height, width) {
        setAttributes$1(this.targetElement, {
          style: "position: absolute; top: ".concat(top, "px; left: ").concat(left, "px; height: ").concat(height, "px; width: ").concat(width, "px")
        });
        if (this.layout_type === "web-inline") {
          var _window;
          var tippyRoot = document.querySelector("[data-tippy-root]").getBoundingClientRect();
          (_window = window) === null || _window === void 0 || (_window = _window.ApxorWebView) === null || _window === void 0 || _window.setInlineRect(tippyRoot.left, tippyRoot.top, tippyRoot.width, tippyRoot.height);
          window.dispatchEvent(new CustomEvent("updateMaskOpeningPositionOnScroll"));
          this.inLineContainer.style.top = parseInt(this.inLineContainer.style.top) + (top - this.targetElementTop) + "px";
          this.inLineContainer.style.left = parseInt(this.inLineContainer.style.left) + (left - this.targetElementLeft) + "px";
        }
      }
    }, {
      key: "_setInlineStyles",
      value: function _setInlineStyles() {
        var apxor_tooltip_styles = document.querySelector("style[apx-tooltip-styles]");
        if (apxor_tooltip_styles) {
          return;
        }
        var styles = " \n      ".concat(this._getBackgroundContainerStyles(), "\n      ").concat(this._getTippyStyles(), " \n    ").replaceAll("\n", "").replace(/[\s]{2,999}/g, "");
        var styleNode = document.createElement("style");
        styleNode.setAttribute("apx-tooltip-styles", "");
        styleNode.innerHTML = styles;
        document.head.appendChild(styleNode);
      }
    }, {
      key: "_getBackgroundContainerStyles",
      value: function _getBackgroundContainerStyles() {
        /*
        ,inset 10px 0px 0px 0px ${hexToRGB(
            this.dimbackground.color,
            this.dimbackground.opacity
          )},inset -10px 0px 0px 0px ${hexToRGB(
            this.dimbackground.color,
            this.dimbackground.opacity
          )}
          */
        // Set the dim background color and opacity only if dim background is enabled.
        var backgroundContainerStyle = "";
        if (this.enable_dimbackground) {
          var _this$dimbackground$o, _this$dimbackground$c;
          // :where is used to reduce the specificity of this style.
          // If at all the target element has a position that should not get disturbed.
          backgroundContainerStyle = "\n      #tippyModalOverlayContainer {\n        -ms-filter: \"progid:dximagetransform.microsoft.gradient.alpha(Opacity=50)\";\n        filter: alpha(opacity=50);height: 100vh;left: 0;opacity: ".concat((_this$dimbackground$o = this.dimbackground.opacity) !== null && _this$dimbackground$o !== void 0 ? _this$dimbackground$o : 0.5, ";position: fixed;\n        top: 0;transition: all .3s ease-out;width: 100vw;z-index: 9999;fill: ").concat((_this$dimbackground$c = this.dimbackground.color) !== null && _this$dimbackground$c !== void 0 ? _this$dimbackground$c : "transparent", "\n      }\n      #tippyModalOverlayContainer #tippyModalMask, #tippyModalOverlayContainer #tippyModalMaskRect {\n        height: 100vh;width: 100vw\n      }\n      \n    ");
          /*
          :where([apx-inline-dimbackground]) {
            box-shadow: 0 0 0 max(100vh, 100vw) ${hexToRGB(
              this.dimbackground.color,
              this.dimbackground.opacity
            )};
            z-index:9999;
            overflow: visible;
            position:relative;
          }*/
        }

        return backgroundContainerStyle;
      }
    }, {
      key: "_getTippyStyles",
      value: function _getTippyStyles() {
        var tippyTopArrowStyle = "";
        var tippyRightArrowStyle = "";
        var tippyBottomArrowStyle = "";
        var tippyLeftArrowStyle = "";
        if (this.enable_arrow) {
          switch (this.arrow.type) {
            case "round":
              tippyTopArrowStyle = "\n          width:18px;\n          height:18px;\n          border-radius:5px;\n          transform: rotate(45deg);\n          background-color:".concat(this.arrow.color, ";\n          ");
              tippyRightArrowStyle = "\n          bottom:-10px;\n          width:18px;\n          height:18px;\n          border-radius:5px;\n          transform: rotate(45deg);\n          background-color:".concat(this.arrow.color, ";\n          ");
              tippyBottomArrowStyle = "\n          width:18px;\n          height:18px;\n          border-radius:5px;\n          transform: rotate(45deg);\n          background-color:".concat(this.arrow.color, ";\n          ");
              tippyLeftArrowStyle = "\n          top:-50%;\n          width:18px;\n          height:18px;\n          border-radius:5px;\n          transform: rotate(45deg);\n          background-color:".concat(this.arrow.color, ";\n          ");
              break;
            case "narrow":
              tippyTopArrowStyle = "\n          border-width:18px 5px 0;\n          ";
              tippyRightArrowStyle = "\n          border-width:5px 18px 5px 0;\n          ";
              tippyBottomArrowStyle = "\n          border-width:0 5px 18px;\n          ";
              tippyLeftArrowStyle = "\n          border-width:5px 0 5px 18px;\n          ";
              break;
            case "wide":
              tippyTopArrowStyle = "\n          left:-50%;\n          border-width:9px 18px 0;\n          ";
              tippyRightArrowStyle = "\n          top:-50%;\n          border-width:18px 9px 18px 0;\n          ";
              tippyBottomArrowStyle = "\n          left:-50%;\n          top:-8px;\n          border-width:0 18px 9px;\n          bottom:13px;\n          ";
              tippyLeftArrowStyle = "\n          top:-50%;\n          border-width:18px 0 18px 8px;\n          ";
              break;
            case "large":
              tippyTopArrowStyle = "\n          left:-50%;\n          border-width:16px 16px 0;\n          ";
              tippyRightArrowStyle = "\n          top:-50%;\n          border-width:16px 16px 16px 0;\n          ";
              tippyBottomArrowStyle = "\n          left:-50%;\n          border-width:0 16px 16px;\n          ";
              tippyLeftArrowStyle = "\n          top:-50%;\n          border-width:16px 0 16px 16px;\n          ";
              break;
            case "small":
              tippyTopArrowStyle = "\n          left:-50%;\n          border-width:16px 16px 0;\n          ";
              tippyRightArrowStyle = "\n          top:-50%;\n          border-width:16px 16px 16px 0;\n          ";
              tippyBottomArrowStyle = "\n          left:-50%;\n          border-width:0 16px 16px;\n          ";
              tippyLeftArrowStyle = "\n          top:-50%;\n          border-width:16px 0 16px 16px;\n          ";
              break;
            default:
              tippyTopArrowStyle = "\n          left:-50%;\n          border-width:16px 16px 0;\n          ";
              tippyRightArrowStyle = "\n          top:-50%;\n          border-width:16px 16px 16px 0;\n          ";
              tippyBottomArrowStyle = "\n          left:-50%;\n          border-width:0 16px 16px;\n          ";
              tippyLeftArrowStyle = "\n          top:-50%;\n          border-width:16px 0 16px 16px;\n          ";
              break;
          }
        }
        var tippy_styles = document.querySelector("style[data-tippy-stylesheet]");
        if (tippy_styles) {
          tippy_styles.remove();
        }

        /*
        .tippy-box[data-animation=fade][data-state=hidden]{opacity:0;} 
           [data-tippy-root] {max-width:calc(100vw - 10px);} 
           .tippy-box {position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity;} 
           .tippy-box[data-placement^=top] > .tippy-arrow {bottom:0;} 
           .tippy-box[data-placement^=top] > .tippy-arrow:before {bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top;} 
           .tippy-box[data-placement^=bottom] > .tippy-arrow {top:0;} 
           .tippy-box[data-placement^=bottom] > .tippy-arrow:before {top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom;} 
           .tippy-box[data-placement^=left] > .tippy-arrow {right:0;} 
           .tippy-box[data-placement^=left] > .tippy-arrow:before {border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left;} 
           .tippy-box[data-placement^=right] > .tippy-arrow {left:0;} 
           .tippy-box[data-placement^=right] > .tippy-arrow:before {left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right;} 
           .tippy-box[data-inertia][data-state=visible] {transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)} 
           .tippy-arrow {width:16px;height:16px;color:#333;} 
           .tippy-arrow:before{ content:"";position:absolute;border-color:transparent;border-style:solid;} 
           .tippy-content {position:relative;padding:5px 9px;z-index:1;} 
        */

        var animationStyles = "";
        if (this.enable_animation) {
          animationStyles = "\n        @-webkit-keyframes ".concat(this.animation.type, " {\n          0% { transform: ").concat(translateDir(this.position.position, 0), "; }\n          50% { transform: ").concat(translateDir(this.position.position, 50), "; }\n          100% { transform: ").concat(translateDir(this.position.position, 100), "; }\n         }\n  \n         @keyframes ").concat(this.animation.type, " {\n          0% { transform: ").concat(translateDir(this.position.position, 0), "; }\n          50% { transform: ").concat(translateDir(this.position.position, 50), "; }\n          100% { transform: ").concat(translateDir(this.position.position, 100), "; }\n         }\n  \n         .tippy-box {\n           animation-name: ").concat(this.animation.type, ";\n           animation-duration: ").concat(this.animation.duration, "ms;\n           animation-timing-function: ").concat(this.animation.anim_function, ";\n           animation-iteration-count: ").concat(this.animation.iteration_count, ";\n         }\n        ");
        }
        // Do not modify these. These tippy styles.
        var tippyStyles = "\n        .tippy-box[data-animation=\"fade\"][data-state=hidden]{\n          opacity:0;\n        } \n       [data-tippy-root] {\n          max-width:calc(100vw - ".concat(this.enable_arrow && this.arrow.enable_border ? this.arrow.border.width : 0, "px);\n        } \n       .tippy-box { \n          position:relative;\n          line-height:1.4;\n          white-space:normal;\n          outline:0;\n          transition-property:transform,visibility,opacity;\n        } \n       .tippy-box[data-placement^=top] > .tippy-arrow:before {\n        ").concat(tippyTopArrowStyle, "\n          border-top-color:initial;\n          transform-origin:center top;\n        }\n       .tippy-box[data-placement^=bottom] > .tippy-arrow:before {\n        ").concat(tippyBottomArrowStyle, "\n          border-bottom-color:initial;\n          transform-origin:center bottom;\n        }\n       .tippy-box[data-placement^=left] > .tippy-arrow:before {\n        ").concat(tippyLeftArrowStyle, "\n          border-left-color:initial;\n          transform-origin:center left;\n        }\n       .tippy-box[data-placement^=right] > .tippy-arrow:before {\n        ").concat(tippyRightArrowStyle, "\n          border-right-color:initial;\n          transform-origin:center right;\n        } \n       .tippy-box[data-inertia][data-state=visible] {\n          transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)\n        } \n       .tippy-arrow {\n          z-index:9999;\n          width:18px;\n          height:18px;\n          color:").concat(this.enable_arrow ? this.arrow.color : "transparent", ";\n          opacity:0;\n          visibility:hidden;\n          transition:all .5s cubic-bezier(.96,.23,.07,.8);\n       } \n       .tippy-arrow.open {\n          opacity:1;\n          visibility:visible;\n       }\n       .tippy-arrow:before{ \n          content:\"\";\n          position:absolute;\n          border-color:transparent;\n          border-style:").concat(this.enable_arrow && this.arrow.enable_border ? this.arrow.border.style : "solid", ";\n       } \n       .tippy-content {\n        padding: 0.3125rem 0.5625rem;\n          position:relative;\n          z-index:9998;\n       } \n      ").concat(animationStyles, "\n    ");
        var tippyTheme = "\n       ".concat(tippyStyles, "\n    ");
        return tippyTheme;
      }
    }, {
      key: "_canCreateTooltip",
      value: function _canCreateTooltip() {
        if (this.rtmInstance.currentAction !== null && this.rtmInstance.currentAction !== undefined || this.rtmInstance.isShowingAction) {
          console.info("An nudge is being shown. Can not show a tooltip now");
          return false;
        }
        this.rtmInstance.currentAction = this;
        return true;
      }
    }, {
      key: "_setTheTarget",
      value: function _setTheTarget(targetValidCallback) {
        var _this2 = this;
        var targetFoundCallback = function targetFoundCallback() {
          var isElementVisible = _this2._isElementVisible();
          if (isElementVisible) {
            // Attch a click callback to the target. If the target dismiss config is true, it will dismiss the tooltip
            _this2._targetClickCallback = _this2._targetClickCallback.bind(_this2);
            _this2.targetElement.addEventListener("click", _this2._targetClickCallback);
            targetValidCallback();
          } else {
            console.info("Invalid target element. Width and height are 0 for element: ".concat(_this2.target.id, ". Can't show tooltip"));
            _this2._resetRTMAction();
          }
        };
        if (this.layout_type === "web-inline") {
          this.targetElement = document.createElement("div");
          setAttributes$1(this.targetElement, {
            id: "apx_targetElement_".concat(this.configId),
            style: "position: absolute; top: ".concat(this.targetElementTop, "px; left: ").concat(this.targetElementLeft, "px; height: ").concat(this.targetElementHeight, "px; width: ").concat(this.targetElementWidth, "px")
          });
          document.body.appendChild(this.targetElement);
          targetValidCallback();
        } else {
          this._findTargetElement(targetFoundCallback);
        }
      }
    }, {
      key: "_targetClickCallback",
      value: function _targetClickCallback() {
        if (this.enable_dismiss_actions && this.dismiss_actions.target_touch) {
          this._destroyTooltip();
          window.Apxor.logActionEvent("InlineTargetViewClicked", this.configId, this.name);
        }
      }
    }, {
      key: "_isElementVisible",
      value: function _isElementVisible() {
        try {
          var rect = this.targetElement.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) {
            return false;
          }
        } catch (e) {
          return false;
        }
        return true;
      }
    }, {
      key: "_findTargetElement",
      value: function _findTargetElement(targetFoundCallback) {
        this.targetElement = getElementFromSelector(this.target.id, this.target.frame_id);
        if (!this.targetElement) {
          if (this.target.enable_retry) {
            console.info("Not found yet. Rechecking the DOM.");
            this._retryFindingTargetElement(targetFoundCallback);
          } else {
            console.info("Element with selector:".concat(this.target.id, " not found."));
            this._resetRTMAction();
          }
        } else {
          targetFoundCallback();
        }
      }
    }, {
      key: "_retryFindingTargetElement",
      value: function _retryFindingTargetElement(targetFoundCallback) {
        var _this3 = this;
        //After every find_interval check the DOM for target element.
        var elementRecheckIntervalId = setInterval(function () {
          _this3.targetElement = getElementFromSelector(_this3.target.id, _this3.target.frame_id);
          //If the element is found, stop checking the DOM.
          if (_this3.targetElement) {
            clearInterval(elementRecheckIntervalId);
            targetFoundCallback(_this3.targetElement);
          } else {
            _this3.target.retry.max_retries = _this3.target.retry.max_retries - 1;
            // If the element is not found even after max interval, stop checking
            if (_this3.target.retry.max_retries <= 0) {
              clearInterval(elementRecheckIntervalId);
              console.warn("Element with selector:".concat(_this3.target.id, " not found."));
              _this3._resetRTMAction();
            }
          }
        }, this.target.retry.interval);
      }
    }, {
      key: "_resetRTMAction",
      value: function _resetRTMAction() {
        var _window2, _window2$updateFlag;
        this.rtmInstance.currentAction = null;
        this.rtmInstance.isShowingAction = false;
        (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.Apxor) === null || _window2 === void 0 || (_window2$updateFlag = _window2.updateFlag) === null || _window2$updateFlag === void 0 || _window2$updateFlag.call(_window2, false);
        console.info("RTM tooltip action stopped.");
      }
    }, {
      key: "_scrollIntoTargetIfNeeded",
      value: function _scrollIntoTargetIfNeeded(targetReachedCallback) {
        var _this4 = this;
        var scrolled = false;
        // let finalScrollPosition = 0;
        // let scrollAmount = 0;
        var isscrolled = false;
        var isTargetInViewPort = isElementInViewport(this.targetElement);
        // If the element is not in the viewport. scroll into the target element only if the config says so.
        if (!isTargetInViewPort) {
          if (this.scrollToView) {
            var scrollIntoViewOptions = {
              behavior: SCROLL_BEHAVIOUR.SMOOTH,
              block: CENTER,
              inline: CENTER
            };
            // const initialScrollPosition =
            //   this.targetElement.getBoundingClientRect().top;
            this.targetElement.scrollIntoView(scrollIntoViewOptions);
            window.setTimeout(function () {
              var isTargetElementCovered = isElementCovered(_this4.targetElement);
              if (isTargetElementCovered) {
                window.setTimeout(function () {
                  var isTargetElementCovered = isElementCovered(_this4.targetElement);
                  if (isTargetElementCovered) {
                    console.info("The tooltip is not visible because another element is overlapping the target element.");
                    _this4._resetRTMAction();
                  } else {
                    targetReachedCallback();
                  }
                }, 1000);
                // console.info(
                //   "The tooltip is not visible because another element is overlapping the target element."
                // );
                // this._resetRTMAction();
              } else {
                targetReachedCallback();
              }
            }, 1000);
            isscrolled = true;
            scrolled = true;
          } else {
            console.info("If needed change the config to scroll to the target element.");
            this._resetRTMAction();
          }
        } else {
          scrolled = true;
        }

        // If the target is in viewport
        if (scrolled && !isscrolled) {
          var isTargetElementCovered = isElementCovered(this.targetElement);
          if (isTargetElementCovered) {
            console.info("The tooltip is not visible because another element is overlapping the target element.");
            this._resetRTMAction();
          } else {
            targetReachedCallback();
          }
        }
      }
    }, {
      key: "_setInLineContent",
      value: function _setInLineContent() {
        this.inLineContainer = this.templateContent.createTemplateContent();
      }
    }, {
      key: "_setObservors",
      value: function _setObservors() {
        var _this5 = this;
        // Add MutationObserver to the target element
        this.targetDeletionObserver = new MutationObserver(function () {
          if (!_this5.tooltipShown) {
            return;
          }
          if (_this5.targetElement.getRootNode() instanceof ShadowRoot) {
            var shadowHost = _this5.targetElement.getRootNode().host;
            if (!document.body.contains(shadowHost)) {
              _this5._destroyTooltip();
            }
            return;
          }
          if (!document.body.contains(_this5.targetElement)) {
            _this5._destroyTooltip();
          }
        });
        this.viewPortObservor = new IntersectionObserver(function () {
          if (!_this5.tooltipShown) {
            return;
          }
          var elementInViewPort = isElementInViewport(_this5.targetElement);
          if (!elementInViewPort) {
            _this5._destroyTooltip();
          }
        });
      }
    }, {
      key: "_createTippyInstance",
      value: function _createTippyInstance() {
        var _this6 = this;
        this.tooltip = tippy$1(this.targetElement, {
          allowHTML: false,
          aria: {
            content: "describedby"
          },
          arrow: this.enable_arrow,
          appendTo: document.body,
          content: this.inLineContainer,
          duration: 100,
          followCursor: this.follow_cursor,
          flip: true,
          flipOnUpdate: true,
          inlinePositioning: true,
          hideOnClick: false,
          interactive: true,
          interactiveBorder: this.interactive_border,
          interactiveDebounce: 999999,
          moveTransition: "transform 0s linear",
          maxWidth: "100%",
          maxHeight: "100%",
          offset: [this.arrow.arrowPosition, this.position.offset.distance],
          // onClickOutside: () => {
          //   if (this.enable_dismiss_actions && this.dismiss_actions.outside_touch) {
          //     this._destroyTooltip();
          //   }
          // },
          onShow: function onShow() {
            var _this6$targetDeletion, _this6$viewPortObserv;
            // Attach the observer upon show
            (_this6$targetDeletion = _this6.targetDeletionObserver) === null || _this6$targetDeletion === void 0 || _this6$targetDeletion.observe(document.body, {
              childList: true,
              subtree: true
            });
            (_this6$viewPortObserv = _this6.viewPortObservor) === null || _this6$viewPortObserv === void 0 || _this6$viewPortObserv.observe(_this6.targetElement);
            setTimeout(function () {
              //Highlight the target by dimming other elements.
              _this6._highlightInlineTarget();
              //Set the auto termination
              _this6._setAutoTerminate();
              _this6.tooltipShown = true;
            }, 10);
          },
          onMount: function onMount(instance) {
            _this6.recalculateTheTippyHeight();
            instance.popperInstance.update();
          },
          onShown: function onShown() {
            // const tippyRoot = document.querySelector("[data-tippy-root]");
            // const tippyBox = document.querySelector(".tippy-box");
            // const placement = tippyBox.getAttribute("data-placement");
            // if (placement === "left" || placement === "right") {
            //   tippyRoot.style.top = `${this.position.offset.skid}px`;
            // } else if (placement === "top" || placement === "bottom") {
            //   tippyRoot.style.left = `${this.position.offset.skid}px`;
            // }
            _this6.updateSkid = function () {
              var tippyRoot = document.querySelector("[data-tippy-root]");
              var tippyBox = document.querySelector(".tippy-box");
              var tippyStyleElementContent = document.querySelector("[apx-tooltip-styles]").innerHTML;
              //const tippyContent = document.querySelector(".tippy-content");
              var placement = tippyBox.getAttribute("data-placement");
              var rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
              if (placement === "left" || placement === "right") {
                tippyRoot.style.top = "".concat(_this6.position.offset.skid, "px");
                if (_this6.initial_data_placement !== placement) {
                  tippyRoot.style.left = placement === "left" ? "".concat(-0.3125 * 2 * rootFontSize - (_this6.enable_animation ? 16 : 0), "px") : "".concat(0.3125 * 2 * rootFontSize + (_this6.enable_animation ? 10 : 0), "px");
                }
              } else if (placement === "top" || placement === "bottom") {
                tippyRoot.style.left = "".concat(_this6.position.offset.skid, "px");
                if (_this6.initial_data_placement !== placement) {
                  tippyRoot.style.top = placement === "top" ? "".concat(-0.5625 * 2 * rootFontSize - (_this6.enable_animation ? 16 : 0), "px") : "".concat(0.5625 * 2 * rootFontSize + (_this6.enable_animation ? 10 : 0), "px");
                }
              }
              if (_this6.recent_placement !== placement) {
                tippyStyleElementContent = tippyStyleElementContent.replace("@-webkit-keyframes ".concat(_this6.animation.type, " {\n          0% { transform: ").concat(translateDir(_this6.recent_placement, 0), "; }\n          50% { transform: ").concat(translateDir(_this6.recent_placement, 50), "; }\n          100% { transform: ").concat(translateDir(_this6.recent_placement, 100), "; }\n         }\n  \n         @keyframes ").concat(_this6.animation.type, " {\n          0% { transform: ").concat(translateDir(_this6.recent_placement, 0), "; }\n          50% { transform: ").concat(translateDir(_this6.recent_placement, 50), "; }\n          100% { transform: ").concat(translateDir(_this6.recent_placement, 100), "; }\n         }").replaceAll("\n", "").replace(/[\s]{2,999}/g, ""), "@-webkit-keyframes ".concat(_this6.animation.type, " {\n          0% { transform: ").concat(translateDir(placement, 0), "; }\n          50% { transform: ").concat(translateDir(placement, 50), "; }\n          100% { transform: ").concat(translateDir(placement, 100), "; }\n         }\n  \n         @keyframes ").concat(_this6.animation.type, " {\n          0% { transform: ").concat(translateDir(placement, 0), "; }\n          50% { transform: ").concat(translateDir(placement, 50), "; }\n          100% { transform: ").concat(translateDir(placement, 100), "; }\n         }").replaceAll("\n", "").replace(/[\s]{2,999}/g, ""));
                document.querySelector("[apx-tooltip-styles]").innerHTML = tippyStyleElementContent;
                _this6.recent_placement = placement;
              }
            };
            _this6.updateSkid();
            _this6._showTippy();
            window.addEventListener("scroll", _this6.updateSkid);
            if (_this6.layout_type === "web-inline") {
              var _window3;
              var tippyRoot = document.querySelector("[data-tippy-root]").getBoundingClientRect();
              (_window3 = window) === null || _window3 === void 0 || (_window3 = _window3.ApxorWebView) === null || _window3 === void 0 || _window3.setInlineRect(tippyRoot.left, tippyRoot.top, tippyRoot.width, tippyRoot.height);
            }
          },
          placement: this.position.position,
          popperOptions: {
            modifiers: [{
              name: "flip",
              options: {
                fallbackPlacements: ["bottom", "right", "top", "left"],
                allowedAutoPlacements: ["top", "bottom", "right", "left"]
              }
            }]
          },
          role: "tooltip",
          showOnCreate: true,
          sticky: false,
          touch: true,
          zIndex: 99999999
        });
      }
    }, {
      key: "_highlightInlineTarget",
      value: function _highlightInlineTarget() {
        var _this7 = this;
        if (this.enable_dimbackground) {
          this.dimBackgroundElement = createMask(this.targetElement, this.elementHighlighter);
          document.body.appendChild(this.dimBackgroundElement);
          this.targetOverlayElement = document.createElement("div");
          if (this.targetElement.getBoundingClientRect) {
            var _targetElement$getBou = this.targetElement.getBoundingClientRect(),
              x = _targetElement$getBou.x,
              y = _targetElement$getBou.y,
              width = _targetElement$getBou.width,
              height = _targetElement$getBou.height,
              left = _targetElement$getBou.left,
              top = _targetElement$getBou.top; // getBoundingClientRect is not consistent. Some browsers use x and y, while others use left and top

            setAttributes$1(this.targetOverlayElement, {
              id: "targetOverlayElement",
              style: "position: absolute; z-index: 999999; top: ".concat(y || top, "px; left: ").concat(x || left, "px; height: ").concat(height, "px; width: ").concat(width, "px")
            });
            document.body.appendChild(this.targetOverlayElement);
          }
          var maskOpening = this.dimBackgroundElement.querySelector("#tippyModalMaskOpening");
          maskOpening.addEventListener("click", this._targetClickCallback);
          if (this.enable_dismiss_actions && this.dismiss_actions.outside_touch) {
            this._dimbackgroundClickCallback = this._dimbackgroundClickCallback.bind(this);
            this.dimBackgroundElement.addEventListener("touchmove", this._dimbackgroundClickCallback);
            this.dimBackgroundElement.addEventListener("click", this._dimbackgroundClickCallback);
          }

          // let targetClickCallback = this._targetClickCallback.bind(this);

          this.targetOverlayElement.addEventListener("click", function () {
            _this7.targetElement.click();
          });
          //this.targetElement.setAttribute("apx-inline-dimbackground", "");
        } else {
          this.tooltip.setProps({
            onClickOutside: function onClickOutside() {
              if (_this7.enable_dismiss_actions && _this7.dismiss_actions.outside_touch) {
                _this7._destroyTooltip();
              }
            }
          });
        }
      }
    }, {
      key: "_setAutoTerminate",
      value: function _setAutoTerminate() {
        var _this8 = this;
        if (this.terminationConfig.auto_dismiss === true) {
          this.terminationTimeoutId = setTimeout(function () {
            _this8._destroyTooltip();
          }, this.terminationConfig.duration);
        }
      }
    }, {
      key: "recalculateTheTippyHeight",
      value: function recalculateTheTippyHeight() {
        try {
          // let tippyHeight = 0;
          // //let tippyWidth = 0;
          // this.inLineContainer.childNodes.forEach((n) => {
          //   tippyHeight = tippyHeight + (n?.offsetHeight || 0);
          //   // if (n?.offsetWidth > tippyWidth) {
          //   //   tippyWidth = n.offsetWidth;
          //   // }
          // });
          var tippyHeight = this.inLineContainer.offsetHeight;
          var tippyWidth = this.inLineContainer.offsetWidth;
          var tippyRoot = document.querySelector("[data-tippy-root]");
          tippyRoot.style.height = "".concat(tippyHeight, "px");
          tippyRoot.style.width = "".concat(tippyWidth, "px");
          var tippyBox = document.querySelector(".tippy-box");
          tippyBox.style.height = "".concat(tippyHeight, "px");
          tippyBox.style.width = "".concat(tippyWidth, "px");
          var tippyContent = document.querySelector(".tippy-content");
          tippyContent.style.height = "".concat(tippyHeight, "px");
          tippyContent.style.width = "".concat(tippyWidth, "px");
        } catch (e) {
          this._destroyTooltip();
          console.error("Can't update the tippy dimensions");
        }
      }
    }, {
      key: "_showTippy",
      value: function _showTippy() {
        var _this9 = this;
        this.inLineContainer.classList.add("open");
        setTimeout(function () {
          var _tippyArrow$classList;
          var tippyArrow = document.querySelector(".tippy-arrow");
          tippyArrow === null || tippyArrow === void 0 || (_tippyArrow$classList = tippyArrow.classList) === null || _tippyArrow$classList === void 0 || _tippyArrow$classList.add("open");
          _this9.showCallback();
        }, 200);
      }
    }, {
      key: "_destroyTooltip",
      value: function _destroyTooltip() {
        var isCancelled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        try {
          var _this$targetDeletionO, _this$viewPortObservo, _this$tooltip, _this$dimBackgroundEl, _this$dimBackgroundEl2, _this$dimBackgroundEl3, _this$targetOverlayEl;
          //Disconnect both the observors
          (_this$targetDeletionO = this.targetDeletionObserver) === null || _this$targetDeletionO === void 0 || _this$targetDeletionO.disconnect();
          this.targetDeletionObserver = null;
          (_this$viewPortObservo = this.viewPortObservor) === null || _this$viewPortObservo === void 0 || _this$viewPortObservo.disconnect();
          this.viewPortObservor = null;
          //Destroy the tooltip
          (_this$tooltip = this.tooltip) === null || _this$tooltip === void 0 || _this$tooltip.destroy();
          (_this$dimBackgroundEl = this.dimBackgroundElement) === null || _this$dimBackgroundEl === void 0 || _this$dimBackgroundEl.removeEventListener("click", this._dimbackgroundClickCallback);
          (_this$dimBackgroundEl2 = this.dimBackgroundElement) === null || _this$dimBackgroundEl2 === void 0 || _this$dimBackgroundEl2.removeEventListener("touchmove", this._dimbackgroundClickCallback);
          //If the dim background is set, remove that as well.
          (_this$dimBackgroundEl3 = this.dimBackgroundElement) === null || _this$dimBackgroundEl3 === void 0 || _this$dimBackgroundEl3.remove();
          //If the overlay element is set on target, remove that as well.
          (_this$targetOverlayEl = this.targetOverlayElement) === null || _this$targetOverlayEl === void 0 || _this$targetOverlayEl.remove();
          //Delete all the styles created for tooltips
          this._removeStyles();
          //Remove the highlight styles on the target
          this.targetElement.removeAttribute("apx-inline-dimbackground");
          //this.targetElement.classList.remove("apx-dimbackground");
          clearTimeout(this.terminationTimeoutId);
          this.targetElement.removeEventListener("click", this._targetClickCallback);
          window.removeEventListener("scroll", this.updateSkid);
        } catch (e) {
          console.info("Destroying the tooltip:" + e);
        }
        this.closeCallback(isCancelled);
      }
    }, {
      key: "_removeStyles",
      value: function _removeStyles() {
        try {
          var apxor_tooltip_styles = document.querySelector("style[apx-tooltip-styles]");
          if (apxor_tooltip_styles) {
            apxor_tooltip_styles.remove();
          }
          var tippy_styles = document.querySelector("style[data-tippy-stylesheet]");
          if (tippy_styles) {
            tippy_styles.remove();
          }
        } catch (e) {
          console.error("Could not remove the tooltip styles:" + e);
        }
      }
    }]);
    return NewInLineTooltip;
  }();

  /**
   * @constructor Margin
   * @example
   * Example of a margin model is
   *
   * margin: {
   *  top : 10,
   *  bottom : 10,
   *  left : 12,
   *  right : 12
   * }
   */
  var Margin = /*#__PURE__*/function () {
    function Margin() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Margin);
      this.top = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.top, 8);
      this.bottom = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.bottom, 8);
      this.left = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.left, 8);
      this.right = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.right, 8);
    }
    _createClass(Margin, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return Margin;
  }();

  /**
   * @constructor Padding
   * @example
   * Example of a Padding model is
   *
   * padding: {
   *  top : 10,
   *  bottom : 10,
   *  left : 12,
   *  right : 12
   * }
   */
  var Padding = /*#__PURE__*/function () {
    function Padding() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Padding);
      this.top = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.top, 8);
      this.bottom = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.bottom, 8);
      this.left = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.left, 8);
      this.right = getNumberOrDefault(data === null || data === void 0 ? void 0 : data.right, 8);
    }
    _createClass(Padding, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return Padding;
  }();

  /**
   * @constructor CloseButton
   * @example
   * Example of a close button model is
   *
   * close_button: {
   *  color: "#172B4D",
   *  fill_color: "#FFFFFF",
   *  type: "normal/filled/custom",
   *  path: "<assets-path>",
   *  offset_top: 8,
   *  offset_right: 8,
   *  height: 20,
   *  width: 20,
   *  action: "cancel/dismiss",
   *  shape: "rectangle/circle"
   * }
   */
  var CloseButton = /*#__PURE__*/function () {
    function CloseButton() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, CloseButton);
      this.color = getColorOrDefault(data.color, "#FFFFFF");
      this.fill_color = getColorOrDefault(data.fill_color, "#FFFFFF");
      this.type = getStringOrDefault(data.type, "normal");
      this.path = data.path;
      this.height = getNumberOrDefault(data.height, 24);
      this.width = getNumberOrDefault(data.width, 24);
      this.offset_top = getNumberOrDefault(data.offset_top, 8);
      this.offset_right = getNumberOrDefault(data.offset_right, 8);
      this.action = getStringOrDefault(data.action, "dismiss");
      this.shape = getStringOrDefault(data.shape, "circle");

      //surveys
      if (data !== null && data !== void 0 && data.position) {
        this.position = new Position(data.position);
      }
      this.enable_margin = data.enable_margin;
      if (this.enable_margin) this.margin = new Margin(data.margin);
      this.enable_padding = data.enable_padding;
      if (this.enable_padding) this.padding = new Padding(data.padding);
      this.enable_border = data.enable_border;
      if (this.enable_border) this.border = new Border(data.border);
    }
    _createClass(CloseButton, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return CloseButton;
  }();

  /**
   * @constructor Icon
   * @example
   * Example of a icon model is
   *
   * icon: {
   *  path: "<assets-path>",
   *  height: 20,
   *  width: 20,
   *  position : "center",
   *  enable_padding: true,
   *  padding: {
   *   top : 10,
   *   bottom : 10,
   *   left : 12,
   *   right : 12
   *  },
   *  enable_margin: true,
   *  margin: {
   *   top : 10,
   *   bottom : 10,
   *   left : 12,
   *   right : 12
   *  },
   *  enable_border : true,
   *  border: {
   *    enable : true,
   *    radius : 50,
   *    color : "#FFFFFF",
   *    width : 2,
   *    style : "dotted"
   *  }
   * }
   */
  var Icon = /*#__PURE__*/function () {
    function Icon() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Icon);
      this.path = getStringOrDefault(data.path, "");
      this.width = getNumberOrDefault(data.width, 48);
      this.height = getNumberOrDefault(data.height, 48);
      this.enable_margin = data.enable_margin;
      this.margin = new Margin(data.margin);
      this.enable_padding = data.enable_padding;
      this.padding = new Padding(data.padding);
      this.enable_border = data.enable_border;
      this.border = new Border(data.border);
      this.alignment = getStringOrDefault(data.alignment, CENTER);
    }
    _createClass(Icon, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return Icon;
  }();

  /**
   * @constructor EmbeddedVideo
   * @example
   * Example of a EmbeddedVideo model is
   *
   * embed: {
   *   html : "<iframe><video></video></iframe>",
   * }
   */
  var EmbeddedVideo = /*#__PURE__*/_createClass(function EmbeddedVideo() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, EmbeddedVideo);
    this.html = data.html;
  });

  /**
   * @constructor Video
   * @example
   * Example of a Video model is
   *
   * video: {
   *  path: "<assets-path>",
   *  height: 360,
   *  width: 360,
   *  enable_border : true,
   *  border: {
   *    enable : true,
   *    radius : 50,
   *    color : "#FFFFFF",
   *    width : 2,
   *    style : "dotted"
   *  },
   *  enable_embed : true,
   *  embed: {
   *   enable : true,
   *   html : "<iframe><video></video></iframe>",
   *  },
   *  enable_audio:true
   * }
   */
  var Video = /*#__PURE__*/function () {
    function Video() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Video);
      this.path = getStringOrDefault(data.path, "");
      this.width = getNumberOrDefault(data.width, 360);
      this.height = getNumberOrDefault(data.height, 360);
      this.enable_embed = data.enable_embed;
      this.embed = new EmbeddedVideo(data.embed);
      this.enable_border = data.enable_border;
      this.border = new Border(data.border);
      this.enable_audio = data.enable_audio;
      this.format = getStringOrDefault(data.format, "video/mp4");
    }
    _createClass(Video, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return Video;
  }();

  /**
   * @constructor Font
   * @example
   * Example of a Font model is
   *
   * font: {
   *  family:"sans-serif",
   *  size : 14,
   *  style : "bold",
   *  weight : "normal"
   * }
   */
  var Font = /*#__PURE__*/_createClass(function Font() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Font);
    this.family = getStringOrDefault(data.family, "sans-serif");
    this.size = getNumberOrDefault(data.size, "14");
    this.style = getStringOrDefault(data.style, "bold").toLowerCase();
    this.source = data === null || data === void 0 ? void 0 : data.source;
    this.weight = data.weight;
  });

  /**
   * @constructor Text
   * @example
   * Example of a Text model is
   *
   * text: {
   *  alignment:"center",
   *  color:"red",
   *  font: {
   *   family:"sans-serif",
   *   size : 14,
   *   style : "bold",
   *   weight : "normal"
   *  },
   *  enable_padding: true,
   *  padding: {
   *   top : 10,
   *   bottom : 10,
   *   left : 12,
   *   right : 12
   *  },
   *  enable_margin: true,
   *  margin: {
   *   top : 10,
   *   bottom : 10,
   *   left : 12,
   *   right : 12
   *  },
   *  "is_dynamic_text" : true,
   *  "is_dynamic_script" : false,
   *  "script": {
   *   "cmds": "e abc;e zzz;e x;e y;r \"Hi y-{} x- {} zzz-{} abc-{}\",4",
   *   "vmap": {
   *       "x": {
   *           "t": "u",
   *           "n": "os_version",
   *           "def": "wind",
   *           "id": 1239
   *       },
   *       "y": {
   *           "t": "s",
   *           "n": "location",
   *           "def": "AP",
   *           "id": 1235
   *       },
   *       "zzz": {
   *           "t": "v",
   *           "n": "asdfasdf",
   *           "def": "NoValue",
   *           "id": 1236
   *       },
   *       "abc": {
   *           "t": "ev",
   *           "n": "apx_app_opened",
   *           "def": "-1",
   *           "prop": "apx_lt_count",
   *           "id": 1237
   *       }
   *   },
   *   "src": "Hi y-{y} x- {x} zzz-{zzz} abc-{abc}",
   *   "t": 0
   *  },
   * segments : [],
   * quote : false,
   * }
   */
  var Text = /*#__PURE__*/function () {
    function Text() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Text);
      this.background_color = data === null || data === void 0 ? void 0 : data.background_color;
      this.alignment = getStringOrDefault(data.alignment, "center").toLowerCase();
      this.color = getColorOrDefault(data.color, "#FFF").toLowerCase();
      this.font = new Font(data.font);
      this.text = getStringOrDefault(data.text, "");
      this.localized_messages = data.localized_messages;
      this.enable_margin = data.enable_margin;
      this.margin = new Margin(data.margin);
      this.enable_padding = data.enable_padding;
      this.padding = new Padding(data.padding);
      this.enable_icon = data.enable_icon;
      this.icon = new Icon(data.icon);
      this.link_config = data.link_config;
      this.is_dynamic_text = data.is_dynamic_text;
      this.is_dynamic_script = data.is_dynamic_script;
      this.script = data.script;
      this.segments = data.segments;
      this.quote = data.quote;
    }
    _createClass(Text, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return Text;
  }();

  /**
   * @constructor Direction
   * @example
   * Example of a Direction model is
   *
   * direction: {
   *  nudge : "vertical",
   *  non_media : "vertical",
   *  buttons : "vertical"
   * }
   */
  var Direction = /*#__PURE__*/_createClass(function Direction() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Direction);
    this.nudge = getStringOrDefault(data.nudge, DIRECTION.VERTICAL);
    this.non_media = getStringOrDefault(data.non_media, DIRECTION.VERTICAL);
    this.buttons = getStringOrDefault(data.buttons, DIRECTION.VERTICAL);
  });

  /**
   * @constructor Gradient
   * @example
   * Example of a Gradient model is
   *
   * gradient: {
   *  direction : "to right",
   *  colors : ["#FFF","#000"]
   * }
   */
  var Gradient = /*#__PURE__*/function () {
    function Gradient() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Gradient);
      this.direction = getStringOrDefault(data.direction, "to right");
      this.colors = getArrayOrDefault(data.colors, ["#FFF", "000"]);
    }
    _createClass(Gradient, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return Gradient;
  }();

  /**
   * @constructor Button
   * @example
   * Example of a Button model is
   *
   * button : {
   *  slot: 1,
   *  color: "#27a4f2",
   *  type: "stepper",
   *  sub_type: "number",
   *  enable_action: true,
   *  action: {
   *    type: "dismiss",
   *    url: "",
   *    is_external: true,
   *    is_ir: false,
   *    is_within:true,
   *    callback: ()=>{}
   *  },
   * enable_border: true,
   * border: {
   *   radius: 0,
   *   color: "#000000",
   *   width: 0,
   *   style:"solid"
   * },
   * enable_margin: true,
   * margin: {
   *   bottom: 18,
   *   left: 8,
   *   right: 8,
   *   top: 18,
   * },
   * enable_padding: true,
   * padding: {
   *   bottom: 0,
   *   left: 0,
   *   right: 0,
   *   top: 0,
   * },
   *  enable_text:true,
   *  text: {
   *   alignment: "center",
   *   color: "red",
   *   font: {
   *     family: "sans-serif",
   *     size: 14,
   *     style: "bold",
   *     weight: "normal",
   *   },
   *   enable_padding: true,
   *   padding: {
   *     top: 10,
   *      bottom: 10,
   *     left: 12,
   *     right: 12,
   *   },
   *   enable_margin: true,
   *   margin: {
   *     top: 10,
   *     bottom: 10,
   *     left: 12,
   *     right: 12,
   *   },
   *   isDynamicText: true,
   *   script: {
   *     cmds: 'e abc;e zzz;e x;e y;r "Hi y-{} x- {} zzz-{} abc-{}",4',
   *     vmap: {
   *       x: {
   *         t: "u",
   *          n: "os_version",
   *         def: "wind",
   *         id: 1239,
   *       },
   *       y: {
   *         t: "s",
   *         n: "location",
   *         def: "AP",
   *         id: 1235,
   *       },
   *       zzz: {
   *         t: "v",
   *          n: "asdfasdf",
   *         def: "NoValue",
   *         id: 1236,
   *       },
   *       abc: {
   *         t: "ev",
   *         n: "apx_app_opened",
   *         def: "-1",
   *         id: 1237,
   *       },
   *       prop: "apx_lt_count",
   *     },
   *      src: "Hi y-{y} x- {x} zzz-{zzz} abc-{abc}",
   *     t: 0,
   *   },
   *   segments: [],
   *   quote: false,
   * },
  }

  */
  var Button = /*#__PURE__*/_createClass(function Button() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Button);
    if (data !== null && data !== void 0 && data.position) {
      this.position = new Position(data.position);
    }
    if ((data === null || data === void 0 ? void 0 : data.slot) === undefined) {
      this.slot = getSlotNumberByPosition(this.position.position);
    } else {
      this.slot = getNumberOrDefault(data.slot, 0);
    }
    this.type = getStringOrDefault(data.type, "button");
    this.sub_type = getStringOrDefault(data.sub_type, "");
    this.color = getColorOrDefault(data.color, "#FFF");
    this.enable_action = data.enable_action;
    this.action = data.action;
    this.enable_margin = data.enable_margin;
    this.margin = new Margin(data.margin);
    this.enable_padding = data.enable_padding;
    this.padding = new Padding(data.padding);
    this.enable_border = data.enable_border;
    this.border = new Border(data.border);
    this.enable_text = data.enable_text;
    this.text = new Text(data.text);
    this.enable_gradient = data.enable_gradient;
    this.gradient = {};
    if (this.enable_gradient) {
      this.gradient = new Gradient(data.gradient);
    }
    this.action_config = data.action_config;
  });

  /**
   * @constructor BottomButton
   * @example
   * Example of a BottomButton model is
   *
   * {
   *  //button-config
   * }
   */
  var BottomButton = /*#__PURE__*/function (_Button) {
    _inherits(BottomButton, _Button);
    var _super = _createSuper(BottomButton);
    function BottomButton() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, BottomButton);
      return _super.call(this, data);
    }
    return _createClass(BottomButton);
  }(Button);

  /**
   * @constructor CenterButton
   * @example
   * Example of a CenterButton model is
   *
   * {
   *  //button-config
   * }
   */
  var CenterButton = /*#__PURE__*/function (_Button) {
    _inherits(CenterButton, _Button);
    var _super = _createSuper(CenterButton);
    function CenterButton() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, CenterButton);
      return _super.call(this, data);
    }
    return _createClass(CenterButton);
  }(Button);

  /**
   * @constructor TopButton
   * @example
   * Example of a TopButton model is
   *
   * {
   *  //button-config
   * }
   */
  var TopButton = /*#__PURE__*/function (_Button) {
    _inherits(TopButton, _Button);
    var _super = _createSuper(TopButton);
    function TopButton() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, TopButton);
      return _super.call(this, data);
    }
    return _createClass(TopButton);
  }(Button);

  /**
   * @constructor Buttons
   * @example
   * Example of a Buttons model is
   *
   * buttons: {
   *  bottom : [{},{}],
   *  center : [{}],
   *  top : [{},{}],
   * }
   */
  var Buttons = /*#__PURE__*/_createClass(function Buttons() {
    var _this = this;
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Buttons);
    this.background_color = data.background_color;
    this.enable_top = data.enable_top;
    this.enable_center = data.enable_center;
    this.enable_bottom = data.enable_bottom;
    this.bottom = [];
    this.center = [];
    this.top = [];
    var bottomButtons = getArrayOrDefault(data.bottom, []);
    bottomButtons.forEach(function (bottomButton) {
      _this.bottom.push(new BottomButton(bottomButton));
    });
    var centerButtons = getArrayOrDefault(data.center, []);
    centerButtons.forEach(function (centerButton) {
      _this.center.push(new CenterButton(centerButton));
    });
    var topButtons = getArrayOrDefault(data.top, []);
    topButtons.forEach(function (topButton) {
      _this.top.push(new TopButton(topButton));
    });
    this.enable_margin = data.enable_margin;
    if (this.enable_margin) this.margin = new Margin(data.margin);
    this.enable_padding = data.enable_padding;
    if (this.enable_padding) this.padding = new Padding(data.padding);
    this.enable_border = data.enable_border;
    if (this.enable_border) this.border = new Border(data.border);
    this.enable_gradient = data.enable_gradient;
    if (this.enable_gradient) this.gradient = new Gradient(data.gradient);
  });

  var NewModalInApp = /*#__PURE__*/function () {
    function NewModalInApp(config, terminationConfig, configId, name, showCallback, closeCallback, stepperCallBack, isWalkthrough) {
      var _this = this;
      var uis = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {};
      var index = arguments.length > 9 ? arguments[9] : undefined;
      _classCallCheck(this, NewModalInApp);
      _defineProperty(this, "closeListener", function () {
        clearTimeout(_this.terminationTimeoutId);
        _this.closeCallback(_this.overlayElement, "dismiss", ".apx-inapp-container".concat(_this.cssPostFix), _this.closeListener, _this.redirectionListener);
      });
      _defineProperty(this, "redirectionListener", function () {
        if (window.location.href !== _this.launchPageUrl) {
          _this.closeCallback(_this.overlayElement, "dismiss", ".apx-inapp-container".concat(_this.cssPostFix), _this.closeListener, _this.redirectionListener);
        }
      });
      this.index = index;
      this.uis = uis;
      this.terminationConfig = terminationConfig;
      this.terminationTimeoutId = null;
      this.isWalkthrough = isWalkthrough;
      this.cssPostFix = "-".concat(configId, "-").concat(name).replaceAll(" ", "").replace(/[^\w\s]/gi, "");

      //this.height = config.height || 50; // Mostly auto. But for scrollable templates, should be the pixels.

      this.direction = new Direction(config.direction);
      this.position = new Position(config.position);
      this.enable_dismiss_actions = config.enable_dismiss_actions;
      if (this.enable_dismiss_actions) this.dismiss_actions = new DismissActions(config.dismiss_actions);
      this.enable_dimbackground = config.enable_dimbackground;
      if (this.enable_dimbackground) this.dimbackground = new DimBackground(config.dimbackground);
      this.templateContent = new TemplateContent(config, this.configId, this.name);
      this.configId = configId;
      this.name = name;
      this.showCallback = showCallback;
      this.closeCallback = closeCallback;
      this.stepperCallBack = stepperCallBack;
      this.dimBackgroundElement = null;
      this.overlayElement = null;
      this.inAppContainer = null;
      this.launchPageUrl = "";
    }
    _createClass(NewModalInApp, [{
      key: "createInAppModal",
      value: function createInAppModal() {
        //Set the background overlays
        this._setBackgroundOverlays();
        //Set the InApp styles
        this._setStyles();
        //Set the content
        this._setInAppModalContent();
        this._setPosition();
        //Set the auto termination
        this._setAutoTerminate();
        //Show the InApp
        this._showInApp();
      }
    }, {
      key: "_setBackgroundOverlays",
      value: function _setBackgroundOverlays() {
        var _this2 = this;
        // Modal main div
        this.launchPageUrl = window.location.href;
        this.overlayElement = document.createElement("div");
        this.overlayElement.classList.add("apx-inapp-overlay".concat(this.cssPostFix));
        var dismissableElement = this.overlayElement;

        // If dismiss outside touch is enabled, set a onclick listener to remove the overlay.
        // With dim background, it becomes the element to add the listener.
        // With out dim background, ideally dismiss out side touch should not be used. If used, set the listener on the overlay.

        if (this.enable_dimbackground) {
          // Modal overlay for the dimbackground and dismiss
          this.dimBackgroundElement = document.createElement("div");
          this.dimBackgroundElement.classList.add("apx-inapp-dimbackground-overlay".concat(this.cssPostFix));
          dismissableElement = this.dimBackgroundElement;
          this.overlayElement.appendChild(this.dimBackgroundElement);
          if (this.enable_dismiss_actions && this.dismiss_actions.outside_touch) {
            dismissableElement.onclick = function () {
              clearTimeout(_this2.terminationTimeoutId);
              dismissableElement.onclick = null;
              _this2.closeCallback(_this2.overlayElement, "dismiss", ".apx-inapp-container".concat(_this2.cssPostFix), _this2.closeListener, _this2.redirectionListener);
            };
          }
        } else {
          if (this.enable_dismiss_actions && this.dismiss_actions.outside_touch) {
            document.body.addEventListener("click", this.closeListener);
          }
        }
        if (!this.enable_dimbackground) {
          document.body.addEventListener("click", this.redirectionListener);
        }
        // Append the overlay to the body. All the element of the InApp are children of this overlay.
        document.body.appendChild(this.overlayElement);
      }
    }, {
      key: "_setStyles",
      value: function _setStyles() {
        var styles = "\n      ".concat(this._getBackgroundContainerStyles(), " \n    ").replaceAll("\n", "").replace(/[\s]{2,999}/g, "");
        var styleNode = document.createElement("style");
        styleNode.setAttribute("id", "apxor-style-" + this.configId);
        styleNode.innerHTML = styles;
        this.overlayElement.appendChild(styleNode);
      }
    }, {
      key: "_getBackgroundContainerStyles",
      value: function _getBackgroundContainerStyles() {
        // Set the dim background color and opacity only if dim background is enabled.
        var backgroundContainerStyle = "\n      .apx-inapp-overlay".concat(this.cssPostFix, " {\n        width:100%;\n        height:100%;\n      }\n      .apx-inapp-dimbackground-overlay").concat(this.cssPostFix, " {\n        width:100%;\n        height:100%;\n        position:fixed;\n        top:0;\n        left:0;\n        z-index:999;\n        background-color:").concat(this.enable_dimbackground ? this.dimbackground.color : "transparent", ";\n        ").concat(this.enable_dimbackground ? "opacity: ".concat(this.dimbackground.opacity, ";") : "", "\n        overflow: auto;\n      }\n    ");
        return backgroundContainerStyle;
      }
    }, {
      key: "_setInAppModalContent",
      value: function _setInAppModalContent() {
        this.inAppContainer = this.templateContent.createTemplateContent();
        this.inAppContainer.style.zIndex = 99999;
        this.overlayElement.appendChild(this.inAppContainer);
      }
    }, {
      key: "_setPosition",
      value: function _setPosition() {
        this.inAppContainer.style.position = "fixed";
        switch (this.position.position) {
          case INAPP_POSITION.TOP_LEFT:
            this.inAppContainer.style.top = "0px";
            this.inAppContainer.style.left = "0px";
            break;
          case INAPP_POSITION.TOP_CENTER:
            this.inAppContainer.style.top = "0px";
            this.inAppContainer.style.left = "50%";
            this.inAppContainer.style.webkitTransform = "translate(-50%, 0px)";
            this.inAppContainer.style.MozTransform = "translate(-50%, 0px);";
            break;
          case INAPP_POSITION.TOP_RIGHT:
            this.inAppContainer.style.top = "0px";
            this.inAppContainer.style.right = "0px";
            break;
          case INAPP_POSITION.BOTTOM_LEFT:
            this.inAppContainer.style.bottom = "0px";
            this.inAppContainer.style.left = "0px";
            break;
          case INAPP_POSITION.BOTTOM_CENTER:
            this.inAppContainer.style.bottom = "0px";
            this.inAppContainer.style.left = "50%";
            this.inAppContainer.style.webkitTransform = "translate(-50%, 0px)";
            this.inAppContainer.style.MozTransform = "translate(-50%, 0px);";
            break;
          case INAPP_POSITION.BOTTOM_RIGHT:
            this.inAppContainer.style.bottom = "0px";
            this.inAppContainer.style.right = "0px";
            break;
          case INAPP_POSITION.CENTER:
            this.inAppContainer.style.top = "50%";
            this.inAppContainer.style.left = "50%";
            this.inAppContainer.style.webkitTransform = "translate(-50%, -50%)";
            this.inAppContainer.style.MozTransform = "translate(-50%, -50%);";
            break;
          default:
            this.inAppContainer.style.top = "50%";
            this.inAppContainer.style.left = "50%";
            this.inAppContainer.style.webkitTransform = "translate(-50%, -50%)";
            this.inAppContainer.style.MozTransform = "translate(-50%, -50%);";
            break;
        }
      }
    }, {
      key: "_setAutoTerminate",
      value: function _setAutoTerminate() {
        var _this3 = this;
        if (this.terminationConfig.auto_dismiss === true) {
          this.terminationTimeoutId = window.setTimeout(function () {
            _this3.closeCallback(_this3.overlayElement, "dismiss", ".apx-inapp-container".concat(_this3.cssPostFix), _this3.closeListener, _this3.redirectionListener);
          }, this.terminationConfig.duration);
        }
      }
    }, {
      key: "_showInApp",
      value: function _showInApp() {
        this.inAppContainer.classList.toggle("open");
        this.showCallback();
      }
    }]);
    return NewModalInApp;
  }();

  /**
   * @constructor PIPButton
   * @example
   * Example of a pip button model is
   *
   * pip_button: {
   *  color: "#172B4D",
   *  fill_color: "#FFFFFF",
   *  type: "normal/filled/custom",
   *  path: "<assets-path>",
   *  offset_top: 8,
   *  offset_right: 8,
   *  height: 20,
   *  width: 20,
   *  action: "cancel/dismiss",
   * }
   */
  var PIPButton = /*#__PURE__*/function () {
    function PIPButton() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, PIPButton);
      this.color = getColorOrDefault(data.color, "#FFFFFF");
      this.fill_color = getColorOrDefault(data.fill_color, "#FFFFFF");
      this.type = getStringOrDefault(data.type, "normal");
      this.path = data.path;
      this.offset_top = getNumberOrDefault(data.offset_top, 8);
      this.offset_right = getNumberOrDefault(data.offset_right, 8);
      this.height = getNumberOrDefault(data.height, 24);
      this.width = getNumberOrDefault(data.width, 24);
      this.action = getStringOrDefault(data.action, "dismiss");
    }
    _createClass(PIPButton, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return PIPButton;
  }();

  /**
   * @constructor PIP
   * @example
   * Example of a Arrow model is
   *
   * {
   *  enable_toggles : true,
   *  enable_pip : true
   * }
   */
  var PIP = /*#__PURE__*/function () {
    function PIP() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, PIP);
      this.enable_toggles = data.enable_toggles;
    }
    _createClass(PIP, null, [{
      key: "isEnabled",
      value: function isEnabled(data) {
        if (isUndefined$1(data) || isNull(data) || isEmptyObject(data)) {
          return false;
        } else {
          return true;
        }
      }
    }]);
    return PIP;
  }();

  var Logger = console;
  var VideoInApp = /*#__PURE__*/function () {
    /**
     * @class VideoInApp
     * @param {JSON} config
     * @param {function} showCallback
     * @param {function} hideCallback
     */
    function VideoInApp(config, terminationConfig, configId, name, showCallback, _hideCallback) {
      var _this = this;
      _classCallCheck(this, VideoInApp);
      /**
       * @function showVideoInApp
       * @description Shows the video InApp with the configured mode.
       */
      _defineProperty(this, "showVideoInApp", function () {
        _this.createPlayer();
        try {
          // In PIP mode, only after the video metadata is loaded, show the PIP.
          if (_this.mode == VIDEOS_MODES.PIP) {
            var video = _this.videoElement;
            var hideCallback = _this.hideCallback;
            video.onloadedmetadata = function () {
              var _this2 = this;
              video.disablePictureInPicture = false;
              video.requestPictureInPicture().then(function () {
                video.play();
              })["catch"](function (error) {
                Logger.error("Can't show PIP:".concat(error));
                window.Apxor.logAppEvent("apx_video_inapp_failed", {
                  campaignName: _this2.name,
                  id: _this2.configId,
                  failureReason: error
                });
                hideCallback();
              });
            };
            video.onabort = function () {
              Logger.error("Can't show video: resource is not fully loaded");
              window.Apxor.logAppEvent("apx_video_inapp_failed", {
                campaignName: this.name,
                id: this.configId,
                failureReason: "Can't show video, meta data not loaded"
              });
              this.hideCallback();
            };
            video.onstalled = function () {
              Logger.error("Can't show video: data is unexpectedly not forthcoming");
              window.Apxor.logAppEvent("apx_video_inapp_failed", {
                campaignName: this.name,
                id: this.configId,
                failureReason: "Can't show video, data is unexpectedly not forthcoming"
              });
              this.hideCallback();
            };
          } else {
            // As the video player is hidden by default, unhide if the mode is not PIP.
            _this.unhideVideoPlayer();
          }
          _this.showCallback();
        } catch (e) {
          Logger.error("Can't show video:".concat(e));
          window.Apxor.logAppEvent("apx_video_inapp_failed", {
            campaignName: _this.name,
            id: _this.configId,
            failureReason: e
          });
          _this.hideCallback();
        }
      });
      /**
       * @function _getHeightWidthFromResolution
       * @private
       * @description Sets the height and width of the video element.
       * For portrait - width is set to 50% of the screen and height is auto adjusted based on resolution.
       * For landscape - height is set to 50% of the screen and width is auto adjusted based on resolution.
       */
      _defineProperty(this, "_getHeightWidthFromResolution", function () {
        var _getHeightWidthFromRe = getHeightWidthFromResolution(_this.video, 1),
          width = _getHeightWidthFromRe.width,
          height = _getHeightWidthFromRe.height;
        _this.height = height;
        _this.width = width;
      });
      /**
       * @function _removeVideoPlayerStyles
       * @private
       * @description Removes the video player style element.
       */
      _defineProperty(this, "_removeVideoPlayerStyles", function () {
        var playerStyles = document.getElementById("apx-mpl-styles");
        if (playerStyles) {
          playerStyles.remove();
        }
      });
      /**
       * @function _setVideoControlListeners
       * @private
       * @description Attach listeners on the video controls
       */
      _defineProperty(this, "_setVideoControlListeners", function () {
        // Listener for the video end. Display the CTA's when the video ends.
        _this.videoElement.addEventListener("ended", function () {
          var ctaButtons = document.getElementById("apx-cta-btn");
          if (ctaButtons) {
            ctaButtons.classList.remove("apx-video-hide-elmt".concat(_this.cssPostFix));
          }
          if (!document.fullscreenElement) {
            _this.totalDurationMinimised += Math.round(_this.videoElement.duration) - Math.round(_this.slotStartTime);
            _this.durationMinimisedSlots.push("".concat(Math.round(_this.slotStartTime), "-").concat(Math.round(_this.videoElement.duration)));
          } else {
            _this.totalDurationMaximised += Math.round(_this.videoElement.duration) - Math.round(_this.slotStartTime);
            _this.durationMaximisedSlots.push("".concat(Math.round(_this.slotStartTime), "-").concat(Math.round(_this.videoElement.duration)));
          }
        });

        // Listener for the play button. After the video ended, CTA buttons are shown.
        // If the play button is clicked again, the CTA buttons should be removed.
        _this.videoElement.addEventListener("play", function () {
          if (!_this.inAppShown) {
            // Initialize the fields to keep the track of aditional info required for logging events.
            _this.minimisedCount = 0;
            _this.maximisedCount = 0;
            _this.totalDurationMinimised = 0;
            _this.totalDurationMaximised = 0;
            _this.durationMinimisedSlots = [];
            _this.durationMaximisedSlots = [];
            _this.volumeClickedCount = 0;
            _this.slotStartTime = 0; // to tract the start time of the minimize and maximize time slot.
            _this.slotStartTimeVolumeChange = 0; // to track the start time of the volume change time slot.

            window.Apxor.logAppEvent("inapp_shown", {
              message_name: _this.name,
              visibleScreen: location.pathname,
              inappType: "PIP Inapp",
              autoReplay: _this.videoElement.loop ? "On" : "Off",
              defaultSound: _this.videoElement.muted ? "Mute" : "Unmute",
              id: _this.configId,
              videoDuration: Math.round(_this.videoElement.duration),
              videoResolution: "".concat(_this.videoElement.videoWidth, "x").concat(_this.videoElement.videoHeight),
              videoConfiguration: "Streaming"
            });
            _this.inAppShown = true;
          }
          if (_this.videoElement.currentTime === 0 || _this.videoElement.currentTime === _this.videoElement.duration) {
            _this.replayCount++;
            _this.slotStartTime = 0; // to tract the start time of the minimize and maximize time slot.
            _this.slotStartTimeVolumeChange = 0; // to track the start time of the volume change time slot.
          }

          var ctaButtons = document.getElementById("apx-cta-btn");
          if (ctaButtons) {
            ctaButtons.classList.add("apx-video-hide-elmt".concat(_this.cssPostFix));
          }
        });
        _this.videoElement.addEventListener("fullscreenchange", function () {
          _this.slotEndTime = _this.videoElement.currentTime;
          if (document.fullscreenElement) {
            _this.maximisedCount++;
            _this.durationMinimised = Math.round(_this.slotEndTime) - Math.round(_this.slotStartTime);
            if (_this.videoElement.currentTime !== _this.videoElement.duration) {
              _this.totalDurationMinimised += _this.durationMinimised;
              _this.durationMinimisedSlots.push("".concat(Math.round(_this.slotStartTime), "-").concat(Math.round(_this.slotEndTime)));
            }
            window.Apxor.logAppEvent("apx_video_inapp_maximised", {
              message_name: _this.name,
              durationMinimised: _this.durationMinimised,
              durationSlotMinimised: "".concat(Math.round(_this.slotStartTime), "-").concat(Math.round(_this.slotEndTime)),
              id: _this.configId,
              totalDurationWatched: Math.round(_this.totalDurationMinimised),
              totalDurationWatchedSlot: _this.durationMinimisedSlots,
              maximisedCount: _this.maximisedCount
            });
          } else {
            _this.durationMaximised = Math.round(_this.slotEndTime) - Math.round(_this.slotStartTime);
            _this.minimisedCount++;
            if (_this.videoElement.currentTime !== _this.videoElement.duration) {
              _this.totalDurationMaximised += _this.durationMaximised;
              _this.durationMaximisedSlots.push("".concat(Math.round(_this.slotStartTime), "-").concat(Math.round(_this.slotEndTime)));
            }
            window.Apxor.logAppEvent("apx_video_inapp_minimised", {
              message_name: _this.name,
              durationMaximised: _this.durationMaximised,
              durationSlotMaximised: "".concat(Math.round(_this.slotStartTime), "-").concat(Math.round(_this.slotEndTime)),
              id: _this.configId,
              totalDurationWatched: Math.round(_this.totalDurationMaximised),
              totalDurationWatchedSlot: _this.durationMaximisedSlots,
              minimisedCount: _this.minimisedCount
            });
          }
          _this.slotStartTime = _this.videoElement.currentTime;
        });
        _this.videoElement.addEventListener("volumechange", function () {
          if (!isNaN(_this.slotStartTimeVolumeChange)) {
            _this.volumeClickedCount++;
            window.Apxor.logAppEvent("apx_video_inapp_volume_button_clicked", {
              message_name: _this.name,
              id: _this.configId,
              actionPerformed: _this.videoElement.muted ? "mute" : "unmute",
              totalDurationWatchedSlot: "".concat(Math.round(_this.slotStartTimeVolumeChange), "-").concat(Math.round(_this.videoElement.currentTime)),
              totalDurationWatched: Math.round(_this.videoElement.currentTime) - Math.round(_this.slotStartTimeVolumeChange)
            });
            _this.slotStartTimeVolumeChange = _this.videoElement.currentTime;
          }
        });
      });
      /**
       * @function _setPIPtoggleListeners
       * @private
       * @description Attach listeners for the PIP toggle. i.e. for the PIP enter and PIP exit
       */
      _defineProperty(this, "_setPIPtoggleListeners", function () {
        var _this$terminationConf;
        if (_this.mode === "PIP" && !((_this$terminationConf = _this.terminationConfig) !== null && _this$terminationConf !== void 0 && _this$terminationConf.auto_dismiss)) {
          // On Exit of the PIP,
          // In PIP mode - Remove the PIP and also remove the video player from DOM
          _this.videoElement.addEventListener("leavepictureinpicture", function () {
            _this._onClose("web_pip_x_icon_clicked");
          }, false);
        } else if (_this.mode === "mini") {
          if (_this.enable_pip_button) {
            // On Enter of the PIP,
            // Hide the video player. It is not a good idea to show both video player and PIP at the same time.
            var onEnterPip = function onEnterPip() {
              _this.videoPlayer.classList.add("apx-video-hide-elmt".concat(_this.cssPostFix));
            };
            _this.videoElement.addEventListener("enterpictureinpicture", onEnterPip, false);
            // Enable the PIP toggle listeners only if the config says so.
            if (_this.pip.enable_toggles) {
              // On Exit of the PIP,
              // In Video Player mode(Note that PIP can be opened from video player) - Show the video player. It means that PIP merges to the video player.
              var onExitPip = function onExitPip() {
                _this.videoElement.disablePictureInPicture = true;
                _this.videoPlayer.classList.remove("apx-video-hide-elmt".concat(_this.cssPostFix));
              };
              _this.videoElement.addEventListener("leavepictureinpicture", onExitPip, false);
            } else {
              // on Exit of the PIP,
              // when enable_toggles are off then, perform cleanup activities(remove the video player, remove styles and set the correct rtm status.) and log events.
              _this.videoElement.addEventListener("leavepictureinpicture", function () {
                _this._onClose("web_pip_x_icon_clicked");
              }, false);
            }
          }
        }
      });
      /**
       * @function _setCustomControls
       * @private Sets the custom controls on the video player.
       * PIP and close are the custom controls that are created and positions on the video.
       */
      _defineProperty(this, "_setCustomControls", function () {
        _this.enable_close_button;
        if (_this.enable_close_button) {
          var closeButton = document.createElement("span");
          if (_this.close_button.type === CLOSE_BUTTON_STYLE.NORMAL) {
            closeButton.innerHTML = getCloseSVG(_this.close_button.width, _this.close_button.height, _this.close_button.color);
          } else if (_this.close_button.type === CLOSE_BUTTON_STYLE.FILL) {
            if (_this.close_button.shape === "circle") {
              closeButton.innerHTML = getCloseWithCircleSVG(_this.close_button.width, _this.close_button.height, _this.close_button.fill_color, _this.close_button.color);
            } else {
              closeButton.innerHTML = getCloseWithRectangleSVG(_this.close_button.width, _this.close_button.height, _this.close_button.fill_color, _this.close_button.color);
            }
          } else {
            closeButton.innerHTML = "<img src=\"".concat(_this.close_button.path, "\" width=\"").concat(_this.close_button.width, "px\" height=\"").concat(_this.close_button.height, "px\"></img>");
          }
          closeButton.classList.add("apx-video-close-btn".concat(_this.cssPostFix));
          // On click of the close button, remove the video player, remove styles and set the correct rtm status.
          closeButton.addEventListener("click", function () {
            _this._onClose();
          });
          _this.videoPlayer.appendChild(closeButton);
        }
        if (_this.enable_pip_button) {
          var pipButton = document.createElement("span");
          pipButton.innerHTML = getPIPSVG(_this.pip_button.width, _this.pip_button.height, _this.pip_button.color);
          if (_this.pip_button.path) {
            pipButton.innerHTML = "<img src=\"".concat(_this.pip_button.path, "\" width=\"").concat(_this.pip_button.width, "px\" height=\"").concat(_this.pip_button.height, "px\"></img>");
          }
          pipButton.classList.add("apx-video-pip-btn".concat(_this.cssPostFix));
          // PIP button click listener.
          // To remove the default PIP option of the video element, PIP is disabled.
          // When the custom PIP button is clicked, enable the PIP and request for PIP.
          pipButton.addEventListener("click", function () {
            try {
              _this.videoElement.disablePictureInPicture = false;
              _this.videoElement.requestPictureInPicture();
            } catch (e) {
              console.log("Error \n ".concat(e, " \n while starting the PIP"));
            }
          });
          _this.videoPlayer.appendChild(pipButton);
        }
      });
      /**
       * @function hideVideoPlayer
       * @description Sets the visibility of the video player to hidden.
       */
      _defineProperty(this, "hideVideoPlayer", function () {
        _this.videoPlayer.classList.add("apx-video-hide-elmt".concat(_this.cssPostFix));
      });
      /**
       * @function unhideVideoPlayer
       * @description Unhides video player.
       */
      _defineProperty(this, "unhideVideoPlayer", function () {
        _this.videoPlayer.classList.remove("apx-video-hide-elmt".concat(_this.cssPostFix));
      });
      /**
       * @function getVideoElement
       * @returns {HTMLElement} Video ekement
       */
      _defineProperty(this, "getVideoElement", function () {
        return _this.videoElement;
      });
      this.videoPlayer = null;
      this.videoElement = null;
      this.showCallback = showCallback;
      this.terminationConfig = terminationConfig;
      this.hideCallback = _hideCallback;
      this.height = 320;
      this.width = 320;
      this.configId = configId;
      this.name = name || "VideoPlayer";
      this.cssPostFix = "-".concat(this.configId, "-").concat(this.name).replaceAll(" ", "").replace(/[^\w\s]/gi, "");
      this.replayCount = 0;
      this.inAppShown = false; // This boolean restricts the "inapp_shown" event from logging multiple times.

      /********************************Configs*********************************************************/
      this.videoConfig = config;
      this.bg_color = config.bg_color;
      this.mode = getStringOrDefault(config.mode, "PIP");
      this.position = new Position(config.position);
      this.enable_buttons = config.enable_buttons;
      if (this.enable_buttons) this.buttons = new Buttons(config.buttons);
      this.direction = new Direction(config.direction);
      this.enable_close_button = config.enable_close_button;
      if (this.enable_close_button) this.close_button = new CloseButton(config.close_button);
      this.enable_pip_button = config.enable_pip_button;
      if (this.enable_pip_button) this.pip_button = new PIPButton(config.pip_button);
      this.video = new Video(config.video);
      this.pip = new PIP(config.pip);
    }

    /**
     * @function isAVideoBeingPlayed
     * @static
     * @description Checks if a video InApp is already being played.
     * @returns {boolean}
     */
    _createClass(VideoInApp, [{
      key: "createPlayer",
      value:
      /**
       * @function createPlayer
       * @description Creates a video player with all the config options and attaches it to the document body
       */
      function createPlayer() {
        //Create a container for the video player and add the styles
        this.videoPlayer = document.createElement("div");
        this.videoPlayer.setAttribute("id", "apx-video-player");
        this.videoPlayer.style.backgroundColor = this.bg_color;

        // Video has a resolution, not deviating from the resolution set the height and width.
        this._getHeightWidthFromResolution();
        //Generate the styles and add them to the document head.
        this._setVideoPlayerStyles();
        //Set the position of the video player with in the 5 possible positions.
        this._setVideoPlayerPosition();
        //Create a video element,set the source and add to the container.
        this._setPlayerContent();
        //Set the listeners on the video control buttons.
        this._setVideoControlListeners();
        //Attach listeners for the PIP toggle. i.e. for the PIP enter and PIP exit
        this._setPIPtoggleListeners();
        //Set the custom close and PIP controls. Not using the defaults from the html video element.
        //Reason - We want to position them at the top right and left positions.
        this._setCustomControls();
        //Generate and postion the CTA buttons on the video. By default hidden, visible only when video is completed
        this._setButtons(BUTTON_CONTAINER_POSITION.CENTER);
        //Hide the video player. Display it based on the video mode. Videoplayer for "video" mode and a direct PIP  for "PIP" mode.
        this.hideVideoPlayer();
        //If the auto dismiss is enabled, sets the timeout to call the InApp close.
        this._setAutoTerminate();
        document.body.appendChild(this.videoPlayer);
      }
    }, {
      key: "_setVideoPlayerStyles",
      value:
      /**
       * @function _setVideoPlayerStyles
       * @private
       * @description Creates the styles for the video player and attaches that to the document head.
       */
      function _setVideoPlayerStyles() {
        var playerStyles = document.getElementById("apx-mpl-styles");
        // If the styles are already added to the customers website, do not re-add.
        if (!playerStyles) {
          var styleElement = document.createElement("style");
          styleElement.setAttribute("id", "apx-mpl-styles");
          var pipButtonStyles = this.enable_pip_button ? "\n      width: ".concat(this.pip_button.width, "px;\n      height:  ").concat(this.pip_button.height, "px;\n      ") : "";
          var closeButtonStyles = this.enable_close_button ? "\n      top: ".concat(this.close_button.offset_top, "px;\n      right: ").concat(this.close_button.offset_right, "px;\n      ") : "";
          styleElement.innerHTML = "\n          #apx-video-player {\n            width: ".concat(this.width, "px;\n            height: ").concat(this.height, "px;\n          }\n\n          div.apx-video-player").concat(this.cssPostFix, "--topLeft {\n            position: fixed;\n            top: 0;\n            left: 0;\n            background-color: ").concat(COLORS.BLACK, ";\n            z-index:99999999;\n          }\n          \n          div.apx-video-player").concat(this.cssPostFix, "--topRight {\n            position: fixed;\n            top: 0;\n            right: 0;\n            background-color: ").concat(COLORS.BLACK, ";\n            z-index:99999999;\n          }\n          \n          div.apx-video-player").concat(this.cssPostFix, "--bottomLeft {\n            position: fixed;\n            bottom: 0;\n            left: 0;\n            background-color: ").concat(COLORS.BLACK, ";\n            z-index:99999999;\n          }\n          \n          div.apx-video-player").concat(this.cssPostFix, "--bottomRight {\n            position: fixed;\n            bottom: 0;\n            right: 0;\n            background-color: ").concat(COLORS.BLACK, ";\n            z-index:99999999;\n          }\n\n          div.apx-video-player").concat(this.cssPostFix, "--center {\n            position: fixed;\n            left: 50%;\n            top: 50%;\n            background-color: ").concat(COLORS.BLACK, ";\n            transform: translate(-50%, -50%);\n            z-index:99999999;\n          }\n          .apx-video-hide-elmt").concat(this.cssPostFix, " {\n            display : none;\n          }\n\n          #apx-cta-btn.apx-video-hide-elmt").concat(this.cssPostFix, " {\n            display : none;\n          }\n\n          .apx-video-pip-btn").concat(this.cssPostFix, " {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            opacity: 0.3;\n            transition: opacity .3s ease;\n            cursor: pointer;\n            ").concat(pipButtonStyles, "\n          }\n\n          video:hover~.apx-video-pip-btn").concat(this.cssPostFix, " {\n            opacity: 1;\n          }\n          \n          .apx-video-close-btn").concat(this.cssPostFix, " {\n            position: absolute;\n            opacity: 0.3;\n            transition: opacity .3s ease;\n            cursor: pointer;\n            ").concat(closeButtonStyles, "\n          }\n\n          video:hover~.apx-video-close-btn").concat(this.cssPostFix, " {\n            opacity: 1;\n          }\n\n          .apx-video-cta").concat(this.cssPostFix, " {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            -webkit-transform: translate(-50%, -50%);\n            -moz-transform: translate(-50%, -50%);\n            width: auto;\n            height: auto;\n            transition: opacity .3s ease;\n            cursor: pointer;\n          }\n          \n          .bi::before,\n          [class^=\"bi-\"]::before,\n          [class*=\" bi-\"]::before {\n            display: inline-block;\n            font-style: normal;\n            font-weight: normal !important;\n            font-variant: normal;\n            text-transform: none;\n            line-height: 1;\n            vertical-align: -.125em;\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale;\n          }\n          \n          .bi-pip::before { \n            content: \"\f4ef\"; \n          }\n\n          .bi-x-circle::before { \n            content: \"\f623\"; \n          }\n\n      ");
          document.head.appendChild(styleElement);
        }
      }
    }, {
      key: "_setVideoPlayerPosition",
      value:
      /**
       * @function _setVideoPlayerPosition
       * @private
       * @description Video player can be position in 5 different places.
       * Depending on the config option set the position for the player. Position is set using the css classes.
       */
      function _setVideoPlayerPosition() {
        //Set the css class on the video player based on the postion in the configuration
        switch (this.position.position) {
          case INAPP_POSITION.TOP_LEFT:
            this.videoPlayer.classList.add("apx-video-player".concat(this.cssPostFix, "--topLeft"));
            break;
          case INAPP_POSITION.TOP_RIGHT:
            this.videoPlayer.classList.add("apx-video-player".concat(this.cssPostFix, "--topRight"));
            break;
          case INAPP_POSITION.BOTTOM_LEFT:
            this.videoPlayer.classList.add("apx-video-player".concat(this.cssPostFix, "--bottomLeft"));
            break;
          case INAPP_POSITION.BOTTOM_RIGHT:
            this.videoPlayer.classList.add("apx-video-player".concat(this.cssPostFix, "--bottomRight"));
            break;
          case INAPP_POSITION.CENTER:
            this.videoPlayer.classList.add("apx-video-player".concat(this.cssPostFix, "--center"));
            break;
          default:
            this.videoPlayer.classList.add("apx-video-player".concat(this.cssPostFix, "--bottomRight"));
            break;
        }
      }

      /**
       * @function _setPlayerContent
       * @private
       * @description Create a video element,sets the source and adds to the container.
       */
    }, {
      key: "_setPlayerContent",
      value: function _setPlayerContent() {
        var _window$Apxor;
        // Create video element
        this.videoElement = document.createElement("video");
        this.videoElement.width = this.width;
        this.videoElement.height = this.height;
        this.videoElement.style.objectFit = "fill";
        this.videoElement.controlsList = "nodownload";
        this.videoElement.controls = true;
        if (((_window$Apxor = window.Apxor) === null || _window$Apxor === void 0 ? void 0 : _window$Apxor.platform) === "ios") {
          this.videoElement.playsInline = true;
        }
        // By default disable the PIP. This is a hack to remove the default PIP option.
        // We want to have our own PIP button. On click of that button PIP will be enabled.
        this.videoElement.disablePictureInPicture = true;
        this.videoElement.autoplay = true;
        if (!this.video.enable_audio) {
          this.videoElement.muted = true;
        }
        // Create a video source.
        var sourceElement = document.createElement("source");
        //Set the video tag attributes
        sourceElement.setAttribute("src", this.video.path);
        sourceElement.setAttribute("type", this.video.format);
        this.videoElement.appendChild(sourceElement);
        this.videoPlayer.appendChild(this.videoElement);
      }
    }, {
      key: "_onClose",
      value:
      /**
       * @function _onClose
       * @private
       * @description Performs cleanup activities and log events on close of the mini player
       * @param {string} closeButtonName
       */
      function _onClose() {
        var closeButtonName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "web_minimise_x_clicked";
        try {
          if (this.inAppShown) {
            if (!document.fullscreenElement) {
              this.totalDurationMinimised += Math.round(this.videoElement.currentTime) - Math.round(this.slotStartTime);
              this.durationMinimisedSlots.push("".concat(Math.round(this.videoElement.currentTime), "-").concat(Math.round(this.slotStartTime)));
            } else {
              this.totalDurationMaximised += Math.round(this.videoElement.currentTime) - Math.round(this.slotStartTime);
              this.durationMaximisedSlots.push("".concat(Math.round(this.videoElement.currentTime), "-").concat(Math.round(this.slotStartTime)));
            }
          }
          this.videoPlayer.remove();
          this._removeVideoPlayerStyles();
          if (closeButtonName !== "auto_dismiss") {
            window.Apxor.logAppEvent("apx_video_inapp_close_button_clicked", {
              message_name: this.name,
              id: this.configId,
              totalDurationWatchedSlot: "0-".concat(Math.round(this.videoElement.currentTime)),
              totalDurationWatched: Math.round(this.videoElement.currentTime),
              closeButtonName: closeButtonName
            });
          }
          window.Apxor.logAppEvent("apx_inapp_dismissed", {
            campaignName: this.name,
            id: this.configId,
            totalDurationWatched: Math.round(this.videoElement.currentTime),
            totalDurationWatchedSlot: "0-".concat(Math.round(this.videoElement.currentTime)),
            totalReplayCount: this.replayCount,
            totalMinimiseCount: this.minimisedCount,
            totalMaximiseCount: this.maximisedCount,
            totalDurationMinimised: Math.round(this.totalDurationMinimised),
            totalDurationMaximised: Math.round(this.totalDurationMaximised),
            dismissType: closeButtonName,
            volumeClickedCount: this.volumeClickedCount,
            inappType: "PIP Inapp",
            apx_completed: this.videoElement.currentTime === this.videoElement.duration ? true : false,
            apx_completion_percentage: this.videoElement.currentTime / this.videoElement.duration
          });
          this.hideCallback("cancel");
        } catch (e) {
          console.log("Error \n ".concat(e, " \n occured while closing the video"));
        }
      }

      /**
       * @function _setButtons
       * @private
       * @description Generate the Button's and append them to the specified button container.
       *
       */
    }, {
      key: "_setButtons",
      value: function _setButtons(position) {
        var _this3 = this;
        if (!this.enable_buttons) {
          return;
        }
        if (this.buttons.enable_top || this.buttons.enable_center || this.buttons.enable_bottom) {
          var removeCallback = function removeCallback(isCancel, action, index) {
            try {
              var button;
              if (_this3.buttons.enable_top && _this3.buttons.top.length > 0) {
                button = _this3.buttons.top;
              }
              if (_this3.buttons.enable_center && _this3.buttons.center.length) {
                button = _this3.buttons.center;
              }
              if (_this3.buttons.enable_bottom && _this3.buttons.bottom.length) {
                button = _this3.buttons.bottom;
              }
              window.Apxor.logAppEvent("apx_video_inapp_button_clicked", {
                buttonName: button.at(index).text.text,
                redirection: button.at(index).action.type,
                totalDurationWatched: Math.round(_this3.videoElement.currentTime),
                message_name: _this3.name,
                id: _this3.configId,
                totalDurationWatchedSlot: "0-".concat(Math.round(_this3.videoElement.currentTime)),
                replayCount: _this3.replayCount
              });
              _this3.videoPlayer.remove();
              _this3._removeVideoPlayerStyles();
              _this3.hideCallback();
            } catch (e) {
              console.log("Can't close the video player\n".concat(e));
            }
          };
          var actionHandler = {
            next: removeCallback,
            prev: removeCallback,
            complete: removeCallback,
            cancel: removeCallback,
            _isCancelled: false,
            action: ""
          };
          var buttons_config = {};
          if (this.buttons.top.length > 0) {
            buttons_config = this.buttons.top;
          } else if (this.buttons.center.length > 0) {
            buttons_config = this.buttons.center;
          } else {
            buttons_config = this.buttons.bottom;
          }
          var buttons = generateButtonsBlock(this.configId, this.name, this.stepper, EVENT_PREFIX.INAPP, buttons_config, this.direction.buttons, position, actionHandler, this.isWalkthrough, this.uis, this.index);
          buttons.setAttribute("id", "apx-cta-btn");
          buttons.classList.add("apx-video-cta".concat(this.cssPostFix));
          buttons.classList.add("apx-video-hide-elmt".concat(this.cssPostFix));
          this.videoPlayer.appendChild(buttons);
        }
      }
    }, {
      key: "_setAutoTerminate",
      value:
      /**
       * @function _setAutoTerminate
       * @private
       * @description If the auto dismiss is enabled, sets the timeout to call the InApp close.
       */
      function _setAutoTerminate() {
        var _this$terminationConf2,
          _this4 = this;
        if (((_this$terminationConf2 = this.terminationConfig) === null || _this$terminationConf2 === void 0 ? void 0 : _this$terminationConf2.auto_dismiss) === true) {
          window.setTimeout(function () {
            if (document.pictureInPictureEnabled && document.pictureInPictureElement) {
              _this4.videoElement.pause();
              document.exitPictureInPicture();
            }
            _this4._onClose("auto_dismiss");
          }, this.terminationConfig.duration);
        }
      }
    }], [{
      key: "isAVideoBeingPlayed",
      value: function isAVideoBeingPlayed() {
        var videoPlayerElement = document.getElementById("apx-video-player");
        if (videoPlayerElement) {
          return true;
        }
        return false;
      }

      /**
       * @function canShowVideoInApp
       * @static
       * @description Checks if the video InApp can be created or not by checking the page binding.
       * @param {JSON} videoConfig
       * @returns {boolean}
       */
    }, {
      key: "canShowVideoInApp",
      value: function canShowVideoInApp(videoConfig) {
        var binding = videoConfig.binding,
          activity = videoConfig.activity;
        var showVideo = true;
        // If the current page is not where the video is bind, do not show the video
        if (binding && activity != "") {
          if (window.location.pathname !== activity) {
            showVideo = false;
          }
        }
        return showVideo;
      }
    }]);
    return VideoInApp;
  }();

  var RTM = /*#__PURE__*/_createClass(function RTM() {
    var _this = this;
    _classCallCheck(this, RTM);
    _defineProperty(this, "_configs", {});
    _defineProperty(this, "isShowingAction", false);
    _defineProperty(this, "currentAction", null);
    _defineProperty(this, "_currentTooltip", null);
    _defineProperty(this, "version", 51);
    _defineProperty(this, "isInitialised", false);
    _defineProperty(this, "_eventsInDynamicText", {});
    _defineProperty(this, "init", function () {
      _this.isInitialised = true;
      var oldPushState = history.pushState;
      history.pushState = function pushState() {
        var ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
      };
      var oldReplaceState = history.replaceState;
      history.replaceState = function replaceState() {
        var ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
      };
      window.addEventListener("popstate", function () {
        window.dispatchEvent(new Event("locationchange"));
      });
      window.addEventListener("locationchange", function () {
        _this.removeAll();
      });
    });
    _defineProperty(this, "show", function (uiJson, duration, uuid, name) {
      if (!_this.isInitialised) {
        _this.init();
      }
      window.addEventListener("pagehide", function () {
        var _window$Apxor, _window$Apxor$pageUnl;
        (_window$Apxor = window.Apxor) === null || _window$Apxor === void 0 || (_window$Apxor$pageUnl = _window$Apxor.pageUnloaded) === null || _window$Apxor$pageUnl === void 0 || _window$Apxor$pageUnl.call(_window$Apxor, uuid);
      });
      try {
        // console.log("Showing action for uuid:", uuid, uiJson, this.currentAction);
        if (_this.currentAction !== null && _this.currentAction !== undefined) {
          console.error("An action already being shown");
          return;
        }
        uiJson = uiJson.split("\n").join("\\n");
        var ui_config = JSON.parse(uiJson);
        var terminationConfig = {};
        terminationConfig["auto_dismiss"] = duration > 0;
        terminationConfig["duration"] = duration;
        if (ui_config.display_type === "inline") {
          _this.currentAction = showTooltip(ui_config, [], terminationConfig, {
            configId: uuid,
            configName: name
          }, _this);
        } else if (ui_config.display_type === "new-inline") {
          _this.createInLineToolTip(ui_config, duration, uuid, name);
        } else {
          showCoachmarkWithDelay(_this, ui_config, {
            configId: uuid,
            configName: name
          }, terminationConfig, function () {
            _this.isShowingAction = true;
            if (window.Apxor && window.Apxor.logActionEvent) {
              var _window, _window$updateFlag;
              (_window = window) === null || _window === void 0 || (_window = _window.Apxor) === null || _window === void 0 || (_window$updateFlag = _window.updateFlag) === null || _window$updateFlag === void 0 || _window$updateFlag.call(_window, true);
              window.Apxor.logActionEvent("inline_shown", uuid, name);
              if (ui_config !== null && ui_config !== void 0 && ui_config.is_preview) {
                setTimeout(function () {
                  var _window2, _window2$logInternalE;
                  (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.Apxor) === null || _window2 === void 0 || (_window2$logInternalE = _window2.logInternalEvent) === null || _window2$logInternalE === void 0 || _window2$logInternalE.call(_window2, "capt");
                }, 500);
              }
            }
          }, function (action) {
            var _window3, _window3$updateFlag;
            _this.isShowingAction = false;
            (_window3 = window) === null || _window3 === void 0 || (_window3 = _window3.Apxor) === null || _window3 === void 0 || (_window3$updateFlag = _window3.updateFlag) === null || _window3$updateFlag === void 0 || _window3$updateFlag.call(_window3, false);
            _this.currentAction = null;
            if (window.Apxor && window.Apxor.logActionEvent && !(isDefined(action) && (action === "redirect" || action === "cancel"))) {
              window.Apxor.logActionEvent("inline_dismissed", uuid, name);
            }
          }, function (callback) {
            _this.currentAction = callback;
          });
        }
      } catch (e) {
        var _window4, _window4$updateFlag;
        _this.isShowingAction = false;
        (_window4 = window) === null || _window4 === void 0 || (_window4 = _window4.Apxor) === null || _window4 === void 0 || (_window4$updateFlag = _window4.updateFlag) === null || _window4$updateFlag === void 0 || _window4$updateFlag.call(_window4, false);
        console.error(e);
      }
    });
    _defineProperty(this, "showInApp", function (config, duration, configId, name) {
      try {
        config = config.split("\n").join("\\n");
        if (JSON.parse(config).layout_type === "videos") {
          _this.createInAppVideo(config, duration, configId, name);
        } else if (JSON.parse(config).layout_type === "modal") {
          _this.createInAppModal(config, duration, configId, name);
        }
      } catch (e) {
        var _window$Apxor2;
        if (((_window$Apxor2 = window.Apxor) === null || _window$Apxor2 === void 0 ? void 0 : _window$Apxor2.platform) === "ios") {
          var _window5, _window5$updateFlag;
          (_window5 = window) === null || _window5 === void 0 || (_window5 = _window5.Apxor) === null || _window5 === void 0 || (_window5$updateFlag = _window5.updateFlag) === null || _window5$updateFlag === void 0 || _window5$updateFlag.call(_window5, false, "IN_APP");
        } else {
          var _window6, _window6$updateFlag;
          (_window6 = window) === null || _window6 === void 0 || (_window6 = _window6.Apxor) === null || _window6 === void 0 || (_window6$updateFlag = _window6.updateFlag) === null || _window6$updateFlag === void 0 || _window6$updateFlag.call(_window6, "IN_APP", false);
        }
        console.error(e);
      }
    });
    _defineProperty(this, "removeAll", function () {
      var _window7, _window7$updateFlag;
      (_window7 = window) === null || _window7 === void 0 || (_window7 = _window7.Apxor) === null || _window7 === void 0 || (_window7$updateFlag = _window7.updateFlag) === null || _window7$updateFlag === void 0 || _window7$updateFlag.call(_window7, false);
      if (_this.currentAction !== null && _this.currentAction !== undefined) {
        _this.isShowingAction = false;
        try {
          _this.currentAction();
          _this.currentAction = null;
          console.log("Callback is called");
        } catch (e) {}
      }
    });
    _defineProperty(this, "createInLineToolTip", function (ui_config, duration, uuid, name) {
      var terminationConfig = {};
      terminationConfig["auto_dismiss"] = duration > 0;
      terminationConfig["duration"] = duration;
      _this._currentTooltip = new NewInLineTooltip(ui_config, [], [], terminationConfig, {
        configId: uuid,
        configName: name
      }, _this, function () {
        _this.isShowingAction = true;
        if (window.Apxor && window.Apxor.logActionEvent) {
          var _window8, _window8$updateFlag;
          (_window8 = window) === null || _window8 === void 0 || (_window8 = _window8.Apxor) === null || _window8 === void 0 || (_window8$updateFlag = _window8.updateFlag) === null || _window8$updateFlag === void 0 || _window8$updateFlag.call(_window8, true);
          window.Apxor.logActionEvent("inline_shown", uuid, name);
          if (ui_config !== null && ui_config !== void 0 && ui_config.is_preview) {
            setTimeout(function () {
              var _window9, _window9$logInternalE;
              (_window9 = window) === null || _window9 === void 0 || (_window9 = _window9.Apxor) === null || _window9 === void 0 || (_window9$logInternalE = _window9.logInternalEvent) === null || _window9$logInternalE === void 0 || _window9$logInternalE.call(_window9, "capt");
            }, 500);
          }
        }
      }, function (isCancelled) {
        var _window10, _window10$updateFlag, _window11;
        _this.isShowingAction = false;
        _this.currentAction = null;
        _this._currentTooltip = null;
        (_window10 = window) === null || _window10 === void 0 || (_window10 = _window10.Apxor) === null || _window10 === void 0 || (_window10$updateFlag = _window10.updateFlag) === null || _window10$updateFlag === void 0 || _window10$updateFlag.call(_window10, false);
        if (window.Apxor && window.Apxor.logActionEvent && !isCancelled) {
          window.Apxor.logActionEvent("inline_dismissed", uuid, name);
        }
        if (((_window11 = window) === null || _window11 === void 0 || (_window11 = _window11.ApxorWebView) === null || _window11 === void 0 ? void 0 : _window11.getLayoutType()) === "web-inline") {
          var _window12;
          (_window12 = window) === null || _window12 === void 0 || (_window12 = _window12.ApxorWebView) === null || _window12 === void 0 || _window12.removeWebView();
        }
      }, function () {}, false, 0);
      setTimeout(function () {
        _this._currentTooltip.createNewTooltip();
      }, ui_config.delay);
    });
    _defineProperty(this, "updateElementPositionOnScroll", function (top, left, height, width) {
      if (_this._currentTooltip) {
        _this._currentTooltip.updateElementPositionOnScroll(top, left, height, width);
      }
    });
    _defineProperty(this, "createInAppVideo", function (config, duration, configId, name) {
      var videoConfig = JSON.parse(config);
      if (VideoInApp.isAVideoBeingPlayed()) {
        return;
      }
      if (!VideoInApp.canShowVideoInApp(videoConfig)) {
        return;
      }
      var terminationConfig = {};
      terminationConfig["auto_dismiss"] = duration > 0;
      terminationConfig["duration"] = duration;
      var VideoInAppInstance = new VideoInApp(videoConfig, terminationConfig, configId, name, function () {
        _this.isShowingAction = true;
        if (window.Apxor && window.Apxor.logActionEvent) {
          var _window13, _window13$updateFlag;
          (_window13 = window) === null || _window13 === void 0 || (_window13 = _window13.Apxor) === null || _window13 === void 0 || (_window13$updateFlag = _window13.updateFlag) === null || _window13$updateFlag === void 0 || _window13$updateFlag.call(_window13, true);
          window.Apxor.logActionEvent("inapp_shown", configId, name);
        }
      }, function () {
        var _window14, _window14$updateFlag;
        _this.isShowingAction = false;
        _this.currentAction = null;
        (_window14 = window) === null || _window14 === void 0 || (_window14 = _window14.Apxor) === null || _window14 === void 0 || (_window14$updateFlag = _window14.updateFlag) === null || _window14$updateFlag === void 0 || _window14$updateFlag.call(_window14, false);
        if (window.Apxor && window.Apxor.logActionEvent) {
          window.Apxor.logActionEvent("inapp_dismissed", configId, name);
        }
      });
      VideoInAppInstance.showVideoInApp();
    });
    /**
     * Creates a modal for the given config and displays it.
     * Supported Modals are "small-text","medium-text","large-text","icon-text","image-text","image-only","custom-size-text","video-text"
     * @param {JSON} inappconfig
     * @param {string} configId
     * @param {string} name
     * @param {function} showCallback
     * @param {function} closeCallback
     */
    _defineProperty(this, "createInAppModal", function (inappconfig, duration, configId, name) {
      var config = JSON.parse(inappconfig);
      var terminationConfig = {};
      terminationConfig["auto_dismiss"] = duration > 0;
      terminationConfig["duration"] = duration;
      var inappModal = new NewModalInApp(config, terminationConfig, configId, name, function () {
        _this.isShowingAction = true;
        if (window.Apxor && window.Apxor.logActionEvent) {
          var _window$Apxor3;
          if (((_window$Apxor3 = window.Apxor) === null || _window$Apxor3 === void 0 ? void 0 : _window$Apxor3.platform) === "ios") {
            var _window15, _window15$updateFlag;
            (_window15 = window) === null || _window15 === void 0 || (_window15 = _window15.Apxor) === null || _window15 === void 0 || (_window15$updateFlag = _window15.updateFlag) === null || _window15$updateFlag === void 0 || _window15$updateFlag.call(_window15, true, "IN_APP");
          } else {
            var _window16, _window16$updateFlag;
            (_window16 = window) === null || _window16 === void 0 || (_window16 = _window16.Apxor) === null || _window16 === void 0 || (_window16$updateFlag = _window16.updateFlag) === null || _window16$updateFlag === void 0 || _window16$updateFlag.call(_window16, "IN_APP", true);
          }
          window.Apxor.logActionEvent("inapp_shown", configId, name);
        }
      }, function (backgroundDiv, action) {
        var _dialogContent$classL, _window$Apxor4;
        var cssClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".apx-dlg-c";
        var closeListener = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var redirectionListener = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        document.body.removeEventListener("click", closeListener);
        document.body.removeEventListener("click", redirectionListener);
        var dialogContent = document.querySelector(cssClass);
        dialogContent === null || dialogContent === void 0 || (_dialogContent$classL = dialogContent.classList) === null || _dialogContent$classL === void 0 || _dialogContent$classL.toggle("open");
        // setTimeout(() => {
        backgroundDiv.remove();
        _this.isShowingAction = false;
        if (((_window$Apxor4 = window.Apxor) === null || _window$Apxor4 === void 0 ? void 0 : _window$Apxor4.platform) === "ios") {
          var _window17, _window17$updateFlag;
          (_window17 = window) === null || _window17 === void 0 || (_window17 = _window17.Apxor) === null || _window17 === void 0 || (_window17$updateFlag = _window17.updateFlag) === null || _window17$updateFlag === void 0 || _window17$updateFlag.call(_window17, false, "IN_APP");
        } else {
          var _window18, _window18$updateFlag;
          (_window18 = window) === null || _window18 === void 0 || (_window18 = _window18.Apxor) === null || _window18 === void 0 || (_window18$updateFlag = _window18.updateFlag) === null || _window18$updateFlag === void 0 || _window18$updateFlag.call(_window18, "IN_APP", false);
        }
        _this.currentAction = null;
        if (window.Apxor && window.Apxor.logActionEvent && !(action == "cancel" || action == "redirect")) {
          window.Apxor.logActionEvent("inapp_dismissed", configId, name);
        }
      }, function () {}, false, [], 0);
      inappModal.createInAppModal();
    });
  } // createSurvey = (config, configId, name) => {
  //   const survey_obj = new NewSurveys(configId, name, config, []);
  //   survey_obj.createSurvey();
  // };
  );

  /* eslint-disable no-empty */
  var rtm = new RTM();
  window.ApxorRTM = rtm;
  try {
    if (exports !== undefined || exports !== null) {
      exports["default"] = rtm;
      module.exports = exports["default"];
    }
  } catch (e) {}

  return rtm;

})));
