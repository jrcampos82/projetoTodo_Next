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
      children: todos.map(function (todo) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
          className: "px-3 py-1 bg-white border-2 border-blue-400 rounded-lg cursor-pointer hover:bg-blue-300",
          children: todo
        }, todo, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 10
        }, _this);
      })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTY3YjY1MThmMmZhMzZhNjI4ZTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBYUE7O0FBQ2UsU0FBU0MsSUFBVCxPQUFvQztBQUFBOztBQUFBOztBQUFBLE1BQWRDLFdBQWMsUUFBckJDLEtBQXFCO0FBRWpEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjs7QUFFQSxrQkFBMEJGLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9HLEtBQVA7QUFBQSxNQUFjRyxRQUFkOztBQUNBLG1CQUFrQ04sK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT08sU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFHQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBTztBQUMvQkYsSUFBQUEsWUFBWSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaLENBRCtCLENBRS9CO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsUUFBTUMsWUFBWSxHQUFHLG9LQUFJWCxLQUFQLENBQWxCOztBQUNBVyxJQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JSLFNBQWxCO0FBQ0FELElBQUFBLFFBQVEsQ0FBQ1EsWUFBRCxDQUFSO0FBRUQsR0FMRDs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrREFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFJLGVBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUU7QUFBQSw4QkFDQTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUVMLGlCQUE3QjtBQUFnRCxpQkFBUyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQVEsZUFBTyxFQUFFSSxnQkFBakI7QUFBbUMsaUJBQVMsRUFBQyw0RUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVdFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFDRVYsS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNUO0FBQWUsbUJBQVMsRUFBQyx5RkFBekI7QUFBQSxvQkFBb0hBO0FBQXBILFdBQVNBLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBdkN1QmhCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cbiAgLy8gY29uc3QgdG9kb3MgPSBhd2FpdCBhcGkuZ2V0KFwiL2dldFRvZG9zXCIpIGZhemVyIGFzc2ltIHByaW1laXJvXG4gIGNvbnN0IHtkYXRhOiB0b2Rvc30gPSBhd2FpdCBhcGkuZ2V0KFwiL2dldFRvZG9zXCIpXG4gIC8vIGNvbnNvbGUubG9nKHRvZG9zKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7Li4udG9kb3N9XG4gIH0gICAgIFxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHt0b2Rvczogc2VydmVyVG9kb3N9KSB7ICBcblxuICBjb25zb2xlLmxvZyhzZXJ2ZXJUb2RvcylcblxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaW5wdXRUb2RvLCBzZXRJbnB1dFRvZG9dID0gdXNlU3RhdGUoXCJcIilcblxuXG4gIGNvbnN0IGhhbmJsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dFRvZG8oZS50YXJnZXQudmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDcmVhdGVUb2RvID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IFsuLi50b2Rvc11cbiAgICBjdXJyZW50VG9kb3MucHVzaChpbnB1dFRvZG8pXG4gICAgc2V0VG9kb3MoY3VycmVudFRvZG9zKVxuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gYmcteWVsbG93LTUwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMTRcIj5Qcm9qZXRvIFRPRE88L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5DcmlhciB0by1kbzwvaDI+XG5cbiAgICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuYmxlSW5wdXRDaGFuZ2V9IGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNTAwXCIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlVG9kb30gY2xhc3NOYW1lPVwicHgtNCBteC0yIG10LTMgdGV4dC1sZyB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS04MDBcIj5DcmlhcjwvYnV0dG9uPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgPGxpIGtleT17dG9kb30gY2xhc3NOYW1lPVwicHgtMyBweS0xIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWJsdWUtMzAwXCI+e3RvZG99PC9saT5cbiAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJzZXJ2ZXJUb2RvcyIsInRvZG9zIiwiY29uc29sZSIsImxvZyIsInNldFRvZG9zIiwiaW5wdXRUb2RvIiwic2V0SW5wdXRUb2RvIiwiaGFuYmxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDcmVhdGVUb2RvIiwiY3VycmVudFRvZG9zIiwicHVzaCIsIm1hcCIsInRvZG8iXSwic291cmNlUm9vdCI6IiJ9