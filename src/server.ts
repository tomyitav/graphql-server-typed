import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import {Express} from 'express-serve-static-core';
import {execute, printSchema, subscribe} from 'graphql';
import {graphiqlExpress, graphqlExpress} from 'graphql-server-express';
import {createServer} from 'http';
import {Injectable, Injector} from 'injection-js';
import {SubscriptionServer} from 'subscriptions-transport-ws';
import {AbstractSetting} from './core/config/AbstractSetting';
import {AbstractLogger} from './core/logger/AbstractLogger';
import schema from './graphql/schema/schema';
import {AbstractPubsubManager} from './graphql/subscriptions/Pubsub/AbstractPubsubManager';
import {IAppContext} from './interfaces/IAppContext';
import {AbstractCarsModel} from './model/cars/AbstractCarsModel';
import {AbstractTrainsModel} from './model/trains/AbstractTrainsModel';

@Injectable()
export class Server {
	constructor(private logger: AbstractLogger, private setting: AbstractSetting) {}

	public startServer(injector: Injector) {
		this.logger.info('starting graphql server...');
		const GRAPHQL_PORT = this.setting.config.server.port;
		const WS_PORT = this.setting.config.server.wsPort;
		const graphQLServer = express().use('*', cors());
		const context: IAppContext = this.getAppContext(injector);
		this.initRoutes(graphQLServer, context);
		this.initializeGraphqlServer(graphQLServer, GRAPHQL_PORT);
		this.initializeWS(WS_PORT, context);
	}

	private getAppContext(injector: Injector): IAppContext {
		return {
			carsModel: injector.get(AbstractCarsModel),
			trainsModel: injector.get(AbstractTrainsModel),
			pubsubManager: injector.get(AbstractPubsubManager)
		};
	}

	private initRoutes(graphQLServer: Express, context: IAppContext) {
		const WS_PORT = this.setting.config.server.wsPort;
		graphQLServer.use(
			'/graphql',
			bodyParser.json(),
			graphqlExpress({
				schema,
				context
			})
		);

		graphQLServer.use(
			'/graphiql',
			graphiqlExpress({
				endpointURL: '/graphql',
				subscriptionsEndpoint: `ws://localhost:${WS_PORT}/subscriptions`
			})
		);

		graphQLServer.use('/schema', (req, res) => {
			res.set('Content-Type', 'text/plain');
			res.send(printSchema(schema));
		});
	}

	private async initializeGraphqlServer(graphQLServer: Express, GRAPHQL_PORT: number) {
		await graphQLServer.listen(GRAPHQL_PORT);
		this.logger.info('Server started on port - ' + GRAPHQL_PORT);
	}

	private async initializeWS(WS_PORT: number, context: IAppContext) {
		const websocketServer = createServer((request, response) => {
			response.writeHead(404);
			response.end();
		});

		await websocketServer.listen(WS_PORT);
		this.logger.info('WS server is up on port- ' + WS_PORT);

		const subscriptionServer = SubscriptionServer.create(
			{
				schema,
				execute,
				subscribe,
				onConnect: () => context
			} as any,
			{
				server: websocketServer,
				path: '/subscriptions'
			}
		);
	}
}
