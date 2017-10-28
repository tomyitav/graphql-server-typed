import {AbstractSetting} from "./AbstractSetting";
import {IConfig} from "./IConfig";

export class Setting extends AbstractSetting {

    private settings: IConfig;
    constructor() {
        super();
        this.settings = {
            server: {
                port: 8080,
                wsPort: 8090
            },
            log: {
                filename: "log.txt",
                filedir: "c:/logs"
            }
        }
    }

    public get config(): IConfig {
        return this.settings;
    }
}