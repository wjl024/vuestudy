
<template>
	<view class="_notice">
		<swiper class="_swiper tc" @change="slideChange" indicator-dots="false" autoplay="true" :interval="interval" circular="true"
		  :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red"></view>
			</swiper-item>
			<swiper-item v-for="(item,index) in list" :key="index">
				<view class="swiper-item uni-bg-red">{{item}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			//显示数据
			list: {
				type:Array,
				defual:function(){
					return [];
				}
			},
		},
		data() {
			return {
				interval:3000,
				duration:9000,
			};
		},
		methods:{
			slideChange(e){
				this.$emit('getCurrentIndex',e.detail.current); 
				
			}
		}
	};
</script>

<style scoped="scoped">
	._notice {
		width: 80%;
		position: relative;
		left: 15%;
		top:-50upx;
		background:#FFFFFF;
		font-size: 25upx;
		height: 50upx;
		color: #000000;
		overflow: hidden;
	}
	._swiper {
		line-height: 50upx;
	}
</style>