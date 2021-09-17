"use strict";
(() => {
var exports = {};
exports.id = "pages/api/rotas";
exports.ids = ["pages/api/rotas"];
exports.modules = {

/***/ "./src/pages/api/rotas.js":
/*!********************************!*\
  !*** ./src/pages/api/rotas.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

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
    res.status(200).json({
      newTodo
    });
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/rotas.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3JvdGFzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxNQUFJO0FBQ0YsVUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQWpCO0FBRUEsVUFBTUMsTUFBTSxHQUFHLElBQUlMLHdEQUFKLEVBQWY7QUFFQSxVQUFNTSxPQUFPLEdBQUcsTUFBTUQsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQVosQ0FBbUI7QUFDdkNMLE1BQUFBLElBQUksRUFBRTtBQUFFTSxRQUFBQSxJQUFJLEVBQUVOLElBQUksQ0FBQ00sSUFBYjtBQUFtQkMsUUFBQUEsTUFBTSxFQUFFO0FBQTNCO0FBRGlDLEtBQW5CLENBQXRCO0FBSUFSLElBQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLE1BQUFBO0FBQUYsS0FBckI7QUFDRCxHQVZELENBVUUsT0FBT00sR0FBUCxFQUFZO0FBQ1pWLElBQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCQyxHQUFyQjtBQUNEO0FBQ0YsQ0FkRDs7Ozs7Ozs7OztBQ0ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0by1uZXh0LXRvZG8vLi9zcmMvcGFnZXMvYXBpL3JvdGFzLmpzIiwid2VicGFjazovL3Byb2pldG8tbmV4dC10b2RvL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHlcclxuXHJcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuXHJcbiAgICBjb25zdCBuZXdUb2RvID0gYXdhaXQgcHJpc21hLnRvZG8uY3JlYXRlKHtcclxuICAgICAgZGF0YTogeyB0YXNrOiBkYXRhLnRhc2ssIHN0YXR1czogZmFsc2UgfSxcclxuICAgIH0pXHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuZXdUb2RvIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJkYXRhIiwiYm9keSIsInByaXNtYSIsIm5ld1RvZG8iLCJ0b2RvIiwiY3JlYXRlIiwidGFzayIsInN0YXR1cyIsImpzb24iLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9