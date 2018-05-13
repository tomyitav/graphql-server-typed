import {PubSubEngine} from "graphql-subscriptions";

export abstract class AbstractPubsubFactory {
    public abstract getPubSub(): PubSubEngine;
}