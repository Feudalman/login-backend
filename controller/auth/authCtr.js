// 用户认证——处理

const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken')

// 响应
const response = (ctx, code, msg, data) => {
    ctx.body = {
        code,
        msg,
        data
    }
}

// token 秘钥
const secretKey = "@HY&learning$Clogin#*back(end=+"

/**
 * 用户登录
 */
const UserLogin = async (ctx) => {
    const { account, password } = ctx.request.body

    const [err, res] = await global.to(userModel.findOne({ account, password }))

    if (err) {
        response(ctx, 1001, "登录时错误", err)
    } else {
        if (res) {
            await Login(ctx, account, password)
        } else {
            response(ctx, 1002, "登录失败")
        }
    }
}
// 用户登录
const Login = (ctx, account, password) => {
    const token = jwt.sign({ account, password }, secretKey, {
        expiresIn: 3600 * 24 // 3600=一小时  => 一天
    })

    response(ctx, 200, "登录成功", { account, token })
}


/**
 * 请求注册
 */
const UserRegister = async (ctx) => {
    const { account, password } = ctx.request.body

    const [err, res] = await global.to(userModel.findOne({ account }))
    if (err) {
        console.log(err)
    } else {
        if (res) {
            response(ctx, 2001, "当前邮箱已注册", res)
        } else {
            await Register(ctx, account, password)
        }
    }
}
// 用户注册
const Register = async (ctx, account, password) => {
    const [err, res] = await global.to(userModel.create({ account, password }))
    if (err) {
        response(ctx, 2002, "注册时发生错误", err)
        console.log(err)
    } else {
        if (res) {
            response(ctx, 200, "注册成功")
        } else {
            response(ctx, 2003, "注册失败")
        }
    }
}


/**
 * 校验token
 */
const UserVerify = async (ctx) => {
    let token = ctx.header.authorization
    token = token.replace('Bearer ', '')

    const { account, password } = jwt.verify(token, secretKey)

    const [err, res] = await global.to(userModel.findOne({ account, password }))

    if (err) {
        response(ctx, 3001, "校验token时错误", err)
    } else {
        if (res) {
            response(ctx, 200, "校验通过", res)
        } else {
            response(ctx, 3002, "校验失败")
        }
    }
}

module.exports = {
    UserLogin,
    UserRegister,
    UserVerify
}