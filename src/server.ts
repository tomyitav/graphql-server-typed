import * as express from "express";
import {graphqlExpress, graphiqlExpress} from "graphql-server-express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import {createServer} from "http";
import {SubscriptionServer} from "subscriptions-transport-ws";
import {printSchema} from "graphql/utilities/schemaPrinter";
import {subscriptionManager} from "./graphql/subscriptions/subscriptions";
import schema from "./graphql/schema/schema";
import {Injectable, Injector} from "@angular/core";
import {AbstractLogger} from "./core/logger/AbstractLogger";
import {Express} from "express-serve-static-core";
import {AbstractSetting} from "./core/config/AbstractSetting";
import {AbstractCarsModel} from "./model/cars/AbstractCarsModel";
import {AbstractTrainsModel} from "./model/trains/AbstractTrainsModel";

@Injectable()
export class Server {

    constructor(private logger: AbstractLogger, private setting: AbstractSetting) {}

    public startServer(injector: Injector) {
        this.logger.logger.info('starting graphql server...');
        const GRAPHQL_PORT = this.setting.config.server.port;
        const WS_PORT = this.setting.config.server.wsPort;

        const graphQLServer = express().use('*', cors());

        this.initRoutes(graphQLServer, injector);

        this.initializeGraphqlServer(graphQLServer, GRAPHQL_PORT);

        this.initializeWS(WS_PORT);
    }

    private initRoutes(graphQLServer: Express, injector: Injector) {
        graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
            schema,
            context: {
                carsModel: injector.get(AbstractCarsModel),
                trainsModel: injector.get(AbstractTrainsModel),
            }
        }));

        graphQLServer.use('/graphiql', graphiqlExpress({
            endpointURL: '/graphql',
        }));

        graphQLServer.use('/schema', (req, res) => {
            res.set('Content-Type', 'text/plain');
            res.send(printSchema(schema));
        });
    }

    private async initializeGraphqlServer(graphQLServer: Express, GRAPHQL_PORT: number) {
        await graphQLServer.listen(GRAPHQL_PORT);
        this.logger.logger.info('Server started on port - ' + GRAPHQL_PORT);
    }

    private async initializeWS(WS_PORT: number) {
        const websocketServer = createServer((request, response) => {
            response.writeHead(404);
            response.end();
        });

        await websocketServer.listen(WS_PORT);
        this.logger.logger.info('WS server is up on port- ' + WS_PORT);

        const subscriptionServer = new SubscriptionServer(
            {
                onConnect: async(connectionParams) => {
                    // Implement if you need to handle and manage connection
                },
                subscriptionManager: subscriptionManager
            },
            {
                server: websocketServer,
                path: '/'
            }
        );
    }
}