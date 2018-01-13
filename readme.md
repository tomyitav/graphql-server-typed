# graphql-server-typed

Create a fully configured, production ready graphql server, using

+ typescript
+ [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)
+ graphql-subscriptions
+ merge-graphql-schemas
+ Angular dependency injection

This project demonstrates how to generate typescript types from graphql schema, using Graphql code generetor library.

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/tomyitav/graphql-server-typed.git
npm install
```

## Starting the server

```
npm run build
npm start
```

The server will run on port 8080. You can change this by editing config file.

## Type generation using gql codegen

```
npm run generate
```

This will automatically generate types in types.d.ts file!
generate command is executed in every build

## Project structure

We use the function `makeExecutableSchema()` from graphql-tools to to combine our
types and resolvers. Instead of passing one large string for our schema, we
split our types and resolvers to multiple files, located in graphql directory in
types and resolvers directories. This way, we avoid schema complexity by using
merge-graphql-schemas:

```js
  import * as path from "path";
  import {makeExecutableSchema} from "graphql-tools";
  import {fileLoader, mergeTypes, mergeResolvers} from "merge-graphql-schemas";
  import {GraphQLSchema} from "graphql";

  const typesArray = fileLoader(path.join(__dirname, '../types'), { recursive: true });
  const resolversArray = fileLoader(path.join(__dirname, '../resolvers'));
  const allTypes = mergeTypes(typesArray);
  const allResolvers = mergeResolvers(resolversArray);
  let schema: GraphQLSchema;
  schema= makeExecutableSchema({
      typeDefs: allTypes,
      resolvers: allResolvers
  });

  export default schema;

```

So as your project grows - you can extend the schema by adding new type in types
directory, and adding matching resolver file in resolvers directory. The schema
is updated automatically.

## Run server in production with Docker

```
npm run build
```

After npm building the project, go to project root directory, open shell and run:
```
docker build -t graphql-server .
```

Instructions about running the container are available [here](https://hub.docker.com/r/tomyitav/graphql-server-typed/)

## Connect to the server from client app

See the following [example](https://github.com/tomyitav/apollo-angular-client-starter) on how to connect to the server using apollo-angular.

