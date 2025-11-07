/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @divi/module-library */ \"@divi/module-library\");\n/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_library__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ProfileBanner */ \"./src/modules/ProfileBanner/index.ts\");\n/* harmony import */ var _modules_Test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Test */ \"./src/modules/Test/index.ts\");\n\n\n\n// import { childModule } from './components/child-module';\n// import { d4Module } from './components/d4-module';\n// import { dynamicModule } from './components/dynamic-module';\n// import { parentModule } from './components/parent-module';\n// import { staticModule } from './components/static-module';\n\n\n// import './module-icons';\n// Register modules.\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addAction)('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', function () {\n    console.log('Registering Modules');\n    (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_modules_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleProfileBanner.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_modules_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleProfileBanner, 'metadata'));\n    (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_modules_Test__WEBPACK_IMPORTED_MODULE_4__.CAWebModuleTest.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_modules_Test__WEBPACK_IMPORTED_MODULE_4__.CAWebModuleTest, 'metadata'));\n});\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/index.ts?\n}");

/***/ }),

/***/ "./src/modules/ProfileBanner/conversion-outline.ts":
/*!*********************************************************!*\
  !*** ./src/modules/ProfileBanner/conversion-outline.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)\n/* harmony export */ });\n// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields\nvar conversionOutline = {\n    advanced: {\n        admin_label: 'module.meta.adminLabel',\n        animation: 'module.decoration.animation',\n        background: 'module.decoration.background',\n        borders: {\n            default: 'module.decoration.border',\n        },\n        box_shadow: {\n            default: 'module.decoration.boxShadow',\n        },\n        disabled_on: 'module.decoration.disabledOn',\n        filters: {\n            default: 'module.decoration.filters',\n        },\n        fonts: {\n            body: 'content.decoration.bodyFont.body',\n            body_link: 'content.decoration.bodyFont.link',\n            body_ol: 'content.decoration.bodyFont.ol',\n            body_quote: 'content.decoration.bodyFont.quote',\n            body_ul: 'content.decoration.bodyFont.ul',\n            header: 'title.decoration.font',\n        },\n        height: 'module.decoration.sizing',\n        link_options: 'module.advanced.link',\n        margin_padding: 'module.decoration.spacing',\n        max_width: 'module.decoration.sizing',\n        module: 'module.advanced.htmlAttributes',\n        overflow: 'module.decoration.overflow',\n        position_fields: 'module.decoration.position',\n        scroll: 'module.decoration.scroll',\n        sticky: 'module.decoration.sticky',\n        text: 'module.advanced.text',\n        text_shadow: {\n            default: 'module.advanced.text.textShadow',\n        },\n        transform: 'module.decoration.transform',\n        transition: 'module.decoration.transition',\n        z_index: 'module.decoration.zIndex',\n    },\n    css: {\n        after: 'css.*.after',\n        before: 'css.*.before',\n        main_element: 'css.*.mainElement',\n        content: 'css.*.content',\n        title: 'css.*.title',\n    },\n    module: {\n        name: 'name.innerContent.*',\n        job_title: 'job.innerContent.*',\n        profile_link: 'profile.text.*',\n        url: 'profile.innerContent.*.value.url',\n        portrait_url: 'portrait.innerContent.*.value.src',\n        portrait_alt: 'portrait.innerContent.*.value.alt',\n        round_image: 'portrait.rounded.*',\n        is_vertical: 'portrait.vertical.*',\n        module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',\n        module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',\n        module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur',\n    },\n    valueExpansionFunctionMap: {}\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/ProfileBanner/conversion-outline.ts?\n}");

/***/ }),

/***/ "./src/modules/ProfileBanner/custom-css.ts":
/*!*************************************************!*\
  !*** ./src/modules/ProfileBanner/custom-css.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cssFields: () => (/* binding */ cssFields)\n/* harmony export */ });\n// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;\n// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');\nvar cssFields = {};\n// export const cssFields = { ...customCssFields };\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/ProfileBanner/custom-css.ts?\n}");

/***/ }),

