import * as fs from 'fs'
import {Injectable} from 'injection-js'
import * as winston from 'winston'
import * as DailyRotate from 'winston-daily-rotate-file'
import LoggerInstance = winston.LoggerInstance
import {AbstractSetting} from '../config/AbstractSetting'
import {AbstractLogger} from './AbstractLogger'

@Injectable()
export class Logger extends AbstractLogger {
  private logger: LoggerInstance

  constructor(private settings: AbstractSetting) {
    super()
    this.checkForLogFileDir()
    this.initializeLogger()
  }

  public log(level: string, message: string) {
    this.logger.log(level.toLowerCase(), message)
  }

  private checkForLogFileDir() {
    const dir = this.settings.config.log.filedir

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
  }

  private initializeLogger() {
    this.logger = new winston.Logger({
      level: 'info',
      transports: [
        new winston.transports.Console({
          colorize: true
        }),
        new DailyRotate({
          filename: this.settings.config.log.filename,
          dirname: this.settings.config.log.filedir,
          maxsize: 20971520, // 20MB
          maxFiles: 25,
          datePattern: '.dd-MM-yyyy'
        })
      ]
    })
  }
}
