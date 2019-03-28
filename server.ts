import Koa from 'koa'
import cors from '@koa/cors'
import http from 'http'
import log4js from 'log4js'
import koaLogger from 'koa-logger'
import bodyParser from 'koa-bodyparser'

import koaError from './middlewares/koa-error'
import api from './api'

const logger = log4js.getLogger('access')

export const setup = () => {
  const app = new Koa()
  app.use(cors())
  app.use(bodyParser())
  app.use(
    koaLogger((str, args) => {
      logger.info(str)
    })
  )
  app.use(koaError())

  const server = new http.Server(app.callback())

  app.use(api.routes()).use(api.allowedMethods())

  return server
}
