## nest新建模块     自动新建user模块
nest g module user
## 创建路由 user   不生成测试文件  控制器
nest g controller user --no-spec  

## 创建service
nest g service user --no-spec

### 中间件
nest g mi counter
## 新建模块
nest g res video
## 安装数据库
npm install --save @nestjs/typeorm mysql2

## 热重载
npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack

###  跨域测试请求 第三方中间件
npm install @nestjs/platform-express
npm i cors
npm i @types/cors -D
fetch('http://localhost:3000/user/cors')
.then(res=>res.json())
.then(res=>{console.log(res)})

## 鉴权jwt
npm install @nestjs/jwt passport-jwt
npm install passport