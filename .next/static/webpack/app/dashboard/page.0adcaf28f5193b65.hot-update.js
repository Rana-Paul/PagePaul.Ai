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

/***/ "(app-pages-browser)/./src/components/UploadButton.tsx":
/*!*****************************************!*\
  !*** ./src/components/UploadButton.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ \"(app-pages-browser)/./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var _barrel_optimize_names_CloudIcon_File_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CloudIcon,File!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/cloud.js\");\n/* harmony import */ var _barrel_optimize_names_CloudIcon_File_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CloudIcon,File!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst UploadDropzone = ()=>{\n    _s();\n    const [isUploaading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dropzone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        multiple: false,\n        onDrop: (files)=>console.log(files),\n        children: (param)=>/*#__PURE__*/ {\n            let { getRootProps, getInputProps, acceptedFiles } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border h-64 m-4 border-dashed border-gray-300 rounded-lg\",\n                ...getRootProps(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center h-full w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"dopzone-file\",\n                        className: \"flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center justify-center pt-5 pb-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CloudIcon_File_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"h-6 w-6 text-zinc-500 mb-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-2 text-sm text-zinc-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: \"Click to upload\"\n                                            }, void 0, false, {\n                                                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                                                lineNumber: 28,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            \" or drag and drop\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs text-zinc-500\",\n                                        children: \"PDF (up to 4MB)\"\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, undefined),\n                            acceptedFiles && acceptedFiles[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-3 py-2 h-full grid place-items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CloudIcon_File_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"h-4 w-4 text-blue-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-3 py-2 h-full text-sm truncate\",\n                                        children: acceptedFiles[0].name\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined);\n        }\n    }, void 0, false, {\n        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UploadDropzone, \"DsIaAL8WGLx/6l1vzzXY0KHC28I=\");\n_c = UploadDropzone;\nconst UploadButton = ()=>{\n    _s1();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n        open: isOpen,\n        onOpenChange: (x)=>{\n            if (!x) setIsOpen(x);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                onClick: ()=>setIsOpen(true),\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    children: \"Upload PDF\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UploadDropzone, {}, void 0, false, {\n                    fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Work/projects/PagePal.AI/pagepal.ai/src/components/UploadButton.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(UploadButton, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c1 = UploadButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadButton);\nvar _c, _c1;\n$RefreshReg$(_c, \"UploadDropzone\");\n$RefreshReg$(_c1, \"UploadButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFaUM7QUFDa0M7QUFDOUI7QUFFQztBQUNTO0FBRS9DLE1BQU1RLGlCQUFpQjs7SUFFckIsTUFBTSxDQUFDQyxjQUFjQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFVO0lBQ3pELHFCQUNFLDhEQUFDSyxzREFBUUE7UUFBQ00sVUFBVTtRQUFPQyxRQUFRLENBQUNDLFFBQVVDLFFBQVFDLEdBQUcsQ0FBQ0Y7a0JBQ3ZEO2dCQUFDLEVBQUVHLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUU7bUJBQzlDLDhEQUFDQztnQkFDQ0MsV0FBVTtnQkFDVCxHQUFHSixjQUFjOzBCQUVsQiw0RUFBQ0c7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUNDQyxTQUFRO3dCQUNSRixXQUFVOzswQ0FFViw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDZCwwRkFBU0E7d0NBQUNjLFdBQVU7Ozs7OztrREFDckIsOERBQUNHO3dDQUFFSCxXQUFVOzswREFDWCw4REFBQ0k7Z0RBQUtKLFdBQVU7MERBQWdCOzs7Ozs7NENBQXNCOzs7Ozs7O2tEQUd4RCw4REFBQ0c7d0NBQUVILFdBQVU7a0RBQXdCOzs7Ozs7Ozs7Ozs7NEJBR3RDRixpQkFBaUJBLGFBQWEsQ0FBQyxFQUFFLGtCQUNoQyw4REFBQ0M7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ2IsMEZBQUlBOzRDQUFDYSxXQUFVOzs7Ozs7Ozs7OztrREFHbEIsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNaRixhQUFhLENBQUMsRUFBRSxDQUFDTyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBUTdCOzs7Ozs7QUFJYjtHQTNDTWpCO0tBQUFBO0FBNkNOLE1BQU1rQixlQUFlOztJQUNuQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBRzVCLCtDQUFRQSxDQUFVO0lBRTlDLHFCQUNFLDhEQUFDQyw4Q0FBTUE7UUFDTDRCLE1BQU1GO1FBQ05HLGNBQWMsQ0FBQ0M7WUFDYixJQUFJLENBQUNBLEdBQUdILFVBQVVHO1FBQ3BCOzswQkFFQSw4REFBQzVCLHFEQUFhQTtnQkFBQzZCLFNBQVMsSUFBTUosVUFBVTtnQkFBT0ssT0FBTzswQkFDcEQsNEVBQUM3Qiw4Q0FBTUE7OEJBQUM7Ozs7Ozs7Ozs7OzBCQUdWLDhEQUFDRixxREFBYUE7MEJBQ1osNEVBQUNNOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7SUFuQk1rQjtNQUFBQTtBQXFCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udHN4PzQxM2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIERpYWxvZ1RyaWdnZXIgfSBmcm9tIFwiLi91aS9kaWFsb2dcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xuXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XG5pbXBvcnQgeyBDbG91ZEljb24sIEZpbGUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmNvbnN0IFVwbG9hZERyb3B6b25lID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtpc1VwbG9hYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8RHJvcHpvbmUgbXVsdGlwbGU9e2ZhbHNlfSBvbkRyb3A9eyhmaWxlcykgPT4gY29uc29sZS5sb2coZmlsZXMpfT5cbiAgICAgIHsoeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGFjY2VwdGVkRmlsZXMgfSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGgtNjQgbS00IGJvcmRlci1kYXNoZWQgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGdcIlxuICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJkb3B6b25lLWZpbGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS01MCBob3ZlcjpiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtNSBwYi02XCI+XG4gICAgICAgICAgICAgICAgPENsb3VkSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtemluYy01MDAgbWItMlwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXNtIHRleHQtemluYy03MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DbGljayB0byB1cGxvYWQ8L3NwYW4+IG9yIGRyYWdcbiAgICAgICAgICAgICAgICAgIGFuZCBkcm9wXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC16aW5jLTUwMFwiPlBERiAodXAgdG8gNE1CKTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAge2FjY2VwdGVkRmlsZXMgJiYgYWNjZXB0ZWRGaWxlc1swXSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWF4LXcteHMgYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW4gb3V0bGluZSBvdXRsaW5lLVsxcHhdIG91dGxpbmUtemluYy0yMDAgZGl2aWRlLXggZGl2aWRlLXppbmMtMjAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMiBoLWZ1bGwgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZpbGUgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWJsdWUtNTAwXCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0yIGgtZnVsbCB0ZXh0LXNtIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHthY2NlcHRlZEZpbGVzWzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9Ecm9wem9uZT5cbiAgKTtcbn07XG5cbmNvbnN0IFVwbG9hZEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgIG9uT3BlbkNoYW5nZT17KHgpID0+IHtcbiAgICAgICAgaWYgKCF4KSBzZXRJc09wZW4oeCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxEaWFsb2dUcmlnZ2VyIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0gYXNDaGlsZD5cbiAgICAgICAgPEJ1dHRvbj5VcGxvYWQgUERGPC9CdXR0b24+XG4gICAgICA8L0RpYWxvZ1RyaWdnZXI+XG5cbiAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICA8VXBsb2FkRHJvcHpvbmUgLz5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRpYWxvZyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dUcmlnZ2VyIiwiQnV0dG9uIiwiRHJvcHpvbmUiLCJDbG91ZEljb24iLCJGaWxlIiwiVXBsb2FkRHJvcHpvbmUiLCJpc1VwbG9hYWRpbmciLCJzZXRJc1VwbG9hZGluZyIsIm11bHRpcGxlIiwib25Ecm9wIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImFjY2VwdGVkRmlsZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJwIiwic3BhbiIsIm5hbWUiLCJVcGxvYWRCdXR0b24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJvcGVuIiwib25PcGVuQ2hhbmdlIiwieCIsIm9uQ2xpY2siLCJhc0NoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UploadButton.tsx\n"));

/***/ })

});