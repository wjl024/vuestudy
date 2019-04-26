<template>
	<view class="content">
		<text class="info">常规设置</text>
		<view class="block">
			<view class="box per-avatar">更改头像<image :src="avatar" class="avatar" @tap="showActionSheet"></image>
			</view>
			<view class="box nickname">更改昵称<view style="font-size: 35upx; color: #D3D3D3;">{{nickname}}</view>
			</view>
			<view class="box" @tap="showdialog()">更改性别<view class="value">{{sex}}</view>
			</view>
			<view class="box" @tap="showdialog1()">更改生日<view class="value">{{year}}-{{month}}-{{day}}</view>
			</view>
			<view class="box">更改主页</view>
			<view class="box" style="border: none;">编辑个人简介</view>
		</view>
		<text class="info">绑定账号登录简阅</text>
		<view style="margin-left: 5%;color: #D3D3D3;margin-bottom: 15upx;font-size: 25;">出于安全原因,你至少需要保留一种登录方式</view>
		<view class="block">
			<view class="box-info">
				<image src="../../static/phone.png"></image>
				<view class="true">188****9609</view>
			</view>
			<view class="box-info">
				<image src="../../static/weibo-grey.png"></image>
				<view class="false">未绑定</view>
			</view>
			<view class="box-info">
				<image src="../../static/wx.png"></image>
				<view class="true">王杰磊</view>
			</view>
			<view class="box-info">
				<image src="../../static/qq-grey.png"></image>
				<view class="false">未绑定</view>
			</view>
			<view class="box-info" style="border: none;">
				<image src="../../static/豆瓣.png"></image>
				<view class="false">未绑定</view>
			</view>
		</view>
		<hr />
		<view class="box1">社交账号是否显示在主页</view>
		<hr />
		<view class="box1">绑定账号遇到问题</view>
		<hr />
		<view class="box1">重置密码</view>
		<navigator url="../my/my" class="nav" open-type="navigateBack" delta="2">确定修改</navigator>
		<graceMaskView :show="show" bgcolor="#ffffff"  @touchmove.stop.prevent>
			<view class="mask-content">
				<view class="mask-title">请选择性别</view>
				<view class="unilist">
					<radio-group @change="radioChange">
						<label class="cell" v-for="(item, index) in items" :key="item.value" style="display: flex;">
							<view>
								<radio :value="item.value" :checked="index === current" />
							</view>
							<view class="list-name">{{item.name}}</view>
						</label>
					</radio-group>
					<view class="btn-group">
						<text @tap="closedialog()">取消</text>
						<text style="margin-left: 50upx;" @tap="closedialog()">确定</text>
					</view>
				</view>
			</view>
		</graceMaskView>
		<graceMaskView :show="show1" bgcolor="#ffffff"  @touchmove.stop.prevent>
			<view class="mask-content">
				<view class="mask-title">请选择生日</view>
				<view class="unilist">
					<view class="datetime">
						<picker-view @change="bindDateChange" style="height: 300upx;width: 85%; margin: 0 auto; margin-bottom: 40upx;" :indicator-style="indicatorStyle" v-if="visible" :value="value">
							<picker-view-column>
								<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
							</picker-view-column>
							<picker-view-column>
								<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
							</picker-view-column>
							<picker-view-column>
								<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
							</picker-view-column>
						</picker-view>
					</view>
					<view class="btn-group">
						<text @tap="closedialog1()">取消</text>
						<text style="margin-left: 50upx;" @tap="closedialog1()">确定</text>
					</view>
				</view>
			</view>
		</graceMaskView>
	</view>
</template>

