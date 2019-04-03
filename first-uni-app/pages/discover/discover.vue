<template>
	<view class="content">
		<view class="topbar">
			<view class="top-left">
				<text class="top-title">Discover</text>
			</view>
			<view class="top-right">
				<image src="../../static/search.png" class="img1 left-img"></image>
				<image src="/static/plus.png" class="img1 right-img"></image>
			</view>
		</view>
		<view class="card" v-for="item in items">
			<view class="card1">
				<view class="card-left">
					<image :src="item.left" class="img"></image>
					<text class="text-item">{{item.text}}</text>
				</view>
				<view class="card-right">
					<image :src="item.right" class="img"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						left: require('static/Moments.png'),
						text: 'Moments',
						right: require('static/right02.png')
					},
					{
						left: require('static/Scan Blue.png'),
						text: 'Scan',
						right: require('static/right02.png')
					},
					{
						left: require('static/Phone Shake.png'),
						text: 'Shake',
						right: require('static/right02.png')
					},
					{
						left: require('static/stories.png'),
						text: 'Top Stories',
						right: require('static/right02.png')
					},
					{
						left: require('static/搜一搜.png'),
						text: 'Search',
						right: require('static/right02.png')
					},
					{
						left: require('static/People Nearby.png'),
						text: 'People Nearby',
						right: require('static/right02.png')
					},
					{
						left: require('static/bottle.png'),
						text: 'Message in a Bottle',
						right: require('static/right02.png')
					},
					{
						left: require('static/games.png'),
						text: 'Games',
						right: require('static/right02.png')
					},
					{
						left: require('static/小程序.png'),
						text: 'Mini Programs',
						right: require('static/right02.png')
					}
				]
			};
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		height:100%;
		background-color: #F8F8F8;
	}

	.img {
		width: 80upx;
		height: 80upx;
	}

	.card1 {
		height: 100upx;
		display: flex;
		justify-content: space-between;
	}

	.card-left {
		display: flex;
		align-items: center;
		margin-left: 15upx;
	}

	.card {
		margin-bottom: 10upx;
		width: 100%;
		height: 100upx;
		border: 1upx solid #000000;
		background-color: #FFFFFF;
	}

	.card-right {
		display: flex;
		align-items: center;
		margin-right: 15upx;
	}

	.text-item {
		margin-left: 30upx;
	}

	.topbar {
		width: 100%;
		height: 100upx;
		margin-top: 32upx;
		background-color: #F8F8F8;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.top-left{
		margin-left: 15upx;
	}
	.top-right{
		margin-right: 20upx;
	}
	.left-img{
		margin-right: 20upx;
	}
	.img1{
		height: 40upx;
		width: 40upx;
	}
</style>
