import {IAppContext} from '../../interfaces/IAppContext';
import {Train, TrainQueryArgs} from '../../interfaces/types';
import {TrainsService} from '../../services/trains/TrainsService';

const resolveFunctions = {
	Query: {
		train(_, args: TrainQueryArgs, context: IAppContext): Train[] {
			const trainsService: TrainsService = context.trainsService;

			return trainsService.getTrains(args.name);
		}
	}
};

export default resolveFunctions;
