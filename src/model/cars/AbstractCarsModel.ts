import {Car} from "../../types";

export abstract class AbstractCarsModel {
    public abstract getCars(carName?: string) : Array<Car>;
}