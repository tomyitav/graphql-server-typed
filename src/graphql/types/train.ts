const schema = `
type Train {
 _id : String
 name: String
}

# the schema allows the following query:
type Query {
  train(name: String): [Train]
}

`;

export default schema;