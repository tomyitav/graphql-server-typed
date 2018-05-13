import {TopicName} from "../../Topics/PubsubTopics";
import {PubSubEngine} from "graphql-subscriptions";
import {AbstractPubsubFactory} from "../factory/AbstractPubsubFactory";

export abstract class AbstractPubsubManager {

    protected pubsub: PubSubEngine;
    constructor(protected pubsubFactory: AbstractPubsubFactory) {
        this.pubsub = this.pubsubFactory.getPubSub();
    }

    public getPubSub(): PubSubEngine {
        return this.pubsub;
    }

    public abstract publish(topic: TopicName, entity: any);
}