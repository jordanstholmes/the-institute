/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/controllers/getQuiz.js":
/*!*****************************************!*\
  !*** ./database/controllers/getQuiz.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/quiz */ \"./database/models/quiz.js\");\n\n\nvar getQuizByName = function getQuizByName(quizName) {\n  return new Promise(function (resolve, reject) {\n    _models_quiz__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById({\n      _id: quizName\n    }, function (err, response) {\n      if (err) return reject(err);\n      return resolve(response);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getQuizByName);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9jb250cm9sbGVycy9nZXRRdWl6LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvY29udHJvbGxlcnMvZ2V0UXVpei5qcz85ZTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBRdWl6IGZyb20gJy4uL21vZGVscy9xdWl6JztcblxuY29uc3QgZ2V0UXVpekJ5TmFtZSA9IHF1aXpOYW1lID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgUXVpei5maW5kQnlJZCh7IF9pZDogcXVpek5hbWUgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRRdWl6QnlOYW1lO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./database/controllers/getQuiz.js\n");

/***/ }),

/***/ "./database/controllers/getVideo.js":
/*!******************************************!*\
  !*** ./database/controllers/getVideo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/video */ \"./database/models/video.js\");\n\n\nvar ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId; // ObjectId\n\nvar getVideoById = function getVideoById(id) {\n  return new Promise(function (resolve, reject) {\n    _models_video__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById({\n      _id: ObjectId(id)\n    }, function (err, response) {\n      if (err) return reject(err);\n      return resolve(response);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getVideoById);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9jb250cm9sbGVycy9nZXRWaWRlby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGFiYXNlL2NvbnRyb2xsZXJzL2dldFZpZGVvLmpzPzg1ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9tb2RlbHMvdmlkZW8nO1xuXG5jb25zdCB7IE9iamVjdElkIH0gPSBtb25nb29zZS5UeXBlcztcbi8vIE9iamVjdElkXG5cbmNvbnN0IGdldFZpZGVvQnlJZCA9IGlkID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgVmlkZW8uZmluZEJ5SWQoeyBfaWQ6IE9iamVjdElkKGlkKSB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZpZGVvQnlJZDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./database/controllers/getVideo.js\n");

/***/ }),

/***/ "./database/controllers/insertQuiz.js":
/*!********************************************!*\
  !*** ./database/controllers/insertQuiz.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/quiz */ \"./database/models/quiz.js\");\n\n\nvar insertQuiz = function insertQuiz(quiz) {\n  return new Promise(function (resolve, reject) {\n    _models_quiz__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(quiz, function (err, response) {\n      if (err) return reject(err);\n      return resolve(response);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertQuiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9jb250cm9sbGVycy9pbnNlcnRRdWl6LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvY29udHJvbGxlcnMvaW5zZXJ0UXVpei5qcz8yMDJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBRdWl6IGZyb20gJy4uL21vZGVscy9xdWl6JztcblxuY29uc3QgaW5zZXJ0UXVpeiA9IHF1aXogPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBRdWl6LmNyZWF0ZShxdWl6LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc2VydFF1aXo7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/controllers/insertQuiz.js\n");

/***/ }),

/***/ "./database/controllers/insertVideo.js":
/*!*********************************************!*\
  !*** ./database/controllers/insertVideo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/video */ \"./database/models/video.js\");\n\n\nvar insertVideo = function insertVideo(video) {\n  return new Promise(function (resolve, reject) {\n    _models_video__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(video, function (err, response) {\n      if (err) return reject(err);\n      return resolve(response);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertVideo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9jb250cm9sbGVycy9pbnNlcnRWaWRlby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGFiYXNlL2NvbnRyb2xsZXJzL2luc2VydFZpZGVvLmpzPzJhMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvIGZyb20gJy4uL21vZGVscy92aWRlbyc7XG5cbmNvbnN0IGluc2VydFZpZGVvID0gdmlkZW8gPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBWaWRlby5jcmVhdGUodmlkZW8sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zZXJ0VmlkZW87XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/controllers/insertVideo.js\n");

/***/ }),

