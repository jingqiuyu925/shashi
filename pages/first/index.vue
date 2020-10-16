<template>
	<view class="first">
		<nav-bar backState="1000" bgColor="#379FFF" bgColorAngle="45" fontColor="#FFF" title="砂石管理系统"></nav-bar>
		<view class="topBox " v-if="isShow==='1'">
			<view class="one">
				<view class="title-left">工地基础信息</view>
				<view class="title-right">
					<image src="../../static/images/qiehuan.png" mode=""></image>
					<view>切换账号</view>
				</view>
			</view>
			<view class="two">
				当前工地<text>陕西省某某工地</text>
			</view>
			<view class="two">
				<view>
					管理员<text>张三</text>
				</view>
				<view class="phone">
					联系电话<text>13245678923</text>
				</view>
			</view>
			<view class="two">
				<view>
					绑定的道闸编号<text>002565</text>
				</view>
			</view>
			<view class="two">
				<view class="duichang">
					指定的堆场 <view>
						<text>堆场一</text>
						<text>堆场er</text>
					</view>
				</view>
			</view>
		</view>
		<view class="topBox" v-if="isShow==='2'">
			<view class="two">
				当前堆场<text>堆场一号</text>
			</view>
			<view class="two">
				<view>
					管理员<text>张三</text>
				</view>
				<view class="phone">
					联系电话<text>13245678923</text>
				</view>
			</view>
			<view class="two">
				<view>
					绑定的道闸编号<text>002565</text>
				</view>
			</view>
		</view>
		<view class="topBox" v-if="isShow==='3'">
			<view class="one">
				<view class="title-left" id="title">当前工地<text>工地一号</text></view>
				<view class="title-right">
					<image src="../../static/images/qiehuan.png" mode=""></image>
					<view>切换账号</view>
				</view>
			</view>
			<view class="two">
				当前角色<text>司机</text>
			</view>
			<view class="two">
				车牌号<text>京A 88888</text>
			</view>
			<view class="two">
				剩余到达时间<text>54分钟</text>
			</view>
		</view>
		<view class="grid">
			<navigator url="../construction/checkPending" hover-class="navigator-hover">
				<view class="image1" style="background:url(../../static/images/daishenhe.png) no-repeat;background-size:100% 100%;">

					<view class="text">
						{{type}} <text>10</text>
					</view>
				</view>
			</navigator>
			<navigator url="../construction/message" hover-class="navigator-hover">
				<view class="image2" style="background:url(../../static/images/cheliang.png) no-repeat ;background-size:100% 100%;"
				 v-if="isShow!=='3'">

					<view class="text">
						车辆信息
					</view>
				</view>
			</navigator>
			<navigator url="../construction/record" hover-class="navigator-hover">
				<view class="image3" style="background:url(../../static/images/churu.png) no-repeat ;background-size:100% 100%;">

					<view class="text">
						出入记录
					</view>

				</view>
			</navigator>
			<navigator url="../construction/abnormal" hover-class="navigator-hover">
				<view class="image4" style="background:url(../../static/images/yichang.png) no-repeat ;background-size:100% 100%;"
				 v-if="isShow!=='3'">

					<view class="text">
						异常警报
					</view>
				</view>
			</navigator>
		</view>
		<view class="bottomBox" v-if="isShow==='3'">
			<view class="bottomBox-1">
				提交审批
			</view>
			<view class="bottomBox-2">
				<text>司机姓名</text>
				<input type="text" value="" />
			</view>
			<view class="bottomBox-2">
				<text>联系方式</text>
				<input type="text" value="" />
			</view>
			<view class="bottomBox-2">
				<text>选择堆场</text>
				<input type="text" value="" />
			</view>
			<button type="default">提交审批</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: '1',
				type: '待审核'
			}
		},
		onShow() {
			if (this.isShow === '3') {
				this.type = '审核记录'
			} else {
				this.type = '待审核'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.first {
		width: 100%;
		height: 100%;
		padding: 0 32rpx 0;
		box-sizing: border-box;

		.topBox {
			padding: 32rpx;
			box-sizing: border-box;
			width: 100%;
			margin: 32rpx 0;
			background-color: #FFFFFF !important;
			box-shadow: 1px 2px 13px 0px rgba(226, 226, 226, 0.6);
			border-radius: 10rpx;
			font-size: 26rpx;

			.one {
				display: flex;
				justify-content: space-between;
				align-items: center;

				#title {
					font-size: 26rpx;
				}

				.title-left {
					font-size: 36rpx;
				}

				.title-right {
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						width: 27rpx;
						height: 27rpx;
						margin-right: 8rpx;
					}

					font-size: 24rpx;
					color: #9A9A9A;
				}
			}

			;

			.two {
				margin-top: 20rpx;
				display: flex;

				text {
					color: #666666;
					margin-left: 20rpx;
				}

				.phone {
					margin-left: auto;
				}
			}

			.duichang {
				display: flex;

				view {
					text {
						display: block;
					}
				}
			}

			.topBox-1 {
				font-size: 36rpx;
			}
		}

		;

		.bottomBox {
			padding: 32rpx;
			box-sizing: border-box;
			width: 100%;
			background-color: #FFFFFF !important;
			box-shadow: 1px 2px 13px 0px rgba(226, 226, 226, 0.6);
			border-radius: 10rpx;
			font-size: 26rpx;

			.bottomBox-1 {
				font-size: 36rpx;
			}

			;

			.bottomBox-2 {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30rpx;

				input {
					padding: 10rpx 20rpx;
					flex: 1;
					height: 60rpx;
					background: #E8EBEE;
					border-radius: 5px;
					margin-left: 10rpx;
					font-size: 26rpx;
				}
			}

			;

			button {
				width: 100%;
				height: 88rpx;
				background: #2284D8;
				border-radius: 10rpx;
				color: #FFFFFF;
				margin-top: 30rpx;
			}
		}

		.grid {
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			over-flow: hidden;

			view {
				width: 325rpx;
				height: 231rpx;
				background-size: 100% 100%;
				margin-bottom: 32rpx;
				position: relative;

				.text {
					width: 100%;
					position: absolute;
					top: 154rpx;
					text-align: center;
					color: #FFFFFF;
					font-size: 28rpx;

					text {
						margin-left: 10rpx;
					}
				}
			}

		}
	}
</style>
