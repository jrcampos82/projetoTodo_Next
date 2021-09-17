"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getTodos";
exports.ids = ["pages/api/getTodos"];
exports.modules = {

/***/ "./src/pages/api/getTodos.ts":
/*!***********************************!*\
  !*** ./src/pages/api/getTodos.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
    const todos = await prisma.todo.findMany();
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/getTodos.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldFRvZG9zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLGlFQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsSUFBSUgsd0RBQUosRUFBZjtBQUVBLFVBQU1JLEtBQUssR0FBRyxNQUFNRCxNQUFNLENBQUNFLElBQVAsQ0FBWUMsUUFBWixFQUFwQjtBQUVBSixJQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFSixNQUFBQTtBQUFGLEtBQXJCO0FBQ0QsR0FORCxDQU1FLE9BQU9LLEdBQVAsRUFBVztBQUNYUCxJQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkMsR0FBckI7QUFDRDtBQUNGLENBVkQ7Ozs7Ozs7Ozs7QUNIQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8tbmV4dC10b2RvLy4vc3JjL3BhZ2VzL2FwaS9nZXRUb2Rvcy50cyIsIndlYnBhY2s6Ly9wcm9qZXRvLW5leHQtdG9kby9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlc3BvbnNlLCBOZXh0QXBpUmVxdWVzdCB9IGZyb20gJ25leHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgcHJpc21hLnRvZG8uZmluZE1hbnkoKVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdG9kb3MgfSlcclxuICB9IGNhdGNoIChlcnIpe1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJ0b2RvcyIsInRvZG8iLCJmaW5kTWFueSIsInN0YXR1cyIsImpzb24iLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9