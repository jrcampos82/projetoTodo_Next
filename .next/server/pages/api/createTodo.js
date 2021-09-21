"use strict";
(() => {
var exports = {};
exports.id = "pages/api/createTodo";
exports.ids = ["pages/api/createTodo"];
exports.modules = {

/***/ "./src/pages/api/createTodo.ts":
/*!*************************************!*\
  !*** ./src/pages/api/createTodo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    const data = req.body;
    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
    const newTodo = await prisma.todo.create({
      data: {
        task: data.task,
        status: false
      }
    });
    res.status(200).json(_objectSpread({}, newTodo));
  } catch (err) {
    res.status(500).json(err);
  }
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/createTodo.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZVRvZG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsaUVBQWUsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsTUFBSTtBQUNGLFVBQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFqQjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxJQUFJTCx3REFBSixFQUFmO0FBRUEsVUFBTU0sT0FBTyxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFaLENBQW1CO0FBQ3ZDTCxNQUFBQSxJQUFJLEVBQUU7QUFBRU0sUUFBQUEsSUFBSSxFQUFFTixJQUFJLENBQUNNLElBQWI7QUFBbUJDLFFBQUFBLE1BQU0sRUFBRTtBQUEzQjtBQURpQyxLQUFuQixDQUF0QjtBQUlBUixJQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixtQkFBMEJMLE9BQTFCO0FBQ0QsR0FWRCxDQVVFLE9BQU9NLEdBQVAsRUFBWTtBQUNaVixJQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkMsR0FBckI7QUFDRDtBQUNGLENBZEQ7Ozs7Ozs7Ozs7QUNIQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8tbmV4dC10b2RvLy4vc3JjL3BhZ2VzL2FwaS9jcmVhdGVUb2RvLnRzIiwid2VicGFjazovL3Byb2pldG8tbmV4dC10b2RvL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVzcG9uc2UsIE5leHRBcGlSZXF1ZXN0IH0gZnJvbSAnbmV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHlcclxuXHJcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuXHJcbiAgICBjb25zdCBuZXdUb2RvID0gYXdhaXQgcHJpc21hLnRvZG8uY3JlYXRlKHtcclxuICAgICAgZGF0YTogeyB0YXNrOiBkYXRhLnRhc2ssIHN0YXR1czogZmFsc2UgfSxcclxuICAgIH0pXHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi5uZXdUb2RvIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJkYXRhIiwiYm9keSIsInByaXNtYSIsIm5ld1RvZG8iLCJ0b2RvIiwiY3JlYXRlIiwidGFzayIsInN0YXR1cyIsImpzb24iLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9