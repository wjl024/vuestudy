<template>
	<view>
		<view class="title">
			<text style="font-size: 40upx;margin-bottom: 20upx;">标题:</text>
			<input type="text" class="title-content" style="border: 1px solid #EEEEEE;"/>
		</view>
		<uni-richtext :richList.sync="richList" :uploadUrl="uploadUrl"></uni-richtext>
	</view>
</template>

<script>
	import uniRichtext from '../../components/unirich_text.vue'
	export default {
		components: {
			uniRichtext
		},
		data() {
			return {
				richList: [],
				uploadUrl: "http://localhost:8080/api/user/avatar"
			};
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {

		},
		watch: {
			richList: function(newValue, oldValue) {
				console.log(newValue)
			}
		}
	}
</script>

<style scoped="scoped">
    .title{
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
	.title-content{
		width: 100%;
	}
</style>