<script>
	import graceMaskView from "../../graceUI/components/graceMaskView.vue";
	export default {
		data: function() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			for (let i = 1990; i <= date.getFullYear(); i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			return {
				years,
				year,
				months,
				month,
				days,
				day,
				value: [9999, month - 1, day - 1],
				visible:true,
                indicatorStyle:'height:50px; border-top:2px solid #D3D3D3; border-bottom:2px solid #D3D3D3;',
				sex: '男',
				nickname: '',
				avatar: '',
				userId: uni.getStorageSync('login_key').userId,
				show: false,
				show1: false,
				items: [{
						value: '保密',
						name: '保密',
					}, {
						value: '男',
						name: '男',
						checked: 'true'
					},
					{
						value: '女',
						name: '女',
					}
				]
			};
		},
		onLoad() {

		},
		onShow() {
			var _this = this;
			uni.request({
				url: 'http://localhost:8080/api/user/' + uni.getStorageSync('login_key').userId,
				method: 'GET',
				header: {
					'content-type': 'application/json'
				},
				success: res => {
					if (res.data.code === 0) {
						console.log(res.data.data + '————————————');
						_this.avatar = res.data.data.avatar;
						_this.nickname = res.data.data.nickname;
					}
				}
			});
		},
		methods: {
			bindDateChange: function(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			showdialog: function() {
				this.show = true;
			},
			showdialog1: function() {
				this.show1 = true;
			},
			closedialog: function() {
				this.show = false;
			},
			closedialog1: function() {
				this.show1 = false;
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						this.sex = evt.target.value;
						break;
					}
				}
			},
			showActionSheet: function() {
				console.log('show');
				var _this = this;
				uni.showActionSheet({
					itemList: ['拍照', '从相册选择'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						//选择的是拍照功能
						if (res.tapIndex == 0) {
							uni.chooseImage({
								count: 1,
								sourceType: ['camera'],
								success: function(res) {
									uni.saveImageToPhotosAlbum({
										filePath: res.tempFilePaths[0],
										success: function() {
											console.log('save success');
											uni.uploadFile({
												url: 'http://localhost:8080/api/user/avatar',
												filePath: res.tempFilePaths[0],
												name: 'file',
												formData: {
													id: _this.userId
												},
												success: uploadFileRes => {
													console.log(uploadFileRes.data);
													_this.avatar = uploadFileRes.data;
													_this.nickname = uploadFileRes.data;
												},
											});
										}
									});
								}
							});
						}
						//从相册选择
						if (res.tapIndex == 1) {
							uni.chooseImage({
								count: 1, //默认9
								sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都
								sourceType: ['album'], //从相册选择
								success: function(res) {
									console.log(JSON.stringify(res.tempFilePaths));
									uni.uploadFile({
										url: 'http://192.168.43.194:8080/api/user/avatar',
										filePath: res.tempFilePaths[0],
										name: 'file',
										formData: {
											id: _this.userId
										},
										success: uploadFileRes => {
											console.log(uploadFileRes.data);
											_this.avatar = uploadFileRes.data;
											_this.nickname = uploadFileRes.data;
										}
									});
								}
							});
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			}
		},
		components: {
			graceMaskView
		}
	}
</script>

<style scoped="scoped">
	.mask-content {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
    .item{
		font-size: 35upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn-group {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 30upx;
		padding-left: 50upx;
	}

	.mask-title {
		font-size: 45upx;
		margin-top: 30upx;
		margin-bottom: 40upx;
	}

	.cell {
		margin-bottom: 40upx;
	}

	.list-name {
		margin-left: 30upx;
		color: #AAAAAA;
		font-size: 32upx;
	}

	.unilist {
		display: flex;
		flex-direction: column;
	}

	.nav {
		width: 90%;
		margin: 0 auto;
		height: 80upx;
		background-color: #19ad1a;
		display: flex;
		border-radius: 10upx;
		margin-top: 40upx;
		margin-bottom: 40upx;
		color: #eee;
		justify-content: center;
		align-items: center;
	}

	.text {
		width: 100upx;
		border: 1px solid #D3D3D3;
	}

	.content {
		display: flex;
		flex-direction: column;
	}

	.box {
		width: 90%;
		height: 120upx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 35upx;
		border-bottom: 1px solid #EEEEEE;
	}

	.box1 {
		width: 100%;
		height: 120upx;
		display: flex;
		align-items: center;
		padding-left: 5%;
		font-size: 35upx;
		border-top: 1px solid #EEEEEE;
	}

	.box-info {
		width: 90%;
		height: 120upx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
	}

	.true {
		font-size: 35upx;
	}

	.false {
		font-size: 35upx;
		color: #D3D3D3;
	}

	.avatar {
		border-radius: 50%;
		width: 80upx;
		height: 80upx;
	}

	.block {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #EEEEEE;
		border-top: 1px solid #EEEEEE;
	}

	.info {
		font-size: 30upx;
		margin-left: 5%;
		margin-top: 30upx;
		margin-bottom: 10upx;
		color: #EA6F5A;
	}

	.value {
		font-size: 35upx;
		color: #D3D3D3;
	}

	.box-info image {
		height: 50upx;
		width: 60upx;
		margin-right: 40upx;
	}

	hr {
		height: 40upx;
		background-color: #F0F0F0;
		width: 100%;
		border: none;
	}
</style>
