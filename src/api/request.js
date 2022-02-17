import message from "@/components/message"
import store from '@/store'

const defaultConfig = {
    timeout: 60 * 1000,
    handleResponse: true
}

let baseUrl = '';
// #ifdef H5
baseUrl = process.env.VUE_APP_BASE_API // H5的请求baseUrl
// #endif

// #ifdef MP-WEIXIN
baseUrl = process.env.VUE_APP_SERVER // 微信小程序请求的后端域名
// #endif



export default function ({
    url,
    method,
    data,
    config = {}
}) {

    const {
        timeout,
        handleResponse
    } = Object.assign(defaultConfig, config);

    return new Promise((resolve, reject) => {
        console.log(store.getters.token);
        uni.request({
            url: `${baseUrl}${url}`,
            method,
            data,
            header: {
                Authorization: `bearer ${store.getters.token}`, // token 格式以实际情况为准
            },
            timeout,
            success: (res) => {
                console.log(res);
                if (handleResponse) {
                    if (res.statusCode === 200) {
                        if (res.data.code === 200) {
                            resolve(res.data)
                        } else {
                            const errMsg = res.data.msg || '接口异常'
                            message.error(errMsg)
                            reject(errMsg)
                        }
                    } else {
                        const errMsg = res.data || '接口异常'
                        message.error(errMsg)
                        reject(errMsg)
                    }
                } else {
                    resolve(res.data)
                }
            },
            fail: (res) => {
                const errMsg = res.errMsg || '接口异常'
                if (handleResponse) {
                    message.error(errMsg)
                }
                reject()
            },
        });

    })
}