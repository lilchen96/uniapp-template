export default {
    success(msg) {
        uni.showToast({
            title: msg,
            icon: 'success'
        });
    },
    error(msg) {
        uni.showToast({
            title: msg,
            icon: 'error'
        });
    },
}