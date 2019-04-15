<template>
	<view class="content">
		<view class="msg-header">
			<view class="title">
				<text>深入理解Mybatis插件开发</text>
			</view>
			<view class="user-info">
				<view class="user-info-left">
				<image src="../../static/104.jpg" class="avatar"></image>
				<text class="nickname">java高并发</text>
				</view>
				<view class="followed"><text class="followed">+ 关注</text></view>
			</view>
			<view class="msg-info">
				<text class="left">字数 &nbsp;2476·阅读&nbsp;514</text>
				<text class="left">2019-03-09 &nbsp; 15:13</text>
			</view>
			<view class="text-content">
				<view class="msg">
					<text class="title1">阅读目录</text>\n	
							
							
1.背景
2.Mybatis插件典型适用场景
3.Mybatis插件介绍
4.Mybatis插件实现机制
5.Mybatis插件开发例子
6.小结
\n\n
<text class="title1">背景</text>\n\n
关于Mybatis插件，大部分人都知道，也都使用过，但很多时候，我们仅仅是停留在表面上，知道Mybatis插件可以在DAO层进行拦截，如打印执行的SQL语句日志，做一些权限控制，分页等功能；但对其内部实现机制，涉及的软件设计模式，编程思想往往没有深入的理解。

本篇案例将帮助读者对Mybatis插件的使用场景，实现机制，以及其中涉及的编程思想进行一个小结，希望对以后的编程开发工作有所帮助。

注：本案例以mybatis 3.4.7-SNAPSHOT版本为例。

PS：文章是挺久之前写的，当时花了一些心思，存到电脑的word里，今天正好看到，就是里面的源码都是图片，哈哈哈，凑合着看吧。
\n\n
<text class="title1">Mybatis插件典型适用场景</text>\n\n
分页功能

mybatis的分页默认是基于内存分页的（查出所有，再截取），数据量大的情况下效率较低，不过使用mybatis插件可以改变该行为，只需要拦截StatementHandler类的prepare方法，改变要执行的SQL语句为分页语句即可；

公共字段统一赋值

一般业务系统都会有创建者，创建时间，修改者，修改时间四个字段，对于这四个字段的赋值，实际上可以在DAO层统一拦截处理，可以用mybatis插件拦截Executor类的update方法，对相关参数进行统一赋值即可；

性能监控

对于SQL语句执行的性能监控，可以通过拦截Executor类的update, query等方法，用日志记录每个方法执行的时间；

其它

其实mybatis扩展性还是很强的，基于插件机制，基本上可以控制SQL执行的各个阶段，如执行阶段，参数处理阶段，语法构建阶段，结果集处理阶段，具体可以根据项目业务来实现对应业务逻辑。
\n\n
<text class="title1">Mybatis插件介绍</text>\n\n
什么是Mybatis插件\n

与其称为Mybatis插件，不如叫Mybatis拦截器，更加符合其功能定位，实际上它就是一个拦截器，应用代理模式，在方法级别上进行拦截。

支持拦截的方法\n

执行器Executor（update、query、commit、rollback等方法）；
参数处理器ParameterHandler（getParameterObject、setParameters方法）；
结果集处理器ResultSetHandler（handleResultSets、handleOutputParameters等方法）；
SQL语法构建器StatementHandler（prepare、parameterize、batch、update、query等方法）；
拦截阶段\n

那么这些类上的方法都是在什么阶段被拦截的呢？为理解这个问题，我们先看段简单的代码（摘自mybatis源码中的单元测试SqlSessionTest类），来了解下典型的mybatis执行流程，如下代码所示：


以上代码主要完成以下功能：\n

读取mybatis的xml配置文件信息
通过SqlSessionFactoryBuilder创建SqlSessionFactory对象
通过SqlSessionFactory获取SqlSession对象
执行SqlSession对象的selectList方法，查询结果
关闭SqlSession
如下是时序图，在整个时序图中，涉及到mybatis插件部分已标红，基本上就是体现在上文中提到的四个类上，对这些类上的方法进行拦截。

<image src="../../static/img1.jpg" style="margin-top:40upx;margin-bottom:40upx; width:100%;height: 80upx;"></image>
\n\n
<text class="title1">Mybatis插件实现机制</text>\n\n
插件配置信息的加载

先来看下mybatis是如何加载插件配置的，对应的xml配置信息如下：

<image src="../../static/img2.jpg" style="margin-top:40upx;margin-bottom:40upx; width: 100%;height: 180upx;"></image>
对应的解析代码如下，主要做以下工作：

