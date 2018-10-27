import {IAppContext} from '../../interfaces/IAppContext';
import {Train, TrainQueryArgs} from '../../interfaces/types';
import {AbstractTrainsModel} from '../../model/trains/AbstractTrainsModel';

const resolveFunctions = {
	Query: {
		train(_, args: TrainQueryArgs, context: IAppContext): Train[] {
			const trainsModel: AbstractTrainsModel = context.trainsModel;

			return trainsModel.getTrains(args.name);
		}
	}
};

export default resolveFunctions;
