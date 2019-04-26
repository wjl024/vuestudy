<template>
	<view class="content">
		<view v-if="items.length==0" class="null">
			<image src="../../static/cart.png" style="width: 160upx;height: 150upx;"></image>
			<view style="font-size: 30upx;margin: 20upx 0;">购物车空空如也</view>
			<navigator url="../shopping/shopping" style="font-size: 30upx;color: #10AEFF;">去逛逛</navigator>
		</view>
		<view class="good-card" v-if="items.length>0">
			<view class="card-top">
				<view class="card-name">
					<radio color="#FD572B" style="margin-left: 2.5%;" :checked="checkfull" @tap="checkall"></radio>
					<image src="../../static/shop.png" style="margin: auto 2%; width: 50upx; height: 50upx;"></image>
					<view style="font-size: 38upx;">简东西</view>
				</view>
				<view class="finish" style="color: #10AEFF;margin-right: 2.5%;" v-if="!finish" @tap="iffinish">编辑</view>
				<view class="finish" style="color: #10AEFF;margin-right: 2.5%;" v-if="finish" @tap="iffinish">完成</view>
			</view>
			<view class="top-content" v-for="(item, index) in items" :key="item.value">
				<view class="carrier" :class="[theIndex==index?'open':oldIndex==index?'close':'']" @touchstart="touchStart(index,$event)"
				 @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
					<radio-group color="#FD572B" style="width: 100%;">
						<label style="display: flex;align-items: center;">
							<view>
								<radio :value="item.value" color="#FD572B" :checked="item.checkone" @tap="selected(index)"></radio>
							</view>
							<view style="display: flex;width: 100%;">
								<image :src="item.imgurl" style="height: 160upx;flex:0 0 20%; margin-left: 2%;margin-right: 3%;"></image>
								<view style="display: flex;flex-direction: column;flex:0 0 55%;justify-content: space-between;">
									<view style="font-size: 30upx;" v-if="!finish">{{item.name}}</view>
									<view v-if="finish" style="display: flex;">
										<button style="flex: 0 0 12%;margin-left:0; height: 40upx; display: flex;justify-content: center;align-items: center;"
										 @tap="substract" :disabled="item.number==1">-</button>
										<view style="flex: 0 0 12%; position:relative ; left: -62%; width: 60upx; height: 40upx;background-color: #EEEEEE;display: flex;justify-content: center;align-items: center;">{{item.number}}</view>
										<button style="flex: 0 0 12%;margin-left: -62%; width: 60upx; height: 40upx; display: flex;justify-content: center;align-items: center;"
										 @tap="plus">+</button>
									</view>
									<view style="display: flex;justify-content: space-between;margin-bottom: 5%;">
										<view style="font-size: 30upx;color: #FD572B;">{{item.price}}</view>
										<view style="font-size: 25upx;">×{{item.number}}</view>
									</view>
								</view>
							</view>
						</label>
					</radio-group>
					<view class="menu" @tap="deleteGoods(item.id)">
						<image src="../../static/trash.png" class="icon-trash"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="more" style="text-align: center;font-size: 30upx;margin-bottom: 25upx;">更多精选商品</view>
		<view class="more-goods">
			<view class="goodslist">
				<view class="item" v-for="(good,index) in goodsList" :key="index">
					<image :src="good.cover" style="width: 100%; height:250upx;"></image>
					<view class="mores-info">
						<view style="font-size:30upx;line-height: 40upx; margin-bottom: 10%;">{{good.name}}</view>
						<view style="color:#FD572B;font-size: 30upx;">{{good.price}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="goto">
			进店逛逛&nbsp;&nbsp;>
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
		<view class="bottom-bar">
			<view class="bottom-content">
				<view class="account-left" style="display: flex;align-items: center;">
					<radio color="#FD572B" style="display: flex;align-items: center;" :checked="checkfull" @tap="allSelect" :disabled="items.length==0">全选</radio>
					<view style="border: 2upx solid #FF0000; color: #FF0000;background-color: #FFFFFF;height: 60upx;width: 120upx;border-radius: 60upx;display: flex;justify-content: center;align-items: center;"
					 v-if="finish&&items.length>0" @tap="deleteList">删除</view>
					<view class="account-right">
						<view v-if="!items[0].checkone" style="color: #8A8A8A;">合计：&nbsp;&nbsp;￥0.00</view>
						<view class="account" v-if="items[0].checkone">合计：&nbsp;&nbsp;￥{{sum}}.00</view>
						<view class="detail">不含运费</view>
					</view>
				</view>
				<view class="buy" v-if="items[0].checkone" @tap="toAccount">结算({{items[0].number}})</view>
				<view class="buyfalse" v-if="!items[0].checkone">结算(0)</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				theIndex: null,
				oldIndex: null,
				isStop: false,
				checkfull: false,
				finish: false,
				selectedList: [],
				sum: 0,
				items: [{
					id: 1,
					value: 228,
					price: '￥228.00',
					imgurl: '../../static/j-info6.jpg',
					number: 1,
					name: '《古文观止》全四册',
					checkone: false
				}],
				goodsList: [{
						id: 1,
						cover: '../../static/more1.jpg',
						name: '掌上游戏机300款怀旧游戏',
						price: '￥128.00'
					},
					{
						id: 2,
						cover: '../../static/more2.jpg',
						name: 'AIR FUNK 天然空气净化剂',
						price: '￥79.00'
					},
					{
						id: 3,
						cover: '../../static/more3.jpg',
						name: '自动捕螨贴 肉眼可见螨虫',
						price: '￥128.00'
					},
					{
						id: 4,
						cover: '../../static/more4.jpg',
						name: '兰味莲LAVILIN 去狐臭汗臭除味走珠',
						price: '￥179.00'
					},
					{
						id: 5,
						cover: '../../static/more5.jpg',
						name: '怡思丁 水感防嗮液 SPF50+',
						price: '￥159.00'
					},
					{
						id: 6,
						cover: '../../static/more6.jpg',
						name: 'Zendure 凯夫拉纤维快充数据线',
						price: '￥79.00'
					}
				]
			}
		},
		onLoad() {

		},
		onShow() {
			this.sum = this.items[0].value * this.items[0].number;
		},
		methods: {
			iffinish: function() {
				this.finish = !this.finish
			},
			substract: function() {
				this.items[0].number--;
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[0].checkone || this.checkfull) {
						this.sum -= this.items[i].value;
						break;
					}
				}
			},
			plus: function() {
				this.items[0].number++;
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[0].checkone || this.checkfull) {
						this.sum += this.items[i].value;
						break;
					}
				}
			},
			deleteGoods: function(id) {
				var _this=this;
				uni.showModal({
					title:'提示',
					content:'确定要删除这件宝贝吗?',
					success(res) {
						if(res.confirm){
							let len = _this.items.length;
							for (let i = 0; i < len; i++) {
								if (id == _this.items[i].id) {
									_this.items.splice(i, 1);
									break;
								}
							}
							_this.checkfull = false;
						}else if(res.cancel){
							console.log('取消');
						}
					}
				})
			},
			//控制左滑删除效果-begin
			touchStart(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			touchMove(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];

				if (this.isStop || Math.abs(moveX) < 5) {
					return;
				}
				if (Math.abs(moveY) > Math.abs(moveX)) {
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}

				if (moveX < 0) {
					this.theIndex = index;
					this.isStop = true;
				} else if (moveX > 0) {
					if (this.theIndex != null && this.oldIndex == this.theIndex) {
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(() => {
							this.oldIndex = null;
						}, 150)
					}
				}
			},
			touchEnd(index, $event) {
				//结束禁止触发效果
				this.isStop = false;
			},
			//控制左滑删除效果-end
			deleteList() {
				var _this=this;
				uni.showModal({
					title: '提示',
					content: '确定要删除全部的宝贝吗?',
					success: function(res) {
						if (res.confirm) {
							let len = _this.selectedList.length;
							for (let i = 0; i < len; i++) {
								_this.deleteGoods(_this.selectedList[i]);
							}
							_this.selectedList = [];
							_this.checkfull = _this.selectedList.length == _this.items.length && _this.items.length > 0;
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			toAccount(){
				uni.navigateTo({
					url:'../account/account',
					animationType:'pop-in',
					animationDuration:3000
				})
			},
			// 选中商品
			selected(index) {
				this.items[index].checkone = this.items[index].checkone ? false : true;
				let i = this.selectedList.indexOf(this.items[index].id);
				i > -1 ? this.selectedList.splice(i, 1) : this.selectedList.push(this.items[index].id);
				this.checkfull = this.selectedList.length == this.items.length;
			},
			//全选
			checkall: function() {
				this.checkfull = !this.checkfull;
				if (this.items.length == 1) {
					this.items[0].checkone = this.checkfull;
				}
			},
			allSelect() {
				let len = this.items.length;
				let arr = [];
				for (let i = 0; i < len; i++) {
					this.items[i].checkone = this.checkfull ? false : true;
					arr.push(this.items[i].id);
				}
				this.selectedList = this.checkfull ? [] : arr;
				this.checkfull = this.items.length == 0 ? false : true;
			}
		}
	}
</script>

<style lang="scss">
	.icon-trash {
		width: 100upx;
		height: 80upx;
	}

	.carrier {
		display: flex;

		@keyframes showMenu {
			0% {
				transform: translateX(0);
			}

			100% {
				transform: translateX(-30%);
			}
		}

		@keyframes closeMenu {
			0% {
				transform: translateX(-30%);
			}

			100% {
				transform: translateX(0);
			}
		}

		&.open {
			animation: showMenu 0.25s linear both;
		}

		&.close {
			animation: closeMenu 0.15s linear both;
		}
	}

	.null {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 100upx 0;
	}

	.menu {
		position: relative;
		width: 260upx;
		right: 5%;
		height: 160upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FF0000;
	}

	.detail {
		width: 100%;
		float: left;
		color: #8A8A8A;
	}

	.account {
		color: #FD572B;
	}

	.account-right {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 15upx;
	}

	.account-left {
		flex: 1 1 80%;
		display: flex;
		justify-content: space-between;
	}

	.buy {
		flex: 1 1 20%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FF0000;
		color: #FFFFFF;
		height: 100%;
	}

	.buyfalse {
		flex: 0 0 20%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FEEEE9;
		color: #FFFFFF;
	}

	.bottom-bar {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		height: 90upx;
		background-color: #FFFFFF;
		bottom: 0upx;
		position: fixed;
		border: 1upx solid #EEEEEE;
	}

	.bottom-content {
		display: flex;
		align-items: center;
		width: 95%;
	}

	.top-content {
		margin: 10upx 2.5% 40upx;
		width: 95%;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.good-card {
		width: 95%;
		margin: 3% auto;
		border-radius: 20upx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		box-shadow: 0upx 0upx 20upx #D3D3D3;
	}

	.card-top {
		width: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1upx solid #EEEEEE;
		height: 80upx;
	}

	.card-name {
		display: flex;
		align-items: center;
		flex: 1 1 50%;
	}

	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F0F0F0;
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

	.goodslist {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 90%;
		margin: 0 auto;
		margin-top: 5upx;
	}

	.item {
		flex: 0 0 48.5%;
		display: flex;
		flex-direction: column;
		height: 420upx;
		background-color: #FFFFFF;
		margin-bottom: 3%;
	}

	.mores-info {
		display: flex;
		flex-direction: column;
		align-items: space-between;
		width: 90%;
		margin: 5% auto;
	}

	.goto {
		width: 85%;
		margin: 5% auto;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 35upx;
		background-color: #FFFFFF;
		border: 1px solid #C9C9C9;
	}
</style>
