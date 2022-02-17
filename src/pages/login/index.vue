<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <button type="default" @click="login">登录</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Login',
    };
  },
  onLoad() {},
  methods: {
    async login() {
      const { token } = await this.$api.system.login({
        password: 'YWRtaW4xMjM=',
        username: 'testA',
      });
      this.$store.dispatch('user/setToken', token);
      this.$message.success('登录成功');
      uni.navigateTo({
        url: '/pages/home/index',
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
