import {AbstractCarsModel} from "../model/cars/AbstractCarsModel";
import {AbstractTrainsModel} from "../model/trains/AbstractTrainsModel";
import {AbstractPubsubManager} from "../graphql/subscriptions/Pubsub/AbstractPubsubManager";

export interface AppContext {
    carsModel: AbstractCarsModel,
    trainsModel: AbstractTrainsModel,
    pubsubManager: AbstractPubsubManager,
}