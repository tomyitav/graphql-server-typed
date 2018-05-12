export abstract class AbstractLogger {
    public abstract log(level: string, message: string);

    public error(message: string) {
        this.log('ERROR', message);
    }

    public warn(message: string) {
        this.log('WARN', message);
    }

    public info(message: string) {
        this.log('INFO', message);
    }

    public debug(message: string) {
        this.log('DEBUG', message);
    }

    public verbose(message: string) {
        this.log('VERBOSE', message);
    }
}