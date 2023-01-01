/**
 * 连接数据库
 */

const mongoose = require('mongoose')

const dbUrl = "mongodb://127.0.0.1:27017/clogin-backend"

const connectDB = () => {
    // 连接数据库
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })

    // 连接监听
    mongoose.connection.on('open', err => {
        if(err) {
            console.log(err)
            console.log("数据库连接失败！！！")
        } else {
            console.log("数据库连接成功")
        }
    })
}

module.exports = connectDB