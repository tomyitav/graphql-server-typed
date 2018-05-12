import {PubSub} from "graphql-subscriptions";
import {AbstractPubsubManager} from "./AbstractPubsubManager";
import {AbstractLogger} from "../../../core/logger/AbstractLogger";
import {TopicName} from "../Topics/PubsubTopics";
import {Injectable} from "injection-js";

@Injectable()
export class PubsubManager extends AbstractPubsubManager {

    constructor(private logger: AbstractLogger) {
        super();
    }

    public getPubSub(): PubSub {
        return this.pubsub;
    }

    public publish(topic: TopicName, entity: any) {
        this.logger.instance.info('Publishing on topic- ' + topic);
        this.pubsub.publish(topic, entity);
    }
}
