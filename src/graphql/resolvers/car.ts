import {CarQueryArgs, Car} from "../../types";
import {AbstractCarsModel} from "../../model/cars/AbstractCarsModel";
import {AppContext} from "../../interfaces/AppContext";
const resolveFunctions = {
    Query: {
        car (_, args: CarQueryArgs, context: AppContext) : Array<Car>{
            const carsModel: AbstractCarsModel = context.carsModel
            return carsModel.getCars(args.name);
        }

    }
}

export default resolveFunctions;