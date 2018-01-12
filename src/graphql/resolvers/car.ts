import {CarQueryArgs, Car, UpdateCarNameMutationArgs} from "../../interfaces/types";
import {AbstractCarsModel} from "../../model/cars/AbstractCarsModel";
import {AppContext} from "../../interfaces/AppContext";
import {pubsub} from "../subscriptions/PubsubInstance";

const CAR_CHANGED_TOPIC = 'car_changed';

const resolveFunctions = {
    Query: {
        car (_, args: CarQueryArgs, context: AppContext) : Promise<Array<Car>>{
            const carsModel: AbstractCarsModel = context.carsModel;
            return carsModel.getCars(args.name);
        }
    },

    Mutation: {
        updateCarName(_, args: UpdateCarNameMutationArgs, context: AppContext): Promise<Car> {
            const carsModel: AbstractCarsModel = context.carsModel;
            return carsModel.updateCarName(args._id, args.newName);
        }
    },

    Subscription: {
        carChanged: {
            subscribe: () => pubsub.asyncIterator(CAR_CHANGED_TOPIC),
        },
    },
}

export default resolveFunctions;