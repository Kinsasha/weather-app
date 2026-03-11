/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/Grinched 2.0 DEMO.otf */ \"./src/asset/Grinched 2.0 DEMO.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: \"grinched\";\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"opentype\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n.header {\r\n  animation: cloudFloat 10s infinite linear;\r\n}\r\n\r\n@keyframes cloudFloat {\r\n  0% {\r\n    transform: translateX(0);\r\n  }\r\n  50% {\r\n    transform: translateX(40px);\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes scaling {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    transform: scale(1.05);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  font-size: 62.5%;\r\n}\r\nbody {\r\n  position: relative;\r\n  z-index: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  font-size: clamp(0.5rem, 2vw + 2rem, 6rem);\r\n  background-color: transparent;\r\n  min-height: 100vh;\r\n  width: 70vw;\r\n  font-family: \"grinched\", system-ui, -apple-system, BlinkMacSystemFont,\r\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\r\n    sans-serif;\r\n  color: white;\r\n}\r\n.backgroundVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -1;\r\n  object-fit: cover;\r\n}\r\n/* .video {\r\n  height: 10rem;\r\n  width: 10rem;\r\n} */\r\n.header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 2rem;\r\n  height: 30vh;\r\n  width: 30vw;\r\n  color: linear-gradient();\r\n  background-image: linear-gradient(rgb(25, 0, 255), rgb(0, 0, 0, 0.2));\r\n  border: 0.1rem solid rgb(255, 255, 255);\r\n  border-radius: 50%;\r\n}\r\n\r\n.headerText {\r\n  font-size: 100px;\r\n  text-shadow: 4px 4px 4px #ffffff;\r\n}\r\n.location {\r\n  text-shadow: 4px 4px #ffffff;\r\n  letter-spacing: 0.3rem;\r\n}\r\n.bodyContainer {\r\n  background-image: linear-gradient(rgb(0, 0, 0, 0.2), rgb(25, 0, 255));\r\n  min-width: 70vw;\r\n  max-width: 90vw;\r\n  border-radius: 2.5rem 2.5rem 0 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  border: 0.1rem solid rgb(255, 255, 255);\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n.formGroup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n.weatherContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 0.1rem solid rgb(255, 255, 255, 0.2);\r\n  border-radius: 25px;\r\n  width: 40vw;\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\np {\r\n  font-size: clamp(0.5rem, 1vw + 1rem, 4rem);\r\n  font-family: \"Dancing Script\", Pacifico, Lobster, system-ui, -apple-system,\r\n    BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\r\n    \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  margin: 0.8rem;\r\n  padding: 2rem;\r\n  border: 0.1rem solid rgb(255, 255, 255, 0.2);\r\n  border-radius: 13px;\r\n}\r\n.imgContainer {\r\n  border: 0.1rem solid rgb(255, 255, 255, 0.2);\r\n  border-radius: 50%;\r\n  width: 20rem;\r\n  height: 20rem;\r\n}\r\nimg {\r\n  width: 30rem;\r\n  height: 20rem;\r\n}\r\ninput,\r\nbutton {\r\n  padding: 2.5rem;\r\n  width: clamp(20rem, 20vw + 20rem, 100rem);\r\n  border-radius: 2.5rem;\r\n  font-size: clamp(0.5rem, 0.5vw + 1rem, 4rem);\r\n  background: transparent;\r\n  color: white;\r\n  letter-spacing: 0.2rem;\r\n  border: 0.3rem solid rgba(255, 255, 255, 0.2);\r\n}\r\nbutton {\r\n  width: clamp(13rem, 5vw + 5rem, 25rem);\r\n  padding: 2rem;\r\n  border: 0.1rem solid rgba(255, 255, 255, 0.2);\r\n  cursor: pointer;\r\n}\r\nbutton:hover {\r\n  animation: scaling 3s infinite;\r\n  border: 0.1rem solid rgba(255, 255, 255);\r\n}\r\n.loader {\r\n  width: 40px;\r\n  height: 40px;\r\n  /* background-color: ?; */\r\n  border: 0.8rem double yellow;\r\n  border-top: 0.8rem solid yellow;\r\n  border-radius: 50%;\r\n  animation: spin 1s linear infinite;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 45%;\r\n  display: none;\r\n}\r\nfooter {\r\n  height: 5rem;\r\n  background-image: linear-gradient(rgb(25, 0, 255), rgb(0, 0, 0, 0.2));\r\n  width: 70vw;\r\n  border: 0.3rem solid rgb(255, 255, 255);\r\n  border-top: none;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/events.js"
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnHandler: () => (/* binding */ btnHandler)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\nconst btnHandler = () => {\r\n  const bodyContainer = document.querySelector(\".bodyContainer\");\r\n  const locationInput = document.querySelector(\".locationInput\");\r\n\r\n  locationInput.focus();\r\n\r\n  bodyContainer.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"submitBtn\")) {\r\n      e.preventDefault();\r\n\r\n      //safeguards\r\n      if (locationInput.value.length <= 2)\r\n        return alert(\"Location must be more than two letters\");\r\n\r\n      const data = {\r\n        location: locationInput.value.toLowerCase().trim(),\r\n      };\r\n\r\n      (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(data.location);\r\n      locationInput.value = \"\";\r\n      locationInput.focus();\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./src/events.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\n\r\n\r\n\r\nconst header = document.querySelector(\".headerText\");\r\nconst location = document.querySelector(\".location\");\r\n\r\nconst focus = () => {\r\n  const locationInput = document.querySelector(\".locationInput\");\r\n\r\n  locationInput.focus();\r\n};\r\n\r\nconst init = () => {\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_2__.colorRandomizer)(header);\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_2__.colorRandomizer)(location);\r\n  (0,_events__WEBPACK_IMPORTED_MODULE_1__.btnHandler)();\r\n};\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?\n}");

/***/ },

/***/ "./src/render.js"
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderData: () => (/* binding */ renderData)\n/* harmony export */ });\n/* harmony import */ var _asset_rainy_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/rainy.svg */ \"./src/asset/rainy.svg\");\n/* harmony import */ var _asset_light_rain_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/light rain.svg */ \"./src/asset/light rain.svg\");\n/* harmony import */ var _asset_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/cloudy.svg */ \"./src/asset/cloudy.svg\");\n/* harmony import */ var _asset_snow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/snow.svg */ \"./src/asset/snow.svg\");\n/* harmony import */ var _asset_sunny_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/sunny.svg */ \"./src/asset/sunny.svg\");\n/* harmony import */ var _asset_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/thunderstorm.svg */ \"./src/asset/thunderstorm.svg\");\n/* harmony import */ var _asset_mixed_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/mixed.svg */ \"./src/asset/mixed.svg\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst images = {\r\n  rain: _asset_rainy_svg__WEBPACK_IMPORTED_MODULE_0__,\r\n  drizzle: _asset_light_rain_svg__WEBPACK_IMPORTED_MODULE_1__,\r\n  clouds: _asset_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__,\r\n  snow: _asset_snow_svg__WEBPACK_IMPORTED_MODULE_3__,\r\n  clear: _asset_sunny_svg__WEBPACK_IMPORTED_MODULE_4__,\r\n  thunderstorm: _asset_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_5__,\r\n  mixed: _asset_mixed_svg__WEBPACK_IMPORTED_MODULE_6__,\r\n};\r\n\r\nconst renderData = (data) => {\r\n  const body = document.querySelector(\".bodyContainer\");\r\n  const imgContainer = document.createElement(\"div\");\r\n  const img = document.createElement(\"img\");\r\n  const name = document.createElement(\"p\");\r\n  const main = document.createElement(\"p\");\r\n  const description = document.createElement(\"p\");\r\n  const temp = document.createElement(\"p\");\r\n  const tempMinMax = document.createElement(\"p\");\r\n  const humidity = document.createElement(\"p\");\r\n  const feelsLike = document.createElement(\"p\");\r\n\r\n  const weatherContainer = document.querySelector(\".weatherContainer\");\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_7__.hideLoader)();\r\n  weatherContainer.style.display = \"flex\";\r\n  weatherContainer.innerHTML = \"\";\r\n\r\n  const mixed = [images[\"mixed\"]];\r\n\r\n  const imgLink = data.weather[0].main.toLowerCase();\r\n  const iconSrc = images[imgLink] || mixed;\r\n  console.log(iconSrc);\r\n\r\n  img.src = iconSrc;\r\n\r\n  imgContainer.classList.add(\"imgContainer\");\r\n  img.classList.add(\"img\");\r\n  imgContainer.append(img);\r\n\r\n  name.textContent = `Location : ${data.name}`;\r\n  main.textContent = data.weather[0].main;\r\n  description.textContent = data.weather[0].description;\r\n  temp.textContent = `Temperature : ${data.main.temp} C`;\r\n  tempMinMax.textContent = `Temperature Range : ${data.main.temp_min} C - ${data.main.temp_max} C`;\r\n  humidity.textContent = `Humidity : ${data.main.humidity}%`;\r\n  feelsLike.textContent = `It feels like ${data.main.feels_like} C out there`;\r\n\r\n  weatherContainer.append(\r\n    imgContainer,\r\n    name,\r\n    main,\r\n    description,\r\n    temp,\r\n    tempMinMax,\r\n    humidity,\r\n    feelsLike\r\n  );\r\n  body.append(weatherContainer);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./src/render.js?\n}");

