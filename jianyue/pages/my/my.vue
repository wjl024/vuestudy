<template>
	<view class="content">
		<view class="content-top">
			<view class="top-content">
				<view class="top-avatar">
					<image src="../../static/defaultavatar.png" style="width: 100%;height: 100%;" v-if="!storageData.login"></image>
					<image :src="storageData.avatar" style="width: 100%;height: 100%;border-radius: 50%;" mode="" v-if="storageData.login"></image>
				</view>
				<view class="login-area">
				<view class="login-area-left">
					<navigator url="../signin/signin" class="click-log" v-if="!storageData.login">点击登录</navigator>
					<navigator url="../user_info/user_info" class="click-log" v-if="storageData.login">{{storageData.nickname}}</navigator>
					<text class="list-info">立即领取简阅钻福利</text>
				</view>
				<view class="login-area-right">
					<navigator url="../register/register">点击注册</navigator>
				</view>
				</view>
			</view>
		</view>
		<view class="middle">
			<view class="middle-content">
				<view class="function1" v-for="(item,index) in functions" :key="index">
					<view><image :src="item.path" class="fun-img"></image></view>
					<view style="font-size: 35upx;margin-bottom: 10upx;">{{item.des}}</view>
					<view style="font-size: 25upx; color: #D3D3D3;">{{item.detail}}</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-content">
				<view class="sub-content">
					<text class="sub-list">简阅会员</text>
					<view class="right">
						<view class="list-info" style="margin-right: 15upx;display: flex;">限时赠简书钻<view class="point"></view></view>
						<view class="arrow"><image src="../../static/arrow-right-grey.png"></image></view>
					</view>
				</view>
				<view class="sub-content">
					<view class="left">
					<text class="sub-list">简阅活动</text>
					<view class="challenge">日更挑战</view>
					</view>
					<view class="right">
						<view class="list-info" style="margin-right: 15upx;display: flex;">万元奖金等你<view class="point"></view></view>
						<view class="arrow"><image src="../../static/arrow-right-grey.png"></image></view>
					</view>
				</view>
				<view class="sub-content">
					<navigator url="../shopping/shopping" class="sub-list">简东西</navigator>
					<view class="right">
						<view class="list-info" style="margin-right: 15upx;display: flex;">简阅人都爱买<view class="point"></view></view>
						<view class="arrow"><image src="../../static/arrow-right-grey.png"></image></view>
					</view>
				</view>
				<view class="sub-content">
					<text class="sub-list">我的钱包</text>
					<view class="right">
						<view class="list-info" style="margin-right: 25upx;">0张优惠券</view>
						<view class="arrow"><image src="../../static/arrow-right-grey.png"></image></view>
					</view>
				</view>
				<view class="sub-content">
					<text class="sub-list">我的专题/文集</text>
					<view class="right">
						<view class="arrow"><image src="../../static/arrow-right-grey.png"></image></view>
					</view>
				</view>
				<view class="sub-content" style="border: none;">
					<text class="sub-list">浏览历史</text>
					<view class="right">
						<view class="arrow"><image src="../../static/arrow-right-grey.png"></image></view>
					</view>
				</view>
				<hr/>
				<view class="sub-content">
					<navigator url="../setting/setting" class="sub-list">设置</navigator>
					<view class="right">
						<view class="arrow"><image src="../../static/arrow-right-grey.png"></image></view>
					</view>
				</view>
				<view class="sub-content" style="border: none;">
					<text class="sub-list">帮助与反馈</text>
					<view class="right">
						<view class="list-info" style="margin-right: 25upx;">有问题找这里</view>
						<view class="arrow"><image src="../../static/arrow-right-grey.png"></image></view>
					</view>
				</view>
				<hr/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				functions:[
					{
					path:'../../static/passage2.png',
					des:'我的文章',
					detail:'0篇私密'
				},
				{
					path:'../../static/Bookshelf.png',
					des:'我的书架',
					detail:'含已购内容'
				},
				{
					path:'../../static/collection-outline.png',
					des:'喜欢收藏'
				},
				{
					path:'../../static/Missionlist.png',
					des:'奖励任务',
					detail:'领简阅钻'
				}
				],
				storageData: {}
			};
		},
		onLoad() {
           
		},
		onShow: function() {
			var _this = this;
			const loginKey = uni.getStorageSync('login_key');
			console.log("come");
			if (loginKey) {
				console.log(loginKey);
				this.storageData = {
					login: loginKey.login,
					nickname: loginKey.nickname,
					avatar: loginKey.avatar,
				};

			} else {
				this.storageData = {
					login: false
				}
			};
			uni.request({
				url: 'http://localhost:8080/api/user/' + uni.getStorageSync('login_key').userId,
				method: 'GET',
				header: {
					'content-type': 'application/json'
				},
				success: res => {
					if (res.data.code === 0) {
						console.log(res.data.data + '————————————');
						this.storageData = {
							avatar: res.data.data.avatar,
							nickname: res.data.data.nickname,
							login: loginKey.login,
						};
					}
				}
			});
		},
		methods: {
			
	}
}
</script>

<style scoped>
	.content{
		width: 100%;
		background-color: #fdfcfe;	
	}
	.content-top{
		display: flex;
		width: 100%;
		height: 200upx;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
	}
	.top-content{
		width: 90%;
		margin: 0 auto;
		display: flex;
		height: 100%;
		align-items: center;
	}
	.top-avatar{
		width: 25%;
		height: 130upx;
	}
	.login-area{
		display: flex;
		margin-left: 20upx;
		justify-content: space-between;
		width: 100%;
	}
	.click-log{
		margin-bottom: 15upx;
		font-size: 50upx;
	}
	.list-info{
		font-size: 30upx;
		color: #A9A9A9;
	}
	.login-area-right{
		display: flex;
		align-items: center;
	}
	.middle{
		position: relative;
		top: 10upx;
		border-radius: 15upx;
		width: 95%;
		margin: 0 auto;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 220upx;
		box-shadow: 0upx 0upx 10upx #AAAAAA;
	}
	.middle-content{
		display: flex;
		width: 100%;
	}
    .function1{
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.fun-img{
		height: 60upx;
		width: 55upx;
		margin-bottom: 10upx;
	}
	.bottom{
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 20upx;
	}
	.arrow{
		width: 30upx;
		height: 30upx;
	}
	.arrow image{
		width: 100%;
		height: 100%;
	}
	.bottom-content{
		display: flex;
		flex-direction: column;
	}
	.sub-content{
		display: flex;
		height: 120upx;
		border-bottom: 1px solid #EEEEEE;
		width: 95%;
		position: relative;
		left:5%;
		justify-content: space-between;
		align-items: center;
	}
	.left{
		display: flex;
		align-items: center;
	}
	.right{
		display: flex;
		align-items: center;
		margin-right:5%;
	}
	hr{
		height:35upx;
		background-color: #EEEEEE;
	}
	.point{
		display:block;
	    background:#f00;
	    border-radius:50%;
	    width:8px;
	    height:8px;
	}
	.challenge{
		width: 150upx;
		height: 40upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		border-radius:60upx;
		color: #EA6F5A;
		background-color: #feeee9;
		margin-left: 30upx;
	}
	.sub-list{
		font-size: 35upx;
	}
</style>
