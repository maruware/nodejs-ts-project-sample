import * as Router from 'koa-router'
import posts from './posts'

const router = new Router({
  prefix: '/api'
})

router.use(posts.routes()).use(posts.allowedMethods())

export default router
