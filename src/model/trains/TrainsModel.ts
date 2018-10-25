import {Injectable} from 'injection-js';
import {AbstractLogger} from '../../core/logger/AbstractLogger';
import {Train} from '../../interfaces/types';
import {AbstractTrainsModel} from './AbstractTrainsModel';

@Injectable()
export class TrainsModel extends AbstractTrainsModel {
	constructor(private logger: AbstractLogger) {
		super();
	}

	public getTrains(name?: string): Train[] {
		this.logger.info('Returning all trains...');

		const  a 				= 					5;

		return [
			{
				_id: '1234',
				name: name || 'sampleTrain'
			}
		];
	}
}
