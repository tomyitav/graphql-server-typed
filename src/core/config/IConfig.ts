export interface IConfig {
	server: IServerConfig;
	log: ILoggerConfig;
}

interface IServerConfig {
	port: number;
	wsPort: number;
}

interface ILoggerConfig {
	filename: string;
	filedir: string;
}
