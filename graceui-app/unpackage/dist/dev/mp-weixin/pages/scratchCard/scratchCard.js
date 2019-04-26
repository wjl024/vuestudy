(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/scratchCard/scratchCard"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/VueStudy/graceui-app/pages/scratchCard/scratchCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



















var graceContext;var _default =
{
  data: function data() {
    return {
      // 画布大小 为了兼容小屏幕手机（宽 320px) 建议宽小于等于 300 
      graceContextWidth: 300,
      graceContextHeight: 180,
      prizes: [
      // 格式 : {name:奖品名称, img : 奖品图片地址 (宽高等于 graceContextWidth 和 graceContextHeight 或者等比例放大)}
      { name: "小米8青春版", img: "https://staticimgs.oss-cn-beijing.aliyuncs.com/mi8.png" },
      { name: "感谢参与", img: "https://staticimgs.oss-cn-beijing.aliyuncs.com/xxcy.png" }],

      prizesBGimg: '',
      clearArea: [],
      isClearEnd: false };

  },
  onLoad: function onLoad(options) {
    this.isClearEnd = false;
    graceContext = uni.createCanvasContext('graceCanvas');
    this.canvasInit();
  },
  methods: {
    // 初始化
    canvasInit: function canvasInit() {
      // prizeId 代表 : 奖品 id，代表用户是否中奖及奖品信息 请自行设计中奖算法最终得到奖品id即可
      var prizeId = 0; //0 代表小米8, 1 代表 谢谢参与 实际开发以真实奖品为准
      // 绘制奖品
      this.prizesBGimg = this.prizes[prizeId].img;
      // 绘制遮盖层
      graceContext.setFillStyle("#D1D2D3");
      graceContext.fillRect(0, 0, this.graceContextWidth, this.graceContextHeight);
      graceContext.save();
      // 绘制刮字背景
      var pattern = graceContext.createPattern('../../static/imgs/gua.png', 'repeat');
      graceContext.fillStyle = pattern;
      graceContext.fillRect(0, 0, this.graceContextWidth, this.graceContextHeight);
      graceContext.save();
      // 绘制文字
      graceContext.setFillStyle("#000000");
      graceContext.setFontSize(15);
      graceContext.setTextAlign('center');
      graceContext.fillText("刮一刮，好运来!", this.graceContextWidth / 2, this.graceContextHeight / 2);
      graceContext.draw();
    },
    touchstart: function touchstart(e) {
      if (this.isClearEnd) {return;}
      var startX = e.touches[0].x;
      var startY = e.touches[0].y;
      this.clearArea.push({ x: startX, y: startY });
      this.clearBase();
    },
    touchmove: function touchmove(e) {
      if (this.isClearEnd) {return;}
      var endX = e.touches[0].x;
      var endY = e.touches[0].y;
      // 记录要擦除的区域
      this.clearArea.push({ x: endX, y: endY });
      this.clearBase();
    },
    touchend: function touchend(e) {
      if (this.isClearEnd) {return;}
      // 计算是否全部展示
      // 获取 最小的 x y
      var minX = this.clearArea[0].x;
      var minY = this.clearArea[0].y;
      var maxX = this.clearArea[0].x;
      var maxY = this.clearArea[0].y;
      for (var i = 1; i < this.clearArea.length; i++) {
        if (this.clearArea[i].x > maxX) {
          maxX = this.clearArea[i].x;
        }
        if (this.clearArea[i].y > maxY) {
          maxY = this.clearArea[i].y;
        }
        if (this.clearArea[i].x < minX) {
          minX = this.clearArea[i].x;
        }
        if (this.clearArea[i].y < minY) {
          minY = this.clearArea[i].y;
        }
      }
      var width = maxX - minX;
      var height = maxY - minY;
      var acreage = width * height;
      if (acreage * 6 > this.graceContextWidth * this.graceContextHeight) {
        this.isClearEnd = true;
        graceContext.clearRect(0, 0, this.graceContextWidth, this.graceContextHeight);
        graceContext.draw();
        this.clearArea = [];
      }
    },
    clearBase: function clearBase() {
      graceContext.setFillStyle("#D1D2D3");
      graceContext.fillRect(0, 0, this.graceContextWidth, this.graceContextHeight);
      var pattern = graceContext.createPattern('../../static/imgs/gua.png', 'repeat');
      graceContext.fillStyle = pattern;
      graceContext.fillRect(0, 0, this.graceContextWidth, this.graceContextHeight);
      for (var i = 0; i < this.clearArea.length; i++) {
        graceContext.clearRect(this.clearArea[i].x, this.clearArea[i].y, 50, 50);
      }
      graceContext.draw();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/VueStudy/graceui-app/pages/scratchCard/scratchCard.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=template&id=5ab8955b&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/VueStudy/graceui-app/pages/scratchCard/scratchCard.vue?vue&type=template&id=5ab8955b& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          title: "刮刮卡",
          desc: "刮一刮,好运来 ^_^",
          mpcomid: "f8ccd904-0"
        }
      }),
      _c(
        "view",
        {
          staticClass: "garce-scratch-card-bg",
          style: {
            marginTop: "50px",
            width: _vm.graceContextWidth + "px",
            height: _vm.graceContextHeight + "px"
          }
        },
        [
          _c("image", { attrs: { src: _vm.prizesBGimg, mode: "widthFix" } }),
          _c("canvas", {
            style: {
              width: _vm.graceContextWidth + "px",
              height: _vm.graceContextHeight + "px"
            },
            attrs: { "canvas-id": "graceCanvas", eventid: "f8ccd904-0" },
            on: {
              touchstart: _vm.touchstart,
              touchmove: _vm.touchmove,
              touchend: _vm.touchend
            }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: "grace-h5 grace-blod grace-center",
          staticStyle: { "margin-top": "30px" }
        },
        [_vm._v("- 活动说明 -")]
      ),
      _c("view", { staticClass: "grace-text grace-center" }, [
        _vm._v("活动说明文字内容...")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\VueStudy\\graceui-app\\main.js?{\"page\":\"pages%2FscratchCard%2FscratchCard\"}":
/*!************************************************************************************!*\
  !*** E:/VueStudy/graceui-app/main.js?{"page":"pages%2FscratchCard%2FscratchCard"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "E:\\VueStudy\\graceui-app\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _scratchCard = _interopRequireDefault(__webpack_require__(/*! ./pages/scratchCard/scratchCard.vue */ "E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_scratchCard.default));

/***/ }),

/***/ "E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue":
/*!*****************************************************************!*\
  !*** E:/VueStudy/graceui-app/pages/scratchCard/scratchCard.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scratchCard_vue_vue_type_template_id_5ab8955b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scratchCard.vue?vue&type=template&id=5ab8955b& */ "E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=template&id=5ab8955b&");
/* harmony import */ var _scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scratchCard.vue?vue&type=script&lang=js& */ "E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _scratchCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scratchCard.vue?vue&type=style&index=0&lang=css& */ "E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _scratchCard_vue_vue_type_template_id_5ab8955b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _scratchCard_vue_vue_type_template_id_5ab8955b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/VueStudy/graceui-app/pages/scratchCard/scratchCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** E:/VueStudy/graceui-app/pages/scratchCard/scratchCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./scratchCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** E:/VueStudy/graceui-app/pages/scratchCard/scratchCard.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./scratchCard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=template&id=5ab8955b&":
/*!************************************************************************************************!*\
  !*** E:/VueStudy/graceui-app/pages/scratchCard/scratchCard.vue?vue&type=template&id=5ab8955b& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_template_id_5ab8955b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./scratchCard.vue?vue&type=template&id=5ab8955b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\VueStudy\\graceui-app\\pages\\scratchCard\\scratchCard.vue?vue&type=template&id=5ab8955b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_template_id_5ab8955b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ASUS_AppData_Local_Temp_HZ$D_554_4918_HZ$D_554_4919_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_scratchCard_vue_vue_type_template_id_5ab8955b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\VueStudy\\graceui-app\\main.js?{\"page\":\"pages%2FscratchCard%2FscratchCard\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/scratchCard/scratchCard.js.map