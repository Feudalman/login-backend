# Koa+Mongodb 后端

## 项目结构

```
├─bin			=》	其下有一个www.js文件，是项目的启动入口*
|
├─controller	=》	对应请求的处理函数都封装在此**
│  ├─auth		=》	认证登录相关的处理程序
│  └─users		=》	用户相关的处理程序
|
├─db			=》	数据库封装，该目录下index.js即为数据库连接、启动文件*
|
├─docker		=》	Docker部署相关，现在可以不管这个
|
├─models		=》	数据表模型*
|
├─public		=》	公共文件，不用怎么管
│  ├─images		=》	图像
│  ├─javascripts	=》	脚本
│  └─stylesheets	=》	样式
|
├─routes		=》	路由不同的处理函数去处理请求*
|
├─utils			=》	公用函数，封装一些多个文件都需要使用的代码
|
└─views			=》	视图，不需要管这个
|
└─app.js		=》	对app对象的封装**
```

## 技术选择

#### 1. 第三方库
|   使用技术   |                 技术介绍                  |   版本号    |                          文档地址                          |
| :----------: | :---------------------------------------: | :---------: | :--------------------------------------------------------: |
| await-to-js  |       能够方便处理await中产生的异常       | 3.0.0(都行) |  [await-to-js](https://www.npmjs.com/package/await-to-js)  |
| jsonwebtoken |                 用户认证                  |    9.0.0    | [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) |
|   mongoose   | 操作MongoDB的第三方JS库，封装了很多好东西 |    6.8.2    | [Mongoose中文文档](http://mongoosejs.net/docs/guide.html)  |

#### 2. 中间件
- koa-bodyparser
- koa-convert
- koa-json
- koa-jwt
- koa-logger
- koa-onerror
- koa-router
- koa-static
- koa-views