import {Injectable} from "@angular/core";
import * as winston from 'winston'
import * as rotate from 'winston-daily-rotate-file'
import LoggerInstance = winston.LoggerInstance;

@Injectable()
export class Logger {

    private _logger: LoggerInstance;
    constructor() {
        this.initializeLogger();
    }

    private initializeLogger() {
        this._logger = new winston.Logger({
            level: 'info',
            transports: [
                new (winston.transports.Console)({
                    colorize: true,
                }),
                // new winston.transports.DailyRotateFile({
                //     filename: 'log.txt',
                //     dirname: 'c:/logs',
                //     datePattern: '.dd-MM-yyyy'
                // })
            ]
        });
    }

    get logger(): LoggerInstance {
        return this._logger;
    }
}