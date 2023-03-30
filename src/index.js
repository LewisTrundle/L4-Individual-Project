/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var controller;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Varela+Round&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.cdnfonts.com/css/digital-numbers);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(//yoannmoinet.github.io/nipplejs/stylesheets/styles.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(//yoannmoinet.github.io/nipplejs/stylesheets/github-light.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 100vh;\\n  width: 100vw;\\n  padding: 0px;\\n  margin: 0px;\\n  background-color: #0B406C;\\n  font-family: \\\"Digital Numbers\\\";\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.header {\\n  display: flex;\\n  height: 65px;\\n  width: 100%;\\n  background-color: #0c0c0c;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.header h1 {\\n  color: #ffffff;\\n  margin: 0px;\\n  margin-top: 5px;\\n  height: 40px;\\n}\\n.header .header-buttons {\\n  position: absolute;\\n  cursor: pointer;\\n  right: 20px;\\n}\\n.header #back {\\n  position: absolute;\\n  cursor: pointer;\\n  left: 20px;\\n}\\n\\n.content {\\n  display: flex;\\n  height: calc(100vh - 65px - 40px);\\n  margin: 20px 20px 20px 20px;\\n}\\n\\n/* ---------- MODAL SECTION START ----------*/\\n.modal-back .modal {\\n  display: block;\\n  padding-top: 0px;\\n  overflow: none;\\n}\\n.modal-back .modal .header {\\n  width: 90%;\\n}\\n.modal-back .modal .header .close-icon {\\n  height: 35px;\\n  width: 35px;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  padding-top: 100px;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: scroll;\\n  background-color: rgba(0, 0, 0, 0.5);\\n}\\n.modal .modal-content {\\n  background-color: #ffffff;\\n  color: #ffffff;\\n  margin: auto;\\n  padding: 20px;\\n  width: 80%;\\n  border-radius: 10px;\\n}\\n.modal .modal-content.small {\\n  height: 220px;\\n}\\n.modal .modal-content.large {\\n  height: 350px;\\n}\\n.modal .modal-content.extra-large {\\n  height: 100%;\\n}\\n.modal .modal-content .close {\\n  color: #aaaaaa;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n.modal .modal-content .close:hover, .modal .modal-content .close:focus {\\n  color: #000;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n.modal .modal-content .modal-header {\\n  padding: 2px 16px;\\n  background-color: #0B8600;\\n  height: 40px;\\n  border-radius: 10px 10px 0px 0px;\\n}\\n.modal .modal-content .modal-header h2 {\\n  font-size: 25px;\\n  color: #ffffff;\\n}\\n.modal .modal-content .modal-body {\\n  padding: 20px;\\n  color: #0B8600;\\n  text-align: center;\\n}\\n.modal .modal-content .modal-footer {\\n  padding: 2px 16px;\\n  background-color: #0B8600;\\n  height: 40px;\\n  border-radius: 0px 0px 10px 10px;\\n}\\n.modal button {\\n  cursor: pointer;\\n  background: #0c0c0c;\\n  color: #ffffff;\\n  border-radius: 15px;\\n  font-size: 15px;\\n  height: 50px;\\n  width: 200px;\\n  font-family: \\\"Digital Numbers\\\";\\n}\\n.modal button:hover:enabled,\\n.modal button:hover:enabled a {\\n  background-color: #808080;\\n}\\n\\n/* ---------- MODAL SECTION END ----------*/\\n/* ---------- BUTTONS SECTION START ----------*/\\n.buttons,\\n.buttons-main {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  width: 35%;\\n}\\n\\n.center-buttons {\\n  width: 100%;\\n}\\n\\n.buttons-row {\\n  flex-direction: row;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n.buttons-row #codeToUpload,\\n.buttons-row #codeOnRobot {\\n  width: 50%;\\n}\\n\\n.buttons button,\\n.buttons a {\\n  cursor: pointer;\\n  background: #0c0c0c;\\n  color: #ffffff;\\n  font-family: \\\"Digital Numbers\\\";\\n  width: 50%;\\n  height: 30%;\\n  min-height: 30px;\\n  max-height: 120px;\\n  border-radius: 15px;\\n  font-size: 12px;\\n  margin-top: 3%;\\n  margin-bottom: 0px;\\n  text-decoration: none;\\n  text-align: center;\\n}\\n\\n.buttons a button {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0px;\\n}\\n\\n.buttons button:hover:enabled,\\n.buttons button:hover:enabled a {\\n  background-color: #808080;\\n}\\n\\n.camera-buttons {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  height: 60px;\\n  margin: 10px;\\n  width: 75%;\\n}\\n.camera-buttons.vertical {\\n  flex-direction: column;\\n  height: 50%;\\n  width: 100%;\\n}\\n.camera-buttons .connection {\\n  width: 45%;\\n  height: 100%;\\n  max-width: 50%;\\n  font-size: 12px;\\n  margin: 10px;\\n}\\n.camera-buttons .connection.active {\\n  background-color: #808080;\\n}\\n\\nbutton:disabled {\\n  cursor: default;\\n  border: 1px solid #999999;\\n  background-color: #808080;\\n  opacity: 0.7;\\n}\\n\\n/* ---------- BUTTONS SECTION END ----------*/\\n.video-container {\\n  height: 100%;\\n  width: 65%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.video-container video {\\n  margin: 0px;\\n  padding: 0px;\\n  display: block;\\n  position: absolute;\\n}\\n.video-container .canvas {\\n  display: block;\\n  position: relative;\\n  left: 0;\\n  top: 0;\\n}\\n\\n/* ---------- JOYSTICK SECTION START ----------*/\\n.joystick {\\n  height: 100%;\\n  width: 65%;\\n}\\n.joystick #zone_joystick {\\n  position: relative;\\n  height: 100%;\\n  border-radius: 10px;\\n  background-color: none;\\n}\\n.joystick .video {\\n  height: 100%;\\n  width: 100%;\\n  margin: 0px;\\n  padding: 0px;\\n}\\n\\n.zone {\\n  display: none;\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n}\\n.zone.active {\\n  display: block;\\n}\\n.zone.static {\\n  height: 100%;\\n  border-radius: 10px;\\n  background-color: rgba(255, 0, 0, 0.2);\\n}\\n\\n.info-text {\\n  font-size: 12px;\\n}\\n\\n/* ---------- JOYSTICK SECTION END ----------*/\\n/* ---------- SLIDER SECTION START ----------*/\\n.slider-container {\\n  width: 100%;\\n  height: 40px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  margin-bottom: 25px;\\n}\\n\\n.value-container {\\n  margin-bottom: 25px;\\n}\\n\\n.slider {\\n  width: 60%;\\n  background-color: rgba(255, 0, 0, 0.6666666667);\\n  height: 20px;\\n  -webkit-appearance: none;\\n  border-radius: 25px;\\n  box-shadow: 2px 8px, 13px, -3px;\\n}\\n\\n.slider::-webkit-slider-thumb {\\n  cursor: pointer;\\n  appearance: none;\\n  height: 35px;\\n  width: 35px;\\n  background-color: rgba(255, 0, 0, 0.6666666667);\\n  border-radius: 50%;\\n  border: 7px solid;\\n}\\n\\n/* ---------- SLIDER SECTION END ----------*/\\n.remove-margin {\\n  margin-top: 5px !important;\\n}\\n\\n#settingsBtn {\\n  background-color: #0c0c0c;\\n  border: none;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://controller/./src/styles/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://controller/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://controller/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://controller/./src/styles/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://controller/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://controller/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://controller/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://controller/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://controller/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://controller/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/helpers.ts":
/*!***********************************!*\
  !*** ./src/components/helpers.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createComponent = void 0;\r\n/* CREATE COMPONENT */\r\nconst createComponent = (component, properties, text, parent) => {\r\n    let el = document.createElement(component);\r\n    Object.keys(properties).forEach(prop => el.setAttribute(prop, properties[prop]));\r\n    el.innerText = text;\r\n    if (parent) {\r\n        parent.appendChild(el);\r\n    }\r\n    return el;\r\n};\r\nexports.createComponent = createComponent;\r\n\n\n//# sourceURL=webpack://controller/./src/components/helpers.ts?");

/***/ }),

