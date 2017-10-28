import * as winston from 'winston';
import LoggerInstance = winston.LoggerInstance;

export abstract class AbstractLogger {
    abstract get logger(): LoggerInstance;
}