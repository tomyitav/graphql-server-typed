import * as express from 'express'
import {graphqlExpress, graphiqlExpress} from "graphql-server-express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import {createServer} from "http";
import {SubscriptionServer} from "subscriptions-transport-ws";
import {printSchema} from "graphql/utilities/schemaPrinter";
import {subscriptionManager} from "./graphql/subscriptions/subscriptions";
import schema from "./graphql/schema/schema";
import {Injectable, Inject} from "@angular/core";
import {Logger} from "./core/Logger";

@Injectable()
export class Server {

    private logger: Logger;
    constructor(@Inject(Logger) logger: Logger) {
        this.logger = logger;
    }

    public startServer() {
        this.logger.getLogger.info('gggggg');
        const GRAPHQL_PORT = 8080;
        const WS_PORT = 8090;

// connectToDb();

        const graphQLServer = express().use('*', cors());

        graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
            schema,
            context: {}
        }));

        graphQLServer.use('/graphiql', graphiqlExpress({
            endpointURL: '/graphql',
        }));

        graphQLServer.use('/schema', (req, res) => {
            res.set('Content-Type', 'text/plain');
            res.send(printSchema(schema));
        });

        graphQLServer.listen(GRAPHQL_PORT, () => console.log('server started'));

// WebSocket server for subscriptions
        const websocketServer = createServer((request, response) => {
            response.writeHead(404);
            response.end();
        });

        websocketServer.listen(WS_PORT, () => {
            console.log('WS server is up');
        });

        const subscriptionServer = new SubscriptionServer(
            {
                onConnect: async (connectionParams) => {
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