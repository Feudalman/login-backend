const router = require('koa-router')()

const usersCtr = require('../controller/users/usersCtr')

router.prefix('/users')

// 查询用户列表
router.get('/find', usersCtr.GetUserList)

module.exports = router
