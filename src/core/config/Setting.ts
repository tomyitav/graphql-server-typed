import {AbstractSetting} from "./AbstractSetting";
import {IConfig} from "./IConfig";
import {Injectable} from "@angular/core";

@Injectable()
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
                filedir: "C:/logs/graphql-server-typed"
            }
        }
    }

    public get config(): IConfig {
        return this.settings;
    }
}
