import {PubsubTopics} from "./PubsubTopics";
import {PubSubEngine} from "graphql-subscriptions";
export abstract class AbstractPubsubManager {
    public abstract publish(topic: string, entity: any);
    public abstract get topics(): PubsubTopics;
}