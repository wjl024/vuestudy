<template>
	<view class="content">
		<text class="info">消息推送</text>
		<view class="block1">
			<view class="item" v-for="(item,index) in item1" :key="index">
				<view class="name">{{item.name}}</view>
				<view class="status">{{item.status}}</view>
			</view>
		</view>
		<text class="info">通用设置</text>
		<view class="block1">
			<view class="item">
				<navigator url="../user_info/user_info" class="name">编辑个人资料</navigator>
			</view>
			<view class="item"  v-for="(item,index) in item2" :key="index">
				<view class="name">{{item.name}}</view>
				<view class="status">{{item.status}}</view>
			</view>
			<view class="item" style="border: none;">
				<view class="name">移动网络下加载图片</view>
				<view><switch checked="checked" color="#EA6F5A"/></view>
			</view>
		</view>
		<text class="info">其他</text>
		<view class="block1">
			<view class="item"  v-for="(other,index) in others" :key="index">
				<view class="name">{{other.name}}</view>
				<view class="status">{{other.status}}</view>
			</view>
		</view>
		<button class="out" @tap="logout()">退出当前帐号</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			item1:[{
				name:'文章更新推送',
				status:'已开启'
			},
			{
				name:'新消息推送'
			}
			],
			item2:[
				{
					name:'默认编辑器',
					status:'富文本'
				},
				{
					name:'添加写文章到桌面'
				},
				{
					name:'赞赏设置'
				},
				{
					name:'字号设置'
				},
				{
					name:'黑名单设置'
				},
			],
		    others:[{
				name:'回收站'
			},
			{
				name:'简阅&Yhouse 品质生活卡'
			},
			{
				name:'FDAA授权'
			},
			{
				name:'清除缓存',
				status:'当前缓存18.2Mb'
			},
			{
				name:'版本更新'
			},
			{
				name:'分享简阅'
			},
			{
				name:'给简阅评分'
			},
			{
				name:'关于我们'
			}
			]
		};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: '设置'
		});
	},
	methods: {
		logout: function() {
			console.log('log out');
			uni.removeStorageSync('login_key');
			uni.showToast({
				title: '已经退出当前账号'
			});
			uni.navigateBack();
		}
	}
};
</script>

<style scoped="scoped">
	.content{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.info{
		font-size: 30upx;
		margin-left: 5%;
		margin-top:30upx;
		margin-bottom: 20upx;
		color:#EA6F5A;
	}
	.block1{
		display: flex;
		flex-direction: column;
		border-bottom:1px solid #EEEEEE;
		border-top: 1px solid #EEEEEE ;
	}
	.item{
		display: flex;
		height: 120upx;
		align-items: center;
		justify-content: space-between;
		border-bottom:1px solid #EEEEEE ;
		width: 90%;
		margin: 0 auto;
	}
	.name{
		font-size: 35upx;
	}
	.status{
		font-size: 35upx;
		color: #D3D3D3;
	}
	.out{
		color:#EA6F5A;
		width: 250upx;
		border: 1px solid #EA6F5A;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30upx;
		margin-bottom: 30upx;
	}
</style>