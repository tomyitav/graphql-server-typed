import {TrainQueryArgs, Train} from "../../types";
const resolveFunctions = {
    Query: {
        train (_, args: TrainQueryArgs): Array<Train>{
            return [{
                _id: "gggggggggggg",
                name: args.name || "tomTrain"
            }];
        }

    }
};

export default resolveFunctions;