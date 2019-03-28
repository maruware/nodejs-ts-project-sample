import config from 'config'
import log4js from 'log4js'

log4js.configure(config.get<log4js.Configuration>('log4js'))
