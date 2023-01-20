/**
 * 用户规范
 */

const mongoose = require('mongoose')

/**
 * schema是配置对象
 * 可以在这里规定集合中的文档的格式、类型
 */
const schema = new mongoose.Schema({
    account: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// 这里通过mongoose提供的api创建对象
const userModel = mongoose.model("Users", schema)

// 暴露出这个对象，之后就可以通过它来操作这个数据集了
module.exports = userModel