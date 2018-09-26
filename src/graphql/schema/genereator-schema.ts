import * as path from 'path';
import {makeExecutableSchema} from "graphql-tools";
import {fileLoader, mergeTypes} from "merge-graphql-schemas";

const types = mergeTypes(fileLoader(path.join(__dirname, '../types'), {recursive: true}));
export const schema = makeExecutableSchema({
    typeDefs: [types],
    allowUndefinedInResolve: true,
})

export default schema;