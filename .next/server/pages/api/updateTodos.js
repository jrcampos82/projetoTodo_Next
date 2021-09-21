"use strict";
(() => {
var exports = {};
exports.id = "pages/api/updateTodos";
exports.ids = ["pages/api/updateTodos"];
exports.modules = {

/***/ "./src/pages/api/updateTodos.ts":
/*!**************************************!*\
  !*** ./src/pages/api/updateTodos.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    const {
      id,
      status
    } = req.body;
    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
    const todos = await prisma.todo.update({
      where: {
        id: id
      },
      data: {
        status: status
      }
    });
    res.status(200).json({
      todos
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/updateTodos.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3VwZGF0ZVRvZG9zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLGlFQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLE1BQUk7QUFFRixVQUFNO0FBQUVDLE1BQUFBLEVBQUY7QUFBTUMsTUFBQUE7QUFBTixRQUFpQkgsR0FBRyxDQUFDSSxJQUEzQjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxJQUFJTix3REFBSixFQUFmO0FBRUEsVUFBTU8sS0FBSyxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFaLENBQW1CO0FBQ25DQyxNQUFBQSxLQUFLLEVBQUU7QUFBQ1AsUUFBQUEsRUFBRSxFQUFFQTtBQUFMLE9BRDRCO0FBRW5DUSxNQUFBQSxJQUFJLEVBQUU7QUFBQ1AsUUFBQUEsTUFBTSxFQUFFQTtBQUFUO0FBRjZCLEtBQW5CLENBQXBCO0FBS0FGLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JRLElBQWhCLENBQXFCO0FBQUVMLE1BQUFBO0FBQUYsS0FBckI7QUFDRCxHQVpELENBWUUsT0FBT00sR0FBUCxFQUFXO0FBQ1hYLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JRLElBQWhCLENBQXFCQyxHQUFyQjtBQUNEO0FBQ0YsQ0FoQkQ7Ozs7Ozs7Ozs7QUNIQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8tbmV4dC10b2RvLy4vc3JjL3BhZ2VzL2FwaS91cGRhdGVUb2Rvcy50cyIsIndlYnBhY2s6Ly9wcm9qZXRvLW5leHQtdG9kby9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlc3BvbnNlLCBOZXh0QXBpUmVxdWVzdCB9IGZyb20gJ25leHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHsgaWQsIHN0YXR1cyB9ID0gcmVxLmJvZHlcclxuXHJcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgdG9kb3MgPSBhd2FpdCBwcmlzbWEudG9kby51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7aWQ6IGlkfSxcclxuICAgICAgICBkYXRhOiB7c3RhdHVzOiBzdGF0dXN9XHJcbiAgICB9KVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdG9kb3MgfSlcclxuICB9IGNhdGNoIChlcnIpe1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJpZCIsInN0YXR1cyIsImJvZHkiLCJwcmlzbWEiLCJ0b2RvcyIsInRvZG8iLCJ1cGRhdGUiLCJ3aGVyZSIsImRhdGEiLCJqc29uIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==