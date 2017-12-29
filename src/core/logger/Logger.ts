import {Injectable} from "@angular/core";
import * as winston from "winston";
import {AbstractLogger} from "./AbstractLogger";
import LoggerInstance = winston.LoggerInstance;
import {AbstractSetting} from "../config/AbstractSetting";

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
                new (winston.transports.File)({
                    filename: this.settings.config.log.filename,
                    dirname: this.settings.config.log.filedir,
                    // rotationFormat: '.dd-MM-yyyy',
                    maxFiles: 25,
                    maxsize: 25000
                })
            ]
        });
    }

    public get logger(): LoggerInstance {
        return this._logger;
    }
}