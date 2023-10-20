"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/Dashboard.tsx":
/*!**************************************!*\
  !*** ./src/components/Dashboard.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_trpc/client */ \"(app-pages-browser)/./src/app/_trpc/client.ts\");\n/* harmony import */ var _UploadButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadButton */ \"(app-pages-browser)/./src/components/UploadButton.tsx\");\n/* harmony import */ var _barrel_optimize_names_GhostIcon_MessageSquare_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=GhostIcon,MessageSquare,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _barrel_optimize_names_GhostIcon_MessageSquare_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=GhostIcon,MessageSquare,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var _barrel_optimize_names_GhostIcon_MessageSquare_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=GhostIcon,MessageSquare,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js\");\n/* harmony import */ var _barrel_optimize_names_GhostIcon_MessageSquare_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=GhostIcon,MessageSquare,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/ghost.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading-skeleton */ \"(app-pages-browser)/./node_modules/react-loading-skeleton/dist/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/format */ \"(app-pages-browser)/./node_modules/date-fns/esm/format/index.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const { data: files, isLoading } = _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__.trpc.getUserFiles.useQuery();\n    const { mutate: deleteFile } = _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__.trpc.deleteFile.useMutation();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mx-auto max-w-7xl md:p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-3 font-bold text-5xl text-gray-900\",\n                        children: \"My Files\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UploadButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            files && files.length !== 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \" mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg: grid-cols-3 \",\n                children: files.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((file)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \" col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: \"flex flex-col gap-2\",\n                                href: \"/dashboard/\".concat(file.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pt-6 px-6 flex w-full items-center justify-between space-x-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex-1 truncate\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center space-x-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \" truncate text-lg font-medium text-zinc-900\",\n                                                    children: file.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GhostIcon_MessageSquare_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                className: \"h-4 w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            (0,date_fns_format__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(new Date(file.createdAt), \"MMM yyyy\")\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GhostIcon_MessageSquare_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                className: \"h-4 w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            \"Message\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        onClick: ()=>deleteFile({\n                                                id: file.id\n                                            }),\n                                        size: \"sm\",\n                                        className: \"w-full\",\n                                        variant: \"destructive\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GhostIcon_MessageSquare_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"h-4 w-4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 122\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, file.id, true, {\n                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                height: 100,\n                className: \"my-2\",\n                count: 3\n            }, void 0, false, {\n                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-16 flex flex-col items-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GhostIcon_MessageSquare_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        className: \"h-8 w-8 text-zinc-800\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \" font-semibold text-xl\",\n                        children: \"Pretty empty around here\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Let's upload your PDF.\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/Dashboard.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"GbmnuxwFB7658YlRkMjDAHZyIwk=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRTBDO0FBQ0E7QUFDMkI7QUFDdkI7QUFDakI7QUFDSztBQUNHO0FBRXJDLE1BQU1VLFlBQVk7O0lBQ2hCLE1BQU0sRUFBRUMsTUFBTUMsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR2Isa0RBQUlBLENBQUNjLFlBQVksQ0FBQ0MsUUFBUTtJQUU3RCxNQUFNLEVBQUVDLFFBQVFDLFVBQVUsRUFBRSxHQUFHakIsa0RBQUlBLENBQUNpQixVQUFVLENBQUNDLFdBQVc7SUFFMUQscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHRixXQUFVO2tDQUF3Qzs7Ozs7O2tDQUV0RCw4REFBQ25CLHFEQUFZQTs7Ozs7Ozs7Ozs7WUFJZFcsU0FBU0EsTUFBTVcsTUFBTSxLQUFLLGtCQUN6Qiw4REFBQ0M7Z0JBQUdKLFdBQVU7MEJBQ1hSLE1BQ0VhLElBQUksQ0FDSCxDQUFDQyxHQUFHQyxJQUNGLElBQUlDLEtBQUtELEVBQUVFLFNBQVMsRUFBRUMsT0FBTyxLQUM3QixJQUFJRixLQUFLRixFQUFFRyxTQUFTLEVBQUVDLE9BQU8sSUFFaENDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDSiw4REFBQ0M7d0JBQ0NiLFdBQVU7OzBDQUdWLDhEQUFDYixrREFBSUE7Z0NBQ0hhLFdBQVU7Z0NBQ1ZjLE1BQU0sY0FBc0IsT0FBUkYsS0FBS0csRUFBRTswQ0FFM0IsNEVBQUNkO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ0M7NENBQUlELFdBQVU7Ozs7OztzREFDZiw4REFBQ0M7NENBQUlELFdBQVU7c0RBQ2IsNEVBQUNDO2dEQUFJRCxXQUFVOzBEQUNiLDRFQUFDZ0I7b0RBQUdoQixXQUFVOzhEQUNYWSxLQUFLSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBT3BCLDhEQUFDaEI7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNoQiw4R0FBSUE7Z0RBQUNnQixXQUFVOzs7Ozs7NENBQ2ZaLDJEQUFNQSxDQUFDLElBQUlvQixLQUFLSSxLQUFLSCxTQUFTLEdBQUc7Ozs7Ozs7a0RBR3BDLDhEQUFDUjt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNqQiw4R0FBYUE7Z0RBQUNpQixXQUFVOzs7Ozs7NENBQVk7Ozs7Ozs7a0RBSXZDLDhEQUFDWCw4Q0FBTUE7d0NBQUM2QixTQUFTLElBQU1yQixXQUFXO2dEQUFFa0IsSUFBSUgsS0FBS0csRUFBRTs0Q0FBQzt3Q0FBSUksTUFBSzt3Q0FBS25CLFdBQVU7d0NBQVNvQixTQUFRO2tEQUFjLDRFQUFDbkMsOEdBQUtBOzRDQUFDZSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBN0JySFksS0FBS0csRUFBRTs7Ozs7Ozs7OzRCQWtDbEJ0QiwwQkFDRiw4REFBQ1AsOERBQVFBO2dCQUFDbUMsUUFBUTtnQkFBS3JCLFdBQVU7Z0JBQU9zQixPQUFPOzs7OzswQ0FFL0MsOERBQUNyQjtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNsQiwrR0FBU0E7d0JBQUNrQixXQUFVOzs7Ozs7a0NBQ3JCLDhEQUFDZ0I7d0JBQUdoQixXQUFVO2tDQUF5Qjs7Ozs7O2tDQUN2Qyw4REFBQ3VCO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYjtHQXRFTWpDO0tBQUFBO0FBd0VOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC50c3g/NGU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdHJwYyB9IGZyb20gXCJAL2FwcC9fdHJwYy9jbGllbnRcIjtcbmltcG9ydCBVcGxvYWRCdXR0b24gZnJvbSBcIi4vVXBsb2FkQnV0dG9uXCI7XG5pbXBvcnQgeyBHaG9zdEljb24sIE1lc3NhZ2VTcXVhcmUsIFBsdXMsIFRyYXNoIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogZmlsZXMsIGlzTG9hZGluZyB9ID0gdHJwYy5nZXRVc2VyRmlsZXMudXNlUXVlcnkoKTtcblxuICBjb25zdCB7IG11dGF0ZTogZGVsZXRlRmlsZSB9ID0gdHJwYy5kZWxldGVGaWxlLnVzZU11dGF0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBtZDpwLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHBiLTUgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIHNtOmdhcC0wXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0zIGZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LWdyYXktOTAwXCI+TXkgRmlsZXM8L2gxPlxuXG4gICAgICAgIDxVcGxvYWRCdXR0b24gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogRGlzcGxheSBhbGwgZmlsZSAqL31cbiAgICAgIHtmaWxlcyAmJiBmaWxlcy5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCIgbXQtOCBncmlkIGdyaWQtY29scy0xIGdhcC02IGRpdmlkZS15IGRpdmlkZS16aW5jLTIwMCBtZDpncmlkLWNvbHMtMiBsZzogZ3JpZC1jb2xzLTMgXCI+XG4gICAgICAgICAge2ZpbGVzXG4gICAgICAgICAgICAuc29ydChcbiAgICAgICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICAgICAgbmV3IERhdGUoYi5jcmVhdGVkQXQpLmdldFRpbWUoKSAtXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoYS5jcmVhdGVkQXQpLmdldFRpbWUoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgY29sLXNwYW4tMSBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgcm91bmRlZC1sZyBiZy13aGl0ZSBzaGFkb3cgdHJhbnNpdGlvbiBob3ZlcjpzaGFkb3ctbGdcIlxuICAgICAgICAgICAgICAgIGtleT17ZmlsZS5pZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZGFzaGJvYXJkLyR7ZmlsZS5pZH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBweC02IGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIGZsZXgtc2hyaW5rLTAgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1jeWFuLTUwMCB0by1ibHVlLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCIgdHJ1bmNhdGUgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LXppbmMtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBtdC00IGdyaWQgZ3JpZC1jb2xzLTMgcGxhY2UtaXRlbXMtY2VudGVyIHB5LTIgZ2FwLTYgdGV4dC14cyB0ZXh0LXppbmMtNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQbHVzIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGZpbGUuY3JlYXRlZEF0KSwgXCJNTU0geXl5eVwiKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlU3F1YXJlIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWxlKHsgaWQ6IGZpbGUuaWQgfSl9IHNpemU9J3NtJyBjbGFzc05hbWU9XCJ3LWZ1bGxcIiB2YXJpYW50PSdkZXN0cnVjdGl2ZSc+PFRyYXNoIGNsYXNzTmFtZT1cImgtNCB3LTRcIi8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICkgOiBpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxTa2VsZXRvbiBoZWlnaHQ9ezEwMH0gY2xhc3NOYW1lPVwibXktMlwiIGNvdW50PXszfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxHaG9zdEljb24gY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXppbmMtODAwXCIgLz5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiIGZvbnQtc2VtaWJvbGQgdGV4dC14bFwiPlByZXR0eSBlbXB0eSBhcm91bmQgaGVyZTwvaDM+XG4gICAgICAgICAgPHA+TGV0JmFwb3M7cyB1cGxvYWQgeW91ciBQREYuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIl0sIm5hbWVzIjpbInRycGMiLCJVcGxvYWRCdXR0b24iLCJHaG9zdEljb24iLCJNZXNzYWdlU3F1YXJlIiwiUGx1cyIsIlRyYXNoIiwiU2tlbGV0b24iLCJMaW5rIiwiZm9ybWF0IiwiQnV0dG9uIiwiRGFzaGJvYXJkIiwiZGF0YSIsImZpbGVzIiwiaXNMb2FkaW5nIiwiZ2V0VXNlckZpbGVzIiwidXNlUXVlcnkiLCJtdXRhdGUiLCJkZWxldGVGaWxlIiwidXNlTXV0YXRpb24iLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJsZW5ndGgiLCJ1bCIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJjcmVhdGVkQXQiLCJnZXRUaW1lIiwibWFwIiwiZmlsZSIsImxpIiwiaHJlZiIsImlkIiwiaDMiLCJuYW1lIiwib25DbGljayIsInNpemUiLCJ2YXJpYW50IiwiaGVpZ2h0IiwiY291bnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Dashboard.tsx\n"));

/***/ })

});