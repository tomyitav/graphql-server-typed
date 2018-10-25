import {AbstractPubsubManager} from '../graphql/subscriptions/Pubsub/AbstractPubsubManager';
import {AbstractCarsModel} from '../model/cars/AbstractCarsModel';
import {AbstractTrainsModel} from '../model/trains/AbstractTrainsModel';

export interface IAppContext {
	carsModel: AbstractCarsModel;
	trainsModel: AbstractTrainsModel;
	pubsubManager: AbstractPubsubManager;
}
