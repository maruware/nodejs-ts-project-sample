import * as log4js from 'log4js'
const logger = log4js.getLogger()

export default () => async (ctx: any, next: () => Promise<any>) => {
  try {
    await next()
  } catch (err) {
    logger.error(`message: ${err.message}`)
    logger.error('path', ctx.request.path)
    ctx.status = err.status || 500
    const locals = {error: {
      code: err.code,
      message: err.message
    }}
    if (!['development', 'test'].includes(ctx.app.env)) {
      delete locals.error.message
    }
    ctx.body = locals
  }
}
