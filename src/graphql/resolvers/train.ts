import {TrainQueryArgs, Train} from "../../types";
const resolveFunctions = {
    Query: {
        train (_, args: TrainQueryArgs): Array<Train>{
            return [{
                _id: "1234",
                name: args.name || "sampleTrain"
            }];
        }

    }
};

export default resolveFunctions;