/***/ "./src/modules/ProfileBanner/edit.tsx":
/*!********************************************!*\
  !*** ./src/modules/ProfileBanner/edit.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @divi/module */ \"@divi/module\");\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @divi/module-utils */ \"@divi/module-utils\");\n/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/modules/ProfileBanner/styles.tsx\");\n/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-classnames */ \"./src/modules/ProfileBanner/module-classnames.ts\");\n/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-script-data */ \"./src/modules/ProfileBanner/module-script-data.tsx\");\n// External Dependencies.\n\n// Divi Dependencies.\n\n\n\n\n\n/**\n * Divi 4 Module edit component of visual builder.\n *\n * @since ??\n *\n * @param {ProfileBannerModuleEditProps} props React component props.\n *\n * @returns {ReactElement}\n */\nvar ModuleEdit = function (props) {\n    var _a, _b;\n    var attrs = props.attrs, id = props.id, name = props.name, elements = props.elements;\n    var profile = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_a = attrs === null || attrs === void 0 ? void 0 : attrs.profile) === null || _a === void 0 ? void 0 : _a.innerContent);\n    var portrait = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.portrait) === null || _b === void 0 ? void 0 : _b.advanced);\n    console.log(attrs);\n    console.log(portrait);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, { attrs: attrs, elements: elements, id: id, name: name, stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles, classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames, scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_5__.ModuleScriptData },\n        elements.styleComponents({\n            attrName: 'module',\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"figure\", { className: \"executive-profile p-3 d-flex flex-\" +\n                (\"on\" === (portrait === null || portrait === void 0 ? void 0 : portrait.vertical) ? 'column bg-light vertical' : 'row') },\n            elements.render({\n                attrName: 'portrait',\n                attrSubName: 'src',\n                className: (\"on\" === (portrait === null || portrait === void 0 ? void 0 : portrait.rounded) ? 'rounded-circle ' : '') + // rounded image +\n                    (\"on\" === (portrait === null || portrait === void 0 ? void 0 : portrait.vertical) ? 'align-self-center ' : 'me-3 ') // vertical alignment\n                ,\n            }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"body\" + (\"on\" === (portrait === null || portrait === void 0 ? void 0 : portrait.vertical) ? ' text-center' : '') },\n                elements.render({\n                    attrName: 'name',\n                }),\n                elements.render({\n                    attrName: 'job',\n                }),\n                (profile === null || profile === void 0 ? void 0 : profile.text) && (profile === null || profile === void 0 ? void 0 : profile.url) ?\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { href: profile.url }, profile.text) : ''))));\n};\n\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/ProfileBanner/edit.tsx?\n}");

/***/ }),

/***/ "./src/modules/ProfileBanner/index.ts":
/*!********************************************!*\
  !*** ./src/modules/ProfileBanner/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CAWebModuleProfileBanner: () => (/* binding */ CAWebModuleProfileBanner)\n/* harmony export */ });\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.json */ \"./src/modules/ProfileBanner/module.json\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/modules/ProfileBanner/edit.tsx\");\n/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholder-content */ \"./src/modules/ProfileBanner/placeholder-content.ts\");\n/* harmony import */ var _conversion_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversion-outline */ \"./src/modules/ProfileBanner/conversion-outline.ts\");\n// Local dependencies.\n\n\n\n\nvar CAWebModuleProfileBanner = {\n    metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,\n    placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,\n    conversionOutline: _conversion_outline__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,\n    renderers: {\n        edit: _edit__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit,\n    },\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/ProfileBanner/index.ts?\n}");

/***/ }),

/***/ "./src/modules/ProfileBanner/module-classnames.ts":
/*!********************************************************!*\
  !*** ./src/modules/ProfileBanner/module-classnames.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)\n/* harmony export */ });\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @divi/module */ \"@divi/module\");\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Module classnames function for Dynamic Module.\n *\n * @since ??\n *\n * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.\n */\nvar moduleClassnames = function (_a) {\n    var _b, _c;\n    var classnamesInstance = _a.classnamesInstance, attrs = _a.attrs;\n    // Text Options.\n    classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text));\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/ProfileBanner/module-classnames.ts?\n}");

/***/ }),

/***/ "./src/modules/ProfileBanner/module-script-data.tsx":
/*!**********************************************************!*\
  !*** ./src/modules/ProfileBanner/module-script-data.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Divi 4 module's script data component.\n *\n * @since ??\n *\n * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.\n *\n * @returns {ReactElement}\n */\nvar ModuleScriptData = function (_a) {\n    var elements = _a.elements;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({\n        attrName: 'module',\n    })));\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/ProfileBanner/module-script-data.tsx?\n}");

