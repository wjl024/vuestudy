<template>
	<view class="content">
		<view class="status_bar">
			<view class="top_view">
				<view class="top_view-left">
					<image @tap="backto" src="../../static/arrow-down.png" style="width: 80upx;height: 70upx;margin-right: 6%;"></image>
					<view class="nav-title">会员主页</view>
				</view>
				<view class="top_view-right" @tap="showModal" data-target="bottomModal">分享</view>
			</view>
		</view>
		<view class="top">
			<view class="top-content">
				<image class="avatar-my" src="../../static/100.jpg"></image>
				<view class="my-name">wjl</view>
			</view>
			<view class="top-bottom">
				<view class="shop-name">简东西</view>
				<view class="vip">
					<view style="color: #FFFFFF;font-size: 26upx;margin-right: 10upx;">成为会员</view>
					<image src="../../static/arrow-right-grey.png" style="width: 28upx;height: 28upx;"></image>
				</view>
			</view>
		</view>
		<view class="bind">
			<view class="bind-desc">
				绑定手机号,同步全渠道订单和优惠券
			</view>
			<view class="bind-btn">绑定</view>
		</view>
		<view class="lists">
			<view class="list" v-for="(list,index) in lists" :key="index">
				<view class="row1">{{list.num}}</view>
				<view class="row2">{{list.name}}</view>
			</view>
		</view>
		<view class="items">
			<view class="items-header">
				<view class="header-name">我的订单</view>
				<view class="header-right">
					<view class="look-all">查看全部订单</view>
					<image src="../../static/arrow-right-grey.png" style="width: 28upx;height: 28upx;margin-left: 20upx;"></image>
				</view>
			</view>
			<view class="item-content">
				<view class="item" v-for="(item,index) in items" :key="index">
					<image :src="item.icon" style="width: 65upx;height: 65upx;margin-bottom: 10upx;"></image>
					<view class="item-name">{{item.name}}</view>
				</view>
			</view>
		</view>
		<view class="items1">
			<view class="item1" v-for="(lm,index) in listmore" :key="index">
				<view style="display: flex;align-items: center;">
					<image :src="lm.icon" style="width: 35upx;height: 35upx;margin-right: 15upx;"></image>
					<view class="lm-name">{{lm.name}}</view>
				</view>
				<view style="display: flex;align-items: center;margin-right: 2.5%;">
					<image src="../../static/arrow-right-grey.png" style="width: 25upx;height: 25upx;"></image>
				</view>
			</view>
		</view>
		<view class="items1">
			<view class="item1" v-for="(im,index) in itemmore" :key="index">
				<view style="display: flex;align-items: center;">
					<image :src="im.icon" style="width: 35upx;height: 35upx;margin-right: 20upx;"></image>
					<view class="lm-name">{{im.name}}</view>
				</view>
				<view style="display: flex;align-items: center;margin-right: 2.5%;">
					<image src="../../static/arrow-right-grey.png" style="width: 25upx;height: 25upx;"></image>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer-content">
				店铺主页
			</view>
			<view class="footer-content">
				个人中心
			</view>
			<view class="footer-content">
				店铺信息
			</view>
		</view>
		<view class="tag">
			<view style="display: flex;justify-content: center;align-items: center;">
				<image src="../../static/thumbup-full.png" style="width: 50upx;height: 50upx;"></image>
				<view style="font-size: 40upx;color: #8A8A8A;margin-left: 15upx;">有赞</view>
			</view>
			<view class="support">有赞提供技术支持</view>
		</view>
		<view class="tabbar">
			<view class="img-bottom">
				<image src="../../static/home.png"></image>
			</view>
			<view class="buy">全部商品</view>
			<navigator class="buy" url="../cart/cart">购物车</navigator>
			<view class="buy" @tap="toMyOrder">我的订单</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''" @tap="hideModal" @touchmove.stop.prevent>
			<view class="cu-dialog">
				<view class="share-content">
					<view class="unit" v-for="(share,index) in shares" :key="index">
						<view class="share" @tap="shareto(share)">
							<image :src="share.icon" class="share-icon"></image>
						</view>
						<view class="share-info">{{share.name}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				shares:[{
					id:1,
					icon:'../../static/wx.png',
					name:'微信好友'
				},
				{
					id:2,
					icon:'../../static/朋友圈.png',
					name:'微信朋友圈'
				},
				{
					id:3,
					icon:'../../static/weibo.png',
					name:'新浪微博'
				},
				{
					id:4,
					icon:'../../static/qq_zone.png',
					name:'QQ空间'
				},
				{ 
					id:5,
					icon:'../../static/qq-color.png',
					name:'QQ'
				},
				{
					id:6,
					icon:'../../static/link.png',
					name:'复制链接'
				},
				{
					id:7,
					icon:'../../static/more.png',
					name:'更多'
				},
				{
					id:8,
					icon:'../../static/web.png',
					name:'浏览器打开'
				}
				],
				lists: [{
						num: '0.00',
						name: '余额'
					},
					{
						num: 0,
						name: '积分'
					},
					{
						num: 0,
						name: '卡'
					},
					{
						num: 0,
						name: '券码'
					}
				],
				items: [{
						icon: '../../static/待支付.png',
						name: '待付款'
					},
					{
						icon: '../../static/待发货.png',
						name: '待发货'
					},
					{
						icon: '../../static/待收货.png',
						name: '待收货'
					},
					{
						icon: '../../static/待评价.png',
						name: '待评价'
					},
					{
						icon: '../../static/售后退款.png',
						name: '退款/售后'
					}
				],
				listmore: [{
						icon: '../../static/icon_mission.png',
						name: '任务中心'
					},
					{
						icon: '../../static/cart-black.png',
						name: '购物车'
					},
					{
						icon: '../../static/分销员中心.png',
						name: '分销员中心'
					},
					{
						icon: '../../static/返现.png',
						name: '返现'
					},
					{
						icon: '../../static/bag.png',
						name: '赠品'
					},
					{
						icon: '../../static/course.png',
						name: '课程'
					}
				],
				itemmore: [{
						icon: '../../static/friendsettings.png',
						name: '账号设置'
					},
					{
						icon: '../../static/profile.png',
						name: '个人信息'
					},
					{
						icon: '../../static/location_light-1.png',
						name: '收货地址'
					}
				]
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			shareto(e){
				if(e.id==2){
				uni.share({
					 provider: "weixin",
                     scene: "WXSenceTimeline",
                     type: 0,
					 title:'helloWorld',
					 imageUrl:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
					 href:'https://uniapp.dcloud.io',
                     summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
                     success: function (res) {
                          console.log("success:" + JSON.stringify(res));
                    },
                    fail: function (err) {
                          console.log("fail:" + JSON.stringify(err));
                    }
				})
				}
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			toMyOrder: function() {
				uni.navigateTo({
					url: '../myorder/myorder',
				})
			},
			backto:function(){
				uni.navigateBack({
					delta:1,
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: #F8F8F8;
	}

	.status_bar {
		position: fixed;
		top: 0;
		height: var(--status-bar-height);
		width: 100%;
		background-color: #F8F8F8;
		z-index: 999;
	}
    .avatar-my{
		width: 110upx;
		height: 110upx;
		border: 3upx solid #FFFFFF;
		border-radius: 50%;
		margin: 5% 2.5%;
		z-index: 1;
	}
	.top_view {
		display: flex;
		justify-content:space-between ;
		width: 100%;
		position: fixed;
		background-color: #F8F8F8;
		top: 0;
		z-index: 999;
	}
    .top_view-left{
		display: flex;
		align-items: center;
		margin-left: 4%;
		margin-bottom: 15upx;
		margin-top: 20upx;
	}
	.nav-title{
		font-size: 35upx;
		width: 180upx;
	}
	.top_view-right{
		margin-top: 20upx;
		display: flex;
		align-items: center;
		font-size: 35upx;
		margin-right: 4%;
		margin-bottom: 15upx;
	}
	.top {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-image: url('../../static/top-bg.jpg');
		margin-top: 90upx;
	}

	.top-content {
		display: flex;
		align-items: center;
	}

	.my-name {
		font-size: 35upx;
		font-weight: 800;
	}

	.top-bottom {
		width: 95%;
		margin: 0 auto;
		background-color: #000000;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
		height: 60upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.shop-name {
		font-size: 26upx;
		color: #8A8A8A;
		margin-left: 2.5%;
	}

	.vip {
		display: flex;
		align-items: center;
		margin-right: 2.5%;
	}

	.bind {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80upx;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}

	.bind-desc {
		font-size: 26upx;
		margin-left: 2.5%;
	}

	.bind-btn {
		background-color: #9eea6a;
		color: #FFFFFF;
		font-size: 26upx;
		height: 60upx;
		width: 150upx;
		border-radius: 10upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 2.5%;
	}

	.lists {
		display: flex;
		justify-content: center;
		width: 95%;
		margin: 0 auto;
		border-radius: 15upx;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}

	.list {
		flex: 1 1 25%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.row1 {
		margin: 30upx 0;
		font-size: 28upx;
		font-weight: 800;
	}

	.row2 {
		margin-bottom: 30upx;
		font-size: 28upx;
		color: #8A8A8A;
	}

	.items {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		width: 95%;
		margin: 0 auto;
		align-items: center;
		border-radius: 15upx;
		margin-bottom: 20upx;
	}

	.items1 {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		width: 95%;
		margin: 0 auto;
		align-items: flex-end;
		border-radius: 15upx;
		margin-bottom: 20upx;
	}

	.item-content {
		display: flex;
		background-color: #FFFFFF;
		width: 95%;
		justify-content: center;
		margin-top: 30upx;
	}

	.items-header {
		display: flex;
		justify-content: space-between;
		width: 95%;
		height: 70upx;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
	}

	.header-name {
		font-size: 28upx;
		font-weight: 800;
	}

	.header-right {
		display: flex;
		align-items: center;
		font-size: 28upx;
		color: #8A8A8A;
	}

	.item {
		flex: 1 1 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.item-name {
		font-size: 28upx;
		letter-spacing: 2upx;
		margin-bottom: 30upx;
	}

	.item1 {
		width: 95%;
		border-bottom: 1upx solid #EEEEEE;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70upx;
	}

	.item1:last-child {
		border: none;
	}

	.lm-name {
		font-size: 28upx;
	}

	.footer {
		width: 50%;
		margin: 50upx auto;
		display: flex;
		justify-content: center;
	}

	.footer-content {
		border-right: 1px solid #999999;
		flex: 1 1 33.33%;
		display: flex;
		justify-content: center;
		font-size: 25upx;
	}

	.footer-content:last-child {
		border: none;
	}

	.tag {
		display: flex;
		flex-direction: column;
		width: 40%;
		margin: 10upx auto 50upx;
	}

	.support {
		display: flex;
		justify-content: center;
		margin-top: 15upx;
		margin-bottom: 100upx;
		font-size: 30upx;
		color: #B2B2B2;
	}

	.tabbar {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 90upx;
		background-color: #FFFFFF;
		border-top: 1upx solid #EEEEEE;
		display: flex;
	}

	.img-bottom {
		flex: 1 1 13%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tabbar image {
		width: 40upx;
		height: 40upx;
	}

	.buy {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1 1 29%;
		border-left: 1upx solid #EEEEEE;
		font-size: 30upx;
	}
	.share-content{
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 35upx;
	}
	.unit{
		display: flex;
		flex-direction: column;
		flex: 0 0 20%;
		align-items: center;
	}
	.share{
		margin-top: 35upx;
		width: 100upx;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1upx solid #EEEEEE;
		border-radius: 15upx;
	}
	.share-icon{
		width: 55upx;
		height: 55upx;
	}
	.share-info{
		font-size: 26upx;
		letter-spacing: 2upx;
		margin-top: 20upx;
	}
</style>
