<template>
	<view class="content">
		<view class="activity" v-for="(activity,index) in activities" :key="index">
			<image :src="activity.cover" class="cover"></image>
			<view class="name">{{activity.name}}</view>
			<view class="time">{{activity.time}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				activities:[
					{
					cover:'../../static/activity1.jpg',
					name:'征征征征表情包',
					time:'活动时间：2019年4月1日-2019年5月1日'
				},
				{
					cover:'../../static/activity2.png',
					name:'简阅2018年的10个好故事 征选开始',
					time:'活动时间：2018年12月24日-2019年3月10日'
				},
				{
					cover:'../../static/activity3.jpg',
					name:'日更挑战',
					time:'活动时间：长期有效'
				},
				{
					cover:'../../static/activity4.jpg',
					name:'晨间日记',
					time:'活动时间：长期有效'
				},
				{
					cover:'../../static/activity5.jpg',
					name:'简书新青年栏目有偿征稿,寻找有趣有料的简书',
					time:'活动时间：长期有效'
				},
				]
			}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F8F8F8;
		align-items: center;
	}
	.activity{
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		width: 95%;
		align-items: flex-start;
		border-radius: 10upx;
		margin-top: 20upx;
	}
	.activity:last-child{
		margin-bottom: 20upx;
	}
	.cover{
		width: 100%;
		height: 210upx;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
	}
	.name{
		font-size: 30upx;
		letter-spacing: 4upx;
		margin-left: 5%;
		margin-top: 30upx;
	}
	.time{
		font-size: 26upx;
		letter-spacing: 4upx;
		color: #8A8A8A;
		margin-left: 5%;
		margin-top: 20upx;
		margin-bottom: 30upx;
	}
</style>
