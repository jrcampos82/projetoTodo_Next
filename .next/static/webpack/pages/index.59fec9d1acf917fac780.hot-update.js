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
/* harmony import */ var C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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

  var handleCreateTodo = function handleCreateTodo() {
    var currentTodos = (0,C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(todos);

    var newTodo = {
      task: inputTodo,
      createdAt: new Date(),
      status: false
    };
    currentTodos.push(newTodo);
    setTodos(currentTodos);
  };

  var handleUpdateTodo = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(id) {
      var updateTodos, currentTodo;
      return C_Users_Beto_vscode_workspace_projeto_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              updateTodos = todos.map(function (todo) {
                return todo.id === id ? _objectSpread(_objectSpread({}, todo), {}, {
                  status: !todo.status
                }) : todo;
              });
              currentTodo = updateTodos.find(function (todo) {
                return todo.id === id;
              });
              _context.next = 4;
              return _utils_api__WEBPACK_IMPORTED_MODULE_5__.default.post("/updateTodos", {
                id: id,
                status: currentTodo.status
              });

            case 4:
              setTodos(updateTodos);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleUpdateTodo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "flex flex-col items-center h-screen bg-yellow-50",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      className: "text-4xl font-bold text-gray-800 mb-14",
      children: "Projeto TODO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
      className: "mb-10 text-2xl font-medium text-gray-700",
      children: "Criar to-do"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        type: "text",
        onChange: hanbleInputChange,
        className: "border-2 border-blue-400 rounded-md outline-none focus:border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        onClick: handleCreateTodo,
        className: "px-4 mx-2 mt-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-800",
        children: "Criar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
            className: todo.status && "line-through",
            children: todo.task
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 12
          }, _this)
        }, todo.id || todo.task, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 10
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTlmZWM5ZDFhY2Y5MTdmYWM3ODAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBc0JBOztBQUNlLFNBQVNFLElBQVQsT0FBK0M7QUFBQTs7QUFBQTs7QUFBQSxNQUF6QkMsV0FBeUIsUUFBaENDLEtBQWdDO0FBRTVEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjs7QUFFQSxrQkFBMEJILCtDQUFRLENBQVNHLFdBQVQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0csUUFBZDs7QUFDQSxtQkFBa0NQLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9RLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBR0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxDQUFELEVBQU87QUFDL0JGLElBQUFBLFlBQVksQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWixDQUQrQixDQUUvQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQU1DLFlBQVksR0FBRyxvS0FBSVgsS0FBUCxDQUFsQjs7QUFDQSxRQUFNWSxPQUFPLEdBQUc7QUFDZEMsTUFBQUEsSUFBSSxFQUFFVCxTQURRO0FBRWRVLE1BQUFBLFNBQVMsRUFBRSxJQUFJQyxJQUFKLEVBRkc7QUFHZEMsTUFBQUEsTUFBTSxFQUFFO0FBSE0sS0FBaEI7QUFLQUwsSUFBQUEsWUFBWSxDQUFDTSxJQUFiLENBQWtCTCxPQUFsQjtBQUNBVCxJQUFBQSxRQUFRLENBQUNRLFlBQUQsQ0FBUjtBQUVELEdBVkQ7O0FBWUEsTUFBTU8sZ0JBQWdCO0FBQUEsc1ZBQUcsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxjQUFBQSxXQURpQixHQUNIcEIsS0FBSyxDQUFDcUIsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSx1QkFBSUEsSUFBSSxDQUFDSCxFQUFMLEtBQVlBLEVBQVosbUNBQXFCRyxJQUFyQjtBQUEyQk4sa0JBQUFBLE1BQU0sRUFBRSxDQUFDTSxJQUFJLENBQUNOO0FBQXpDLHFCQUFtRE0sSUFBdkQ7QUFBQSxlQUFkLENBREc7QUFFakJDLGNBQUFBLFdBRmlCLEdBRUhILFdBQVcsQ0FBQ0ksSUFBWixDQUFpQixVQUFDRixJQUFEO0FBQUEsdUJBQVNBLElBQUksQ0FBQ0gsRUFBTCxLQUFZQSxFQUFyQjtBQUFBLGVBQWpCLENBRkc7QUFBQTtBQUFBLHFCQUdqQnRCLG9EQUFBLENBQVMsY0FBVCxFQUF5QjtBQUFDc0IsZ0JBQUFBLEVBQUUsRUFBRkEsRUFBRDtBQUFLSCxnQkFBQUEsTUFBTSxFQUFFTyxXQUFXLENBQUNQO0FBQXpCLGVBQXpCLENBSGlCOztBQUFBO0FBSXZCYixjQUFBQSxRQUFRLENBQUNpQixXQUFELENBQVI7O0FBSnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0RBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSSxlQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUlFO0FBQUEsOEJBQ0E7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFWixpQkFBN0I7QUFBZ0QsaUJBQVMsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFRLGVBQU8sRUFBRUksZ0JBQWpCO0FBQW1DLGlCQUFTLEVBQUMsNEVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFXRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsZ0JBQ0VWLEtBQUssQ0FBQ3FCLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1Q7QUFBSSxpQkFBTyxFQUFFO0FBQUEsbUJBQUtKLGdCQUFnQixDQUFDSSxJQUFJLENBQUNILEVBQU4sQ0FBckI7QUFBQSxXQUFiO0FBQXdFLG1CQUFTLEVBQUMseUZBQWxGO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFFRyxJQUFJLENBQUNOLE1BQUwsa0JBQWQ7QUFBQSxzQkFBOENNLElBQUksQ0FBQ1Q7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQWtEUyxJQUFJLENBQUNILEVBQUwsSUFBV0csSUFBSSxDQUFDVCxJQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0FyRHVCZjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi91dGlscy9hcGlcIlxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXG4gIC8vIGNvbnN0IHRvZG9zID0gYXdhaXQgYXBpLmdldChcIi9nZXRUb2Rvc1wiKSBmYXplciBhc3NpbSBwcmltZWlyb1xuICBjb25zdCB7ZGF0YTogdG9kb3N9ID0gYXdhaXQgYXBpLmdldChcIi9nZXRUb2Rvc1wiKVxuICAvLyBjb25zb2xlLmxvZyh0b2RvcylcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogey4uLnRvZG9zfVxuICB9ICAgICBcbn1cblxuaW50ZXJmYWNlIFRvZG8ge1xuICBpZD86IHN0cmluZztcbiAgdGFzazogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHN0YXR1czogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XG4gIHRvZG9zOiBUb2RvW107XG59IFxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7dG9kb3M6IHNlcnZlclRvZG9zfTogUGFnZVByb3BzKSB7ICBcblxuICBjb25zb2xlLmxvZyhzZXJ2ZXJUb2RvcylcblxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9bXT4oc2VydmVyVG9kb3MpXG4gIGNvbnN0IFtpbnB1dFRvZG8sIHNldElucHV0VG9kb10gPSB1c2VTdGF0ZShcIlwiKVxuXG5cbiAgY29uc3QgaGFuYmxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldElucHV0VG9kbyhlLnRhcmdldC52YWx1ZSlcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZVRvZG8gPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRvZG9zID0gWy4uLnRvZG9zXVxuICAgIGNvbnN0IG5ld1RvZG8gPSB7XG4gICAgICB0YXNrOiBpbnB1dFRvZG8sXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICBzdGF0dXM6IGZhbHNlLFxuICAgIH1cbiAgICBjdXJyZW50VG9kb3MucHVzaChuZXdUb2RvKVxuICAgIHNldFRvZG9zKGN1cnJlbnRUb2RvcylcblxuICB9XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlVG9kbyA9IGFzeW5jIChpZDogc3RyaW5nKT0+IHtcbiAgICBjb25zdCB1cGRhdGVUb2RvcyA9IHRvZG9zLm1hcCh0b2RvID0+IHRvZG8uaWQgPT09IGlkID8gey4uLnRvZG8sIHN0YXR1czogIXRvZG8uc3RhdHVzfSA6IHRvZG8pXG4gICAgY29uc3QgY3VycmVudFRvZG8gPSB1cGRhdGVUb2Rvcy5maW5kKCh0b2RvKT0+IHRvZG8uaWQgPT09IGlkKTtcbiAgICBhd2FpdCBhcGkucG9zdChcIi91cGRhdGVUb2Rvc1wiLCB7aWQsIHN0YXR1czogY3VycmVudFRvZG8uc3RhdHVzfSlcbiAgICBzZXRUb2Rvcyh1cGRhdGVUb2RvcylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBiZy15ZWxsb3ctNTBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi0xNFwiPlByb2pldG8gVE9ETzwvaDE+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItMTAgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPkNyaWFyIHRvLWRvPC9oMj5cblxuICAgICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5ibGVJbnB1dENoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbWQgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmVlbi01MDBcIiAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVUb2RvfSBjbGFzc05hbWU9XCJweC00IG14LTIgbXQtMyB0ZXh0LWxnIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTgwMFwiPkNyaWFyPC9idXR0b24+XG5cblxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICA8bGkgb25DbGljaz17KCk9PiBoYW5kbGVVcGRhdGVUb2RvKHRvZG8uaWQpfSBrZXk9e3RvZG8uaWQgfHwgdG9kby50YXNrfSBjbGFzc05hbWU9XCJweC0zIHB5LTEgYmctd2hpdGUgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctYmx1ZS0zMDBcIj5cbiAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0b2RvLnN0YXR1cyAmJiBgbGluZS10aHJvdWdoYH0+e3RvZG8udGFza308L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImFwaSIsIkhvbWUiLCJzZXJ2ZXJUb2RvcyIsInRvZG9zIiwiY29uc29sZSIsImxvZyIsInNldFRvZG9zIiwiaW5wdXRUb2RvIiwic2V0SW5wdXRUb2RvIiwiaGFuYmxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDcmVhdGVUb2RvIiwiY3VycmVudFRvZG9zIiwibmV3VG9kbyIsInRhc2siLCJjcmVhdGVkQXQiLCJEYXRlIiwic3RhdHVzIiwicHVzaCIsImhhbmRsZVVwZGF0ZVRvZG8iLCJpZCIsInVwZGF0ZVRvZG9zIiwibWFwIiwidG9kbyIsImN1cnJlbnRUb2RvIiwiZmluZCIsInBvc3QiXSwic291cmNlUm9vdCI6IiJ9