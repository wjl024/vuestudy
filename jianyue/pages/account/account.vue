<template>
	<view class="content">
		<view class="order-info">
			<image src="../../static/aui-icon-location.png" style="width: 8%;height: 40upx;margin-left: 1%; margin-top: 20upx;"></image>
			<view class="order-content">
				<view class="order1">
					<view class="order1-left">收货人：&nbsp;王某某</view>
					<view class="order1-right">1888888888</view>
				</view>
				<view class="order2">收货地址:&nbsp;{{city}}</view>
			</view>
			<view style="display: flex;align-items: center;margin: 0 2.5%;">
			<image src="../../static/arrow-right-grey.png" style="width: 40upx;height: 35upx;"></image>
			</view>
		</view>
		<view class="shop-name">
			<image src="../../static/shop.png" style="width: 35upx;height: 35upx;margin: 0 2.5%;"></image>
			<view class="title">简东西</view>
		</view>
		<view class="goods-content">
			<image src="../../static/j-info6.jpg" style="height: 150upx;width: 200upx;"></image>
			<view class="goods-info">
			<view class="goods-name">《古文观止》全四册</view>
			<view class="detail">
				<view class="detail-left">￥228.00</view>
				<view class="detail-right">×1</view>
			</view>
			</view>
		</view>
		<view class="discount">
			<view class="discount-content">
				<view class="title">优惠券</view>
				<view class="discount-right">
					<view class="title">使用优惠券</view>
					<image src="../../static/arrow-right-grey.png" style="margin-left: 15upx; width: 40upx;height: 35upx;"></image>
				</view>
			</view>
		</view>
		<view class="discount" style="justify-content: flex-end;margin-top: 15upx;">
			<view class="way-content">
				<view class="title">配送方式</view>
				<view class="title" style="margin-right: 2.5%;">普通快递&nbsp;免运费</view>
			</view>
		</view>
		<view class="discount" style="justify-content: flex-end;">
			<view class="msg-content">
				<view class="title">
					买家留言
				</view>
				<view class="title" style="color: #8A8A8A;margin-right: 30%;">
					建议留言前先与商家沟通确认
				</view>
			</view>
		</view>
		<view class="fee">
			<view style="display: flex;width: 97.5%;justify-content: space-between;height: 70upx;align-items: center;">
				<view class="fee-left">商品金额</view>
				<view class="fee-left" style="margin-right: 2.5%;">￥228.00</view>
			</view>
			<view style="display: flex;width: 97.5%;justify-content: space-between;height: 70upx;align-items: center;border-bottom: 1upx solid #EEEEEE;">
				<view class="fee-left">运费</view>
				<view class="fee-left" style="margin-right: 2.5%;">+ ￥0.00</view>
			</view>
		</view>
		<view class="all-pay">
			合计：
			<view class="all">
				￥228.00
			</view>
		</view>
		<view class="tag">
			<view style="display: flex;justify-content: center;align-items: center;">
				<image src="../../static/thumbup-full.png" style="width: 50upx;height: 50upx;"></image>
				<view style="font-size: 40upx;color: #8A8A8A;margin-left: 15upx;">有赞</view>
			</view>
			<view class="support">有赞提供技术支持</view>
		</view>
		<view class="bottom-bar">
			<view class="bar-left">
				合计：<view class="c-money">￥228.00</view>
			</view>
			<view class="bar-right" @tap="showSheet">
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
               city:'北京'
			}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods:{
			showSheet:function(){
				uni.showActionSheet({
					itemList:['微信支付','支付宝支付','银行卡支付'],
					itemColor:'#329932',
					success(res) {
						console.log('选中了第'+(res.tapIndex+1)+'个按钮');
					},
					fail(res) {
						console.log(res.errMsg);
					}
				})
			}
		}
	}
</script>

<style scoped>
	.content{
		display: flex;
		flex-direction: column;
		background-color: #F8F8F8;
		width: 100%;
	}
	.title{
		font-size: 28upx
	}
	.order-info{
		display: flex;
		width: 100%;
		border-bottom: 5upx dashed #8A8A8A;
	}
	.order-content{
		margin-top: 20upx;
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 20upx;
	}
	.order1{
		display: flex;
		justify-content: space-between;
	}
	.order1-left{
		font-size: 30upx;
	}
	.order1-right{
		font-size: 30upx;
		font-weight: 800;
	}
	.order2{
		margin-top: 20upx;
		font-size: 25upx;
		color: #8A8A8A;
	}
	.shop-name{
		width: 100%;
		height: 70upx;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		margin-top: 10upx;
	}
	.goods-content{
		display: flex;
		width: 95%;
		margin: 0 auto;
		margin-bottom: 20upx;
	}
	.goods-name{
		font-size: 26upx;
		font-weight: 700;
	}
	.detail{
		margin-top: 20upx;
		display: flex;
		justify-content: space-between;
	}
	.detail-left{
		font-size: 26upx;
		color: #FF0000;
		font-weight: 700;
	}
	.detail-right{
		font-size: 26upx;
	}
	.goods-info{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.discount{
		display: flex;
		width: 100%;
		height: 70upx;
		align-items: center;
		background-color: #FFFFFF;
	}
	.discount-content{
		width: 95%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	.discount-right{
		display: flex;
	}
	.way-content{
		width: 97.5%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
	}
	.msg-content{
		display: flex;
		justify-content: space-between;
		width: 97.5%;
	}
	.fee{
		margin-top: 60upx;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		background-color: #FFFFFF;
	}
	.fee-left{
		font-size: 24upx;
	}
	.all-pay{
		display: flex;
		height: 70upx;
		justify-content: flex-end;
		font-size: 28upx;
		align-items: center;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}
	.all{
		display: flex;
		color: #FF0000;
		font-size: 28upx;
		font-weight: 700;
		margin-right: 2.5%;
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
	.bottom-bar{
		display: flex;
		width: 100%;
		height: 80upx;
		align-items: center;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.bar-left{
		font-size: 32upx;
		display: flex;
		flex: 0 0 80%;
		justify-content: flex-end;
		background-color: #FFFFFF;
	}
	.c-money{
		font-size: 32upx;
		color: #FF0000;
		margin-right: 2.5%;
	}
	.bar-right{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		background-color: #FF0000;
		font-size: 32upx;
		flex: 0 0 20%;
	}
</style>
