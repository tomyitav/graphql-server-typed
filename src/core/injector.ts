import "zone.js";
import "reflect-metadata";
import {Server} from "../server";
import {AbstractLogger} from "./logger/AbstractLogger";
import {AbstractSetting} from "./config/AbstractSetting";
import {Setting} from "./config/Setting";
import {Logger} from "./logger/Logger";
import {CarsModel} from "../model/cars/CarModel";
import {AbstractCarsModel} from "../model/cars/AbstractCarsModel";
import {TrainsModel} from "../model/trains/TrainsModel";
import {AbstractTrainsModel} from "../model/trains/AbstractTrainsModel";
import {Injector} from "@angular/core";
import {AbstractPubsubManager} from "../graphql/subscriptions/Pubsub/AbstractPubsubManager";
import {PubsubManager} from "../graphql/subscriptions/Pubsub/PubsubManager";

let injector: Injector = Injector.create([
    {provide: AbstractLogger, useClass: Logger, deps: [AbstractSetting]},
    {provide: AbstractSetting, useClass: Setting, deps: []},
    {provide: AbstractCarsModel, useClass: CarsModel, deps: [AbstractLogger, AbstractPubsubManager]},
    {provide: AbstractTrainsModel, useClass: TrainsModel, deps: [AbstractLogger]},
    {provide: AbstractPubsubManager, useClass: PubsubManager, deps: [AbstractLogger]},
    {provide: Server, useClass: Server, deps: [AbstractLogger, AbstractSetting]}
    ]);

export default injector;
