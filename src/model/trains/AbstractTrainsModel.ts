import {Train} from "../../interfaces/types";

export abstract class AbstractTrainsModel {
    public abstract getTrains(name?: string) : Array<Train>;
}