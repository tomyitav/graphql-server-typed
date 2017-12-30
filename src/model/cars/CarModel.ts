import {AbstractCarsModel} from "./AbstractCarsModel";
import {Car} from "../../types";
import {Injectable} from "@angular/core";
import {AbstractLogger} from "../../core/logger/AbstractLogger";

@Injectable()
export class CarsModel extends AbstractCarsModel{

    private carList: [Car] = [{_id: "1234", name: "sampleCar1"},
                              {_id: "1244", name: "sampleCar2"}]
    constructor(private logger: AbstractLogger) {
        super();
    }

    public getCars(carName?: string): Promise<Array<Car>> {
        this.logger.instance.info('Returning all cars...');
        return new Promise(resolve => {
            let filteredCarsList;
            if(carName) {
                filteredCarsList = this.carList.filter(car => car.name === carName);
                resolve(filteredCarsList);
            }
            else {
                resolve(this.carList);
            }
        });
    }
}