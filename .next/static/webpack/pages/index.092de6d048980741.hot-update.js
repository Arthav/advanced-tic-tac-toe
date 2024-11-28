"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst TicTacToe = ()=>{\n    _s();\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(9).fill(null));\n    const [isXNext, setIsXNext] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const handleClick = (index)=>{\n        const newBoard = [\n            ...board\n        ];\n        if (calculateWinner(newBoard) || newBoard[index]) return;\n        newBoard[index] = isXNext ? 'X' : 'O';\n        setBoard(newBoard);\n        setIsXNext(!isXNext);\n    };\n    const calculateWinner = (squares)=>{\n        const lines = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ]\n        ];\n        for(let i = 0; i < lines.length; i++){\n            const [a, b, c] = lines[i];\n            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n                return squares[a];\n            }\n        }\n        return null;\n    };\n    const resetGame = ()=>{\n        setBoard(Array(9).fill(null));\n        setIsXNext(true);\n    };\n    const winner = calculateWinner(board);\n    const status = winner ? \"Winner: \".concat(winner) : \"Next player: \".concat(isXNext ? 'X' : 'O');\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-a96b434a1246ac83\" + \" \" + \"game\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-a96b434a1246ac83\" + \" \" + \"status\",\n                children: status\n            }, void 0, false, {\n                fileName: \"D:\\\\Learn\\\\windsurf cascade\\\\tic-tac-toe\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-a96b434a1246ac83\" + \" \" + \"board\",\n                children: board.map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleClick(index),\n                        className: \"jsx-a96b434a1246ac83\" + \" \" + \"square\",\n                        children: value\n                    }, index, false, {\n                        fileName: \"D:\\\\Learn\\\\windsurf cascade\\\\tic-tac-toe\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Learn\\\\windsurf cascade\\\\tic-tac-toe\\\\pages\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: resetGame,\n                className: \"jsx-a96b434a1246ac83\" + \" \" + \"reset-button\",\n                children: \"Reset Game\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Learn\\\\windsurf cascade\\\\tic-tac-toe\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"a96b434a1246ac83\",\n                children: \"@-webkit-keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}.game.jsx-a96b434a1246ac83{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100vh;background:-webkit-linear-gradient(right,#ff9a9e,#fad0c4,#fad0c4,#ff9a9e);background:-moz-linear-gradient(right,#ff9a9e,#fad0c4,#fad0c4,#ff9a9e);background:-o-linear-gradient(right,#ff9a9e,#fad0c4,#fad0c4,#ff9a9e);background:linear-gradient(270deg,#ff9a9e,#fad0c4,#fad0c4,#ff9a9e);-webkit-background-size:600%600%;-moz-background-size:600%600%;-o-background-size:600%600%;background-size:600%600%;-webkit-animation:gradient 10s ease infinite;-moz-animation:gradient 10s ease infinite;-o-animation:gradient 10s ease infinite;animation:gradient 10s ease infinite}.status.jsx-a96b434a1246ac83{margin-bottom:20px;font-size:24px;font-weight:bold;color:#333}.board.jsx-a96b434a1246ac83{display:grid;grid-template-columns:repeat(3,100px);grid-gap:10px}.square.jsx-a96b434a1246ac83{width:100px;height:100px;background-color:#fff;border:2px solid#000;font-size:36px;font-weight:bold;cursor:pointer;-webkit-transition:-webkit-transform.3s ease,background-color.3s ease;-moz-transition:-moz-transform.3s ease,background-color.3s ease;-o-transition:-o-transform.3s ease,background-color.3s ease;transition:-webkit-transform.3s ease,background-color.3s ease;transition:-moz-transform.3s ease,background-color.3s ease;transition:-o-transform.3s ease,background-color.3s ease;transition:transform.3s ease,background-color.3s ease}.square.jsx-a96b434a1246ac83:hover{background-color:#ffeb3b;-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.reset-button.jsx-a96b434a1246ac83{margin-top:20px;padding:10px 20px;font-size:16px;background-color:#0070f3;color:white;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;cursor:pointer;-webkit-transition:background-color.3s ease,-webkit-transform.3s ease;-moz-transition:background-color.3s ease,-moz-transform.3s ease;-o-transition:background-color.3s ease,-o-transform.3s ease;transition:background-color.3s ease,-webkit-transform.3s ease;transition:background-color.3s ease,-moz-transform.3s ease;transition:background-color.3s ease,-o-transform.3s ease;transition:background-color.3s ease,transform.3s ease}.reset-button.jsx-a96b434a1246ac83:hover{background-color:#005bb5;-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Learn\\\\windsurf cascade\\\\tic-tac-toe\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TicTacToe, \"YEYSqvL6fOShla2jZSP//3y9U3U=\");\n_c = TicTacToe;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicTacToe);\nvar _c;\n$RefreshReg$(_c, \"TicTacToe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBRWpDLE1BQU1DLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQ0ksTUFBTSxHQUFHQyxJQUFJLENBQUM7SUFDakQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLGNBQWMsQ0FBQ0M7UUFDbkIsTUFBTUMsV0FBVztlQUFJUjtTQUFNO1FBQzNCLElBQUlTLGdCQUFnQkQsYUFBYUEsUUFBUSxDQUFDRCxNQUFNLEVBQUU7UUFDbERDLFFBQVEsQ0FBQ0QsTUFBTSxHQUFHSCxVQUFVLE1BQU07UUFDbENILFNBQVNPO1FBQ1RILFdBQVcsQ0FBQ0Q7SUFDZDtJQUVBLE1BQU1LLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxRQUFRO1lBQ1o7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRTtZQUFFO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7WUFBRTtnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQy9CO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7WUFBRTtnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQUU7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRTtZQUMvQjtnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQUU7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRTtTQUNyQjtRQUNELElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRCxNQUFNRSxNQUFNLEVBQUVELElBQUs7WUFDckMsTUFBTSxDQUFDRSxHQUFHQyxHQUFHQyxFQUFFLEdBQUdMLEtBQUssQ0FBQ0MsRUFBRTtZQUMxQixJQUFJRixPQUFPLENBQUNJLEVBQUUsSUFBSUosT0FBTyxDQUFDSSxFQUFFLEtBQUtKLE9BQU8sQ0FBQ0ssRUFBRSxJQUFJTCxPQUFPLENBQUNJLEVBQUUsS0FBS0osT0FBTyxDQUFDTSxFQUFFLEVBQUU7Z0JBQ3hFLE9BQU9OLE9BQU8sQ0FBQ0ksRUFBRTtZQUNuQjtRQUNGO1FBQ0EsT0FBTztJQUNUO0lBRUEsTUFBTUcsWUFBWTtRQUNoQmhCLFNBQVNDLE1BQU0sR0FBR0MsSUFBSSxDQUFDO1FBQ3ZCRSxXQUFXO0lBQ2I7SUFFQSxNQUFNYSxTQUFTVCxnQkFBZ0JUO0lBQy9CLE1BQU1tQixTQUFTRCxTQUFTLFdBQWtCLE9BQVBBLFVBQVcsZ0JBQW9DLE9BQXBCZCxVQUFVLE1BQU07SUFFOUUscUJBQ0UsOERBQUNnQjtrREFBYzs7MEJBQ2IsOERBQUNBOzBEQUFjOzBCQUFVRDs7Ozs7OzBCQUN6Qiw4REFBQ0M7MERBQWM7MEJBQ1pwQixNQUFNcUIsR0FBRyxDQUFDLENBQUNDLE9BQU9mLHNCQUNqQiw4REFBQ2dCO3dCQUFzQ0MsU0FBUyxJQUFNbEIsWUFBWUM7a0VBQXBDO2tDQUMzQmU7dUJBRFVmOzs7Ozs7Ozs7OzBCQUtqQiw4REFBQ2dCO2dCQUFnQ0MsU0FBU1A7MERBQXhCOzBCQUFtQzs7Ozs7Ozs7Ozs7Ozs7OztBQW1FM0Q7R0FoSE1sQjtLQUFBQTtBQWtITixpRUFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXExlYXJuXFx3aW5kc3VyZiBjYXNjYWRlXFx0aWMtdGFjLXRvZVxccGFnZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUaWNUYWNUb2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoQXJyYXkoOSkuZmlsbChudWxsKSk7XG4gIGNvbnN0IFtpc1hOZXh0LCBzZXRJc1hOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgIGlmIChjYWxjdWxhdGVXaW5uZXIobmV3Qm9hcmQpIHx8IG5ld0JvYXJkW2luZGV4XSkgcmV0dXJuO1xuICAgIG5ld0JvYXJkW2luZGV4XSA9IGlzWE5leHQgPyAnWCcgOiAnTyc7XG4gICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xuICAgIHNldElzWE5leHQoIWlzWE5leHQpO1xuICB9O1xuXG4gIGNvbnN0IGNhbGN1bGF0ZVdpbm5lciA9IChzcXVhcmVzKSA9PiB7XG4gICAgY29uc3QgbGluZXMgPSBbXG4gICAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLFxuICAgICAgWzAsIDMsIDZdLCBbMSwgNCwgN10sIFsyLCA1LCA4XSxcbiAgICAgIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gICAgXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbYSwgYiwgY10gPSBsaW5lc1tpXTtcbiAgICAgIGlmIChzcXVhcmVzW2FdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbYl0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tjXSkge1xuICAgICAgICByZXR1cm4gc3F1YXJlc1thXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHNldEJvYXJkKEFycmF5KDkpLmZpbGwobnVsbCkpO1xuICAgIHNldElzWE5leHQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgd2lubmVyID0gY2FsY3VsYXRlV2lubmVyKGJvYXJkKTtcbiAgY29uc3Qgc3RhdHVzID0gd2lubmVyID8gYFdpbm5lcjogJHt3aW5uZXJ9YCA6IGBOZXh0IHBsYXllcjogJHtpc1hOZXh0ID8gJ1gnIDogJ08nfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+e3N0YXR1c308L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAge2JvYXJkLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzcXVhcmVcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpbmRleCl9PlxuICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZXNldC1idXR0b25cIiBvbkNsaWNrPXtyZXNldEdhbWV9PlJlc2V0IEdhbWU8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGtleWZyYW1lcyBncmFkaWVudCB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5nYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjlhOWUsICNmYWQwYzQsICNmYWQwYzQsICNmZjlhOWUpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjAwJSA2MDAlO1xuICAgICAgICAgIGFuaW1hdGlvbjogZ3JhZGllbnQgMTBzIGVhc2UgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLmJvYXJkIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDEwMHB4KTtcbiAgICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuc3F1YXJlIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICAuc3F1YXJlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgfVxuICAgICAgICAucmVzZXQtYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc2V0LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWJiNTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpY1RhY1RvZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRpY1RhY1RvZSIsImJvYXJkIiwic2V0Qm9hcmQiLCJBcnJheSIsImZpbGwiLCJpc1hOZXh0Iiwic2V0SXNYTmV4dCIsImhhbmRsZUNsaWNrIiwiaW5kZXgiLCJuZXdCb2FyZCIsImNhbGN1bGF0ZVdpbm5lciIsInNxdWFyZXMiLCJsaW5lcyIsImkiLCJsZW5ndGgiLCJhIiwiYiIsImMiLCJyZXNldEdhbWUiLCJ3aW5uZXIiLCJzdGF0dXMiLCJkaXYiLCJtYXAiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});