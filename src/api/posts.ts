import Router from 'koa-router'

const router = new Router({
  prefix: '/posts'
})

router.get('/', async (ctx, next) => {
  ctx.body = [{ text: 'a' }, { text: 'b' }, { text: 'c' }]
})

interface PostParam {
  text: string
}
router.post('/', async (ctx, next) => {
  const param = ctx.request.body as PostParam
  ctx.body = param
})

export default router
