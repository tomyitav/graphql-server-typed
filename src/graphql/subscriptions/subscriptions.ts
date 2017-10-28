import {PubSub, SubscriptionManager} from "graphql-subscriptions";
import schema from "../schema/schema";
import {PubSubEngine} from "graphql-subscriptions/dist/pubsub";

const pubsub: PubSubEngine = new PubSub();
const subscriptionManager = new SubscriptionManager({schema, setupFunctions: {}, pubsub});

export { subscriptionManager, pubsub };
