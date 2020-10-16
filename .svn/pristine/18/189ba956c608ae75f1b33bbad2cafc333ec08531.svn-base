<template>
	<view class="content" style="'width:100%;height:100%">
		<view class="center">
			<view class="label">账号</view>
			<input placeholder="请输入您的账号" placeholder-class="pla" maxlength="6" v-model="username"/>
			<view class="line"></view>
			<view class="label">密码</view>
			<input placeholder="请输入您的密码" placeholder-class="pla" type="password" maxlength="6" v-model="password"/>
			<view class="line"></view>
		</view>
		<view class="btn" @click="join">立即登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				username:'',
				password:''
			}
		},
		onLoad() {

		},
		methods: {
			join() {
				console.log('账号'+this.username,'密码'+this.password)
				uni.navigateTo({
					url:'../first/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		background-image: url(../../static/logo/bg.png);
		background-size: 100%;
		position: relative;
		padding: 0 64rpx;
	}
	.center{
		position: absolute;
		bottom: 400rpx;
		width: 80%;
	}
	.label{
		margin-top: 40rpx;
		margin-bottom: 20rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
	}
	.pla{
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #CEDEF3;
		opacity: 0.7;
	}
	input{
		margin-bottom:20rpx;
		color: white;
	}
	.line{
		width: 100%;
		height: 2rpx;
		background: #7DBBF1;

	}
	.btn{
		width: 80%;
		margin: 0 auto;
		height: 88rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		position: absolute;
		bottom: 130rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #2284D8;
		line-height: 88rpx;
		text-align: center;
	}
</style>
