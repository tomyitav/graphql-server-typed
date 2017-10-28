import * as winston from 'winston';
import LoggerInstance = winston.LoggerInstance;

export abstract class AbstractLogger {
    public abstract get logger(): LoggerInstance;
}