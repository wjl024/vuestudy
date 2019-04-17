(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/table2/table2"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/VueStudy/graceui-app/pages/table2/table2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =






















{
  data: function data() {
    return {
      students: [
      { name: "jack", age: 18, gender: "男", classroom: "一年级一班" },
      { name: "lucy", age: 18, gender: "女", classroom: "一年级二班" },
      { name: "小米", age: 19, gender: "男", classroom: "一年级五班" },
      { name: "lucy", age: 18, gender: "女", classroom: "一年级二班" },
      { name: "graceUI", age: 18, gender: "男", classroom: "hcoder" }] };


  } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue?vue&type=template&id=4d5aae85&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/VueStudy/graceui-app/pages/table2/table2.vue?vue&type=template&id=4d5aae85& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("graceHeader", {
        attrs: {
          title: "普通表格",
          desc: "页面 : /pages/table2",
          mpcomid: "791864ee-0"
        }
      }),
      _c(
        "view",
        {
          staticClass:
            "grace-bg-white grace-common-mt grace-padding grace-common-border"
        },
        [
          _c(
            "view",
            {
              staticClass: "grace-stable",
              staticStyle: { "margin-top": "28px" }
            },
            [
              _vm._m(0),
              _vm._l(_vm.students, function(item, index) {
                return _c(
                  "view",
                  {
                    key: index,
                    staticClass: "body",
                    style: [index % 2 != 0 ? "background:#F1F2F3" : ""]
                  },
                  [
                    _c("view", [_vm._v(_vm._s(item.name))]),
                    _c("view", [_vm._v(_vm._s(item.age))]),
                    _c("view", [_vm._v(_vm._s(item.gender))]),
                    _c("view", [_vm._v(_vm._s(item.classroom))])
                  ]
                )
              })
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "title" }, [
      _c("view", [_vm._v("姓名")]),
      _c("view", [_vm._v("年龄")]),
      _c("view", [_vm._v("性别")]),
      _c("view", [_vm._v("班级")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "E:\\VueStudy\\graceui-app\\main.js?{\"page\":\"pages%2Ftable2%2Ftable2\"}":
/*!**************************************************************************!*\
  !*** E:/VueStudy/graceui-app/main.js?{"page":"pages%2Ftable2%2Ftable2"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "E:\\VueStudy\\graceui-app\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _table = _interopRequireDefault(__webpack_require__(/*! ./pages/table2/table2.vue */ "E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_table.default));

/***/ }),

/***/ "E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue":
/*!*******************************************************!*\
  !*** E:/VueStudy/graceui-app/pages/table2/table2.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table2_vue_vue_type_template_id_4d5aae85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table2.vue?vue&type=template&id=4d5aae85& */ "E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue?vue&type=template&id=4d5aae85&");
/* harmony import */ var _table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table2.vue?vue&type=script&lang=js& */ "E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table2_vue_vue_type_template_id_4d5aae85___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table2_vue_vue_type_template_id_4d5aae85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/VueStudy/graceui-app/pages/table2/table2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** E:/VueStudy/graceui-app/pages/table2/table2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./table2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue?vue&type=script&lang=js&");
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_table2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue?vue&type=template&id=4d5aae85&":
/*!**************************************************************************************!*\
  !*** E:/VueStudy/graceui-app/pages/table2/table2.vue?vue&type=template&id=4d5aae85& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_table2_vue_vue_type_template_id_4d5aae85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./table2.vue?vue&type=template&id=4d5aae85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\table2\\table2.vue?vue&type=template&id=4d5aae85&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_table2_vue_vue_type_template_id_4d5aae85___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_201_586_HZ$D_201_587_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_table2_vue_vue_type_template_id_4d5aae85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\VueStudy\\graceui-app\\main.js?{\"page\":\"pages%2Ftable2%2Ftable2\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/table2/table2.js.map