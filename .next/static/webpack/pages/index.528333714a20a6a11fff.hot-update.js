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
/* harmony import */ var C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Beto\\vscode-workspace\\projeto-next-todo\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





// export default function Home(props) {
var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var serverTodos = _ref.todos;
  console.log(serverTodos);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(serverTodos),
      todos = _useState[0],
      setTodos = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      inputTodo = _useState2[0],
      setInputTodo = _useState2[1];

  var hanbleInputChange = function hanbleInputChange(e) {
    setInputTodo(e.target.value); // console.log(e.target.value)
  };

  var handleCreateTodo = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var currentTodos, _yield$api$post, newTodo;

      return C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              currentTodos = (0,C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(todos); // const newTodo = {
              //   task: inputTodo,
              //   createdAt: new Date(),
              //   status: false,
              // }

              _context.next = 3;
              return _utils_api__WEBPACK_IMPORTED_MODULE_5__.default.post("/createTodo", newTodo);

            case 3:
              _yield$api$post = _context.sent;
              newTodo = _yield$api$post.data;
              currentTodos.push(newTodo);
              setTodos(currentTodos);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCreateTodo() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleUpdateTodo = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(id) {
      var updateTodos, currentTodo;
      return C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              updateTodos = todos.map(function (todo) {
                return todo.id === id ? _objectSpread(_objectSpread({}, todo), {}, {
                  status: !todo.status
                }) : todo;
              });
              setTodos(updateTodos);
              currentTodo = updateTodos.find(function (todo) {
                return todo.id === id;
              });
              _context2.next = 5;
              return _utils_api__WEBPACK_IMPORTED_MODULE_5__.default.post("/updateTodos", {
                id: id,
                status: currentTodo.status
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleUpdateTodo(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "flex flex-col items-center h-screen bg-yellow-50",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      className: "text-4xl font-bold text-gray-800 mb-14",
      children: "Projeto TODO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
      className: "mb-10 text-2xl font-medium text-gray-700",
      children: "Criar to-do"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        type: "text",
        onChange: hanbleInputChange,
        className: "border-2 border-blue-400 rounded-md outline-none focus:border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        onClick: handleCreateTodo,
        className: "px-4 mx-2 mt-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-800",
        children: "Criar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
      className: "mt-6",
      children: todos.map(function (todo) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
          onClick: function onClick() {
            return handleUpdateTodo(todo.id);
          },
          className: "px-3 py-1 bg-white border-2 border-blue-400 rounded-lg cursor-pointer hover:bg-blue-300",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            className: "".concat(todo.status && "line-through"),
            children: todo.task
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 12
          }, _this)
        }, todo.id || todo.task, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 10
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTI4MzMzNzE0YTIwYTZhMTFmZmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFzQkE7O0FBQ2UsU0FBU0UsSUFBVCxPQUErQztBQUFBOztBQUFBOztBQUFBLE1BQXpCQyxXQUF5QixRQUFoQ0MsS0FBZ0M7QUFFNURDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxXQUFaOztBQUVBLGtCQUEwQkgsK0NBQVEsQ0FBU0csV0FBVCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjRyxRQUFkOztBQUNBLG1CQUFrQ1AsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT1EsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFHQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBTztBQUMvQkYsSUFBQUEsWUFBWSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaLENBRCtCLENBRS9CO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0I7QUFBQSxzVkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxjQUFBQSxZQURpQix1S0FDRVgsS0FERixHQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU51QjtBQUFBLHFCQU9RSCxvREFBQSxDQUFTLGFBQVQsRUFBd0JnQixPQUF4QixDQVBSOztBQUFBO0FBQUE7QUFPVkEsY0FBQUEsT0FQVSxtQkFPaEJDLElBUGdCO0FBUXZCSCxjQUFBQSxZQUFZLENBQUNJLElBQWIsQ0FBa0JGLE9BQWxCO0FBQ0FWLGNBQUFBLFFBQVEsQ0FBQ1EsWUFBRCxDQUFSOztBQVR1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQkQsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQWFBLE1BQU1NLGdCQUFnQjtBQUFBLHNWQUFHLGtCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkMsY0FBQUEsV0FEaUIsR0FDSGxCLEtBQUssQ0FBQ21CLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsdUJBQUlBLElBQUksQ0FBQ0gsRUFBTCxLQUFZQSxFQUFaLG1DQUFxQkcsSUFBckI7QUFBMkJDLGtCQUFBQSxNQUFNLEVBQUUsQ0FBQ0QsSUFBSSxDQUFDQztBQUF6QyxxQkFBbURELElBQXZEO0FBQUEsZUFBZCxDQURHO0FBRXZCakIsY0FBQUEsUUFBUSxDQUFDZSxXQUFELENBQVI7QUFDTUksY0FBQUEsV0FIaUIsR0FHSEosV0FBVyxDQUFDSyxJQUFaLENBQWlCLFVBQUNILElBQUQ7QUFBQSx1QkFBU0EsSUFBSSxDQUFDSCxFQUFMLEtBQVlBLEVBQXJCO0FBQUEsZUFBakIsQ0FIRztBQUFBO0FBQUEscUJBSWpCcEIsb0RBQUEsQ0FBUyxjQUFULEVBQXlCO0FBQUNvQixnQkFBQUEsRUFBRSxFQUFGQSxFQUFEO0FBQUtJLGdCQUFBQSxNQUFNLEVBQUVDLFdBQVcsQ0FBQ0Q7QUFBekIsZUFBekIsQ0FKaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJMLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrREFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFJLGVBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUU7QUFBQSw4QkFDQTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUVWLGlCQUE3QjtBQUFnRCxpQkFBUyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQVEsZUFBTyxFQUFFSSxnQkFBakI7QUFBbUMsaUJBQVMsRUFBQyw0RUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVdFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFDRVYsS0FBSyxDQUFDbUIsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUFJLGlCQUFPLEVBQUU7QUFBQSxtQkFBS0osZ0JBQWdCLENBQUNJLElBQUksQ0FBQ0gsRUFBTixDQUFyQjtBQUFBLFdBQWI7QUFBd0UsbUJBQVMsRUFBQyx5RkFBbEY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLFlBQUtHLElBQUksQ0FBQ0MsTUFBTCxJQUFlLGNBQXBCLENBQVo7QUFBQSxzQkFBbURELElBQUksQ0FBQ0k7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQWtESixJQUFJLENBQUNILEVBQUwsSUFBV0csSUFBSSxDQUFDSSxJQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0F0RHVCMUI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblxuICAvLyBjb25zdCB0b2RvcyA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIikgZmF6ZXIgYXNzaW0gcHJpbWVpcm9cbiAgY29uc3Qge2RhdGE6IHRvZG9zfSA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIilcbiAgLy8gY29uc29sZS5sb2codG9kb3MpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsuLi50b2Rvc31cbiAgfSAgICAgXG59XG5cbmludGVyZmFjZSBUb2RvIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRhc2s6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBzdGF0dXM6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQYWdlUHJvcHMge1xuICB0b2RvczogVG9kb1tdO1xufSBcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3RvZG9zOiBzZXJ2ZXJUb2Rvc306IFBhZ2VQcm9wcykgeyAgXG5cbiAgY29uc29sZS5sb2coc2VydmVyVG9kb3MpXG5cbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvW10+KHNlcnZlclRvZG9zKVxuICBjb25zdCBbaW5wdXRUb2RvLCBzZXRJbnB1dFRvZG9dID0gdXNlU3RhdGUoXCJcIilcblxuXG4gIGNvbnN0IGhhbmJsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dFRvZG8oZS50YXJnZXQudmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDcmVhdGVUb2RvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IFsuLi50b2Rvc11cbiAgICAvLyBjb25zdCBuZXdUb2RvID0ge1xuICAgIC8vICAgdGFzazogaW5wdXRUb2RvLFxuICAgIC8vICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgIC8vICAgc3RhdHVzOiBmYWxzZSxcbiAgICAvLyB9XG4gICAgY29uc3Qge2RhdGE6IG5ld1RvZG8gfSA9IGF3YWl0IGFwaS5wb3N0KFwiL2NyZWF0ZVRvZG9cIiwgbmV3VG9kbylcbiAgICBjdXJyZW50VG9kb3MucHVzaChuZXdUb2RvKVxuICAgIHNldFRvZG9zKGN1cnJlbnRUb2RvcylcblxuICB9XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlVG9kbyA9IGFzeW5jIChpZDogc3RyaW5nKT0+IHtcbiAgICBjb25zdCB1cGRhdGVUb2RvcyA9IHRvZG9zLm1hcCh0b2RvID0+IHRvZG8uaWQgPT09IGlkID8gey4uLnRvZG8sIHN0YXR1czogIXRvZG8uc3RhdHVzfSA6IHRvZG8pXG4gICAgc2V0VG9kb3ModXBkYXRlVG9kb3MpXG4gICAgY29uc3QgY3VycmVudFRvZG8gPSB1cGRhdGVUb2Rvcy5maW5kKCh0b2RvKT0+IHRvZG8uaWQgPT09IGlkKTtcbiAgICBhd2FpdCBhcGkucG9zdChcIi91cGRhdGVUb2Rvc1wiLCB7aWQsIHN0YXR1czogY3VycmVudFRvZG8uc3RhdHVzfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBiZy15ZWxsb3ctNTBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNFwiPlByb2pldG8gVE9ETzwvaDE+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItMTAgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPkNyaWFyIHRvLWRvPC9oMj5cblxuICAgICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5ibGVJbnB1dENoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbWQgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmVlbi01MDBcIiAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVUb2RvfSBjbGFzc05hbWU9XCJweC00IG14LTIgbXQtMyB0ZXh0LWxnIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTgwMFwiPkNyaWFyPC9idXR0b24+XG5cblxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICA8bGkgb25DbGljaz17KCk9PiBoYW5kbGVVcGRhdGVUb2RvKHRvZG8uaWQpfSBrZXk9e3RvZG8uaWQgfHwgdG9kby50YXNrfSBjbGFzc05hbWU9XCJweC0zIHB5LTEgYmctd2hpdGUgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctYmx1ZS0zMDBcIj5cbiAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHt0b2RvLnN0YXR1cyAmJiBcImxpbmUtdGhyb3VnaFwifWB9Pnt0b2RvLnRhc2t9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhcGkiLCJIb21lIiwic2VydmVyVG9kb3MiLCJ0b2RvcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUb2RvcyIsImlucHV0VG9kbyIsInNldElucHV0VG9kbyIsImhhbmJsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ3JlYXRlVG9kbyIsImN1cnJlbnRUb2RvcyIsInBvc3QiLCJuZXdUb2RvIiwiZGF0YSIsInB1c2giLCJoYW5kbGVVcGRhdGVUb2RvIiwiaWQiLCJ1cGRhdGVUb2RvcyIsIm1hcCIsInRvZG8iLCJzdGF0dXMiLCJjdXJyZW50VG9kbyIsImZpbmQiLCJ0YXNrIl0sInNvdXJjZVJvb3QiOiIifQ==