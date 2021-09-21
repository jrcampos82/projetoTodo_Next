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
};
// export default function Home(props) {
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

  const handleCreateTodo = async () => {
    const currentTodos = [...todos]; // const newTodo = {
    //   task: inputTodo,
    //   createdAt: new Date(),
    //   status: false,
    // }

    const {
      data: newTodo
    } = await _utils_api__WEBPACK_IMPORTED_MODULE_1__.default.post("/createTodo", {
      task: inputTodo
    });
    currentTodos.push(newTodo);
    setInputTodo("");
    setTodos(currentTodos);
  };

  const handleUpdateTodo = async id => {
    const updateTodos = todos.map(todo => todo.id === id ? _objectSpread(_objectSpread({}, todo), {}, {
      status: !todo.status
    }) : todo);
    setTodos(updateTodos);
    const currentTodo = updateTodos.find(todo => todo.id === id);
    await _utils_api__WEBPACK_IMPORTED_MODULE_1__.default.post("/updateTodos", {
      id,
      status: currentTodo.status
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "flex flex-col items-center h-screen bg-yellow-50",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      className: "text-4xl font-bold text-gray-800 mb-14",
      children: "Projeto TODO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      className: "mb-10 text-2xl font-medium text-gray-700",
      children: "Criar to-do"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        onChange: hanbleInputChange,
        value: inputTodo,
        className: "border-2 border-blue-400 rounded-md outline-none focus:border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: handleCreateTodo,
        className: "px-4 mx-2 mt-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-800",
        children: "Criar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      className: "mt-6",
      children: todos.map(todo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        onClick: () => handleUpdateTodo(todo.id),
        className: "px-3 py-1 bg-white border-2 border-blue-400 rounded-lg cursor-pointer hover:bg-blue-300",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: `${todo.status && "line-through"}`,
          children: todo.task
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 12
        }, this)
      }, todo.id || todo.task, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 10
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVdFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFDRWQsS0FBSyxDQUFDdUIsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBQUksZUFBTyxFQUFFLE1BQUtKLGdCQUFnQixDQUFDSSxJQUFJLENBQUNILEVBQU4sQ0FBbEM7QUFBd0UsaUJBQVMsRUFBQyx5RkFBbEY7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUcsR0FBRUcsSUFBSSxDQUFDQyxNQUFMLElBQWUsY0FBZSxFQUEvQztBQUFBLG9CQUFtREQsSUFBSSxDQUFDTjtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBa0RNLElBQUksQ0FBQ0gsRUFBTCxJQUFXRyxJQUFJLENBQUNOLElBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRDtBQUVBLE1BQU10QixHQUFHLEdBQUdnQyxtREFBQSxDQUFhO0FBQUNFLEVBQUFBLE9BQU8sRUFBRTtBQUFWLENBQWIsQ0FBWjtBQUVBLGlFQUFlbEMsR0FBZjs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8tbmV4dC10b2RvLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wcm9qZXRvLW5leHQtdG9kby8uL3V0aWxzL2FwaS50cyIsIndlYnBhY2s6Ly9wcm9qZXRvLW5leHQtdG9kby9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vcHJvamV0by1uZXh0LXRvZG8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Byb2pldG8tbmV4dC10b2RvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblxuICAvLyBjb25zdCB0b2RvcyA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIikgZmF6ZXIgYXNzaW0gcHJpbWVpcm9cbiAgY29uc3Qge2RhdGE6IHRvZG9zfSA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIilcbiAgLy8gY29uc29sZS5sb2codG9kb3MpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsuLi50b2Rvc31cbiAgfSAgICAgXG59XG5cbmludGVyZmFjZSBUb2RvIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRhc2s6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBzdGF0dXM6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQYWdlUHJvcHMge1xuICB0b2RvczogVG9kb1tdO1xufSBcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3RvZG9zOiBzZXJ2ZXJUb2Rvc306IFBhZ2VQcm9wcykgeyAgXG5cbiAgY29uc29sZS5sb2coc2VydmVyVG9kb3MpXG5cbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvW10+KHNlcnZlclRvZG9zKVxuICBjb25zdCBbaW5wdXRUb2RvLCBzZXRJbnB1dFRvZG9dID0gdXNlU3RhdGUoXCJcIilcblxuXG4gIGNvbnN0IGhhbmJsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dFRvZG8oZS50YXJnZXQudmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDcmVhdGVUb2RvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IFsuLi50b2Rvc11cbiAgICAvLyBjb25zdCBuZXdUb2RvID0ge1xuICAgIC8vICAgdGFzazogaW5wdXRUb2RvLFxuICAgIC8vICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgIC8vICAgc3RhdHVzOiBmYWxzZSxcbiAgICAvLyB9XG4gICAgY29uc3Qge2RhdGE6IG5ld1RvZG8gfSA9IGF3YWl0IGFwaS5wb3N0KFwiL2NyZWF0ZVRvZG9cIiwge3Rhc2s6IGlucHV0VG9kb30pXG4gICAgY3VycmVudFRvZG9zLnB1c2gobmV3VG9kbylcbiAgICBzZXRJbnB1dFRvZG8oXCJcIilcbiAgICBzZXRUb2RvcyhjdXJyZW50VG9kb3MpXG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVRvZG8gPSBhc3luYyAoaWQ6IHN0cmluZyk9PiB7XG4gICAgY29uc3QgdXBkYXRlVG9kb3MgPSB0b2Rvcy5tYXAodG9kbyA9PiB0b2RvLmlkID09PSBpZCA/IHsuLi50b2RvLCBzdGF0dXM6ICF0b2RvLnN0YXR1c30gOiB0b2RvKVxuICAgIHNldFRvZG9zKHVwZGF0ZVRvZG9zKVxuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gdXBkYXRlVG9kb3MuZmluZCgodG9kbyk9PiB0b2RvLmlkID09PSBpZCk7XG4gICAgYXdhaXQgYXBpLnBvc3QoXCIvdXBkYXRlVG9kb3NcIiwge2lkLCBzdGF0dXM6IGN1cnJlbnRUb2RvLnN0YXR1c30pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gYmcteWVsbG93LTUwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMTRcIj5Qcm9qZXRvIFRPRE88L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5DcmlhciB0by1kbzwvaDI+XG5cbiAgICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuYmxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dFRvZG99IGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNTAwXCIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlVG9kb30gY2xhc3NOYW1lPVwicHgtNCBteC0yIG10LTMgdGV4dC1sZyB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS04MDBcIj5DcmlhcjwvYnV0dG9uPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT4gaGFuZGxlVXBkYXRlVG9kbyh0b2RvLmlkKX0ga2V5PXt0b2RvLmlkIHx8IHRvZG8udGFza30gY2xhc3NOYW1lPVwicHgtMyBweS0xIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWJsdWUtMzAwXCI+XG4gICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7dG9kby5zdGF0dXMgJiYgXCJsaW5lLXRocm91Z2hcIn1gfT57dG9kby50YXNrfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImFwaSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJkYXRhIiwidG9kb3MiLCJnZXQiLCJwcm9wcyIsIkhvbWUiLCJzZXJ2ZXJUb2RvcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUb2RvcyIsImlucHV0VG9kbyIsInNldElucHV0VG9kbyIsImhhbmJsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ3JlYXRlVG9kbyIsImN1cnJlbnRUb2RvcyIsIm5ld1RvZG8iLCJwb3N0IiwidGFzayIsInB1c2giLCJoYW5kbGVVcGRhdGVUb2RvIiwiaWQiLCJ1cGRhdGVUb2RvcyIsIm1hcCIsInRvZG8iLCJzdGF0dXMiLCJjdXJyZW50VG9kbyIsImZpbmQiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9