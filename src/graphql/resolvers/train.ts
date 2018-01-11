import {TrainQueryArgs, Train} from "../../interfaces/types";
import {AbstractTrainsModel} from "../../model/trains/AbstractTrainsModel";
import {AppContext} from "../../interfaces/AppContext";
const resolveFunctions = {
    Query: {
        train (_, args: TrainQueryArgs, context: AppContext): Array<Train>{
            const trainsModel: AbstractTrainsModel = context.trainsModel;
            return trainsModel.getTrains(args.name);
        }

    }
};

export default resolveFunctions;