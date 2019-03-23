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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/quiz */ \"./database/models/quiz.js\");\n\n\nvar getQuizById = function getQuizById(quizId) {\n  return new Promise(function (resolve, reject) {\n    _models_quiz__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById({\n      _id: quizId\n    }, function (err, response) {\n      if (err) return reject(err);\n      return resolve(response);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getQuizById);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9jb250cm9sbGVycy9nZXRRdWl6LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvY29udHJvbGxlcnMvZ2V0UXVpei5qcz85ZTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBRdWl6IGZyb20gJy4uL21vZGVscy9xdWl6JztcblxuY29uc3QgZ2V0UXVpekJ5SWQgPSBxdWl6SWQgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBRdWl6LmZpbmRCeUlkKHsgX2lkOiBxdWl6SWQgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRRdWl6QnlJZDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/controllers/getQuiz.js\n");

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
/*! exports provided: getVideoById, getQuizById, insertQuiz, insertVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_getVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/getVideo */ \"./database/controllers/getVideo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getVideoById\", function() { return _controllers_getVideo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _controllers_insertVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/insertVideo */ \"./database/controllers/insertVideo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertVideo\", function() { return _controllers_insertVideo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _controllers_getQuiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/getQuiz */ \"./database/controllers/getQuiz.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getQuizById\", function() { return _controllers_getQuiz__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _controllers_insertQuiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/insertQuiz */ \"./database/controllers/insertQuiz.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertQuiz\", function() { return _controllers_insertQuiz__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\nvar dbUrl = process.env.DB_URL || 'mongodb://localhost/institute';\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(dbUrl, {\n  useNewUrlParser: true\n});\nvar db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\ndb.on('error', console.error.bind(console, 'mongoose connection error:'));\ndb.once('open', function () {\n  return console.log('Connected to mongo server on', dbUrl);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGFiYXNlL2luZGV4LmpzPzdhMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBnZXRWaWRlb0J5SWQgZnJvbSAnLi9jb250cm9sbGVycy9nZXRWaWRlbyc7XG5pbXBvcnQgaW5zZXJ0VmlkZW8gZnJvbSAnLi9jb250cm9sbGVycy9pbnNlcnRWaWRlbyc7XG5pbXBvcnQgZ2V0UXVpekJ5SWQgZnJvbSAnLi9jb250cm9sbGVycy9nZXRRdWl6JztcbmltcG9ydCBpbnNlcnRRdWl6IGZyb20gJy4vY29udHJvbGxlcnMvaW5zZXJ0UXVpeic7XG5cbmNvbnN0IGRiVXJsID0gcHJvY2Vzcy5lbnYuREJfVVJMIHx8ICdtb25nb2RiOi8vbG9jYWxob3N0L2luc3RpdHV0ZSc7XG5tb25nb29zZS5jb25uZWN0KGRiVXJsLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSB9KTtcblxuY29uc3QgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuXG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ21vbmdvb3NlIGNvbm5lY3Rpb24gZXJyb3I6JykpO1xuZGIub25jZSgnb3BlbicsICgpID0+IGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ28gc2VydmVyIG9uJywgZGJVcmwpKTtcblxuZXhwb3J0IHtcbiAgZ2V0VmlkZW9CeUlkLFxuICBnZXRRdWl6QnlJZCxcbiAgaW5zZXJ0UXVpeixcbiAgaW5zZXJ0VmlkZW8sXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./database/index.js\n");

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

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: REQUEST_VIDEO, RECEIVE_VIDEO, REQUEST_QUIZ, RECEIVE_QUIZ, fetchVideo, fetchQuiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_VIDEO\", function() { return REQUEST_VIDEO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_VIDEO\", function() { return RECEIVE_VIDEO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_QUIZ\", function() { return REQUEST_QUIZ; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_QUIZ\", function() { return RECEIVE_QUIZ; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchVideo\", function() { return fetchVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchQuiz\", function() { return fetchQuiz; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nvar REQUEST_VIDEO = 'REQUEST_VIDEO';\nvar RECEIVE_VIDEO = 'RECEIVE_VIDEO';\nvar REQUEST_QUIZ = 'REQUEST_QUIZ';\nvar RECEIVE_QUIZ = 'RECEIVE_QUIZ';\n\nfunction requestVideo(videoId) {\n  return {\n    type: REQUEST_VIDEO,\n    videoId: videoId\n  };\n}\n\nfunction receiveVideo(video) {\n  return {\n    type: RECEIVE_VIDEO,\n    video: video\n  };\n}\n\nfunction requestQuiz(quizId) {\n  return {\n    type: REQUEST_QUIZ,\n    quizId: quizId\n  };\n}\n\nfunction receiveQuiz(quiz) {\n  return {\n    type: RECEIVE_QUIZ,\n    quiz: quiz\n  };\n}\n\nfunction fetchVideo(videoId) {\n  return function (dispatch) {\n    dispatch(requestVideo());\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"http://localhost:7000/videos/\".concat(videoId)).then(function (response) {\n      return response.json();\n    }, function (err) {\n      return console.log('An error occurred', err);\n    }).then(function (video) {\n      return dispatch(receiveVideo(video));\n    });\n  };\n}\nfunction fetchQuiz(quizId) {\n  return function (dispatch) {\n    dispatch(requestQuiz(quizId));\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"http://localhost:7000/quizzes/\".concat(quizId)).then(function (response) {\n      return response.json();\n    }, function (err) {\n      return console.log('An error occurred', err);\n    }).then(function (quiz) {\n      return dispatch(receiveQuiz(quiz));\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXguanM/YmZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1ZJREVPID0gJ1JFUVVFU1RfVklERU8nO1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfVklERU8gPSAnUkVDRUlWRV9WSURFTyc7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9RVUlaID0gJ1JFUVVFU1RfUVVJWic7XG5leHBvcnQgY29uc3QgUkVDRUlWRV9RVUlaID0gJ1JFQ0VJVkVfUVVJWic7XG5cbmZ1bmN0aW9uIHJlcXVlc3RWaWRlbyh2aWRlb0lkKSB7XG4gIHJldHVybiB7IHR5cGU6IFJFUVVFU1RfVklERU8sIHZpZGVvSWQgfTtcbn1cblxuZnVuY3Rpb24gcmVjZWl2ZVZpZGVvKHZpZGVvKSB7XG4gIHJldHVybiB7IHR5cGU6IFJFQ0VJVkVfVklERU8sIHZpZGVvIH07XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RRdWl6KHF1aXpJZCkge1xuICByZXR1cm4geyB0eXBlOiBSRVFVRVNUX1FVSVosIHF1aXpJZCB9O1xufVxuXG5mdW5jdGlvbiByZWNlaXZlUXVpeihxdWl6KSB7XG4gIHJldHVybiB7IHR5cGU6IFJFQ0VJVkVfUVVJWiwgcXVpeiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hWaWRlbyh2aWRlb0lkKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VmlkZW8oKSk7XG5cbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NzAwMC92aWRlb3MvJHt2aWRlb0lkfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCksIGVyciA9PiBjb25zb2xlLmxvZygnQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnIpKVxuICAgICAgLnRoZW4odmlkZW8gPT4gZGlzcGF0Y2gocmVjZWl2ZVZpZGVvKHZpZGVvKSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hRdWl6KHF1aXpJZCkge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFF1aXoocXVpeklkKSk7XG5cbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9xdWl6emVzLyR7cXVpeklkfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCksIGVyciA9PiBjb25zb2xlLmxvZygnQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnIpKVxuICAgICAgLnRoZW4ocXVpeiA9PiBkaXNwYXRjaChyZWNlaXZlUXVpeihxdWl6KSkpO1xuICB9O1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/actions/index.js\n");

