import {Injector} from 'injection-js';
import {IAppContext} from './interfaces/IAppContext';
import {CarsService} from './services/cars/CarsService';
import {TrainsService} from './services/trains/TrainsService';
import {AbstractPubsubManager} from './graphql/subscriptions/Pubsub/AbstractPubsubManager';

export function getContext(injector: Injector): IAppContext {
	return {
		pubsubManager: injector.get(AbstractPubsubManager),
		carsService: injector.get(CarsService),
		trainsService: injector.get(TrainsService)
	};
}
