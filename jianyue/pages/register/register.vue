<template>
	<view class="content">
		<view class="box"><input type="number" class="phone" v-model="mobile" placeholder="请输入手机号"  required="required"/></view>
		<view class="box"><input type="text" class="code" v-model="verifyCode" placeholder="请输入短信验证码" required="required" />
			<button class="accept" @tap="!safety.state ? getVerifyCode():''">{{!safety.state&&'获取'||(safety.time+' s')}}</button>
		</view>
		<button @tap="checkCode" class="register"><text class="rightnow">下一步</text></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
              mobile:'',
			  verifyCode:'',
			  safety:{
				  time:60,
				  state:false,
				  interval:''
			  }
			};
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
             getVerifyCode:function(){
				 var _this=this;
				 uni.request({
					 url:this.apiServer+'/user/verify',
					 method:'POST',
					 header:{
						 'content-type':'application/x-www-form-urlencoded'
					 },
					 data:{
						 mobile:_this.mobile
					 },
					 success:res =>{
						 //成功后倒计时60s后可在点击
						 this.safety.state=true;
						 //倒计时
						 this.safety.interval=setInterval(() =>{
							 if(this.safety.time-- <=0){
								 this.safety.time=60;
								 this.safety.state=false;
								 clearInterval(this.safety.interval);
							 }
						 },1000);
						 if(res.data.code===0){
							 uni.showToast({
								 title:'验证码已发送'
							 });
							 _this.disabled=true;
							 console.log(_this.disabled);
						 }else{
							 uni.showModal({
								 title:'提示',
								 content:res.data.msg
							 });
						 }
					 }
				 })
			 },
			 checkCode:function(){
				 var _this=this;
				 console.log(_this.verifyCode);
				 uni.request({
					url: this.apiServer + '/user/check',
					method:'POST',
					header:{
					 'content-type':'application/x-www-form-urlencoded'
					},
					 data:{
						 mobile:_this.mobile,
						 verifyCode:_this.verifyCode
					 },
					 success: res =>{
						 console.log(res.data);
						 if(res.data.code===0){
							 uni.navigateTo({
								 url:'../register_psd/register_psd?mobile='+_this.mobile
							 });
						 }else{
							 uni.showModal({
								 title:'提示',
								 content:res.data.msg
							 });
						 }
					 }
				 });
			 }
		}
	};
</script>

<style scoped="scoped">
	.content {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		margin-top: 20upx;
	}
    .code{
		flex: 1 1 70%;
	}
	.box {
		margin-top: 40upx;
		height:120upx;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #D3D3D3;
	}
    .register{
		position: relative;
		top: 30upx;
		width: 90%;
		margin: 0 auto;
		background-color: #2E7BEB;
	}
	.accept {
		height:100upx;
		flex: 1 1 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #19AD1A;
		color: #EEEEEE;
	}

	.rightnow {
		margin-top: 30upx;
		background-color: #2E7BEB;
		color: #EEEEEE;
	}
</style>
