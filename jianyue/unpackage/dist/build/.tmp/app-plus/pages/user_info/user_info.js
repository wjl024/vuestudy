(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user_info/user_info"],{"52f9":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"graceMaskView",props:{width:{type:String,default:"90%"},show:{type:Boolean,default:!1},bgcolor:{type:String,default:"#FFFFFF"}},methods:{close:function(){this.$emit("close")}}};e.default=s},"56ed":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("text",{staticClass:"info"},[t._v("常规设置")]),a("view",{staticClass:"block"},[a("view",{staticClass:"box per-avatar"},[t._v("更改头像"),a("image",{staticClass:"avatar",attrs:{src:t.avatar,eventid:"c79b7d18-0"},on:{tap:t.showActionSheet}})]),a("view",{staticClass:"box nickname"},[t._v("更改昵称"),a("view",{staticStyle:{"font-size":"35rpx",color:"#D3D3D3"}},[t._v(t._s(t.nickname))])]),a("view",{staticClass:"box",attrs:{eventid:"c79b7d18-1"},on:{tap:function(e){t.showdialog()}}},[t._v("更改性别"),a("view",{staticClass:"value"},[t._v(t._s(t.sex))])]),a("view",{staticClass:"box",attrs:{eventid:"c79b7d18-2"},on:{tap:function(e){t.showdialog1()}}},[t._v("更改生日"),a("view",{staticClass:"value"},[t._v(t._s(t.year)+"-"+t._s(t.month)+"-"+t._s(t.day))])]),a("view",{staticClass:"box"},[t._v("更改主页")]),a("view",{staticClass:"box",staticStyle:{border:"none"}},[t._v("编辑个人简介")])]),a("text",{staticClass:"info"},[t._v("绑定账号登录简阅")]),a("view",{staticStyle:{"margin-left":"5%",color:"#D3D3D3","margin-bottom":"15rpx","font-size":"25"}},[t._v("出于安全原因,你至少需要保留一种登录方式")]),t._m(0),a("hr"),a("view",{staticClass:"box1"},[t._v("社交账号是否显示在主页")]),a("hr"),a("view",{staticClass:"box1"},[t._v("绑定账号遇到问题")]),a("hr"),a("view",{staticClass:"box1"},[t._v("重置密码")]),a("navigator",{staticClass:"nav",attrs:{url:"../my/my","open-type":"navigateBack",delta:"2"}},[t._v("确定修改")]),a("graceMaskView",{attrs:{show:t.show,bgcolor:"#ffffff",mpcomid:"c79b7d18-1"}},[a("view",{staticClass:"mask-content"},[a("view",{staticClass:"mask-title"},[t._v("请选择性别")]),a("view",{staticClass:"unilist"},[a("radio-group",{attrs:{eventid:"c79b7d18-3",mpcomid:"c79b7d18-0"},on:{change:t.radioChange}},t._l(t.items,function(e,s){return a("label",{key:e.value,staticClass:"cell",staticStyle:{display:"flex"}},[a("view",[a("radio",{attrs:{value:e.value,checked:s===t.current}})],1),a("view",{staticClass:"list-name"},[t._v(t._s(e.name))])])})),a("view",{staticClass:"btn-group"},[a("text",{attrs:{eventid:"c79b7d18-4"},on:{tap:function(e){t.closedialog()}}},[t._v("取消")]),a("text",{staticStyle:{"margin-left":"50rpx"},attrs:{eventid:"c79b7d18-5"},on:{tap:function(e){t.closedialog()}}},[t._v("确定")])])],1)])]),a("graceMaskView",{attrs:{show:t.show1,bgcolor:"#ffffff",mpcomid:"c79b7d18-5"}},[a("view",{staticClass:"mask-content"},[a("view",{staticClass:"mask-title"},[t._v("请选择生日")]),a("view",{staticClass:"unilist"},[a("view",{staticClass:"datetime"},[t.visible?a("picker-view",{staticStyle:{height:"300rpx",width:"85%",margin:"0 auto","margin-bottom":"40rpx"},attrs:{"indicator-style":t.indicatorStyle,value:t.value,eventid:"c79b7d18-6"},on:{change:t.bindDateChange}},[a("picker-view-column",{attrs:{mpcomid:"c79b7d18-2"}},t._l(t.years,function(e,s){return a("view",{key:s,staticClass:"item"},[t._v(t._s(e)+"年")])})),a("picker-view-column",{attrs:{mpcomid:"c79b7d18-3"}},t._l(t.months,function(e,s){return a("view",{key:s,staticClass:"item"},[t._v(t._s(e)+"月")])})),a("picker-view-column",{attrs:{mpcomid:"c79b7d18-4"}},t._l(t.days,function(e,s){return a("view",{key:s,staticClass:"item"},[t._v(t._s(e)+"日")])}))],1):t._e()],1),a("view",{staticClass:"btn-group"},[a("text",{attrs:{eventid:"c79b7d18-7"},on:{tap:function(e){t.closedialog1()}}},[t._v("取消")]),a("text",{staticStyle:{"margin-left":"50rpx"},attrs:{eventid:"c79b7d18-8"},on:{tap:function(e){t.closedialog1()}}},[t._v("确定")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"block"},[a("view",{staticClass:"box-info"},[a("image",{attrs:{src:"../../static/phone.png"}}),a("view",{staticClass:"true"},[t._v("188****9609")])]),a("view",{staticClass:"box-info"},[a("image",{attrs:{src:"../../static/weibo-grey.png"}}),a("view",{staticClass:"false"},[t._v("未绑定")])]),a("view",{staticClass:"box-info"},[a("image",{attrs:{src:"../../static/wx.png"}}),a("view",{staticClass:"true"},[t._v("王杰磊")])]),a("view",{staticClass:"box-info"},[a("image",{attrs:{src:"../../static/qq-grey.png"}}),a("view",{staticClass:"false"},[t._v("未绑定")])]),a("view",{staticClass:"box-info",staticStyle:{border:"none"}},[a("image",{attrs:{src:"../../static/豆瓣.png"}}),a("view",{staticClass:"false"},[t._v("未绑定")])])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},"5a08":function(t,e,a){"use strict";a.r(e);var s=a("6497"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=i.a},"5c75":function(t,e,a){},6497:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("d231"));function i(t){return t&&t.__esModule?t:{default:t}}var n={data:function(){for(var e=new Date,a=[],s=e.getFullYear(),i=[],n=e.getMonth()+1,o=[],c=e.getDate(),r=1990;r<=e.getFullYear();r++)a.push(r);for(var l=1;l<=12;l++)i.push(l);for(var u=1;u<=31;u++)o.push(u);return{years:a,year:s,months:i,month:n,days:o,day:c,value:[9999,n-1,c-1],visible:!0,indicatorStyle:"height:50px; border-top:2px solid #D3D3D3; border-bottom:2px solid #D3D3D3;",sex:"男",nickname:"",avatar:"",userId:t.getStorageSync("login_key").userId,show:!1,show1:!1,items:[{value:"保密",name:"保密"},{value:"男",name:"男",checked:"true"},{value:"女",name:"女"}]}},onLoad:function(){},onShow:function(){var e=this;t.request({url:"http://localhost:8080/api/user/"+t.getStorageSync("login_key").userId,method:"GET",header:{"content-type":"application/json"},success:function(t){0===t.data.code&&(console.log(t.data.data+"————————————"),e.avatar=t.data.data.avatar,e.nickname=t.data.data.nickname)}})},methods:{bindDateChange:function(t){var e=t.detail.value;this.year=this.years[e[0]],this.month=this.months[e[1]],this.day=this.days[e[2]]},showdialog:function(){this.show=!0},showdialog1:function(){this.show1=!0},closedialog:function(){this.show=!1},closedialog1:function(){this.show1=!1},radioChange:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].value===t.target.value){this.current=e,this.sex=t.target.value;break}},showActionSheet:function(){console.log("show");var e=this;t.showActionSheet({itemList:["拍照","从相册选择"],success:function(a){console.log("选中了第"+(a.tapIndex+1)+"个按钮"),0==a.tapIndex&&t.chooseImage({count:1,sourceType:["camera"],success:function(a){t.saveImageToPhotosAlbum({filePath:a.tempFilePaths[0],success:function(){console.log("save success"),t.uploadFile({url:"http://localhost:8080/api/user/avatar",filePath:a.tempFilePaths[0],name:"file",formData:{id:e.userId},success:function(t){console.log(t.data),e.avatar=t.data,e.nickname=t.data}})}})}}),1==a.tapIndex&&t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(a){console.log(JSON.stringify(a.tempFilePaths)),t.uploadFile({url:"http://192.168.43.194:8080/api/user/avatar",filePath:a.tempFilePaths[0],name:"file",formData:{id:e.userId},success:function(t){console.log(t.data),e.avatar=t.data,e.nickname=t.data}})}})},fail:function(t){console.log(t.errMsg)}})}},components:{graceMaskView:s.default}};e.default=n}).call(this,a("6e42")["default"])},"75cf":function(t,e,a){"use strict";var s=a("cc14"),i=a.n(s);i.a},"94f8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("view",{staticClass:"grace-mask"},[t.show?a("view",{staticClass:"grace-mask-view",style:{width:t.width}},[a("view",{staticClass:"grace-mask-view-content",style:{background:t.bgcolor}},[t._t("default",null,{mpcomid:"ea9776ae-0"})],2)]):t._e()]):t._e()},i=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},a34b:function(t,e,a){"use strict";a.r(e);var s=a("56ed"),i=a("5a08");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("75cf");var o=a("2877"),c=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,"b33b1fbe",null);e["default"]=c.exports},b092:function(t,e,a){"use strict";a("9a07");var s=n(a("b0ce")),i=n(a("a34b"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},cc14:function(t,e,a){},d231:function(t,e,a){"use strict";a.r(e);var s=a("94f8"),i=a("fd52");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("e83d");var o=a("2877"),c=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},e83d:function(t,e,a){"use strict";var s=a("5c75"),i=a.n(s);i.a},fd52:function(t,e,a){"use strict";a.r(e);var s=a("52f9"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=i.a}},[["b092","common/runtime","common/vendor"]]]);