/***/ }),

/***/ "./src/client/components/Question.jsx":
/*!********************************************!*\
  !*** ./src/client/components/Question.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({\n  displayName: \"Question__Wrapper\",\n  componentId: \"sc-120ox53-0\"\n})([\"flex-direction:column;align-items:flex-start;\"]);\nvar AnswerOptionsList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({\n  displayName: \"Question__AnswerOptionsList\",\n  componentId: \"sc-120ox53-1\"\n})([\"list-style-type:lower-latin;\"]);\nvar ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({\n  displayName: \"Question__ListItem\",\n  componentId: \"sc-120ox53-2\"\n})([\"cursor:pointer;:hover{color:red;}\"]);\n\nvar Question = function Question(_ref) {\n  var question = _ref.question;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, question.questionText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnswerOptionsList, null, question.answerOptions.map(function (option, idx) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {\n      key: idx\n    }, option);\n  })));\n};\n\nQuestion.propTypes = {\n  question: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n    questionText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n    answerOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvUXVlc3Rpb24uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL1F1ZXN0aW9uLmpzeD9kMWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubGlgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuYDtcblxuY29uc3QgQW5zd2VyT3B0aW9uc0xpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItbGF0aW47XG5gO1xuXG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbmA7XG5cbmNvbnN0IFF1ZXN0aW9uID0gKHsgcXVlc3Rpb24gfSkgPT4gKFxuICA8V3JhcHBlcj5cbiAgICA8aDI+e3F1ZXN0aW9uLnF1ZXN0aW9uVGV4dH08L2gyPlxuICAgIDxBbnN3ZXJPcHRpb25zTGlzdD5cbiAgICAgIHtxdWVzdGlvbi5hbnN3ZXJPcHRpb25zLm1hcCgob3B0aW9uLCBpZHgpID0+IDxMaXN0SXRlbSBrZXk9e2lkeH0+e29wdGlvbn08L0xpc3RJdGVtPil9XG4gICAgPC9BbnN3ZXJPcHRpb25zTGlzdD5cbiAgPC9XcmFwcGVyPlxuKTtcblxuUXVlc3Rpb24ucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBxdWVzdGlvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYW5zd2VyT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/components/Question.jsx\n");

/***/ }),

