(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/info/info"],{"12cc":function(t,e,s){"use strict";s("9a07");var a=n(s("b0ce")),i=n(s("5ff2"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"43ec":function(t,e,s){"use strict";s.r(e);var a=s("dac4"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},"5ff2":function(t,e,s){"use strict";s.r(e);var a=s("d15b"),i=s("43ec");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("aef0");var c=s("2877"),r=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"339d0182",null);e["default"]=r.exports},"9a85":function(t,e,s){},aef0:function(t,e,s){"use strict";var a=s("9a85"),i=s.n(a);i.a},d15b:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"msg-header"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("view",{staticClass:"msg-bottom"},[s("view",{staticClass:"bottom-left"},[t.like?s("view",[s("image",{staticClass:"like",attrs:{src:"../../static/like.png",eventid:"413e5e2e-0"},on:{tap:function(e){t.iflike(1)}}}),s("text",{staticStyle:{"margin-left":"15rpx"}},[t._v(t._s(t.number))])]):t._e(),t.like?t._e():s("view",[s("image",{staticClass:"like",attrs:{src:"../../static/select-like.png",eventid:"413e5e2e-1"},on:{tap:function(e){t.notlike(1)}}}),s("text",{staticStyle:{"margin-left":"15rpx"}},[t._v(t._s(t.number))])])]),t._m(5)])]),s("view",{staticClass:"gift"},[s("text",{staticClass:"gift-title"},[t._v("小礼物走一走,来简书关注我")]),s("button",{staticClass:"gift-btn"},[t._v("赞赏支持")])],1),s("view",{staticClass:"msg-recommand"},[s("text",{staticClass:"recommand"},[t._v("相关推荐")]),t._l(t.msgs,function(e,a){return s("view",{key:a,staticClass:"msg2"},[s("view",{staticClass:"msg-recommand-left"},[s("text",{staticClass:"msgs-title"},[t._v(t._s(e.title))]),s("text",{staticClass:"read-number"},[t._v("阅读  "+t._s(e.number))])]),s("view",{staticClass:"msg-recommand-right"},[s("image",{attrs:{src:e.cover}})])])})],2),s("hr"),t._m(6),t._m(7),t._m(8),s("view",{staticClass:"bottom-bar"},[s("view",{staticClass:"bottom-bar-1"},[t._m(9),t._m(10),s("view",{staticClass:"praise"},[t.like?s("image",{staticClass:"img",attrs:{src:"../../static/like.png",eventid:"413e5e2e-2"},on:{tap:function(e){t.iflike(1)}}}):t._e(),t.like?t._e():s("image",{staticClass:"img",attrs:{src:"../../static/select-like.png",eventid:"413e5e2e-3"},on:{tap:function(e){t.notlike(1)}}}),s("text",{staticClass:"bar-info"},[t._v("喜欢 "+t._s(t.number))])]),t._m(11)])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"title"},[s("text",[t._v("一个比Spring Boot快44倍的Java框架")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"user-info"},[s("view",{staticClass:"user-info-left"},[s("image",{staticClass:"avatar",attrs:{src:"../../static/104.jpg"}}),s("text",{staticClass:"nickname"},[t._v("java高并发")])]),s("view",{staticClass:"followed"},[s("text",{staticClass:"followed"},[t._v("+ 关注")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"msg-info"},[s("text",{staticClass:"left"},[t._v("字数  1090·阅读 1035")]),s("text",{staticClass:"left"},[t._v("2019-04-04   22:12")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"text-content"},[s("text",{staticClass:"msg"},[t._v('最近栈长看到一个框架，官方号称可以比 Spring Boot 快 44 倍，居然这么牛逼，有这么神奇吗？今天带大家来认识一下。\n\n                    这个框架名叫：light-4j。\n\n                    官网简介：A fast, lightweight and more productive microservices framework\n\n                    很简单，翻译过来就是：一个快速、轻量级和更高效的微服务框架。\n\n                    为什么叫light-4j？\n                    全称应该是：Light for Java，意味着轻量级，并以闪电般的速度来使用 Java 编程。\n\n                    这个框架有什么用？\n                    1、降低成本\n\n                    为什么说它能降低成本，因为它速度非常快，占用内存也非常小。\n\n                    重点来了，它比类似 Spring Boot 这种内嵌 Tomcat 式的主流微服务框架平台要快 44 倍，并且只需要用其 1/5 内存，听起来是不是很牛逼，确实是节约了不少内存空间。\n\n                    这里有一份 benchmark 的测试报告，它与 Spring Boot 及其他微服务平台作了一个比较：\n\n                    详细报告：https://github.com/networknt/microservices-framework-benchmark\n\n                    很强大，性能与 Go 语言并肩，并且拥有更低的平均延迟。\n\n这里还有一份与其他 web 框架的对比：\n\n详细报告：https://www.techempower.com/benchmarks/#section=data-r15&hw=ph&test=plaintext\n\n性能表现非常靠前，吊打 Spring 等各种框架!\n\n2、丰富的特性\n\n带有启动/关闭钩子和各种中间件的插件架构\n分布式OAuth2 JWT安全验证作为框架的一部分\n基于OpenAPI规范进行请求和响应验证\n收集测量指标并支持服务和客户端在控制台显示\n全局运行时异常处理，如API异常及其他受检查异常\n在日志输出前加密敏感数据，如：信用卡、SIN号等\n为请求参数、请求头、BODY清除跨站攻击脚本\n重要信息或整个请求/响应的审计\n请求体支持各种类型的content-type\n配置标准化响应码及响应消息\n支持外部配置化Docker环境所有模块\n来自其他域名的跨域处理\n支持对外提供的服务限速处理\n服务发现与注册支持直连、Consul和Zookeeper\n客户端侧发现和负载平衡，消除代理层\n与Light-OAuth2紧密集成并支持可跟踪性\n栈长先介绍到这，大家感兴趣的可以去 Github 捣鼓……\n\nGithub地址：https://github.com/networknt/light-4j\n\n栈长有话说\n看完你可能觉得呵呵了，有人用吗？\n\n这个栈长我目前没有可靠数据，但这个框架的性能表现和内存消耗真的非常惊人，以及它的各种功能特性都值得借鉴。\n\n至于比 Spring Boot 框架要快 44 倍，这个大家也不用太纠结，Spring 发展到今天，经过国外各种大神的打磨，可以说是非常精湛。\n\nSpring 日益宠大的同时，其内部依赖集成了太多东西，在性能这方面没其他框架强，确实能够理解，但 Spring 的生态圈是没有任何框架可以比拟的。在追求性能的同时，它肯定也会牺牲很多东西，所以，我觉得一个生态繁荣的技术平台比追求性能更重要。\n\n最后，你们有公司用过这个框架吗？你对这个框架怎么看，欢迎留言讨论~\n\n欢迎工作一到五年的Java工程师朋友们加入Java高并发： 957734884，\n\n群内提供免费的Java架构学习资料（里面有高可用、高并发、高性能及分布式、Jvm性能调优、Spring源码，MyBatis，Netty,Redis,Kafka,Mysql,Zookeeper,Tomcat,Docker,Dubbo,Nginx等多个知识点的架构资料）\n\n合理利用自己每一分每一秒的时间来学习提升自己，不要再用"没有时间“来掩饰自己思想上的懒惰！趁年轻，使劲拼，给未来的自己一个交代')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"btn-box"},[s("view",{staticClass:"btn"},[t._v("Spring-Boot  >")]),s("view",{staticClass:"btn"},[t._v("Java高开发  >")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"bottom-left"},[s("image",{staticStyle:{"margin-right":"30rpx"},attrs:{src:"../../static/wx.png"}}),s("image",{staticStyle:{"margin-right":"30rpx"},attrs:{src:"../../static/朋友圈.png"}}),s("text",{staticClass:"more"},[t._v("···")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"comment"},[s("view",{staticClass:"comment-header"},[s("view",{staticClass:"comment-header-left",staticStyle:{"margin-left":"40rpx"}},[s("text",{staticClass:"comment-number"},[t._v("评论(1)")]),s("view",{staticClass:"condition",staticStyle:{"margin-left":"20rpx","margin-top":"45rpx"}},[t._v("只看作者")])]),s("view",{staticClass:"comment-header-right",staticStyle:{"margin-right":"40rpx"}},[s("text",{staticClass:"comment-number "},[t._v("按时间倒序")])])]),s("view",{staticClass:"comment-content"},[s("view",{staticClass:"comment-content-left"},[s("image",{attrs:{src:"../../static/104.jpg"}})]),s("view",{staticClass:"comment-content-right"},[s("text",{staticClass:"comment-nickname"},[t._v("LH_0811")]),s("text",{staticClass:"say"},[t._v("这样不是吊打 tomcat跟 springboot有啥关系， webflux是不是也快44倍，同样都可以抛弃 tomcat做前后端分离的 api。 Tom cat优势主要是可以使用前段模版，肯定没有纯 api性能高")]),s("view",{staticClass:"comment-bottom"},[s("view",{staticClass:"comment-bottom-left"},[s("text",{staticClass:"comment-info"},[t._v("2楼·04.06 10:50")])]),s("view",{staticClass:"comment-bottom-right"},[s("image",{attrs:{src:"../../static/comment-8a.png"}}),s("image",{attrs:{src:"../../static/thumb-up2.png"}})])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"comment-end"},[s("text",{staticClass:"end"},[t._v("--end--")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"write-comment"},[s("view",{staticClass:"write-comment-1"},[s("image",{attrs:{src:"../../static/write.png"}}),s("input",{staticClass:"writemsg",attrs:{type:"text",placeholder:"写下你的评论..."}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"praise"},[s("image",{staticClass:"img",attrs:{src:"../../static/赞赏收益.png"}}),s("text",{staticClass:"bar-info"},[t._v("赞赏")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"praise"},[s("image",{staticClass:"img",attrs:{src:"../../static/comment-8a.png"}}),s("text",{staticClass:"bar-info"},[t._v("评论 1")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"praise"},[s("image",{staticClass:"img",attrs:{src:"../../static/share.png"}}),s("text",{staticClass:"bar-info"},[t._v("分享")])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},dac4:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{like:!0,number:39,msgs:[{title:"SQL优化还能凭经验？这个工具能帮你智能优化SQL",number:1637,cover:"../../static/picture-1-1.jpg"},{title:"很火的Java题--判断一个整数是否是奇数",number:574,cover:"../../static/picture-1-1.jpg"},{title:"Vue实现一个图片懒加载插件",number:413,cover:"../../static/picture-1-1.jpg"}]}},onLoad:function(){},onShow:function(){},methods:{iflike:function(t){this.like=!this.like,this.number+=t},notlike:function(t){this.like=!this.like,this.number-=t}}};e.default=a}},[["12cc","common/runtime","common/vendor"]]]);