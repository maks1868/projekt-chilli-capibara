(self["webpackChunkprojekt_chilli_capibara"] = self["webpackChunkprojekt_chilli_capibara"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");












function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}
function toggleNightMode() {
  var sections = document.querySelectorAll('input, label, .container, .sidebar, .calendar-header, .calendar-container, form');
  var body = document.body;
  sections.forEach(function (section) {
    section.classList.toggle('dark');
  });
  body.classList.toggle('dark');
  var isDarkMode = body.classList.contains('dark');
  setCookie('nightMode', isDarkMode ? 'true' : 'false', 7);
}
document.addEventListener('DOMContentLoaded', function () {
  var nightModeCookie = getCookie('nightMode');
  var queryTabs = [];
  var maxTabs = 3;
  if (nightModeCookie === 'true') {
    var sections = document.querySelectorAll('input, label, .container, .sidebar, .calendar-header, .calendar-container, form');
    var body = document.body;
    sections.forEach(function (section) {
      section.classList.add('dark');
    });
    body.classList.add('dark');
  }
  var toggleOptionsMenu = function toggleOptionsMenu() {
    document.getElementById("options-menu").classList.toggle("hidden");
  };
  var showOption = function showOption(option) {
    var subMenu = document.getElementById("sub-options-menu");
    var subTitle = document.getElementById("sub-options-title");
    var subContent = document.getElementById("sub-options-content");
    subMenu.classList.remove("hidden");
    document.getElementById("options-menu").classList.add("hidden");
    if (option === "display-info") {
      subTitle.textContent = "Wybierz informacje o zajęciach";
      subContent.innerHTML = "\n            <label><input type=\"checkbox\" /> Nazwa przedmiotu</label><br>\n            <label><input type=\"checkbox\" /> Sala</label><br>\n            <label><input type=\"checkbox\" /> Prowadz\u0105cy</label><br>\n            <label><input type=\"checkbox\" /> Grupa</label><br>\n            <label><input type=\"checkbox\" /> Typ zaj\u0119\u0107</label><br>\n            <label><input type=\"checkbox\" /> Godzina rozpocz\u0119cia</label><br>\n            <label><input type=\"checkbox\" /> Czas trwania</label><br>\n        ";
    } else if (option === "edit-colors") {
      subTitle.textContent = "Edytuj kolory kafelków";
      subContent.innerHTML = "\n            <label>Kolor zaj\u0119\u0107: <input type=\"color\" /></label><br>\n        ";
    } else if (option === "display-modes") {
      subTitle.textContent = "Tryby wyświetlania";
      subContent.innerHTML = "<p>ddd</p>";
    }
  };
  var goBackToOptions = function goBackToOptions() {
    document.getElementById("options-menu").classList.remove("hidden");
    document.getElementById("sub-options-menu").classList.add("hidden");
  };
  var addQueryTab = function addQueryTab() {
    if (queryTabs.length < maxTabs) {
      var tabId = "query-tab-".concat(queryTabs.length + 1);
      queryTabs.push(tabId);
      var tab = document.createElement("div");
      tab.id = tabId;
      tab.className = "query-tab";
      tab.innerHTML = "\n            Zapytanie ".concat(queryTabs.length, "  \n        ");
      document.getElementById("query-tabs").appendChild(tab);
    } else {
      alert("Możesz dodać maksymalnie 3 zapytania.");
    }
  };
  var removeQueryTab = function removeQueryTab(tabId) {
    var tabIndex = queryTabs.indexOf(tabId);
    if (tabIndex > -1) {
      queryTabs.splice(tabIndex, 1);
      document.getElementById(tabId).remove();
    }
  };
  var clearFormOrTabs = function clearFormOrTabs() {
    if (queryTabs.length === 0) {
      document.getElementById("query-form").reset();
    } else {
      queryTabs.forEach(function (tabId) {
        return document.getElementById(tabId).remove();
      });
      queryTabs = [];
    }
  };
  document.querySelector(".search").addEventListener("click", function () {
    alert("Search clicked!");
  });
  document.querySelector(".options").addEventListener("click", toggleOptionsMenu);
  document.querySelector(".clear").addEventListener("click", clearFormOrTabs);
  document.querySelectorAll(".remove-tab-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      removeQueryTab(e.target.dataset.tabId);
    });
  });
  document.querySelector(".add-query").addEventListener("click", addQueryTab);
  document.querySelector(".back").addEventListener("click", goBackToOptions);
  document.getElementById('night-mode-icon').addEventListener('click', toggleNightMode);
  document.querySelectorAll(".option-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      var option = event.target.getAttribute("data-option");
      showOption(option);
    });
  });
  function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show-sidebar');
  }
  function closeSidebarIfClickedOutside(event) {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar.contains(event.target) && !event.target.matches('.show-mobile')) {
      sidebar.classList.remove('show-sidebar');
    }
  }
  if (window.innerWidth <= 1000) {
    var showMobileBtn = document.querySelector('.show-mobile');
    showMobileBtn.style.display = 'block';
    showMobileBtn.addEventListener('click', toggleSidebar);
  } else {
    var _showMobileBtn = document.querySelector('.show-mobile');
    _showMobileBtn.style.display = 'none';
  }
  window.addEventListener('resize', function () {
    var showMobileBtn = document.querySelector('.show-mobile');
    if (window.innerWidth <= 1000) {
      showMobileBtn.style.display = 'block';
      document.addEventListener('click', closeSidebarIfClickedOutside);
    } else {
      showMobileBtn.style.display = 'none';
      document.removeEventListener('click', closeSidebarIfClickedOutside);
    }
  });
  document.addEventListener('click', closeSidebarIfClickedOutside);
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var turbo_controller = /*#__PURE__*/function (_Controller) {
  function turbo_controller() {
    _classCallCheck(this, turbo_controller);
    return _callSuper(this, turbo_controller, arguments);
  }
  _inherits(turbo_controller, _Controller);
  return _createClass(turbo_controller);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-d1461e"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXBpYmFyYS8gXFwuW2p0XXN4Iiwid2VicGFjazovL3Byb2pla3QtY2hpbGxpLWNhcGliYXJhLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vcHJvamVrdC1jaGlsbGktY2FwaWJhcmEvLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWt0LWNoaWxsaS1jYXBpYmFyYS8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vcHJvamVrdC1jaGlsbGktY2FwaWJhcmEvLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL3Byb2pla3QtY2hpbGxpLWNhcGliYXJhLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWt0LWNoaWxsaS1jYXBpYmFyYS8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMCxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5mdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIGRheXMpXG57XG4gICAgbGV0IGV4cGlyZXMgPSBcIlwiO1xuICAgIGlmIChkYXlzKVxuICAgIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vOyBTYW1lU2l0ZT1MYXhcIjtcbn1cblxuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpXG57XG4gICAgY29uc3QgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xuICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBsZXQgY29va2llID0gY29va2llc1tpXS50cmltKCk7XG4gICAgICAgIGlmIChjb29raWUuaW5kZXhPZihuYW1lRVEpID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gY29va2llLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjb29raWUubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTmlnaHRNb2RlKClcbntcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBsYWJlbCwgLmNvbnRhaW5lciwgLnNpZGViYXIsIC5jYWxlbmRhci1oZWFkZXIsIC5jYWxlbmRhci1jb250YWluZXIsIGZvcm0nKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PlxuICAgIHtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG5cbiAgICBjb25zdCBpc0RhcmtNb2RlID0gYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKTtcbiAgICBzZXRDb29raWUoJ25pZ2h0TW9kZScsIGlzRGFya01vZGUgPyAndHJ1ZScgOiAnZmFsc2UnLCA3KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+XG57XG4gICAgY29uc3QgbmlnaHRNb2RlQ29va2llID0gZ2V0Q29va2llKCduaWdodE1vZGUnKTtcbiAgICBsZXQgcXVlcnlUYWJzID0gW107XG4gICAgY29uc3QgbWF4VGFicyA9IDM7XG5cbiAgICBpZiAobmlnaHRNb2RlQ29va2llID09PSAndHJ1ZScpXG4gICAge1xuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBsYWJlbCwgLmNvbnRhaW5lciwgLnNpZGViYXIsIC5jYWxlbmRhci1oZWFkZXIsIC5jYWxlbmRhci1jb250YWluZXIsIGZvcm0nKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlT3B0aW9uc01lbnUgPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGlvbnMtbWVudVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKVxuICAgIHtcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViLW9wdGlvbnMtbWVudVwiKTtcbiAgICAgICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Yi1vcHRpb25zLXRpdGxlXCIpO1xuICAgICAgICBjb25zdCBzdWJDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWItb3B0aW9ucy1jb250ZW50XCIpO1xuXG4gICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpb25zLW1lbnVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICAgICAgICBpZiAob3B0aW9uID09PSBcImRpc3BsYXktaW5mb1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdWJUaXRsZS50ZXh0Q29udGVudCA9IFwiV3liaWVyeiBpbmZvcm1hY2plIG8gemFqxJljaWFjaFwiO1xuICAgICAgICAgICAgc3ViQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IE5hendhIHByemVkbWlvdHU8L2xhYmVsPjxicj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4gU2FsYTwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiBQcm93YWR6xIVjeTwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiBHcnVwYTwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiBUeXAgemFqxJnEhzwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiBHb2R6aW5hIHJvenBvY3rEmWNpYTwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiBDemFzIHRyd2FuaWE8L2xhYmVsPjxicj5cbiAgICAgICAgYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb24gPT09IFwiZWRpdC1jb2xvcnNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIkVkeXR1aiBrb2xvcnkga2FmZWxrw7N3XCI7XG4gICAgICAgICAgICBzdWJDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxsYWJlbD5Lb2xvciB6YWrEmcSHOiA8aW5wdXQgdHlwZT1cImNvbG9yXCIgLz48L2xhYmVsPjxicj5cbiAgICAgICAgYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb24gPT09IFwiZGlzcGxheS1tb2Rlc1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdWJUaXRsZS50ZXh0Q29udGVudCA9IFwiVHJ5Ynkgd3nFm3dpZXRsYW5pYVwiO1xuICAgICAgICAgICAgc3ViQ29udGVudC5pbm5lckhUTUwgPSBgPHA+ZGRkPC9wPmA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ29CYWNrVG9PcHRpb25zID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpb25zLW1lbnVcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWItb3B0aW9ucy1tZW51XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFF1ZXJ5VGFiID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgaWYgKHF1ZXJ5VGFicy5sZW5ndGggPCBtYXhUYWJzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0YWJJZCA9IGBxdWVyeS10YWItJHtxdWVyeVRhYnMubGVuZ3RoICsgMX1gO1xuICAgICAgICAgICAgcXVlcnlUYWJzLnB1c2godGFiSWQpO1xuXG4gICAgICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFiLmlkID0gdGFiSWQ7XG4gICAgICAgICAgICB0YWIuY2xhc3NOYW1lID0gXCJxdWVyeS10YWJcIjtcbiAgICAgICAgICAgIHRhYi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICBaYXB5dGFuaWUgJHtxdWVyeVRhYnMubGVuZ3RofSAgXG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlcnktdGFic1wiKS5hcHBlbmRDaGlsZCh0YWIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgYWxlcnQoXCJNb8W8ZXN6IGRvZGHEhyBtYWtzeW1hbG5pZSAzIHphcHl0YW5pYS5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlUXVlcnlUYWIgPSBmdW5jdGlvbih0YWJJZClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gcXVlcnlUYWJzLmluZGV4T2YodGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPiAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgcXVlcnlUYWJzLnNwbGljZSh0YWJJbmRleCwgMSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJJZCkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJGb3JtT3JUYWJzID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgaWYgKHF1ZXJ5VGFicy5sZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlcnktZm9ybVwiKS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcXVlcnlUYWJzLmZvckVhY2godGFiSWQgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiSWQpLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIHF1ZXJ5VGFicyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIHtcbiAgICAgICAgYWxlcnQoXCJTZWFyY2ggY2xpY2tlZCFcIik7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU9wdGlvbnNNZW51KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsZWFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckZvcm1PclRhYnMpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZW1vdmUtdGFiLWJ0blwiKS5mb3JFYWNoKGJ0biA9PlxuICAgIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlUXVlcnlUYWIoZS50YXJnZXQuZGF0YXNldC50YWJJZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcXVlcnlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFF1ZXJ5VGFiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvQmFja1RvT3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25pZ2h0LW1vZGUtaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmlnaHRNb2RlKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3B0aW9uLWJ0blwiKS5mb3JFYWNoKGJ1dHRvbiA9PlxuICAgIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvblwiKTtcbiAgICAgICAgICAgIHNob3dPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyKClcbiAgICB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctc2lkZWJhcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlU2lkZWJhcklmQ2xpY2tlZE91dHNpZGUoZXZlbnQpXG4gICAge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICAgICAgaWYgKCFzaWRlYmFyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuc2hvdy1tb2JpbGUnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXNpZGViYXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDAwKVxuICAgIHtcbiAgICAgICAgY29uc3Qgc2hvd01vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LW1vYmlsZScpO1xuICAgICAgICBzaG93TW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBzaG93TW9iaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhcik7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGNvbnN0IHNob3dNb2JpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1tb2JpbGUnKTtcbiAgICAgICAgc2hvd01vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3Qgc2hvd01vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LW1vYmlsZScpO1xuXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBzaG93TW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVNpZGViYXJJZkNsaWNrZWRPdXRzaWRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNob3dNb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VTaWRlYmFySWZDbGlja2VkT3V0c2lkZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VTaWRlYmFySWZDbGlja2VkT3V0c2lkZSk7XG5cbn0pO1xuXG5cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzZXRDb29raWUiLCJuYW1lIiwiZGF5cyIsImV4cGlyZXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJkb2N1bWVudCIsImNvb2tpZSIsImdldENvb2tpZSIsIm5hbWVFUSIsImNvb2tpZXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJ0cmltIiwiaW5kZXhPZiIsInN1YnN0cmluZyIsInRvZ2dsZU5pZ2h0TW9kZSIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImJvZHkiLCJmb3JFYWNoIiwic2VjdGlvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImlzRGFya01vZGUiLCJjb250YWlucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJuaWdodE1vZGVDb29raWUiLCJxdWVyeVRhYnMiLCJtYXhUYWJzIiwiYWRkIiwidG9nZ2xlT3B0aW9uc01lbnUiLCJnZXRFbGVtZW50QnlJZCIsInNob3dPcHRpb24iLCJvcHRpb24iLCJzdWJNZW51Iiwic3ViVGl0bGUiLCJzdWJDb250ZW50IiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiZ29CYWNrVG9PcHRpb25zIiwiYWRkUXVlcnlUYWIiLCJ0YWJJZCIsImNvbmNhdCIsInB1c2giLCJ0YWIiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImFsZXJ0IiwicmVtb3ZlUXVlcnlUYWIiLCJ0YWJJbmRleCIsInNwbGljZSIsImNsZWFyRm9ybU9yVGFicyIsInJlc2V0IiwicXVlcnlTZWxlY3RvciIsImJ0biIsImUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiYnV0dG9uIiwiZXZlbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2dnbGVTaWRlYmFyIiwic2lkZWJhciIsImNsb3NlU2lkZWJhcklmQ2xpY2tlZE91dHNpZGUiLCJtYXRjaGVzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNob3dNb2JpbGVCdG4iLCJzdHlsZSIsImRpc3BsYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwidHVyYm9fY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=