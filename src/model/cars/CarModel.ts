import {AbstractCarsModel} from "./AbstractCarsModel";
import {Car} from "../../types";
import {Injectable} from "@angular/core";
import {AbstractLogger} from "../../core/logger/AbstractLogger";

@Injectable()
export class CarsModel extends AbstractCarsModel{

    constructor(private logger: AbstractLogger) {
        super();
    }

    public getCars(carName?: string): Array<Car> {
        this.logger.logger.info('Returning all cars...');
        return [{
            _id: "1234",
            name: carName || "sampleCar",
        }];
    }
}