/***/ }),

/***/ "./src/modules/ProfileBanner/module.json":
/*!***********************************************!*\
  !*** ./src/modules/ProfileBanner/module.json ***!
  \***********************************************/
/***/ ((module) => {

eval("{module.exports = /*#__PURE__*/JSON.parse('{\"name\":\"caweb/profile-banner\",\"d4Shortcode\":\"et_pb_profile_banner\",\"title\":\"Profile Banner\",\"titles\":\"Profile Banners\",\"moduleIcon\":\"caweb/caweb\",\"moduleClassName\":\"et_pb_profile_banner\",\"moduleOrderClassName\":\"et_pb_profile_banner\",\"category\":\"module\",\"attributes\":{\"module\":{\"type\":\"object\",\"settings\":{\"meta\":{\"adminLabel\":{}},\"advanced\":{\"link\":{},\"text\":{},\"htmlAttributes\":{}},\"decoration\":{\"background\":{},\"bodyFont\":{},\"sizing\":{},\"spacing\":{},\"border\":{},\"boxShadow\":{},\"filters\":{},\"transform\":{},\"animation\":{},\"overflow\":{},\"disabledOn\":{},\"transition\":{},\"position\":{},\"zIndex\":{},\"scroll\":{},\"sticky\":{}}}},\"name\":{\"type\":\"object\",\"inlineEditor\":\"plainText\",\"elementType\":\"heading\",\"childrenSanitizer\":\"et_core_esc_previously\",\"tagName\":\"h4\",\"attributes\":{\"class\":\"pb-0\"},\"settings\":{\"innerContent\":{\"groupType\":\"group-item\",\"item\":{\"groupSlug\":\"profileHeader\",\"render\":true,\"attrName\":\"name.innerContent\",\"label\":\"Profile Name\",\"description\":\"Input the name of the profile.\",\"features\":{\"sticky\":false,\"dynamicContent\":{\"type\":\"text\"}},\"component\":{\"name\":\"divi/text\",\"type\":\"field\"}}}}},\"job\":{\"type\":\"object\",\"inlineEditor\":\"plainText\",\"elementType\":\"heading\",\"childrenSanitizer\":\"et_core_esc_previously\",\"tagName\":\"span\",\"attributes\":{\"class\":\"d-block\"},\"settings\":{\"innerContent\":{\"groupType\":\"group-item\",\"item\":{\"groupSlug\":\"profileHeader\",\"render\":true,\"attrName\":\"job.innerContent\",\"label\":\"Job Title\",\"description\":\"Input the job title.\",\"features\":{\"sticky\":false,\"dynamicContent\":{\"type\":\"text\"}},\"component\":{\"name\":\"divi/text\",\"type\":\"field\"}}}}},\"profile\":{\"type\":\"object\",\"inlineEditor\":\"plainText\",\"elementType\":\"heading\",\"childrenSanitizer\":\"et_core_esc_previously\",\"settings\":{\"innerContent\":{\"groupType\":\"group-items\",\"items\":{\"text\":{\"groupSlug\":\"profileBody\",\"render\":true,\"attrName\":\"profile.innerContent\",\"subName\":\"text\",\"label\":\"Profile Link\",\"description\":\"Input the text for the profile link.\",\"features\":{\"sticky\":false,\"dynamicContent\":{\"type\":\"text\"}},\"component\":{\"name\":\"divi/text\",\"type\":\"field\"}},\"url\":{\"groupSlug\":\"profileBody\",\"render\":true,\"attrName\":\"profile.innerContent\",\"subName\":\"url\",\"label\":\"Profile URL\",\"description\":\"Input the website of the profile.\",\"features\":{\"sticky\":false,\"dynamicContent\":{\"type\":\"text\"}},\"component\":{\"name\":\"divi/text\",\"type\":\"field\"}}}}}},\"portrait\":{\"type\":\"object\",\"childrenSanitizer\":\"et_core_esc_previously\",\"tagName\":\"img\",\"elementType\":\"image\",\"attributes\":{\"class\":\"width-80 height-80\"},\"settings\":{\"innerContent\":{\"groupType\":\"group-items\",\"items\":{\"imgText\":{\"groupSlug\":\"profileBody\",\"render\":true,\"attrName\":\"portrait.innerContent\",\"subName\":\"src\",\"label\":\"Portrait Image URL\",\"description\":\"Type in the URL to the image you would like to display, or upload your desired image below.\",\"features\":{\"sticky\":false,\"dynamicContent\":{\"type\":\"image\"}},\"component\":{\"name\":\"divi/text\",\"type\":\"field\",\"props\":{\"syncImageData\":{\"src\":true,\"id\":true,\"alt\":true,\"titleText\":false}}}},\"img\":{\"groupSlug\":\"profileBody\",\"render\":true,\"attrName\":\"portrait.innerContent\",\"subName\":\"src\",\"label\":\"Portrait Image\",\"description\":\"Upload your desired image, or type in the URL to the image you would like to display above.\",\"features\":{\"sticky\":false,\"dynamicContent\":{\"type\":\"image\"}},\"component\":{\"name\":\"divi/upload\",\"type\":\"field\",\"props\":{\"syncImageData\":{\"src\":true,\"id\":true,\"alt\":true,\"titleText\":false}}}},\"alt\":{\"groupSlug\":\"profileBody\",\"render\":true,\"attrName\":\"portrait.innerContent\",\"subName\":\"alt\",\"label\":\"Portrait Image Alt Text\",\"description\":\"Input the alt text for the portrait image.\",\"features\":{\"sticky\":false,\"dynamicContent\":{\"type\":\"text\"}},\"component\":{\"name\":\"divi/text\",\"type\":\"field\"}},\"rounded\":{\"groupSlug\":\"profileBodyDesign\",\"render\":true,\"label\":\"Round Image\",\"attrName\":\"portrait.advanced\",\"subName\":\"rounded\",\"description\":\"Switch to yes if you want the profile banner to display vertically.\",\"features\":{\"sticky\":false,\"dynamicContent\":false},\"component\":{\"name\":\"divi/toggle\",\"type\":\"field\",\"props\":{\"defaultValue\":\"off\"}}},\"vertical\":{\"groupSlug\":\"profileBodyDesign\",\"render\":true,\"label\":\"Display Vertically\",\"attrName\":\"portrait.advanced\",\"subName\":\"vertical\",\"description\":\"Switch to yes if you want the profile banner to display vertically.\",\"features\":{\"sticky\":false,\"dynamicContent\":false},\"component\":{\"name\":\"divi/toggle\",\"type\":\"field\",\"props\":{\"defaultValue\":\"off\"}}}}}}}},\"settings\":{\"content\":\"auto\",\"design\":\"auto\",\"advanced\":\"auto\",\"groups\":{\"profileHeader\":{\"panel\":\"content\",\"priority\":2,\"groupName\":\"profileHeader\",\"component\":{\"name\":\"divi/composite\",\"props\":{\"groupLabel\":\"Header\"}}},\"profileBody\":{\"panel\":\"content\",\"priority\":2,\"groupName\":\"profileBody\",\"component\":{\"name\":\"divi/composite\",\"props\":{\"groupLabel\":\"Body\"}}},\"profileBodyDesign\":{\"panel\":\"design\",\"priority\":2,\"groupName\":\"profileBodyDesign\",\"component\":{\"name\":\"divi/composite\",\"props\":{\"groupLabel\":\"Body\"}}}}}}');\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/ProfileBanner/module.json?\n}");

/***/ }),

