# uniapp-demo

## 安装依赖包

```
yarn install
```

### 启动开发环境：H5

```
yarn dev:h5
```

### 启动开发环境：微信小程序（watch 模式,热更新）使用微信开发者工具导入项目，路径为：/dist/dev/mp-weixin

```
yarn dev:mp-weixin
```

### 测试环境打包：H5

```
yarn build:test:h5
```

### 测试环境打包：微信小程序

```
yarn build:test:mp-weixin
```

### 生产环境打包：H5

```
yarn build:prod:h5
```

### 生产环境打包：微信小程序

```
yarn build:prod:mp-weixin
```

注意事项：

1. vue 文件波浪线报错，提示要用 ts 的话，禁用 vloar，启用 vetur。
2. 接口调用：this.$api.xxx.xxxx
3. 消息提示：this.$message.success/error(msg)
4. vuex：this.$store
5. 具体开发规范，参考uniapp官网文档 https://uniapp.dcloud.io/frame

