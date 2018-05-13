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
import {AbstractPubsubManager} from "../graphql/subscriptions/Pubsub/manager/AbstractPubsubManager";
import {PubsubManager} from "../graphql/subscriptions/Pubsub/manager/PubsubManager";
import {Injector, ReflectiveInjector} from 'injection-js';
import {AbstractPubsubFactory} from "../graphql/subscriptions/Pubsub/factory/AbstractPubsubFactory";
import {PubsubFactory} from "../graphql/subscriptions/Pubsub/factory/PubsubFactory";

let injector: Injector = ReflectiveInjector.resolveAndCreate([
    {provide: AbstractLogger, useClass: Logger},
    {provide: AbstractSetting, useClass: Setting},
    {provide: AbstractCarsModel, useClass: CarsModel},
    {provide: AbstractTrainsModel, useClass: TrainsModel},
    {provide: AbstractPubsubFactory, useClass: PubsubFactory},
    {provide: AbstractPubsubManager, useClass: PubsubManager},
    {provide: Server, useClass: Server}
    ]);

export default injector;
