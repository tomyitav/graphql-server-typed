import {Injectable} from "@angular/core";
import * as winston from "winston";
import {AbstractLogger} from "./AbstractLogger";
import LoggerInstance = winston.LoggerInstance;

@Injectable()
export class Logger extends AbstractLogger{

    private _logger: LoggerInstance;
    constructor() {
        super();
        this.initializeLogger();
    }

    private initializeLogger() {
        this._logger = new winston.Logger({
            level: 'info',
            transports: [
                new (winston.transports.Console)({
                    colorize: true,
                }),
                new (winston.transports.File)({
                    filename: 'log.txt',
                    dirname: 'c:/logs',
                    rotationFormat: '.dd-MM-yyyy',
                    maxFiles: 25,
                    maxsize: 25000
                })
            ]
        });
    }

    get logger(): LoggerInstance {
        return this._logger;
    }
}