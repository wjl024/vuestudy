<template>
	<view class="goods-content">
			<swiper class="grace-swiper" autoplay="true" indicator-dots indicator-color="rgb(254,238,233)" indicator-active-color="#FD572B" interval="3000">
				<swiper-item v-for="(item,index) in swiperitems" :key="index" style="width: 100%;">
						<image :src="item.imgurl" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		<view class="top-content">
			<view class="top-info">
			<view class="name">《古文观止》全四册</view>
			<view class="price">￥228.00</view>
			<view class="bottom-info">
				<view class="info1">运费:免运费</view>
				<view class="info1">剩余:185</view>
				<view class="info1">销量:215</view>
			</view>
			</view>
		</view>
		<view class="ways">
			<view class="way">配送方式:快递</view>
		</view>
		<view class="comment">
			<view class="way">
				宝贝评价
			</view>
			<view class="way" style="margin-right: 5%;">暂无评价</view>
		</view>
		<view>
		<scroll-view scroll-x="true" class="grace-tab-title1 grace-center" id="grace-tab-title" :scroll-into-view="titleShowId">
			<view v-for="(tab,index) in tabs" :key="index" :class="[tabCurrentIndex==index?'grace-tab-current':'grace-notcurrent']" :id="'tabTag-'+index"
			 @tap="tabChange">
				{{tab.name}}
			</view>
		</scroll-view>
		<swiper class="grace-tab-swiper-full" :current="swiperCurrentIndex" @change="swiperChange" :style="{height:tabHeight+'px'}">
			<swiper-item>
				<view class="detail">
				<image src="../../static/detail1.jpg" ></image>
				<image src="../../static/detail2.jpg" ></image>
				<image src="../../static/detail3.jpg" ></image>
				<image src="../../static/detail4.jpg" ></image>
				<image src="../../static/detail5.jpg" ></image>
				<image src="../../static/detail6.jpg" ></image>
				<image src="../../static/detail7.jpg" ></image>
				<image src="../../static/detail8.jpg" ></image>
				<view class="detail-bottom">
					<view class="line"></view>
					<view class="introduce">价格说明></view>
					<view class="line"></view>
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
			</swiper-item>
			<swiper-item>
				<view class="records">
					<view class="colum">买家</view>
					<view class="colum">成交时间</view>
					<view class="colum">数量</view>
				</view>
				<view class="records-list">
					最近暂无成交记录
				</view>
				<view class="more" style="text-align: center;font-size: 30upx;margin-bottom: 25upx;">更多精选商品</view>
				<view class="more-goods">
					<view class="goodslist">
						<view class="item" v-for="(good,index) in goodsList" :key="index">
							<image :src="good.cover" style="width: 100%; height:250upx;"></image>
							<view class="mores-info">
							<view style="font-size: 30upx;line-height: 40upx;margin-bottom: 10%;">{{good.name}}</view>
							<view style="color:#FD572B;font-size: 30upx;">{{good.price}}</view>
							</view>
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
			</swiper-item>
		</swiper>
		</view>
		<view class="navbar">
			<view class="s-bar"><image src="../../static/wang.png" style="width: 40upx;height: 40upx;"></image>
			<view class="bar-name">客服</view>
			</view>
			<view class="s-bar"><image src="../../static/cart.png" style="width: 40upx;height: 40upx;"></image>
			<view class="bar-name">购物车</view>
			</view>
			<view class="s-bar"><image src="../../static/shop.png" style="width: 40upx;height: 40upx;"></image>
			<view class="bar-name">店铺</view>
			</view>
			<view class="b-bar" @tap="showModal" data-target="bottomModal">加入购物车</view>
			<view class="b-bar1" @tap="showModal" data-target="bottomModal">立即购买</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="buy-content">
					<image src="../../static/j-info6.jpg" style="height: 180upx;width: 210upx;position: relative;top: -20upx; left:20upx;"></image>
					<view class="buy-goods-info">
						<view style="display: flex;flex-direction: column;">
						<view class="name-info">《古文观止》全四册</view>
						<view class="price-info">￥228.00</view>
						</view>
					    <image class="cancel-buy" src="../../static/cancel-circle.png" style="height: 40upx;width: 40upx;margin-left: 190upx;" @tap="hideModal"></image>
					</view>
				</view>
				<view class="buy-number">
					<view class="count">
						购买数量:
						<view class="btn-box">
							<button style="width: 60upx;height:40upx;display: flex;justify-content: center;align-items: center;border: 1upx solid #8A8A8A;":disabled="number==1" @tap="substract">-</button>
							<view style="width: 60upx;height:40upx;display: flex;justify-content: center;align-items: center;border: 1upx solid #8A8A8A;">{{number}}</view>
							<button style="width: 60upx;height:40upx;display: flex;justify-content: center;align-items: center;border: 1upx solid #8A8A8A;" @tap="plus">+</button>
						</view>
					</view>
					<view class="surplus">剩余185件</view>
				</view>
				<hr/>
				<view class="rightnow" @tap="hideModal1">加入购物车</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				number:1,
				tabCurrentIndex:0,
				swiperCurrentIndex:0,
				titleShowId: 'tabTag-0',
				tabHeight:8200,
				modalName:null,
				swiperitems:[{
					imgurl:'../../static/j-info6.jpg'
				},
				{
					imgurl:'../../static/j-info6-1.jpg'
				},
				{
					imgurl:'../../static/j-info6-2.jpg'
				},
				{
					imgurl:'../../static/j-info6-3.jpg'
				},
				{
					imgurl:'../../static/j-info6-4.jpg'
				}
				],
				tabs:[{
					name:'商品详情',
					id:'shangpingxiangqing'
				},
				{
					name:'本店成交',
					id:'bendianchengjiao'
				}
				],
				goodsList:[{
					id:1,
					cover:'../../static/more1.jpg',
					name:'掌上游戏机300款怀旧游戏',
					price:'￥128.00'
				},
				{
					id:2,
					cover:'../../static/more2.jpg',
					name:'AIR FUNK 天然空气净化剂',
					price:'￥79.00'
				},
				{
					id:3,
					cover:'../../static/more3.jpg',
					name:'自动捕螨贴 肉眼可见螨虫',
					price:'￥128.00'
				},
				{
					id:4,
					cover:'../../static/more4.jpg',
					name:'兰味莲LAVILIN 去狐臭汗臭除味走珠',
					price:'￥179.00'
				},
				{
					id:5,
					cover:'../../static/more5.jpg',
					name:'怡思丁 水感防嗮液 SPF50+',
					price:'￥159.00'
				},
				{
					id:6,
					cover:'../../static/more6.jpg',
					name:'Zendure 凯夫拉纤维快充数据线',
					price:'￥79.00'
				}
				]
			}
		},
		onShow() {
			
		},
		onLoad() {
			
		},
		methods:{
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			hideModal1(e){
				this.modalName=null
				uni.showToast({
					title:'加入购物车成功',
					duration:1000
				})
			},
			tabChange: function(e) {
				var index = e.target.id.replace('tabTag-', '');
				this.swiperCurrentIndex = index;
				this.tabCurrentIndex = index;
				this.titleShowId = 'tabTag-' + index;
			},
			swiperChange: function(e) {
				var index = e.detail.current;
				this.tabCurrentIndex = index;
				this.titleShowId = 'tabTag-' + index;
			},
			substract:function(){
				this.number--;
			},
			plus:function(){
				this.number++;
			}
		}
	}
