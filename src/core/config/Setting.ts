import {Injectable} from 'injection-js'
import * as path from 'path'
import {AbstractSetting} from './AbstractSetting'
import {IConfig} from './IConfig'

@Injectable()
export class Setting extends AbstractSetting {
  private readonly settings: IConfig

  constructor() {
    super()
    this.settings = {
      log: {
        filedir: path.join(__dirname, '../../log'),
        filename: 'log.txt'
      },
      server: {
        port: process.env.serverPort || '8080'
      }
    }
  }

  public get config(): IConfig {
    return this.settings
  }
}
