import {GraphQLSchema} from 'graphql'
import {makeExecutableSchema} from 'graphql-tools'
import {fileLoader, mergeResolvers, mergeTypes} from 'merge-graphql-schemas'
import * as path from 'path'

const typesArray = fileLoader(path.join(__dirname, '../types'), {recursive: true})
const resolversArray = fileLoader(path.join(__dirname, '../resolvers'))
const allTypes = mergeTypes(typesArray)
const allResolvers = mergeResolvers(resolversArray)
let schema: GraphQLSchema

schema = makeExecutableSchema({
  typeDefs: allTypes,
  resolvers: allResolvers
})

export default schema
