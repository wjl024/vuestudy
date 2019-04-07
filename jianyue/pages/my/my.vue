<template>
	<view class="container">
		<view class="top" v-if="!storageData.login">
			<view class="avatar-box">
				<image src="../../static/default.png" mode="scaleToFill" class="avatar"></image>
			</view>
			<view class="info-box">
				<navigator url="../signin/signin">点击登录</navigator>
			</view>
		</view>
		<view v-if="!storageData.login">
			<navigator url="../setting/setting">
				<button type="primary" >个人设置</button>
			</navigator>
			<navigator url="../register/register">
				<button class="primary" type="primary" >点击注册</button>
			</navigator>
		</view>
		<view class="top-login" v-if="storageData.login">
			<view class="avatar-box-login">
				<image :src="storageData.avatar" mode="scaleToFill" class="avatar"></image>
			</view>
			<view class="text-login">
				<view><text>{{ storageData.nickname }}</text></view>
				<view><navigator url="../setting/setting"><text class="settings">个人设置</text></navigator></view>
			</view>
			<view class="info-login">
				<view class="box"><view class="font">{{messages}}</view><view>文章</view></view>
				<view class="box"><view class="font">{{followed}}</view><view>关注</view></view>
				<view class="box"><view class="font">{{notices}}</view><view>消息</view></view>
				<view class="box"><view class="font">{{scores}}</view><view>积分</view></view>
			</view>
			<view class="article-login" v-for="(article,index) in articles" :key=index>
				<view>{{article.title}}</view>
				<view><text class="content">{{article.content}}</text></view>
				<view class="bottom"><view><image class="icon" :src="article.icon1"></image><image class="icon" :src="article.icon2"></image></view><view class="time"><text class="time-view">{{article.time}}</text></view></view>
			</view>
		</view>
	</view>
</template>

