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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXBpYmFyYS8gXFwuW2p0XXN4Iiwid2VicGFjazovL3Byb2pla3QtY2hpbGxpLWNhcGliYXJhLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vcHJvamVrdC1jaGlsbGktY2FwaWJhcmEvLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWt0LWNoaWxsaS1jYXBpYmFyYS8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vcHJvamVrdC1jaGlsbGktY2FwaWJhcmEvLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL3Byb2pla3QtY2hpbGxpLWNhcGliYXJhLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWt0LWNoaWxsaS1jYXBpYmFyYS8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8wLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cylcbntcbiAgICBsZXQgZXhwaXJlcyA9IFwiXCI7XG4gICAgaWYgKGRheXMpXG4gICAge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICsgZXhwaXJlcyArIFwiOyBwYXRoPS87IFNhbWVTaXRlPUxheFwiO1xufVxuXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSlcbntcbiAgICBjb25zdCBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGxldCBjb29raWUgPSBjb29raWVzW2ldLnRyaW0oKTtcbiAgICAgICAgaWYgKGNvb2tpZS5pbmRleE9mKG5hbWVFUSkgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBjb29raWUuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGNvb2tpZS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVOaWdodE1vZGUoKVxue1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIGxhYmVsLCAuY29udGFpbmVyLCAuc2lkZWJhciwgLmNhbGVuZGFyLWhlYWRlciwgLmNhbGVuZGFyLWNvbnRhaW5lciwgZm9ybScpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+XG4gICAge1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcblxuICAgIGNvbnN0IGlzRGFya01vZGUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyaycpO1xuICAgIHNldENvb2tpZSgnbmlnaHRNb2RlJywgaXNEYXJrTW9kZSA/ICd0cnVlJyA6ICdmYWxzZScsIDcpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT5cbntcbiAgICBjb25zdCBuaWdodE1vZGVDb29raWUgPSBnZXRDb29raWUoJ25pZ2h0TW9kZScpO1xuICAgIGxldCBxdWVyeVRhYnMgPSBbXTtcbiAgICBjb25zdCBtYXhUYWJzID0gMztcblxuICAgIGlmIChuaWdodE1vZGVDb29raWUgPT09ICd0cnVlJylcbiAgICB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIGxhYmVsLCAuY29udGFpbmVyLCAuc2lkZWJhciwgLmNhbGVuZGFyLWhlYWRlciwgLmNhbGVuZGFyLWNvbnRhaW5lciwgZm9ybScpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT5cbiAgICAgICAge1xuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVPcHRpb25zTWVudSA9IGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9ucy1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pXG4gICAge1xuICAgICAgICBjb25zdCBzdWJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWItb3B0aW9ucy1tZW51XCIpO1xuICAgICAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViLW9wdGlvbnMtdGl0bGVcIik7XG4gICAgICAgIGNvbnN0IHN1YkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Yi1vcHRpb25zLWNvbnRlbnRcIik7XG5cbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGlvbnMtbWVudVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gICAgICAgIGlmIChvcHRpb24gPT09IFwiZGlzcGxheS1pbmZvXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJXeWJpZXJ6IGluZm9ybWFjamUgbyB6YWrEmWNpYWNoXCI7XG4gICAgICAgICAgICBzdWJDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4gTmF6d2EgcHJ6ZWRtaW90dTwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiBTYWxhPC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IFByb3dhZHrEhWN5PC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IEdydXBhPC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IFR5cCB6YWrEmcSHPC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IEdvZHppbmEgcm96cG9jesSZY2lhPC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IEN6YXMgdHJ3YW5pYTwvbGFiZWw+PGJyPlxuICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PT0gXCJlZGl0LWNvbG9yc1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdWJUaXRsZS50ZXh0Q29udGVudCA9IFwiRWR5dHVqIGtvbG9yeSBrYWZlbGvDs3dcIjtcbiAgICAgICAgICAgIHN1YkNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGxhYmVsPktvbG9yIHphasSZxIc6IDxpbnB1dCB0eXBlPVwiY29sb3JcIiAvPjwvbGFiZWw+PGJyPlxuICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PT0gXCJkaXNwbGF5LW1vZGVzXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJUcnlieSB3ecWbd2lldGxhbmlhXCI7XG4gICAgICAgICAgICBzdWJDb250ZW50LmlubmVySFRNTCA9IGA8cD5kZGQ8L3A+YDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnb0JhY2tUb09wdGlvbnMgPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGlvbnMtbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Yi1vcHRpb25zLW1lbnVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUXVlcnlUYWIgPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZiAocXVlcnlUYWJzLmxlbmd0aCA8IG1heFRhYnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYklkID0gYHF1ZXJ5LXRhYi0ke3F1ZXJ5VGFicy5sZW5ndGggKyAxfWA7XG4gICAgICAgICAgICBxdWVyeVRhYnMucHVzaCh0YWJJZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0YWIuaWQgPSB0YWJJZDtcbiAgICAgICAgICAgIHRhYi5jbGFzc05hbWUgPSBcInF1ZXJ5LXRhYlwiO1xuICAgICAgICAgICAgdGFiLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIFphcHl0YW5pZSAke3F1ZXJ5VGFicy5sZW5ndGh9ICBcbiAgICAgICAgYDtcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVyeS10YWJzXCIpLmFwcGVuZENoaWxkKHRhYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBhbGVydChcIk1vxbxlc3ogZG9kYcSHIG1ha3N5bWFsbmllIDMgemFweXRhbmlhLlwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVRdWVyeVRhYiA9IGZ1bmN0aW9uKHRhYklkKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGFiSW5kZXggPSBxdWVyeVRhYnMuaW5kZXhPZih0YWJJZCk7XG4gICAgICAgIGlmICh0YWJJbmRleCA+IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeVRhYnMuc3BsaWNlKHRhYkluZGV4LCAxKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYklkKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckZvcm1PclRhYnMgPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZiAocXVlcnlUYWJzLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVyeS1mb3JtXCIpLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeVRhYnMuZm9yRWFjaCh0YWJJZCA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJJZCkucmVtb3ZlKCkpO1xuICAgICAgICAgICAgcXVlcnlUYWJzID0gW107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAge1xuICAgICAgICBhbGVydChcIlNlYXJjaCBjbGlja2VkIVwiKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlT3B0aW9uc01lbnUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRm9ybU9yVGFicyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlbW92ZS10YWItYnRuXCIpLmZvckVhY2goYnRuID0+XG4gICAge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICByZW1vdmVRdWVyeVRhYihlLnRhcmdldC5kYXRhc2V0LnRhYklkKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1xdWVyeVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUXVlcnlUYWIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29CYWNrVG9PcHRpb25zKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmlnaHQtbW9kZS1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOaWdodE1vZGUpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb24tYnRuXCIpLmZvckVhY2goYnV0dG9uID0+XG4gICAge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uXCIpO1xuICAgICAgICAgICAgc2hvd09wdGlvbihvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKVxuICAgIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1zaWRlYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VTaWRlYmFySWZDbGlja2VkT3V0c2lkZShldmVudClcbiAgICB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgICAgICBpZiAoIXNpZGViYXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5zaG93LW1vYmlsZScpKVxuICAgICAgICB7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctc2lkZWJhcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMDApXG4gICAge1xuICAgICAgICBjb25zdCBzaG93TW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctbW9iaWxlJyk7XG4gICAgICAgIHNob3dNb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHNob3dNb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaWRlYmFyKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc3Qgc2hvd01vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LW1vYmlsZScpO1xuICAgICAgICBzaG93TW9iaWxlQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+XG4gICAge1xuICAgICAgICBjb25zdCBzaG93TW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctbW9iaWxlJyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNob3dNb2JpbGVCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlU2lkZWJhcklmQ2xpY2tlZE91dHNpZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgc2hvd01vYmlsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVNpZGViYXJJZkNsaWNrZWRPdXRzaWRlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVNpZGViYXJJZkNsaWNrZWRPdXRzaWRlKTtcblxufSk7XG5cblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbn1cblxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsInNldENvb2tpZSIsIm5hbWUiLCJkYXlzIiwiZXhwaXJlcyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImRvY3VtZW50IiwiY29va2llIiwiZ2V0Q29va2llIiwibmFtZUVRIiwiY29va2llcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsInRyaW0iLCJpbmRleE9mIiwic3Vic3RyaW5nIiwidG9nZ2xlTmlnaHRNb2RlIiwic2VjdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keSIsImZvckVhY2giLCJzZWN0aW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaXNEYXJrTW9kZSIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5pZ2h0TW9kZUNvb2tpZSIsInF1ZXJ5VGFicyIsIm1heFRhYnMiLCJhZGQiLCJ0b2dnbGVPcHRpb25zTWVudSIsImdldEVsZW1lbnRCeUlkIiwic2hvd09wdGlvbiIsIm9wdGlvbiIsInN1Yk1lbnUiLCJzdWJUaXRsZSIsInN1YkNvbnRlbnQiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJnb0JhY2tUb09wdGlvbnMiLCJhZGRRdWVyeVRhYiIsInRhYklkIiwiY29uY2F0IiwicHVzaCIsInRhYiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiYWxlcnQiLCJyZW1vdmVRdWVyeVRhYiIsInRhYkluZGV4Iiwic3BsaWNlIiwiY2xlYXJGb3JtT3JUYWJzIiwicmVzZXQiLCJxdWVyeVNlbGVjdG9yIiwiYnRuIiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJidXR0b24iLCJldmVudCIsImdldEF0dHJpYnV0ZSIsInRvZ2dsZVNpZGViYXIiLCJzaWRlYmFyIiwiY2xvc2VTaWRlYmFySWZDbGlja2VkT3V0c2lkZSIsIm1hdGNoZXMiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2hvd01vYmlsZUJ0biIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJ0dXJib19jb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==