import { getLogger } from 'log4js'
const logger = getLogger()

export default () => async (ctx: any, next: () => Promise<any>) => {
  try {
    await next()
  } catch (err) {
    logger.error(`message: ${err.message}`)
    logger.error('path', ctx.request.path)

    if (401 === err.status) {
      ctx.status = 401
      ctx.set('WWW-Authenticate', 'Basic')
      ctx.body = 'cant haz that'
    } else {
      ctx.status = err.status || 500
      const locals = {
        error: {
          code: err.code,
          message: err.message
        }
      }
      if (!['development', 'test'].includes(ctx.app.env)) {
        delete locals.error.message
      }
      ctx.body = locals
    }
  }
}