/***/ "./src/client/components/Quiz.jsx":
/*!****************************************!*\
  !*** ./src/client/components/Quiz.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Question */ \"./src/client/components/Question.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({\n  displayName: \"Quiz__Wrapper\",\n  componentId: \"sc-1nztn4g-0\"\n})([\"width:100%;\"]);\nvar InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({\n  displayName: \"Quiz__InnerWrapper\",\n  componentId: \"sc-1nztn4g-1\"\n})([\"margin:0 25%;font-family:\", \";\"], function (props) {\n  return props.theme.font;\n});\n\nvar Quiz =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Quiz, _React$Component);\n\n  function Quiz() {\n    _classCallCheck(this, Quiz);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Quiz).apply(this, arguments));\n  }\n\n  _createClass(Quiz, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var fetchQuiz = this.props.fetchQuiz;\n      fetchQuiz();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          title = _this$props.title,\n          questions = _this$props.questions;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ol\", null, questions.map(function (question) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Question__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          question: question,\n          key: question._id\n        });\n      }))));\n    }\n  }]);\n\n  return Quiz;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nQuiz.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  fetchQuiz: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,\n  questions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvUXVpei5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvUXVpei5qc3g/OTc1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vUXVlc3Rpb24nO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgSW5uZXJXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbjogMCAyNSU7XG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnR9O1xuYDtcblxuY2xhc3MgUXVpeiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmV0Y2hRdWl6IH0gPSB0aGlzLnByb3BzO1xuICAgIGZldGNoUXVpeigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIHF1ZXN0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxJbm5lcldyYXBwZXI+XG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgIHtxdWVzdGlvbnMubWFwKHF1ZXN0aW9uID0+IDxRdWVzdGlvbiBxdWVzdGlvbj17cXVlc3Rpb259IGtleT17cXVlc3Rpb24uX2lkfSAvPil9XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9Jbm5lcldyYXBwZXI+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5RdWl6LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZmV0Y2hRdWl6OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBxdWVzdGlvbnM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXo7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQWxCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/components/Quiz.jsx\n");

/***/ }),

