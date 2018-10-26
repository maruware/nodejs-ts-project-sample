import * as config from 'config'
import * as log4js from 'log4js'

log4js.configure(config.get<log4js.Configuration>('log4js'))
