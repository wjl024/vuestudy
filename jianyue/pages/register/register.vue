<template>
	<view class="content">
		<view class="box">手机号:<input type="text" class="phone"/></view>
		<view class="box">验证码:<input type="text" class="code"/><button class="accept">获取</button> </view>
		<view class="register"><button class="rightnow">立即注册</button></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
	
		},
		onShow() {
			
		},
		methods: {
		
		}
	}
</script>

<style scoped="scoped">
	.content{
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		margin-top: 20upx;
	}
	.box{
		margin-top: 20upx;
		display: flex;
	}
	.phone{
		border: 1px solid #D3D3D3;
		border-radius: 10upx;
	}
	.code{
		border-radius: 10upx;
		border: 1px solid #D3D3D3;
	}
	.accept{
		height: 60upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.rightnow{
		margin-top: 30upx;
		background-color:#2E7BEB;
		color: #EEEEEE;
	}
</style>
