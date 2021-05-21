const install = (Vue) => {
    // Vue.prototype.$http.defaults.baseURL = ''
    Vue.prototype.$http.defaults.headers["Content-Type"] = "application/json;charset=utf-8"

    // 请求拦截，配置Token等参数
    Vue.prototype.$http.interceptors.request.use(config => {

        config.headers.timestamp = parseInt(new Date().getTime()/1000 + '')
        /*config.data = {
            ...config.data,
            timestamp,
        }*/

        return config
    })

    // 响应拦截，判断状态码是否通过
    Vue.prototype.$http.interceptors.response.use(res => {
        return res.data;
    }, err => {
        // console.log(err.response)
        // 在响应错误的时候的逻辑处理
        return Promise.reject(err)
    })
}

export default {
    install
}