/***/ },

/***/ "./src/ui.js"
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   colorRandomizer: () => (/* binding */ colorRandomizer),\n/* harmony export */   hideLoader: () => (/* binding */ hideLoader),\n/* harmony export */   showLoader: () => (/* binding */ showLoader)\n/* harmony export */ });\nconst colorRandomizer = (element) => {\r\n  const options = [\r\n    \"red\",\r\n    \"orange\",\r\n    \"yellow\",\r\n    \"green\",\r\n    \"blue\",\r\n    \"indigo\",\r\n    \"violet\",\r\n  ];\r\n\r\n  const text = element.textContent;\r\n  const coloredText = text\r\n    .split(\"\")\r\n    .map((letter) => {\r\n      const randomizer = Math.floor(Math.random() * options.length);\r\n      const color = options[randomizer];\r\n\r\n      return `<span style=\"color: ${color}\">${letter}</span>`;\r\n    })\r\n    .join(\"\");\r\n\r\n  element.innerHTML = coloredText;\r\n};\r\n\r\nconst showLoader = () => {\r\n  const loader = document.querySelector(\".loader\");\r\n  loader.style.display = \"block\";\r\n};\r\nconst hideLoader = () => {\r\n  const loader = document.querySelector(\".loader\");\r\n  loader.style.display = \"none\";\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./src/ui.js?\n}");

/***/ },

