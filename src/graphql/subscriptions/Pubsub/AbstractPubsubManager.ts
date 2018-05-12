import {TopicName} from "../Topics/PubsubTopics";
import {PubSub} from "graphql-subscriptions";

export abstract class AbstractPubsubManager {

    protected pubsub: PubSub;
    constructor() {
        this.pubsub = new PubSub();
    }

    public abstract getPubSub(): PubSub
    public abstract publish(topic: TopicName, entity: any);
}