/***/ "./src/modules/ProfileBanner/placeholder-content.ts":
/*!**********************************************************!*\
  !*** ./src/modules/ProfileBanner/placeholder-content.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)\n/* harmony export */ });\n// Divi dependencies.\n// import { placeholderContent as placeholder } from '@divi/module-utils';\nvar placeholderContent = {\n    name: {\n        innerContent: {\n            desktop: {\n                value: 'placeholder.name',\n            },\n        }\n    },\n    job: {\n        innerContent: {\n            desktop: {\n                value: 'placeholder.job',\n            },\n        }\n    }\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/ProfileBanner/placeholder-content.ts?\n}");

/***/ }),

/***/ "./src/modules/ProfileBanner/styles.tsx":
/*!**********************************************!*\
  !*** ./src/modules/ProfileBanner/styles.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @divi/module */ \"@divi/module\");\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-css */ \"./src/modules/ProfileBanner/custom-css.ts\");\n// External dependencies.\n\n// Divi dependencies.\n\n\n/**\n * Module's style components.\n *\n * @since ??\n */\nvar ModuleStyles = function (_a) {\n    var _b, _c, _d, _e;\n    var attrs = _a.attrs, settings = _a.settings, orderClass = _a.orderClass, mode = _a.mode, state = _a.state, noStyleTag = _a.noStyleTag, elements = _a.elements;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, { mode: mode, state: state, noStyleTag: noStyleTag },\n        elements.style({\n            attrName: 'module',\n            styleProps: {\n                disabledOn: {\n                    disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility,\n                },\n            },\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.TextStyle, { selector: \"\".concat(orderClass, \" .example_d4_module_inner\"), attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CommonStyle, { selector: \"\".concat(orderClass, \" .example_d4_module_inner\"), attr: (_e = (_d = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _d === void 0 ? void 0 : _d.decoration) === null || _e === void 0 ? void 0 : _e.background, declarationFunction: function (_a) {\n                var _b, _c;\n                var attrValue = _a.attrValue;\n                if ('on' === ((_c = (_b = attrValue === null || attrValue === void 0 ? void 0 : attrValue.image) === null || _b === void 0 ? void 0 : _b.parallax) === null || _c === void 0 ? void 0 : _c.enabled)) {\n                    return 'position: relative;';\n                }\n                return '';\n            } }),\n        elements.style({\n            attrName: 'title',\n        }),\n        elements.style({\n            attrName: 'content',\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, { selector: orderClass, attr: attrs === null || attrs === void 0 ? void 0 : attrs.css, cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields })));\n};\n\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/ProfileBanner/styles.tsx?\n}");

