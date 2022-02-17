import request from '../request'


export default {
    login(data) {
        return request({
            url: '/login',
            method: 'post',
            data: data
        })
    },
    login2(data) {
        return request({
            url: '/login',
            method: 'post',
            data: data
        })
    }
}