/***/ "./src/client/components/Video.jsx":
/*!*****************************************!*\
  !*** ./src/client/components/Video.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ \"react-player\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({\n  displayName: \"Video__Wrapper\",\n  componentId: \"sc-1u4guth-0\"\n})([\"display:flex;flex-direction:column;align-items:center;font-family:\", \";\"], function (props) {\n  return props.theme.font;\n});\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"Video__Nav\",\n  componentId: \"sc-1u4guth-1\"\n})([\"margin:20px;width:500px;display:flex;justify-content:space-around;\"]);\n\nvar Video =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Video, _React$Component);\n\n  function Video() {\n    _classCallCheck(this, Video);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Video).apply(this, arguments));\n  }\n\n  _createClass(Video, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var fetchVideo = this.props.fetchVideo;\n      fetchVideo();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          title = _this$props.title,\n          source = _this$props.source,\n          fetchVideo = _this$props.fetchVideo;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        url: source,\n        playing: false,\n        width: \"800px\",\n        height: \"450px\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"button\",\n        onClick: fetchVideo\n      }, \"Previous\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"button\",\n        onClick: fetchVideo\n      }, \"Next\")));\n    }\n  }]);\n\n  return Video;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nVideo.propTypes = {\n  source: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  fetchVideo: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvVmlkZW8uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL1ZpZGVvLmpzeD80ZTI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnR9O1xuYDtcblxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuYDtcblxuY2xhc3MgVmlkZW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZldGNoVmlkZW8gfSA9IHRoaXMucHJvcHM7XG4gICAgZmV0Y2hWaWRlbygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIHNvdXJjZSwgZmV0Y2hWaWRlbyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPFJlYWN0UGxheWVyIHVybD17c291cmNlfSBwbGF5aW5nPXtmYWxzZX0gd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjQ1MHB4XCIgLz5cbiAgICAgICAgPE5hdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtmZXRjaFZpZGVvfT5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2ZldGNoVmlkZW99Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9OYXY+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5WaWRlby5wcm9wVHlwZXMgPSB7XG4gIHNvdXJjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBmZXRjaFZpZGVvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTs7OztBQWxCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/components/Video.jsx\n");

/***/ }),

/***/ "./src/client/containers/QuizContainer.jsx":
/*!*************************************************!*\
  !*** ./src/client/containers/QuizContainer.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var _components_Quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Quiz */ \"./src/client/components/Quiz.jsx\");\n\n\n\nvar hardCodedQuizId = '5c06c63a585ed5090417a6d7';\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.quiz.title,\n    questions: state.quiz.questions\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchQuiz: function fetchQuiz() {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[\"fetchQuiz\"])(hardCodedQuizId));\n    }\n  };\n};\n\nvar QuizContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(_components_Quiz__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvUXVpekNvbnRhaW5lci5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvUXVpekNvbnRhaW5lci5qc3g/MzZmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hRdWl6IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgUXVpeiBmcm9tICcuLi9jb21wb25lbnRzL1F1aXonO1xuXG5jb25zdCBoYXJkQ29kZWRRdWl6SWQgPSAnNWMwNmM2M2E1ODVlZDUwOTA0MTdhNmQ3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdGl0bGU6IHN0YXRlLnF1aXoudGl0bGUsXG4gIHF1ZXN0aW9uczogc3RhdGUucXVpei5xdWVzdGlvbnMsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHsgZmV0Y2hRdWl6OiAoKSA9PiBkaXNwYXRjaChmZXRjaFF1aXooaGFyZENvZGVkUXVpeklkKSkgfSk7XG5cbmNvbnN0IFF1aXpDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShRdWl6KTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpekNvbnRhaW5lcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/containers/QuizContainer.jsx\n");

/***/ }),

/***/ "./src/client/containers/VideoContainer.jsx":
/*!**************************************************!*\
  !*** ./src/client/containers/VideoContainer.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Video */ \"./src/client/components/Video.jsx\");\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    source: state.video.source,\n    title: state.video.title\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchVideo: function fetchVideo() {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[\"fetchVideo\"])('5c06c63a585ed5090417a6de'));\n    }\n  };\n};\n\nvar VideoContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(_components_Video__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvVmlkZW9Db250YWluZXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL1ZpZGVvQ29udGFpbmVyLmpzeD84OWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaFZpZGVvIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlbyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHNvdXJjZTogc3RhdGUudmlkZW8uc291cmNlLFxuICB0aXRsZTogc3RhdGUudmlkZW8udGl0bGUsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHsgZmV0Y2hWaWRlbzogKCkgPT4gZGlzcGF0Y2goZmV0Y2hWaWRlbygnNWMwNmM2M2E1ODVlZDUwOTA0MTdhNmRlJykpIH0pO1xuXG5jb25zdCBWaWRlb0NvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpZGVvKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9Db250YWluZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/containers/VideoContainer.jsx\n");

