// 实例化
const Koa = require('koa')
const app = new Koa()

const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 引入路由
const users = require('./routes/users')
const auth = require('./routes/auth')

// 连接数据库
const connectDB = require('./db/index')
connectDB()

// 解决跨域问题
const cors = require('@koa/cors')
app.use(cors())

// await错误处理
const { to } = require('await-to-js')
global.to = to

// 认证
const koaJwt = require('koa-jwt')
app.use(koaJwt({
  secret: "@HY&learning$Clogin#*back(end=+"
}).unless({
  path: [/^\/auth\//]
}))

// 错误处理
onerror(app)

// 通用中间件
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// 日志
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 接入路由
app.use(users.routes(), users.allowedMethods())
app.use(auth.routes(), auth.allowedMethods())

// 错误监听
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
