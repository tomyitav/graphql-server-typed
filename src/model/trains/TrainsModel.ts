import {AbstractTrainsModel} from "./AbstractTrainsModel";
import {Train} from "../../interfaces/types";
import {AbstractLogger} from "../../core/logger/AbstractLogger";
import {Injectable} from "injection-js";

@Injectable()
export class TrainsModel extends AbstractTrainsModel{

    constructor(private logger: AbstractLogger) {
        super();
    }

    public getTrains(name?: string): Array<Train> {
        this.logger.info('Returning all trains...');
        return [{
            _id: "1234",
            name: name || "sampleTrain",
        }];
    }
}