/***/ }),

/***/ "./src/client/reducers/quizReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/quizReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nvar placeHolderQuiz = {\n  title: '',\n  questions: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : placeHolderQuiz;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_QUIZ\"]:\n      return state;\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"RECEIVE_QUIZ\"]:\n      return action.quiz;\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3JlZHVjZXJzL3F1aXpSZWR1Y2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy9xdWl6UmVkdWNlci5qcz8yOWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJFUVVFU1RfUVVJWiwgUkVDRUlWRV9RVUlaIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IHBsYWNlSG9sZGVyUXVpeiA9IHtcbiAgdGl0bGU6ICcnLFxuICBxdWVzdGlvbnM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gcGxhY2VIb2xkZXJRdWl6LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9RVUlaOlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGNhc2UgUkVDRUlWRV9RVUlaOlxuICAgICAgcmV0dXJuIGFjdGlvbi5xdWl6O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/reducers/quizReducer.js\n");

/***/ }),

/***/ "./src/client/reducers/rootReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/rootReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _videoReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoReducer */ \"./src/client/reducers/videoReducer.js\");\n/* harmony import */ var _quizReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quizReducer */ \"./src/client/reducers/quizReducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  video: _videoReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  quiz: _quizReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy9yb290UmVkdWNlci5qcz81OWI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB2aWRlbyBmcm9tICcuL3ZpZGVvUmVkdWNlcic7XG5pbXBvcnQgcXVpeiBmcm9tICcuL3F1aXpSZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgdmlkZW8sXG4gIHF1aXosXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/reducers/rootReducer.js\n");

/***/ }),

/***/ "./src/client/reducers/videoReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/videoReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nvar video1 = 'https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0';\nvar quizHash = '5c06c63a585ed5090417a6d7';\nvar defaultVideo = {\n  title: 'Loading...',\n  source: video1,\n  quiz_id: quizHash\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVideo;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_VIDEO\"]:\n      return state;\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"RECEIVE_VIDEO\"]:\n      return action.video;\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3JlZHVjZXJzL3ZpZGVvUmVkdWNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvdmlkZW9SZWR1Y2VyLmpzPzIyM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVRVUVTVF9WSURFTywgUkVDRUlWRV9WSURFTyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCB2aWRlbzEgPSAnaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzEwOTg1NTc1Nj9jb2xvcj1mZjAxNzkmdGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJztcbmNvbnN0IHF1aXpIYXNoID0gJzVjMDZjNjNhNTg1ZWQ1MDkwNDE3YTZkNyc7XG5jb25zdCBkZWZhdWx0VmlkZW8gPSB7XG4gIHRpdGxlOiAnTG9hZGluZy4uLicsXG4gIHNvdXJjZTogdmlkZW8xLFxuICBxdWl6X2lkOiBxdWl6SGFzaCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGRlZmF1bHRWaWRlbywgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfVklERU86XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgY2FzZSBSRUNFSVZFX1ZJREVPOlxuICAgICAgcmV0dXJuIGFjdGlvbi52aWRlbztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQVFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/reducers/videoReducer.js\n");

/***/ }),

