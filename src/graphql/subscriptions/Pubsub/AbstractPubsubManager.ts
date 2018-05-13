import {TopicName} from "../Topics/PubsubTopics";
import {PubSubEngine} from "graphql-subscriptions";

export abstract class AbstractPubsubManager {

    public abstract getPubSub(): PubSubEngine;

    public publish(topic: TopicName, entity: any) {
        this.getPubSub().publish(topic, entity);
    }
}