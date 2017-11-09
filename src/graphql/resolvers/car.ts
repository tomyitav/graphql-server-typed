import {CarQueryArgs, Car} from "../../types";
import {AbstractCarsModel} from "../../model/cars/AbstractCarsModel";
const resolveFunctions = {
    Query: {
        car (_, args: CarQueryArgs, context) : Array<Car>{
            const carsModel: AbstractCarsModel = context.injector.get(AbstractCarsModel);
            return carsModel.getCars(args.name);
        }

    }
}

export default resolveFunctions;