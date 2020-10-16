<template>
	<view class="content">
		<nav-bar backState="1000" bgColor="#379FFF" bgColorAngle="45" fontColor="#FFF" title="车辆信息" />
		<view class="search">
			<input placeholder="输入关键字搜索" placeholder-class="tui-input-plholder" class="tui-input" @input="search"  />
		</view>
		<view class="detail">
			<view class="detailContent">
				<view class="d-1">
					<view class="label">司机</view>
					<view class="matter">李四</view>
				</view>
				<view class="d-1">
					<view class="label">联系电话</view>
					<view class="matter">15511369937</view>
				</view>
			</view>
			<view class="detailContent">
				<view class="d-2">
					<view class="label" style="width: 20%;">车牌号</view>
					<view class="matter">京A 88888</view>
				</view>
			</view>
			<view class="detailContent">
				<view class="d-2">
					<view class="label" style="width: 20%;">绑定工地</view>
					<view class="matter">陕西省某某工地</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
	
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.content{
		padding: 30rpx 32rpx;
	}
	.search{
		input{
			height: 60rpx;
			background: #FFFFFF;
			box-shadow: 1px 2px 13px 0px rgba(226, 226, 226, 0.6);
			border-radius: 10rpx;
			padding: 20rpx;
			box-sizing: border-box;
		}
		.tui-input-plholder{
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #9A9A9A;
			line-height: 60rpx;
			background: url(../../static/construction/seleter.png) no-repeat;
			background-size: 28rpx 28rpx;
			background-position: left center;
			text-align: center;
		}
	}
	.detail{
		height: 180rpx;
		background: #FFFFFF;
		box-shadow: 1px 2px 13px 0px rgba(226, 226, 226, 0.6);
		border-radius: 10rpx;
		margin-top: 30rpx;
		padding: 20rpx;
	}
	.detailContent{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 20rpx;
		.d-1{
			width: 50%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		.d-2{
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
	}
	.label{
		width: 40%;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #343434;
	}
	.matter{
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		margin-left: 10rpx;
	}
</style>
