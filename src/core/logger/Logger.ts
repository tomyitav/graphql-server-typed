import * as fs from 'fs'
import {Injectable} from 'injection-js'
import * as winston from 'winston'
import * as DailyRotate from 'winston-daily-rotate-file'
import {AbstractSetting} from '../config/AbstractSetting'
import {AbstractLogger} from './AbstractLogger'

@Injectable()
export class Logger extends AbstractLogger {
  private logger: winston.Logger

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
    this.logger = winston.createLogger({
      level: 'info',
      transports: [
        new winston.transports.Console(),
        new DailyRotate({
          filename: this.settings.config.log.filename,
          dirname: this.settings.config.log.filedir,
          maxSize: 20971520, // 20MB
          maxFiles: 25,
          datePattern: 'DD-MM-YYYY'
        })
      ]
    })
  }
}
