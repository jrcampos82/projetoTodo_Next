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



var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
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
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      className: "mb-10 text-2xl font-medium text-gray-700",
      children: "Criar to-do"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        onChange: hanbleInputChange,
        className: "border-2 border-blue-400 rounded-md outline-none focus:border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: handleCreateTodo,
        className: "px-4 mx-2 mt-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-800",
        children: "Criar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      className: "mt-6",
      children: todos.map(function (todo) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          className: "px-3 py-1 bg-white border-2 border-blue-400 rounded-lg cursor-pointer hover:bg-blue-300",
          children: todo
        }, todo, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 10
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(Home, "TpKNZe1+O6HU6u/Bp3UnLZasXvY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGQ1OWQ4Mzg2ZmRhMTVmNTNlMGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQWFlLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUlsQyxrQkFBMEJGLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9HLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFrQ0osK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT0ssU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFHQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBTztBQUMvQkYsSUFBQUEsWUFBWSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaLENBRCtCLENBRS9CO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsUUFBTUMsWUFBWSxHQUFHLG9LQUFJVCxLQUFQLENBQWxCOztBQUNBUyxJQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JSLFNBQWxCO0FBQ0FELElBQUFBLFFBQVEsQ0FBQ1EsWUFBRCxDQUFSO0FBRUQsR0FMRDs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrREFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFJLGVBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUU7QUFBQSw4QkFDQTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUVMLGlCQUE3QjtBQUFnRCxpQkFBUyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQVEsZUFBTyxFQUFFSSxnQkFBakI7QUFBbUMsaUJBQVMsRUFBQyw0RUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVdFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFDRVIsS0FBSyxDQUFDVyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNUO0FBQWUsbUJBQVMsRUFBQyx5RkFBekI7QUFBQSxvQkFBb0hBO0FBQXBILFdBQVNBLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBdkN1QmQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblxuICAvLyBjb25zdCB0b2RvcyA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIikgZmF6ZXIgYXNzaW0gcHJpbWVpcm9cbiAgY29uc3Qge2RhdGE6IHRvZG9zfSA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIilcbiAgLy8gY29uc29sZS5sb2codG9kb3MpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9XG4gIH0gICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5cbiAgXG5cbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lucHV0VG9kbywgc2V0SW5wdXRUb2RvXSA9IHVzZVN0YXRlKFwiXCIpXG5cblxuICBjb25zdCBoYW5ibGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXRUb2RvKGUudGFyZ2V0LnZhbHVlKVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VG9kb3MgPSBbLi4udG9kb3NdXG4gICAgY3VycmVudFRvZG9zLnB1c2goaW5wdXRUb2RvKVxuICAgIHNldFRvZG9zKGN1cnJlbnRUb2RvcylcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGgtc2NyZWVuIGJnLXllbGxvdy01MFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTE0XCI+UHJvamV0byBUT0RPPC9oMT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0xMCB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+Q3JpYXIgdG8tZG88L2gyPlxuXG4gICAgICA8ZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmJsZUlucHV0Q2hhbmdlfSBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmx1ZS00MDAgcm91bmRlZC1tZCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyZWVuLTUwMFwiIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVRvZG99IGNsYXNzTmFtZT1cInB4LTQgbXgtMiBtdC0zIHRleHQtbGcgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtODAwXCI+Q3JpYXI8L2J1dHRvbj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgIDxsaSBrZXk9e3RvZG99IGNsYXNzTmFtZT1cInB4LTMgcHktMSBiZy13aGl0ZSBib3JkZXItMiBib3JkZXItYmx1ZS00MDAgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibHVlLTMwMFwiPnt0b2RvfTwvbGk+XG4gICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwicHJvcHMiLCJ0b2RvcyIsInNldFRvZG9zIiwiaW5wdXRUb2RvIiwic2V0SW5wdXRUb2RvIiwiaGFuYmxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDcmVhdGVUb2RvIiwiY3VycmVudFRvZG9zIiwicHVzaCIsIm1hcCIsInRvZG8iXSwic291cmNlUm9vdCI6IiJ9