/***/ "./database/index.js":
/*!***************************!*\
  !*** ./database/index.js ***!
  \***************************/
/*! exports provided: getVideoById, getQuizByName, insertQuiz, insertVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_getVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/getVideo */ \"./database/controllers/getVideo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getVideoById\", function() { return _controllers_getVideo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _controllers_insertVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/insertVideo */ \"./database/controllers/insertVideo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertVideo\", function() { return _controllers_insertVideo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _controllers_getQuiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/getQuiz */ \"./database/controllers/getQuiz.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getQuizByName\", function() { return _controllers_getQuiz__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _controllers_insertQuiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/insertQuiz */ \"./database/controllers/insertQuiz.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertQuiz\", function() { return _controllers_insertQuiz__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\nvar dbUrl = process.env.DB_URL || 'mongodb://localhost/institute';\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(dbUrl, {\n  useNewUrlParser: true\n});\nvar db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\ndb.on('error', console.error.bind(console, 'mongoose connection error:'));\ndb.once('open', function () {\n  return console.log('Connected to mongo server on', dbUrl);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGFiYXNlL2luZGV4LmpzPzdhMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBnZXRWaWRlb0J5SWQgZnJvbSAnLi9jb250cm9sbGVycy9nZXRWaWRlbyc7XG5pbXBvcnQgaW5zZXJ0VmlkZW8gZnJvbSAnLi9jb250cm9sbGVycy9pbnNlcnRWaWRlbyc7XG5pbXBvcnQgZ2V0UXVpekJ5TmFtZSBmcm9tICcuL2NvbnRyb2xsZXJzL2dldFF1aXonO1xuaW1wb3J0IGluc2VydFF1aXogZnJvbSAnLi9jb250cm9sbGVycy9pbnNlcnRRdWl6JztcblxuY29uc3QgZGJVcmwgPSBwcm9jZXNzLmVudi5EQl9VUkwgfHwgJ21vbmdvZGI6Ly9sb2NhbGhvc3QvaW5zdGl0dXRlJztcbm1vbmdvb3NlLmNvbm5lY3QoZGJVcmwsIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pO1xuXG5jb25zdCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5cbmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnbW9uZ29vc2UgY29ubmVjdGlvbiBlcnJvcjonKSk7XG5kYi5vbmNlKCdvcGVuJywgKCkgPT4gY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nbyBzZXJ2ZXIgb24nLCBkYlVybCkpO1xuXG5leHBvcnQge1xuICBnZXRWaWRlb0J5SWQsXG4gIGdldFF1aXpCeU5hbWUsXG4gIGluc2VydFF1aXosXG4gIGluc2VydFZpZGVvLFxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/index.js\n");

/***/ }),

/***/ "./database/models/quiz.js":
/*!*********************************!*\
  !*** ./database/models/quiz.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar questionSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  questionText: String,\n  answerOptions: [String],\n  answer: [String]\n});\nvar quizSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: String,\n  questions: [questionSchema]\n});\nvar Quiz = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Quiz', quizSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9tb2RlbHMvcXVpei5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGFiYXNlL21vZGVscy9xdWl6LmpzPzU1NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgcXVlc3Rpb25TY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuICBxdWVzdGlvblRleHQ6IFN0cmluZyxcbiAgYW5zd2VyT3B0aW9uczogW1N0cmluZ10sXG4gIGFuc3dlcjogW1N0cmluZ10sXG59KTtcblxuY29uc3QgcXVpelNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHRpdGxlOiBTdHJpbmcsXG4gIHF1ZXN0aW9uczogW3F1ZXN0aW9uU2NoZW1hXSxcbn0pO1xuXG5jb25zdCBRdWl6ID0gbW9uZ29vc2UubW9kZWwoJ1F1aXonLCBxdWl6U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpejtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./database/models/quiz.js\n");

/***/ }),

