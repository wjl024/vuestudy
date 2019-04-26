<template>
	<view class="content">
		<view class="status_bar">
			<view class="top_view">
				<view class="top_view-left">
					<image @tap="backto" src="../../static/arrow-down.png" style="width: 80upx;height: 70upx;margin-left:3%;"></image>
					<view class="nav-title">我的钱包</view>
				</view>
			</view>
		</view>
		<view class="top-content">
			<view class="balance">
				<view class="left">
					<view class="money">现金余额</view>
					<view class="number">0.00</view>
				</view>
				<view class="right">
					<view class="withdraw">提现</view>
				</view>
			</view>
			<view class="hint">
				提现金额需满100元,<view class="help">查看提现帮助</view>
			</view>
		</view>
		<view style="border-bottom: 1upx solid #EEEEEE;width: 100%;">
			<view class="item" v-for="(item,index) in items" :key="index">
				<image :src="item.icon" style="width: 70upx;height: 55upx;margin-left: 2.5%;margin-right: 20upx;"></image>
				<view class="item-content" @tap="showModal(item)">
					<view class="name">{{item.name}}</view>
					<view class="desc" v-if="item.desc.length>0">{{item.desc}}</view>
				</view>
			</view>
		</view>
		<view class="bottom" style="height: 450upx;width: 100%;background-color: #F8F8F8;"></view>
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''" @touchmove.stop.prevent>
			<view class="cu-dialog" style="height: 100%;background-color: #FFFFFF;">
				<view class="status_bar">
					<view class="top_view">
						<view class="top_view-left">
							<image src="../../static/cancel-grey.png" style="; width: 30upx;height: 30upx;margin-left:6%;" @tap="hideModal"></image>
							<view class="nav-title">wjl的赞赏码</view>
						</view>
					</view>
				</view>
				<view class="code-content">
					<view class="small-box">
						<image src="../../static/100.jpg" style="border-radius: 50%;z-index: 2; width: 220upx;height: 220upx;margin: 35upx 0;"></image>
						<view class="gift">小礼物走一走，来简书关注我</view>
						<image src="../../static/mycode2.png" @longpress="showDialog" style="width: 270upx;height: 270upx;z-index: 2;"></image>
					</view>
					<view class="taplong">长按二维码</view>
					<view class="author">赞赏简书作者&nbsp;wjl</view>
				</view>
				<view class="share-btn" @tap="showModal1" data-target="bottomModal">
					<image src="../../static/share-red.png" style="width: 35upx;height: 35upx;"></image>
					<view class="share-1">
						立即分享
					</view>
				</view>
				<view class="cu-modal bottom-modal" :class="modalName1=='bottomModal'?'show':''" @tap="hideModal1"
				 @touchmove.stop.prevent>
					<view class="cu-dialog">
						<view class="share-content">
							<view class="unit" v-for="(share,index) in shares" :key="index">
								<view class="share">
									<image :src="share.icon" class="share-icon"></image>
								</view>
								<view class="share-info">{{share.name}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<graceMaskView :show="show" bgcolor="#ffffff" @touchmove.stop.prevent @tap="closeDialog">
				<view class="mask-content">
					<view style="font-size: 35upx;margin-left: 45upx;width: 200upx;" @tap="save">保存图片</view>
				</view>
			</graceMaskView>
		</view>
	</view>
</template>

<script>
	import graceMaskView from "../../graceUI/components/graceMaskViewRadius.vue";
	export default {
		data() {
			return {
				show: false,
				currentId: 0,
				modalName: null,
				modalName1: null,
				path: 'static/mycode2.png',
				shares: [{
						id: 1,
						icon: '../../static/wx.png',
						name: '微信好友'
					},
					{
						id: 2,
						icon: '../../static/朋友圈.png',
						name: '微信朋友圈'
					},
					{
						id: 3,
						icon: '../../static/weibo.png',
						name: '新浪微博'
					},
					{
						id: 4,
						icon: '../../static/qq_zone.png',
						name: 'QQ空间'
					},
					{
						id: 5,
						icon: '../../static/qq-color.png',
						name: 'QQ'
					},
					{
						id: 6,
						icon: '../../static/link.png',
						name: '复制链接'
					},
					{
						id: 7,
						icon: '../../static/more.png',
						name: '更多'
					},
					{
						id: 8,
						icon: '../../static/web.png',
						name: '浏览器打开'
					}
				],
				items: [{
						id: 1,
						icon: '../../static/tickets.png',
						name: '优惠券',
						desc: '0张可用'
					},
					{
						id: 2,
						icon: '../../static/income.png',
						name: '我的收入',
						desc: ''
					},
					{
						id: 3,
						icon: '../../static/record-blue.png',
						name: '交易记录',
						desc: ''
					},
					{
						id: 4,
						icon: '../../static/code2.png',
						name: '我的赞赏码',
						desc: '',
						dataset: 'bottomModal'
					}
				]
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			showDialog: function() {
				this.show = true;
			},
			closeDialog: function() {
				this.show = false;
			},
			save: function() {
				var _this = this;
				uni.saveImageToPhotosAlbum({
					filePath: _this.path,
					success: function() {
						console.log('save success');
						uni.showModal({
							content:'保存成功',
						})
					},
					fail: function() {
						console.log('保存失败');
					}
				});
			},
			showModal1(e) {
				this.modalName1 = e.currentTarget.dataset.target
			},
			hideModal1(e) {
				this.modalName1 = null
			},
			showModal(e) {
				if (e.id == 4) {
					this.modalName = e.dataset;
				}
			},
			hideModal(e) {
				this.modalName = null
			},
			backto: function() {
				uni.navigateBack({
					delta: 1,
				})
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

	.status_bar {
		position: fixed;
		top: 0;
		height: var(--status-bar-height);
		width: 100%;
		background-color: #F8F8F8;
		z-index: 999;
	}

	.top_view {
		display: flex;
		align-items: center;
		width: 100%;
		position: fixed;
		background-color: #F8F8F8;
		top: 30upx;
		z-index: 999;
		height: 90upx;
	}

	.top_view-left {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.nav-title {
		font-size: 35upx;
		width: 220upx;
		margin-left: 30upx;
	}

	.top-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		border: 1upx solid #EEEEEE;
		background-color: #FFFFFF;
		margin-top: 115upx;
	}

	.balance {
		margin-top: 25upx;
		border-radius: 15upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 95%;
		height: 180upx;
		background: linear-gradient(180deg, #ff8875, #ff4d2f)
	}

	.left {
		display: flex;
		margin-left: 5%;
	}

	.right {
		margin-right: 5%;
	}

	.money {
		font-size: 30upx;
		margin-right: 25upx;
		color: #FFFFFF;
	}

	.number {
		font-size: 35upx;
		font-weight: 800;
		margin-left: 30upx;
		color: #FFFFFF;
	}

	.withdraw {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 15upx;
		border: 2upx solid #FFFFFF;
		color: #FFFFFF;
		width: 120upx;
		height: 60upx;
		font-size: 30upx;
	}

	.hint {
		margin-top: 20upx;
		margin-bottom: 35upx;
		font-size: 24upx;
		color: #8A8A8A;
		display: flex;
	}

	.help {
		font-size: 24upx;
		color: #007AFF;
	}

	.item {
		height: 120upx;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
	}

	.item:last-child .item-content {
		border-bottom: none;
	}

	.item-content {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1upx solid #EEEEEE;
	}

	.name {
		font-size: 30upx;
	}

	.desc {
		width: 110upx;
		height: 60upx;
		display: flex;
		margin-right: 2.5%;
		justify-content: center;
		align-items: center;
		background-color: #FF0000;
		border-radius: 15upx;
		color: #FFFFFF;
	}

	.code-content {
		width: 85%;
		margin: 0 auto;
		border: 4upx solid #ff6146;
		background-color: #ff3a19;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 150upx;
	}

	.small-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: 100%;
		height: 690upx;
		overflow: hidden;
	}

	.small-box::after {
		border-bottom-right-radius: 40%;
		border-bottom-left-radius: 40%;
		background: #FFFFFF;
		width: 150%;
		height: 690upx;
		position: absolute;
		left: -25%;
		top: 0;
		content: "";
	}

	.gift {
		z-index: 2;
		margin-bottom: 35upx;
		font-size: 35upx;
	}

	.taplong {
		margin-top: 35upx;
		margin-bottom: 20upx;
		font-size: 26upx;
		color: #feab95;
		font-weight: 500;
	}

	.author {
		font-size: 35upx;
		margin-bottom: 35upx;
		font-weight: 500;
		color: #FFFFFF;
	}

	.share-btn {
		width: 75%;
		margin: 0 auto;
		height: 70upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 60upx;
		border: 1upx solid #FD572B;
		margin-top: 35upx;
	}

	.share-1 {
		font-size: 28upx;
		color: #FD572B;
		margin-left: 15upx;
	}

	.share-content {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 35upx;
	}

	.unit {
		display: flex;
		flex-direction: column;
		flex: 0 0 20%;
		align-items: center;
	}

	.share {
		margin-top: 35upx;
		width: 100upx;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1upx solid #EEEEEE;
		border-radius: 15upx;
	}

	.share-icon {
		width: 55upx;
		height: 55upx;
	}

	.share-info {
		font-size: 26upx;
		letter-spacing: 2upx;
		margin-top: 20upx;
	}
</style>
