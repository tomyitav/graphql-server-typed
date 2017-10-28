import 'zone.js';
import 'reflect-metadata';
import { ReflectiveInjector } from '@angular/core';
import {Logger} from "./Logger";
import {Server} from "../server";
import {AbstractLogger} from "./AbstractLogger";

let injector = ReflectiveInjector.resolveAndCreate ([
    {provide: AbstractLogger, useClass: Logger},
    {provide: Server, useClass: Server}
])

export default injector;
