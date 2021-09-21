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
              setTodos(updateTodos);
              currentTodo = updateTodos.find(function (todo) {
                return todo.id === id;
              });
              _context.next = 5;
              return _utils_api__WEBPACK_IMPORTED_MODULE_5__.default.post("/updateTodos", {
                id: id,
                status: currentTodo.status
              });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDk5NDc3YTkyNTA4YTk3ODc5YTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBc0JBOztBQUNlLFNBQVNFLElBQVQsT0FBK0M7QUFBQTs7QUFBQTs7QUFBQSxNQUF6QkMsV0FBeUIsUUFBaENDLEtBQWdDO0FBRTVEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjs7QUFFQSxrQkFBMEJILCtDQUFRLENBQVNHLFdBQVQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0csUUFBZDs7QUFDQSxtQkFBa0NQLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9RLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBR0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxDQUFELEVBQU87QUFDL0JGLElBQUFBLFlBQVksQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWixDQUQrQixDQUUvQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQU1DLFlBQVksR0FBRyxvS0FBSVgsS0FBUCxDQUFsQjs7QUFDQSxRQUFNWSxPQUFPLEdBQUc7QUFDZEMsTUFBQUEsSUFBSSxFQUFFVCxTQURRO0FBRWRVLE1BQUFBLFNBQVMsRUFBRSxJQUFJQyxJQUFKLEVBRkc7QUFHZEMsTUFBQUEsTUFBTSxFQUFFO0FBSE0sS0FBaEI7QUFLQUwsSUFBQUEsWUFBWSxDQUFDTSxJQUFiLENBQWtCTCxPQUFsQjtBQUNBVCxJQUFBQSxRQUFRLENBQUNRLFlBQUQsQ0FBUjtBQUVELEdBVkQ7O0FBWUEsTUFBTU8sZ0JBQWdCO0FBQUEsc1ZBQUcsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxjQUFBQSxXQURpQixHQUNIcEIsS0FBSyxDQUFDcUIsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSx1QkFBSUEsSUFBSSxDQUFDSCxFQUFMLEtBQVlBLEVBQVosbUNBQXFCRyxJQUFyQjtBQUEyQk4sa0JBQUFBLE1BQU0sRUFBRSxDQUFDTSxJQUFJLENBQUNOO0FBQXpDLHFCQUFtRE0sSUFBdkQ7QUFBQSxlQUFkLENBREc7QUFFdkJuQixjQUFBQSxRQUFRLENBQUNpQixXQUFELENBQVI7QUFDTUcsY0FBQUEsV0FIaUIsR0FHSEgsV0FBVyxDQUFDSSxJQUFaLENBQWlCLFVBQUNGLElBQUQ7QUFBQSx1QkFBU0EsSUFBSSxDQUFDSCxFQUFMLEtBQVlBLEVBQXJCO0FBQUEsZUFBakIsQ0FIRztBQUFBO0FBQUEscUJBSWpCdEIsb0RBQUEsQ0FBUyxjQUFULEVBQXlCO0FBQUNzQixnQkFBQUEsRUFBRSxFQUFGQSxFQUFEO0FBQUtILGdCQUFBQSxNQUFNLEVBQUVPLFdBQVcsQ0FBQ1A7QUFBekIsZUFBekIsQ0FKaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJFLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrREFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFJLGVBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUU7QUFBQSw4QkFDQTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUVaLGlCQUE3QjtBQUFnRCxpQkFBUyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQVEsZUFBTyxFQUFFSSxnQkFBakI7QUFBbUMsaUJBQVMsRUFBQyw0RUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVdFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFDRVYsS0FBSyxDQUFDcUIsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUFJLGlCQUFPLEVBQUU7QUFBQSxtQkFBS0osZ0JBQWdCLENBQUNJLElBQUksQ0FBQ0gsRUFBTixDQUFyQjtBQUFBLFdBQWI7QUFBd0UsbUJBQVMsRUFBQyx5RkFBbEY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUVHLElBQUksQ0FBQ04sTUFBTCxrQkFBZDtBQUFBLHNCQUE4Q00sSUFBSSxDQUFDVDtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBa0RTLElBQUksQ0FBQ0gsRUFBTCxJQUFXRyxJQUFJLENBQUNULElBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQXJEdUJmOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cbiAgLy8gY29uc3QgdG9kb3MgPSBhd2FpdCBhcGkuZ2V0KFwiL2dldFRvZG9zXCIpIGZhemVyIGFzc2ltIHByaW1laXJvXG4gIGNvbnN0IHtkYXRhOiB0b2Rvc30gPSBhd2FpdCBhcGkuZ2V0KFwiL2dldFRvZG9zXCIpXG4gIC8vIGNvbnNvbGUubG9nKHRvZG9zKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7Li4udG9kb3N9XG4gIH0gICAgIFxufVxuXG5pbnRlcmZhY2UgVG9kbyB7XG4gIGlkPzogc3RyaW5nO1xuICB0YXNrOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgc3RhdHVzOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUGFnZVByb3BzIHtcbiAgdG9kb3M6IFRvZG9bXTtcbn0gXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHt0b2Rvczogc2VydmVyVG9kb3N9OiBQYWdlUHJvcHMpIHsgIFxuXG4gIGNvbnNvbGUubG9nKHNlcnZlclRvZG9zKVxuXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1tdPihzZXJ2ZXJUb2RvcylcbiAgY29uc3QgW2lucHV0VG9kbywgc2V0SW5wdXRUb2RvXSA9IHVzZVN0YXRlKFwiXCIpXG5cblxuICBjb25zdCBoYW5ibGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXRUb2RvKGUudGFyZ2V0LnZhbHVlKVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VG9kb3MgPSBbLi4udG9kb3NdXG4gICAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICAgIHRhc2s6IGlucHV0VG9kbyxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgfVxuICAgIGN1cnJlbnRUb2Rvcy5wdXNoKG5ld1RvZG8pXG4gICAgc2V0VG9kb3MoY3VycmVudFRvZG9zKVxuXG4gIH1cblxuICBjb25zdCBoYW5kbGVVcGRhdGVUb2RvID0gYXN5bmMgKGlkOiBzdHJpbmcpPT4ge1xuICAgIGNvbnN0IHVwZGF0ZVRvZG9zID0gdG9kb3MubWFwKHRvZG8gPT4gdG9kby5pZCA9PT0gaWQgPyB7Li4udG9kbywgc3RhdHVzOiAhdG9kby5zdGF0dXN9IDogdG9kbylcbiAgICBzZXRUb2Rvcyh1cGRhdGVUb2RvcylcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IHVwZGF0ZVRvZG9zLmZpbmQoKHRvZG8pPT4gdG9kby5pZCA9PT0gaWQpO1xuICAgIGF3YWl0IGFwaS5wb3N0KFwiL3VwZGF0ZVRvZG9zXCIsIHtpZCwgc3RhdHVzOiBjdXJyZW50VG9kby5zdGF0dXN9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGgtc2NyZWVuIGJnLXllbGxvdy01MFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTE0XCI+UHJvamV0byBUT0RPPC9oMT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0xMCB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+Q3JpYXIgdG8tZG88L2gyPlxuXG4gICAgICA8ZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmJsZUlucHV0Q2hhbmdlfSBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmx1ZS00MDAgcm91bmRlZC1tZCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyZWVuLTUwMFwiIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVRvZG99IGNsYXNzTmFtZT1cInB4LTQgbXgtMiBtdC0zIHRleHQtbGcgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtODAwXCI+Q3JpYXI8L2J1dHRvbj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+IGhhbmRsZVVwZGF0ZVRvZG8odG9kby5pZCl9IGtleT17dG9kby5pZCB8fCB0b2RvLnRhc2t9IGNsYXNzTmFtZT1cInB4LTMgcHktMSBiZy13aGl0ZSBib3JkZXItMiBib3JkZXItYmx1ZS00MDAgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibHVlLTMwMFwiPlxuICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RvZG8uc3RhdHVzICYmIGBsaW5lLXRocm91Z2hgfT57dG9kby50YXNrfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXBpIiwiSG9tZSIsInNlcnZlclRvZG9zIiwidG9kb3MiLCJjb25zb2xlIiwibG9nIiwic2V0VG9kb3MiLCJpbnB1dFRvZG8iLCJzZXRJbnB1dFRvZG8iLCJoYW5ibGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNyZWF0ZVRvZG8iLCJjdXJyZW50VG9kb3MiLCJuZXdUb2RvIiwidGFzayIsImNyZWF0ZWRBdCIsIkRhdGUiLCJzdGF0dXMiLCJwdXNoIiwiaGFuZGxlVXBkYXRlVG9kbyIsImlkIiwidXBkYXRlVG9kb3MiLCJtYXAiLCJ0b2RvIiwiY3VycmVudFRvZG8iLCJmaW5kIiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=