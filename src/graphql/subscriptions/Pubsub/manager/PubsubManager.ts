import {AbstractPubsubManager} from "./AbstractPubsubManager";
import {AbstractLogger} from "../../../../core/logger/AbstractLogger";
import {TopicName} from "../../Topics/PubsubTopics";
import {Injectable} from "injection-js";
import {AbstractPubsubFactory} from "../factory/AbstractPubsubFactory";

@Injectable()
export class PubsubManager extends AbstractPubsubManager {

    constructor(protected pubsubFactory: AbstractPubsubFactory, private logger: AbstractLogger) {
        super(pubsubFactory);
    }

    public publish(topic: TopicName, entity: any) {
        this.logger.info('Publishing on topic- ' + topic);
        this.pubsub.publish(topic, entity);
    }
}
