/**
 * 用户操作
 */

const userModel = require('../../models/userModel')

/**
 * 向请求方返回响应
 * @param {ctx} ctx 
 * @param {Number} code 
 * @param {String} msg 
 * @param {Object} data 
 */
const response = (ctx, code, msg, data) => {
    ctx.body = {
        code,
        msg,
        data
    }
}

/**
 * 查询用户列表
 * @param {*} ctx 
 */
const GetUserList = async (ctx) => {
    const [err, res] = await global.to(userModel.find())
    if (err) {
        response(ctx, 1001, "查询用户列表时错误", err)
        console.log(err)
    } else {
        if (res) {
            response(ctx, 200, "查询成功", res)
        } else {
            response(ctx, 1002, "查询失败")
        }
    }
}

module.exports = {
    GetUserList
}