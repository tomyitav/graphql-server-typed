import {PubSubEngine} from 'graphql-subscriptions'
import {TopicName} from '../Topics/IPubsubTopics'

export abstract class AbstractPubsubManager {
  public abstract getPubSub(): PubSubEngine

  public publish(topic: TopicName, entity: any) {
    this.getPubSub().publish(topic, entity)
  }
}
