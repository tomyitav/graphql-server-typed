import "zone.js";
import "reflect-metadata";
import {Server} from "../server";
import {AbstractLogger} from "./logger/AbstractLogger";
import {AbstractSetting} from "./config/AbstractSetting";
import {Setting} from "./config/Setting";
import {getLogger} from "./logger/LoggerFactory";
import {CarsModel} from "../model/cars/CarModel";
import {AbstractCarsModel} from "../model/cars/AbstractCarsModel";
import {TrainsModel} from "../model/trains/TrainsModel";
import {AbstractTrainsModel} from "../model/trains/AbstractTrainsModel";
import {Injector} from "@angular/core";
import {AbstractPubsubManager} from "../graphql/subscriptions/AbstractPubsubManager";
import {PubsubManager} from "../graphql/subscriptions/PubsubManager";

let injector: Injector = Injector.create([
    {provide: AbstractLogger, useFactory: getLogger, deps: [AbstractSetting]},
    {provide: AbstractSetting, useClass: Setting, deps: []},
    {provide: AbstractCarsModel, useClass: CarsModel, deps: [AbstractLogger, AbstractPubsubManager]},
    {provide: AbstractTrainsModel, useClass: TrainsModel, deps: [AbstractLogger]},
    {provide: AbstractPubsubManager, useClass: PubsubManager, deps: [AbstractLogger]},
    {provide: Server, useClass: Server, deps: [AbstractLogger, AbstractSetting]}
    ]);

export default injector;
