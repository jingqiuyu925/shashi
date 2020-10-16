import Cookies from 'js-cookie'
import uniRequest from 'uni-request';

const TokenKey = 'MIBU-Token'


export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
	//设置过期时间
  var inFifteenMinutes = new Date(new Date().getTime() + 6 * 60 * 60 * 1000);	
  uniRequest.defaults.headers.common['Authorization'] = token;
  
  return Cookies.set(TokenKey, token, {
       expires: inFifteenMinutes
    });
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