根据解析到的类信息创建Interceptor对象；
调用setProperties方法设置属性变量；
添加到Configuration的interceptorChain拦截器链中；
<image src="../../static/img3.jpg" style="margin-top:40upx;margin-bottom:40upx; width: 100%;height: 120upx;"></image>
以上逻辑对应的时序图如下：


代理对象的生成

Mybatis插件的实现机制主要是基于动态代理实现的，其中最为关键的就是代理对象的生成，所以有必要来了解下这些代理对象是如何生成的。

Executor代理对象

ParameterHandler代理对象

ResultSetHandler代理对象

<image src="../../static/img6.jpg" style="margin-top:40upx;margin-bottom: 40upx; width: 100%;height: 50upx;"></image>
StatementHandler代理对象

观察源码，发现这些可拦截的类对应的对象生成都是通过InterceptorChain的pluginAll方法来创建的，进一步观察pluginAll方法，如下：

遍历所有拦截器，调用拦截器的plugin方法生成代理对象，注意生成代理对象重新赋值给target，所以如果有多个拦截器的话，生成的代理对象会被另一个代理对象代理，从而形成一个代理链条，执行的时候，依次执行所有拦截器的拦截逻辑代码；

接下来看一下我们在编写拦截器的时候，一个典型的plugin方法实现方式，如下：

再进一步查看wrap方法，如下：

典型的动态代理实现，调用的是Proxy.newProxyInstance方法来生成代理对象。

以上逻辑对应的时序图如下，这里我们假设声明了两个拦截器，那么在创建target代理对象的时候，最终返回的代理对象proxy2，实际上代理了proxy1，而proxy1又代理了target，：

拦截逻辑的执行

由于真正去执行Executor、ParameterHandler、ResultSetHandler和StatementHandler类中的方法的对象是代理对象（建议将代理对象转为class文件，反编译查看其结构，帮助理解），所以在执行方法时，首先调用的是Plugin类（实现了InvocationHandler接口）的invoke方法，如下：

首先根据执行方法所属类获取拦截器中声明需要拦截的方法集合；

判断当前方法需不需要执行拦截逻辑，需要的话，执行拦截逻辑方法（即Interceptor接口的intercept方法实现），不需要则直接执行原方法。

可以关注下Interceptor接口的intercept方法实现，一般需要用户自定义实现逻辑，其中有一个重要参数，即Invocation类，通过改参数我们可以获取执行对象，执行方法，以及执行方法上的参数，从而进行各种业务逻辑实现，一般在该方法的最后一句代码都是invocation.proceed()（内部执行method.invoke方法），否则将无法执行下一个拦截器的intercept方法。

以上逻辑对应的时序图如下，这里我们以执行executor对象的query方法为例，且假设有两个拦截器存在：

				</view>
				<image src="../../static/img7.jpg" style="margin-top:20upx;margin-bottom: 20upx; width:100%;height: 220upx;"></image>
			</view>
			<view class="btn-box">
				<view class="btn">...</view>
			</view>
			<view class="msg-bottom">
				<view class="bottom-left">
				<view v-if="like"><image src="../../static/like.png" class="like" @tap="iflike(1)"></image><text style="margin-left: 15upx;">{{number}}</text></view>
				<view v-if="!like"><image src="../../static/select-like.png" class="like" @tap="notlike(1)"></image><text style="margin-left: 15upx;">{{number}}</text></view>
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
				<text class="comment-number">评论(0)</text>
				<view class="condition" style="margin-left: 20upx; margin-top: 45upx;">只看作者</view>
				</view>
				<view class="comment-header-right" style="margin-right: 40upx;">
					<text class="comment-number ">按时间倒序</text>
				</view>
			</view>
			<view class="comment-content">
				<image src="../../static/icon-comments.png" style="width: 50%; height:150upx ;"></image>
				<view class="null-comment" style="width: 85%; display: flex;align-items: center;justify-content: center; margin-top: 20upx;">智慧如你,不想<navigator class="release">发表一点看法</navigator>咩~</view>
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
				<text class="bar-info">评论&nbsp;0</text>
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
	</view>
</template>

<script>
	export default{
		data(){
			return{
				like:true,
				number:40,
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
	.msg{
		display: flex;
		flex-direction: column;
	}
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
	.title1{
		font-size: 60upx;
		font-weight: bold;
		margin-top: 40px;
		margin-bottom: 40px;
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
		width: 100upx;
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
		flex-direction: column;
		height: 450upx;
		align-items: center;
		justify-content: center;
		width: 95%;
		margin: 0 auto;
	}
	.null-comment{
		font-size: 35upx;
		color: #AAAAAA;
		letter-spacing: 2upx;
	}
	.release{
		color: #3194D0;
		font-size: 35upx;
		letter-spacing: 2upx;
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

