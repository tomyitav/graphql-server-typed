import {Car} from '../../interfaces/types';

export abstract class AbstractCarsModel {
	public abstract getCars(carName?: string): Promise<Car[]>;
	public abstract updateCarName(_id: string, newName: string): Promise<Car>;
}
