/**
 * 连接数据库
 */

const mongoose = require('mongoose')

/**
 * 连接的是mongodb数据库，依赖的协议已经不是http了！而是mongodb！
 * 同时，mongodb默认启动在27017端口，如果你修改了，请将地址也对应修改
 * 最后的路径就是要连接的数据库名称
 */
const dbUrl = "mongodb://127.0.0.1:27017/login-backend"

const connectDB = () => {
    // 连接数据库，后面的配置项这样写就行了
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