import {Injectable} from "injection-js";
import {AbstractPubsubFactory} from "./AbstractPubsubFactory";
import {PubSub, PubSubEngine} from "graphql-subscriptions";

@Injectable()
export class PubsubFactory extends AbstractPubsubFactory {

    getPubSub(): PubSubEngine {
        return new PubSub();
    }
}