/***/ "./database/models/video.js":
/*!**********************************!*\
  !*** ./database/models/video.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId;\nvar videoSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: String,\n  source: String,\n  quiz_id: ObjectId\n});\nvar Video = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Video', videoSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9tb2RlbHMvdmlkZW8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9tb2RlbHMvdmlkZW8uanM/MTg3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCB7IE9iamVjdElkIH0gPSBtb25nb29zZS5TY2hlbWEuVHlwZXM7XG5cbmNvbnN0IHZpZGVvU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbiAgdGl0bGU6IFN0cmluZyxcbiAgc291cmNlOiBTdHJpbmcsXG4gIHF1aXpfaWQ6IE9iamVjdElkLFxufSk7XG5cbmNvbnN0IFZpZGVvID0gbW9uZ29vc2UubW9kZWwoJ1ZpZGVvJywgdmlkZW9TY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./database/models/video.js\n");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../database */ \"./database/index.js\");\n\n\n\nvar port = process.env.PORT || 7000;\nvar url = process.env.URL || 'localhost';\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar logging =  false ? undefined : morgan__WEBPACK_IMPORTED_MODULE_0___default()('dev');\napp.use(logging);\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('public'));\napp.use(logging);\napp.get('/videos/:videoId', function (req, res) {\n  var videoId = req.params.videoId;\n  Object(_database__WEBPACK_IMPORTED_MODULE_2__[\"getVideoById\"])(videoId).then(function (video) {\n    return res.send(video);\n  }).catch(function (err) {\n    console.err('getVideoById error:', err);\n    res.sendStatus(404);\n  });\n}); // temporarily hardcode quizName: 'SESSION 9 QUIZ'\n\napp.get('/quizzes/:quizName', function (req, res) {\n  Object(_database__WEBPACK_IMPORTED_MODULE_2__[\"getQuizByName\"])('SESSION 9 QUIZ').then(function (quiz) {\n    return res.send(quiz);\n  }).catch(function (err) {\n    console.err('getQuizByName error:', err);\n    res.send(404);\n  });\n});\napp.listen(port, function () {\n  return console.log(\"Server on \".concat(url, \" using port \").concat(port));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcz9hZjgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5pbXBvcnQgeyBnZXRWaWRlb0J5SWQsIGdldFF1aXpCeU5hbWUgfSBmcm9tICcuLi8uLi9kYXRhYmFzZSc7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDcwMDA7XG5jb25zdCB1cmwgPSBwcm9jZXNzLmVudi5VUkwgfHwgJ2xvY2FsaG9zdCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IGxvZ2dpbmcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gbW9yZ2FuKCdzaG9ydCcpIDogbW9yZ2FuKCdkZXYnKTtcblxuYXBwLnVzZShsb2dnaW5nKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcblxuYXBwLnVzZShsb2dnaW5nKTtcbmFwcC5nZXQoJy92aWRlb3MvOnZpZGVvSWQnLCAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyB2aWRlb0lkIH0gPSByZXEucGFyYW1zO1xuICBnZXRWaWRlb0J5SWQodmlkZW9JZClcbiAgICAudGhlbih2aWRlbyA9PiByZXMuc2VuZCh2aWRlbykpXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyKCdnZXRWaWRlb0J5SWQgZXJyb3I6JywgZXJyKTtcbiAgICAgIHJlcy5zZW5kU3RhdHVzKDQwNCk7XG4gICAgfSk7XG59KTtcblxuLy8gdGVtcG9yYXJpbHkgaGFyZGNvZGUgcXVpek5hbWU6ICdTRVNTSU9OIDkgUVVJWidcbmFwcC5nZXQoJy9xdWl6emVzLzpxdWl6TmFtZScsIChyZXEsIHJlcykgPT4ge1xuICBnZXRRdWl6QnlOYW1lKCdTRVNTSU9OIDkgUVVJWicpXG4gICAgLnRoZW4ocXVpeiA9PiByZXMuc2VuZChxdWl6KSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnIoJ2dldFF1aXpCeU5hbWUgZXJyb3I6JywgZXJyKTtcbiAgICAgIHJlcy5zZW5kKDQwNCk7XG4gICAgfSk7XG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgU2VydmVyIG9uICR7dXJsfSB1c2luZyBwb3J0ICR7cG9ydH1gKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server/index.js\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZ2FuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCI/MzIwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///morgan\n");

/***/ })

/******/ });