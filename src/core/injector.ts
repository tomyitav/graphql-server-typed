import 'zone.js';
import 'reflect-metadata';
import { ReflectiveInjector } from '@angular/core';
import {Logger} from "./Logger";
import {Server} from "../server";

let injector = ReflectiveInjector.resolveAndCreate ([
    {provide: Logger, useClass: Logger},
    {provide: Server, useClass: Server}
])

export default injector;
