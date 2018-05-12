import {AbstractSetting} from "./AbstractSetting";
import {IConfig} from "./IConfig";
import * as path from 'path'
import {Injectable} from "injection-js";

@Injectable()
export class Setting extends AbstractSetting {

    private settings: IConfig;
    constructor() {
        super();
        this.settings = {
            server: {
                port: process.env.serverPort || 8080,
                wsPort: process.env.serverWsPort || 8090
            },
            log: {
                filename: "log.txt",
                filedir: path.join(__dirname, '../../log')
            }
        }
    }

    public get config(): IConfig {
        return this.settings;
    }
}
