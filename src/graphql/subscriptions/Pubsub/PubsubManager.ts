import {PubSub} from "graphql-subscriptions";
import {Injectable} from "@angular/core";
import {AbstractPubsubManager} from "./AbstractPubsubManager";
import {AbstractLogger} from "../../../core/logger/AbstractLogger";
import {pubsub} from "./PubsubInstance";
import {TopicName} from "../Topics/PubsubTopics";

@Injectable()
export class PubsubManager extends AbstractPubsubManager {

    private pubsub: PubSub;
    constructor(private logger: AbstractLogger) {
        super()
        this.pubsub = pubsub;
    }

    public publish(topic: TopicName, entity: any) {
        this.logger.instance.info('Publishing on topic- ' + topic);
        this.pubsub.publish(topic, entity);
    }
}