/***/ "./src/components/home.ts":
/*!********************************!*\
  !*** ./src/components/home.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.indexPage = void 0;\r\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/components/helpers.ts\");\r\nconst modals_1 = __webpack_require__(/*! ./modals */ \"./src/components/modals.ts\");\r\nconst indexPage = () => {\r\n    let root = document.getElementById(\"page-root\");\r\n    let headerdiv = (0, helpers_1.createComponent)(\"div\", { class: \"header\" }, null, root);\r\n    (0, helpers_1.createComponent)(\"h1\", {}, \"Robot Controller\", headerdiv);\r\n    let contentdiv = (0, helpers_1.createComponent)(\"div\", { class: \"content\" }, null, root);\r\n    let buttonsdiv = (0, helpers_1.createComponent)(\"div\", { class: \"buttons center-buttons\" }, null, contentdiv);\r\n    let joysticklink = (0, helpers_1.createComponent)(\"a\", { href: \"joystick.html\" }, null, buttonsdiv);\r\n    (0, helpers_1.createComponent)(\"button\", {}, \"Joystick\", joysticklink);\r\n    let selfdriveLink = (0, helpers_1.createComponent)(\"a\", { href: \"host.html\" }, null, buttonsdiv);\r\n    (0, helpers_1.createComponent)(\"button\", {}, \"Self-driving\", selfdriveLink);\r\n    let peerLink = (0, helpers_1.createComponent)(\"a\", { href: \"peer.html\" }, null, buttonsdiv);\r\n    (0, helpers_1.createComponent)(\"button\", {}, \"Peer device\", peerLink);\r\n    (0, helpers_1.createComponent)(\"button\", { id: \"helpBtn\" }, \"Help\", buttonsdiv);\r\n    let helpModal = (0, modals_1.createModal)(contentdiv, \"helpModal\", \"small\");\r\n    (0, modals_1.helpModalContent)(helpModal, \"controller\");\r\n    (0, modals_1.openCloseModal)();\r\n};\r\nexports.indexPage = indexPage;\r\n\n\n//# sourceURL=webpack://controller/./src/components/home.ts?");

