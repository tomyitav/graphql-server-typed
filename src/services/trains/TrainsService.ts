import {Injectable} from 'injection-js'
import {AbstractLogger} from '../../core/logger/AbstractLogger'
import {Train} from '../../interfaces/types'

@Injectable()
export class TrainsService {
  constructor(private logger: AbstractLogger) {}

  public getTrains(name?: string): Train[] {
    this.logger.info('Returning all trains...')

    return [
      {
        _id: '1234',
        name: name || 'sampleTrain'
      }
    ]
  }
}
