import {AbstractTrainsModel} from "./AbstractTrainsModel";
import {Train} from "../../types";
import {Injectable} from "@angular/core";
import {AbstractLogger} from "../../core/logger/AbstractLogger";

@Injectable()
export class TrainsModel extends AbstractTrainsModel{

    constructor(private logger: AbstractLogger) {
        super();
    }

    public getTrains(name?: string): Array<Train> {
        this.logger.logger.info('Returning all trains...');
        return [{
            _id: "1234",
            name: name || "sampleTrain",
        }];
    }
}