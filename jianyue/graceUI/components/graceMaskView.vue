<template name="graceMaskView">
	<view class="grace-mask" v-if="show" @touchmove.stop.prevent>
		<view class="grace-mask-view" :style="{width: width}" v-if="show">
			<view class="grace-mask-view-content" :style="{background:bgcolor}">
				<slot></slot>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	name : "graceMaskView",
	props :{
		width:{
			type : String,
			default : "90%"
		},
		show : {
			type : Boolean,
			default : false
		},
		bgcolor : {
			type : String,
			default : "#FFFFFF"
		}
	},
	methods:{
		close : function(){
			this.$emit('close')
		}
	}
}
</script>
<style>
.grace-mask{background:rgba(0, 0, 0, 0.5); position:fixed; width:100%; height:100%; left:0; top:0; z-index:999;}
.grace-mask-view{width:90%; position:fixed; left:50%; top:50%; z-index:99; transform: translate(-50%, -50%);}
.grace-mask-view-content{width:100%;}
</style>