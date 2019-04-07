<template>
	<view class="content">
		<view class="box"><input type="text" password class="password" v-model="password" placeholder="请输入密码" required="required"/></view>
	<navigator class="register" @tap="signUp(userDTO)"><button class="rightnow">立即注册</button></navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			   mobile:'',
	           password:''
			};
		},
		onLoad:function(option) {
			//option为object类型,会序列化上个页面传递的参数
	         console.log(option.mobile);
			 this.mobile=option.mobile;
		},
		onShow() {
	
		},
		methods: {
	         signUp:function(userDTO){
				 var _this=this;
				 uni.request({
					 url:this.apiServer+'/user/sign_up',
					 method:'POST',
					 header:{'content-type': 'application/json'},
					 data:{
						 mobile:_this.mobile,
						 password:_this.password
					 },
					 success:res =>{
						 if(res.data.code===0){
							 uni.showModal({
								 title:'提示',
								 content:'注册成功'
							 })
							 uni.navigateTo({
								 url:'../signin/signin'
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
	.rightnow {
		margin-top: 30upx;
		background-color: #2E7BEB;
		color: #EEEEEE;
	}
</style>