/***/ }),

/***/ "./src/modules/Test/conversion-outline.ts":
/*!************************************************!*\
  !*** ./src/modules/Test/conversion-outline.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)\n/* harmony export */ });\n// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields\nvar conversionOutline = {\n    advanced: {\n        admin_label: 'module.meta.adminLabel',\n        animation: 'module.decoration.animation',\n        background: 'module.decoration.background',\n        borders: {\n            default: 'module.decoration.border',\n        },\n        box_shadow: {\n            default: 'module.decoration.boxShadow',\n        },\n        disabled_on: 'module.decoration.disabledOn',\n        filters: {\n            default: 'module.decoration.filters',\n        },\n        fonts: {\n            body: 'content.decoration.bodyFont.body',\n            body_link: 'content.decoration.bodyFont.link',\n            body_ol: 'content.decoration.bodyFont.ol',\n            body_quote: 'content.decoration.bodyFont.quote',\n            body_ul: 'content.decoration.bodyFont.ul',\n            header: 'title.decoration.font',\n        },\n        height: 'module.decoration.sizing',\n        link_options: 'module.advanced.link',\n        margin_padding: 'module.decoration.spacing',\n        max_width: 'module.decoration.sizing',\n        module: 'module.advanced.htmlAttributes',\n        overflow: 'module.decoration.overflow',\n        position_fields: 'module.decoration.position',\n        scroll: 'module.decoration.scroll',\n        sticky: 'module.decoration.sticky',\n        text: 'module.advanced.text',\n        text_shadow: {\n            default: 'module.advanced.text.textShadow',\n        },\n        transform: 'module.decoration.transform',\n        transition: 'module.decoration.transition',\n        z_index: 'module.decoration.zIndex',\n    },\n    css: {\n        after: 'css.*.after',\n        before: 'css.*.before',\n        main_element: 'css.*.mainElement',\n        content: 'css.*.content',\n        title: 'css.*.title',\n    },\n    module: {\n        title: 'title.innerContent.*',\n    },\n    valueExpansionFunctionMap: {}\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/Test/conversion-outline.ts?\n}");

/***/ }),

/***/ "./src/modules/Test/custom-css.ts":
/*!****************************************!*\
  !*** ./src/modules/Test/custom-css.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cssFields: () => (/* binding */ cssFields)\n/* harmony export */ });\n// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;\n// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');\nvar cssFields = {};\n// export const cssFields = { ...customCssFields };\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/Test/custom-css.ts?\n}");

/***/ }),

