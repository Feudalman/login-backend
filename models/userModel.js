/**
 * 用户规范
 */

const mongoose = require('mongoose')

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

const userModel = mongoose.model("Users", schema)

module.exports = userModel