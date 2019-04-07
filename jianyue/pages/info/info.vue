<template>
	<view class="content">
		<view class="msg-header">
			<view class="title">
				<text>一个比Spring Boot快44倍的Java框架</text>
			</view>
			<view class="user-info">
				<view class="user-info-left">
				<image src="../../static/104.jpg" class="avatar"></image>
				<text class="nickname">java高并发</text>
				</view>
				<view class="followed"><text class="followed">+ 关注</text></view>
			</view>
			<view class="msg-info">
				<text class="left">字数 &nbsp;1090·阅读&nbsp;1035</text>
				<text class="left">2019-04-04 &nbsp; 22:12</text>
			</view>
			<view class="text-content">
				<text class="msg">
					最近栈长看到一个框架，官方号称可以比 Spring Boot 快 44 倍，居然这么牛逼，有这么神奇吗？今天带大家来认识一下。

                    这个框架名叫：light-4j。

                    官网简介：A fast, lightweight and more productive microservices framework

                    很简单，翻译过来就是：一个快速、轻量级和更高效的微服务框架。

                    为什么叫light-4j？
                    全称应该是：Light for Java，意味着轻量级，并以闪电般的速度来使用 Java 编程。

                    这个框架有什么用？
                    1、降低成本

                    为什么说它能降低成本，因为它速度非常快，占用内存也非常小。

                    重点来了，它比类似 Spring Boot 这种内嵌 Tomcat 式的主流微服务框架平台要快 44 倍，并且只需要用其 1/5 内存，听起来是不是很牛逼，确实是节约了不少内存空间。

                    这里有一份 benchmark 的测试报告，它与 Spring Boot 及其他微服务平台作了一个比较：

                    详细报告：https://github.com/networknt/microservices-framework-benchmark

                    很强大，性能与 Go 语言并肩，并且拥有更低的平均延迟。

这里还有一份与其他 web 框架的对比：

详细报告：https://www.techempower.com/benchmarks/#section=data-r15&hw=ph&test=plaintext

性能表现非常靠前，吊打 Spring 等各种框架!

2、丰富的特性

带有启动/关闭钩子和各种中间件的插件架构
分布式OAuth2 JWT安全验证作为框架的一部分
基于OpenAPI规范进行请求和响应验证
收集测量指标并支持服务和客户端在控制台显示
全局运行时异常处理，如API异常及其他受检查异常
在日志输出前加密敏感数据，如：信用卡、SIN号等
为请求参数、请求头、BODY清除跨站攻击脚本
重要信息或整个请求/响应的审计
请求体支持各种类型的content-type
配置标准化响应码及响应消息
支持外部配置化Docker环境所有模块
来自其他域名的跨域处理
支持对外提供的服务限速处理
服务发现与注册支持直连、Consul和Zookeeper
客户端侧发现和负载平衡，消除代理层
与Light-OAuth2紧密集成并支持可跟踪性
栈长先介绍到这，大家感兴趣的可以去 Github 捣鼓……

Github地址：https://github.com/networknt/light-4j

栈长有话说
看完你可能觉得呵呵了，有人用吗？

这个栈长我目前没有可靠数据，但这个框架的性能表现和内存消耗真的非常惊人，以及它的各种功能特性都值得借鉴。

至于比 Spring Boot 框架要快 44 倍，这个大家也不用太纠结，Spring 发展到今天，经过国外各种大神的打磨，可以说是非常精湛。

Spring 日益宠大的同时，其内部依赖集成了太多东西，在性能这方面没其他框架强，确实能够理解，但 Spring 的生态圈是没有任何框架可以比拟的。在追求性能的同时，它肯定也会牺牲很多东西，所以，我觉得一个生态繁荣的技术平台比追求性能更重要。

最后，你们有公司用过这个框架吗？你对这个框架怎么看，欢迎留言讨论~

欢迎工作一到五年的Java工程师朋友们加入Java高并发： 957734884，

群内提供免费的Java架构学习资料（里面有高可用、高并发、高性能及分布式、Jvm性能调优、Spring源码，MyBatis，Netty,Redis,Kafka,Mysql,Zookeeper,Tomcat,Docker,Dubbo,Nginx等多个知识点的架构资料）

