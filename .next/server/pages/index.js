"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Beto\\vscode-workspace\\projeto-next-todo\\src\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const getServerSideProps = async context => {
  // const todos = await api.get("/getTodos") fazer assim primeiro
  const {
    data: todos
  } = await _utils_api__WEBPACK_IMPORTED_MODULE_1__.default.get("/getTodos"); // console.log(todos)

  return {
    props: _objectSpread({}, todos)
  };
}; // export default function Home(props) {

function Home({
  todos: serverTodos
}) {
  console.log(serverTodos);
  const {
    0: todos,
    1: setTodos
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(serverTodos);
  const {
    0: inputTodo,
    1: setInputTodo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const hanbleInputChange = e => {
    setInputTodo(e.target.value); // console.log(e.target.value)
  };

  const handleCreateTodo = () => {
    const currentTodos = [...todos];
    currentTodos.push(inputTodo);
    setTodos(currentTodos);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "flex flex-col items-center h-screen bg-yellow-50",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      className: "text-4xl font-bold text-gray-800 mb-14",
      children: "Projeto TODO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      className: "mb-10 text-2xl font-medium text-gray-700",
      children: "Criar to-do"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        onChange: hanbleInputChange,
        className: "border-2 border-blue-400 rounded-md outline-none focus:border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: handleCreateTodo,
        className: "px-4 mx-2 mt-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-800",
        children: "Criar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      className: "mt-6",
      children: todos.map(todo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        className: "px-3 py-1 bg-white border-2 border-blue-400 rounded-lg cursor-pointer hover:bg-blue-300",
        children: todo.task
      }, todo.id, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 10
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/api.ts":
/*!**********************!*\
  !*** ./utils/api.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:3000/api"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRU8sTUFBTUUsa0JBQXNDLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUV2RTtBQUNBLFFBQU07QUFBQ0MsSUFBQUEsSUFBSSxFQUFFQztBQUFQLE1BQWdCLE1BQU1KLG1EQUFBLENBQVEsV0FBUixDQUE1QixDQUh1RSxDQUl2RTs7QUFDQSxTQUFPO0FBQ0xNLElBQUFBLEtBQUssb0JBQU1GLEtBQU47QUFEQSxHQUFQO0FBR0QsQ0FSTSxFQVVQOztBQUNlLFNBQVNHLElBQVQsQ0FBYztBQUFDSCxFQUFBQSxLQUFLLEVBQUVJO0FBQVIsQ0FBZCxFQUFvQztBQUVqREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFFQSxRQUFNO0FBQUEsT0FBQ0osS0FBRDtBQUFBLE9BQVFPO0FBQVIsTUFBb0JaLCtDQUFRLENBQUNTLFdBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ksU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJkLCtDQUFRLENBQUMsRUFBRCxDQUExQzs7QUFHQSxRQUFNZSxpQkFBaUIsR0FBSUMsQ0FBRCxJQUFPO0FBQy9CRixJQUFBQSxZQUFZLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVosQ0FEK0IsQ0FFL0I7QUFDRCxHQUhEOztBQUtBLFFBQU1DLGdCQUFnQixHQUFHLE1BQU07QUFDN0IsVUFBTUMsWUFBWSxHQUFHLENBQUMsR0FBR2YsS0FBSixDQUFyQjtBQUNBZSxJQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JSLFNBQWxCO0FBQ0FELElBQUFBLFFBQVEsQ0FBQ1EsWUFBRCxDQUFSO0FBRUQsR0FMRDs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrREFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFJLGVBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUU7QUFBQSw4QkFDQTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUVMLGlCQUE3QjtBQUFnRCxpQkFBUyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQVEsZUFBTyxFQUFFSSxnQkFBakI7QUFBbUMsaUJBQVMsRUFBQyw0RUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVdFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFDRWQsS0FBSyxDQUFDaUIsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBQWtCLGlCQUFTLEVBQUMseUZBQTVCO0FBQUEsa0JBQXVIQSxJQUFJLENBQUNDO0FBQTVILFNBQVNELElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REQ7QUFFQSxNQUFNeEIsR0FBRyxHQUFHeUIsbURBQUEsQ0FBYTtBQUFDRSxFQUFBQSxPQUFPLEVBQUU7QUFBVixDQUFiLENBQVo7QUFFQSxpRUFBZTNCLEdBQWY7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLW5leHQtdG9kby8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcHJvamV0by1uZXh0LXRvZG8vLi91dGlscy9hcGkudHMiLCJ3ZWJwYWNrOi8vcHJvamV0by1uZXh0LXRvZG8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3Byb2pldG8tbmV4dC10b2RvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wcm9qZXRvLW5leHQtdG9kby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cbiAgLy8gY29uc3QgdG9kb3MgPSBhd2FpdCBhcGkuZ2V0KFwiL2dldFRvZG9zXCIpIGZhemVyIGFzc2ltIHByaW1laXJvXG4gIGNvbnN0IHtkYXRhOiB0b2Rvc30gPSBhd2FpdCBhcGkuZ2V0KFwiL2dldFRvZG9zXCIpXG4gIC8vIGNvbnNvbGUubG9nKHRvZG9zKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7Li4udG9kb3N9XG4gIH0gICAgIFxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHt0b2Rvczogc2VydmVyVG9kb3N9KSB7ICBcblxuICBjb25zb2xlLmxvZyhzZXJ2ZXJUb2RvcylcblxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKHNlcnZlclRvZG9zKVxuICBjb25zdCBbaW5wdXRUb2RvLCBzZXRJbnB1dFRvZG9dID0gdXNlU3RhdGUoXCJcIilcblxuXG4gIGNvbnN0IGhhbmJsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dFRvZG8oZS50YXJnZXQudmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDcmVhdGVUb2RvID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IFsuLi50b2Rvc11cbiAgICBjdXJyZW50VG9kb3MucHVzaChpbnB1dFRvZG8pXG4gICAgc2V0VG9kb3MoY3VycmVudFRvZG9zKVxuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gYmcteWVsbG93LTUwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMTRcIj5Qcm9qZXRvIFRPRE88L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5DcmlhciB0by1kbzwvaDI+XG5cbiAgICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuYmxlSW5wdXRDaGFuZ2V9IGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNTAwXCIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlVG9kb30gY2xhc3NOYW1lPVwicHgtNCBteC0yIG10LTMgdGV4dC1sZyB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS04MDBcIj5DcmlhcjwvYnV0dG9uPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgPGxpIGtleT17dG9kby5pZH0gY2xhc3NOYW1lPVwicHgtMyBweS0xIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWJsdWUtMzAwXCI+e3RvZG8udGFza308L2xpPlxuICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImFwaSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJkYXRhIiwidG9kb3MiLCJnZXQiLCJwcm9wcyIsIkhvbWUiLCJzZXJ2ZXJUb2RvcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUb2RvcyIsImlucHV0VG9kbyIsInNldElucHV0VG9kbyIsImhhbmJsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ3JlYXRlVG9kbyIsImN1cnJlbnRUb2RvcyIsInB1c2giLCJtYXAiLCJ0b2RvIiwidGFzayIsImlkIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==