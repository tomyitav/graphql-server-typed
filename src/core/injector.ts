import 'zone.js';
import 'reflect-metadata';
import { ReflectiveInjector } from '@angular/core';
import {Logger} from "./logger/Logger";
import {Server} from "../server";
import {AbstractLogger} from "./logger/AbstractLogger";
import {AbstractSetting} from "./config/AbstractSetting";
import {Setting} from "./config/Setting";

let injector = ReflectiveInjector.resolveAndCreate ([
    {provide: AbstractLogger, useClass: Logger},
    {provide: AbstractSetting, useClass: Setting},
    {provide: Server, useClass: Server}
])

export default injector;
