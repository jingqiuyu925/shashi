<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(e) {
					console.log(e)
					// #ifndef MP
					Vue.prototype.rpx = 750/e.screenWidth;
					console.log('rpx',Vue.prototype.rpx)
					Vue.prototype.height = e.statusBarHeight*Vue.prototype.rpx;
					Vue.prototype.screenHeightt=e.screenHeight*Vue.prototype.rpx;
					console.log('screenHeightt',Vue.prototype.screenHeightt);
					console.log('screenHeightt',Vue.prototype.screenHeightt);
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	* {
		padding: 0;
		margin: 0;
	}

	page {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		background-color: #F7F6F4!important;
		font-size: 32rpx;
	}

	image {
		width: 100%;
		height: 100%;
	}
</style>
