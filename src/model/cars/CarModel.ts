import {AbstractCarsModel} from "./AbstractCarsModel";
import {Car} from "../../interfaces/types";
import {AbstractLogger} from "../../core/logger/AbstractLogger";
import {AbstractPubsubManager} from "../../graphql/subscriptions/Pubsub/AbstractPubsubManager";
import Topics from "../../graphql/subscriptions/Topics/PubsubTopicsImpl";
import {Injectable} from "injection-js";

@Injectable()
export class CarsModel extends AbstractCarsModel{

    private carList: Car[] = [{_id: "1234", name: "sampleCar1"},
                              {_id: "1244", name: "sampleCar2"}];
    constructor(private logger: AbstractLogger, private pubsubManager: AbstractPubsubManager) {
        super();
    }

    public getCars(carName?: string): Promise<Array<Car>> {
        this.logger.info('Returning all cars...');
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

    public updateCarName(_id: string, newName: string): Promise<Car> {
        return new Promise(resolve => {
            for(let car of this.carList) {
                if(car._id === _id) {
                    car.name = newName;
                    this.pubsubManager.publish(Topics.CAR_CHANGED_TOPIC, {carChanged: car});
                    resolve(car);
                    return;
                }
            }
            resolve({});
        })
    }
}