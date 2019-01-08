import {AbstractPubsubManager} from '../graphql/subscriptions/Pubsub/AbstractPubsubManager'
import {CarsService} from '../services/cars/CarsService'
import {TrainsService} from '../services/trains/TrainsService'

export interface IAppContext {
  pubsubManager: AbstractPubsubManager
  carsService: CarsService
  trainsService: TrainsService
}
