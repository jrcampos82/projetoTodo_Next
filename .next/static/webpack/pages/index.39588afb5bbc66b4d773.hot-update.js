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
              return _utils_api__WEBPACK_IMPORTED_MODULE_5__.default.post("/createTodo", {
                task: inputTodo
              });

            case 3:
              _yield$api$post = _context.sent;
              newTodo = _yield$api$post.data;
              currentTodos.push.apply(currentTodos, (0,C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newTodo));
              setInputTodo("");
              setTodos(currentTodos);

            case 8:
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
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
      className: "mb-10 text-2xl font-medium text-gray-700",
      children: "Criar to-do"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        type: "text",
        onChange: hanbleInputChange,
        className: "border-2 border-blue-400 rounded-md outline-none focus:border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
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
            lineNumber: 75,
            columnNumber: 12
          }, _this)
        }, todo.id || todo.task, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 10
        }, _this);
      })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzk1ODhhZmI1YmJjNjZiNGQ3NzMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFzQkE7O0FBQ2UsU0FBU0UsSUFBVCxPQUErQztBQUFBOztBQUFBOztBQUFBLE1BQXpCQyxXQUF5QixRQUFoQ0MsS0FBZ0M7QUFFNURDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxXQUFaOztBQUVBLGtCQUEwQkgsK0NBQVEsQ0FBU0csV0FBVCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjRyxRQUFkOztBQUNBLG1CQUFrQ1AsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT1EsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFHQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBTztBQUMvQkYsSUFBQUEsWUFBWSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaLENBRCtCLENBRS9CO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0I7QUFBQSxzVkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxjQUFBQSxZQURpQix1S0FDRVgsS0FERixHQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU51QjtBQUFBLHFCQU9RSCxvREFBQSxDQUFTLGFBQVQsRUFBd0I7QUFBQ2dCLGdCQUFBQSxJQUFJLEVBQUVUO0FBQVAsZUFBeEIsQ0FQUjs7QUFBQTtBQUFBO0FBT1ZVLGNBQUFBLE9BUFUsbUJBT2hCQyxJQVBnQjtBQVF2QkosY0FBQUEsWUFBWSxDQUFDSyxJQUFiLE9BQUFMLFlBQVksc0tBQVNHLE9BQVQsRUFBWjtBQUNBVCxjQUFBQSxZQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0FGLGNBQUFBLFFBQVEsQ0FBQ1EsWUFBRCxDQUFSOztBQVZ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQkQsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQWNBLE1BQU1PLGdCQUFnQjtBQUFBLHNWQUFHLGtCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkMsY0FBQUEsV0FEaUIsR0FDSG5CLEtBQUssQ0FBQ29CLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsdUJBQUlBLElBQUksQ0FBQ0gsRUFBTCxLQUFZQSxFQUFaLG1DQUFxQkcsSUFBckI7QUFBMkJDLGtCQUFBQSxNQUFNLEVBQUUsQ0FBQ0QsSUFBSSxDQUFDQztBQUF6QyxxQkFBbURELElBQXZEO0FBQUEsZUFBZCxDQURHO0FBRXZCbEIsY0FBQUEsUUFBUSxDQUFDZ0IsV0FBRCxDQUFSO0FBQ01JLGNBQUFBLFdBSGlCLEdBR0hKLFdBQVcsQ0FBQ0ssSUFBWixDQUFpQixVQUFDSCxJQUFEO0FBQUEsdUJBQVNBLElBQUksQ0FBQ0gsRUFBTCxLQUFZQSxFQUFyQjtBQUFBLGVBQWpCLENBSEc7QUFBQTtBQUFBLHFCQUlqQnJCLG9EQUFBLENBQVMsY0FBVCxFQUF5QjtBQUFDcUIsZ0JBQUFBLEVBQUUsRUFBRkEsRUFBRDtBQUFLSSxnQkFBQUEsTUFBTSxFQUFFQyxXQUFXLENBQUNEO0FBQXpCLGVBQXpCLENBSmlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCTCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0RBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSSxlQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUlFO0FBQUEsOEJBQ0E7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFWCxpQkFBN0I7QUFBZ0QsaUJBQVMsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFRLGVBQU8sRUFBRUksZ0JBQWpCO0FBQW1DLGlCQUFTLEVBQUMsNEVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFXRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsZ0JBQ0VWLEtBQUssQ0FBQ29CLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1Q7QUFBSSxpQkFBTyxFQUFFO0FBQUEsbUJBQUtKLGdCQUFnQixDQUFDSSxJQUFJLENBQUNILEVBQU4sQ0FBckI7QUFBQSxXQUFiO0FBQXdFLG1CQUFTLEVBQUMseUZBQWxGO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxZQUFLRyxJQUFJLENBQUNDLE1BQUwsSUFBZSxjQUFwQixDQUFaO0FBQUEsc0JBQW1ERCxJQUFJLENBQUNSO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFrRFEsSUFBSSxDQUFDSCxFQUFMLElBQVdHLElBQUksQ0FBQ1IsSUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBdkR1QmY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblxuICAvLyBjb25zdCB0b2RvcyA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIikgZmF6ZXIgYXNzaW0gcHJpbWVpcm9cbiAgY29uc3Qge2RhdGE6IHRvZG9zfSA9IGF3YWl0IGFwaS5nZXQoXCIvZ2V0VG9kb3NcIilcbiAgLy8gY29uc29sZS5sb2codG9kb3MpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsuLi50b2Rvc31cbiAgfSAgICAgXG59XG5cbmludGVyZmFjZSBUb2RvIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRhc2s6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBzdGF0dXM6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQYWdlUHJvcHMge1xuICB0b2RvczogVG9kb1tdO1xufSBcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3RvZG9zOiBzZXJ2ZXJUb2Rvc306IFBhZ2VQcm9wcykgeyAgXG5cbiAgY29uc29sZS5sb2coc2VydmVyVG9kb3MpXG5cbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvW10+KHNlcnZlclRvZG9zKVxuICBjb25zdCBbaW5wdXRUb2RvLCBzZXRJbnB1dFRvZG9dID0gdXNlU3RhdGUoXCJcIilcblxuXG4gIGNvbnN0IGhhbmJsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dFRvZG8oZS50YXJnZXQudmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDcmVhdGVUb2RvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IFsuLi50b2Rvc11cbiAgICAvLyBjb25zdCBuZXdUb2RvID0ge1xuICAgIC8vICAgdGFzazogaW5wdXRUb2RvLFxuICAgIC8vICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgIC8vICAgc3RhdHVzOiBmYWxzZSxcbiAgICAvLyB9XG4gICAgY29uc3Qge2RhdGE6IG5ld1RvZG8gfSA9IGF3YWl0IGFwaS5wb3N0KFwiL2NyZWF0ZVRvZG9cIiwge3Rhc2s6IGlucHV0VG9kb30pXG4gICAgY3VycmVudFRvZG9zLnB1c2goLi4ubmV3VG9kbylcbiAgICBzZXRJbnB1dFRvZG8oXCJcIilcbiAgICBzZXRUb2RvcyhjdXJyZW50VG9kb3MpXG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVRvZG8gPSBhc3luYyAoaWQ6IHN0cmluZyk9PiB7XG4gICAgY29uc3QgdXBkYXRlVG9kb3MgPSB0b2Rvcy5tYXAodG9kbyA9PiB0b2RvLmlkID09PSBpZCA/IHsuLi50b2RvLCBzdGF0dXM6ICF0b2RvLnN0YXR1c30gOiB0b2RvKVxuICAgIHNldFRvZG9zKHVwZGF0ZVRvZG9zKVxuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gdXBkYXRlVG9kb3MuZmluZCgodG9kbyk9PiB0b2RvLmlkID09PSBpZCk7XG4gICAgYXdhaXQgYXBpLnBvc3QoXCIvdXBkYXRlVG9kb3NcIiwge2lkLCBzdGF0dXM6IGN1cnJlbnRUb2RvLnN0YXR1c30pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gYmcteWVsbG93LTUwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMTRcIj5Qcm9qZXRvIFRPRE88L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5DcmlhciB0by1kbzwvaDI+XG5cbiAgICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuYmxlSW5wdXRDaGFuZ2V9IGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNTAwXCIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlVG9kb30gY2xhc3NOYW1lPVwicHgtNCBteC0yIG10LTMgdGV4dC1sZyB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS04MDBcIj5DcmlhcjwvYnV0dG9uPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT4gaGFuZGxlVXBkYXRlVG9kbyh0b2RvLmlkKX0ga2V5PXt0b2RvLmlkIHx8IHRvZG8udGFza30gY2xhc3NOYW1lPVwicHgtMyBweS0xIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWJsdWUtMzAwXCI+XG4gICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7dG9kby5zdGF0dXMgJiYgXCJsaW5lLXRocm91Z2hcIn1gfT57dG9kby50YXNrfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXBpIiwiSG9tZSIsInNlcnZlclRvZG9zIiwidG9kb3MiLCJjb25zb2xlIiwibG9nIiwic2V0VG9kb3MiLCJpbnB1dFRvZG8iLCJzZXRJbnB1dFRvZG8iLCJoYW5ibGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNyZWF0ZVRvZG8iLCJjdXJyZW50VG9kb3MiLCJwb3N0IiwidGFzayIsIm5ld1RvZG8iLCJkYXRhIiwicHVzaCIsImhhbmRsZVVwZGF0ZVRvZG8iLCJpZCIsInVwZGF0ZVRvZG9zIiwibWFwIiwidG9kbyIsInN0YXR1cyIsImN1cnJlbnRUb2RvIiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=