/***/ "./src/weather.js"
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\n\r\nconst getWeather = async (data) => {\r\n  // console.log(data);\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showLoader)();\r\n  try {\r\n    const response = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=e052cb7881539bd15cc4b6033e2332eb&units=metric`\r\n    );\r\n\r\n    if (!response.ok) {\r\n      return alert(`Error: ${response.status}`);\r\n    }\r\n    const weatherData = await response.json();\r\n\r\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderData)(weatherData);\r\n  } catch (error) {\r\n    alert(error);\r\n  } finally {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.hideLoader)();\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./src/weather.js?\n}");

/***/ },

/***/ "./src/asset/Grinched 2.0 DEMO.otf"
/*!*****************************************!*\
  !*** ./src/asset/Grinched 2.0 DEMO.otf ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"909b676cd9d3f8e48fc4.otf\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/Grinched_2.0_DEMO.otf?\n}");

/***/ },

/***/ "./src/asset/cloudy.svg"
/*!******************************!*\
  !*** ./src/asset/cloudy.svg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1cf904b59e065870c7c9.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/cloudy.svg?\n}");

/***/ },

/***/ "./src/asset/light rain.svg"
/*!**********************************!*\
  !*** ./src/asset/light rain.svg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"03bc101eec43ffb6825c.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/light_rain.svg?\n}");

/***/ },

/***/ "./src/asset/mixed.svg"
/*!*****************************!*\
  !*** ./src/asset/mixed.svg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"582b079909f91258deee.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/mixed.svg?\n}");

/***/ },

/***/ "./src/asset/rainy.svg"
/*!*****************************!*\
  !*** ./src/asset/rainy.svg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"58182f5ec077eddb3831.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/rainy.svg?\n}");

/***/ },

/***/ "./src/asset/snow.svg"
/*!****************************!*\
  !*** ./src/asset/snow.svg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a06a2f9b44109ee7422b.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/snow.svg?\n}");

/***/ },

/***/ "./src/asset/sunny.svg"
/*!*****************************!*\
  !*** ./src/asset/sunny.svg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"11956b9e91cdd795a415.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/sunny.svg?\n}");

/***/ },

/***/ "./src/asset/thunderstorm.svg"
/*!************************************!*\
  !*** ./src/asset/thunderstorm.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"244766527e112d16542f.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/asset/thunderstorm.svg?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;