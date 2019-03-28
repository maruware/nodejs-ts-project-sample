import Koa from 'koa'
import cors from '@koa/cors'
import http from 'http'
import log4js from 'log4js'
import koaLogger from 'koa-logger'
import bodyParser from 'koa-bodyparser'

import auth from 'koa-basic-auth'
import mount from 'koa-mount'
import * as swagger from 'swagger2'
import { ui } from 'swagger2-koa'

import koaError from './middlewares/koa-error'
import api from './api'

const logger = log4js.getLogger('access')
const document = swagger.loadDocumentSync('./swagger.yml')

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

  app.use(api.routes()).use(api.allowedMethods())

  app.use(mount('/docs', auth({ name: 'sample', pass: 'password' })))
  app.use(ui(document, '/docs'))

  const server = new http.Server(app.callback())
  return server
}
