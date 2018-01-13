import {TopicName} from "../Topics/PubsubTopics";
export abstract class AbstractPubsubManager {
    public abstract publish(topic: TopicName, entity: any);
}