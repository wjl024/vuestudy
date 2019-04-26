<template>
	<view class="content">
		<view class="top">
			<view class="top-content">
				<image src="../../static/100.jpg" style="width: 90upx;height: 90upx;border-radius: 50%;"></image>
				<view class="top-right">
					<view class="sign-in-days">已连续签到：&nbsp;1天</view>
					<view class="vip">
						<image src="../../static/crown.png" style="width: 30upx;height: 30upx;margin-right: 5upx;"></image>
						<view class="vip-name">会员&nbsp;></view>
					</view>
				</view>
			</view>
		</view>
		<view class="record-content">
			<view class="record-title">
				<view class="title-left">还差2天可得3简书钻</view>
				<view class="title-right" @tap="showdialog1">签到规则</view>
			</view>
			<hr />
			<view class="item-content">
				<view class="item" v-for="(item,index) in items" :key="index">
					<view class="double">
						<view style="display: flex;flex-direction: column;align-items: center;" v-if="item.id==2">
							<view class="border-r">会员翻倍+2</view>
							<view class="angel"></view>
						</view>
					</view>
					<view class="value-content">
						<view class="value">
							{{item.value}}
							<image src="../../static/icon-tick.png" style="width: 50upx;height: 30upx;" v-show="item.id==1"></image>
						</view>
					</view>
					<view class="days">{{item.days}}</view>
				</view>
			</view>
		</view>
		<view class="wait-get">
			<view class="get-title">待领取奖励</view>
			<view class="get-content">
				<view class="get-item" v-for="(list,index) in lists" :key="index">
					<view class="get-number">{{list.number}}</view>
					<view class="get-name">{{list.name}}</view>
					<button class="get-finish" v-if="!list.finish">领取</button>
					<view class="get-unfinish" v-if="list.finish">领取</view>
				</view>
			</view>
		</view>
		<view class="mission">
			<view class="mission-title">做任务赚礼包</view>
			<view class="mission-content">
				<view class="mission-list" v-for="(mission,index) in missions" :key="index">
					<view class="mission-list-left">
						<view class="mission-detail-title">{{mission.title}}</view>
						<view class="mission-detail-content">{{mission.content}}</view>
						<view class="mission-detail-gift">{{mission.gift}}</view>
					</view>
					<view class="mission-finish" v-if="!mission.finish">{{mission.status}}</view>
					<view class="mission-unfinish" v-if="mission.finish">{{mission.status}}</view>
				</view>
			</view>
		</view>
		<graceMaskView :show="show" bgcolor="#ffffff" @touchmove.stop.prevent>
			<view class="mask-content" style="width: 100%;">
				<view style="display: flex;justify-content: flex-start;width: 88%;margin: 0 auto;margin-top: 35upx;margin-bottom: 35upx;">
					<image src="../../static/cancel-grey.png" style="width: 30upx;height: 30upx;" @tap="closeDialog"></image>
				</view>
				<view class="congratulation">
					恭喜签到成功,获1简书钻
				</view>
				<view style="display: flex;flex-direction: column;width: 78%;margin: 0 auto;">
					<view class="border-r1">会员翻倍+2</view>
					<view class="angel-other"></view>
				</view>
				<view style="display: flex;flex-direction: column; align-items: flex-end;margin-bottom: 60upx;">
					<hr class="mask-hr" />
					<view class="mask-item-container">
						<view class="mask-item" v-for="(item,index) in maskitems" :key="index">
							<view class="maskvalue" v-if="item.id==1">
								{{item.value}}
								<image src="../../static/icon-tick.png" style="width: 50upx;height: 30upx;" v-show="item.id==1"></image>
							</view>
							<view class="maskvalue1" v-if="item.id!=1">
								{{item.value}}
							</view>
						</view>
					</view>
				</view>
				<view class="open-vip">开通会员,翻倍赚钻</view>
			</view>
		</graceMaskView>
		<graceMaskView :show="show1" bgcolor="#ffffff" @touchmove.stop.prevent>
			<view class="mask-content" style="width: 100%;">
				<view style="display: flex;justify-content: flex-start;width: 88%;margin: 0 auto;margin-top: 35upx;margin-bottom: 35upx;">
					<image src="../../static/cancel-grey.png" style="width: 30upx;height: 30upx;" @tap="closeDialog1"></image>
				</view>
				<view class="congratulation">
					连续签到奖励
				</view>
				<view class="get-hint">连续签到3天,当天可领取3个借钻;</view>
				<view class="get-hint">连续签到7天,当天可领取7个借钻;</view>
				<view class="get-hint">连续签到10天,当天可领取10个借钻;</view>
				<view class="get-hint">连续签到20天,当天可领取20个借钻;</view>
				<view class="get-hint">连续签到30天,当天可领取30个借钻;</view>
				<view class="get-hint">签到失败则重新开始计算;</view>
			</view>
		</graceMaskView>
	</view>
</template>