</script>

<style scoped="scoped">
	.goods-content{
		width: 100%;
		height:100%;
		display: flex;
		flex-direction: column;
		background-color: #F0F0F0;
	}
	.top-content{
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: #FFFFFF;
	}
	.top-info{
		display: flex;
		flex-direction: column;
		width: 90%;
	}
	.name{
		font-size: 40upx;
		letter-spacing: 5upx;
		margin: 3% 0;
	}
	.price{
		font-size: 35upx;
		color: #FD572B;
		margin-bottom: 30upx;
	}
	.bottom-info{
		display: flex;
		justify-content: space-between;
		margin-bottom: 3%;
	}
	.info1{
		font-size: 30upx;
		color: #B2B2B2;
	}
	.ways{
		height: 90upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 3% 0;
		background-color: #FFFFFF;
	}
	.way{
		margin-left: 5%;
        font-size: 35upx;
	}
	.comment{
		height: 90upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3%;
		background-color: #FFFFFF;
	}
	.detail{
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
	.detail image{
		width: 100%;
		height: 1600upx;
	}
	.detail-bottom{
		margin:60upx 0;
		display: flex;
		justify-content: space-between;
	}
	.introduce{
		width: 120upx;
		height: 40upx;
		border-radius: 60upx;
		border: 1upx solid #999999;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20upx;
	}
	.line{
		width: 36%;
		border-top: 1upx solid #999999;
		margin-top: 18upx;
	}
	.footer{
		width: 50%;
		margin: 50upx auto;
		display: flex;
		justify-content: center;
	}
	.footer-content{
		border-right: 1px solid #999999;
		flex: 1 1 33.33%;
		display: flex;
		justify-content: center;
		font-size: 25upx;
	}
	.footer-content:last-child{
		border: none;
	}
	.tag{
		display: flex;
		flex-direction: column;
		width: 40%;
		margin: 10upx auto 50upx;
	}
	.support{
		display: flex;
		justify-content: center;
		margin-top: 15upx;
		margin-bottom: 100upx;
		font-size: 30upx;
		color: #B2B2B2;
	}
	.goodslist{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width:90%;
		margin:0 auto;
		margin-top: 5upx;
	}
	.item{
		flex:0 0 48.5%;
		display: flex;
		flex-direction: column;
		height: 420upx;
		background-color: #FFFFFF;
		margin-bottom:3% ;
	}
	.mores-info{
		display: flex;
		flex-direction: column;
		align-items:space-between ;
		width: 90%;
		margin: 5% auto;
	}
	.goto{
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
	.navbar{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 90upx;
		background-color: #FFFFFF;
		border-top:1upx solid #EEEEEE;
		display: flex;
	}
	.s-bar{
		flex: 1 1 12%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-left:1upx solid #EEEEEE ;
	}
	.b-bar{
		flex: 1 1 32%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 35upx;
		color: #FFFFFF;
		background-color: #FD572B;
	}
	.b-bar1{
		flex: 1 1 32%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 35upx;
		color: #FFFFFF;
		background-color: #FF0000;
	}
	.bar-name{
		font-size: 25upx;
		color: #8A8A8A;
	}
	.records{
		height: 60upx;
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.colum{
		font-size: 30upx;
	}
	.records-list{
		height: 150upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 35upx;
		background-color: #FFFFFF;
		margin-bottom: 5%;
	}
	.buy-content{
		display: flex;
		border-bottom: 1upx solid #EEEEEE;
		width: 100%;
	}
	.buy-goods-info{
		display: flex;
		justify-content: space-between;
		margin-top: 10upx;
	}
	.name-info{
		margin-left:40upx;
		font-size: 30upx;
	}
	.price-info{
		margin-left:40upx;
		font-size: 35upx;
		color: #FD572B;
		margin-top: 30upx;
	}
	.buy-number{
		display: flex;
		flex-direction: column;
		margin-left:20upx;
		margin-top: 20upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.count{
		display: flex;
		font-size: 35upx;
	}
	.btn-box{
		display: flex;
		margin-left: 350upx;
	}
	.surplus{
		font-size: 30upx;
		color: #8A8A8A;
		margin-top: 15upx;
		margin-bottom: 20upx;
	}
	hr{
		width: 100%;
		background-color: #EEEEEE;
		height: 10upx;
	}
	.rightnow{
		width: 100%;
		color: #EEEEEE;
		height: 80upx;
		background-color: #FF0000;
		font-size: 35upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
