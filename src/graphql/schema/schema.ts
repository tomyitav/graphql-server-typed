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
