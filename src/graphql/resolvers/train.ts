import {TrainQueryArgs, Train} from "../../types";
import {AbstractTrainsModel} from "../../model/trains/AbstractTrainsModel";
const resolveFunctions = {
    Query: {
        train (_, args: TrainQueryArgs, context): Array<Train>{
            const trainsModel: AbstractTrainsModel = context.injector.get(AbstractTrainsModel);
            return trainsModel.getTrains(args.name);
        }

    }
};

export default resolveFunctions;