/***/ "./src/client/store/index.js":
/*!***********************************!*\
  !*** ./src/client/store/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/rootReducer */ \"./src/client/reducers/rootReducer.js\");\n\n\n\n\nvar loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__[\"createLogger\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a, loggerMiddleware)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3N0b3JlL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zdG9yZS9pbmRleC5qcz8xOTVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xuXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gY3JlYXRlTG9nZ2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKFxuICByb290UmVkdWNlcixcbiAgYXBwbHlNaWRkbGV3YXJlKFxuICAgIHRodW5rTWlkZGxld2FyZSxcbiAgICBsb2dnZXJNaWRkbGV3YXJlLFxuICApLFxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/store/index.js\n");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _indexTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\n/* harmony import */ var _rootReact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rootReact */ \"./src/server/rootReact.jsx\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../database */ \"./database/index.js\");\n\n // eslint-disable-next-line\n\n\n // eslint-disable-next-line\n\n\n\n\n\nvar port = process.env.PORT || 7000;\nvar url = process.env.URL || 'localhost';\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar logging =  false ? undefined : morgan__WEBPACK_IMPORTED_MODULE_0___default()('dev');\napp.use(logging);\napp.get('/', function (req, res) {\n  console.log('hit root get');\n  var reactStr = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString(_rootReact__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  var ssr = Object(_indexTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(reactStr);\n  res.send(ssr);\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('public'));\napp.use(logging);\napp.get('/videos/:videoId', function (req, res) {\n  var videoId = req.params.videoId;\n  Object(_database__WEBPACK_IMPORTED_MODULE_7__[\"getVideoById\"])(videoId).then(function (video) {\n    return res.send(video);\n  }).catch(function (err) {\n    console.error('getVideoById error:', err);\n    res.sendStatus(404);\n  });\n});\napp.get('/quizzes/:quizId', function (req, res) {\n  var quizId = req.params.quizId;\n  Object(_database__WEBPACK_IMPORTED_MODULE_7__[\"getQuizById\"])(quizId).then(function (quiz) {\n    return res.send(quiz);\n  }).catch(function (err) {\n    console.error('getQuizByName error:', err);\n    res.send(404);\n  });\n});\napp.listen(port, function () {\n  return console.log(\"Server on \".concat(url, \" using port \").concat(port));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcz9hZjgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmltcG9ydCBpbmRleFRlbXBsYXRlIGZyb20gJy4vaW5kZXhUZW1wbGF0ZSc7XG5pbXBvcnQgUmVhY3RDb21wb25lbnRzIGZyb20gJy4vcm9vdFJlYWN0JztcblxuaW1wb3J0IHsgZ2V0VmlkZW9CeUlkLCBnZXRRdWl6QnlJZCB9IGZyb20gJy4uLy4uL2RhdGFiYXNlJztcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNzAwMDtcbmNvbnN0IHVybCA9IHByb2Nlc3MuZW52LlVSTCB8fCAnbG9jYWxob3N0JztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgbG9nZ2luZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBtb3JnYW4oJ3Nob3J0JykgOiBtb3JnYW4oJ2RldicpO1xuXG5hcHAudXNlKGxvZ2dpbmcpO1xuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZygnaGl0IHJvb3QgZ2V0Jyk7XG4gIGNvbnN0IHJlYWN0U3RyID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoUmVhY3RDb21wb25lbnRzKTtcbiAgY29uc3Qgc3NyID0gaW5kZXhUZW1wbGF0ZShyZWFjdFN0cik7XG4gIHJlcy5zZW5kKHNzcik7XG59KTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuXG5hcHAudXNlKGxvZ2dpbmcpO1xuYXBwLmdldCgnL3ZpZGVvcy86dmlkZW9JZCcsIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHZpZGVvSWQgfSA9IHJlcS5wYXJhbXM7XG4gIGdldFZpZGVvQnlJZCh2aWRlb0lkKVxuICAgIC50aGVuKHZpZGVvID0+IHJlcy5zZW5kKHZpZGVvKSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignZ2V0VmlkZW9CeUlkIGVycm9yOicsIGVycik7XG4gICAgICByZXMuc2VuZFN0YXR1cyg0MDQpO1xuICAgIH0pO1xufSk7XG5cbmFwcC5nZXQoJy9xdWl6emVzLzpxdWl6SWQnLCAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBxdWl6SWQgfSA9IHJlcS5wYXJhbXM7XG4gIGdldFF1aXpCeUlkKHF1aXpJZClcbiAgICAudGhlbihxdWl6ID0+IHJlcy5zZW5kKHF1aXopKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdnZXRRdWl6QnlOYW1lIGVycm9yOicsIGVycik7XG4gICAgICByZXMuc2VuZCg0MDQpO1xuICAgIH0pO1xufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciBvbiAke3VybH0gdXNpbmcgcG9ydCAke3BvcnR9YCkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/index.js\n");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar favIconUri = 'https://s3-us-west-1.amazonaws.com/chet-holmes-institute/red-gear.png';\n\nvar indexHTMLTemplate = function indexHTMLTemplate(reactStr) {\n  return \"\\n  <!DOCTYPE html>\\n  <html>\\n\\n    <head>\\n      <meta charset=\\\"UTF-8\\\">\\n      <title>Chet Holmes Institute</title>\\n      <link rel=\\\"icon\\\" type=\\\"image/png\\\" href=\\\"\".concat(favIconUri, \"\\\">\\n      <!-- <link href=\\\"CSS FILEPATH/NAME HERE\\\" rel=\\\"stylesheet\\\" type=\\\"text/css\\\"/> -->\\n    </head>\\n\\n    <body>\\n      <div id=\\\"app\\\">\").concat(reactStr, \"</div>\\n    </body>\\n    <script src=\\\"/lib/react.development.js\\\"></script>\\n    <script src=\\\"/lib/react-dom.development.js\\\"></script>\\n    <script src=\\\"./bundle.js\\\"></script>\\n  </html>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexHTMLTemplate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL2luZGV4VGVtcGxhdGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4VGVtcGxhdGUuanM/ZmQ1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmYXZJY29uVXJpID0gJ2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vY2hldC1ob2xtZXMtaW5zdGl0dXRlL3JlZC1nZWFyLnBuZyc7XG5cbmNvbnN0IGluZGV4SFRNTFRlbXBsYXRlID0gcmVhY3RTdHIgPT4gYFxuICA8IURPQ1RZUEUgaHRtbD5cbiAgPGh0bWw+XG5cbiAgICA8aGVhZD5cbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgICAgPHRpdGxlPkNoZXQgSG9sbWVzIEluc3RpdHV0ZTwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIke2Zhdkljb25Vcml9XCI+XG4gICAgICA8IS0tIDxsaW5rIGhyZWY9XCJDU1MgRklMRVBBVEgvTkFNRSBIRVJFXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiLz4gLS0+XG4gICAgPC9oZWFkPlxuXG4gICAgPGJvZHk+XG4gICAgICA8ZGl2IGlkPVwiYXBwXCI+JHtyZWFjdFN0cn08L2Rpdj5cbiAgICA8L2JvZHk+XG4gICAgPHNjcmlwdCBzcmM9XCIvbGliL3JlYWN0LmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvbGliL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiLi9idW5kbGUuanNcIj48L3NjcmlwdD5cbiAgPC9odG1sPmA7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4SFRNTFRlbXBsYXRlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWtCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/indexTemplate.js\n");

