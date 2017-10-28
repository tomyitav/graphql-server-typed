export interface IConfig {
    server: ServerConfig,
    log: LoggerConfig
}

interface ServerConfig {
    port: number,
    wsPort: number
}

interface LoggerConfig {
    filename: string,
    filedir: string
}