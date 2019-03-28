import './initializers'
import { setup } from './server'
import { getLogger } from 'log4js'

const logger = getLogger()
const port = process.env.PORT || 3000

const server = setup()
server.listen(port)
server.on('listening', () => {
  logger.info(`server listening http://localhost:${port}`)
})
