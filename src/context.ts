import {Injector} from 'injection-js'
import {IAppContext} from './interfaces/IAppContext'
import {CarsService} from '@src/services/cars/CarsService'
import {TrainsService} from '@src/services/trains/TrainsService'
import {AbstractPubsubManager} from './graphql/subscriptions/Pubsub/AbstractPubsubManager'

export function getContext(injector: Injector): IAppContext {
  return {
    pubsubManager: injector.get(AbstractPubsubManager),
    carsService: injector.get(CarsService),
    trainsService: injector.get(TrainsService)
  }
}
