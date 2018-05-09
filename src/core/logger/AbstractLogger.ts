import * as winston from 'winston';

export abstract class AbstractLogger {
    public abstract get instance(): winston.LoggerInstance;
}