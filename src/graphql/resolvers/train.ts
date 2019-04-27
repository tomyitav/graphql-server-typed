import {IAppContext} from '../../interfaces/IAppContext'
import {Train, QueryTrainArgs} from '../../interfaces/types'
import {TrainsService} from '../../services/trains/TrainsService'

const resolveFunctions = {
  Query: {
    train(_, args: QueryTrainArgs, context: IAppContext): Train[] {
      const trainsService: TrainsService = context.trainsService

      return trainsService.getTrains(args.name)
    }
  }
}

export default resolveFunctions
