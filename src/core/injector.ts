import "zone.js";
import "reflect-metadata";
import {ReflectiveInjector} from "@angular/core";
import {Server} from "../server";
import {AbstractLogger} from "./logger/AbstractLogger";
import {AbstractSetting} from "./config/AbstractSetting";
import {Setting} from "./config/Setting";
import {getLogger} from "./logger/LoggerFactory";
import {CarsModel} from "../model/cars/CarModel";
import {AbstractCarsModel} from "../model/cars/AbstractCarsModel";
import {TrainsModel} from "../model/trains/TrainsModel";
import {AbstractTrainsModel} from "../model/trains/AbstractTrainsModel";

let injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate ([
    {provide: AbstractLogger, useFactory: getLogger, deps: [AbstractSetting]},
    {provide: AbstractSetting, useClass: Setting},
    {provide: AbstractCarsModel, useClass: CarsModel},
    {provide: AbstractTrainsModel, useClass: TrainsModel},
    {provide: Server, useClass: Server}
])

export default injector;
