/**
 * 用户认证
 */

const router = require('koa-router')()
const authCtr = require('../controller/auth/authCtr')

router.prefix('/auth')

// 用户登录
router.post('/login', authCtr.UserLogin)

// 用户注册
router.post('/register', authCtr.UserRegister)

// token校验
router.post('/verify', authCtr.UserVerify)

module.exports = router