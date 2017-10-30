import "zone.js";
import "reflect-metadata";
import {ReflectiveInjector} from "@angular/core";
import {Server} from "../server";
import {AbstractLogger} from "./logger/AbstractLogger";
import {AbstractSetting} from "./config/AbstractSetting";
import {Setting} from "./config/Setting";
import {getLogger} from "./logger/LoggerFactory";

let injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate ([
    {provide: AbstractLogger, useFactory: getLogger, deps: [AbstractSetting]},
    {provide: AbstractSetting, useClass: Setting},
    {provide: Server, useClass: Server}
])

export default injector;