/***/ }),

/***/ "./src/components/modals.ts":
/*!**********************************!*\
  !*** ./src/components/modals.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.openCloseModal = exports.helpModalContent = exports.addModals = exports.createModal = void 0;\r\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/components/helpers.ts\");\r\nconst createModal = (root, modalId, size = \"large\") => {\r\n    let modal = (0, helpers_1.createComponent)(\"div\", { id: modalId, class: \"modal\" }, null, root);\r\n    let modalcontent = (0, helpers_1.createComponent)(\"div\", { class: `modal-content ${size}` }, null, modal);\r\n    let modalheader = (0, helpers_1.createComponent)(\"div\", { class: \"modal-header\" }, null, modalcontent);\r\n    (0, helpers_1.createComponent)(\"span\", { class: \"close\" }, \"X\", modalheader);\r\n    (0, helpers_1.createComponent)(\"h2\", {}, \"How to Use\", modalheader);\r\n    let modalbody = (0, helpers_1.createComponent)(\"div\", { class: \"modal-body\" }, null, modalcontent);\r\n    (0, helpers_1.createComponent)(\"div\", { class: \"modal-footer\" }, \"Thanks for reading\", modalcontent);\r\n    root.appendChild(modal);\r\n    return modalbody;\r\n};\r\nexports.createModal = createModal;\r\nconst addModals = (root, helpLink) => {\r\n    let helpModal = (0, exports.createModal)(root, \"helpModal\", \"small\");\r\n    helpModalContent(helpModal, helpLink);\r\n    let settingsModal = (0, exports.createModal)(root, \"settingsModal\");\r\n    settingsModalContent(settingsModal);\r\n    let mappingsModal = (0, exports.createModal)(root, \"mappingsModal\");\r\n    mappingModalContent(mappingsModal);\r\n    let testAnglesModal = (0, exports.createModal)(root, \"testAnglesModal\", \"extra-large\");\r\n    testAnglesModalContent(testAnglesModal);\r\n    let robotCodeModal = (0, exports.createModal)(root, \"robotCodeModal\", \"extra-large\");\r\n    robotCodeModalContent(robotCodeModal);\r\n};\r\nexports.addModals = addModals;\r\nfunction helpModalContent(root, link) {\r\n    (0, helpers_1.createComponent)(\"p\", {}, `For detailed instructions, please read the user manual`, root);\r\n    let userManualLink = (0, helpers_1.createComponent)(\"a\", { target: '_blank', href: `https://github.com/LewisTrundle/L4-Individual-Project/blob/develop/src/user_manual.md#${link}` }, null, root);\r\n    (0, helpers_1.createComponent)(\"button\", {}, \"User manual\", userManualLink);\r\n}\r\nexports.helpModalContent = helpModalContent;\r\nfunction settingsModalContent(root) {\r\n    let buttonsdiv = (0, helpers_1.createComponent)(\"div\", { class: \"buttons center-buttons\" }, null, root);\r\n    sendCodeSlider(buttonsdiv);\r\n    (0, helpers_1.createComponent)(\"button\", { id: \"mappingsBtn\", class: \"remove-margin\" }, \"Select angle to motor mapping\", buttonsdiv);\r\n    (0, helpers_1.createComponent)(\"button\", { id: \"testAnglesBtn\", class: \"remove-margin\" }, \"Perform Diagnostic\", buttonsdiv);\r\n    (0, helpers_1.createComponent)(\"button\", { id: \"robotCodeBtn\", class: \"remove-margin\" }, \"Robot Code\", buttonsdiv);\r\n}\r\n;\r\nfunction sendCodeSlider(root) {\r\n    let slidercontainer = (0, helpers_1.createComponent)(\"div\", { class: \"slider-container\" }, null, root);\r\n    let valuecontainer = (0, helpers_1.createComponent)(\"div\", { class: \"value-container\" }, null, slidercontainer);\r\n    (0, helpers_1.createComponent)(\"span\", { id: \"output\" }, \"100\", valuecontainer);\r\n    (0, helpers_1.createComponent)(\"input\", { type: \"range\", min: \"0\", max: \"600\", value: \"100\", class: \"slider\", id: \"sendCodeSlider\" }, null, slidercontainer);\r\n}\r\n;\r\nfunction mappingModalContent(root) {\r\n    let buttonsdiv = (0, helpers_1.createComponent)(\"div\", { class: \"buttons center-buttons\" }, null, root);\r\n    (0, helpers_1.createComponent)(\"button\", { id: \"tightControl\" }, \"Tight Mapping\", buttonsdiv);\r\n    (0, helpers_1.createComponent)(\"button\", { id: \"looseControl\" }, \"Loose Mapping\", buttonsdiv);\r\n}\r\n;\r\nfunction testAnglesModalContent(root) {\r\n    let buttonsdiv = (0, helpers_1.createComponent)(\"div\", { class: \"buttons center-buttons\" }, null, root);\r\n    (0, helpers_1.createComponent)(\"button\", { onclick: \"controller.diagnostic()\" }, \"Test all angles\", buttonsdiv);\r\n    for (let i = 0; i <= 360; i += 45) {\r\n        (0, helpers_1.createComponent)(\"button\", { onclick: `controller.diagnostic(${i})`, class: \"remove-margin\" }, `Test ${i} degrees`, buttonsdiv);\r\n    }\r\n    ;\r\n}\r\n;\r\nfunction robotCodeModalContent(root) {\r\n    let buttonsdiv1 = (0, helpers_1.createComponent)(\"div\", { class: \"buttons buttons-row\" }, null, root);\r\n    (0, helpers_1.createComponent)(\"button\", { id: \"uploadCodeBtn\" }, \"UPLOAD CODE\", buttonsdiv1);\r\n    (0, helpers_1.createComponent)(\"button\", { id: \"getCodeBtn\" }, \"GET DEVICE CODE\", buttonsdiv1);\r\n    (0, helpers_1.createComponent)(\"button\", { id: \"resetCodeBtn\" }, \"RESET CODE\", buttonsdiv1);\r\n    let buttonsdiv2 = (0, helpers_1.createComponent)(\"div\", { class: \"buttons buttons-row\" }, null, root);\r\n    (0, helpers_1.createComponent)(\"p\", { id: \"codeToUpload\" }, \"THERE IS NO CODE TO UPLOAD\", buttonsdiv2);\r\n    (0, helpers_1.createComponent)(\"p\", { id: \"codeOnRobot\" }, \"hello\", buttonsdiv2);\r\n}\r\n;\r\nfunction openCloseModal() {\r\n    const modals = {\r\n        help: { modal: \"helpModal\", button: \"helpBtn\" },\r\n        settings: { modal: \"settingsModal\", button: \"settingsBtn\" },\r\n        mappings: { modal: \"mappingsModal\", button: \"mappingsBtn\" },\r\n        testAngles: { modal: \"testAnglesModal\", button: \"testAnglesBtn\" },\r\n        robotCode: { modal: \"robotCodeModal\", button: \"robotCodeBtn\" }\r\n    };\r\n    var modalElements = [];\r\n    var span = document.getElementsByClassName(\"close\");\r\n    const settingsModal = document.getElementById(\"settingsModal\");\r\n    for (const [key, value] of Object.entries(modals)) {\r\n        const modal = document.getElementById(value.modal);\r\n        const button = document.getElementById(value.button);\r\n        if (!(modal && button)) {\r\n            break;\r\n        }\r\n        modalElements.push(modal);\r\n        button.onclick = () => {\r\n            if (settingsModal) {\r\n                settingsModal.style.display = \"none\";\r\n            }\r\n            modal.style.display = \"block\";\r\n        };\r\n    }\r\n    ;\r\n    // When the user clicks on <span> (x), close the modal\r\n    for (var i = 0; i < span.length; i++) {\r\n        span[i].onclick = function () {\r\n            for (var j = 0; j < modalElements.length; j++) {\r\n                modalElements[j].style.display = \"none\";\r\n            }\r\n            ;\r\n        };\r\n    }\r\n    ;\r\n    // When the user clicks anywhere outside of the modal, close it\r\n    window.onclick = function (event) {\r\n        for (var j = 0; j < modalElements.length; j++) {\r\n            if (event.target === modalElements[j]) {\r\n                modalElements[j].style.display = \"none\";\r\n            }\r\n            ;\r\n        }\r\n        ;\r\n    };\r\n}\r\nexports.openCloseModal = openCloseModal;\r\n;\r\n\n\n//# sourceURL=webpack://controller/./src/components/modals.ts?");

/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst home_1 = __webpack_require__(/*! ../components/home */ \"./src/components/home.ts\");\r\n__webpack_require__(/*! ../styles/app.scss */ \"./src/styles/app.scss\");\r\nwindow.onload = function () {\r\n    (0, home_1.indexPage)();\r\n};\r\n\n\n//# sourceURL=webpack://controller/./src/pages/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.ts");
/******/ 	controller = __webpack_exports__;
/******/ 	
/******/ })()
;