/***/ "./src/modules/Test/edit.tsx":
/*!***********************************!*\
  !*** ./src/modules/Test/edit.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @divi/module */ \"@divi/module\");\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/modules/Test/styles.tsx\");\n/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-classnames */ \"./src/modules/Test/module-classnames.ts\");\n/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-script-data */ \"./src/modules/Test/module-script-data.tsx\");\n// External Dependencies.\n\n// Divi Dependencies.\n\n\n\n\n/**\n * Divi 4 Module edit component of visual builder.\n *\n * @since ??\n *\n * @param {ProfileBannerModuleEditProps} props React component props.\n *\n * @returns {ReactElement}\n */\nvar ModuleEdit = function (props) {\n    var attrs = props.attrs, id = props.id, name = props.name, elements = props.elements;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, { attrs: attrs, elements: elements, id: id, name: name, stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_2__.ModuleStyles, classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_3__.moduleClassnames, scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_4__.ModuleScriptData },\n        elements.styleComponents({\n            attrName: 'module',\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"example_d4_module_inner\" },\n            elements.render({\n                attrName: 'title',\n            }),\n            elements.render({\n                attrName: 'content',\n            }))));\n};\n\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/Test/edit.tsx?\n}");

/***/ }),

/***/ "./src/modules/Test/index.ts":
/*!***********************************!*\
  !*** ./src/modules/Test/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CAWebModuleTest: () => (/* binding */ CAWebModuleTest)\n/* harmony export */ });\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.json */ \"./src/modules/Test/module.json\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/modules/Test/edit.tsx\");\n/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholder-content */ \"./src/modules/Test/placeholder-content.ts\");\n/* harmony import */ var _conversion_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversion-outline */ \"./src/modules/Test/conversion-outline.ts\");\n// Local dependencies.\n\n\n\n\nvar CAWebModuleTest = {\n    metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,\n    placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,\n    conversionOutline: _conversion_outline__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,\n    renderers: {\n        edit: _edit__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit,\n    },\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/Test/index.ts?\n}");

/***/ }),

/***/ "./src/modules/Test/module-classnames.ts":
/*!***********************************************!*\
  !*** ./src/modules/Test/module-classnames.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)\n/* harmony export */ });\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @divi/module */ \"@divi/module\");\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Module classnames function for Dynamic Module.\n *\n * @since ??\n *\n * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.\n */\nvar moduleClassnames = function (_a) {\n    var _b, _c;\n    var classnamesInstance = _a.classnamesInstance, attrs = _a.attrs;\n    // Text Options.\n    classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text));\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/Test/module-classnames.ts?\n}");

/***/ }),

/***/ "./src/modules/Test/module-script-data.tsx":
/*!*************************************************!*\
  !*** ./src/modules/Test/module-script-data.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Divi 4 module's script data component.\n *\n * @since ??\n *\n * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.\n *\n * @returns {ReactElement}\n */\nvar ModuleScriptData = function (_a) {\n    var elements = _a.elements;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({\n        attrName: 'module',\n    })));\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/Test/module-script-data.tsx?\n}");

/***/ }),

/***/ "./src/modules/Test/module.json":
/*!**************************************!*\
  !*** ./src/modules/Test/module.json ***!
  \**************************************/
/***/ ((module) => {

eval("{module.exports = /*#__PURE__*/JSON.parse('{\"name\":\"caweb/test\",\"d4Shortcode\":\"et_pb_ca_test\",\"title\":\"Test\",\"titles\":\"Tests\",\"moduleIcon\":\"caweb/caweb\",\"moduleClassName\":\"et_pb_ca_test\",\"moduleOrderClassName\":\"et_pb_ca_test\",\"category\":\"module\",\"attributes\":{\"module\":{\"type\":\"object\",\"default\":{\"meta\":{\"adminLabel\":{\"desktop\":{\"value\":\"D4 Module\"}}}},\"settings\":{\"meta\":{\"adminLabel\":{}},\"advanced\":{\"link\":{},\"text\":{},\"htmlAttributes\":{}},\"decoration\":{\"background\":{},\"bodyFont\":{},\"sizing\":{},\"spacing\":{},\"border\":{},\"boxShadow\":{},\"filters\":{},\"transform\":{},\"animation\":{},\"overflow\":{},\"disabledOn\":{},\"transition\":{},\"position\":{},\"zIndex\":{},\"scroll\":{},\"sticky\":{}}}},\"title\":{\"type\":\"object\",\"default\":{\"decoration\":{\"font\":{\"font\":{\"desktop\":{\"value\":{\"headingLevel\":\"h2\"}}}}}},\"inlineEditor\":\"plainText\",\"elementType\":\"heading\",\"childrenSanitizer\":\"et_core_esc_previously\",\"attributes\":{\"class\":\"example_d4_module_title\"},\"settings\":{\"innerContent\":{\"groupType\":\"group-item\",\"item\":{\"groupName\":\"mainContent\",\"priority\":10,\"render\":true,\"attrName\":\"title.innerContent\",\"label\":\"Title\",\"description\":\"Input your value to action title here.\",\"features\":{\"sticky\":false,\"dynamicContent\":{\"type\":\"text\"}},\"component\":{\"name\":\"divi/text\",\"type\":\"field\"}}},\"decoration\":{\"font\":{\"priority\":10,\"component\":{\"props\":{\"groupLabel\":\"Title Text\",\"fieldLabel\":\"Title\"}}}}}}},\"settings\":{\"content\":\"auto\",\"design\":\"auto\",\"advanced\":\"auto\"}}');\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/Test/module.json?\n}");

/***/ }),

