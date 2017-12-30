import {Injectable} from "@angular/core";
import * as winston from "winston";
import {AbstractLogger} from "./AbstractLogger";
import LoggerInstance = winston.LoggerInstance;
import {AbstractSetting} from "../config/AbstractSetting";
import * as DailyRotate from 'winston-daily-rotate-file'

@Injectable()
export class Logger extends AbstractLogger{

    private _logger: LoggerInstance;
    constructor(private settings: AbstractSetting) {
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
                new DailyRotate({
                    filename: this.settings.config.log.filename,
                    dirname: this.settings.config.log.filedir,
                    maxsize: 20971520, //20MB
                    maxFiles: 25,
                    datePattern: '.dd-MM-yyyy'
                })
            ]
        });
    }

    public get instance(): LoggerInstance {
        return this._logger;
    }
}