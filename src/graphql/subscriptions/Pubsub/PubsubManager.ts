import {PubSub, PubSubEngine} from 'graphql-subscriptions'
import {Injectable} from 'injection-js'
import {AbstractLogger} from '../../../core/logger/AbstractLogger'
import {TopicName} from '../Topics/IPubsubTopics'
import {AbstractPubsubManager} from './AbstractPubsubManager'

@Injectable()
export class PubsubManager extends AbstractPubsubManager {
  protected pubsub: PubSubEngine
  constructor(private logger: AbstractLogger) {
    super()
    this.pubsub = new PubSub()
  }

  public getPubSub(): PubSubEngine {
    return this.pubsub
  }

  public publish(topic: TopicName, entity: any) {
    this.logger.info('Publishing on topic- ' + topic)
    super.publish(topic, entity)
  }
}