/***/ "./src/modules/Test/placeholder-content.ts":
/*!*************************************************!*\
  !*** ./src/modules/Test/placeholder-content.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)\n/* harmony export */ });\n// Divi dependencies.\n// import { placeholderContent as placeholder } from '@divi/module-utils';\nvar placeholderContent = {\n    title: {\n        innerContent: {\n            desktop: {\n                value: 'placeholder.title',\n            },\n        }\n    }\n};\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/Test/placeholder-content.ts?\n}");

/***/ }),

/***/ "./src/modules/Test/styles.tsx":
/*!*************************************!*\
  !*** ./src/modules/Test/styles.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @divi/module */ \"@divi/module\");\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-css */ \"./src/modules/Test/custom-css.ts\");\n// External dependencies.\n\n// Divi dependencies.\n\n\n/**\n * Module's style components.\n *\n * @since ??\n */\nvar ModuleStyles = function (_a) {\n    var _b, _c, _d, _e;\n    var attrs = _a.attrs, settings = _a.settings, orderClass = _a.orderClass, mode = _a.mode, state = _a.state, noStyleTag = _a.noStyleTag, elements = _a.elements;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, { mode: mode, state: state, noStyleTag: noStyleTag },\n        elements.style({\n            attrName: 'module',\n            styleProps: {\n                disabledOn: {\n                    disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility,\n                },\n            },\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.TextStyle, { selector: \"\".concat(orderClass, \" .example_d4_module_inner\"), attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CommonStyle, { selector: \"\".concat(orderClass, \" .example_d4_module_inner\"), attr: (_e = (_d = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _d === void 0 ? void 0 : _d.decoration) === null || _e === void 0 ? void 0 : _e.background, declarationFunction: function (_a) {\n                var _b, _c;\n                var attrValue = _a.attrValue;\n                if ('on' === ((_c = (_b = attrValue === null || attrValue === void 0 ? void 0 : attrValue.image) === null || _b === void 0 ? void 0 : _b.parallax) === null || _c === void 0 ? void 0 : _c.enabled)) {\n                    return 'position: relative;';\n                }\n                return '';\n            } }),\n        elements.style({\n            attrName: 'title',\n        }),\n        elements.style({\n            attrName: 'content',\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, { selector: orderClass, attr: attrs === null || attrs === void 0 ? void 0 : attrs.css, cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields })));\n};\n\n\n\n//# sourceURL=webpack://caweb-divi-extension/./src/modules/Test/styles.tsx?\n}");

/***/ }),

/***/ "@divi/module":
/*!**********************************!*\
  !*** external ["divi","module"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = divi.module;

/***/ }),

/***/ "@divi/module-library":
/*!*****************************************!*\
  !*** external ["divi","moduleLibrary"] ***!
  \*****************************************/
/***/ ((module) => {

module.exports = divi.moduleLibrary;

/***/ }),

/***/ "@divi/module-utils":
/*!***************************************!*\
  !*** external ["divi","moduleUtils"] ***!
  \***************************************/
/***/ ((module) => {

module.exports = divi.moduleUtils;

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external ["vendor","wp","hooks"] ***!
  \****************************************/
/***/ ((module) => {

module.exports = vendor.wp.hooks;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = lodash;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;