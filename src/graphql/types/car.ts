const schema = `
type Car {
 _id : String
 name: String
}

# the schema allows the following query:
type Query {
  car(name: String): [Car]
}

`;

export default schema;