<script>
var loginRes, _self;
export default {
	data() {
		return {
			storageData: {},
			messages:10,
			followed:5,
			notices:66,
			scores:100,
			articles:[{
				id:1,
				title:'第一篇文章',
				content:'年轻的时候,我们要是犯了一些错误，总被年长的人教育道，“小子，你还不够成熟”。成熟到底是个什么东西呢？在我们年轻的时候，其实是没什么概念的。但是逐渐地，当你经历的事情越来越多，年纪越来越大，你逐渐地就感觉自己“成熟”起来了。如果非得要描述“成熟”到底是种什么感觉，那成熟大概就是：心态更加平和，心理承受能力更强、弹性更大，不以物喜、不以己悲，宠辱不惊；...',
				icon1:'../../static/commentflashnews.png',
				icon2:'../../static/like1.png',
				time:'刚刚'
			},
			{
				id:2,
				title:'第二篇文章',
				content:'在老子的《道德经》中，一直强调的就是一切顺其自然，用一种谦虚的态度去对待身边的人和事。所有的事情，以简单纯粹为主，老子的这样一个态度，其实特别适用于那些居功自傲的人。人生起起伏伏人生三起三落，在高峰的时候不骄傲，在低谷的时候不气馁才是应有的一种状态。老子在道德经中第28章复归于朴，其中有这样一句话叫做：知其雄，守其雌，为天下溪，为天下溪，常德不离，复归于婴儿。...',
				icon1:'../../static/commentflashnews.png',
				icon2:'../../static/like1.png',
				time:'1分钟前'
			},
			{
				id:3,
				title:'第三篇文章',
				content:'名著是具有较高艺术价值，能够经过时间考验经久不衰，能给后人以警世和深远影响的著作。在文学史中，诞生了一大批优秀的作家和作品，其中的经典语录，历久弥新，几十年后，依然能打动你我。1、《百年孤独》：过去都是假的，回忆是一条没有归途的路，以往的一切春天都无法复原，即使最狂热最坚贞的爱情，归根结底也不过是一种瞬息即逝的现实，唯有孤独永恒。2、《荆棘鸟》：回忆就是这样的，即使是那些充满深情厚爱的回忆也概莫能外，好像脑子里有一种无意识的愈合过程，尽管我们曾痛下决心永勿忘，但它依然能使创伤愈合。...',
				icon1:'../../static/commentflashnews.png',
				icon2:'../../static/like1.png',
				time:'1天前'
			},
			{
				id:4,
				title:'第四篇文章',
				content:'1.人世间最宽的是心地，心闲，心才宽，心正，事才少，活的是人生的豁达，走的是人生自在，人生宽处活，才是人生的家务事，人生知取舍，才是生命的真智慧。烦恼不是泉眼，弹指都在一挥间，感谢那些已经不记得，活好自己内心的那份坦率。这才是人生唯一的慈航。2.如果你爱万物，万物也必将爱你，这就是魅力。如果你不伤害万物，万物也必将不伤害你，这就是平安。如果你珍惜万物，万物也必将珍惜你，这就是长寿。如果你心怀万物，万物必将归属于你，这就是财富。如果你施恩万物，万物也必将施恩你，这就是幸福。...',
				icon1:'../../static/commentflashnews.png',
				icon2:'../../static/like1.png',
				time:'一周前'
			},
			{
				id:5,
				title:'第五篇文章',
				content:'记忆，就是时间匆匆流逝后，唯一能证明我们存在过的痕迹;记忆，就是当一切悄然逝去时，我们至少还能拥有的回忆;记忆，就是我们愿意深藏心底，在闲暇时牵出来细细品味的过往。只是当生活不断在向前方奔跑时，那份记忆中的美好会选取被记住还是遗忘　　始终处于奋笔疾书状态的我在不经意间撇向窗外，引入眼帘的是一大片的绿色。那片树木不知从几时起便存在了，也不知还将存在多少年，只是已经陪伴了我四年了，不知为何，竟对这些植物有了一种独特的感觉。枝叶随着吹过的微风细细摆动，嫩绿的树叶在明媚的阳光的照耀之下，泛着金光，分外迷眼....',
				icon1:'../../static/commentflashnews.png',
				icon2:'../../static/like1.png',
				time:'两天前'
			}
			]
		};
	},
	onLoad: function() {
	
	},
	onShow: function() {
		var _this=this;
		const loginKey = uni.getStorageSync('login_key');
		console.log("come");
		if (loginKey) {
			console.log(loginKey);
			this.storageData = {
				login: loginKey.login,
				nickname: loginKey.nickname,
				avatar:loginKey.avatar,
			};
			
		}else{
			this.storageData ={
				login: false
			}
		};
		uni.request({
			url: 'http://192.168.43.194:8080/api/user/' + uni.getStorageSync('login_key').userId,
			method: 'GET',
			header: { 'content-type': 'application/json' },
			success: res => {
				if (res.data.code === 0) {
					console.log(res.data.data+'————————————');
					this.storageData={
					avatar : res.data.data.avatar,
					nickname : res.data.data.nickname,
					login:loginKey.login,
					};
				}
			}
		});
	},
	methods: {
		
	}
};
</script>

<style scoped>
.primary{
	margin-top: 20upx;
}
.top {
	display: flex;
	height: 70px;
	margin-top: 5px;
}
.avatar-box{
	flex: 1 1 30%;
}
.info-box{
	flex: 1 1 70%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.avatar-box-login{
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 10px;
}
.text-login{
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 10px;
}
.settings{
	margin-left: 10px;
	color:green;
}
.info-login{
	width: 95%;
	margin: 0 auto;
	display: flex;
	margin-top: 20px;
}
.box{
	flex: 1 1 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-right:1px solid lightgrey ;
}
.font{
	font-weight: bold;
	font-size:50upx;
}
.article-login{
	padding-top:50upx;
	padding-bottom: 100upx;
	width: 95%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	border-bottom: 2px solid #EEEEEE;
}
.content{
	font-size: 35upx;
	color: darkgrey;
}
.bottom{
	margin-top: 25upx;
	display: flex;
	justify-content: space-between;
}
.icon{
	width:35px;
	height:35px;
	margin-right: 25upx;
}
.time-view{
	font-size: 35upx;
	color: #D3D3D3;
	margin-right: 25upx;
}
</style>