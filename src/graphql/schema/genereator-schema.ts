import * as path from 'path';
import {makeExecutableSchema} from "graphql-tools";
import {fileLoader, mergeTypes, mergeResolvers} from "merge-graphql-schemas";

const getGqlTypeSource = gqlType => gqlType.loc.source.body;

const types = mergeTypes(fileLoader(path.join(__dirname, '../types'), {recursive: true}));
export const schema = makeExecutableSchema({
    typeDefs: [types],
    allowUndefinedInResolve: true,
})

export default schema;