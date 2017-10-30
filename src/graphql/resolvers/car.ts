import {CarQueryArgs, Car} from "../../types";
import {AbstractLogger} from "../../core/logger/AbstractLogger";
const resolveFunctions = {
    Query: {
        car (_, args: CarQueryArgs, context) : Array<Car>{
            let logger: AbstractLogger = context.injector.get(AbstractLogger);
            logger.logger.info('Return all cars...');
            return [{
                _id: "1234",
                name: args.name || "sampleCar"
            }];
        }

    }
}

export default resolveFunctions;