/***/ }),

/***/ "./src/server/rootReact.jsx":
/*!**********************************!*\
  !*** ./src/server/rootReact.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_containers_VideoContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/containers/VideoContainer */ \"./src/client/containers/VideoContainer.jsx\");\n/* harmony import */ var _client_containers_QuizContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/containers/QuizContainer */ \"./src/client/containers/QuizContainer.jsx\");\n/* harmony import */ var _client_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/store */ \"./src/client/store/index.js\");\n\n\n\n\n\n\nvar theme = {\n  font: 'Arial, Helvetica, sans-serif'\n};\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_containers_VideoContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_containers_QuizContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n};\n\nvar ReactComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n  store: _client_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n  theme: theme\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactComponents);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL3Jvb3RSZWFjdC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3Jvb3RSZWFjdC5qc3g/ZmI2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFZpZGVvQ29udGFpbmVyIGZyb20gJy4uL2NsaWVudC9jb250YWluZXJzL1ZpZGVvQ29udGFpbmVyJztcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL2NsaWVudC9jb250YWluZXJzL1F1aXpDb250YWluZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2NsaWVudC9zdG9yZSc7XG5cbmNvbnN0IHRoZW1lID0ge1xuICBmb250OiAnQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZicsXG59O1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPFZpZGVvQ29udGFpbmVyIC8+XG4gICAgPFF1aXpDb250YWluZXIgLz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBSZWFjdENvbXBvbmVudHMgPSAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8QXBwIC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RDb21wb25lbnRzO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/server/rootReact.jsx\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNvbW9ycGhpYy1mZXRjaC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIj83M2E4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///isomorphic-fetch\n");

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

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcC10eXBlcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIj8zODMyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-player\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtcGxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGxheWVyXCI/MTg1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wbGF5ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-player\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgtbG9nZ2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCI/MWMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux-logger\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });