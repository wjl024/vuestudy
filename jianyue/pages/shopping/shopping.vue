<template>
	<view class="content">
		<view class="search">
			<image src="../../static/search-grey.png"></image>
			<input type="text" class="s-input" placeholder="搜索商品" />
		</view>
		<view class="top-content">
			<scroll-view scroll-x="true" class="grace-tab-title grace-center" id="grace-tab-title" :scroll-into-view="titleShowId">
				<view v-for="(tab,index) in tabs" :key="index" :class="[tabCurrentIndex==index?'grace-tab-current':'']" :id="'tabTag-'+index"
				 @tap="tabChange">
					{{tab.name}}
				</view>
			</scroll-view>
			<swiper class="grace-tab-swiper-full" :current="swiperCurrentIndex" @change="swiperChange" :style="{height:tabHeight+'px'}">
				<swiper-item>
		           <scroll-view scroll-y="true">
					 	<view class="grace-bg-white">
					 		<swiper class="grace-swiper" autoplay="true" indicator-dots indicator-color="rgb(254,238,233)" indicator-active-color="#FD572B" style="height: 320upx;" interval="3000">
					 			<swiper-item v-for="(item,index) in swiperitems" :key="index" style="width: 100%;">
					 					<image :src="item.imgurl" mode="widthFix"></image>
					 			</swiper-item>
					 		</swiper>
					 	</view>
						<view class="grace-bg-white scroller">
							<image class="icon" :src="speakerIconImg"></image>
							<textscroll :list="speakerMsgs"></textscroll>
						</view>
						<view class="page-bar">
							<view class="item">
								<image :src="items[0].img" class="img"></image>
								<view class="des">
									{{items[0].des}}
								</view>
							</view>
							<view class="item">
								<image :src="items[1].img" class="img"></image>
								<view class="des">
									{{items[1].des}}
								</view>
							</view>
							<view class="item">
								<image :src="items[2].img" class="img2"></image>
								<view class="des">
									{{items[2].des}}
								</view>
							</view>
							<view class="item">
								<image :src="items[3].img" class="img2"></image>
								<view class="des">
									{{items[3].des}}
								</view>
							</view>
						</view>
						<view class="condition">
							<view style="font-size: 12upx;letter-spacing: 10upx; font-weight: bold;">MY&nbsp;&nbsp;LOVE&nbsp;&nbsp;TO&nbsp;&nbsp;YOU</view>
							<view style="font-size: 45upx;letter-spacing: 6upx; margin-bottom: 5upx;">简阅·文化</view>
						</view>
						<view class="goods-list">
							<view class="list-content">
								<view class="goods" v-for="(good,index) in goodsList" :key="index" @tap="goDetail(good)">
									<image :src="good.cover" style="width: 100%; height:200upx;"></image>
									<view style="font-size: 25upx;line-height: 40upx; margin: 5%;">{{good.desc}}</view>
									<view style="color:#FD572B;font-size: 30upx; margin-left: 5%;">{{good.price}}</view>
								</view>
							</view>
						</view>
						<view class="condition">
							<view style="font-size: 12upx;letter-spacing: 10upx; font-weight: bold;">MY&nbsp;&nbsp;LOVE&nbsp;&nbsp;TO&nbsp;&nbsp;YOU</view>
							<view style="font-size: 45upx;letter-spacing: 6upx; margin-bottom: 5upx;">居家·好物</view>
						</view>
						<view class="goods-list">
							<view class="list-content">
								<view class="goods" v-for="(good,index) in goodsList1" :key="index">
									<image :src="good.cover" style="width: 100%; height:200upx;"></image>
									<view style="font-size: 25upx;line-height: 40upx; margin: 5%;">{{good.desc}}</view>
									<view style="color:#FD572B;font-size: 30upx; margin-left: 5%;">{{good.price}}</view>
								</view>
							</view>
						</view>
						<view class="condition">
							<view style="font-size: 12upx;letter-spacing: 10upx; font-weight: bold;">MY&nbsp;&nbsp;LOVE&nbsp;&nbsp;TO&nbsp;&nbsp;YOU</view>
							<view style="font-size: 45upx;letter-spacing: 6upx; margin-bottom: 5upx;">科技·数码</view>
						</view>
						<view class="goods-list">
							<view class="list-content">
								<view class="goods1" v-for="(good,index) in goodsList2" :key="index">
									<image :src="good.cover" style="width: 100%; height:200upx;"></image>
									<view style="font-size: 25upx;line-height: 40upx; margin: 5%;">{{good.desc}}</view>
									<view style="color:#FD572B;font-size: 30upx; margin-left: 5%;">{{good.price}}</view>
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
				   </scroll-view>
				</swiper-item>
				<swiper-item>首页</swiper-item>
				<swiper-item>首页</swiper-item>
				<swiper-item>首页</swiper-item>
				<swiper-item>首页</swiper-item>
			</swiper>
		</view>
		<view class="tabbar">
			<view class="img-bottom"><image src="../../static/home.png"></image></view>
			<view class="buy">全部商品</view>
			<navigator class="buy" url="../cart/cart">购物车</navigator>
			<view class="buy">我的订单</view>
		</view>
	</view>
</template>

<script>
	import textscroll from '../../components/screenTextScroll.vue'
	export default {
		data() {
			return {
				speakerIconImg:'../../static/notify.png',
				tabCurrentIndex: 0,
				speakerMsgs:['客服在线时间:周一至周五9:00-24:00','订单48小时内发货,多个订单分开发','(预售及节假日顺延).'],
				swiperCurrentIndex: 0,
				tabs: [{
						name: '主页',
						id: 'zhuye'
					},
					{
						name: '简阅文化',
						id: 'jianshuwenhua'
					},
					{
						name: '吃货天堂',
						id: 'chihuotiantang'
					},
					{
						name: '居家好物',
						id: 'jujiahaowu'
					},
					{
						name: '洗护日用',
						id: 'xihuriyong'
					}
				],
				swiperitems:[{
					imgurl:'../../static/swiper1.jpg'
				},
				{
					imgurl:'../../static/swiper2.jpg'
				},
				{
					imgurl:'../../static/swiper3.jpg'
				}
				],
				items:[{
					img:'../../static/皇冠.png',
					des:'销量排行'
				},
				{
					img:'../../static/简书.png',
					des:'简阅文化'
				},
				{
					img:'../../static/优惠.png',
					des:'优惠活动'
				},
				{
					img:'../../static/活动返利.png',
					des:'分销返利'
				}
				],
				titleShowId: 'tabTag-0',
				tabHeight:600,
				goodsList:[{
					id:1,
					cover:'../../static/j-info1.jpg',
					desc:'周广胜绿檀鹊桥礼盒木梳',
					price:'￥156'
				},
				{
					id:2,
					cover:'../../static/j-info2.jpg',
					desc:'【新年贺岁版】帝王手抄...',
					price:'￥128'
				},
				{
					id:3,
					cover:'../../static/j-info3.jpg',
					desc:'【预售4月12日发货】《...',
					price:'￥168'
				},
				{
					id:4,
					cover:'../../static/j-info4.jpg',
					desc:'《智囊全集》(2册)|海纳圣人...',
					price:'￥89'
				},
				{
					id:5,
					cover:'../../static/j-info5.jpg',
					desc:'《聊斋志异连环画》|中国古典...',
					price:'￥108'
				},
				{
					id:6,
					cover:'../../static/j-info6.jpg',
					desc:'《古文观止》全四册',
					price:'￥228'
				},
				{
					id:7,
					cover:'../../static/j-info7.jpg',
					desc:'国馆原创手抄经升级版',
					price:'￥98'
				}
				],
				goodsList1:[{
				    cover:'../../static/home-info1.jpg',
					desc:'敬物12生肖纳福杯|手捧...',
					price:'￥128'
				},
				{
					cover:'../../static/home-info2.jpg',
					desc:'古法手工香膏|千年宫廷...',
					price:'￥148'
				},
				{
					cover:'../../static/home-info3.jpg',
					desc:'艾草虎头枕|祛湿安眠...',
					price:'￥138'
				},
				{
					cover:'../../static/home-info4.png',
					desc:'德尔玛加湿器5L大容量',
					price:'￥99'
				},
				{
					cover:'../../static/home-info5.png',
					desc:'德国GESS012按摩仪',
					price:'￥399'
				}
				],
				goodsList2:[{
					cover:'../../static/play-info.jpg',
					desc:'Razer雷蛇蝰蛇有线电竞鼠标',
					price:'￥159'
				},
				{
					cover:'../../static/play-info1.jpg',
					desc:'国潮夜光手机壳苹果系列',
					price:'￥58'
				},
				{
					cover:'../../static/play-info2.jpg',
					desc:'罗技K480无线蓝牙键盘',
					price:'￥189'
				}
				]
			};
		},
		onLoad() {

		},
		onShow(){
           
		},
		methods: {
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
			goDetail:function(e){
				uni.navigateTo({
					url:'../goods/good'+e.id
				})
			}
		},
		components:{
			textscroll
		}
	}
</script>

<style scoped="scoped">
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F0F0F0;
	}

	.search {
		width: 90%;
		margin: 0 auto;
		height: 80upx;
		margin-top: 10upx;
		margin-bottom: 10upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10upx;
	}

	.search image {
		flex: 1 1 8%;
		height: 60upx;
		margin-left: 5%;
		margin-right: 5%;
	}

	.s-input {
		flex: 1 1 80%;
		font-size: 35upx;
	}
	page{
		background-color: #FFFFFF;
	}
	.top-content{
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}
    .scroller{
		width:100%;
		height:100upx;
	} 
	.icon{
		margin-top: 30upx;
		margin-left: 5%;
		width: 50upx;
		height: 50upx;
	}
	.item{
		flex: 1 1 25%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.img{
		height: 90upx;
		width: 90upx;
		border-radius: 50%;
		margin-bottom: 25upx;
	}
	.img2{
		height:100upx;
		width:100upx;
		border-radius: 50%;
		margin-bottom: 25upx;
	}
	.page-bar{
		display: flex;
		height: 200upx;
		width:100%;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 1px solid #EEEEEE;
	}
	.condition{
		width: 35%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-bottom: 2upx solid #999999;
		margin-top: 30upx;
		margin-bottom: 30upx;
	}
	.goods-list{
		border-top: 3upx solid #FFFFFF;
		border-bottom: 6px solid #FFFFFF;
	}
	.list-content{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width:90%;
        margin:0 auto;
		margin-top: 5upx;
	}
	.goods{
		flex:0 0 32%;
		display: flex;
		flex-direction: column;
		height: 350upx;
		background-color: #FFFFFF;
		margin-bottom: 15upx;
	}
	.goods1{
		flex:0 0 32%;
		display: flex;
		flex-direction: column;
		height: 350upx;
		background-color: #FFFFFF;
		margin-bottom: 15upx;
	}
	.goods:last-child{
		margin-right:34%;
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
	.tabbar{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 90upx;
		background-color: #FFFFFF;
		border-top:1upx solid #EEEEEE;
		display: flex;
	}
	.img-bottom{
		flex: 1 1 13%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tabbar image{
		width: 40upx;
		height: 40upx;
	}
	.buy{
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1 1 29%;
		border-left:1upx solid #EEEEEE;
		font-size: 30upx;
	}
</style>
