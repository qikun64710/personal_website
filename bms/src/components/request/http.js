import axios from 'axios'
import { api } from './index'

const getBaseUrl = (dev)=>{
    let base ={
        production:'http://95.179.209.29:3000',
        development:'http://localhost:3000',
        test:"http://localhost:3000"
    }[dev]
    if (!base) {
        base = '/';
    }
    return base
}
const baseURL = getBaseUrl(process.env.NODE_ENV)
const timeout = 10000
const withCredentials = false

// 这里的url可供你针对需要特殊处理的接口路径设置不同拦截器。
const setInterceptors = (instance) => {
    instance.interceptors.request.use((config) => {
    // 在这里添加loading
    // 配置token
    config.headers.AuthorizationToken = localStorage.getItem('AuthorizationToken') || '';
    return config;
    }, err => Promise.reject(err));

    instance.interceptors.response.use((response) => {
    // 在这里移除loading
    // todo: 想根据业务需要，对响应结果预先处理的，都放在这里
    return response;
    }, (err) => {
    if (err.response) { // 响应错误码处理
        switch (err.response.status) {
        case '403':
            // todo: handler server forbidden error
            break;
            // todo: handler other status code
        default:
            break;
        }
        return Promise.reject(err.response);
    }
    if (!window.navigator.online) { // 断网处理
        // todo: jump to offline page
        return -1;
    }
    return Promise.reject(err);
    });
}
 const request = (url,options)=>{
    // 每次请求都会创建新的axios实例。
    const instance = axios.create()
    const config = { // 将用户传过来的参数与公共配置合并。
        ...options,
        baseURL: baseURL,
        timeout: timeout,
        withCredentials: withCredentials,
        url:api.pathName[url]
    };
    // 配置拦截器，支持根据不同url配置不同的拦截器。
    setInterceptors(instance, options.url);
    return instance(config); // 返回axios实例的执行结果
}
export default request