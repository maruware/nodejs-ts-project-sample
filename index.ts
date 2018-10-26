import './initializers'
import { setup } from './server'
import * as log4js from 'log4js'

const logger = log4js.getLogger()
const port = process.env.PORT || 3000

const server = setup()
server.listen(port)
server.on('listening', () => {
  logger.info(`server listening http://localhost:${port}`)
})
