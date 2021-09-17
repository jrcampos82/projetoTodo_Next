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

  console.log(props);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTUxMjg3YjZmMTJiOTg5YjkwZGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQWFlLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUVsQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBRUEsa0JBQTBCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBa0NOLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9PLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBR0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxDQUFELEVBQU87QUFDL0JGLElBQUFBLFlBQVksQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWixDQUQrQixDQUUvQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQU1DLFlBQVksR0FBRyxvS0FBSVQsS0FBUCxDQUFsQjs7QUFDQVMsSUFBQUEsWUFBWSxDQUFDQyxJQUFiLENBQWtCUixTQUFsQjtBQUNBRCxJQUFBQSxRQUFRLENBQUNRLFlBQUQsQ0FBUjtBQUVELEdBTEQ7O0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0RBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSSxlQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUlFO0FBQUEsOEJBQ0E7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFTCxpQkFBN0I7QUFBZ0QsaUJBQVMsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFRLGVBQU8sRUFBRUksZ0JBQWpCO0FBQW1DLGlCQUFTLEVBQUMsNEVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFXRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsZ0JBQ0VSLEtBQUssQ0FBQ1csR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUFlLG1CQUFTLEVBQUMseUZBQXpCO0FBQUEsb0JBQW9IQTtBQUFwSCxXQUFTQSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztHQXZDdUJoQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi91dGlscy9hcGlcIlxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXG4gIC8vIGNvbnN0IHRvZG9zID0gYXdhaXQgYXBpLmdldChcIi9nZXRUb2Rvc1wiKSBmYXplciBhc3NpbSBwcmltZWlyb1xuICBjb25zdCB7ZGF0YTogdG9kb3N9ID0gYXdhaXQgYXBpLmdldChcIi9nZXRUb2Rvc1wiKVxuICAvLyBjb25zb2xlLmxvZyh0b2RvcylcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogey4uLnRvZG9zfVxuICB9ICAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuXG4gIGNvbnNvbGUubG9nKHByb3BzKVxuXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpbnB1dFRvZG8sIHNldElucHV0VG9kb10gPSB1c2VTdGF0ZShcIlwiKVxuXG5cbiAgY29uc3QgaGFuYmxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldElucHV0VG9kbyhlLnRhcmdldC52YWx1ZSlcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZVRvZG8gPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRvZG9zID0gWy4uLnRvZG9zXVxuICAgIGN1cnJlbnRUb2Rvcy5wdXNoKGlucHV0VG9kbylcbiAgICBzZXRUb2RvcyhjdXJyZW50VG9kb3MpXG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBiZy15ZWxsb3ctNTBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNFwiPlByb2pldG8gVE9ETzwvaDE+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItMTAgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPkNyaWFyIHRvLWRvPC9oMj5cblxuICAgICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5ibGVJbnB1dENoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbWQgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmVlbi01MDBcIiAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVUb2RvfSBjbGFzc05hbWU9XCJweC00IG14LTIgbXQtMyB0ZXh0LWxnIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTgwMFwiPkNyaWFyPC9idXR0b24+XG5cblxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICA8bGkga2V5PXt0b2RvfSBjbGFzc05hbWU9XCJweC0zIHB5LTEgYmctd2hpdGUgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctYmx1ZS0zMDBcIj57dG9kb308L2xpPlxuICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRvZG9zIiwic2V0VG9kb3MiLCJpbnB1dFRvZG8iLCJzZXRJbnB1dFRvZG8iLCJoYW5ibGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNyZWF0ZVRvZG8iLCJjdXJyZW50VG9kb3MiLCJwdXNoIiwibWFwIiwidG9kbyJdLCJzb3VyY2VSb290IjoiIn0=