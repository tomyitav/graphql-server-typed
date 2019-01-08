export interface IPubsubTopics {
  CAR_CHANGED_TOPIC: TopicName
  TRAIN_CHANGED_TOPIC: TopicName
}

export type TopicName = 'car_changed' | 'train_changed'
