// 导入路由对象
const router = require('koa-router')()

// 导入用户相关处理对象，上面有请求对应的处理函数
const usersCtr = require('../controller/users/usersCtr')

/**
 * 公用路径，当前文件下所有路由都会自动加上这个
 * 比如用户查询中配置的路由是 /find
 * 那么真正需要请求的路径是 /users/find
 */
router.prefix('/users')

// 查询用户列表，其处理函数是usersCtr对象上的方法
router.get('/find', usersCtr.GetUserList)

// 最后暴露出去，注意commonJS的写法
module.exports = router