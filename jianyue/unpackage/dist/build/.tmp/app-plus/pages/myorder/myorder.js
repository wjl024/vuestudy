(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myorder/myorder"],{"14b1":function(t,i,e){"use strict";var a=e("7de8"),s=e.n(a);s.a},"3b90":function(t,i,e){"use strict";e.r(i);var a=e("5411"),s=e("6e2c");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("14b1");var c=e("2877"),r=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,"1f69613e",null);i["default"]=r.exports},"4d14":function(t,i,e){"use strict";e("9a07");var a=n(e("b0ce")),s=n(e("3b90"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},5411:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"content"},[e("view",{staticClass:"status_bar"},[e("view",{staticClass:"top_view"},[e("view",{staticClass:"top_view-left"},[e("image",{staticStyle:{width:"80rpx",height:"70rpx","margin-right":"6%"},attrs:{src:"../../static/arrow-down.png",eventid:"2f306a98-0"},on:{tap:t.backto}}),e("view",{staticClass:"nav-title"},[t._v("会员主页")])]),e("view",{staticClass:"top_view-right",attrs:{"data-target":"bottomModal",eventid:"2f306a98-1"},on:{tap:t.showModal}},[t._v("分享")])])]),t._m(0),t._m(1),e("view",{staticClass:"lists"},t._l(t.lists,function(i,a){return e("view",{key:a,staticClass:"list"},[e("view",{staticClass:"row1"},[t._v(t._s(i.num))]),e("view",{staticClass:"row2"},[t._v(t._s(i.name))])])})),e("view",{staticClass:"items"},[t._m(2),e("view",{staticClass:"item-content"},t._l(t.items,function(i,a){return e("view",{key:a,staticClass:"item"},[e("image",{staticStyle:{width:"65rpx",height:"65rpx","margin-bottom":"10rpx"},attrs:{src:i.icon}}),e("view",{staticClass:"item-name"},[t._v(t._s(i.name))])])}))]),e("view",{staticClass:"items1"},t._l(t.listmore,function(i,a){return e("view",{key:a,staticClass:"item1"},[e("view",{staticStyle:{display:"flex","align-items":"center"}},[e("image",{staticStyle:{width:"35rpx",height:"35rpx","margin-right":"15rpx"},attrs:{src:i.icon}}),e("view",{staticClass:"lm-name"},[t._v(t._s(i.name))])]),t._m(3,!0)])})),e("view",{staticClass:"items1"},t._l(t.itemmore,function(i,a){return e("view",{key:a,staticClass:"item1"},[e("view",{staticStyle:{display:"flex","align-items":"center"}},[e("image",{staticStyle:{width:"35rpx",height:"35rpx","margin-right":"20rpx"},attrs:{src:i.icon}}),e("view",{staticClass:"lm-name"},[t._v(t._s(i.name))])]),t._m(4,!0)])})),t._m(5),t._m(6),e("view",{staticClass:"tabbar"},[t._m(7),e("view",{staticClass:"buy"},[t._v("全部商品")]),e("navigator",{staticClass:"buy",attrs:{url:"../cart/cart"}},[t._v("购物车")]),e("view",{staticClass:"buy",attrs:{eventid:"2f306a98-2"},on:{tap:t.toMyOrder}},[t._v("我的订单")])],1),e("view",{staticClass:"cu-modal bottom-modal",class:"bottomModal"==t.modalName?"show":"",attrs:{eventid:"2f306a98-4"},on:{tap:t.hideModal,touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[e("view",{staticClass:"cu-dialog"},[e("view",{staticClass:"share-content"},t._l(t.shares,function(i,a){return e("view",{key:a,staticClass:"unit"},[e("view",{staticClass:"share",attrs:{eventid:"2f306a98-3-"+a},on:{tap:function(e){t.shareto(i)}}},[e("image",{staticClass:"share-icon",attrs:{src:i.icon}})]),e("view",{staticClass:"share-info"},[t._v(t._s(i.name))])])}))])])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"top"},[e("view",{staticClass:"top-content"},[e("image",{staticClass:"avatar-my",attrs:{src:"../../static/100.jpg"}}),e("view",{staticClass:"my-name"},[t._v("wjl")])]),e("view",{staticClass:"top-bottom"},[e("view",{staticClass:"shop-name"},[t._v("简东西")]),e("view",{staticClass:"vip"},[e("view",{staticStyle:{color:"#FFFFFF","font-size":"26rpx","margin-right":"10rpx"}},[t._v("成为会员")]),e("image",{staticStyle:{width:"28rpx",height:"28rpx"},attrs:{src:"../../static/arrow-right-grey.png"}})])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"bind"},[e("view",{staticClass:"bind-desc"},[t._v("绑定手机号,同步全渠道订单和优惠券")]),e("view",{staticClass:"bind-btn"},[t._v("绑定")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"items-header"},[e("view",{staticClass:"header-name"},[t._v("我的订单")]),e("view",{staticClass:"header-right"},[e("view",{staticClass:"look-all"},[t._v("查看全部订单")]),e("image",{staticStyle:{width:"28rpx",height:"28rpx","margin-left":"20rpx"},attrs:{src:"../../static/arrow-right-grey.png"}})])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticStyle:{display:"flex","align-items":"center","margin-right":"2.5%"}},[e("image",{staticStyle:{width:"25rpx",height:"25rpx"},attrs:{src:"../../static/arrow-right-grey.png"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticStyle:{display:"flex","align-items":"center","margin-right":"2.5%"}},[e("image",{staticStyle:{width:"25rpx",height:"25rpx"},attrs:{src:"../../static/arrow-right-grey.png"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"footer"},[e("view",{staticClass:"footer-content"},[t._v("店铺主页")]),e("view",{staticClass:"footer-content"},[t._v("个人中心")]),e("view",{staticClass:"footer-content"},[t._v("店铺信息")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"tag"},[e("view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e("image",{staticStyle:{width:"50rpx",height:"50rpx"},attrs:{src:"../../static/thumbup-full.png"}}),e("view",{staticStyle:{"font-size":"40rpx",color:"#8A8A8A","margin-left":"15rpx"}},[t._v("有赞")])]),e("view",{staticClass:"support"},[t._v("有赞提供技术支持")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"img-bottom"},[e("image",{attrs:{src:"../../static/home.png"}})])}];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"6e2c":function(t,i,e){"use strict";e.r(i);var a=e("bbbb"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},"7de8":function(t,i,e){},bbbb:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{modalName:null,shares:[{id:1,icon:"../../static/wx.png",name:"微信好友"},{id:2,icon:"../../static/朋友圈.png",name:"微信朋友圈"},{id:3,icon:"../../static/weibo.png",name:"新浪微博"},{id:4,icon:"../../static/qq_zone.png",name:"QQ空间"},{id:5,icon:"../../static/qq-color.png",name:"QQ"},{id:6,icon:"../../static/link.png",name:"复制链接"},{id:7,icon:"../../static/more.png",name:"更多"},{id:8,icon:"../../static/web.png",name:"浏览器打开"}],lists:[{num:"0.00",name:"余额"},{num:0,name:"积分"},{num:0,name:"卡"},{num:0,name:"券码"}],items:[{icon:"../../static/待支付.png",name:"待付款"},{icon:"../../static/待发货.png",name:"待发货"},{icon:"../../static/待收货.png",name:"待收货"},{icon:"../../static/待评价.png",name:"待评价"},{icon:"../../static/售后退款.png",name:"退款/售后"}],listmore:[{icon:"../../static/icon_mission.png",name:"任务中心"},{icon:"../../static/cart-black.png",name:"购物车"},{icon:"../../static/分销员中心.png",name:"分销员中心"},{icon:"../../static/返现.png",name:"返现"},{icon:"../../static/bag.png",name:"赠品"},{icon:"../../static/course.png",name:"课程"}],itemmore:[{icon:"../../static/friendsettings.png",name:"账号设置"},{icon:"../../static/profile.png",name:"个人信息"},{icon:"../../static/location_light-1.png",name:"收货地址"}]}},onLoad:function(){},onShow:function(){},methods:{shareto:function(i){2==i.id&&t.share({provider:"weixin",scene:"WXSceneTimeline",type:0,title:"helloWorld",imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",href:"https://uniapp.dcloud.io",summary:"我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},toMyOrder:function(){t.navigateTo({url:"../myorder/myorder"})},backto:function(){t.navigateBack({delta:1})}}};i.default=e}).call(this,e("6e42")["default"])}},[["4d14","common/runtime","common/vendor"]]]);