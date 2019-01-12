export interface IConfig {
  server: IServerConfig
  log: ILoggerConfig
}

interface IServerConfig {
  port: string
}

interface ILoggerConfig {
  filename: string
  filedir: string
}
