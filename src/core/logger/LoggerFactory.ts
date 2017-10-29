import {AbstractSetting} from "../config/AbstractSetting";
import {Logger} from "./Logger";

export let getLogger = (setting: AbstractSetting) => {
    return new Logger(setting);
}
