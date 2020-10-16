import uniRequest from 'uni-request';
import { getToken } from './auth.js';
import Vue from 'vue'

// let url = 'http://192.168.1.222:8765';
let url = 'http://47.115.46.26:8765';
// let url = 'http://192.168.1.188:10002';
Vue.prototype.url = url;

 uniRequest.defaults.baseURL = url;    //线上
 // uniRequest.defaults.baseURL = 'http://192.168.0.222:8765/api/yl-my';    //杨维山
 // uniRequest.defaults.baseURL = 'http://192.168.0.142:8765';    //薛勇乐
 // uniRequest.defaults.baseURL = 'http://api.demo.ruhuashop.com/';    //商城开放接口
//uniRequest.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
console.log('token',getToken());
uniRequest.defaults.headers.common['Authorization'] = getToken();
uniRequest.defaults.headers.common['token'] = getToken();
uniRequest.defaults.headers.common['logintype'] = 'app';
uniRequest.interceptors.request.use(
    request => {
        //配置基本信息 
        return request;
    },
    err => {
        console.log('请求失败');
		uni.showToast({
		     title:  '请求失败',
		     position:'top',
			  icon :'loading'
		    });
        return Promise.reject(err);
    });

// 响应拦截
uniRequest.interceptors.response.use(function(response) {
	if(response.data.code == 40301){
		uni.showModal({
			title: '提示',
			content: '登录已过期，请重新登陆',
			cancelText: '取消',
			confirmText: '确定',
			success: res => {
				if (res.confirm) {
					uni.reLaunch({
						url: '/pages/login/login'
					});
				}
			}
		})
	}
    return Promise.resolve(response);
	
}, function(error) {
	console.log(error)
    console.log('返回进入拦截失败');
	uni.showToast({
	     title:  '网络异常',
	     position:'top',
		 icon :'loading'
	    });
    return Promise.reject(error);
});

export default uniRequest;