合理利用自己每一分每一秒的时间来学习提升自己，不要再用"没有时间“来掩饰自己思想上的懒惰！趁年轻，使劲拼，给未来的自己一个交代
				</text>
			</view>
			<view class="btn-box">
				<view class="btn">Spring-Boot&nbsp;&nbsp;></view>
				<view class="btn">Java高开发&nbsp;&nbsp;></view>
			</view>
			<view class="msg-bottom">
				<view class="bottom-left">
				<view v-if="like"><image src="../../static/like.png" class="like" @tap="iflike(1)"></image><text style="margin-left: 15upx;">{{number}}</text></view>
				<view v-if="!like"><image src="../../static/select-like.png" class="like"@tap="notlike(1)"></image><text style="margin-left: 15upx;">{{number}}</text></view>
				</view>
				<view class="bottom-left">
					<image src="../../static/wx.png" style="margin-right: 30upx;"></image>
					<image src="../../static/朋友圈.png" style="margin-right: 30upx;"></image>
					<text class="more">···</text>
				</view>
			</view>
		</view>
		<view class="gift">
			<text class="gift-title">小礼物走一走,来简书关注我</text>
			<button class="gift-btn">赞赏支持</button>
		</view>
		<view class="msg-recommand">
			<text class="recommand">相关推荐</text>
			<view class="msg2" v-for="(msg,index) in msgs" :key=index >
				<view class="msg-recommand-left">
				<text class="msgs-title">{{msg.title}}</text>
				<text class="read-number">阅读&nbsp;&nbsp;{{msg.number}}</text>
				</view>
				<view class="msg-recommand-right">
					<image :src="msg.cover"></image>
				</view>
			</view>
		</view>
		<hr/>
		<view class="comment">
			<view class="comment-header">
				<view class="comment-header-left" style="margin-left: 40upx;">
				<text class="comment-number">评论(1)</text>
				<view class="condition" style="margin-left: 20upx; margin-top: 45upx;">只看作者</view>
				</view>
				<view class="comment-header-right" style="margin-right: 40upx;">
					<text class="comment-number ">按时间倒序</text>
				</view>
			</view>
			<view class="comment-content">
				<view class="comment-content-left">
					<image src="../../static/104.jpg"></image>
				</view>
				<view class="comment-content-right">
					<text class="comment-nickname">LH_0811</text>
					<text class="say">这样不是吊打 tomcat跟 springboot有啥关系， webflux是不是也快44倍，同样都可以抛弃 tomcat做前后端分离的 api。 Tom cat优势主要是可以使用前段模版，肯定没有纯 api性能高</text>
					<view class="comment-bottom">
						<view class="comment-bottom-left">
							<text class="comment-info">2楼·04.06&nbsp;10:50</text>
						</view>
						<view class="comment-bottom-right">
							<image src="../../static/comment-8a.png"></image>
							<image src="../../static/thumb-up2.png"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="comment-end">
		<text class="end">--end--</text>
		</view>
		<view class="write-comment">
			<view class="write-comment-1">
			<image src="../../static/write.png"></image>
			<input type="text" class="writemsg" placeholder="写下你的评论..." />
			</view>
		</view>
		<view class="bottom-bar">
			<view class="bottom-bar-1">
			<view class="praise">
				<image class="img" src="../../static/赞赏收益.png"></image>
				<text class="bar-info">赞赏</text>
			</view>
			<view class="praise">
				<image class="img" src="../../static/comment-8a.png"></image>
				<text class="bar-info">评论&nbsp;1</text>
			</view>
			<view class="praise">
				<image class="img" src="../../static/like.png" v-if="like" @tap="iflike(1)"></image>
				<image class="img" src="../../static/select-like.png" v-if="!like" @tap="notlike(1)"></image>
				<text class="bar-info">喜欢&nbsp;{{number}}</text>
			</view>
			<view class="praise">
				<image class="img" src="../../static/share.png"></image>
				<text class="bar-info">分享</text>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				like:true,
				number:39,
				msgs:[{
					title:'SQL优化还能凭经验？这个工具能帮你智能优化SQL',
					number:1637,
					cover:'../../static/picture-1-1.jpg'
				},
				{
					title:'很火的Java题--判断一个整数是否是奇数',
					number:574,
					cover:'../../static/picture-1-1.jpg'
				},
				{
					title:'Vue实现一个图片懒加载插件',
					number:413,
					cover:'../../static/picture-1-1.jpg'
				}
				]
			}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods:{
			iflike:function(num){
				this.like=!this.like;
				this.number+=num;
			},
			notlike:function(num){
				this.like=!this.like;
				this.number-=num;
			}
		}
	}
</script>

