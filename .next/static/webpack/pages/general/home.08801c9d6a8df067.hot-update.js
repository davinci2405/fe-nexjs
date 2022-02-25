"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/general/home",{

/***/ "./src/Components/Hooks/useScrollTopPage.tsx":
/*!***************************************************!*\
  !*** ./src/Components/Hooks/useScrollTopPage.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\n/**\n * React hook that forces a scroll reset to a particular set of coordinates in the document\n * after `next/router` finishes transitioning to a new page client side. It smoothly scrolls back to\n * the top by default.\n *\n * @see https://github.com/vercel/next.js/issues/3249\n * @see https://github.com/vercel/next.js/issues/15206\n * @see https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions\n * @param {ScrollOptions} [options={}] Hook options.\n * @param {ScrollBehavior} [options.behavior='smooth'] Specifies whether the scrolling should animate smoothly,\n *  or happen instantly in a single jump.\n * @param {number} [options.left=0] Specifies the number of pixels along the X axis to scroll the window.\n * @param {number} [options.top=0] Specifies the number of pixels along the Y axis to scroll the window.\n */\n\nfunction useRouterScroll() {\n  _s();\n\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$behavior = _ref.behavior,\n      behavior = _ref$behavior === void 0 ? \"smooth\" : _ref$behavior,\n      _ref$left = _ref.left,\n      left = _ref$left === void 0 ? 0 : _ref$left,\n      _ref$top = _ref.top,\n      top = _ref$top === void 0 ? 0 : _ref$top;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // Scroll to given coordinates when router finishes navigating\n    // This fixes an inconsistent behaviour between `<Link/>` and `next/router`\n    // See https://github.com/vercel/next.js/issues/3249\n    var handleRouteChangeComplete = function handleRouteChangeComplete() {\n      var _window;\n\n      (_window = window) === null || _window === void 0 ? void 0 : _window.scrollTo({\n        top: top,\n        left: left,\n        behavior: \"auto\"\n      });\n    };\n\n    router.events.on(\"routeChangeComplete\", handleRouteChangeComplete); // If the component is unmounted, unsubscribe from the event\n\n    return function () {\n      router.events.off(\"routeChangeComplete\", handleRouteChangeComplete);\n    }; // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [behavior, left, top]);\n}\n\n_s(useRouterScroll, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRouterScroll);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Ib29rcy91c2VTY3JvbGxUb3BQYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0UsZUFBVCxHQUEwRTtBQUFBOztBQUFBLGlGQUFKLEVBQUk7QUFBQSwyQkFBL0NDLFFBQStDO0FBQUEsTUFBL0NBLFFBQStDLDhCQUFwQyxRQUFvQztBQUFBLHVCQUExQkMsSUFBMEI7QUFBQSxNQUExQkEsSUFBMEIsMEJBQW5CLENBQW1CO0FBQUEsc0JBQWhCQyxHQUFnQjtBQUFBLE1BQWhCQSxHQUFnQix5QkFBVixDQUFVOztBQUN4RSxNQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQXhCO0FBQ0FDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBLFFBQU1NLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsR0FBTTtBQUFBOztBQUN0QyxpQkFBQUMsTUFBTSxVQUFOLDBDQUFRQyxRQUFSLENBQWlCO0FBQUVKLFFBQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPRCxRQUFBQSxJQUFJLEVBQUpBLElBQVA7QUFBYUQsUUFBQUEsUUFBUSxFQUFFO0FBQXZCLE9BQWpCO0FBQ0QsS0FGRDs7QUFJQUcsSUFBQUEsTUFBTSxDQUFDSSxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDSix5QkFBeEMsRUFSYyxDQVVkOztBQUNBLFdBQU8sWUFBTTtBQUNYRCxNQUFBQSxNQUFNLENBQUNJLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNMLHlCQUF6QztBQUNELEtBRkQsQ0FYYyxDQWNkO0FBQ0QsR0FmUSxFQWVOLENBQUNKLFFBQUQsRUFBV0MsSUFBWCxFQUFpQkMsR0FBakIsQ0FmTSxDQUFUO0FBZ0JEOztHQWxCUUg7VUFDUUY7OztBQW1CakIsK0RBQWVFLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvSG9va3MvdXNlU2Nyb2xsVG9wUGFnZS50c3g/MjU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vKipcbiAqIFJlYWN0IGhvb2sgdGhhdCBmb3JjZXMgYSBzY3JvbGwgcmVzZXQgdG8gYSBwYXJ0aWN1bGFyIHNldCBvZiBjb29yZGluYXRlcyBpbiB0aGUgZG9jdW1lbnRcbiAqIGFmdGVyIGBuZXh0L3JvdXRlcmAgZmluaXNoZXMgdHJhbnNpdGlvbmluZyB0byBhIG5ldyBwYWdlIGNsaWVudCBzaWRlLiBJdCBzbW9vdGhseSBzY3JvbGxzIGJhY2sgdG9cbiAqIHRoZSB0b3AgYnkgZGVmYXVsdC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9pc3N1ZXMvMzI0OVxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvaXNzdWVzLzE1MjA2XG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TY3JvbGxUb09wdGlvbnNcbiAqIEBwYXJhbSB7U2Nyb2xsT3B0aW9uc30gW29wdGlvbnM9e31dIEhvb2sgb3B0aW9ucy5cbiAqIEBwYXJhbSB7U2Nyb2xsQmVoYXZpb3J9IFtvcHRpb25zLmJlaGF2aW9yPSdzbW9vdGgnXSBTcGVjaWZpZXMgd2hldGhlciB0aGUgc2Nyb2xsaW5nIHNob3VsZCBhbmltYXRlIHNtb290aGx5LFxuICogIG9yIGhhcHBlbiBpbnN0YW50bHkgaW4gYSBzaW5nbGUganVtcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5sZWZ0PTBdIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHBpeGVscyBhbG9uZyB0aGUgWCBheGlzIHRvIHNjcm9sbCB0aGUgd2luZG93LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRvcD0wXSBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiBwaXhlbHMgYWxvbmcgdGhlIFkgYXhpcyB0byBzY3JvbGwgdGhlIHdpbmRvdy5cbiAqL1xuZnVuY3Rpb24gdXNlUm91dGVyU2Nyb2xsKHsgYmVoYXZpb3IgPSBcInNtb290aFwiLCBsZWZ0ID0gMCwgdG9wID0gMCB9ID0ge30pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIGdpdmVuIGNvb3JkaW5hdGVzIHdoZW4gcm91dGVyIGZpbmlzaGVzIG5hdmlnYXRpbmdcbiAgICAvLyBUaGlzIGZpeGVzIGFuIGluY29uc2lzdGVudCBiZWhhdmlvdXIgYmV0d2VlbiBgPExpbmsvPmAgYW5kIGBuZXh0L3JvdXRlcmBcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2lzc3Vlcy8zMjQ5XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHdpbmRvdz8uc2Nyb2xsVG8oeyB0b3AsIGxlZnQsIGJlaGF2aW9yOiBcImF1dG9cIiB9KTtcbiAgICB9O1xuXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2VDb21wbGV0ZSk7XG5cbiAgICAvLyBJZiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCwgdW5zdWJzY3JpYmUgZnJvbSB0aGUgZXZlbnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlQ29tcGxldGUpO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbYmVoYXZpb3IsIGxlZnQsIHRvcF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSb3V0ZXJTY3JvbGw7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyU2Nyb2xsIiwiYmVoYXZpb3IiLCJsZWZ0IiwidG9wIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2VDb21wbGV0ZSIsIndpbmRvdyIsInNjcm9sbFRvIiwiZXZlbnRzIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Hooks/useScrollTopPage.tsx\n");

/***/ })

});