<script>
	import graceMaskView from "../../graceUI/components/graceMaskViewother.vue";
	export default {
		data() {
			return {
				show: false,
				show1: false,
				maskitems: [{
						id: 1,
						value: '',
						days: '1天'
					},
					{
						id: 2,
						value: '+1',
						days: '2天'
					},
					{
						id: 3,
						value: '+3',
						days: '2天'
					},
					{
						id: 4,
						value: '+1',
						days: '4天'
					},
					{
						id: 5,
						value: '+5',
						days: '5天'
					}
				],
				items: [{
						id: 1,
						value: '',
						days: '1天'
					},
					{
						id: 2,
						value: '+1',
						days: '2天'
					},
					{
						id: 3,
						value: '+3',
						days: '2天'
					},
					{
						id: 4,
						value: '+1',
						days: '4天'
					},
					{
						id: 5,
						value: '+1',
						days: '5天'
					},
					{
						id: 6,
						value: '+1',
						days: '6天'
					},
					{
						id: 7,
						value: '+7',
						days: '7天'
					}
				],
				lists: [{
						id: 1,
						number: 0,
						name: '简书借钻',
						finish: true
					},
					{
						id: 2,
						number: 3,
						name: '连载',
						finish: false
					},
					{
						id: 3,
						number: 3,
						name: '优惠券',
						finish: false
					}
				],
				missions: [{
						id: 1,
						title: '为文章点赞',
						content: '每天给1篇文章点赞,奖励简书钻,最多完成3次,每天一次',
						gift: '简书钻5个（会员翻倍）',
						status: '1/5',
						finish: false
					},
					{
						id: 2,
						title: '阅读赚钻',
						content: '每日阅读10篇他人文章奖励简书钻',
						gift: '简书钻5个（会员翻倍）',
						status: '待完成',
						finish: false
					},
					{
						id: 3,
						title: '公开发文赚钻',
						content: '公开发文字数>=200字(每张插图算50字)奖励简书钻',
						gift: '简书钻10个（会员翻倍）',
						status: '去发文',
						finish: false
					},
					{
						id: 4,
						title: '精彩评论赚钻',
						content: '评论进入精彩评论,奖励简书钻',
						gift: '简书钻10个（会员翻倍）',
						status: '待完成',
						finish: false
					},
					{
						id: 5,
						title: '新人礼包',
						content: '仅限新用户注册领取',
						gift: '简书钻10个、优惠券3张、会员7天、连载3部',
						status: '已完成',
						finish: true
					},
					{
						id: 6,
						title: '完善性别和生日',
						content: '完善性别和生日',
						gift: '简书钻10个',
						status: '已完成',
						finish: true
					}
				]
			}
		},
		onLoad:function(options) {
			var _this=this;
			uni.showLoading({
				title: '加载中'
			});
			setTimeout(function() {
				uni.hideLoading();
				_this.show=true;
			}, 2000);
		},
		onShow() {

		},
		methods: {
			showdialog1: function() {
				this.show1 = true;
			},
			closeDialog1: function() {
				this.show1 = false;
			},
			closeDialog: function() {
				this.show = false;
			}
		},
		components: {
			graceMaskView
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		background-color: #F8F8F8;
	}

	.double {
		height: 38upx;
		background-color: #FFFFFF;
	}

	.border-r {
		background-color: #ca4522;
		border-radius: 60upx;
		height: 30upx;
		width: 100upx;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 17upx;
	}

	/* 对话框下带有一个小三角 */
	.angel {
		display: block;
		width: 0;
		height: 0;
		border-width: 5px 5px 0;
		border-style: solid;
		border-color: #ca4522 transparent transparent;
	}

	.border-r1 {
		background-color: #ca4522;
		border-radius: 60upx;
		height: 40upx;
		width: 130upx;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20upx;
	}

	.angel-other {
		display: block;
		width: 0;
		height: 0;
		border-width: 10px 10px 0 0;
		border-style: solid;
		border-color: #ca4522 transparent transparent;
		position: relative;
		left: 25upx;
	}

	.top {
		height: 200upx;
		width: 100%;
		background-color: #FD572B;
	}

	.top-content {
		padding-top: 25upx;
		width: 94%;
		margin: 0 auto;
		display: flex;
		height: 100upx;
		align-items: center;
	}

	.sign-in-days {
		font-size: 35upx;
		color: #FFFFFF;
		letter-spacing: 4upx;
		width: 400upx;
		margin-bottom: 25upx;
	}

	.vip {
		border-radius: 60upx;
		border: 1upx solid #FFFFFF;
		height: 35upx;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 130upx;
		background-color: #ca4522;
	}

	.vip-name {
		font-size: 24upx;
		color: #FFFFFF;
	}

	.record-content {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		position: relative;
		top: -30upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		align-items: center;
	}

	.record-title {
		height: 30upx;
		display: flex;
		justify-content: space-between;
		width: 93%;
		margin-top: 25upx;
		margin-bottom: 20upx;
	}

	.title-left {
		font-size: 30upx;
	}

	.title-right {
		font-size: 25upx;
		color: #8A8A8A;
	}

	.item-content {
		display: flex;
		width: 96%;
		margin: 0 auto;
		justify-content: space-between;
		align-items: center;
	}

	hr {
		width: 93%;
		height: 8upx;
		background-color: #FEEEE9;
		position: relative;
		top: 90upx;
		z-index: 1;
		border: none;
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 215upx;
		overflow: visible;
	}

	.value {
		border-radius: 50%;
		width: 50upx;
		height: 50upx;
		background-color: #FD572B;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		z-index: 2;
	}

	.maskvalue1 {
		border-radius: 50%;
		width: 70upx;
		height: 70upx;
		background: linear-gradient(-90deg, #ff9898, #fd572b);
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		z-index: 2;
	}

	.value-content {
		width: 70upx;
		height: 70upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.maskvalue {
		border-radius: 50%;
		width: 90upx;
		height: 90upx;
		background-color: #FD572B;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
	}

	.item:first-child .value {
		border-radius: 50%;
		width: 70upx;
		height: 70upx;
		background: linear-gradient(-90deg, #ff9898, #fd572b);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.days {
		color: #8A8A8A;
		font-size: 26upx;
		margin-top: 25upx;
		margin-bottom: 25upx;
	}

	.wait-get {
		width: 95%;
		margin: 0 auto;
		position: relative;
		top: -10upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 10upx;
		background-color: #FFFFFF;
	}

	.get-title {
		height: 30upx;
		display: flex;
		justify-content: flex-start;
		width: 93%;
		margin-top: 25upx;
		margin-bottom: 25upx;
		font-size: 30upx;
	}

	.get-content {
		display: flex;
		width: 86%;
		justify-content: space-between;
		margin: 0 auto;
	}

	.get-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.get-number {
		font-size: 42upx;
		font-weight: bold;
		margin-bottom: 15upx;
	}

	.get-name {
		font-size: 16px;
		margin-bottom: 15upx;
	}

	.get-finish {
		width: 130upx;
		height: 40upx;
		border-radius: 60upx;
		color: #FFFFFF;
		font-size: 28upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 25upx;
		background-color: #FD572B
	}

	.get-unfinish {
		width: 130upx;
		height: 40upx;
		border-radius: 60upx;
		background-color: #E5E5E5;
		color: #FFFFFF;
		font-size: 28upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 25upx;
	}

	.mission {
		width: 95%;
		margin: 10upx auto 0 auto;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.mission-title {
		height: 35upx;
		display: flex;
		justify-content: flex-start;
		width: 93%;
		margin-top: 25upx;
		margin-bottom: 25upx;
		font-size: 32upx;
	}

	.mission-content {
		width: 93%;
		margin: 15upx auto 0 auto;
		display: flex;
		flex-direction: column;
	}

	.mission-list {
		width: 100%;
		display: flex;
		height: 220upx;
		border-bottom: 2upx solid #8A8A8A;
	}

	.mission-list-left {
		flex: 0 0 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.mission-detail-title {
		font-size: 28upx;
		margin-top: 25upx;
		width: 100%;
	}

	.mission-detail-content {
		width: 100%;
		font-size: 26upx;
		color: #8A8A8A;
		line-height: 50upx;
	}

	.mission-detail-gift {
		font-size: 26upx;
		color: #FD572B;
		margin-bottom: 25upx;
		width: 100%;
	}

	.mission-finish {
		margin-top: 25upx;
		flex: 0 0 20%;
		border-radius: 60upx;
		border: 2upx solid #FD572B;
		height: 50upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FD572B;
		font-size: 28upx;
	}

	.mission-unfinish {
		margin-top: 25upx;
		flex: 0 0 20%;
		border-radius: 60upx;
		border: 2upx solid #8A8A8A;
		height: 50upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #8A8A8A;
		font-size: 28upx;
	}

	.congratulation {
		width: 80%;
		margin: 30upx auto;
		font-size: 30upx;
		letter-spacing: 4upx;
		display: flex;
		justify-content: center;
	}

	.mask-item {
		width: 90upx;
		height: 90upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.mask-item-container {
		width: 93%;
		display: flex;
		justify-content: space-between;
		margin-top: 10upx;
	}

	.mask-hr {
		width: 90%;
		height: 8upx;
		background-color: #FEEEE9;
		position: relative;
		top: 58upx;
		z-index: 1;
		border: none;
	}

	.open-vip {
		width: 55%;
		margin: 0 auto;
		border-radius: 55upx;
		height: 60upx;
		color: #FFFFFF;
		font-size: 28upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FD572B;
		margin-bottom: 35upx;
	}

	.get-hint {
		width: 60%;
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		font-size: 24upx;
		margin-bottom: 25upx;
	}

	.get-hint:last-child {
		margin-bottom: 80upx;
	}
</style>