<style scoped="scoped">
	.content{
		width: 100%;
	}
	.msg-header{
		width: 95%;
		margin: 0 auto;
		position: relative;
		top: 20upx;
		border-bottom: 1px solid #D3D3D3;
	}
	.title{
		font-size: 60upx;
		font-weight: bold;
	}
	.user-info{
		margin-top:30upx;
		margin-bottom:30upx;
		display: flex;
		height:100upx;
		align-items: center;
		justify-content: space-between;
	}
	.user-info-left{
		display: flex;
		align-items: center;
	}
	.nickname{
		margin-left: 20upx;
	}
	.followed{
		width: 180upx;
		height: 70upx;
		border-radius: 10upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		background-color: #19AD1A;
	}
	.msg-info{
		display: flex;
		align-items: center;
		justify-content:space-between;
		margin-bottom:35upx;
	}
	.left{
		color:#AAAAAA;
		font-size: 30upx;
	    font-weight: 300;
	}
	.btn-box{
		width:100%;
		margin: 0 auto;
		position: relative;
		top: 30upx;
		display: flex;
	}
	.btn{
		border: 1px solid #EA6F5A;
		color: #EA6F5A;
		font-size: 35upx;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 65upx;
		width: 265upx;
		margin-right: 20upx;
		border-radius: 10upx;
	}
	.msg-bottom{
		display: flex;
		justify-content: space-between;
		margin-top:60upx;
		margin-bottom: 30upx;
	}
	.bottom-left{
		display: flex;
		color: #8a8a8a;
		align-items: center;
	}
	.bottom-left image{
		width: 30px;
		height: 40upx;
	}
	.gift{
		margin-top: 60upx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.gift-title{
		letter-spacing: 8upx;
	}
	.gift-btn{
		width: 210upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30upx;
		color: #FFFFFF;
		background-color:#EA6F5A ;
		border-radius: 10upx;
	}
	.msg-recommand{
		width:95%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
	.recommand{
		margin-top: 60upx;
		color: #AAAAAA;
		font-size: 40upx;
		margin-bottom: 2upx;
	}
	.msg2{
		border-bottom: 1px solid #D3D3D3;
		display: flex;
		height:220upx;
		align-items: center;
		justify-content: space-between;
	}
	.msg-recommand-left{
		display: flex;
		flex-direction: column;
	}
	.msg-recommand-right image{
		width: 180upx;
		height: 150upx;
	}
	.msgs-title{
		letter-spacing: 3upx;
	}
	.read-number{
		font-size: 35upx;
		color: #AAAAAA;
		margin-top: 10upx;
	}
	hr{
		border: 10px solid #EEEEEE;
		width: 100%;
	}
	.comment{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.comment-header{
		background-color: #F4F4F4;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.comment-number{
		font-size: 40upx;
		color: #A9A9A9;
		font-weight: 500;
	}
	.comment-header-left{
		display: flex;
		align-items: center;
	}
	.condition{
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1upx solid #C7C7CD;
		color: #A9A9A9;
		height: 50upx;
		width: 150upx;
		font-size: 30upx;
		font-weight: 300;
		margin-bottom: 40upx;
	}
	.comment-content{
		display: flex;
		width: 95%;
		margin: 0 auto;
	}
	.comment-content-left image{
		margin-top: 40upx;
		margin-right: 25upx;
		margin-left: 25upx;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
	}
	.comment-content-right{
		width: 100%;
		margin-top: 40upx;
		display: flex;
		flex-direction: column;
	}
	.comment-nickname{
		color: #000000;
		font-size: 40upx;
		font-weight: bold;
	}
	.say{
		margin-top: 20upx;
		line-height: 50upx;
	}
	.comment-bottom{
		display: flex;
		margin-top: 40upx;
		justify-content: space-between;
	}
	.comment-info{
		font-size: 35upx;
		color: #AAAAAA;
	}
	.comment-bottom-right image{
		width: 30px;
		height: 40upx;
		margin-left: 40upx;
	}
	.comment-end{
		width: 100%;
		display: flex;
		margin-bottom: 40upx;
		margin-top: 80upx;
		justify-content: center;
		align-items: center;
	}
	.end{
		font-size: 35upx;
		color: #AAAAAA;
	}
	.write-comment{
		margin-bottom: 120upx;
		width: 100%;
		height: 120upx;
		display: flex;
		align-items: center;
		border-top:1upx solid #EEEEEE ;
	}
	.write-comment-1{
		display: flex;
		align-items: center;
		border-radius: 5upx;
		width: 90%;
		height: 90upx;
		margin: 0 auto;
		border: 1upx solid #EEEEEE;
		background-color: #F0F0F0;
	}
	.write-comment-1 image{
		width: 30upx;
		height: 40upx;
		margin-left: 20upx;
		margin-right: 20upx;
	}
	.bottom-bar{
		position: fixed;
		background-color: #FFFFFF;
		bottom: 0;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		height: 120upx;
		border-top:1upx solid #EEEEEE ;
	}
	.bottom-bar-1{
		display: flex;
		width: 80%;
		margin: 0 auto;
	}
	.praise{
		flex: 1 1 25%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.praise image{
		width: 40upx;
		height: 40upx;
	}
	.bar-info{
		margin-top: 10upx;
		font-size: 30upx;
		color: #8A8A8A;
	}
</style>
