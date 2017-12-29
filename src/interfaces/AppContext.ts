import {AbstractCarsModel} from "../model/cars/AbstractCarsModel";
import {AbstractTrainsModel} from "../model/trains/AbstractTrainsModel";

export interface AppContext {
    carsModel: AbstractCarsModel,
    trainsModel: AbstractTrainsModel
}