import axios from 'axios'
const CancelToken = axios.CancelToken
function Request() {
    this.pending = [] //保存每个请求的取消函数和请求标识
    this.whiteList = [] //保存可以多次请求的api白名单
    this.instance = axios.create({
        baseURL: '/api/',
        timeout: 5000,
    })
    this.init()
}
// 删除请求标识
Request.prototype.removePending = function(key, isRequesting) {
    isRequesting = !!isRequesting
    if(this.pending[key] && isRequesting) {
        this.pending[key]('请勿频繁操作...')
    }
    delete this.pending[key]
}
// 获取唯一标识indentify
Request.prototype.getReqIndentify = function(config, isRequest) {
    let url = config.url
    if(isRequest){
        url = `${config.baseURL}/${url.substring(1, url.length)}`
    }
    const method = config.method || ''
    return method.toLocaleLowerCase() === 'get' 
            ? encodeURIComponent(`${url}${(JSON.stringify(config.params) || '')}`) 
            : encodeURIComponent(`${url}${(JSON.stringify(config.data) || '')}`) 
}
// 初始化拦截器方法
Request.prototype.init = function () {
    // 设置请求拦截器
    this.instance.interceptors.request.use(config => {
        // 如果请求url不在白名单中，设置取消请求
        if(!this.whiteList.includes(config.url)){
            const requestData = this.getReqIndentify(config, true)
            this.removePending(requestData)
            const pending = this.pending
            console.log(pending)
            config.cancelToken = new CancelToken(c => {
                pending[requestData] = c
            })
            this.pending = pending
        }
        console.log(this.pending)
        // 请求之前设置request header body等
        // 例如统一对phone，password等加密处理
        return config
    }, error => {
        // 请求出错
        return Promise.reject(error)
    })

    // 设置响应拦截器
    this.instance.interceptors.response.use(response => {
        // 删除取消请求标识
        const requestData = this.getReqIndentify(response.config, false)
        this.removePending(requestData)
        // 处理返回数据
        // 例如对返回码进行的错误处理
        return response
    }, error => {
        // 超出 2xx 范围的 状态码 触发error
        // 可以对4xx, 5xx等等响应错误进行处理
        return Promise.reject(error)
    })
}

Request.prototype.getInstance = function(){
    return this.instance
}

export default new Request().getInstance()