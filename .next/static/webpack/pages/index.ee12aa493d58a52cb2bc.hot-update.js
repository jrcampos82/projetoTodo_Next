"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Beto\\vscode-workspace\\projeto-next-todo\\src\\pages\\index.tsx",
    _s = $RefreshSig$();



// export default function Home(props) {
var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var serverTodos = _ref.todos;
  console.log(serverTodos);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(serverTodos),
      todos = _useState[0],
      setTodos = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      inputTodo = _useState2[0],
      setInputTodo = _useState2[1];

  var hanbleInputChange = function hanbleInputChange(e) {
    setInputTodo(e.target.value); // console.log(e.target.value)
  };

  var handleCreateTodo = function handleCreateTodo() {
    var currentTodos = (0,C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(todos);

    var newTodo = {
      task: inputTodo,
      createdAt: new Date(),
      status: false
    };
    currentTodos.push(newTodo);
    setTodos(currentTodos);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "flex flex-col items-center h-screen bg-yellow-50",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      className: "text-4xl font-bold text-gray-800 mb-14",
      children: "Projeto TODO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      className: "mb-10 text-2xl font-medium text-gray-700",
      children: "Criar to-do"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        onChange: hanbleInputChange,
        className: "border-2 border-blue-400 rounded-md outline-none focus:border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: handleCreateTodo,
        className: "px-4 mx-2 mt-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-800",
        children: "Criar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      className: "mt-6",
      children: todos.map(function (todo) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          className: "px-3 py-1 bg-white border-2 border-blue-400 rounded-lg cursor-pointer hover:bg-blue-300",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: todo.status && "line-through",
            children: todo.task
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 12
          }, _this)
        }, todo.id || todo.task, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 10
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(Home, "lYRZrkQPnnMdngrl3Ok9LwLrVNk=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWUxMmFhNDkzZDU4YTUyY2IyYmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBdUJBOztBQUNlLFNBQVNDLElBQVQsT0FBb0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFkQyxXQUFjLFFBQXJCQyxLQUFxQjtBQUVqREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFdBQVo7O0FBRUEsa0JBQTBCRiwrQ0FBUSxDQUFTRSxXQUFULENBQWxDO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNHLFFBQWQ7O0FBQ0EsbUJBQWtDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPTyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUdBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQy9CRixJQUFBQSxZQUFZLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVosQ0FEK0IsQ0FFL0I7QUFDRCxHQUhEOztBQUtBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixRQUFNQyxZQUFZLEdBQUcsb0tBQUlYLEtBQVAsQ0FBbEI7O0FBQ0EsUUFBTVksT0FBTyxHQUFHO0FBQ2RDLE1BQUFBLElBQUksRUFBRVQsU0FEUTtBQUVkVSxNQUFBQSxTQUFTLEVBQUUsSUFBSUMsSUFBSixFQUZHO0FBR2RDLE1BQUFBLE1BQU0sRUFBRTtBQUhNLEtBQWhCO0FBS0FMLElBQUFBLFlBQVksQ0FBQ00sSUFBYixDQUFrQkwsT0FBbEI7QUFDQVQsSUFBQUEsUUFBUSxDQUFDUSxZQUFELENBQVI7QUFFRCxHQVZEOztBQVlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtEQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsd0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUksZUFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFJRTtBQUFBLDhCQUNBO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRUwsaUJBQTdCO0FBQWdELGlCQUFTLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBUSxlQUFPLEVBQUVJLGdCQUFqQjtBQUFtQyxpQkFBUyxFQUFDLDRFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBV0U7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLGdCQUNFVixLQUFLLENBQUNrQixHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNUO0FBQStCLG1CQUFTLEVBQUMseUZBQXpDO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFFQSxJQUFJLENBQUNILE1BQUwsSUFBZSxjQUE3QjtBQUFBLHNCQUE4Q0csSUFBSSxDQUFDTjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBU00sSUFBSSxDQUFDQyxFQUFMLElBQVdELElBQUksQ0FBQ04sSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBOUN1QmY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblxuICAvLyBjb25zdCB0b2RvcyA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIikgZmF6ZXIgYXNzaW0gcHJpbWVpcm9cbiAgY29uc3Qge2RhdGE6IHRvZG9zfSA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIilcbiAgLy8gY29uc29sZS5sb2codG9kb3MpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsuLi50b2Rvc31cbiAgfSAgICAgXG59XG5cbmludGVyZmFjZSBUb2RvIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRhc2s6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBzdGF0dXM6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQYWdlUHJvcHMge1xuICB0b2RvczogVG9kb1tdO1xufSBcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3RvZG9zOiBzZXJ2ZXJUb2Rvc30pIHsgIFxuXG4gIGNvbnNvbGUubG9nKHNlcnZlclRvZG9zKVxuXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1tdPihzZXJ2ZXJUb2RvcylcbiAgY29uc3QgW2lucHV0VG9kbywgc2V0SW5wdXRUb2RvXSA9IHVzZVN0YXRlKFwiXCIpXG5cblxuICBjb25zdCBoYW5ibGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXRUb2RvKGUudGFyZ2V0LnZhbHVlKVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VG9kb3MgPSBbLi4udG9kb3NdXG4gICAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICAgIHRhc2s6IGlucHV0VG9kbyxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgfVxuICAgIGN1cnJlbnRUb2Rvcy5wdXNoKG5ld1RvZG8pXG4gICAgc2V0VG9kb3MoY3VycmVudFRvZG9zKVxuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gYmcteWVsbG93LTUwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMTRcIj5Qcm9qZXRvIFRPRE88L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5DcmlhciB0by1kbzwvaDI+XG5cbiAgICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuYmxlSW5wdXRDaGFuZ2V9IGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNTAwXCIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlVG9kb30gY2xhc3NOYW1lPVwicHgtNCBteC0yIG10LTMgdGV4dC1sZyB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS04MDBcIj5DcmlhcjwvYnV0dG9uPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgPGxpIGtleT17dG9kby5pZCB8fCB0b2RvLnRhc2t9IGNsYXNzTmFtZT1cInB4LTMgcHktMSBiZy13aGl0ZSBib3JkZXItMiBib3JkZXItYmx1ZS00MDAgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibHVlLTMwMFwiPlxuICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RvZG8uc3RhdHVzICYmIFwibGluZS10aHJvdWdoXCJ9Pnt0b2RvLnRhc2t9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwic2VydmVyVG9kb3MiLCJ0b2RvcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUb2RvcyIsImlucHV0VG9kbyIsInNldElucHV0VG9kbyIsImhhbmJsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ3JlYXRlVG9kbyIsImN1cnJlbnRUb2RvcyIsIm5ld1RvZG8iLCJ0YXNrIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInN0YXR1cyIsInB1c2giLCJtYXAiLCJ0b2RvIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9