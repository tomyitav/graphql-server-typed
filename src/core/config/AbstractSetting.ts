import {IConfig} from './IConfig'

export abstract class AbstractSetting {
  public abstract get config(): IConfig
}
