"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Post = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log(router.query.title);\n    var currentPost = _profile__WEBPACK_IMPORTED_MODULE_2__.posts.filter(function(post) {\n        return post.title === router.query.title;\n    })[0];\n    console.log(currentPost);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: currentPost.title,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: currentPost.imageURL,\n                    className: \"img-fluid\",\n                    style: {\n                        width: \"50%\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\portafolio-next\\\\pages\\\\post.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: currentPost.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\portafolio-next\\\\pages\\\\post.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\portafolio-next\\\\pages\\\\post.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\portafolio-next\\\\pages\\\\post.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUNQO0FBQ0s7OztBQUN2QyxHQUFLLENBQUNHLElBQUksR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDbEIsR0FBSyxDQUFDQyxNQUFNLEdBQUdGLHNEQUFTO0lBQ3hCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDRyxLQUFLLENBQUNDLEtBQUs7SUFDOUIsR0FBSyxDQUFDQyxXQUFXLEdBQUdSLGtEQUFZLENBQzlCLFFBQVEsQ0FBUFUsSUFBSTtRQUFLQSxNQUFNLENBQU5BLElBQUksQ0FBQ0gsS0FBSyxLQUFLSixNQUFNLENBQUNHLEtBQUssQ0FBQ0MsS0FBSztPQUMzQyxDQUFDO0lBQ0hILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxXQUFXO0lBQ3ZCLE1BQU0sNkVBQ0hULDBEQUFNO1FBQUNZLE1BQU0sRUFBRSxLQUFLO1FBQUVKLEtBQUssRUFBRUMsV0FBVyxDQUFDRCxLQUFLOzhGQUM1Q0ssQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBYTs7NEZBQ3pCQyxDQUFHO29CQUNGQyxHQUFHLEVBQUVQLFdBQVcsQ0FBQ1EsUUFBUTtvQkFDekJILFNBQVMsRUFBQyxDQUFXO29CQUNyQkksS0FBSyxFQUFFLENBQUM7d0JBQUNDLEtBQUssRUFBRSxDQUFLO29CQUFDLENBQUM7Ozs7Ozs0RkFFeEJDLENBQUM7OEJBQUVYLFdBQVcsQ0FBQ1ksT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0IsQ0FBQztHQW5CS2xCLElBQUk7O1FBQ09ELGtEQUFTOzs7S0FEcEJDLElBQUk7QUFvQlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0LmpzPzI1NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgcG9zdHMgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkudGl0bGUpO1xyXG4gIGNvbnN0IGN1cnJlbnRQb3N0ID0gcG9zdHMuZmlsdGVyKFxyXG4gICAgKHBvc3QpID0+IHBvc3QudGl0bGUgPT09IHJvdXRlci5xdWVyeS50aXRsZVxyXG4gIClbMF07XHJcbiAgY29uc29sZS5sb2coY3VycmVudFBvc3QpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9IHRpdGxlPXtjdXJyZW50UG9zdC50aXRsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2N1cnJlbnRQb3N0LmltYWdlVVJMfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cD57Y3VycmVudFBvc3QuY29udGVudH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsInBvc3RzIiwidXNlUm91dGVyIiwiUG9zdCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInRpdGxlIiwiY3VycmVudFBvc3QiLCJmaWx0ZXIiLCJwb3N0IiwiZm9vdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VVUkwiLCJzdHlsZSIsIndpZHRoIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ })

});