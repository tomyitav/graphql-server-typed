import * as cors from 'cors';
import * as express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {createServer} from 'http';
import {Injectable, Injector} from 'injection-js';
import {AbstractSetting} from './core/config/AbstractSetting';
import {AbstractLogger} from './core/logger/AbstractLogger';
import schema from './graphql/schema/schema';
import {AbstractPubsubManager} from './graphql/subscriptions/Pubsub/AbstractPubsubManager';
import {IAppContext} from './interfaces/IAppContext';
import {AbstractCarsModel} from './model/cars/AbstractCarsModel';
import {AbstractTrainsModel} from './model/trains/AbstractTrainsModel';

@Injectable()
export class Server {
	private app: express.Express;
	private apolloServer: ApolloServer;
	private port: number;
	constructor(private logger: AbstractLogger, private setting: AbstractSetting) {}

	public startServer(injector: Injector) {
		this.logger.info('starting graphql server...');
		this.port = this.setting.config.server.port;
		this.app = express().use('*', cors());
		const context: IAppContext = this.getAppContext(injector);
		this.initServer(context);
	}

	private getAppContext(injector: Injector): IAppContext {
		return {
			carsModel: injector.get(AbstractCarsModel),
			trainsModel: injector.get(AbstractTrainsModel),
			pubsubManager: injector.get(AbstractPubsubManager)
		};
	}

	private initServer(context: IAppContext) {
		this.apolloServer = new ApolloServer({
			schema,
			context
		});
		this.apolloServer.applyMiddleware({app: this.app});

		const httpServer = createServer(this.app);
		this.apolloServer.installSubscriptionHandlers(httpServer);

		httpServer.listen({port: this.port}, () => {
			this.logger.info(
				`🚀 Server is ready at http://localhost:${this.port}${this.apolloServer.graphqlPath}`
			);
			this.logger.info(
				`🚀 Playground is ready at http://localhost:${this.port}${this.apolloServer.graphqlPath}`
			);
			this.logger.info(
				`🚀 Subscriptions is ready at ws://localhost:${this.port}${this.apolloServer.subscriptionsPath}`
			);
		});
	}
}
